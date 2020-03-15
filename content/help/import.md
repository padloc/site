---
date: 2017-06-09
publishDate: 2017-06-09
title: Importing Data
aliases:
  - /guides/import/
---

Padloc provides an easy way to import data from other applications. Supported formats are:

- **Comma Separated Values (CSV)** - Many applications support exporting data in this format. In order to import
  data like this into Padloc, you need to make sure it is structured in a specific way.
  More about this under [Importing From CSV](#importing-from-csv).

- **LastPass Export** - LastPass exports your data in a specific format that can be recognized and parsed
  by Padloc automatically. See [this article]({{< relref "lastpass.md" >}}) for details.

- **Encrypted Padloc Export** - Lastly, Padloc has its own, encrypted export format which naturally is
  supported and regonized automatically. Encrypted Padloc Exports are protected by a password which you'll
  have to provide during the import process. See [Importing Padloc Exports](#importing-padlock-export)

# Importing from CSV

[Comma Separated Values (CSV)](https://en.wikipedia.org/wiki/Comma-separated_values) is a common format for exporting
structured data in a way that can be recognized by other applications. CSV files essentially contain tabular
data and can be opened and edited easily by any kind of spreadsheet application like **Microsoft Excel** or **Apple
Numbers**. Before trying to import this kind of data into Padloc, you first need to make sure it satisfies the
following requirements:

1. The first line should contain the fields names for the corresponding columns (e.g.: "name, category, url, username,
   password"). Each subsequent line represents a single item, with each column containing the value for the
   corresponding field.

2. The column containing item names should be labeled "name". If no "name" column is found, the first column is
   used for item names.

3. Padloc supports the concept of tags which are used to group related items together and make discovery
   easier. Other applications may support a similar concept under different names like "folders", "groups" or "categories".
   If your exported data contains a column representing something like a tags or group, make sure that column
   is labeled "tags". Multiple tags should be separated by a comma and the value wrapped in quotes (see example below).

## Example CSV file

Here is an example of how a valid CSV file could look like:

    name,tags,url,username,password,notes
    Facebook,social,https://facebook.com/,john.doe@gmail.com,3kjaf93,"Some note..."
    Github,"work,coding",https://github.com,john.doe@gmail.com,129lskdf93

## Prepare your data for import

Even though the contain simple tabular data, CSV files can be hard to read and edit by hand. We recommend
using a spreadsheet application like **Microsoft Word** or **Apple Numbers** to review your data and make
changes if required. Here is how the example from above looks in **Apple Numbers**:

{{< figure src="/img/guides/csv-example.png" alt="Sample Data in Apple Numbers" class="rounded" >}}

# Import the data

Once you've made sure your CSV file satisfies Padloc's requirements, you can go ahead and import your data:

1. Go to the **Settings** page via the menu.
2. Under the **Import** section, click "Import..."
3. Select the file you want to import
4. Click **Import**.
5. Done!

{{< figure src="/img/guides/import-settings.png" alt="Select Import" class="rounded" >}}
{{< figure src="/img/guides/import-dialog.png" alt="Import Dialog" class="rounded" >}}

# Importing Padloc Export

Importing data exported via Padloc's "Encrypted Export" feature is easy as well:

1. Go to the **Settings** page via the menu.
2. Under the **Import** section, click "Import..."
3. Select the file you want to import
4. Enter the password you used when you exported the data.
5. Click **Import**.
6. Done!
