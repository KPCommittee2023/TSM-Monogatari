import os
import csv, re
from datetime import date
import csv, re
from datetime import date
from funcs import read_txt_write_to_csv


if __name__ == "__main__":
    start_path = "python_scripts"
    txt_file_directory_path = start_path + "/MASTERSCRIPT-txt-for-processing(dont_rename)"
    csv_file_directory_path = start_path + "/MASTERSCRIPT-csv-processed(dont_rename)"
    txt_files_list = []
    csv_files_list = []

    print("\nreading TXT files...\n")

    for root, dirs, files in os.walk(txt_file_directory_path):
        level = root.replace(start_path, "").count(os.sep)
        indent = " " * 4 * level
        print("-{}{}/".format(indent, os.path.basename(root)))
        sub_indent = " " * 4 * (level + 1)
        for f in files:
            print('{}{}'.format(sub_indent, f))
            txt_files_list.append(txt_file_directory_path+'/'+f)
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

    print(txt_files_list)

    for txt_file in txt_files_list:
        read_txt_write_to_csv(txt_file)
    
    
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

