/* global window */

window.refactorCsv = (function() {
    "use strict";

    /**
     * Parses a raw CSV string into an 2-dimensional array.
     * Taken from
     * http://www.bennadel.com/blog/1504-Ask-Ben-Parsing-CSV-Strings-With-Javascript-Exec-Regular-Expression-Command.htm
     * @param  String   strData      Raw CSV string
     * @param  String   strDelimiter Row delimiter
     * @return Array                 2-dimensional array containing rows & columns
     */
    function parseCsv(strData, strDelimiter) {
        // Check to see if the delimiter is defined. If not,
        // then default to comma.
        strDelimiter = (strDelimiter || ",");

        // Create a regular expression to parse the CSV values.
        var objPattern = new RegExp(
            (
                // Delimiters.
                "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
                // Quoted fields.
                "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
                // Standard fields.
                "([^\"\\" + strDelimiter + "\\r\\n]*))"
            ),
            "gi"
        );

        // Create an array to hold our data. Give the array
        // a default empty first row.
        var arrData = [[]];

        // Create an array to hold our individual pattern
        // matching groups.
        var arrMatches = null;

        // Keep looping over the regular expression matches
        // until we can no longer find a match.
        while ((arrMatches = objPattern.exec(strData))) {

            // Get the delimiter that was found.
            var strMatchedDelimiter = arrMatches[1];

            // Check to see if the given delimiter has a length
            // (is not the start of string) and if it matches
            // field delimiter. If id does not, then we know
            // that this delimiter is a row delimiter.
            if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {

                // Since we have reached a new row of data,
                // add an empty row to our data array.
                arrData.push([]);

            }

            // Now that we have our delimiter out of the way,
            // lets check to see which kind of value we
            // captured (quoted or unquoted).
            var strMatchedValue;
            if (arrMatches[2]){
                // We found a quoted value. When we capture
                // this value, unescape any double quotes.
                strMatchedValue = arrMatches[2].replace(
                    new RegExp("\"\"", "g"),
                    "\""
                );
            } else {
                // We found a non-quoted value.
                strMatchedValue = arrMatches[3];
            }

            // Now that we have our value string, lets add
            // it to the data array.
            arrData[arrData.length - 1].push(strMatchedValue);
        }

        // Return the parsed data.
        return arrData;
    }

    function recordsToTable(records) {
        var cols = ["name", "category"];
        var colInds = {};
        var table = [cols];

        records.forEach(function(rec) {
            rec.fields.forEach(function(field) {
                if (!colInds[field.name]) {
                    colInds[field.name] = cols.length;
                    cols.push(field.name);
                }
            });
        });

        function emptyRow() {
            var l = cols.length;
            var row = [];
            while (l--) {
                row.push("");
            }
            return row;
        }

        records.forEach(function(rec) {
            var row = emptyRow();
            row[0] = rec.name;
            row[1] = rec.category || "";
            table.push(row);

            rec.fields.forEach(function(rec) {
                row[colInds[rec.name]] = rec.value;
            });
        });

        return table;
    }


    function toCsv(data) {
        return data.map(function(row) {
            return row.map(JSON.stringify).join(",");
        }).join("\r\n");
    }

    function parseNotes(str) {
        var lines = str.split("\n");
        var fields = lines.map(function(line) {
            var splitInd = line.indexOf(":");
            return {
                name: line.substring(0, splitInd),
                value: line.substring(splitInd + 1)
            };
        });

        return fields;
    }

    var nameIndex = 4;
    var categoryIndex = 5;
    var urlIndex = 0;
    var usernameIndex = 1;
    var passwordIndex = 2;
    var notesIndex = 3;

    function parseRow(row) {
        var item = {
            name: row[nameIndex],
            category: row[categoryIndex],
            fields: [
                {name: "url", value: row[urlIndex]},
                {name: "username", value: row[usernameIndex]},
                {name: "password", value: row[passwordIndex]}
            ]
        };
        var notes = row[notesIndex];
        if (notes.indexOf("NoteType:") !== -1) {
            item.fields.push.apply(item.fields, parseNotes(notes));
        } else {
            item.fields.push({name: "Notes", value: notes});
        }

        return item;
    }

    function refactor(csv) {
        var data = parseCsv(csv);

        // Remove first row as it only contains field names
        data.shift();
        data = data.filter(function(row) { return row.length > 1; }).map(parseRow);

        return toCsv(recordsToTable(data));
    }

    return refactor;
})();
