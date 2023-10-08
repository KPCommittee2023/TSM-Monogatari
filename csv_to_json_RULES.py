def do_differently_given_code(row_in_csv):

    dialog_code = row_in_csv[0]
    chapter_text = row_in_csv[1]
    char_name = row_in_csv[2]
    comment_msg = row_in_csv[3]
    line_text = row_in_csv[4]
    


    if 'Player' in char_name:        
        return False
    elif 'Narration' in char_name:        
        return False
    
    elif 'Kyo' in char_name:        
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

