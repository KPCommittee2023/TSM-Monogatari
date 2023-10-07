import os
from funcs import read_txt_write_to_csv
from funcs import read_csv_return_txt_format


if __name__ == "__main__":
    start_path = "python_scripts"
    txt_file_directory_path = start_path + "/MASTERSCRIPT-txt-for-processing(dont_rename)"
    csv_file_directory_path = start_path + "/MASTERSCRIPT-csv-processed(dont_rename)"
    new_txt_file_directory_path = start_path + "/MASTERSCRIPT-new-txt-processed(dont_rename)"
    txt_files_list = []
    csv_files_list = []
    new_txt_files_list = []

    print("\nreading TXT files...\n")

    for root, dirs, files in os.walk(txt_file_directory_path):
        level = root.replace(start_path, "").count(os.sep)
        indent = " " * 4 * level
        print("-{}{}/".format(indent, os.path.basename(root)))
        sub_indent = " " * 4 * (level + 1)
        for f in files:
            print('{}{}'.format(sub_indent, f))
            txt_files_list.append(txt_file_directory_path+'/'+f)

        pass

    print("\n\n\n======== processing txt files ==========\n\n\n")

    for txt_file in txt_files_list:
        read_txt_write_to_csv(txt_file, csv_file_directory_path)
    
    print("\nreading CSV files...\n")

    for root, dirs, files in os.walk(csv_file_directory_path):
        level = root.replace(start_path, "").count(os.sep)
        indent = " " * 4 * level
        print("-{}{}/".format(indent, os.path.basename(root)))
        sub_indent = " " * 4 * (level + 1)
        for f in files:
            print('{}{}'.format(sub_indent, f))
            csv_files_list.append(csv_file_directory_path+'/'+f)

        pass

    print("\n\n\n======== processing csv files ==========\n\n\n")

    for csv_file in csv_files_list:
        read_csv_return_txt_format(csv_file, new_txt_file_directory_path)

    print("\nreading new TXT files...\n")

    for root, dirs, files in os.walk(new_txt_file_directory_path):
        level = root.replace(start_path, "").count(os.sep)
        indent = " " * 4 * level
        print("-{}{}/".format(indent, os.path.basename(root)))
        sub_indent = " " * 4 * (level + 1)
        for f in files:
            print('{}{}'.format(sub_indent, f))
            new_txt_files_list.append(new_txt_file_directory_path+'/'+f)

        pass

    print("\n\n\n==================\n\n\n")

