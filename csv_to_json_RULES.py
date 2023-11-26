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


    # sprites rules here
    if dialog_code == 'Chapter_0_0000300': return '\"show scene school_hallway_daylight\", // rule based \n '
    if dialog_code == 'Chapter_0_0003300': return '\"show scene music_room_basic\", // rule based \n '  
    if dialog_code == 'Chapter_0_0003500': return '\"show character character_object_kyo Kyo_BP_Default centered\", // rule based \n '
    if dialog_code == 'Chapter_0_0005100': return '\"show character character_object_kyo Kyo_FP_Shocked normal\", // rule based \n '
    if dialog_code == 'Chapter_0_0005700': return '\"show character character_object_kyo Kyo_FP_Bruh normal\", // rule based \n '
    if dialog_code == 'Chapter_0_0006600': return '\"show character character_object_kyo FP_Default normal\", // rule based \n '
    
    



    # end of sprites rules 





    #  choice rules start here
    if dialog_code == 'Chapter_0_0011200':
        return '''
    {
        'Choice': {
        
            'Chapter_0_Choice_1_Sure_you_can_have_a_bit' : {
                'Text': 'Sure, you can have a bit.',
                'Do': 'jump Chapter_0_Choice_1_Sure_you_can_have_a_bit',
            },

            'Choice_2_No_this_is_mine_Get_your_own' : {
                'Text': 'No, this is mine. Get your own.',
                'Do': 'jump Choice_2_No_this_is_mine_Get_your_own',
            },

        }
    }, \n
        
    ],
    
  'Chapter_0_Choice_1_Sure_you_can_have_a_bit': [

    " Choice 1 Sure, you can have a bit.  Chapter_0_0011400 Choice 1: Sure, you can have a bit. ",

    " character_object_kyo Chapter_0_0011700 Actually, never mind. There are probably some RAAAAAAAANCID germs in there. I don\'t want any of that. I refuuuuuuuuuuse. ",

    " Narration  <br><br> The nerve of this guy...!  <br><br> _Dialog Code:  Chapter_0_0012000 ",
    " Scene reconverges here  Chapter_0_0012200 Scene reconverges here ",
    "jump Chapter_0_after_choice_1"
  ],
  
  'Choice_2_No_this_is_mine_Get_your_own': [
    
    
    " Choice 2 No, this is mine. Get your own.  Chapter_0_0012500 Choice 2: No, this is mine. Get your own. ",
    
    " character_object_kyo Chapter_0_0012700 Kyo_FP_Bruh ",
    
    " Narration  <br><br> Kyo whines and pouts. <br><br> _Dialog Code:  Chapter_0_0013000 ",
    " Narration  <br><br> What is up with this guy? Yet, you find his pouting face a little cute. Like a puntable cat.  <br><br> _Dialog Code:  Chapter_0_0013200 ",
    " Scene Reconverges Here  Chapter_0_0013300 Scene Reconverges Here ",
    
    "jump Chapter_0_after_choice_1"
  ],

  
    
'Chapter_0_after_choice_1': [
  

'''
    if dialog_code  > 'Chapter_0_0011200' and 'Chapter_0_0013300' > dialog_code  : 
        print( '\n\n\n\n aksdjlhfdsakljfdsakldfhj'+ dialog_code)
        return ' '
    
    


    # end of choice rules 


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
    
    # print('will output: \n', output_to_json)
    return output_to_json

