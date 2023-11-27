def do_differently_given_code(row_in_csv):

    dialog_code = row_in_csv[0]
    chapter_text = row_in_csv[1]
    char_name = row_in_csv[2]
    comment_msg = row_in_csv[3]
    line_text = row_in_csv[4]



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
 // begin hardcoded dialog_code == 'Chapter_0_0011200
 {
   'Choice': {
     'Chapter_0_Choice_1_Sure_you_can_have_a_bit': {
       'Text': 'Sure, you can have a bit.',
       'Do': 'jump Chapter_0_Choice_1_Sure_you_can_have_a_bit',
     },
     'Chapter_0_Choice_1_No_this_is_mine_Get_your_own': {
       'Text': 'No, this is mine. Get your own.',
       'Do': 'jump Chapter_0_Choice_2_No_this_is_mine_Get_your_own',
     },
   }  
 },
],
'Chapter_0_Choice_1_Sure_you_can_have_a_bit': [
 " Choice 1 Sure, you can have a bit.  Chapter_0_0011400 Choice 1: Sure, you can have a bit. ",
 " character_object_kyo Chapter_0_0011700 Actually, never mind. There are probably some RAAAAAAAANCID germs in there. I don\'t want any of that. I refuuuuuuuuuuse. ",
 " Narration  <br><br> The nerve of this guy...!  <br><br> _Dialog Code:  Chapter_0_0012000 ",
 " Scene reconverges here  Chapter_0_0012200 Scene reconverges here ",
 "jump Chapter_0_after_choice_1",
],
'Chapter_0_Choice_2_No_this_is_mine_Get_your_own': [
 " Choice 2 No, this is mine. Get your own.  Chapter_0_0012500 Choice 2: No, this is mine. Get your own. ",
 " character_object_kyo Chapter_0_0012700 Kyo_FP_Bruh ",
 " Narration  <br><br> Kyo whines and pouts. <br><br> _Dialog Code:  Chapter_0_0013000 ",
 " Narration  <br><br> What is up with this guy? Yet, you find his pouting face a little cute. Like a puntable cat.  <br><br> _Dialog Code:  Chapter_0_0013200 ",   
 " Scene Reconverges Here  Chapter_0_0013300 Scene Reconverges Here ",
 "jump Chapter_0_after_choice_1"
],

'Chapter_0_after_choice_1': [
 // end hardcoded dialog_code == 'Chapter_0_0011200

'''
    if 'Chapter_0_0011200' < dialog_code    and   dialog_code <= 'Chapter_0_0013300'  :
        # print( '\n\n\n\n removed   '+ dialog_code)
        return '// %s removed - covered in choice block above \n ' %dialog_code 
    
    
    if dialog_code == 'Chapter_0_0015300':
        return '''
// start hardcoded dialog_code == 'CXhapter_0_0015300
 {
   'Choice': {
     'Chapter_0_Choice_2_Yes': {
       'Text': 'Yes',
       'Do': 'jump Chapter_0_Choice_2_Yes',
     },
     'Chapter_0_Choice_2_No': {
       'Text': 'No',
       'Do': 'jump Chapter_0_Choice_2_No',
     },
   }
 },
],

'Chapter_0_Choice_2_Yes': [
 " Choice 1 Yes.  Chapter_0_0015500 Choice 1: Yes. ",
 " character_object_kyo Chapter_0_0015700 Kyo_FP_Cheerful ",
 " Narration  <br><br> Kyo claps his hands. <br><br> _Dialog Code:  Chapter_0_0016000 ",
 " character_object_kyo Chapter_0_0016300 Yeah, let\'s go! Finally, there\'s a second member. ",
 " Player  <br><br> Wait, nobody else is in this club yet?  <br><br> _Dialog Code:  Chapter_0_0016600 ",
 " character_object_kyo Chapter_0_0016900 Oh shit, I forgot to tell you. Yeah, you\'re the only one who joined so far. But here\'s where you come in. ",
 " character_object_kyo Chapter_0_0017200 To officially register the club, I\'m gonna need you to recruit 3 more people by the end of the month. You can do it, you\'re charismatic enough. ",
 " Player  <br><br> Hold on, I didn\'t agree to do free labor. Why don\'t you do it yourself' <br><br> _Dialog Code:  Chapter_0_0017500 ",
 " Narration  <br><br> The lunch bell rings. <br><br> _Dialog Code:  Chapter_0_0017800 ",
 " character_object_kyo Chapter_0_0018100 Too late, gotta go. ",
 " Player  <br><br> Hey, wait! <br><br> _Dialog Code:  Chapter_0_0018400 ",
 " Narration  <br><br> You catch a glimpse of Kyo grinning as he bolts past you and out the door. He sings as he escapes into the hallways, cracking his voice. <br><br> _Dialog Code:  Chapter_0_0018700 ",
 " character_object_kyo Chapter_0_0019000 Running through the halls so fast, something something dash' ",
 " Narration  <br><br> And just like that, he makes a left and disappears. The nerve of this dude to leave you hanging like that. . .  <br><br> _Dialog Code:  Chapter_0_0019300 ",
 " Narration  <br><br> You go in the opposite direction to your class. As you make your way there, you think about his request. It\'s a lot of work, but it\'s not like you have other plans or commitments this year. Eh, fuck it, you ball. <br><br> _Dialog Code:  Chapter_0_0019500 ",
 " Fade to black  Chapter_0_0019700 Fade to black ",
 " Proceed to Chapter 1  Chapter_0_0019800 Proceed to Chapter 1 ",
 "jump CHAPTER_1",
],
'Chapter_0_Choice_2_No': [
 " Choice 2 No.  Chapter_0_0020100 Choice 2: No. ",
 " character_object_kyo Chapter_0_0020400 Oh, why not?  ",
 " Player  <br><br> Oh, don\'t take this the wrong way. It\'s just that I wanna consider my other options.  <br><br> _Dialog Code:  Chapter_0_0020700 ",
 " character_object_kyo Chapter_0_0021000 Like what? ",
 " Player  <br><br> Hm? Isn\'t it normal to do that?  <br><br> _Dialog Code:  Chapter_0_0021300 ",
 " character_object_kyo Chapter_0_0021600 What other clubs were you thinking of joining? Because this club can do better than all of them. ",
 " Narration  <br><br> Where did this sudden pushiness and big ego come from?  <br><br> _Dialog Code:  Chapter_0_0021900 ",
 " Player  <br><br> I was thinking of joining the debate club' <br><br> _Dialog Code:  Chapter_0_0022200 ",
 " character_object_kyo Chapter_0_0022500 Bro, I am right here. I am THE debate master. I\'m not all business all the time you know. I can do other things outside of club meetings.  ",
 " Player  <br><br> Okay, but I have to ask. You\'re cool and all, but are you the only club member?  <br><br> _Dialog Code:  Chapter_0_0022800 ",
 " character_object_kyo Chapter_0_0023100 Yes, but I\'m gonna get more soon' ",
 " Player  <br><br> Look, I\'ll go check out other clubs later this week. If I don\'t like any of them, I\'ll come back here. Okay? <br><br> _Dialog Code:  Chapter_0_0023400 ",
 " Narration  <br><br> The lunch bell rings. <br><br> _Dialog Code:  Chapter_0_0023700 ",
 " Player  <br><br> Don\'t wanna be late to class. See ya. <br><br> _Dialog Code:  Chapter_0_0024000 ",
 " character_object_kyo Chapter_0_0024200 Kyo_BP_Sad ",
 " Narration  <br><br> You feel a little guilty seeing his dejected expression as you leave the classroom. But it\'s too late now; you stick to your decision and go to your next class. <br><br> _Dialog Code:  Chapter_0_0024500 ",
 " Empty black screen.  Chapter_0_0024700 Empty black screen. ",
 " Narration  <br><br> The next day, you try to find Kyo in the radio club room. But the room is empty. You try asking people about Kyo's whereabouts, but people don't even know who he is. What the hell. That's weird. Eh, whatever. Life continues to be lonely as usual. <br><br> _Dialog Code:  Chapter_0_0025000 ",
 " Game end - joke ending. Restart from beginning of game  Chapter_0_0025200 Game end - joke ending. Restart from beginning of game ",
 "jump END",
'''
    if 'Chapter_0_0015500' <= dialog_code    and   dialog_code <= 'Chapter_0_0025200'  :
        # print( '\n\n\n\n removed   '+ dialog_code)
        return '// %s removed - covered in choice block above \n ' %dialog_code 


    
    if dialog_code == 'Chapter_1_0008500':
        return '''
 // start hardcoded dialog_code == 'Chapter_1_0008500
 {  
   'Choice': {    
     'Chapter_1_Choice_1_Let_it_slide': {
       'Text': 'Let it slide',
       'Do': 'jump Chapter_1_Choice_1_Let_it_slide',
     },    
     'Chapter_1_Choice_2_Try_proving_him_wrong': {
       'Text': 'Try Proving him wrong',
       'Do': 'jump Chapter_1_Choice_2_Try_proving_him_wrong',
     },
   }
 },
],

'Chapter_1_Choice_1_Let_it_slide': [    
 " Narration  <br><br> Kyo snickers, tilting his head momentarily as if discreetly pointing somewhere.  <br><br> _Dialog Code:  Chapter_1_0009000 ",
 " character_object_kyo Chapter_1_0009300 I bet you anything if you actually listen you'll find someone immediately. ",
 " Narration  <br><br> Your eyes follow the direction of his nudge. <br><br> _Dialog Code:  Chapter_1_0009600 ",
 " Scene reconverges here  Chapter_1_0009800 Scene reconverges here ",
 "jump Chapter_1_after_choice_1",
],    
'Chapter_1_Choice_2_Try_proving_him_wrong' : [    
 " Narration  <br><br> You glance around, searching for someone you can listen in on to make your point. <br><br> _Dialog Code:  Chapter_1_0010400 ",
 " Narration  <br><br> Your ears pick up on some commotion, and your attention drifts. <br><br> _Dialog Code:  Chapter_1_0010600 ",
 " Narration  <br><br> 		Scene reconverges here <br><br> _Dialog Code:  Chapter_1_0010700 ",
 "jump Chapter_1_after_choice_1",
],
'Chapter_1_after_choice_1': [
 // end hardcoded dialog_code == 'Chapter_1_0008500
'''
    if 'Chapter_1_0008700' <= dialog_code    and   dialog_code <= 'Chapter_1_0010700'  : 
        return '// %s removed - covered in choice block above \n ' %dialog_code 





    # end of choice rules 


    

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
    output_to_json+=' "'
    output_to_json+=",\n"
    
    # print('will output: \n', output_to_json)
    return output_to_json

