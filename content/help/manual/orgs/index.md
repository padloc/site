---
title: Organizations & Shared Vaults
weight: 4
icon: users
anchors:
    - hash: creating-an-organization
      title: Creating An Organization
    - hash: managing-members
      title: Managing Members
    - hash: shared-vaults
      title: Shared Vaults
    - hash: assigning-permissions
      title: Assigning Permissions
    - hash: groups
      title: Groups
    - hash: renaming-your-organization
      title: Renaming Your Organization
    - hash: managing-your-subscription
      title: Managing Your Subscription
    - hash: updating-billing-info
      title: Updating Billing Info
    - hash: rotating-cryptographic-keys
      title: Rotating Cryptographic Keys
---

Organizations are a great way to organize, manage and share data between Padloc
users. Use cases range from simple family accounts to teams, companies or any
other kind of institution or group that has the need store store and share
sensitive information between multiple people. Using organizations, you have
fine-grained control of who can access, edit and share certain information.
Padloc achieves this without requiring you to explicitly trust our servers,
your network provider or anyone who might be listening in on the connection.
If you want to learn more about how we make sure that your data is only visible
to the people it is meant for, check out our [security whitepaper]({{< param
"security_whitepaper_url" >}}).

## Creating an organization

To create an organization, select {{< icon "plus" >}} **New Organization** from
the main menu. You'll be given the option between the **Family**, **Team** and
**Business** plans, which vary in a few key aspects. For demonstration purposes
we'll be choosing the **Team** plan. Pick whatever plans seems right for you
and don't worry, all plans have a 30 day trial period so you can give it a test
ride without having to provide any billing info.

{{< figure caption="Choose whatever plan seems right for you. Don't worry, they're all free for the first 30 days!" >}}
{{< img src="create_org_team.png" >}}
{{< /figure >}}

Upon successfully creating your organization, Padloc will take you to the organizations
management page. To get you started it will also have created a "Main" vault
and, if you have selected the **Team** or **Business** plan, a Group called "Everyone".

## Managing Members

### Adding New Members

Adding a new member is a multi-step process establishing a cryptographic
handshake that will allow both the new member and the organization to verify
each others identities and safely encrypt data in a way that will allow all
all authorized parties to access it simultaneously. To invite a new member to
the organization, go to the **Members** tab of the organizations management
page and click the button labeled {{< icon "plus" >}} **Invite New Members**. Then
enter the email address of the person you'd like to invite and click submit.
To invite multiple people at once, type in all their email address, separated
by a comma or space.

{{< figure caption="Invite new members by entering their email address and clicking Submit." >}}

<div class="img-grid">
   {{< img src="org_add_member_1.png" >}}
   {{< img src="org_add_member_2.png" >}}
</div>
{{< /figure >}}

Once you've created an invite, it will show up in the **Members** tab. As a
security precaution, invites are only valid for 12 hours so make sure you
complete the process before then. The recipient of the invite will receive an
email asking them to accept the invite. Following the embedded link will bring
up a confirmation dialog. (If they don't have a Padloc account yet, they'll
have to go through the [signup process]({{< relref "create_account" >}})
first).

{{< figure caption="Invitees will have to enter a confirmation code that you'll have to communicate to the directly." >}}
{{< img src="confirm_invite.png" >}}
{{< /figure >}}

This point they will have to enter a confirmation code, which is the same
alphanumeric code displayed on your end. As mentioned before, organizations
and shared vaults are designed in a way that do not require explicitly trusting
whoever is hosting the server (in this case, us). The confirmation code plays
an important part in this as it is never send to the server in plain text and
only visible to you, the organization owner. You will have to communicate this
code to the invitee directly. We recommend using a channel other than email,
like a text message, in person or by phone, but how you do this is up to you.

Once they have entered the correct code and accepted the invite, you'll be notified
by email. All that is left to do then is to confirm their membership by clicking
{{< icon "user-plus" >}} **Add Member** and choosing which groups and vaults they
have access to (more about groups and managing vault access below).

{{< figure caption="After they have accepted the invite, you can confirm their membership and define their permissions." >}}

<div class="img-grid">
   {{< img src="complete_invite.png" >}}
   {{< img src="org_edit_member.png" >}}
</div>
{{< /figure >}}

### Deleting Members

To delete an organization member, select them from the list in the **Members** tab,
then click the {{< icon "ellipsis-h" >}} button in the top right and select
**Delete** in the subsequent dialog.

When a Padloc user is removed from an organization, they automatically lose
access to all of the organization's vaults. **Note however that vault data may
still be stored locally on any devices they had used to log into their account
and there is now way to be sure they haven't copied some of the data in some
other way, so may want to take measures to account for this, like changing any
passwords they had access to.**

### Suspending and Un-suspending Members

Suspended members retain their assigned permissions and group memberships but
can no longer utilize their permissions, meaning they will not receive any
updates to vault data or be able to make any changes themselves.

Members will automatically be suspended if they recover their account after
losing their master password or when the organization's cryptographic keys are
rotated, in which case all organization members will be suspended except the
organization owner.

You can manually suspend an organization member by selecting them from the list
in the **Members** tab, then clicking the {{< icon "ellipsis-h" >}} button in
the top right and selecting **Suspend** in the subsequent dialog.

To un-suspend a member, select them from the list in the **Members** tab and click
**Unsuspend**. You will then have to reconfirm their membership by undergoing the
same process you did when a [adding them](#adding-new-members).

### Roles

There are three different roles members can fill in an organization.

The **owner** is the user who created the organization and is the only one who
can add, suspend and un-suspend members, appoint admins and change the
organization's settings.

**Admins** can create groups and vaults and assign read and write permissions
for vaults. To make someone an admin, select them from the **Members** tab,
then click the {{< icon "ellipsis-h" >}} icon and select **Make Admin**. The
reverse can be done by following the same steps but instead selecting **Remove
Admin**.

**Regular members** don't have any permissions other than the read and write
permissions assigned to them for specific vaults either directly or through
groups.

## Shared Vaults

Your organization's vaults is where all your data is stored and are designed to
share information among certain members. By default every organization comes with a
**Main** vault. This vault is merely created for your convenience and doesn't
serve any special purpose, but it may be a good place to store data all or most
of your organization's members should have access to. You can add more vaults
to organize your data into more specific segments for more fine-grained control
over who has access to what data. For example you could have a vault that
contains all your finance and accounting related data, one with all your social
media accounts and so on. To create a new vault, navigate to the **Vaults** tab
and click the button labeled {{< icon "plus" >}} **New Vault**.

{{< figure caption="When you create a new Vault, you can choose a vault name and define permissions." >}}
{{< img src="create_vault.png" >}}
{{< /figure >}}

Enter the name of your new vault in the input on the top. You can also define
who can read and/or edit vault data by assigning permissions to organization
members directly or indirectly through groups (more about this in the [Managing
Permissions](#managin-permissions) section). To add the vault to your organization,
click **Save**.

You can edit the name and permissions for a vault in the same way by selecting
it from the list in the **Vaults** tab.

To delete a vault and all the data contained within it simply click the {{<
icon "trash-alt" >}} icon in the top right corner.

## Assigning Permissions

Organizations have a simple yet powerful permissions system that allows you to
define who can read, edit and manage vaults. Read and write permissions can
be assigned to members directly or indirectly through groups.

### Via the Members tab

In the **Members** tab, select the member you'd like to assign permissions to.
Then under **Vaults,** simply adjust the **read** and **write** permissions for
each vault. Click **Save** to commit the changes.

From here, you can also select which groups this person should be part of. As
you may have guessed, adding an organization member to a group will give them
all the permissions assigned to that group. To learn more about who to create
and manage groups, check out the [Groups](#groups) section.

### Via the Vaults tab

In the **Vaults** tab, select the vault you'd like to assign permissions for.
Then simply adjust the **read** and **write** permissions for each member and
group. Click **Save** to commit the changes.

{{< figure caption="Vault permissions can be assigned via the Vaults or the Members tab." >}}

<div class="img-grid">
   {{< img src="org_edit_member.png" >}}
   {{< img src="create_vault.png" >}}
</div>
{{< /figure >}}

## Groups

{{< note >}}
This feature is only available in the **Team** and **Business** plans.
{{< /note >}}

Groups are a great way to organize your company or team into certain segments
based on their job description, level of clearance or any other criteria you
may come up with. For example, your groups could reflect the departments in
your company, like **Management**, **Accounting**, **Engineering** etc, but how
you use them is ultimately up to you.

Just like regular organization members, groups can be assigned read and write
permissions to a certain subset of the organization's vaults, which are then
transferred to all of the members within the group. Vault permissions are additive,
which means that an organization member has the read or write permission
to a certain vault if they are part of **any** group that has that permission **or** that
permission is assigned to them directly (see [Assigning Permissions](#assigning-permissions)).

By default, every organization comes with the **Everyone** group. This group is
merely created for your convenience and doesn't serve any special purpose.
Feel free to repurpose or delete it.

To create a new group, navigate to the **Groups** tab and click the button labeled
{{< icon "plus" >}} **New Group**. Enter the group's name into the input element
on the top and select the which organization members should be part of this group,
then click **Save** to create it.

Editing groups works in much the same way. Simply select the group from the list,
make your changes and click **Save**.

{{< figure caption="To edit a group, simply go to the Groups tab and select it from the list." >}}
{{< img src="org_edit_group.png" >}}
{{< /figure >}}

To delete a group, select it from the list in the **Groups** tab, then click
the {{< icon "trash-alt" >}} icon in the top right corner of the dialog.
Naturally, deleting a group will also remove all permissions assigned through
that group.

## Renaming Your Organization

To change your organization's name, navigate to the **Settings** tab and click the button
labeled **Change Organization Name**. Then simply enter the new name and click **Save**.

## Managing Your Subscription

Your organization's subscription status and billing info can be found in the
**Settings** tab. The **Subscription** section shows your current plan, your
annual subscription fee and your organization's usage and quota for
{{< icon "users" >}} **Members**, {{< icon "users-cog" >}} **Groups**, {{< icon "cubes" >}} **Vaults**
and {{< icon "box-open" >}} **File Storage**.

To update your subscription, click the {{< icon "pencil-alt" >}} icon to the right of the
name of your current subscription plan and select **Update Plan**. From here you can update the number of seats or
switch to a different plan by clicking on the {{< icon "pencil-alt" >}} icon.

To cancel your subscription, again click the {{< icon "pencil-alt" >}} icon to the right of the
name of your current subscription plan and select **Cancel Subscription**. Your subscription will then

{{< figure caption="You can edit your organization's subscription and billing info from the Settings tab." >}}

<div class="img-grid">
   {{< img src="org_settings_1.png" >}}
   {{< img src="org_edit_subscription.png" >}}
</div>
{{< /figure >}}

## Updating Billing Info

You billing info can also be updated from the **Settings** tab. Simply click the {{< icon "pencil-alt" >}} icon
in the **Billing Info** section, then make the desired changes and click **Save**.

## Rotating Cryptographic Keys

When you create an organization, Padloc will generate a set of cryptographic
keys that are used for signing and verifying the identity of its members.
These keys are protected by a strong encryption scheme and only accessible to
the organization owner (this is why only the owner can invite and add members).

To ensure the integrity of the cryptographic contracts that protect all
communication between organization members, it is important that these keys
remain secret to anyone but the organization owner. Should you as the
organization owner have any reason to believe that your Padloc account may have
been compromised in any way, you can generate a new set of keys via the
**Rotate Cryptographic Keys** option in the **Settings** tab.

After rotating your organization's cryptographic keys, all the organization's
members except the owner will be suspended and will have to be reconfirmed (see
[Suspending and Un-suspending Members](#suspending-and-un-suspending-members)).
