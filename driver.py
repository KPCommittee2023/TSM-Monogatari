import os
import csv, re
from datetime import date
import csv, re
from datetime import date


if __name__ == "__main__":
    start_path = "python_scripts"
    txt_file_directory_path = (
        start_path + "MASTERSCRIPT-txt-for-processing(dont_rename)"
    )
    csv_file_directory_path = start_path + "MASTERSCRIPT-csv-processed(dont_rename)"

    print("\nreading TXT files...\n")

    for root, dirs, files in os.walk(txt_file_directory_path):
        # if "ARCHIVED" in root:
        #     pass
        # elif "txt" in root:
        #     level = root.replace(start_path, "").count(os.sep)
        #     indent = " " * 4 * level
        #     print("{}{}/".format(indent, os.path.basename(root)))
        #     sub_indent = " " * 4 * (level + 1)
        #     for f in files:
        #         # print('{}{}'.format(sub_indent, f))
        #         txt_file_names.append(f)

        # elif 'csv' in root:
        #     level = root.replace(start_path, '').count(os.sep)
        #     indent = ' ' * 4 * level
        #     print('{}{}/'.format(indent, os.path.basename(root)))
        #     sub_indent = ' ' * 4 * (level + 1)
        #     for f in files:
        #         print('{}{}'.format(sub_indent, f))
        #         csv_file_names.append(f)

        # else:
        #     # level = root.replace(start_path, '').count(os.sep)
        #     # indent = ' ' * 4 * level
        #     # print('{}{}/'.format(indent, os.path.basename(root)))
        #     # sub_indent = ' ' * 4 * (level + 1)
        #     # for f in files:
        #     #     print('{}{}'.format(sub_indent, f))
        #     pass
        pass

    print(
        "\nTXT files reading complete...\n",
        "\nfiles read: ",
        "\n\ttxt_file_names read:\n\t\t",
        "\n\t\t".join(txt_file_names),
        # '\n\tcsv_file_names read:\n\t\t',
        # '\n\t\t'.join(csv_file_names)
    )

    print("\n\n\n======== processing txt files ==========\n\n\n")

    start_path = "js"
    for root, dirs, files in os.walk(start_path):
        level = root.replace(start_path, "").count(os.sep)
        indent = " " * 4 * level
        print("{}{}/".format(indent, os.path.basename(root)))
        sub_indent = " " * 4 * (level + 1)
        for f in files:
            print("{}{}".format(sub_indent, f))

    print("\n\n\n==================\n\n\n")


def read_txt_write_to_csv(chapterIndex, CHAPTER, chapter_fileName):
    starting_DialogCode_n = 1
    name_temp = ""

    with open(
        "python_scripts/Sep17/script-csv-processed/MASTER-SCRIPT-"
        + chapterIndex
        + CHAPTER
        + "-"
        + str(date.today())
        + ".csv",
        "a",
        newline="",
    ) as csvfile:
        fieldnames = ["_DialogCode", "_Chapter", "_Name", "_Comment", "_Text"]
        csv_writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        csv_writer.writeheader()

        txt_open = open(
            "python_scripts/Sep17/script-txt-for-processing/" + chapter_fileName,
            "r",
            encoding="utf_8",
        )
        txt_lines = txt_open.readlines()

        for single_line in txt_lines:
            if single_line.strip() == "":
                pass
            elif re.match("^.+[:]$", single_line):
                name_temp = single_line
            elif re.match("^[[].+$", single_line):
                csv_writer.writerow(
                    {
                        "_DialogCode": chapterIndex
                        + str("{:05n}".format(starting_DialogCode_n))
                        + "00",
                        "_Chapter": CHAPTER,
                        "_Name": single_line,
                        "_Comment": "",
                        "_Text": single_line,
                    }
                )
            else:
                csv_writer.writerow(
                    {
                        "_DialogCode": chapterIndex
                        + str("{:05n}".format(starting_DialogCode_n))
                        + "00",
                        "_Chapter": CHAPTER,
                        "_Name": name_temp,
                        "_Comment": "",
                        "_Text": single_line,
                    }
                )
            starting_DialogCode_n += 1


def processCSV_to_JSON(filename):
    json_file_write = open(
        "python_scripts/Sep17/processed-JSON/" + filename + ".json", "w"
    )

    with open(
        "python_scripts/Sep17/script-csv-processed/" + filename + ".csv",
        "r",
        # encoding="utf_8",
    ) as file:
        csvFile = csv.reader(file)
        for row in csvFile:
            print(row)
            json_file_write.write(' " ')
            json_file_write.write(
                row[2]
                .replace("[", "")
                .replace("]", "")
                .replace(":", "")
                .replace("\n", " ")
            )
            json_file_write.write(" ")
            json_file_write.write(
                row[4]
                .replace("[", "")
                .replace("]", "")
                .replace("'", "\\'")
                .replace("\n", " ")[:-1]
            )
            json_file_write.write(' " ')
            json_file_write.writelines(",\n\n")
