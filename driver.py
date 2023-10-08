import os
from funcs import read_txt_write_to_csv
from funcs import read_csv_return_txt_format
import time

if __name__ == "__main__":
    start_path = "python_scripts"
    txt_file_directory_path = start_path + "/MASTERSCRIPT-txt-for-processing(dont_rename)"
    csv_file_directory_path = start_path + "/MASTERSCRIPT-csv-processed(dont_rename)"
    new_txt_file_directory_path = start_path + "/MASTERSCRIPT-new-txt(json_fmt)-processed(dont_rename)"
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

# dont cmt out the following part. appending to txt
    for root, dirs, files in os.walk(new_txt_file_directory_path):
        level = root.replace(start_path, "").count(os.sep)
        indent = " " * 4 * level
        print("-{}{}/".format(indent, os.path.basename(root)))
        sub_indent = " " * 4 * (level + 1)
        for f in files:
            print('{}{}'.format(sub_indent, f))
            new_txt_files_list.append(new_txt_file_directory_path+'/'+f)

        pass

    print("\n\n\n======== write to json log file complete==========\n\n\n")


    print(
        '---new_txt_files_list:\n',
        new_txt_files_list
    )


    
    with open(
        "js/script.js",
        "r",
    ) as script_js_read:
        script_js_lines = script_js_read.readlines()

    total_n_lines = len(script_js_lines)
    line_index = 0
    while script_js_lines[line_index]:

        if not script_js_lines[line_index]:
            break

        if line_index == total_n_lines-1:
            break

        elif 'start-of-CHAPTER-0-mark' in script_js_lines[line_index] :
            if 'end-of-CHAPTER-0-mark' in script_js_lines[line_index+1] :
                print('end-of-CHAPTER-0-mark REACHED... RESETING')
                line_index += 1
            else:
                script_js_lines.pop(line_index+1)
                total_n_lines -= 1

        elif 'start-of-CHAPTER-1-mark' in script_js_lines[line_index] :
            if 'end-of-CHAPTER-1-mark' in script_js_lines[line_index+1] :
                print('end-of-CHAPTER-1-mark REACHED... RESETING')
                line_index += 1
            else:
                script_js_lines.pop(line_index+1)
                total_n_lines -= 1

        elif 'start-of-CHAPTER-2-mark' in script_js_lines[line_index] :
            if 'end-of-CHAPTER-2-mark' in script_js_lines[line_index+1] :
                print('end-of-CHAPTER-2-mark REACHED... RESETING')
                line_index += 1
            else:
                script_js_lines.pop(line_index+1)
                total_n_lines -= 1

        elif 'start-of-CHAPTER-3-mark' in script_js_lines[line_index] :
            if  'end-of-CHAPTER-3-mark' in script_js_lines[line_index+1] :
                print('end-of-CHAPTER-3-mark REACHED... RESETING')
                line_index += 1
            else:
                script_js_lines.pop(line_index+1)
                total_n_lines -= 1

        elif 'start-of-CHAPTER-E-mark' in script_js_lines[line_index] :
            if  'end-of-CHAPTER-E-mark' in script_js_lines[line_index+1] :
                print('end-of-CHAPTER-E-mark REACHED... RESETING')
                line_index += 1
            else:
                script_js_lines.pop(line_index+1)
                total_n_lines -= 1

        else:
            line_index += 1
            pass
        
    
    script_js_read.close()
    time.sleep(2)

    # hard coded...
    chap_0_read = open(new_txt_files_list[0],'r')
    chap_0_lines= chap_0_read.readlines()
    chap_1_read = open(new_txt_files_list[1],'r')
    chap_1_lines= chap_1_read.readlines()
    chap_2_read = open(new_txt_files_list[2],'r')
    chap_2_lines= chap_2_read.readlines()
    chap_3_read = open(new_txt_files_list[3],'r')
    chap_3_lines= chap_3_read.readlines()
    chap_E_read = open(new_txt_files_list[4],'r')
    chap_E_lines= chap_E_read.readlines()
    print('\n\tchap_0_lines:', len(chap_0_lines))
    print('\n\tchap_1_lines:', len(chap_1_lines))
    print('\n\tchap_2_lines:', len(chap_2_lines))
    print('\n\tchap_3_lines:', len(chap_3_lines))
    print('\n\tchap_E_lines:', len(chap_E_lines))

    time.sleep(2)


    print('=========== injecting ============')
    new_script_js_read = open(
        "js/script.js",
        "r",
    ) 
    new_script_js_lines = new_script_js_read.readlines()
    total_n_lines = len(new_script_js_lines)
    line_index = 0
    while new_script_js_lines[line_index]:

        if not new_script_js_lines[line_index]:
            break

        if line_index == total_n_lines-1:
            break

        elif 'start-of-CHAPTER-0-mark' in new_script_js_lines[line_index] :
            if 'end-of-CHAPTER-0-mark' in new_script_js_lines[line_index+1] :
                print('end-of-CHAPTER-0-mark ... INJECTING')
                for single_line in chap_0_lines:
                    print(single_line)
                    new_script_js_lines.insert(line_index+1, single_line)
                    total_n_lines += 1
                    line_index += 1
                line_index += 1
            else:
                new_script_js_lines.pop(line_index+1)
                total_n_lines -= 1

        elif 'start-of-CHAPTER-1-mark' in new_script_js_lines[line_index] :
            if 'end-of-CHAPTER-1-mark' in new_script_js_lines[line_index+1] :
                print('end-of-CHAPTER-1-mark ... INJECTING')
                for single_line in chap_1_lines:
                    new_script_js_lines.insert(line_index+1, single_line)
                    total_n_lines += 1
                    line_index += 1
                line_index += 1
            else:
                new_script_js_lines.pop(line_index+1)
                total_n_lines -= 1

        elif 'start-of-CHAPTER-2-mark' in new_script_js_lines[line_index] :
            if 'end-of-CHAPTER-2-mark' in new_script_js_lines[line_index+1] :
                print('end-of-CHAPTER-2-mark ... INJECTING')
                for single_line in chap_2_lines:
                    new_script_js_lines.insert(line_index+1, single_line)
                    total_n_lines += 1
                    line_index += 1
                line_index += 1
            else:
                new_script_js_lines.pop(line_index+1)
                total_n_lines -= 1

        elif 'start-of-CHAPTER-3-mark' in new_script_js_lines[line_index] :
            if  'end-of-CHAPTER-3-mark' in new_script_js_lines[line_index+1] :
                print('end-of-CHAPTER-3-mark ... INJECTING')
                for single_line in chap_3_lines:
                    new_script_js_lines.insert(line_index+1, single_line)
                    total_n_lines += 1
                    line_index += 1
                line_index += 1
            else:
                new_script_js_lines.pop(line_index+1)
                total_n_lines -= 1

        elif 'start-of-CHAPTER-E-mark' in new_script_js_lines[line_index] :
            if  'end-of-CHAPTER-E-mark' in new_script_js_lines[line_index+1] :
                print('end-of-CHAPTER-E-mark ... INJECTING')
                for single_line in chap_E_lines:
                    new_script_js_lines.insert(line_index+1, single_line)
                    total_n_lines += 1
                    line_index += 1
                line_index += 1
            else:
                new_script_js_lines.pop(line_index+1)
                total_n_lines -= 1

        else:
            pass
        
        line_index += 1



    # print(script_js_lines)
    script_js_write = open(
        "js/script.js",
        "w",
    )
    script_js_write.writelines(new_script_js_lines)   

