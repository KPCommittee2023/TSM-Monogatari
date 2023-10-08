def do_differently_given_code(row_in_csv):

    dialog_code = row_in_csv[0]
    
    # sample rule here
    if dialog_code == 'Chapter_1-0000100':
        print('rule for', dialog_code)
        # return ' // \n' # cannot return empty str. '' is falsy value in python
        pass


    # if dialog_code == 'Chapter_3-0002400':
    #     return ' // \n' 



    else:
        return False

    