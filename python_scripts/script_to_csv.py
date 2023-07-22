import csv, re
from datetime import date


def processTXT_to_CSV(chapterIndex,CHAPTER, chapter_fileName):
    
    starting_DialogCode_n = 1
    Name_temp = ''

    with open(
        "python_scripts/script-csv-processed/MASTER-SCRIPT-"+ 
            chapterIndex + CHAPTER + '-' + str(date.today()) + ".csv", 
        "a", 
        newline = ""
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
            'python_scripts/script-txt-for-processing/'+chapter_fileName, 
            'r',
            encoding='UTF-8'
        )
        txt_lines = txt_open.readlines()

        for single_line in txt_lines:
            if single_line.strip() == '':
                print(single_line)
            elif  re.match( '^.+[:]$' ,single_line):
                Name_temp = single_line
            elif  re.match( '^[[].+$' ,single_line):
                csv_writer.writerow({
                    '_DialogCode' : 'CHAP1-'+str("{:05n}".format(starting_DialogCode_n))+'00',
                    '_Chapter' : CHAPTER,
                    '_Name' : single_line,
                    '_Comment' : '',
                    '_Text' : single_line
                })
            else:
                csv_writer.writerow({
                    '_DialogCode' : 'CHAP1-'+str("{:05n}".format(starting_DialogCode_n))+'00',
                    '_Chapter' : CHAPTER,
                    '_Name' : Name_temp,
                    '_Comment' : '',
                    '_Text' : single_line
                })
            starting_DialogCode_n += 1
                
        

processTXT_to_CSV(
    chapterIndex= 'Chapter_0-',
    chapter_fileName = '00_prologue.txt',
    CHAPTER = 'Prologue-A-Colorful-Entrance'
)