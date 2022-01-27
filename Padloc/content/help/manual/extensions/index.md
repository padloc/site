---
title: Browser Extensions
weight: 9
icon: browser
anchors:
    - hash: getting-started
      title: Getting Started
    - hash: browsing-editing--more
      title: Browsing, Editing & More
    - hash: website-matching
      title: Website Matching
    - hash: filling-form-elements
      title: Filling Form Elements
---

The Padloc browser extension is a convenient and secure way to access your data right were
you most often need it - in your web browser.

## Getting Started

{{< note >}}
The Padloc extension is currently only available for **Firefox** and
**Chrome**. Support for Safari, Edge and other browsers coming soon!
{{< /note >}}

To get started using the Padloc extension in your browser, simply download and
install it from the extension store of your browser. You can find direct links
for all browsers on our [downloads page](/downloads#browser-extensions).

Once you've installed the extension, it'll appear as a greyed out icon in the
top-right corner of your browser window (next to the url bar). Click it to
bring up the extension popup, then log in with your username and password.
Don't have an account yet? No problem! You can create one right from the extension.
Simply click on **Sign Up Now** and follow the instructions. For a detailed walkthrough on
how to create a Padloc account, check out the [Creating An Account]({{< relref "../create_account" >}})
section of the manual.

{{< figure caption="The extension shows up as an icon next to the url bar." >}}
{{< img src="login.png" >}}
{{< /figure >}}

## Browsing, Editing & More

Once you've logged in, you'll be able to browse your data, create and edit vault items
and basically do everything you can also do in the native app or web interface! The
extension is basically a full-featured password manager app right in your browser! To
learn more about all the things you can do in Padloc check out our comprehensive [User Manual]({{< relref ".." >}})!

## Website Matching

While you're browsing the Internet, Padloc will automatically match the site
you are on with the appropriate items in your vaults. To make sure Padloc can
find the right items for any given site, make sure to always fill out the {{<
icon "globe-americas" >}} **URL** field in your vault items.

Whenever you're on a site that matches the url of one of your vault items, you will
see a little badge next to the Padloc icon. Clicking on the icon will bring
your directly to a list of all matching items.

{{< figure caption="Padloc will automatically find any matching vault items for the site your on." >}}
{{< img src="website-matching.png" >}}
{{< /figure >}}

## Filling Form Elements

The best thing about having access to your data right inside your browser is that
this makes filling out some forms incredibly convenient! There are three ways
to fill form fields with data from your Padloc vaults:

### Drag & Drop

Probably the most intuitive way to copy data from your vaults into form fields is
through Padloc's **Drag & Drop** feature! It's just as easy as it sounds:

1. Open the extension popup (unlocking the app if you have to) and find the item
   you're looking for.
2. **Click and hold** the field you'd like to copy (this works from both the list view and the detail view).
3. **Drag** the field over the form element you'd like to insert the value into (if the form
   field is covered by the popup, simply move the mouse outside of the popup to collapse it).
4. **Drop** the field into the form element by releasing the mouse.

### Context Menu

Another way to fill out form elements is via the right-click context menu of your browser.
Here is how it works:

{{< note >}}
**Note**: This only works for items that were [matched](#website-matching) with the current site.
{{< /note >}}

1. Right-click on the form element you'd like to fill.
2. Look for the matched vault item in the context menu, then hover over it with your mouse
   to reveal all the available fields (if the item is greyed out, you may have to unlock the extension
   first).
3. Click the appropriate field to insert the value.

{{< figure caption="The Padloc extension allows you to fill form elements right from the context menu." >}}
{{< img src="fill-context-menu.png" >}}
{{< /figure >}}

### Copy & Paste

Last but not least: If the options mentioned above don't work for you for some reason there
is always the good old **Copy & Paste** feature!

1. Open the extension popup (unlocking the app if you have to) and find the item
   you're looking for.
2. Click on the desired field to copy its value to the clipboard (in the detail view, click the {{< icon "copy" >}}
   icon).
3. Right click on the target form field and click **paste**.

{{< figure caption="Simple copy & paste is always a reliable way to fill form elements." >}}
{{< img src="fill-copy-paste.png" >}}
{{< /figure >}}
