import csv, re
from datetime import date


def processCSV_to_JSON(fileName):
    json_file_write = open(
        "python_scripts/Sep17/processed-JSON/" + fileName + ".json", "w"
    )

    with open(
        "python_scripts/Sep17/script-csv-processed/" + fileName + ".csv",
        "r",
        # encoding="utf_8",
    ) as file:
        csvFile = csv.reader(file)
        for row in csvFile:
            print(row)
            json_file_write.write(' \" ')
            json_file_write.write(row[2].replace('[', '').replace(']', '').replace(':', '').replace('\n', ' '))
            json_file_write.write(' ')
            json_file_write.write(row[4].replace('[', '').replace(']', '').replace('\'', '\\\'').replace('\n', ' ')[:-1])
            json_file_write.write(' \" ')
            json_file_write.writelines(",\n\n")


processCSV_to_JSON(
    fileName="MASTER-SCRIPT-Chapter_0-Prologue-A-Colorful-Entrance-2023-09-17"
)

#