import csv, re
from datetime import date


def processTXT_to_CSV(chapterIndex, CHAPTER, chapter_fileName):
    starting_DialogCode_n = 1
    name_temp = ''

    with open(
            "python_scripts/Sep17/script-csv-processed/MASTER-SCRIPT-" +
            chapterIndex + CHAPTER + '-' + str(date.today()) + ".csv",
            "a",
            newline=""
    ) as csvfile:
        fieldnames = [
            '_DialogCode',
            '_Chapter',
            '_Name',
            '_Comment',
            '_Text'
        ]
        csv_writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        csv_writer.writeheader()

        txt_open = open(
            'python_scripts/Sep17/script-txt-for-processing/' + chapter_fileName,
            'r',
            encoding='utf_8'
        )
        txt_lines = txt_open.readlines()

        for single_line in txt_lines:
            if single_line.strip() == '':
                pass
            elif re.match('^.+[:]$', single_line):
                name_temp = single_line
            elif re.match('^[[].+$', single_line):
                csv_writer.writerow({
                    '_DialogCode': chapterIndex + str("{:05n}".format(starting_DialogCode_n)) + '00',
                    '_Chapter': CHAPTER,
                    '_Name': single_line,
                    '_Comment': '',
                    '_Text': single_line
                })
            else:
                csv_writer.writerow({
                    '_DialogCode': chapterIndex + str("{:05n}".format(starting_DialogCode_n)) + '00',
                    '_Chapter': CHAPTER,
                    '_Name': name_temp,
                    '_Comment': '',
                    '_Text': single_line
                })
            starting_DialogCode_n += 1

