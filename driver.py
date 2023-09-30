import os

from python_scripts.csv_to_json import processCSV_to_JSON
from python_scripts.script_to_csv import processTXT_to_CSV

if __name__ == '__main__':
    start_path = 'python_scripts'
    for root, dirs, files in os.walk(start_path):
        level = root.replace(start_path, '').count(os.sep)
        indent = ' ' * 4 * level
        print('{}{}/'.format(indent, os.path.basename(root)))

    print('\n\n\n==================\n\n\n')
