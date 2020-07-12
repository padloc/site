---
title: Exporting Data
icon: file-export
aliases:
    - /guides/export/
weight: 8
anchors:
    - hash: encrypted-export
      title: Encrypted Export
    - hash: comma-separated-values-csv
      title: Comma-Separated Values
---

## Encrypted Export

The recommended way to export your data is as a encrypted, password protected
file.

1. Go to the **Settings** screen
2. In the **Import / Export** section, click the button labeled **Export...**
3. Choose the vault you'd like to export.
4. Under **Format**, select **Encrypted Container**.
5. The button at the bottom of the dialog will indicate how many items will
   be exported. Click it to continue.
6. Choose a password to protect your data. This does not have to be the same as
   your master password but should be sufficiently strong. The app will warn
   you if you choose a password that is considered too weak.
7. If you selected the option to export to a file, choose the desired file
   location and confirm.

{{< figure caption="The export dialog will let you choose the vault you'd like to export." >}}
{{< img src="export.png" >}}
{{< /figure >}}

## Comma-Separated Values (CSV)

{{< note >}}
**Warning:** Exporting to CSV format will save your data without
encyryption of any kind which means it can be read by anyone. We strongly
recommend [exporting your data as a secure, encrypted file](#encrypted-export)
instead!
{{< /note >}}

[Comma Separated Values
(CSV)](https://en.wikipedia.org/wiki/Comma-separated_values) is a common format
for exporting structured data in a way that can be recognized by other
applications. CSV files essentially contain tabular data and can be opened and
edited easily by any kind of spreadsheet application like **Microsoft Excel**
or **Apple Numbers**.

1. Go to the **Settings** screen
2. In the **Import / Export** section, click the button labeled **Export...**
3. Choose the vault you'd like to export.
4. Under **Format**, select **CSV**.
5. The button at the bottom of the dialog will indicate how many items will
   be exported. Click it to continue.
6. If you selected the option to export to a file, choose the desired file
   location and confirm.
