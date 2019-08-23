---
date: 2017-06-09
publishDate: 2017-06-09
title: How to Import Data Into Padlock
---

Padlock provides an easy way to import data from other applications. Supported formats are:

- **Comma Separated Values (CSV)** - Many applications support exporting data in this format. In order to import
    data like this into Padlock, you need to make sure it is structured in a specific way.
    More about this under [Importing From CSV](#importing-from-csv).

- **LastPass Export** - LastPass exports your data in a specific format that can be recognized and parsed
    by Padlock automatically. See [this article]({{< relref "lastpass.md" >}}) for details.

- **SecuStore Backup** - SecuStore backups are supported and regognized automatically by Padlock. These files
    are protected by a password which you'll have to provide during the import process.
    See [this article]({{< relref "import-secustore.md" >}}) for details.

- **Encrypted Padlock Export** - Lastly, Padlock has its own, encrypted export format which naturally is
    supported and regonized automatically. Encrypted Padlock Exports are protected by a password which you'll
    have to provide during the import process. See [Importing Padlock Exports](#importing-padlock-export)

# Importing from CSV

[Comma Separated Values (CSV)](https://en.wikipedia.org/wiki/Comma-separated_values) is a common format for exporting
structured data in a way that can be recognized by other applications. CSV files essentially contain tabular
data and can be opened and edited easily by any kind of spreadsheet application like **Microsoft Excel** or **Apple
Numbers**. Before trying to import this kind of data into Padlock, you first need to make sure it satisfies the
following requirements:

1. The first line should contain the fiels names for the corresponding columns (e.g.: "name, category, url, username,
    password"). Each subsequent line represents a single item, with each column containing the value for the
    corresponding field.

2. The column containing item names should be labeled "name". If no "name" column is found, the first column is
    used for item names.

3. Padlock supports the concept of *categories* which are used to group related items together and make discovery
    easier. Other applications may support a similar concept under different names like "folders", "groups" or "tags".
    If your exported data contains a column representing something like a category or group, make sure that column
    is labeled "category". If no "category" column is found, the category for all imported items will be left
    empty.

## Example CSV file

Here is an example of how a valid CSV file could look like:

    name,category,url,username,password,notes
    Facebook,social,https://facebook.com/,john.doe@gmail.com,3kjaf93,"This is my Facebook account"
    Github,work,https://github.com,john.doe@gmail.com,129lskdf93

## Prepare your data for import

Even though the contain simple tabular data, CSV files can be hard to read and edit by hand. We recommend
using a spreadsheet application like **Microsoft Word** or **Apple Numbers** to review your data and make
changes if required. Here is how the example from above looks in **Apple Numbers**:

{{< figure src="/img/import-csv-1.png" alt="Sample Data in Apple Numbers" >}}

## Import the data

Once you've made sure your CSV file satisfies Padlocks requirements, you can go ahead and import your data:

1. Click the little gear icon in the header on the top to get to the **Settings** page.
2. Under the **Import** section, click the icon next to **Select a File** and select the file you want to import.
3. Click **Continue**.
4. Done!

{{% note %}}
On iOS and Android, the **Select a File** is not available. Instead, you have to copy your data to the clipboard
first and then click the icon next to **Paste From Clipboard**.
{{% /note %}}

# Importing Padlock Export

Importing data exported via Padlocks "Encrypted Export" feature is easy as well:

1. Click the little gear icon in the header on the top to get to the **Settings** page.
2. Under the **Import** section, click the icon next to **Select a File** and select the file you want to import.
3. Enter the correct password to decrypt the data.
4. Done!
