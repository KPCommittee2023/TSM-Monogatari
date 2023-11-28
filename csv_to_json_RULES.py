def do_differently_given_code(row_in_csv):

    dialog_code = row_in_csv[0]
    chapter_text = row_in_csv[1]
    char_name = row_in_csv[2]
    comment_msg = row_in_csv[3]
    line_text = row_in_csv[4]



    # sprites rules here
    # if dialog_code == 'Chapter_0_0000300': return '    \"show scene school_hallway_daylight\", // rule based \n'
    # if dialog_code == 'Chapter_0_0003300': return '    \"show scene music_room_basic\", // rule based \n'  
    # if dialog_code == 'Chapter_0_0003500': return '    \"show character character_object_kyo Kyo_BP_Default centered\", // rule based \n'
    if dialog_code == 'Chapter_0_0005100': 
        return '''
            \"character_object_kyo <br><br>AAAAAAAAAAAAAAAAAAAAH!!  <br><br> _Dialog Code:  Chapter_0_0005100 \", // rule based \n   
            \"show character character_object_kyo Kyo_FP_Shocked normal\", // rule based \n 
            '''
    # if dialog_code == 'Chapter_0_0005700': return '    \"show character character_object_kyo Kyo_FP_Bruh normal\", // rule based \n'
    # if dialog_code == 'Chapter_0_0006600': return '    \"show character character_object_kyo FP_Default normal\", // rule based \n'
    

    # to RubySweetie. please write code between this area. Nov 28





    # to RubySweetie. please write code between this area. Nov 28
    



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
    "Choice 1 Sure, you can have a bit.  Chapter_0_0011400 Choice 1: Sure, you can have a bit. ",
    "character_object_kyo Chapter_0_0011700 Actually, never mind. There are probably some RAAAAAAAANCID germs in there. I don\'t want any of that. I refuuuuuuuuuuse. ",
    "Narration  <br><br> The nerve of this guy...!  <br><br> _Dialog Code:  Chapter_0_0012000 ",
    "Scene reconverges here  Chapter_0_0012200 Scene reconverges here ",
    "jump Chapter_0_after_choice_1",
  ],
  'Chapter_0_Choice_2_No_this_is_mine_Get_your_own': [
    "Choice 2 No, this is mine. Get your own.  Chapter_0_0012500 Choice 2: No, this is mine. Get your own. ",
    "character_object_kyo Chapter_0_0012700 Kyo_FP_Bruh ",
    "Narration  <br><br> Kyo whines and pouts. <br><br> _Dialog Code:  Chapter_0_0013000 ",
    "Narration  <br><br> What is up with this guy? Yet, you find his pouting face a little cute. Like a puntable cat.  <br><br> _Dialog Code:  Chapter_0_0013200 ",
    "Scene Reconverges Here  Chapter_0_0013300 Scene Reconverges Here ",
    "jump Chapter_0_after_choice_1"
  ],

  'Chapter_0_after_choice_1': [
    // end hardcoded dialog_code == 'Chapter_0_0011200

'''
    if 'Chapter_0_0011200' < dialog_code    and   dialog_code <= 'Chapter_0_0013300'  :
        # print( '\n\n\n\n removed   '+ dialog_code)
        return '    // %s removed - covered in choice block above \n' %dialog_code 
    








    
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
    "Choice 1 Yes.  Chapter_0_0015500 Choice 1: Yes. ",
    "character_object_kyo Chapter_0_0015700 Kyo_FP_Cheerful ",
    "Narration  <br><br> Kyo claps his hands. <br><br> _Dialog Code:  Chapter_0_0016000 ",
    "character_object_kyo Chapter_0_0016300 Yeah, let\'s go! Finally, there\'s a second member. ",
    "Player  <br><br> Wait, nobody else is in this club yet?  <br><br> _Dialog Code:  Chapter_0_0016600 ",
    "character_object_kyo Chapter_0_0016900 Oh shit, I forgot to tell you. Yeah, you\'re the only one who joined so far. But here\'s where you come in. ",
    "character_object_kyo Chapter_0_0017200 To officially register the club, I\'m gonna need you to recruit 3 more people by the end of the month. You can do it, you\'re charismatic enough. ",
    "Player  <br><br> Hold on, I didn\'t agree to do free labor. Why don\'t you do it yourself' <br><br> _Dialog Code:  Chapter_0_0017500 ",
    "Narration  <br><br> The lunch bell rings. <br><br> _Dialog Code:  Chapter_0_0017800 ",
    "character_object_kyo Chapter_0_0018100 Too late, gotta go. ",
    "Player  <br><br> Hey, wait! <br><br> _Dialog Code:  Chapter_0_0018400 ",
    "Narration  <br><br> You catch a glimpse of Kyo grinning as he bolts past you and out the door. He sings as he escapes into the hallways, cracking his voice. <br><br> _Dialog Code:  Chapter_0_0018700 ",
    "character_object_kyo Chapter_0_0019000 Running through the halls so fast, something something dash' ",
    "Narration  <br><br> And just like that, he makes a left and disappears. The nerve of this dude to leave you hanging like that. . .  <br><br> _Dialog Code:  Chapter_0_0019300 ",
    "Narration  <br><br> You go in the opposite direction to your class. As you make your way there, you think about his request. It\'s a lot of work, but it\'s not like you have other plans or commitments this year. Eh, fuck it, you ball. <br><br> _Dialog Code:  Chapter_0_0019500 ",
    "Fade to black  Chapter_0_0019700 Fade to black ",
    "Proceed to Chapter 1  Chapter_0_0019800 Proceed to Chapter 1 ",
    "jump CHAPTER_1",
  ],
  'Chapter_0_Choice_2_No': [
    "Choice 2 No.  Chapter_0_0020100 Choice 2: No. ",
    "character_object_kyo Chapter_0_0020400 Oh, why not?  ",
    "Player  <br><br> Oh, don\'t take this the wrong way. It\'s just that I wanna consider my other options.  <br><br> _Dialog Code:  Chapter_0_0020700 ",
    "character_object_kyo Chapter_0_0021000 Like what? ",
    "Player  <br><br> Hm? Isn\'t it normal to do that?  <br><br> _Dialog Code:  Chapter_0_0021300 ",
    "character_object_kyo Chapter_0_0021600 What other clubs were you thinking of joining? Because this club can do better than all of them. ",
    "Narration  <br><br> Where did this sudden pushiness and big ego come from?  <br><br> _Dialog Code:  Chapter_0_0021900 ",
    "Player  <br><br> I was thinking of joining the debate club' <br><br> _Dialog Code:  Chapter_0_0022200 ",
    "character_object_kyo Chapter_0_0022500 Bro, I am right here. I am THE debate master. I\'m not all business all the time you know. I can do other things outside of club meetings.  ",
    "Player  <br><br> Okay, but I have to ask. You\'re cool and all, but are you the only club member?  <br><br> _Dialog Code:  Chapter_0_0022800 ",
    "character_object_kyo Chapter_0_0023100 Yes, but I\'m gonna get more soon' ",
    "Player  <br><br> Look, I\'ll go check out other clubs later this week. If I don\'t like any of them, I\'ll come back here. Okay? <br><br> _Dialog Code:  Chapter_0_0023400 ",
    "Narration  <br><br> The lunch bell rings. <br><br> _Dialog Code:  Chapter_0_0023700 ",
    "Player  <br><br> Don\'t wanna be late to class. See ya. <br><br> _Dialog Code:  Chapter_0_0024000 ",
    "character_object_kyo Chapter_0_0024200 Kyo_BP_Sad ",
    "Narration  <br><br> You feel a little guilty seeing his dejected expression as you leave the classroom. But it\'s too late now; you stick to your decision and go to your next class. <br><br> _Dialog Code:  Chapter_0_0024500 ",
    "Empty black screen.  Chapter_0_0024700 Empty black screen. ",
    "Narration  <br><br> The next day, you try to find Kyo in the radio club room. But the room is empty. You try asking people about Kyo's whereabouts, but people don't even know who he is. What the hell. That's weird. Eh, whatever. Life continues to be lonely as usual. <br><br> _Dialog Code:  Chapter_0_0025000 ",
    "Game end - joke ending. Restart from beginning of game  Chapter_0_0025200 Game end - joke ending. Restart from beginning of game ",
    "jump END",
'''
    if 'Chapter_0_0015500' <= dialog_code    and   dialog_code <= 'Chapter_0_0025200'  :
        # print( '\n\n\n\n removed   '+ dialog_code)
        return '    // %s removed - covered in choice block above \n' %dialog_code 







    
    if dialog_code == 'Chapter_1_0008500':
        return '''
    // start hardcoded dialog_code == 'Chapter_1_0008500
    {
      'Choice': {
        'Chapter_1_Choice_1_Let_it_slide': {
          'Text': 'Let it slide',
          'Do': 'jump Chapter_1_Choice_1_Let_it_slide',
        },
        'Chapter_1_Choice_1_Try_proving_him_wrong': {
          'Text': 'Try Proving him wrong',
          'Do': 'jump Chapter_1_Choice_2_Try_proving_him_wrong',
        },
      }
    },
  ],

  'Chapter_1_Choice_1_Let_it_slide': [
    "Narration  <br><br> Kyo snickers, tilting his head momentarily as if discreetly pointing somewhere.  <br><br> _Dialog Code:  Chapter_1_0009000 ",
    "character_object_kyo Chapter_1_0009300 I bet you anything if you actually listen you'll find someone immediately. ",
    "Narration  <br><br> Your eyes follow the direction of his nudge. <br><br> _Dialog Code:  Chapter_1_0009600 ",
    "Scene reconverges here  Chapter_1_0009800 Scene reconverges here ",
    "jump Chapter_1_after_choice_1",
  ],
  'Chapter_1_Choice_2_Try_proving_him_wrong': [
    "Narration  <br><br> You glance around, searching for someone you can listen in on to make your point. <br><br> _Dialog Code:  Chapter_1_0010400 ",
    "Narration  <br><br> Your ears pick up on some commotion, and your attention drifts. <br><br> _Dialog Code:  Chapter_1_0010600 ",
    "Narration  <br><br> 		Scene reconverges here <br><br> _Dialog Code:  Chapter_1_0010700 ",
    "jump Chapter_1_after_choice_1",
  ],
  'Chapter_1_after_choice_1': [
    // end hardcoded dialog_code == 'Chapter_1_0008500
'''
    if 'Chapter_1_0008700' <= dialog_code    and   dialog_code <= 'Chapter_1_0010700'  : 
        return '    // %s removed - covered in choice block above \n' %dialog_code 











    if dialog_code == 'Chapter_1_0029000':
        return '''
    // start hardcoded dialog_code == Chapter_1_0029000
    {
      'Choice': {
        'Chapter_1_Choice_2_ignore_the_whole_incident': {
          'Text': 'Ignore the whole incident',
          'Do': 'jump Chapter_1_Choice_2_ignore_the_whole_incident',
        },
        'Chapter_1_Choice_2_go_search_for_atria': {
          'Text': 'Go search for Atria',
          'Do': 'jump Chapter_1_Choice_2_go_search_for_atria',
        },
      }
    },
  ],

  'Chapter_1_Choice_2_ignore_the_whole_incident': [
    "Choice 1 Ignore the whole incident  Chapter_1_0029200 Choice 1: Ignore the whole incident ",
    "Player  <br><br> I really don't think I should interfere... <br><br> _Dialog Code:  Chapter_1_0029500 ",
    "character_object_kyo Chapter_1_0029700 Kyo_FP_Bruh ",
    "Narration  <br><br> Kyo stares at you with a tinge of concern. <br><br> _Dialog Code:  Chapter_1_0030000 ",
    "character_object_kyo Chapter_1_0030300 ...Don't you think she would be a good candidate for the radio club? ...Can't you just... tell? ",
    "Narration  <br><br> He clearly knows more than he\'s letting on... his consistently unsettling statements are starting to stand out more and more... <br><br> _Dialog Code:  Chapter_1_0030600 ",
    "Narration  <br><br> Eh, surely it\'s nothing. There\'s no way this guy can do anything, anyways. <br><br> _Dialog Code:  Chapter_1_0030800 ",
    "Player  <br><br> What is she, the 'chosen one' or something? <br><br> _Dialog Code:  Chapter_1_0031100 ",
    "Narration  <br><br> You joke, rolling your eyes. <br><br> _Dialog Code:  Chapter_1_0031400 ",
    "Scene reconverges here  Chapter_1_0031600 Scene reconverges here ",
    "jump Chapter_1_after_choice_2",
  ],
  'Chapter_1_Choice_2_go_search_for_atria': [
    "character_object_atria Chapter_1_0031800 Choice 2: Go search for Atria ",
    "Scene reconverges here  Chapter_1_0031900 Scene reconverges here ",
    "jump Chapter_1_after_choice_2",
  ],
  'Chapter_1_after_choice_2': [
    // end hardcoded dialog_code == 'Chapter_1_0029000
'''
    if 'Chapter_1_0029200' <= dialog_code    and   dialog_code <= 'Chapter_1_0031900'  : 
        return '    // %s removed - covered in choice block above \n' %dialog_code 














    if dialog_code == 'Chapter_1_0058600':
        return '''
    // start hardcoded dialog_code == Chapter_1_0058600
    {
      'Choice': {
        'Chapter_1_Choice_3_ignore_the_whole_incident': {
          'Text': 'Tell her to confront them',
          'Do': 'jump Chapter_1_Choice_3_ignore_the_whole_incident',
        },
        'Chapter_1_Choice_3_go_search_for_atria': {
          'Text': 'Tell her to take her time',
          'Do': 'jump Chapter_1_Choice_3_go_search_for_atria',
        },
      }
    },
  ],

  'Chapter_1_Choice_3_ignore_the_whole_incident': [
    "Choice 1 Tell her to confront them  Chapter_1_0058800 Choice 1: Tell her to confront them ",
    "Player  <br><br> Atria, I understand your attachment to them, but a lot of their actions that you've explained to me don't seem right in any way.. <br><br> _Dialog Code:  Chapter_1_0059100 ",
    "Player  <br><br> If you think they are causing you hurt, the best thing to do is confront them as soon as possible. <br><br> _Dialog Code:  Chapter_1_0059300 ",
    "Player  <br><br> If they disregard your feelings after you do so, they aren't worth your time. Let alone your pain. <br><br> _Dialog Code:  Chapter_1_0059500 ",
    "Player  <br><br> I know it may be hard, but sometimes cutting people out of your life is the best decision. It can be the difference between differing sides of your mental stability. <br><br> _Dialog Code:  Chapter_1_0059700 ",
    "Narration  <br><br> Atrias eyes widen at this, fearing the mere idea of confrontation. <br><br> _Dialog Code:  Chapter_1_0060000 ",
    "character_object_atria Chapter_1_0060300 ...But what if they respond negatively...? ",
    "character_object_atria Chapter_1_0060500 Atria2_Sad ",
    "character_object_atria Chapter_1_0060800 What if they... ",
    "Narration  <br><br> She flinches, seemingly reimagining older events. Taking a deep breath, she composes herself. It was a blatant lie, a response that seems like a natural reflex to recalling such things. <br><br> _Dialog Code:  Chapter_1_0061100 ",
    "character_object_atria Chapter_1_0061300 Atria1_Timid ",
    "character_object_atria Chapter_1_0061600 ...I... don't think that's a good idea. ",
    "Scene reconverges here  Chapter_1_0061800 Scene reconverges here ",
    "jump Chapter_1_after_choice_3",
  ],
  'Chapter_1_Choice_3_go_search_for_atria': [
    "Choice 2 Tell her to take her time  Chapter_1_0062000 Choice 2: Tell her to take her time ",
    "Player  <br><br> Don't worry too much about it. I'll help you through this, and you can take as much time as you need. <br><br> _Dialog Code:  Chapter_1_0062300 ",
    "Player  <br><br> It's a large step to take, and it can take a lot. I encourage you to take your time. <br><br> _Dialog Code:  Chapter_1_0062500 ",
    "Player  <br><br> ...Just, think about what's best for you. Consider the idea of friends that allow you to just be yourself. <br><br> _Dialog Code:  Chapter_1_0062700 ",
    "Narration  <br><br> Slowly, Atria nods in agreement. <br><br> _Dialog Code:  Chapter_1_0063000 ",
    "character_object_atria Chapter_1_0063200 Atria1_Timid ",
    "character_object_atria Chapter_1_0063500 I... I don't really know... I've known them for so long...",
    "Scene reconverges here  Chapter_1_0063600 Scene reconverges here ",
    "jump Chapter_1_after_choice_3",
  ],
  'Chapter_1_after_choice_3': [
    // end hardcoded dialog_code == 'Chapter_1_0058600
'''
    if 'Chapter_1_0058800' <= dialog_code    and   dialog_code <= 'Chapter_1_0063600'  : 
        return '    // %s removed - covered in choice block above \n' %dialog_code 













    if dialog_code == 'Chapter_2_0011400':
        return '''
    // start hardcoded dialog_code == Chapter_2_0011400
    {
      'Choice': {
        'Chapter_2_Choice_1_dont_invite_her_to_the_radio_club': {
          'Text': "Don\'t invite her to the radio club",
          'Do': 'jump Chapter_2_Choice_1_dont_invite_her_to_the_radio_club',
        },
        'Chapter_2_Choice_1_invite_her_to_the_radio_club': {
          'Text': 'Invite her to the radio club',
          'Do': 'jump Chapter_2_Choice_1_invite_her_to_the_radio_club',
        },
      }
    },
  ],

  'Chapter_2_Choice_1_dont_invite_her_to_the_radio_club': [
    "Choice 1 Don't invite her to the radio club  Chapter_2_0011600 Choice 1: Don\'t invite her to the radio club ",
    "Skye Sprite disappears  Chapter_2_0011800 Skye Sprite disappears ",
    "character_object_kyo Chapter_2_0011900 Kyo _FP_Default Appears ",
    "Narration  <br><br> You take a step back, standing side by side with Kyo once again. He looks at you with a raised brow, unsubtly gesturing towards Skye and muttering quietly. <br><br> _Dialog Code:  Chapter_2_0012200 ",
    "character_object_kyo Chapter_2_0012500 You thinking of inviting her? ",
    "Narration  <br><br> Surprised at Kyo's sudden interest, you look at him questioningly. <br><br> _Dialog Code:  Chapter_2_0012800 ",
    "Player  <br><br> Think it\'s a good idea? We don\'t really know her... <br><br> _Dialog Code:  Chapter_2_0013100 ",
    "character_object_kyo Chapter_2_0013400 Man, do you think we\'re in any position to be picky? Bet you\'re just too chicken to ask. ",
    "character_object_kyo Chapter_2_0013600 Kyo sprite disappears ",
    "Skye Default Sprite Appears  Chapter_2_0013700 Skye Default Sprite Appears ",
    "Narration  <br><br> You roll your eyes at his obvious bait - he was the one pushing recruitment off onto you so it wasn\'t like he could talk.  <br><br> _Dialog Code:  Chapter_2_0014000 ",
    "Narration  <br><br> With a grumble, you turn back to Skye, who blinks weirdly at you, looking strangely at the both of you muttering at each other. <br><br> _Dialog Code:  Chapter_2_0014200 ",
    "Scene reconverges here  Chapter_2_0014400 Scene reconverges here ",
    "jump Chapter_2_after_choice_1",
  ],
  'Chapter_2_Choice_1_invite_her_to_the_radio_club': [
    "Choice 2 Invite her to the radio club  Chapter_2_0014600 Choice 2: Invite her to the radio club ",
    "Scene reconverges here  Chapter_2_0014700 Scene reconverges here ",
    "jump Chapter_2_after_choice_1",
  ],
  'Chapter_2_after_choice_1': [
    // end hardcoded dialog_code == 'Chapter_2_0011400
'''
    if 'Chapter_2_0011600' <= dialog_code    and   dialog_code <= 'Chapter_2_0014700'  : 
        return '    // %s removed - covered in choice block above \n' %dialog_code 










#to be tested below



    if dialog_code == 'Chapter_2_0035300':
        return '''
    // start hardcoded dialog_code == Chapter_2_0035300
    {
      'Choice': {
        'Chapter_2_Choice_2_dont_intervene': {
          'Text': "Don\'t intervene",
          'Do': 'jump Chapter_2_Choice_2_dont_intervene',
        },
        'Chapter_2_Choice_2_intervene': {
          'Text': 'Intervene',
          'Do': 'jump Chapter_2_Choice_2_intervene',
        },
      }
    },
  ],

  'Chapter_2_Choice_2_dont_intervene': [
    "Choice 1 Don't Intervene  Chapter_2_0035500 Choice 1: Don\'t Intervene ",
    "Narration  <br><br> You stay back a little longer. You\'re sure your schoolmates wouldn\'t resort to violence and you weren\'t sure Skye would appreciate a practical stranger stepping in on things they weren\'t fully informed on. <br><br> _Dialog Code:  Chapter_2_0035800 ",
    "character_object_student_a Chapter_2_0036100 You actually believe that crap. ",
    "Narration  <br><br> One of the trio scoffs, a derisive sneer on their face. <br><br> _Dialog Code:  Chapter_2_0036400 ",
    "character_object_student_a Chapter_2_0036700 Sensei has to be nice to you - you get the best grades, so of course she sucks up to you. Nobody here actually likes you. ",
    "Narration  <br><br> They move closer towards Skye, one of them bringing up a hand to give her a shove. Skye furrows her eyebrows, moving back to avoid the advancing group before her expression crumples when she realises there\'s no way for her to escape. <br><br> _Dialog Code:  Chapter_2_0037000 ",
    "Narration  <br><br> You frantically step forward, unsure how everything escalated so quickly. There\'s no way you can leave Skye alone on this. <br><br> _Dialog Code:  Chapter_2_0037200 ",
    "Scene reconverges here  Chapter_2_0037400 Scene reconverges here ",
    "jump Chapter_2_after_choice_2",
  ],
  'Chapter_2_Choice_2_intervene': [
    "Choice 2 Intervene  Chapter_2_0037600 Choice 2: Intervene ",
    "Narration  <br><br> 	Scene reconverges here <br><br> _Dialog Code:  Chapter_2_0037700 ",
    "jump Chapter_2_after_choice_2",
  ],
  'Chapter_2_after_choice_2': [
    // end hardcoded dialog_code == 'Chapter_2_0035300
'''
    if 'Chapter_2_0035500' <= dialog_code    and   dialog_code <= 'Chapter_2_0037700'  : 
        return '    // %s removed - covered in choice block above \n' %dialog_code 













    if dialog_code == 'Chapter_2_0086100':
        return '''
    // start hardcoded dialog_code == Chapter_2_0086100
    {
      'Choice': {
        'Chapter_2_Choice_3_dont_invite_her_to_the_radio_club': {
          'Text': "Don\'t invite her to the radio club",
          'Do': 'jump Chapter_2_Choice_3_dont_invite_her_to_the_radio_club',
        },
        'Chapter_2_Choice_3_invite_her_to_the_radio_club': {
          'Text': 'Invite her to the radio club',
          'Do': 'jump Chapter_2_Choice_3_invite_her_to_the_radio_club',
        },
      }
    },
  ],

  'Chapter_2_Choice_3_dont_invite_her_to_the_radio_club': [
    "Choice 1 Don't invite her to the radio club  Chapter_2_0086300 Choice 1: Don\'t invite her to the radio club ",
    "Narration  <br><br> You aren\'t sure how appropriate it would be to bring up the subject again after such a charged exchange, especially considering that the tension was one started by you. You stay quiet, releasing your hold on her hand.  <br><br> _Dialog Code:  Chapter_2_0086600 ",
    "Narration  <br><br> To your surprise, a voice pipes up from beside Skye, finally approaching closer after your apologies were finished. <br><br> _Dialog Code:  Chapter_2_0086800 ",
    "character_object_atria Chapter_2_0087100 Skye? Would you maybe consider joining us? Maybe even if it's later on? ",
    "Narration  <br><br> You're surprised once again by the girl's boldness. Looks like she was the braver one out of the two of you. You smile at Skye, emboldened by your friend to ask again. <br><br> _Dialog Code:  Chapter_2_0087400 ",
    "Scene reconverges here  Chapter_2_0087600 Scene reconverges here ",
    "jump Chapter_2_after_choice_3",
  ],
  'Chapter_2_Choice_3_invite_her_to_the_radio_club': [
    "Choice 2 Invite her to the radio club  Chapter_2_0087800 Choice 2: Invite her to the radio club ",
    "Narration  <br><br> 	Scene reconverges here <br><br> _Dialog Code:  Chapter_2_0087900 ",
    "jump Chapter_2_after_choice_3",
  ],
  'Chapter_2_after_choice_3': [
    // end hardcoded dialog_code == 'Chapter_2_0086100
'''
    if 'Chapter_2_0086300' <= dialog_code    and   dialog_code <= 'Chapter_2_0087900'  : 
        return '    // %s removed - covered in choice block above \n' %dialog_code 
















    if dialog_code == 'Chapter_3_0012100':
        return '''
    // start hardcoded dialog_code == Chapter_3_0012100
    {
      'Choice': {
        'Chapter_3_Choice_1_knock_and_try_to_invite_esmeray_to_the_club': {
          'Text': "Knock and try to invite Esmeray",
          'Do': 'jump Chapter_3_Choice_1_knock_and_try_to_invite_esmeray_to_the_club',
        },
        'Chapter_3_Choice_1_dont_knock_and_invite_esmeray': {
          'Text': "Don\'t knock and invite Esmeray",
          'Do': 'jump Chapter_3_Choice_1_dont_knock_and_invite_esmeray',
        },
      }
    },
  ],

  'Chapter_3_Choice_1_knock_and_try_to_invite_esmeray_to_the_club': [
    "character_object_esmeray Chapter_3_0012300 Choice 1: Knock and try to invite Esmeray to the Club ",
    "Narration  <br><br> You take a deep breath and knock quietly before walking into the classroom. <br><br> _Dialog Code:  Chapter_3_0012600 ",
    "character_object_esmeray Chapter_3_0012800 Esmeray Unamused ",
    "Narration  <br><br> Esmeray immediately stops playing, his face loses its smile, and he turns to you with a cold face. <br><br> _Dialog Code:  Chapter_3_0013000 ",
    "Scene reconverges here  Chapter_3_0013200 Scene reconverges here ",
    "jump Chapter_3_after_choice_1",
  ],
  'Chapter_3_Choice_1_dont_knock_and_invite_esmeray': [
    "character_object_esmeray Chapter_3_0013400 Choice 2: Don't Knock and invite Esmeray ",
    "Narration  <br><br> You hesitate in asking Esmeray to join. <br><br> _Dialog Code:  Chapter_3_0013700 ",
    "Narration  <br><br> He's very high profile! Why would he want to join a club that no one knows about? <br><br> _Dialog Code:  Chapter_3_0013900 ",
    "Narration  <br><br> While you were deliberating, you accidentally shuffle in place, bumping into the classroom's door. <br><br> _Dialog Code:  Chapter_3_0014100 ",
    "Narration  <br><br> *CREAK* Door creak SFX <br><br> _Dialog Code:  Chapter_3_0014300 ",
    "character_object_esmeray Chapter_3_0014500 Esmeray Unamused ",
    "Narration  <br><br> Quickly, Esmeray stops playing, his face loses its smile, and he turns to the door with a cold face. <br><br> _Dialog Code:  Chapter_3_0014700 ",
    "Narration  <br><br> You laugh awkwardly, before slowly entering the room. <br><br> _Dialog Code:  Chapter_3_0014900 ",
    "Scene reconverges here  Chapter_3_0015000 Scene reconverges here ",
    "jump Chapter_3_after_choice_1",
  ],
  'Chapter_3_after_choice_1': [
    // end hardcoded dialog_code == 'Chapter_3_0012100
'''
    if 'Chapter_3_0012300' <= dialog_code    and   dialog_code <= 'Chapter_3_0015000'  : 
        return '    // %s removed - covered in choice block above \n' %dialog_code 

















    if dialog_code == 'Chapter_3_0036100':
        return '''
    // start hardcoded dialog_code == Chapter_3_0036100
    {
      'Choice': {
        'Chapter_3_Choice_2_invite_esmeray_to_the_club': {
          'Text': "Invite Esmeray to the Club ",
          'Do': 'jump Chapter_3_Choice_2_invite_esmeray_to_the_club',
        },
        'Chapter_3_Choice_2_hesitate': {
          'Text': "Hesitate",
          'Do': 'jump Chapter_3_Choice_2_hesitate',
        },
        'Chapter_3_Choice_2_turn_around_and_go_back_down_the_stairs': {
          'Text': "Turn around and go back down the stairs",
          'Do': 'jump Chapter_3_Choice_2_turn_around_and_go_back_down_the_stairs',
        },
      }
    },
  ],

  'Chapter_3_Choice_2_invite_esmeray_to_the_club': [
    "character_object_esmeray Chapter_3_0036300 Choice 1: Invite Esmeray to the Club ",
    "Narration  <br><br> You remember how it went the last time you had found Esmeray sitting alone and singing to himself, as well as the stinging rejection that came with it. <br><br> _Dialog Code:  Chapter_3_0036600 ",
    "Narration  <br><br> But, you also remember the friends you made along the way, and the benefits of having Esmeray in the club. <br><br> _Dialog Code:  Chapter_3_0036800 ",
    "Narration  <br><br> Like last time, you take a deep breath before pushing open the door to the rooftop boldly. <br><br> _Dialog Code:  Chapter_3_0037000 ",
    "Narration  <br><br> *CREAK* Door creak SFX <br><br> _Dialog Code:  Chapter_3_0037200 ",
    "character_object_esmeray Chapter_3_0037400 Esmeray Neutral ",
    "Narration  <br><br> Esmeray stops singing and turns to the door, only to make eye contact with you. <br><br> _Dialog Code:  Chapter_3_0037600 ",
    "character_object_esmeray Chapter_3_0037800 Esmeray Unamused ",
    "Narration  <br><br> He immediately stops smiling. There\'s a long pause as Esmeray stares at you long and hard. <br><br> _Dialog Code:  Chapter_3_0038000 ",
    "Narration  <br><br> But, rather than pushing you away for the umpteenth time, he rolls his eyes and shifts to the side, making room for you to sit next to him. <br><br> _Dialog Code:  Chapter_3_0038200 ",
    "Narration  <br><br> Your eyes widen, but you don't want to let go of this opportunity, and go and sit next to him. <br><br> _Dialog Code:  Chapter_3_0038400 ",
    "Scene reconverges here  Chapter_3_0038600 Scene reconverges here ",
    "jump Chapter_3_after_choice_2",
  ],
  'Chapter_3_Choice_2_hesitate': [
    "Choice 2 Hesitate  Chapter_3_0038800 Choice 2: Hesitate ",
    "Narration  <br><br> You remember how it went the last time you had found Esmeray sitting alone and singing to himself, as well as the stinging rejection that came with it. <br><br> _Dialog Code:  Chapter_3_0039000 ",
    "Narration  <br><br> What would be the difference now? <br><br> _Dialog Code:  Chapter_3_0039200 ",
    "Narration  <br><br> Sure, you pestered him the last couple of days so maybe he'll consider it. <br><br> _Dialog Code:  Chapter_3_0039400 ",
    "Narration  <br><br> But what if he doesn't? <br><br> _Dialog Code:  Chapter_3_0039600 ",
    "Narration  <br><br> While deliberating and waving your arms around, trying to make a plan, your thoughts distract you so much to the point that you accidentally hit the door wide open. <br><br> _Dialog Code:  Chapter_3_0039800 ",
    "Narration  <br><br> *CREAK* Door creak SFX <br><br> _Dialog Code:  Chapter_3_0040000 ",
    "character_object_esmeray Chapter_3_0040200 Esmeray Neutral ",
    "Narration  <br><br> Esmeray stops singing and turns to the door, only to make eye contact with you. <br><br> _Dialog Code:  Chapter_3_0040400 ",
    "character_object_esmeray Chapter_3_0040600 Esmeray Unamused ",
    "Narration  <br><br> He immediately stops smiling. There\'s a long pause. You can hardly breathe as Esmeray stares at you long and hard. <br><br> _Dialog Code:  Chapter_3_0040800 ",
    "Narration  <br><br> But, rather than pushing you away for the umpteenth time, he rolls his eyes and shifts to the side, making room for you to sit next to him. <br><br> _Dialog Code:  Chapter_3_0041000 ",
    "Narration  <br><br> Your eyes widen, but you don't want to let go of this opportunity, and go and sit next to him. <br><br> _Dialog Code:  Chapter_3_0041200 ",
    "Scene reconverges here  Chapter_3_0041400 Scene reconverges here ",
    "jump Chapter_3_after_choice_2",
  ],
  'Chapter_3_Choice_2_turn_around_and_go_back_down_the_stairs': [
    "Choice 3 Turn around and Go Back Down the Stairs  Chapter_3_0041600 Choice 3: Turn around and Go Back Down the Stairs ",
    "Narration  <br><br> You remember how it went the last time you had found Esmeray sitting alone and singing to himself, as well as the stinging rejection that came with it. <br><br> _Dialog Code:  Chapter_3_0041900 ",
    "Narration  <br><br> You remember how tiring it was to have the courage to face Esmeray and invite him over and over, only for him to brush you off. <br><br> _Dialog Code:  Chapter_3_0042100 ",
    "Narration  <br><br> Maybe this was the time to finally give up. <br><br> _Dialog Code:  Chapter_3_0042300 ",
    "Narration  <br><br> Thinking so, you turn around, getting ready to go down the stairs again. <br><br> _Dialog Code:  Chapter_3_0042500 ",
    "Narration  <br><br> ...Unfortunately for you, you turn so quickly that your elbow slams into the door, making it creak loudly as it swings wide open. <br><br> _Dialog Code:  Chapter_3_0042700 ",
    "Narration  <br><br> *CREAK* Door creak SFX <br><br> _Dialog Code:  Chapter_3_0042900 ",
    "character_object_esmeray Chapter_3_0043100 Esmeray Neutral ",
    "Narration  <br><br> Esmeray stops singing and turns to the door, only to make eye contact with you. <br><br> _Dialog Code:  Chapter_3_0043300 ",
    "character_object_esmeray Chapter_3_0043500 Esmeray Unamused ",
    "Narration  <br><br> He immediately stops smiling. There\'s a long pause. You can hardly breathe as Esmeray stares at you long and hard. <br><br> _Dialog Code:  Chapter_3_0043700 ",
    "Player  <br><br> 	Is he gonna push me away again?... <br><br> _Dialog Code:  Chapter_3_0044000 ",
    "Narration  <br><br> But, rather than pushing you away for the umpteenth time, he rolls his eyes and shifts to the side, making room for you to sit next to him. <br><br> _Dialog Code:  Chapter_3_0044300 ",
    "Narration  <br><br> Your eyes widen, but you don't want to let go of this opportunity, and go and sit next to him. <br><br> _Dialog Code:  Chapter_3_0044500 ",
    "Scene reconverges here  Chapter_3_0044600 Scene reconverges here ",
    "jump Chapter_3_after_choice_2",
  ],
  'Chapter_3_after_choice_2': [
    // end hardcoded dialog_code == 'Chapter_3_0036100
'''
    if 'Chapter_3_0036300' <= dialog_code    and   dialog_code <= 'Chapter_3_0044600'  : 
        return '    // %s removed - covered in choice block above \n' %dialog_code 















    if dialog_code == 'Chapter_3_0074000':
        return '''
    // start hardcoded dialog_code == Chapter_3_0074000
    {
      'Choice': {
        'Chapter_3_Choice_3_introduct_Esmeray': {
          'Text': "Introduce Esmeray",
          'Do': 'jump Chapter_3_Choice_3_introduct_Esmeray',
        },
        'Chapter_3_Choice_3_wait_for_esmeray_to_intreoduce_themselves': {
          'Text': "Wait for Esmeray to introduce themselves",
          'Do': 'jump Chapter_3_Choice_3_wait_for_esmeray_to_intreoduce_themselves',
        },
      }
    },
  ],

  'Chapter_3_Choice_3_introduct_Esmeray': [
    "character_object_esmeray Chapter_3_0074200 Choice 1: Introduce Esmeray ",
    "Scene reconverges here  Chapter_3_0074400 Scene reconverges here ",
    "jump Chapter_3_after_choice_3",
  ],
  'Chapter_3_Choice_3_wait_for_esmeray_to_intreoduce_themselves': [
    "character_object_esmeray Chapter_3_0074600 Choice 2: Wait for Esmeray to introduce themselves ",
    "Narration  <br><br> You want to let Esmeray introduce himself, and do jazz hands to start it off. <br><br> _Dialog Code:  Chapter_3_0074900 ",
    "Narration  <br><br> Really, you're just doing jazz hands in awkward silence... <br><br> _Dialog Code:  Chapter_3_0075100 ",
    "Narration  <br><br> ... <br><br> _Dialog Code:  Chapter_3_0075300 ",
    "Narration  <br><br> ...What are you doing right now? Lol. <br><br> _Dialog Code:  Chapter_3_0075500 ",
    "Narration  <br><br> You cough awkwardly at the silence before slowly putting your hands down. <br><br> _Dialog Code:  Chapter_3_0075700 ",
    "Narration  <br><br> You clear your throat again, desperate to get out of this situation. <br><br> _Dialog Code:  Chapter_3_0075900 ",
    "Scene reconverges here  Chapter_3_0076000 Scene reconverges here ",
    "jump Chapter_3_after_choice_3",
  ],
  'Chapter_3_after_choice_3': [
    // end hardcoded dialog_code == 'Chapter_3_0074000
'''
    if 'Chapter_3_0074200' <= dialog_code    and   dialog_code <= 'Chapter_3_0076000'  : 
        return '    // %s removed - covered in choice block above \n' %dialog_code 
















    # end of choice rules 


    

    if 'Player' in char_name:        
        # return False
        char_name = 'character_object_player'
    elif 'Narration' in char_name:        
        # return False
        char_name = 'character_object_narration'
    
    elif 'Kyo' in char_name:        
        char_name = 'character_object_kyo'
    elif 'Atria' in char_name: 
        char_name = 'character_object_atria'
    elif 'Girl A' in char_name :
        char_name = 'character_object_girl_a'
    elif 'Girl B' in char_name :
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
    output_to_json+='    "'
    output_to_json+= char_name \
        .replace("[", "") \
        .replace("]", "") \
        .replace(":", "") \
        .replace("\n", "")
    output_to_json+=" <br><br>"
    output_to_json+= line_text \
        .replace("[", "") \
        .replace("]", "") \
        .replace("'", "\\'") \
        .replace("\"", "\\\"") \
        .replace("\n", "")[:-1]
    output_to_json+="  <br><br> _Dialog Code:  " + dialog_code    # del this line in actual release
    output_to_json+=' "'
    output_to_json+=",\n"
    
    # print('will output: \n', output_to_json)
    return output_to_json

