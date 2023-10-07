import os
import csv, re

# function definitions

def read_txt_write_to_csv(txt_file_name, csv_file_directory_path):
    starting_DialogCode_n = 1
    name_temp = ""

    # some operations on the file name to get chapter index and chapter name
    txt_file_basename = os.path.basename(txt_file_name)
    file_basename = txt_file_basename.replace("txt", "csv")
    split_basename = (file_basename.split(".")[0]).split("_")
    chapterIndex = "Chapter_" + split_basename[1] + "-"
    chapter_name_list = split_basename[2:]
    CHAPTER = '-'.join(chapter_name_list)

    # create the csv dir if it doesn't already exist
    if not os.path.exists(csv_file_directory_path):
        os.makedirs(csv_file_directory_path)

    with open(
        csv_file_directory_path
        + "/"
        + file_basename,
        "w",
        newline=""
    ) as csvfile:
        fieldnames = ["_DialogCode", "_Chapter", "_Name", "_Comment", "_Text"]  # creates csv columns
        csv_writer = csv.DictWriter(csvfile, fieldnames=fieldnames)  # creates an object that writes to the csv file

        csv_writer.writeheader()

        txt_open = open(
            txt_file_name,
            "r",
            encoding="utf_8",
        )
        txt_lines = txt_open.readlines()

        for single_line in txt_lines:
            if single_line.strip() == "":
                pass
            elif re.match("^.+[:]$", single_line):
                name_temp = single_line
            elif re.match("^[\[].+$", single_line):
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

def read_csv_return_txt_format(filename, dir_path):

    csv_file_basename = os.path.basename(filename)
    file_basename = csv_file_basename.replace("csv", "txt")
    
    # create the csv dir if it doesn't already exist
    if not os.path.exists(dir_path):
        os.makedirs(dir_path)

    txt_file_write = open(
        dir_path + "/" + file_basename, "w"
    )

    with open(
        filename,
        "r",
    ) as file:
        csvFile = csv.reader(file)
        for row in csvFile:
            txt_file_write.write(' " ')
            txt_file_write.write(
                row[2]
                .replace("[", "")
                .replace("]", "")
                .replace(":", "")
                .replace("\n", " ")
            )
            txt_file_write.write(" ")
            txt_file_write.write(
                row[4]
                .replace("[", "")
                .replace("]", "")
                .replace("'", "\\'")
                .replace("\n", " ")[:-1]
            )
            txt_file_write.write(' " ')
            txt_file_write.writelines(",\n\n")
