---
title: Vaults & Vault Items
weight: 3
icon: cubes
anchors:
    - hash: creating-vault-items
      title: Creating Vault Items
    - hash: editing-vault-items
      title: Editing Vault Items
    - hash: generating-passwords
      title: Generating Passwords
    - hash: deleting-items
      title: Deleting Items
    - hash: moving-items-between-vaults
      title: Moving Items Between Vaults
    - hash: tags
      title: Tags
    - hash: favorites
      title: Favorites
    - hash: attachments
      title: Attachments
    - hash: creating-new-vaults
      title: Creating New Vaults
---

Vaults are where all your data is stored within Padloc. You can imagine them as secure folders
that can hold an arbitrary number of entries (called **Vault Items**, more about those below). Vaults
are protected by strong, state of the art encryption and can only accessed by you (and other
Padloc users you explicitly give access). Not even we can read what's inside, even if we wanted to!

After [creating your Padloc account]({{< relref "create_account" >}}), you'll start off with a
single Vault called "My Vault". This vault is meant only for you and is where you'll to store
all your personal data. For a lot of users, one Vault will be more than enough, as it can hold
an arbitrary number or items (given you have the Premium plan) and there are plenty of ways to
organize and discover items within it (you can read more about that in the
[Searching & Filtering]({{< relref "search" >}}) section). If you want to learn about how to create
new Vaults and share them with other Padloc users, check out [Organizations & Shared Vaults]({{< relref "orgs" >}}).

{{< figure caption="Looks pretty empty, huh? Don't worry, you'll fill it up in no time!" >}}
{{< img src="list_empty.png" >}}
{{< /figure >}}

## Creating Vault Items

To begin with, your vault will be empty (duh), so we should do something about
that. Let's start by creating your first **Vault Item**!

Vault Items are individual data entries that can hold all kinds of information,
from usernames and password for apps or websites, to credit card numbers, PINs
and even encrypted files! Let's click on the little {{< icon "plus-circle" >}} icon in
the bottom right corner to see what the fuss is all about!

{{< figure caption="Creating a first vault item is a breeze. If only everything in life were that easy!" >}}
{{< img src="create_item.png" >}}
{{< /figure >}}

Look at all those options! We didn't lie when we said that Padloc can store all
kinds of information. In fact, you have absolute freedom in deciding what kind
of data your vault items should hold. The options presented here are merely
predefined templates provided for your convenience and you can always add and
remove data as the mood strikes you (more about how that works in a moment).
Notice that you can also choose which Vault to save the item to. We only have
one Vault at this point so that one will have to do (to learn how to create new
Vaults and share them with others, check out [Organizations & Shared
Vaults]({{< relref "orgs" >}})). Let's select **Website / App** and see where
that get us. Click the button labeled **Create** to continue.

{{< figure caption="What should we enter first? Our Gmail account? Or maybe Twitter?" >}}
{{< img src="edit_new_item.png" >}}
{{< /figure >}}

Now we're getting somewhere! Since we chose the **Website / App** template, Padloc
has added the fields **Username**, **Password** and **URL** for us. Again, these are just the default
fields for this template. You can add and remove fields and edit field names at any
time. For now, let's just fill this out and click **Save**. Don't forget
to add an item name by filling out the field in the top!

{{< figure caption="Phew, that was hard work. But so worth it!" >}}
{{< img src="vault_item.png" >}}
{{< /figure >}}

There you go, your first vault item! But if you think we're done here you
couldn't be more wrong! We've only scratched the surface...

{{< note >}}
The **Free** plan allows you to store up to **50** items in your Vault. For
unlimited items, check out the **Premium**, **Family**, **Team** or
**Business** plans!
{{< /note >}}

## Editing Vault Items

To edit an item, simply click the little {{< icon "pencil-alt" >}} icon in the bottom right.

{{< figure caption="Wait, have we been here before?" >}}
{{< img src="edit_item.png" >}}
{{< /figure >}}

Simple, right? Apart from editing your existing fields, you can **reorder**
them by grabbing them by the {{< icon "bars" >}} icon and drag & dropping them
where you want them to go, and **delete** fields by clicking the {{< icon
"minus-circle" >}} icon. To add a field - you guessed it - click the button
labeled {{<icon "plus" >}} **Field**.

Once you're done making your changes, click **Save** or back out
and discard all changes by clicking **Cancel**.

## Generating Passwords

This is where it gets interesting! You may have noticed that the password we
chose for our Reddit account is ... well ... not particularly strong. But we've got
Padloc to remember all our passwords now so there is no excuse for abusing our
pet names for this purpose anymore. Let's change this to something more worthy of
the name "password". Padloc can help us with this by generating a random password
for us. Let's see how that works! See the little {{< icon "dice" >}} icon next
to the password field? (Those are dice in case you didn't recognize it)
Clicking it will bring up the **Password Generator**.

{{< figure caption="Padloc's password generator is a powerful tool to help you keep all your accounts secure." >}}
{{< img src="password_generator.png" >}}
{{< /figure >}}

You can choose between a random passphrase similar to the one suggested to you
during the [signup process]({{< relref "create_account#step-3-choose-your-master-password" >}})
or a string of random characters. A passphrase will be easier to copy manually
in cases where you don't have the option to copy & paste but some websites have
very specific password requirements you might have to go with the **random string** option
where you can choose what kind of characters you be used in the password. If for some
reason the generated password doesn't work for you you can regenerate it by clicking
on the current output.

Once you're happy with the result, click **Use** and the generated password
will be automatically copied into the appropriate field. Or you choose **Discard**
and leave your password as-is.

## Deleting items

Items can be deleted in two ways: You can delete individual items by entering
edit mode (the {{< icon "pencil-alt" >}} icon, remember?) and clicking the **Delete** Button
or you can delete multiple items at once by going to the list view, clicking the
{{< icon "check-double" >}} icon to enter select mode and selecting all the items
you want to delete. Once you've selected all the items you'd like to get rid of,
click the {{< icon "trash" >}} button get delete them all.

{{< figure caption="The multi-select function in the list view allows you to delete multiple items at once." >}}
{{< img src="multi_select.png" >}}
{{< /figure >}}

## Moving items between vaults

Once you have more than one vault, you can easily move items between them. To
do this, simply enter edit mode and click the {{< icon "share" >}} **Move** button.
Same as with deleting items, you can move multiple items at once via the
multi-select mode in the list view.

## Tags

Tags are a simple but powerful way to organize items by type, areas of use or
any other criteria you can come up with. This not only provides additional
context but also makes item more discoverable (even across multiple vaults). To
add a tag to an item, enter edit mode and click on the {{< icon "add" >}} **Add
Tag** input and start typing. Hit enter or click on one of the suggested tags
to add it.

{{< figure caption="Tags are a simple but powerful way to organize your items." >}}
{{< img src="add_tag.png" >}}
{{< /figure >}}

You can add as many tags to an item as you want. Once a tag has been added to
any item, it will show up in the menu under "Tags". For more info on how to filter
items by tags an other criteria, check out the [Searching & Filtering]({{< relref "search" >}})
section of the manual.

## Favorites

To add an item to your favorites, simply click the {{< icon "star" >}} icon
next to the item name (you don't have to go into edit mode for this). Once
favorited, an item will show up under **Favorites** in the main menu and will be
highlighted in the list view. To remove an item from your favorites, simply
click the {{< icon "star" >}} icon again.

## Attachments

{{< note >}}
Adding Attachments is one of the advanced features only available in the **Premium**,
**Family**, **Team** or **Business** plans. If you want to give it a test drive, you can [start
a free trial]({{< param "get_started_url" >}}) now!
{{< /note >}}

Fields allow you store all kinds of text-based information within your vault
items, but sometimes that isn't enough. After all, a lot of sensitive
information is stored within pdf documents, spreadsheets, photos and all kinds
of other files. Attachments allow you to securely store those documents
alongside your vault items.

To attach a file to a vault item, simply click the {{< icon "paperclip" >}}
**Attachment** icon in edit mode and select the file you'd like to store.

{{< figure caption="Use attachments to store PDFs, spread sheets and other documents alongside your items!" >}}
{{< img src="upload_attachment.png" >}}
{{< /figure >}}

You can store any kind of file within Padloc as long as it is within the **5
MB** size limit and you can add as many as many attachments as you want!

## Creating New Vaults

[Tags](#tags) and [Favorites](#favorites) should me more than enough to
organize your vault items within your private vault. Creating additional vaults
is meant primarily for the purpose of organizing and sharing items among
multiple Padloc users. To create more vaults, you'll first have to create an
organization to attach them to. To learn more about how this works, check out
the [Organizations & Shared Vaults]({{< relref "orgs" >}}) section of the
manual.
