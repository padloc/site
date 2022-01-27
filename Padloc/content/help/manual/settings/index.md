---
title: Settings
weight: 6
icon: cog
anchors:
    - hash: changing-your-display-name
      title: Changing Your Display Name
    - hash: logging-out
      title: Logging Out
    - hash: changing-your-master-password
      title: Changing Your Master Password
    - hash: auto-lock
      title: Auto Lock
    - hash: managing-your-subscription
      title: Managing Your Subscription
    - hash: deleting-your-account
      title: Deleting Your Account
---

The **Settings** screen contains options for managing your account, your subscription
and billing info and various other things.

## Changing Your Display Name

Your display name is what other Padloc users will see next to your email address
if your are a member of any [organizations]({{< relref "../orgs" >}}). To change
your display name, simply click the {{< icon "pencil-alt" >}} icon in the
**Profile** section, then enter the desired name and click **Save**.

## Logging Out

To log out of your account, click the button labeled **Log Out** under in the **Security**
section. This will delete all your locally stored data and bring you back to the
login screen.

## Changing Your Master Password

To change your master password, click the button labeled **Change Master Password** in
the **Security** section. After entering your current password, enter your new password
and confirm it by retyping it in the input below. To confirm the change, click **OK**.

## Auto Lock

The **Auto Lock** section allows you to configure whether you want to Padloc to
automatically lock after a certain period of inactivity (no interaction with
the app). To enable or disable the feature, simply toggle the button labeled
**Lock Automatically**. To adjust the duration after which the app should
auto-lock, drag the slider right below the button.

{{< figure caption="The settings screen contains options for managing your account and various other things" >}}
{{< img src="settings-2.png" >}}
{{< /figure >}}

## Managing Your Subscription

In the **Subscription** section, you'll see your current plan, your subscription fee
and your quotas for numbers of items in your private vault and amount of file storage.

{{< note >}}
Organizations have separate billing accounts that can be found on the organization's
settings page. To learn more on how to manage your organizations subscription and
billing info, check out the [Organizations & Shared Vaults]({{< relref "../orgs/#managing-your-subscription" >}})
section of the manual.
{{< /note >}}

### Upgrading to the Premium plan

If you are on the free plan, you'll have a limit of 50 vault items and no file
storage (unless you're part of an organization with a paid plan, in which case
you'll have unlimited items). To upgrade to the Premium plan and get unlimited
vault items and the ability to store [attachments]({{< relref "../vaults#attachments" >}}),
click the button labeled **Get Premium** and follow the instructions.

### Canceling your Premium subscription

To cancel your Premium subscription, click the {{< icon "pencil-alt" >}} icon
and select **Cancel Subscription**. You will continue to have access to all premium
features until the end of the current billing cycle, after which your plan will
automatically revert to the **Free** plan.

### Resuming your Premium subscription

If you canceled your **Premium** subscription, you can resume it at any time,
by clicking the {{< icon "pencil-alt" >}} icon and selecting **Resume Subscription**.

### Updating your billing info

To update your payment method, billing address and other billing-related info,
click {{< icon "edit-alt" >}} icon within the **Billing Info** section, then fill
out your updated information and click **Save**.

{{< figure caption="You can update your payment method and other billing information under Billing Info" >}}
{{< img src="settings-billing.png" >}}
{{< /figure >}}

## Deleting Your Account

{{< note >}}
**Note:** Before you can delete your account, you will first have to delete any organizations you
own. For details on how to delete an organization, check out the [Organizations & Shared Vaults]({{< relref "../orgs/#deleting-an-organization" >}})
section of the manual.
{{< /note >}}

To delete your Padloc account, click the button labeled **Delete Account** at the
very bottom of the settings screen. You'll have to enter your master password,
then confirm your choice by typing out the word "DELETE". **Deleting your account
will cancel any active subscriptions and permanently erase all your data from
Padloc. This action is not reversible!**
