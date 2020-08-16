---
title: "Host Your Own Padloc Instance"
icon: server
anchors:
    - title: Prerequisites
      hash: prerequisites
    - title: Basic Setup
      hash: basic-setup
    - title: Adding A Reverse Proxy
      hash: adding-a-reverse-proxy
    - title: Configuring Padloc
      hash: configuring-padloc
    - title: Deploying Your Padloc Instance
      hash: deploying-your-padloc-instance
---

As a cloud-based password manager, Padloc allows you to access your data
anywhere, anytime, be it from our desktop client, our Android or iOS app or
directly through the browser. While our online-first approach brings a
lot of advantages like convenience, portability and reduced risk of data loss,
it also comes with potential security and privacy implications.

As custodians of your most sensitive and private data and we recognise the
immense responsibility that comes with this, and Padloc is built from the
ground up with a focus on security, privacy and transparency. In fact, Padloc
is designed in a way that not even we can access to any of your secrets, even
if we wanted to!

Nevertheless, we know that for many people storing their data - encrypted or not -
on a server they don't control seems like a dangerous idea. We get it! That's
why we want to give people the option to run Padloc on their own terms, on
a server they alone have access to! The following guide will show you how
to deploy your own instance of the Padloc server and web app.

{{< note >}}
Self-hosting Padloc is free for personal use and non-profit organizations.
For a commercial license, please contact us at sales@padloc.app!
{{< /note >}}

## Prerequisites

Although there are a couple of ways you can deploy your own Padloc instance,
using [Docker](https://docker.com) is definitely the easiest and most robust
way. Don't worry though, you won't need any previous experience with Docker -
setting it up is relatively easy and we'll explain everything step-by-step.
Before we get started, please make sure you...

-   have a machine to run Padloc on (you can use your personal computer to test
    out some of the steps but you'll need a server if you really want to
    use Padloc productively).
-   have [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.
-   have a SSL certificate or know how to get/make one.
-   have a domain and know how to point it to your server.

**Please note:** While we are doing our best to make deploying your own Padloc instance
as easy as possible, some technical knowledge will be required. Specifically,
you'll need to be somewhat comfortable with using the terminal and have at least
a basic understanding of server technology and how to provision and manage a server.

## Basic Setup

To run the Padloc server and web app, we'll be using the
[padloc/server](https://hub.docker.com/r/padloc/server) and
[padloc/pwa](https://hub.docker.com/r/padloc/pwa) docker images (PWA stands for
[Progressive Web
App](https://en.wikipedia.org/wiki/Progressive_web_application) in case you're
wondering). Docker compose will allow us to configure and deploy both services
with a single command. First, we'll have to add a little configuration
though. Let's get started by creating a Docker Compose configuration file.
Choose a directory where you'd like to store your configuration files.
Then inside that directory, create a file named **`docker-compose.yml`** with
the following contents:

{{< figure mode="md" caption="Add a docker-compose.yml file to configure Docker Compose.">}}

```yaml
version: "3"
services:
    server:
        image: padloc/server
        container_name: padloc_server
        ports:
            - ${PL_SERVER_PORT:-3000}:3000
        volumes:
            - ${PL_DB_DIR:-./db}:/data
            - ${PL_ATTACHMENTS_DIR:-./attachments}:/docs
            - ${PL_LOGS_DIR:-./logs}:/logs
        environment:
            - PL_PWA_URL
            - PL_EMAIL_SERVER
            - PL_EMAIL_PORT
            - PL_EMAIL_USER
            - PL_EMAIL_PASSWORD
            - PL_EMAIL_FROM
    pwa:
        image: padloc/pwa
        container_name: padloc_pwa
        ports:
            - ${PL_PWA_PORT:-8080}:8080
        volumes:
            - ${PL_PWA_DIR:-./pwa}:/pwa
        environment:
            - PL_SERVER_URL
```

{{< /figure >}}

This will tell Docker Compose to start the Padloc server and web app in
two separate docker containers.

Let's give it a whirl! Open your terminal and run:

```sh
docker-compose up
```

Congratulations, you're now running your very own Padloc server and web app!
They're listening on ports `3000` and `8080`, respectively, which is the
default configuration.

By default, this will also create folders for the database
files, attachments, logs and the static web app code in the same directory you
ran the command from. We'll talk about how you can configure these things in a bit.

Go ahead and open `http://[your_ip_address]:8080` in your browser. You should
see the following (you may need to wait a minute until the PWA is built):

{{< figure caption="The web app is offline because it doesn't know where to reach the server yet.">}}
{{< img src="pwa-offline.png" >}}
{{< /figure >}}

You'll notice that the app is reporting that it is offline because it doesn't
know where to reach the Padloc server yet. Your browser will also report that the
connection is not secure because we haven't configured SSL yet. Let's fix that!

## Adding a Reverse Proxy

So you've successfully started you own Padloc server and web app, and their
listening on their respective ports. Cool! In practice however, it's never a
good idea to expose these directly to the internet. We also haven't set up SSL
yet, which is crucial for securely hosting your own Padloc instance! Both of
these problems can be solved by using a [reverse
proxy](https://en.wikipedia.org/wiki/Reverse_proxy).

{{< note >}}
If you already have a reverse proxy set up and know how to configure it
to use SSL and route requests to the correct ports, you can skip ahead
to the [Configuring Padloc](#configuring-padloc) section.
{{< /note >}}

Let's configure Docker Compose to serve your Padloc server and web app behind a
[NGINX](https://www.nginx.com/) container. First, we'll need to make a few
adjustments to our `docker-compose.yml` file:

{{< figure mode="md" caption="Add the NGINX service to your docker-compose.yml.">}}

````diff
```yaml
version: "3"
services:
    server:
        image: padloc/server
        container_name: padloc_server
-       ports:
-           - ${PL_SERVER_PORT:-3000}:3000
+       expose:
+           - 3000
        volumes:
            - ${PL_DB_DIR:-./db}:/data
            - ${PL_ATTACHMENTS_DIR:-./attachments}:/docs
            - ${PL_LOGS_DIR:-./logs}:/logs
        environment:
            - PL_PWA_URL
            - PL_EMAIL_SERVER
            - PL_EMAIL_PORT
            - PL_EMAIL_USER
            - PL_EMAIL_PASSWORD
            - PL_EMAIL_FROM

    pwa:
        image: padloc/pwa
        container_name: padloc_pwa
-       ports:
-           - ${PL_PWA_PORT:-8080}:8080
+       expose:
+           - 8080
        volumes:
            - ${PL_PWA_DIR:-./pwa}:/pwa
        environment:
            - PL_SERVER_URL

+   nginx:
+       image: nginx
+       container_name: nginx
+       volumes:
+           - ./nginx.conf:/etc/nginx/nginx.conf
+           - ${PL_SSL_CERT:-./ssl/cert.pem}:/ssl/cert
+           - ${PL_SSL_KEY:-./ssl/key.pem}:/ssl/key
+           - ${PL_SSL_CONF:-./ssl/ssl.conf}:/ssl/ssl.conf
+       ports:
+           - 80:80
+           - 443:443
````

{{< /figure >}}

We've added the `nginx` service which will listen on ports `80` and `443` (the
ports used for http and https, respectively). We've also removed the `port`
directive for the `server` and `pwa` services which means they won't we
accessible from the outside anymore. Instead, we've added the `expose`
directive which will make them accessible only to other services within the
same docker network. The `nginx` service will take care of routing requests
to the appropriate container.

Next, we'll need to add a configuration file for the NGINX server. It should
be named **`nginx.conf`** and be in the same directory as your `docker-compose.yml`:

{{< figure mode="md" caption="The nginx.conf file is used to configure the NGINX service.">}}

```nginx
http {
    # This is required if you want to upload attachments
    client_max_body_size 10m;

    # Redirect all http traffic to https
    server {
        listen 80 default_server;
        listen [::]:80 default_server;
        server_name _;
        return 301 https://$host$request_uri;
    }

    server {
        # We don't need a host name here since we're only
        # dealing with one domain, but you may insert your domain here.
        server_name _;

        # Both server and pwa are served over https
        listen 443 ssl http2;

        # This will resolve to the server instance
        location /server/ {
            proxy_pass http://padloc_server:3000;
            rewrite ^/padloc_server(.*)$ $1 break;
        }

        # This will resolve to the web app
        location / {
            proxy_pass http://padloc_pwa:8080;
            rewrite ^/padloc_server(.*)$ $1 break;
        }

        # SSL certificate
        ssl_certificate /ssl/cert;
        # SSL private key
        ssl_certificate_key /ssl/key;

        # Add this file to add advanced ssl configuration
        # include /ssl/ssl.conf;
    }
}

# This section is required by nginx
events {}
```

{{< /figure >}}

This file will tell NGINX to do the following:

-   Redirect any request request to the `/server/` path to our server instance
-   Redirect all other requests to the web app
-   Serve all requests via https
-   Redirect any http request to https

Note that we're assuming that you want to serve both server and web app from
the same domain, with the server available on the `/server/` path. If you want
to use different paths or serve the pwa and server from two different domains,
you'll have to make the appropriate adjustments to the `nginx.conf` file. For a
quick primer on how to configure NGINX, check out the [NGINX beginners
guide](http://nginx.org/en/docs/beginners_guide.html#conf_structure).

## Configuring Padloc

Most aspects of the Padloc server and web app can be configured via
[environment variables](https://en.wikipedia.org/wiki/Environment_variable).
Instead of setting these variables directly we'll be using a feature in Docker
Compose that allows you to load them from a file. In the same directory as your
`docker-compose.yml` file, create a file named **`.env`**. It should look
like this:

{{< figure mode="md" caption="The .env file contains configuration options for Padloc.">}}

```sh
# GENERAL SETTINGS
# ================
# URL that will resolve to the server instance
PL_SERVER_URL=https://example.com/
# URL that will resolve to the web app
PL_PWA_URL=https://example.com/server/

# SERVER SETTINGS
# ===============
# Port the server instance will listen on
PL_SERVER_PORT=3000
# Directory where database files will be stored
PL_DB_DIR=./db
# Directory where attachment files will be stored
PL_ATTACHMENTS_DIR=./attachments
# Directory where logs files will be stored
PL_LOGS_DIR=./logs

# PWA SETTINGS
# ============
# Port the web app will be served from
PL_PWA_PORT=8080
# Directory where the static code for the web app will be stored
PL_PWA_DIR=./pwa

# EMAIL SETTINGS
# =============
# SMTP host
PL_EMAIL_SERVER=smtp.example.com
# SMTP username
PL_EMAIL_USER=admin@example.com
# SMTP port
PL_EMAIL_PORT=443
# SMTP password
PL_EMAIL_PASSWORD=ruby_bliel
# Always use TLS when sending emails
PL_EMAIL_SECURE=false

# SSL SETTINGS
# ============
# The path to your ssl certificate
PL_SSL_CERT=./ssl/cert.pem
# The path to your ssl private key
PL_SSL_PRIVKEY=./ssl/privkey.pem
# Advanced configuration file
# PL_SSL_CONF=./ssl/ssl.conf
```

{{< /figure >}}

This file is pretty much self-documenting, but let's go over the individual
sections in a little more detail:

### Server and Web App Location

`PL_SERVER_URL` and `PL_PWA_URL` are the locations where you want to host your
padloc server and web app and will tell the server instance and web app where to
reach each other. Depending on which domains/paths you want to use for this
you may need to make a few changes to your `nginx.conf`. The existing configuration
expects the PWA to be served on the root of your host and the server on the `/server/`
path on the same host. So for example let's say the domain you want to host
Padloc on is `padloc.my-server.com`, then your configuration should look as follows:

```sh
PL_PWA_URL=https://padloc.my-server.com/
PL_SERVER_URL=https://padloc.my-server.com/server/
```

### Ports

The `PL_SERVER_PORT` and `PL_PWA_PORT` variables determine which ports the
Padloc server and web app will listen on. Note that this only applies if you're
using the `docker-compose.yml` setup from the [Basic Setup](#basic-setup)
section and have your own reverse proxy setup.

### Directories

Docker containers and their file systems are ephemeral by nature, which means
that any data that is supposed to persists needs to be mirrored to the host
machine. Docker solves this with so called [volumes](https://docs.docker.com/storage/volumes/),
which allow you to mount directories from the host machine into the docker container.

To make it easy for you, we've already added the necessary configuration to
the `docker-compose.yml` from the [Basic Setup](#basic-setup) section and
bound the directory paths to their respective environment variables. To change
the location where certain files are stored on the host machine, simply
change the appropriate value in your `.env` file:

|                      |                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PL_DB_DIR`          | This is where the Padloc database files are stored.                                                                                                                                                                                                                                                                                                                                                   |
| `PL_ATTACHMENTS_DIR` | This is where attachment files are stored (see [Attachments]({{< relref "/help/manual/vaults#attachments" >}})).                                                                                                                                                                                                                                                                                      |
| `PL_LOGS_DIR`        | This is where log files are stored.                                                                                                                                                                                                                                                                                                                                                                   |
| `PL_PWA_DIR`         | This is where the `pwa` service will put the static files for the web app. This doesn't actually need to be persistent since Padloc will always rebuild this if necessary but keeping these files around can speed up container startup in the future. This is also useful if you want to serve the static files through different means instead of having them served by the `pwa` service directly. |

To learn more about data management in Docker, check out [this link](https://docs.docker.com/storage/).

### Email

Padloc requires the ability to send emails for some functionality like
verifying emails during signup, 2-Factor authentication and other things. To
set up email sending you'll need a working SMTP server, which can be
provisioned from a number of providers, like
[Postmark](https://postmarkapp.com/) or [Sendgrid](https://sendgrid.com/). If
you have a Gmail account, you can also [use Googles SMTP
server](https://www.digitalocean.com/community/tutorials/how-to-use-google-s-smtp-server)
for free (with limitations). Or if you just want to test things locally,
[Mailcatcher](https://mailcatcher.me/) is a great tool for faking an SMTP
server for testing purposes.

Once you've set up your SMTP server of choice, fill out the `EMAIL SETTINGS`
section of your config file with the appropriate values. Here is an example of
a configuration using the Gmail SMTP Server:

```sh
PL_EMAIL_SERVER=smtp.gmail.com
PL_EMAIL_USER=iheartkittens@gmail.com
PL_EMAIL_PORT=465
PL_EMAIL_PASSWORD=ruby_bliel
PL_EMAIL_SECURE=true
```

### SSL/TLS

To securely host your Padloc instance, you'll need to configure it to be served
via https. For this, you'll need a SSL certificate. There are a couple of ways
to obtain one, but for most use cases we strongly recommend [Let's
Encrypt](https://letsencrypt.org/), which is free and very easy to set up.

Once you're obtained an SSL certificate to use with your Padloc instance,
all you need to do is update the `SSL SETTINGS` section of the config file
with the paths to your certificate and private key files. For example, if you
used Let's Encrypt to obtain a certificate on linux, your config could look like this:

```sh
PL_SSL_CERT=/etc/letsencrypt/live/padloc.my-server.com/fullchain.pem
PL_SSL_KEY=/etc/letsencrypt/live/padloc.my-server.com/privkey.pem
```

## Deploying your Padloc Instance

That's it! You should be all good to go now. Go ahead and start up your
setup via Docker Compose again:

```sh
docker-compose up -d
```

The `-d` flag will tell Docker Compose to keep all services running in the
background. Both the web app and server are now available publicly at the
locations you've configured. To open the web app, simple open your browser and
visit the URL you've specified in the `PL_PWA_URL` setting.

To stop everything, simply run the following from the same directory:

```sh
docker-compose down
```

{{< note >}}
**Was this guide helpful?** We'd love to hear your feedback! Did you run into any
problems? Is there anything that wasn't explained clearly enough? Anything
you'd like us to add? Let us know at support@padloc.app!
{{< /note >}}
