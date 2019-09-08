---
title: 'How To Export Data From Padlock'
date: 2017-08-30
publishDate: 2017-08-30
archived: true
---

Padlock supports two different output formats for exporting your data.

## Encrypted Export

The recommended way to export your data is as a encrypted, password protected
file.

1. Go to the settings screen
2. Choose one of the options under **Export -> As Encrypted File**. The first
   button will copy the data to the clipboard, while the second will save it as
   a file.
3. Choose a password to protect your data. This does not have to be the same as
   your master password but should be sufficiently strong. The app will warn
   you if you choose a password that is considered too weak.
4. If you selected the option to export to a file, choose the desired file
   location and confirm.

{{< figure src="/img/export.gif" alt="Encrypted Export" class="center rounded" >}}

## Comma-Separated Values (CSV)

{{% note %}} **Warning:** Exporting to CSV format will save your data without
encyryption of any kind which means it can be read by anyone. We strongly
recommend [exporting your data as a secure, encrypted file](#encrypted-export)
instead! {{% /note %}}

[Comma Separated Values
(CSV)](https://en.wikipedia.org/wiki/Comma-separated_values) is a common format
for exporting structured data in a way that can be recognized by other
applications. CSV files essentially contain tabular data and can be opened and
edited easily by any kind of spreadsheet application like **Microsoft Excel**
or **Apple Numbers**.

1. Go to the settings screen
2. Choose one of the options under **Export -> As CSV (not recommended)**. The
   first button will copy the data to the clipboard, while the second will save
   it as a file.
3. If you selected the option to export to a file, choose the desired file
   location and confirm.
