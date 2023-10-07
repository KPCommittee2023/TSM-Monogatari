# function definitions

def read_txt_write_to_csv(txt_file_name):
    print(txt_file_name)

    txt_open = open(
        txt_file_name,
        "r",
        encoding="utf_8",
    )
    txt_lines = txt_open.readlines()

    for single_line in txt_lines:
        # print(single_line)
        pass
        # TO DO : implement the function to be taken   ((chapterIndex, CHAPTER, chapter_fileName)))paramters, passed from driver.py, and genreate csv files


def read_txt_write_to_csv0(chapterIndex, CHAPTER, chapter_fileName):
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
        fieldnames = ["_DialogCode", "_Chapter", "_Name", "_Comment", "_Text"]  # creates csv columns
        csv_writer = csv.DictWriter(csvfile, fieldnames=fieldnames)  # creates an object that writes to the csv file

        csv_writer.writeheader()

        txt_open = open(
            "python_scripts/Sep17/script-txt-for-processing/" + chapter_fileName,
            "r",
            encoding="utf_8",
        )           # in charge of reading the txt file... 
        txt_lines = txt_open.readlines() # ...line by line

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
















def read_csv_return_json_format(filename):
     # TO DO : implement the function to be taken   ((chapterIndex, CHAPTER, chapter_fileName)))paramters, passed from driver.py, and genreate csv files
    # referece this function in drvier.py

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
