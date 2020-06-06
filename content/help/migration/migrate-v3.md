---
title: 'Migrating from Padlock (v2) to Padloc (v3)'
date: 2019-09-07
publishDate: 2019-09-07
aliases:
  - /guides/migrate-v3/
  - /help/migrate-v3/
anchors:
  - title: Via Padlock Cloud
    hash: via-padlock-cloud
  - title: Through Export/Import
    hash: through-exportimport
---

With the [release of Padloc 3]({{< relref "blog/padloc-3-is-here.md" >}}) we have
made a major step forward in the development of our product, introducing powerful
new features like shared vaults, two-factor authentication and more! Since the
development of these new features required some major changes in Padloc's application
architecture, automatically updating our existing apps would have been quite complicated,
which is why we decided to release Padloc 3 as a new, separate app instead. Luckily,
upgrading to Padloc 3 is quite easy! Here is how to do it:

{{< note >}}
At this point you may be asking yourself: "**Wait, so which is it - 'Padlock' or 'Padloc'?**".
Well, the short answer is this: With the release of version 3, we changed the name from 'Padlock' to 'Padloc',
So while older versions may still have the "k" in the name, all the cool kids are calling it
**"Padloc"** these days 😎! For more details, check out our [blog post about the Padloc 3 release]({{< relref "blog/padloc-3-is-here.md" >}}).
{{< /note >}}

## Via Padlock Cloud

If you have used Padlock Cloud before to backup and synchronize your data, migrating
your account is as simple as opening the new app and logging in with your existing email
and password. If you've only used the app offline so far, you can either create a temporary
Padlock Cloud account or [use the export/import feature](#through-exportimport).

### Step 1: Make sure your data is all synced up

Before beginning the transition to Padloc 3, it's a good idea to make sure your
Padlock Cloud account is up to date with your data. To do this, open the legacy app and
navigate to the **My Account** page (the little cloud icon on the left). There, you will
see you accounts email address and the time of your last synchronization. Optimally,
the latter should say "a few seconds ago". If it doesn't, just click the sync icon
on the right to trigger a new sync.

{{< figure src="/img/help/migrate-v3/cloud-step1.png" alt="Make sure your Padloc Cloud account is up to date." class="center rounded" >}}

### Step 2: Download/Start Padloc 3

To access the new version, you can either go to [https://web.padloc.app](https://web.padloc.app) or download
one of our native apps from our [downloads page](/downloads/).

{{< figure src="/img/help/migrate-v3/cloud-step2.png" alt="Open the Padloc 3 app" class="center rounded" >}}

### Step 3: Log in with your email and password

Once you've opened the app, you should be presented with a login page. To continue, simply
enter your email address and master password and click **"Login"**.

**Important**: Please make sure
you're using the same email and master password you used in the old app. You can check
which email address you used previously by going to the **My Account** page in the old app
(see the screenshot from the previous step). After you've confirmed your email address
(you'll be sent a confirmation code) you should see the following dialog:

{{< figure src="/img/help/migrate-v3/cloud-step3.png" alt="Log in with your email and password" class="center rounded" >}}

Click **Migrate** and follow the instructions (you may be asked for your password again if you mistyped it previously).

### Step 4: Delete your Padlock Cloud account (or not)

Once your account migration has been completed successfully, you'll be asked if
you want to delete your old account. We recommend that you do this, but you can
also keep it around for now if want. If you select "No", you can delete your
old account later by going to
[https://cloud.padlock.io](https://cloud.padlock.io) and logging in with your
email address (you'll find the option to delete your account under "Advanced
Options").

### Step 5: Make sure you have the latest version installed on all your devices

While the legacy apps will be available for a while longer, it is important to
understand that **you won't be able to synchronize with your Padloc 3 account
with older versions of the app** (v2.7 or older. you'll notice the difference
in the name - the legacy app still has the "k" in the name). So please make
sure you have the latest version of the app installed on all your devices. You'll
find download links for all platforms on our [downloads page](/downloads/).
Once you've verified that all your data has been successfully transferred
to the new app, you may also want to delete any instances of the legacy apps
from your system to avoid mixing the two up (your data will remain available
in the old app until you delete it so it's easy to get confused).

### Step 6. Enjoy Using Padloc 3

That's it! 🎉 We hope you'll enjoy using Padloc 3. If you have any questions, please
don't hesitate to contact us at [support@padloc.app](mailto:support@padloc.app)!

## Through Export/Import

If you've only used Padlock offline so far, you can use the export/import
feature to migrate your data. (If you do have an existing Padlock Cloud account
that you used to backup/synchronize your data, we recommend that you use the
[method described above](#via-padlock-cloud).)

### Step 1: Export Your Data

Let's start by exporting your existing data from the old app.
To do this, start the app and go to the settings screen. There, click **"Export..."**
and select the option to export your data as an encrypted file. Choose a
password and save the file to your device.

{{< figure src="/img/guides/export-legacy.png" alt="Encrypted Export" class="center rounded" >}}

### Step 2: Download/Start Padloc 3

To access the new version, you can either go to [https://web.padloc.app](https://web.padloc.app) or download
the native app from our [downloads page](/downloads/).

### Step 3: Create A Padloc 3 Account

If you don't have a Padloc 3 account yet, create one now. To do this, simply
click on **"Sign Up Now"** and follow the instructions.

{{< figure src="/img/help/migrate-v3/signup.png" alt="Create a Padloc 3 account" class="center rounded" >}}

### Step 4: Import Your Data

Now you're ready to import your data into your Padloc 3 account! Go
to settings and click **"Import..."**. Select the file you created in step 1 and follow
the instructions.

{{< figure src="/img/guides/import.png" alt="Encrypted Export" class="center rounded" >}}

### Step 5: Make sure you have the latest version installed on all your devices

While the legacy apps will be available for a while longer, it is important to
understand that **you wont be able to synchronize with your Padloc 3 account
with older versions of the app** (v2.7 or older. you'll notice the difference
in the name - the legacy app still has the "k" in the name). So please make
sure you have the latest version of the app installed on all your devices. You'll
find download links for all platforms on our [downloads page](/downloads/).
Once you've verified that all your data has been successfully transferred
to the new app, you may also want to delete any instances of the legacy apps
from your systems to avoid mixing the two up (your data will remain available
in the old app until you delete it so it's easy to get confused).

### Step 6. Enjoy Using Padloc 3

That's it! 🎉 We hope you'll enjoy using Padloc 3. If you have any questions, please
don't hesitate to contact us at [support@padloc.app](mailto:support@padloc.app)!
