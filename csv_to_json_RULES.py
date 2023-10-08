def do_differently_given_code(row_in_csv):

    dialog_code = row_in_csv[0]
    chapter_text = row_in_csv[1]
    char_name = row_in_csv[2]
    comment_msg = row_in_csv[3]
    line_text = row_in_csv[4]
    
    # sample rule here
    if dialog_code == 'Chapter_1-0000100':
        print('rule for', dialog_code)
        # return ' // \n' # cannot return empty str. '' is falsy value in python
        pass


    if 'Kyo' in char_name:        
        char_name = 'character_object_kyo'
    elif 'Atria' in char_name: 
        char_name = 'character_object_atria'
    elif 'Girl A' in char_name :
        char_name = 'character_object_girl_a'
    elif 'Girl b' in char_name :
        char_name = 'character_object_girl_b'
    elif 'Skye:' in char_name :
        char_name = 'character_object_skye'
    elif 'Student A' in char_name :
        char_name = 'character_object_student_a'
    elif 'Student B' in char_name :
        char_name = 'character_object_student_b'
    elif 'Student C' in char_name :
        char_name = 'character_object_student_c'
    elif 'Student D' in char_name :
        char_name = 'character_object_student_d'
    elif 'Esmeray' in char_name :
        char_name = 'character_object_esmeray'
    elif 'Student:' in char_name :
        char_name = 'character_object_student'


    if dialog_code == 'Chapter_3_0002400' \
        or dialog_code ==  'Chapter_3_0002600' \
        or dialog_code ==  'Chapter_3_0049700' :
        print('\n\t\trule for', dialog_code, '\n\n')
        output_to_json = ''
        output_to_json+=' " '
        output_to_json+= char_name \
            .replace("[", "") \
            .replace("]", "") \
            .replace(":", "") \
            .replace("\n", " ")
        output_to_json+=" "
        output_to_json+=dialog_code    # del this line in actual release
        output_to_json+=" "
        output_to_json+= line_text \
            .replace("[", "") \
            .replace("]", "") \
            .replace("'", "\\'") \
            .replace("\"", "\\\"") \
            .replace("\n", " ")[:-1]
        output_to_json+=' " '
        output_to_json+=",\n\n"
        
        print('will output: \n', output_to_json)
        return output_to_json



    # if dialog_code == 'Chapter_3-0002400':
    #     return ' // \n' 



    else:
        return False

    