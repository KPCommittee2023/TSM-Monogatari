import os

from python_scripts.read_csv_write_to_json import processCSV_to_JSON
from python_scripts.read_txt_write_to_csv import processTXT_to_CSV

if __name__ == '__main__':
    start_path = 'python_scripts'
    txt_file_names = []
    csv_file_names = []
    
    print('\nreading files...\n')

    for root, dirs, files in os.walk(start_path):
        if 'ARCHIVED' in root:
            pass
        elif 'txt' in root:
            level = root.replace(start_path, '').count(os.sep)
            indent = ' ' * 4 * level
            print('{}{}/'.format(indent, os.path.basename(root)))
            sub_indent = ' ' * 4 * (level + 1)
            for f in files:
                # print('{}{}'.format(sub_indent, f))
                txt_file_names.append(f)

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

    print(
        '\nTXT files reading complete...\n',
        '\nfiles read: ',
        '\n\ttxt_file_names read:\n\t\t',
        '\n\t\t'.join(txt_file_names),
        # '\n\tcsv_file_names read:\n\t\t',
        # '\n\t\t'.join(csv_file_names)
    )

    print('\n\n\n======== processing txt files ==========\n\n\n')
    
    
    
    
    
    
    
    
    
    
    

    start_path = 'js'
    for root, dirs, files in os.walk(start_path):
        level = root.replace(start_path, '').count(os.sep)
        indent = ' ' * 4 * level
        print('{}{}/'.format(indent, os.path.basename(root)))
        sub_indent = ' ' * 4 * (level + 1)
        for f in files:
            print('{}{}'.format(sub_indent, f))

    print('\n\n\n==================\n\n\n')
