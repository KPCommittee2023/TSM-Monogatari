/* global monogatari */

// Define the messages used in the game.
monogatari.action("message").messages({
  Help: {
    title: "Help",
    subtitle: "Some useful Links",
    body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`,
  },
});

// Define the notifications used in the game
monogatari.action("notification").notifications({
  Welcome: {
    title: "Welcome",
    body: "This is the Monogatari VN Engine",
    icon: "",
  },
});

// Define the Particles JS Configurations used in the game
monogatari.action("particles").particles({});

// Define the canvas objects used in the game
monogatari.action("canvas").objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {});

// Define the music used in the game.
monogatari.assets("music", {});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {});

// Define the videos used in the game.
monogatari.assets("videos", {});

// Define the images used in the game.
monogatari.assets("images", {});


// Define the backgrounds for each scene.
monogatari.assets("scenes", {


  'Atria_CG': 'special_scenes/Final/Atria_CG.jpg',
  'Esmeray_CG': 'special_scenes/Final/Esmeray_CG.png',

  'kyo_bg': 'special_scenes/Final/Kyo_CG/kyo-bg.png',
  'kyo_cg': 'special_scenes/Final/Kyo_CG/kyo-cg.png',
  'kyo_cg2': 'special_scenes/Final/Kyo_CG/kyo-cg2.png',
  'kyo_sparkle': 'special_scenes/Final/Kyo_CG/kyo-sparkle.png',

  'Tak_berjudul85_20230701211359': 'special_scenes/Final/Skye_CG/Tak_berjudul85_20230701211359.png',
  'Tak_berjudul85_20230701211403': 'special_scenes/Final/Skye_CG/Tak_berjudul85_20230701211403.png',
  'Tak_berjudul85_20230701211407': 'special_scenes/Final/Skye_CG/Tak_berjudul85_20230701211407.png',
  'Tak_berjudul85_20230701211442': 'special_scenes/Final/Skye_CG/Tak_berjudul85_20230701211442.png',


  'music_GUITAR': 'Backgrounds/Final/Music_Room_BG_assets/music_GUITAR.png',
  'music_LAPTOP': 'Backgrounds/Final/Music_Room_BG_assets/music_LAPTOP.png',
  'music_MIC': 'Backgrounds/Final/Music_Room_BG_assets/music_MIC.png',
  'music_PRINTER': 'Backgrounds/Final/Music_Room_BG_assets/music_PRINTER.png',
  'music_room_basic': 'Backgrounds/Final/Music_Room_BG_assets/music_room_basic.png',
  'music_room_basic_ALL': 'Backgrounds/Final/Music_Room_BG_assets/music_room_basic_ALL.png',
  'music_room_PLUSHIE': 'Backgrounds/Final/Music_Room_BG_assets/music_room_PLUSHIE.png',

  'Rooftop_bg_day': 'Backgrounds/Final/Rooftop/Rooftop_bg_day.jpeg',
  'Rooftop_bg_night': 'Backgrounds/Final/Rooftop/Rooftop_bg_night.jpeg',

  'school_hallway_daylight': 'Backgrounds/Final/School_Hallway/school_hallway_daylight.png',
  'school_hallway_evening': 'Backgrounds/Final/School_Hallway/school_hallway_evening.png',

  'generic_classroom_bg': 'Backgrounds/Final/generic_classroom_bg_daylight.png',

});

// Define the Characters
monogatari.characters({
  'character_object_atria': {
    name: "Atria",
    color: "#912756",
    directory: 'Atria',
    sprites: {
      atria1_happy: 'atria1_happy.png',
      atria1_nervous: 'atria1_nervous.png',
      atria1_sad: 'atria1_sad.png',
      atria1_timid: 'atria1_timid.png',
      atria2_happy: 'atria2_happy.png',
      atria2_nervous: 'atria2_nervous.png',
      atria2_sad: 'atria2_sad.png',
      atria2_timid: 'atria2_timid.png',
    }
  },
  'character_object_esmeray': {
    name: "Esmeray",
    color: "#274554",
    directory: 'Esmeray',
    sprites: {
      Esmeray_amused: "Esmeray_amused.PNG",
      Esmeray_angry: "Esmeray_angry.PNG",
      Esmeray_genuine: "Esmeray_genuine.PNG",
      Esmeray_neutral: "Esmeray_neutral.PNG",
      Esmeray_smile: "Esmeray_smile.PNG",
      Esmeray_teeth_smile: "Esmeray_teeth_smile.PNG",
      Esmeray_unamused: "Esmeray_unamused.PNG",
    }
  },
  'character_object_kyo': {
    name: "Kyo",
    color: "#005766",
    directory: 'Kyo',
    sprites: {
      Kyo_BP_Default: 'Kyo_BP_Default.png',
      Kyo_FP_Bruh: 'FrontPose/Kyo_FP_Bruh.png',
      Kyo_FP_Cheerful: 'FrontPose/Kyo_BP_Kyo_FP_Cheerful.png',
      Kyo_FP_Default: 'FrontPose/Kyo_FP_Default.png',
      Kyo_FP_Sad: 'FrontPose/Kyo_FP_Sad.png',
      Kyo_FP_Shocked: 'FrontPose/Kyo_FP_Shocked.png',
      Kyo_FP_Smiling: 'FrontPose/Kyo_FP_Smiling.png',
      Kyo_SP_Bruh: 'SidePose/Kyo_SP_Bruh.png',
      Kyo_SP_Default: 'SidePose/Kyo_SP_Default.png',
      Kyo_SP_Sad: 'SidePose/Kyo_SP_Sad.png',
    }
  },
  'character_object_skye': {
    name: "Skye",
    color: "#890F0F",
    directory: 'Skye',
    sprites: {
      fix_skye_default: "fix_skye_default.png",
      skye_sad: "skye_sad.png",
      skye_smile: "skye_smile.png",
      skye_smile2: "skye_smile2.png",
    }
  },
  'character_object_player': {
    name: "_Player",
    color: "#2E72C1",
  },
  'character_object_narration': {
    name: "_Narration",
    color: "#2E72C1",
  },
  'character_object_girl_a': {
    name: "Girl A",
    color: "#2F2F30",
  },
  'character_object_girl_b': {
    name: "Girl B",
    color: "#2F2F30",
  },
  'character_object_student_a': {
    name: "Student A",
    color: "#2F2F30",
  },
  'character_object_student_b': {
    name: "Student B",
    color: "#2F2F30",
  },
  'character_object_student_c': {
    name: "Student C",
    color: "#2F2F30",
  },
  'character_object_student_d': {
    name: "Student D",
    color: "#2F2F30",
  },
  'character_object_student': {
    name: "Student",
    color: "#2F2F30",
  },
});

monogatari.script({
  // The game starts here.
  'Start': [

    // 'show scene Atria_CG',
    // 'test speical scene Atria_CG',

    // 'show scene Esmeray_CG',
    // 'test speical scene Esmeray_CG',

    // 'show scene kyo_bg',
    // 'test speical scene kyo_bg',

    // 'show scene kyo_cg',
    // 'test speical scene kyo_cg',

    // 'show scene kyo_cg2',
    // 'test speical scene kyo_cg2',

    // 'show scene kyo_sparkle',
    // 'test speical scene kyo_sparkle',

    // 'show scene Tak_berjudul85_20230701211359',
    // 'test speical scene Tak_berjudul85_20230701211359',

    // 'show scene Tak_berjudul85_20230701211403',
    // 'test speical scene Tak_berjudul85_20230701211403',

    // 'show scene Tak_berjudul85_20230701211407',
    // 'test speical scene Tak_berjudul85_20230701211407',

    // 'show scene Tak_berjudul85_20230701211442',
    // 'test speical scene Tak_berjudul85_20230701211442',



    // "show scene music_GUITAR",
    // 'test scene : music_GUITAR',

    // "show scene music_LAPTOP",
    // 'test scene : music_LAPTOP',

    // "show scene music_MIC",
    // 'test scene : music_MIC',

    // "show scene music_PRINTER",
    // 'test scene : music_PRINTER',

    // "show scene music_room_basic",
    // 'test scene : music_room_basic',

    // "show scene music_room_basic_ALL",
    // 'test scene : music_room_basic_ALL',

    // "show scene music_room_PLUSHIE",
    // 'test scene : music_room_PLUSHIE',

    // "show scene Rooftop_bg_day",
    // 'test scene : Rooftop_bg_day',

    // "show scene Rooftop_bg_night",
    // 'test scene : Rooftop_bg_night',

    // "show scene school_hallway_daylight",
    // 'test scene : school_hallway_daylight',

    // "show scene school_hallway_evening",
    // 'test scene : school_hallway_evening',

    // "show scene generic_classroom_bg",
    // 'test scene : generic_classroom_bg',





    // 'show character character_object_atria atria1_happy normal',
    // 'showing character character_object_atria atria1_happy normal',

    // 'show character character_object_atria atria1_nervous normal',
    // 'showing character character_object_atria atria1_nervous normal',

    // 'show character character_object_atria atria1_sad normal',
    // 'showing character character_object_atria atria1_sad normal',

    // 'show character character_object_atria atria1_timid normal',
    // 'showing character character_object_atria atria1_timid normal',


    // 'show character character_object_atria atria2_happy normal',
    // 'showing character character_object_atria atria2_happy normal',

    // 'show character character_object_atria atria2_nervous normal',
    // 'showing character character_object_atria atria2_nervous normal',

    // 'show character character_object_atria atria2_sad normal',
    // 'showing character character_object_atria atria2_sad normal',

    // 'show character character_object_atria atria2_timid normal',
    // 'showing character character_object_atria atria2_timid normal',




    // 'show character character_object_esmeray Esmeray_amused normal',
    // 'showing character character_object_esmeray Esmeray_amused normal',

    // 'show character character_object_esmeray Esmeray_angry normal',
    // 'showing character character_object_esmeray Esmeray_angry normal',

    // 'show character character_object_esmeray Esmeray_genuine normal',
    // 'showing character character_object_esmeray Esmeray_genuine normal',

    // 'show character character_object_esmeray Esmeray_neutral normal',
    // 'showing character character_object_esmeray Esmeray_neutral normal',

    // 'show character character_object_esmeray Esmeray_smile normal',
    // 'showing character character_object_esmeray Esmeray_smile normal',

    // 'show character character_object_esmeray Esmeray_teeth_smile normal',
    // 'showing character character_object_esmeray Esmeray_teeth_smile normal',

    // 'show character character_object_esmeray Esmeray_unamused normal',
    // 'showing character character_object_esmeray Esmeray_unamused normal',




    // 'show character character_object_kyo Kyo_BP_Default normal',
    // 'showing character character_object_kyo Kyo_BP_Default normal',

    // 'show character character_object_kyo Kyo_FP_Bruh normal',
    // 'showing character character_object_kyo Kyo_FP_Bruh normal',

    // 'show character character_object_kyo Kyo_FP_Cheerful normal',
    // 'showing character character_object_kyo Kyo_FP_Cheerful normal',

    // 'show character character_object_kyo Kyo_FP_Default normal',
    // 'showing character character_object_kyo Kyo_FP_Default normal',

    // 'show character character_object_kyo Kyo_FP_Sad normal',
    // 'showing character character_object_kyo Kyo_FP_Sad normal',

    // 'show character character_object_kyo Kyo_FP_Shocked normal',
    // 'showing character character_object_kyo Kyo_FP_Shocked normal',

    // 'show character character_object_kyo Kyo_FP_Smiling normal',
    // 'showing character character_object_kyo Kyo_FP_Smiling normal',

    // 'show character character_object_kyo Kyo_SP_Bruh normal',
    // 'showing character character_object_kyo Kyo_SP_Bruh normal',

    // 'show character character_object_kyo Kyo_SP_Default normal',
    // 'showing character character_object_kyo Kyo_SP_Default normal',

    // 'show character character_object_kyo Kyo_SP_Sad normal',
    // 'showing character character_object_kyo Kyo_SP_Sad normal',





    // 'show character character_object_skye fix_skye_default normal',
    // 'showing character character_object_skye fix_skye_default normal',

    // 'show character character_object_skye skye_sad normal',
    // 'showing character character_object_skye skye_sad normal',

    // 'show character character_object_skye skye_smile normal',
    // 'showing character character_object_skye skye_smile normal',

    // 'show character character_object_skye skye_smile2 normal',
    // 'showing character character_object_skye skye_smile2 normal',








    {
      'Choice': {
        'Dialog': 'Jump to certain chapter? \
				<br>\
				 (This for developer to use. Delete in actual relesase.)\
				<br>\
				 (top of script.js)',

        'CHAPTER_0': {
          'Text': 'CHAPTER_0',
          'Do': 'jump CHAPTER_0'
        },
        'CHAPTER_1': {
          'Text': 'CHAPTER_1',
          'Do': 'jump CHAPTER_1'
        },
        'CHAPTER_2': {
          'Text': 'CHAPTER_2',
          'Do': 'jump CHAPTER_2'
        },
        'CHAPTER_3': {
          'Text': 'CHAPTER_3',
          'Do': 'jump CHAPTER_3'
        },
        'CHAPTER_E': {
          'Text': 'CHAPTER_E',
          'Do': 'jump CHAPTER_E'
        },
        'end': {
          'Text': 'end',
          'Do': 'jump end'
        }
      }
    },
    'jump CHAPTER_0'
  ],

  'CHAPTER_0': [
    'chap 0,',
    // start-of-CHAPTER-0-mark
    "_Name <br><br>_Tex ",
    " <br><br>Prologue: Waxing Iridescen ",
    "School hallway day <br><br>School hallway da ",
    "Intro Music <br><br>Intro Musi ",
    "character_object_narration <br><br>It\'s lunch break at school, but the atmosphere is livelier than usual. Oh right, it\'s Club Day today. You still can\'t decide which club you want to join this year. ",
    "character_object_narration <br><br>You stop walking the hallways to look at the board of various club posters. Oh man, you\'ve never joined one before, so the amount of options overwhelm you a little. You think of just joining multiple clubs at a time, but you quickly brush off that thought. Clubs are supposed to be a good break from the humdrum of academics. Don\'t get ahead of yourself ",
    "character_object_narration <br><br>There\'s an art club poster. That\'s a hard no. The most artistic you\'ve ever been was when you colored the sky a solid green and the ground magenta. Only because the other crayons were missing. And that was in a coloring book. Not fun at all ",
    "character_object_narration <br><br>There are also a few posters advertising different sports clubs. No thanks. P.E. class already tires you out daily. There\'s no way you have the endurance to do that kind of stuff in your precious free time. ",
    "character_object_narration <br><br>Oh god, there\'s also the paranormal activity club. No way. Nope. You don\'t take the supernatural as seriously as its club members do. You know this because earlier at brunch today, the club advertised by telling ghost stories that were, in their own words, \"real, not clickbait.\ ",
    "character_object_narration <br><br>One of them even said, \"In fact, there\'s a ghost in this school right now, giving bad luck to people who are about to do presentations!\" Nonsense. You\'re a junior and you are damn sure that there were no ghosts the entire time you attended school ",
    "character_object_narration <br><br>It would be fine if the club was interested in ghosts just for fun, but their fervent attitude says otherwise. You shudder at the thought of even talking to them. ",
    "character_object_narration <br><br>Ooh, a debate club poster. You don\'t consider yourself a chatterbox, but it\'s always fascinating to listen to other people\'s perspectives and find ways to decimate their arguments. It\'s basically a fun way to talk shit to others. Well, for the most part, save for some annoyingly serious people.. ",
    "character_object_narration <br><br>Damn, besides the debate club, it looks like you don\'t have many good options here ",
    "character_object_narration <br><br>Wait, what\'s with that poster over there? ",
    "Radio club poster (wall poster). Allow toggle for zoom in to the RadioClub.png in Art folder. <br><br>Radio club poster (wall poster). Allow toggle for zoom in to the RadioClub.png in Art folder ",
    "character_object_narration <br><br>It advertises... a radio club? Interesting. Teachers love to praise your diction and confidence in your class presentations. This could be worth a try. ",
    "character_object_narration <br><br>You enter a nearby room with the radio club sign on its door. ",
    "Music_Room_Basic <br><br>Music_Room_Basi ",
    "character_object_kyo <br><br>Kyo_BP_Defaul ",
    "Centered <br><br>Centere ",
    "character_object_narration <br><br>There\'s only one student here. Yet, you can tell that you\'re in the right place. Her appearance is just as colorful as the poster, and the graffiti beside her only emphasizes that ",
    "character_object_narration <br><br>The microphone on the other side of the room looks too high for her to reach. That\'s a bit weird ",
    "character_object_narration <br><br>It looks like the girl\'s still on her phone. You decide to get her attention ",
    "character_object_player <br><br>Hi, I wanna join the radio club ",
    "character_object_narration <br><br>She puts her phone away and turns around ",

            "character_object_kyo <br><br>AAAAAAAAAAAAAAAAAAAAH!!  <br><br> _Dialog Code:  Chapter_0_0005100 ", // rule based 
   
            "show character character_object_kyo Kyo_FP_Shocked normal", // rule based 
 
                "character_object_narration <br><br>The student\'s voice then drops a few octaves lower than you expect her to have ",
    "character_object_kyo <br><br>You fucking scared the shit out of me! My god. ",
    "character_object_narration <br><br>Well, you now know two things. One, this girl is actually a guy. Two, this dude\'s language is as colorful as his hair. What a bombastic impression you\'ve left on each other. It only goes uphill from here ",
    "character_object_player <br><br>Sorry, I just walked in. Is this the wrong room? I think I\'m in the wrong ro&mdash ",
    "character_object_kyo <br><br>No no, wait. I made sure that the door had a sign on it. You\'re here for the radio club, right ",
    "character_object_player <br><br>Yeah, that\'s kinda what I said before you started freaking out. ",
    "character_object_kyo <br><br>Okay, okay, my bad. I literally didn\'t hear you walk in. Anyways, hi, I\'m Kyo Kaneko. What\'s your name ",
    "character_object_player <br><br>I\'m Player. ",
    "character_object_player <br><br>Player. Alright, here\'s how the club works ",
    "character_object_player <br><br>Wait, you\'re not gonna be writing anything on the board or something like that ",
    "character_object_kyo <br><br>Nah. It\'s not that complicated. ",
    "character_object_narration <br><br>Is that his way of saying that he\'s not prepared ",
    "character_object_kyo <br><br>For now, this club mainly does school announcements, but I plan to make it so that we also do podcasting too. ",
    "character_object_narration <br><br>You reach into your backpack ",
    "character_object_narration <br><br>Kyo looks at you in confusion ",
    "character_object_player <br><br>Oh don\'t mind me, I\'m just gonna eat my lunch ",
    "character_object_kyo <br><br>Ooh, what are you having ",
    "character_object_player <br><br>Butter croissants ",
    "character_object_narration <br><br>Kyo stares at your bread a little longer than you want him to ",
    "character_object_kyo <br><br>Can I have some ",

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
    "character_object_kyo Chapter_0_0011700 Actually, never mind. There are probably some RAAAAAAAANCID germs in there. I don't want any of that. I refuuuuuuuuuuse. ",
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

    // Chapter_0_0011400 removed - covered in choice block above 
    // Chapter_0_0011700 removed - covered in choice block above 
    // Chapter_0_0012000 removed - covered in choice block above 
    // Chapter_0_0012200 removed - covered in choice block above 
    // Chapter_0_0012500 removed - covered in choice block above 
    // Chapter_0_0012700 removed - covered in choice block above 
    // Chapter_0_0013000 removed - covered in choice block above 
    // Chapter_0_0013200 removed - covered in choice block above 
    // Chapter_0_0013300 removed - covered in choice block above 
    "character_object_kyo <br><br>Anyways, since this club requires confident people, I\'d say you\'re a pretty good candidate so far. Most people don\'t have the balls to approach me ",
    "character_object_narration <br><br>You look up and down at Kyo incredulously ",
    "character_object_player <br><br>Really? You\'re not even tall enough to reach the mic over there ",
    "character_object_kyo <br><br>Hey hey, shut up. Shut the fuck up ",
    "character_object_narration <br><br>Kyo looks up at the classroom clock ",
    "character_object_kyo <br><br>Lunch\'s almost over. So, whaddya say, you wanna join the club or not ",

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
    "character_object_kyo Chapter_0_0016300 Yeah, let's go! Finally, there's a second member. ",
    "Player  <br><br> Wait, nobody else is in this club yet?  <br><br> _Dialog Code:  Chapter_0_0016600 ",
    "character_object_kyo Chapter_0_0016900 Oh shit, I forgot to tell you. Yeah, you're the only one who joined so far. But here's where you come in. ",
    "character_object_kyo Chapter_0_0017200 To officially register the club, I'm gonna need you to recruit 3 more people by the end of the month. You can do it, you're charismatic enough. ",
    "Player  <br><br> Hold on, I didn't agree to do free labor. Why don't you do it yourself' <br><br> _Dialog Code:  Chapter_0_0017500 ",
    "Narration  <br><br> The lunch bell rings. <br><br> _Dialog Code:  Chapter_0_0017800 ",
    "character_object_kyo Chapter_0_0018100 Too late, gotta go. ",
    "Player  <br><br> Hey, wait! <br><br> _Dialog Code:  Chapter_0_0018400 ",
    "Narration  <br><br> You catch a glimpse of Kyo grinning as he bolts past you and out the door. He sings as he escapes into the hallways, cracking his voice. <br><br> _Dialog Code:  Chapter_0_0018700 ",
    "character_object_kyo Chapter_0_0019000 Running through the halls so fast, something something dash' ",
    "Narration  <br><br> And just like that, he makes a left and disappears. The nerve of this dude to leave you hanging like that. . .  <br><br> _Dialog Code:  Chapter_0_0019300 ",
    "Narration  <br><br> You go in the opposite direction to your class. As you make your way there, you think about his request. It's a lot of work, but it's not like you have other plans or commitments this year. Eh, fuck it, you ball. <br><br> _Dialog Code:  Chapter_0_0019500 ",
    "Fade to black  Chapter_0_0019700 Fade to black ",
    "Proceed to Chapter 1  Chapter_0_0019800 Proceed to Chapter 1 ",
    "jump CHAPTER_1",
  ],
  'Chapter_0_Choice_2_No': [
    "Choice 2 No.  Chapter_0_0020100 Choice 2: No. ",
    "character_object_kyo Chapter_0_0020400 Oh, why not?  ",
    "Player  <br><br> Oh, don't take this the wrong way. It's just that I wanna consider my other options.  <br><br> _Dialog Code:  Chapter_0_0020700 ",
    "character_object_kyo Chapter_0_0021000 Like what? ",
    "Player  <br><br> Hm? Isn't it normal to do that?  <br><br> _Dialog Code:  Chapter_0_0021300 ",
    "character_object_kyo Chapter_0_0021600 What other clubs were you thinking of joining? Because this club can do better than all of them. ",
    "Narration  <br><br> Where did this sudden pushiness and big ego come from?  <br><br> _Dialog Code:  Chapter_0_0021900 ",
    "Player  <br><br> I was thinking of joining the debate club' <br><br> _Dialog Code:  Chapter_0_0022200 ",
    "character_object_kyo Chapter_0_0022500 Bro, I am right here. I am THE debate master. I'm not all business all the time you know. I can do other things outside of club meetings.  ",
    "Player  <br><br> Okay, but I have to ask. You're cool and all, but are you the only club member?  <br><br> _Dialog Code:  Chapter_0_0022800 ",
    "character_object_kyo Chapter_0_0023100 Yes, but I'm gonna get more soon' ",
    "Player  <br><br> Look, I'll go check out other clubs later this week. If I don't like any of them, I'll come back here. Okay? <br><br> _Dialog Code:  Chapter_0_0023400 ",
    "Narration  <br><br> The lunch bell rings. <br><br> _Dialog Code:  Chapter_0_0023700 ",
    "Player  <br><br> Don't wanna be late to class. See ya. <br><br> _Dialog Code:  Chapter_0_0024000 ",
    "character_object_kyo Chapter_0_0024200 Kyo_BP_Sad ",
    "Narration  <br><br> You feel a little guilty seeing his dejected expression as you leave the classroom. But it's too late now; you stick to your decision and go to your next class. <br><br> _Dialog Code:  Chapter_0_0024500 ",
    "Empty black screen.  Chapter_0_0024700 Empty black screen. ",
    "Narration  <br><br> The next day, you try to find Kyo in the radio club room. But the room is empty. You try asking people about Kyo's whereabouts, but people don't even know who he is. What the hell. That's weird. Eh, whatever. Life continues to be lonely as usual. <br><br> _Dialog Code:  Chapter_0_0025000 ",
    "Game end - joke ending. Restart from beginning of game  Chapter_0_0025200 Game end - joke ending. Restart from beginning of game ",
    "jump END",
    // Chapter_0_0015500 removed - covered in choice block above 
    // Chapter_0_0015700 removed - covered in choice block above 
    // Chapter_0_0016000 removed - covered in choice block above 
    // Chapter_0_0016300 removed - covered in choice block above 
    // Chapter_0_0016600 removed - covered in choice block above 
    // Chapter_0_0016900 removed - covered in choice block above 
    // Chapter_0_0017200 removed - covered in choice block above 
    // Chapter_0_0017500 removed - covered in choice block above 
    // Chapter_0_0017800 removed - covered in choice block above 
    // Chapter_0_0018100 removed - covered in choice block above 
    // Chapter_0_0018400 removed - covered in choice block above 
    // Chapter_0_0018700 removed - covered in choice block above 
    // Chapter_0_0019000 removed - covered in choice block above 
    // Chapter_0_0019300 removed - covered in choice block above 
    // Chapter_0_0019500 removed - covered in choice block above 
    // Chapter_0_0019700 removed - covered in choice block above 
    // Chapter_0_0019800 removed - covered in choice block above 
    // Chapter_0_0020100 removed - covered in choice block above 
    // Chapter_0_0020400 removed - covered in choice block above 
    // Chapter_0_0020700 removed - covered in choice block above 
    // Chapter_0_0021000 removed - covered in choice block above 
    // Chapter_0_0021300 removed - covered in choice block above 
    // Chapter_0_0021600 removed - covered in choice block above 
    // Chapter_0_0021900 removed - covered in choice block above 
    // Chapter_0_0022200 removed - covered in choice block above 
    // Chapter_0_0022500 removed - covered in choice block above 
    // Chapter_0_0022800 removed - covered in choice block above 
    // Chapter_0_0023100 removed - covered in choice block above 
    // Chapter_0_0023400 removed - covered in choice block above 
    // Chapter_0_0023700 removed - covered in choice block above 
    // Chapter_0_0024000 removed - covered in choice block above 
    // Chapter_0_0024200 removed - covered in choice block above 
    // Chapter_0_0024500 removed - covered in choice block above 
    // Chapter_0_0024700 removed - covered in choice block above 
    // Chapter_0_0025000 removed - covered in choice block above 
    // Chapter_0_0025200 removed - covered in choice block above 
    // end-of-CHAPTER-0-mark
    'jump CHAPTER_1',
  ],

  'CHAPTER_1': [
    'chap 1',
    // start-of-CHAPTER-1-mark
    "_Name <br><br>_Tex ",
    " <br><br>Chapter 1: Healing the Conditioned Puppe ",
    "School Rooftop Day <br><br>School Rooftop Da ",
    "character_object_atria <br><br>Atria\'s BG ",
    "character_object_narration <br><br>.. ",
    "character_object_narration <br><br>The fresh air really is relaxing when there\'s so much going on. Having to recruit members for a radio club of all things, and so suddenly too... as if that isn\'t crazy enough, the amount of drama at the school has been...irritating, to say the least ",
    "character_object_narration <br><br>Hell, it\'s insane. ...Those damn rumors that the school is haunted are... unnerving, to say the least ",
    "character_object_player <br><br>...People are so desperate to just get a reaction out of people, huh... at this point I don\'t doubt this school\'s going to digress into chaos ",
    "character_object_kyo <br><br>Chaos? I call it fun ",
    "character_object_player <br><br>WHAT TH&mdash ",
    "character_object_kyo <br><br>Have you found any recruits yet ",
    "character_object_player <br><br>...Warn me next time before sneaking up on me, will you? ",
    "character_object_kyo <br><br>No thanks ",
    "character_object_narration <br><br>Kyo leans forward, his hands on his hips. His expression screams nothing but smug mockery, plainly amused at your annoyance ",
    "character_object_kyo <br><br>Now, you\'ve found someone, right? Surely it can\'t be so hard to evaluate who here is a good candidate. Not when there are very few people who stand out amongst the rest ",
    "character_object_narration <br><br>He speaks as if he already has certain people in mind. If so, why is he so insistent on you recruiting members as opposed to him ",
    "character_object_player <br><br>No, Kyo, it has quite literally only been a couple hours ",
    "character_object_kyo <br><br>Mhm... from the way you\'re acting now, I\'ve most likely put too much faith in you... I guarantee you\'re just too introverted to go up and ask someone to join ",
    "character_object_player <br><br>...Actually, I genuinely haven\'t seen anyone who looks suitable. A radio club requires someone who is willing to... well, talk. Right ",
    "character_object_kyo <br><br>Right.. ",
    "character_object_kyo <br><br>You sure you\'re not just scared to interact with people ",
    "character_object_player <br><br>Shut up ",
    "character_object_narration <br><br>Jeez. For someone he just met, Kyo sure has some nerve ",
    "character_object_player <br><br>I hate to break it to you, Mr. know-it-all, but I have yet to see anybody who seems talkative. If anything, I\'m the most extroverted person here ",
    "character_object_narration <br><br>Kyo just shoots you a cocky grin, rolling his eyes playfully. ",
    "character_object_kyo <br><br>Mhm, very believable. Just be a bit more observant, will you? It really can\'t be that difficult to find someone ",
    "character_object_player <br><br>But ",
    "character_object_kyo <br><br>Yeah, yeah. I get it. Your short attention span won\'t allow you to tune into one person for more than 15 seconds ",
    "character_object_narration <br><br>You scowl at his remark, but your reaction only further enables him to keep poking at you. You didn\'t really mind his banter, but at the very least you wish you could have the ability to snap back ",
    "character_object_player <br><br>What do you want me to do? Just sit and observe as someone goes about their day?? Just stand menacingly in some corner and watch them ",
    "character_object_kyo <br><br>No need to make it sound so creepy. Listen, you gotta do what you gotta do. Just don\'t make it too obvious. ",
    "character_object_kyo <br><br>Though, from what I\'ve seen, I\'m starting to even question whether you\'re capable of that much ",

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
    // Chapter_1_0008700 removed - covered in choice block above 
    // Chapter_1_0009000 removed - covered in choice block above 
    // Chapter_1_0009300 removed - covered in choice block above 
    // Chapter_1_0009600 removed - covered in choice block above 
    // Chapter_1_0009800 removed - covered in choice block above 
    // Chapter_1_0010100 removed - covered in choice block above 
    // Chapter_1_0010400 removed - covered in choice block above 
    // Chapter_1_0010600 removed - covered in choice block above 
    // Chapter_1_0010700 removed - covered in choice block above 
    "character_object_kyo <br><br>Remove Ky ",
    "character_object_atria <br><br>Atria1_Happy. Darken by 50%, centere ",
    "character_object_narration <br><br>At that moment, you see a group of girls across the courtyard. They all seem rather silent&mdash;bored, even&mdash; but one of them in particular stands out to you ",
    "??? <br><br>Anyways! About the person I was talking about earlier, the one that I frequently watch. They did this one stream recently, it was a collaboration with some of my favorite streamers! When I saw the waiting room for it, I got really excited ",
    "??? <br><br>I sent it to you guys a while back, though I\'m not sure if you saw it? Neither of you responded... Do you think there\'s a possibility we could watch it together sometime ",
    "character_object_narration <br><br>The two other girls look at each other before faking a smile towards her direction ",
    "character_object_girl_a <br><br>...You\'re ranting about these streamers every two seconds, you expect us to know which one you are talking about ",
    "character_object_atria <br><br>Oh&mdash; ...Yeah. Sorry. I guess sometimes I just say stuff without really thinking ",
    "character_object_atria <br><br>The one with... let\'s see, I\'m trying to think of a way to describe this to someone who doesn\'t watch them. They have... blue hair. It\'s short, around shoulder length. Does that ring a bell ",
    "character_object_narration <br><br>Wait.. ",
    "character_object_narration <br><br>Short... blue hair...? That\'s.. ",
    "character_object_narration <br><br>Kind of silly ",
    "??? <br><br>I understand if you guys don\'t remember! I know I can speak a bit quickly at times ",
    "??? <br><br>Oh! Yeah, the one I was talking about yesterday! Surely you remember th&mdash ",
    "character_object_girl_a <br><br>Hello? Earth to Atria? Atria Aiyashi ",
    "character_object_girl_a <br><br>You know, the Atria that thinks before she goes on meaningless tangents? We\'re tired of you constantly bothering us about stuff we aren\'t interested in ",
    "character_object_atria <br><br>Atria2_Nervou ",
    "character_object_narration <br><br>The small yellow haired girl, supposedly named Atria, tenses at the others\' remark. She had been rambling excitedly about her interests just a moment ago and yet... her tone suddenly falters ",
    "character_object_atria <br><br>...A-Ah.. was I too much?. ",
    "character_object_girl_b <br><br>Atria, you can\'t keep forgetting we raised you to be silent ",
    "character_object_atria <br><br>I\'m sorry... I didn\'t mean to do anything.. ",
    "character_object_girl_b <br><br>It\'s the same answer every single time. No matter how much we remind you, you go back to your annoying little \'hyperfixations\' ",
    "character_object_girl_b <br><br>Surely you can try a bit harder? You\'ve been like this for years now. Is there really something stopping you from just... realizing we don\'t care ",
    "character_object_girl_b <br><br>Take your silly little blue guy and talk about him to yourself, yeah ",
    "character_object_atria <br><br>Genuinely, I didn\'t mean to do anything.. ",
    "character_object_girl_b <br><br>Do you want us to help you or not ",
    "character_object_atria <br><br>I\'m sorry, okay ",
    "character_object_girl_b <br><br>We at least had some sort of faith in you. We thought we could change you to stop you from constantly babbling on...but you haven\'t even made any ounce of progress ",
    "character_object_girl_a <br><br>The only reason we even tolerate you is because we feel bad ",
    "character_object_atria <br><br>Atria1_Sa ",
    "character_object_narration <br><br>Atria opens her mouth, as if to speak, but no sound escape ",
    "character_object_narration <br><br>her ",
    "character_object_narration <br><br>Her voice is caught, suffocated by the others words and the fear of the repercussions of standing up for herself. Her body language speaks volumes, clearly burdened by the weight of the expectations placed upon her ",
    "character_object_narration <br><br>In a shaky, pitiful murmur, she chokes out a rebuttal ",
    "character_object_atria <br><br>I-I said I\'m sorry, okay ",
    "character_object_narration <br><br>Atria seems to regret speaking up halfway through her argument, audible desperation in her wavering voice. However, it was simply idiotic to think that the two standing next to her would back down so easily ",
    "character_object_girl_b <br><br>You really can\'t do anything right, can you ",
    "character_object_narration <br><br>The girl at her side clicks her tongue, smiling manipulatively ",
    "character_object_girl_b <br><br>We\'re nice enough to give you advice, and you can\'t even shut up and take it? You\'re lucky we even waste our effort on you. ",
    "character_object_girl_b <br><br>What happened to the promise you made us? That you\'d do what we ask of you? Do you really want a repeat of what happened last time ",
    "character_object_narration <br><br>The third individual reaches upwards, placing a hand on Atria\'s shoulder \'comfortingly\'. ",
    "character_object_atria <br><br>Atria2_Sad. Make sprite jump in surpris ",
    "character_object_narration <br><br>This only causes Atria to flinch and instinctively put her hand ",
    "character_object_narration <br><br>up in defense ",
    "character_object_girl_a <br><br>...We\'ll take that reaction as a no ",
    "character_object_girl_a <br><br>Remember, we\'re your only friends. We\'re really just trying t ",
    "character_object_girl_a <br><br>do you a favor ",
    "character_object_atria <br><br>.. ",
    "character_object_narration <br><br>There is a hesitation that lasts for what seems like an eternity, as Atria\'s expression fades. Her emotion is lacking in comparison to mere seconds ago. It seems forced, for sure, yet it\'s clear she\'s putting significant effort into holding this mask ",
    "character_object_atria <br><br>...Yeah, thank you for reminding me ",
    "character_object_narration <br><br>She lowers her gaze, attempting with all her will to keep a strong, emotionless veil. This would have been manageable for the time being, but the two others don\'t even respond to her submission ",
    "character_object_narration <br><br>They just... stare. ",
    "character_object_narration <br><br>Stare as she attempts to keep her composure ",
    "character_object_atria <br><br>.. ",
    "character_object_atria <br><br>.. ",
    "character_object_atria <br><br>Atria2_Sad &mdash; only shown momentarily before she disappear ",
    "Footstep SFX <br><br>Footstep SF ",
    "character_object_kyo <br><br>.. ",
    "character_object_kyo <br><br>Das crazy ",
    "character_object_player <br><br>...That\'s really all you have to say ",
    "character_object_kyo <br><br>Kyo_FP_Smilin ",
    "character_object_narration <br><br>Kyo looks at you with an obvious smugness, outwardly unphased by... whatever had just happened between those three. ",
    "character_object_kyo <br><br>I told you if you actually took the time to tune into a conversation, it wouldn\'t be so hard to find someone ",
    "character_object_player <br><br>What, do you want me to go get her and ask her to join a radio club after that ",
    "character_object_narration <br><br>His eyes flicker, looking at the school door where Atria had run off to, then back at you ",
    "character_object_narration <br><br>Back... and forth... and back... and&mdash ",
    "character_object_kyo <br><br>So... are you gonna just sit there? Seriously ",
    "character_object_player <br><br>Wh&mdash ",
    "character_object_kyo <br><br>Are you even gonna do something? Or nah ",
    "character_object_narration <br><br>Kyo looks at you, like he wants you to go run after her. It\'s... oddly ominous. Like he just wants an excuse to make you speak with Atria. ...Does he know her or something? Is that what this was all about? ",

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
    "Narration  <br><br> He clearly knows more than he's letting on... his consistently unsettling statements are starting to stand out more and more... <br><br> _Dialog Code:  Chapter_1_0030600 ",
    "Narration  <br><br> Eh, surely it's nothing. There's no way this guy can do anything, anyways. <br><br> _Dialog Code:  Chapter_1_0030800 ",
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
    // Chapter_1_0029200 removed - covered in choice block above 
    // Chapter_1_0029500 removed - covered in choice block above 
    // Chapter_1_0029700 removed - covered in choice block above 
    // Chapter_1_0030000 removed - covered in choice block above 
    // Chapter_1_0030300 removed - covered in choice block above 
    // Chapter_1_0030600 removed - covered in choice block above 
    // Chapter_1_0030800 removed - covered in choice block above 
    // Chapter_1_0031100 removed - covered in choice block above 
    // Chapter_1_0031400 removed - covered in choice block above 
    // Chapter_1_0031600 removed - covered in choice block above 
    // Chapter_1_0031800 removed - covered in choice block above 
    // Chapter_1_0031900 removed - covered in choice block above 
    "character_object_player <br><br>Fine, fine. Let\'s go find her, alright ",
    "character_object_kyo <br><br>...Actually, I think you should go on your own. I... will only ge ",
    "character_object_kyo <br><br>in the way ",
    "character_object_narration <br><br>He speaks in an eerie tone, as if he\'s admitting to something ",
    "character_object_narration <br><br>What on earth is up with him ",
    "character_object_player <br><br>...Okay? So... you just want me to convince her to join ",
    "character_object_player <br><br>Wait, what do you mean by \'get in the way\'?? ",
    "character_object_player <br><br>.. ",
    "character_object_player <br><br>Actually, nevermind. I can see it ",
    "character_object_kyo <br><br>Kyo sprite is remove ",
    "character_object_narration <br><br>You look at the school building momentarily, sighing. It\'s an irritating reality, but the longer you wait, the harder it will be to find her ",
    "character_object_player <br><br>I guess I\'ll see you later then ",
    "character_object_narration <br><br>You look back to where Kyo had stood just a moment ago, your eyes only meeting blank space ",
    "character_object_player <br><br>Huh ",
    "character_object_narration <br><br>...He never fails to do something strange, does he ",
    "character_object_narration <br><br>You figure you should just get moving ",
    "Transition to School Classroom Day <br><br>Transition to School Classroom Da ",
    "character_object_narration <br><br>.. ",
    "character_object_narration <br><br>Alright then, she has to be somewhere around here ",
    "character_object_player <br><br>Atria? Hello ",
    "character_object_narration <br><br>... ",
    "character_object_narration <br><br>Silence ",
    "character_object_player <br><br>Atria? Don\'t worry... I\'m not gonna yell ",
    "character_object_atria <br><br>Atria1_Sa ",
    "Centered <br><br>Centere ",
    "character_object_narration <br><br>You glance around, scanning the room, your eyes spotting a fragile figure hunched in the corner. The eye contact causes her body to tense, as if she were expecting judgment, or ridicule ",
    "character_object_atria <br><br>...W-why do you... know my name... ",
    "character_object_narration <br><br>Atria speaks between quiet sobs, her voice strained with emotion. She\'s vulnerable, her guard shattered from the weight of her own struggles ",
    "character_object_player <br><br>I... overheard your conversation earlier ",
    "character_object_narration <br><br>You take a few steps towards her, careful not to invade her space. Despite your carefulness, she pushes herself against the walls, making herself appear as small and insignificant as possible ",
    "character_object_atria <br><br>D-did they send you here... to deal with me... ",
    "character_object_narration <br><br>Her voice drips with anticipation. Anticipation to be met with some sort of pain, whether it be emotional or physical ",
    "character_object_player <br><br>No&mdash; it\'s nothing of the sort. My name is Player... It... must be really exhausting having to listen to their torment ",
    "character_object_player <br><br>Do they constantly tell you things like that ",
    "character_object_atria <br><br>I-.. ",
    "character_object_narration <br><br>Atria hesitates, unsure whether she should even respond to such a question ",
    "character_object_atria <br><br>They... they just want what\'s best for me. They\'ve been my friends for a long time. ",
    "character_object_narration <br><br>.. ",
    "character_object_narration <br><br>If you were to disregard the scene that had taken place earlier, her self-assured words would seem genuine. ",
    "character_object_narration <br><br>She\'s noticeably frustrated, like she\'s trying to convince you to believe in her words. Has she really been tricked into thinking she\'s at fault? To the point she would stand up for those so-called \'friends\' ",
    "character_object_player <br><br>How long, exactly, have they been your friends ",
    "character_object_narration <br><br>Your tone is soft, encouraging her to open up. Even so, her eyes dart around, desperately seeking for anywhere to look except your own gaze ",
    "character_object_atria <br><br>...As long as I remember. Really, I\'m serious... they\'re jus ",
    "character_object_atria <br><br>trying to deal with me ",
    "character_object_player <br><br>Don\'t you think they are being a bit... ah, harsh ",
    "character_object_atria <br><br>Atria2_Sa ",
    "character_object_narration <br><br>You observe Atria closely, noticing the conflict within her as she struggles with her loyalty to her \'friends\' and their effect on her emotional stability. She seems torn, caught between the conflicting beliefs instilled by her \'friends\' and the flickers of doubt emerging within her ",
    "character_object_narration <br><br>She speaks, her voice laced with a forced conviction ",
    "character_object_atria <br><br>It\'s... fine. I\'m used to it ",
    "character_object_narration <br><br>...Used to it ",
    "character_object_narration <br><br>You struggle for a good moment, before a realization hits you; her perception of reality has been shaped by years of... whatever they had done to her ",
    "character_object_narration <br><br>Comforting and giving advice wasn\'t exactly your strong suit.. ",
    "character_object_player <br><br>Atria... that\'s not normal ",
    "character_object_atria <br><br>Huh ",
    "character_object_narration <br><br>She takes a few seconds to herself, a mix of confusion and curiosity seeping through her expression. You take the silence as an opportunity to explain and clear up any possible questions ",
    "character_object_player <br><br>What I mean is, friends are meant to encourage your hobbies, and allow you to open up about yourself. What I saw back there wasn\'t healthy... nor acceptable ",
    "character_object_narration <br><br>You speak with a confident tone, pushing aside your own uncertainties on how to navigate such a sensitive conversation. The more you speak, however, the more confusion crosses Atrias face ",
    "character_object_atria <br><br>But... that\'s how it\'s always been. It\'s been like that for a ",
    "character_object_atria <br><br>long as I remember ",
    "character_object_narration <br><br>The confusion of the whole situation only proved the depth of her conditioning ",
    "character_object_narration <br><br>The dynamics you had witnessed between her and her so-called \'friends\' seem to be ingrained in her entire understanding of relationships. It blurs the line of what she depicts as acceptable or not. ",
    "character_object_player <br><br>Do you mind explaining to me what your friends have been like towards you? Perhaps I can get a better insight on what exactly is going on ",
    "character_object_player <br><br>I... understand if you don\'t want to share. Though it really could help me evaluate who\'s in the wrong ",
    "character_object_atria <br><br>...I would, but... they don\'t really like me talking to othe ",
    "character_object_atria <br><br>people.. ",
    "character_object_atria <br><br>...But... the way you are talking to me completely contradicts the things that they have said would happen if I did.. ",
    "character_object_narration <br><br>Atria mumbles, taking in a deep breath as she contemplates whether or not she should open up ",
    "character_object_atria <br><br>...Alright, just&mdash; please don\'t tell them I said anything. Nobody... has ever, er... offered this to me, so... I\'m not really sure how they would react if they found out ",
    "character_object_narration <br><br>You nod, reassuring her ",
    "character_object_player <br><br>I wouldn\'t dream of it ",
    "character_object_narration <br><br>Atria visibly relaxes, her tense posture softening slightly as she starts to consider sharing her experiences. It\'s a step into the unknown for her. ",
    "character_object_atria <br><br>Okay, just... give me a moment. ",
    "character_object_narration <br><br>She takes a deep breath, steadying herself as she gathers the courage to break the chains of silence that have bound her for so long ",
    "character_object_atria <br><br>Atria1_Nervou ",
    "character_object_narration <br><br>A weak smile forms as she reminisces ",
    "character_object_atria <br><br>I met them in 2nd grade, and they were the first people in my life that would actually call me a friend. ...They never really liked me hanging out with others. So, since then, I\'ve just kind of stuck with them ",
    "character_object_atria <br><br>They helped me, and they still help me to this day. The least I can do for them is follow a couple orders here and there. ...I don\'t exactly know what would happen if I didn\'t do as they asked, anyways. There\'s no use putting up too much of a fight ",
    "character_object_narration <br><br>A small, breathless laugh leaves her, but it seems rather simulated ",
    "character_object_atria <br><br>They remind me when I speak too much, and push me to improve myself. They put up with me, even now, after years of not being able to keep to myself ",
    "character_object_atria <br><br>Atria1_Timi ",
    "character_object_narration <br><br>Atria\'s expression fades as she takes a moment to think about what she had just said. Quietly, she repeats her words to herself ",
    "character_object_atria <br><br>...Years ",
    "character_object_atria <br><br>I\'m... lucky they even stick around ",
    "character_object_narration <br><br>Her words are solemn, yet she accepts this idea as the truth with no troubles. You shake your head ",
    "character_object_player <br><br>I... I can\'t know exactly what your life has been like, but from what I saw back there, they... really don\'t seem like they are doing this for your sake. ",
    "character_object_player <br><br>I can understand it\'s difficult to accept this, especially since you haven\'t been exposed to kinder relationships ",
    "character_object_player <br><br>However, isolating you from others and demanding obedience is not a healthy dynamic. You have individuality, and it shouldn\'t be suppressed ",
    "character_object_narration <br><br>You emphasize the qualities of healthy relationships, hoping your words impact her twisted definition of a friend ",
    "character_object_atria <br><br>Atria2_Timi ",
    "character_object_narration <br><br>She looks up in thought, finding it difficult to grasp the foreign concept that her \'friends\' actions may not align with true friendship ",
    "character_object_atria <br><br>But... they\'ve always said it\'s for my own good. That their guidance and control are necessary to make me better. Isn\'t... that how friends are supposed to be ",
    "character_object_narration <br><br>You look at her questioningly, wondering how exactly you could explain this to her when her thought process had been so warped and muddled ",
    "character_object_player <br><br>...Here, imagine this; a friendship where you are allowed to express yourself freely, and your thoughts and feelings are valued. ",
    "character_object_narration <br><br>Atria\'s eyes widen, fascinated in the allure of this alternate reality ",
    "character_object_atria <br><br>Atria1_Timi ",
    "character_object_atria <br><br>...Are you sure... that\'s really possible ",
    "character_object_narration <br><br>You nod, offering her your hand. She reluctantly takes it, standing ",
    "character_object_player <br><br>...I understand if you don\'t believe me, but hey, why not try it out ",
    "character_object_atria <br><br>.. ",
    "character_object_atria <br><br>...I-I\'m scared.. ",
    "character_object_atria <br><br>...What are they going to think ",
    "character_object_narration <br><br>You look at her with solemn eyes, acknowledging the severity of her situation ",

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
    // Chapter_1_0058800 removed - covered in choice block above 
    // Chapter_1_0059100 removed - covered in choice block above 
    // Chapter_1_0059300 removed - covered in choice block above 
    // Chapter_1_0059500 removed - covered in choice block above 
    // Chapter_1_0059700 removed - covered in choice block above 
    // Chapter_1_0060000 removed - covered in choice block above 
    // Chapter_1_0060300 removed - covered in choice block above 
    // Chapter_1_0060500 removed - covered in choice block above 
    // Chapter_1_0060800 removed - covered in choice block above 
    // Chapter_1_0061100 removed - covered in choice block above 
    // Chapter_1_0061300 removed - covered in choice block above 
    // Chapter_1_0061600 removed - covered in choice block above 
    // Chapter_1_0061800 removed - covered in choice block above 
    // Chapter_1_0062000 removed - covered in choice block above 
    // Chapter_1_0062300 removed - covered in choice block above 
    // Chapter_1_0062500 removed - covered in choice block above 
    // Chapter_1_0062700 removed - covered in choice block above 
    // Chapter_1_0063000 removed - covered in choice block above 
    // Chapter_1_0063200 removed - covered in choice block above 
    // Chapter_1_0063500 removed - covered in choice block above 
    // Chapter_1_0063600 removed - covered in choice block above 
    "character_object_atria <br><br>But.. ",
    "character_object_atria <br><br>Atria1_Nervou ",
    "character_object_atria <br><br>I can try ",
    "character_object_narration <br><br>You smile at her efforts ",
    "character_object_player <br><br>I\'ll be here whenever you need me, okay ",
    "character_object_player <br><br>Well... of course I\'m not always here but- My point is, if you need help, don\'t worry about asking for it ",
    "character_object_atria <br><br>Atria2_Nervou ",
    "character_object_narration <br><br>Atria nods, which you take as a cue to leave ",
    "character_object_narration <br><br>.. ",
    "character_object_narration <br><br>But upon turning around.. ",
    "character_object_atria <br><br>Atria sprite is remove ",
    "character_object_kyo <br><br>Kyo_FP_Bruh - Appears before dialogue bo ",
    "character_object_player <br><br>K&mdash ",
    "character_object_player <br><br>Holy BONKERS will you stop doing that&mdash ",
    "character_object_kyo <br><br>Oh, come on. I\'m not that scary ",
    "character_object_kyo <br><br>Anyways, will you stop forgetting why you even talked to her in the first place? ",
    "character_object_narration <br><br>Oh, right. The radio club ",
    "character_object_player <br><br>Well&mdash; you\'re here now, so why don\'t you do it ",
    "character_object_kyo <br><br>...She\'s waaay more likely to listen to you, you\'re the one that was persuading her to do a load of other things ",
    "character_object_player <br><br>Sounds like an excuse to me. You\'re pretty good a ",
    "character_object_player <br><br>blabbering, you two could get along ",
    "character_object_narration <br><br>Kyo reaches his hand out to push you back towards Atria, but stops mid-way, pulling his hand back, and letting out a long sigh before gesturing to her ",
    "character_object_kyo <br><br>Go on ",
    "character_object_atria <br><br>Atria2_Nervou ",
    "character_object_kyo <br><br>Kyo left, Atria righ ",
    "character_object_player <br><br>...Sorry about that ",
    "character_object_narration <br><br>Atria looks towards you with blatant confusion ",
    "character_object_player <br><br>I was just wondering if you\'re interested in clubs at all? It\'ll be a perfect opportunity to get yourself out there and make new friends ",
    "character_object_player <br><br>I was hoping to recruit you to the radio club. There, you\'ll be able to go on tangents without being judged. I think you\'ll fit the role perfectly, and hey, you could maybe help recruit some new members too... ",
    "character_object_atria <br><br>Atria2_Timi ",
    "character_object_atria <br><br>Ah... you\'re sure I won\'t come off as annoying? Y\'know... talking and such ",
    "character_object_player <br><br>Of course not. The entire point of a radio club is to speak into a microphone. You can even take it for a little test run, if you\'d like ",
    "character_object_atria <br><br>.. ",
    "character_object_atria <br><br>W-well... I suppose it\'s the least I can do... you\'ve kind of helped me consider possibilities I would have never even imagined otherwise.. ",
    "character_object_narration <br><br>There\'s a brief pause before Atria clings to your sleeve, allowing you to lead the way ",
    "Sprites are removed - momentarily for background transition <br><br>Sprites are removed - momentarily for background transitio ",
    "Music_Room_Basic + Music_Printer <br><br>Music_Room_Basic + Music_Printe ",
    "character_object_kyo <br><br>Kyo_SP_Defaul ",
    "character_object_atria <br><br>Atria1_Timi ",
    "character_object_kyo <br><br>Kyo left, Atria righ ",
    "character_object_player <br><br>Here\'s the club room! Cozy, isn\'t it ",
    "character_object_kyo <br><br>Kyo_FP_Smilin ",
    "character_object_narration <br><br>Kyo speaks, his tone strung with an obvious sarcasm ",
    "character_object_kyo <br><br>Wooow... 32/10 persuasive skills ",
    "character_object_kyo <br><br>Narration: ",
    "character_object_kyo <br><br>You just shoot a glare at him before sighing and moving on ",
    "character_object_player <br><br>Well, how about you step up to the microphone and try it out? Sound good ",
    "character_object_narration <br><br>Atria reluctantly approaches the microphone at the back of the studio, looking at you for approval before switching it on, tapping its end unsurely. ",
    "character_object_narration <br><br>She has to lower it a bit in order to reach it properly... heh, that would make two short people in the club ",
    "character_object_atria <br><br>...Ah... what should I say ",
    "character_object_player <br><br>Hmm. ",
    "character_object_narration <br><br>You look at Kyo for an answer, but you only receive a shrug in response ",
    "character_object_player <br><br>...I guess whatever you feel like. It\'s just a test, so, how about something you\'re passionate about ",
    "character_object_kyo <br><br>Yeah, that works. Just whatever is easy to talk about ",
    "character_object_kyo <br><br>Kyo sprite is remove ",
    "character_object_atria <br><br>Atria2_Timi ",
    "Centered <br><br>Centere ",
    "character_object_narration <br><br>Atria approaches the mic, a bit tense. She starts off very reluctant, stuttering over her sentences ",
    "character_object_atria <br><br>...Hello, I-I\'m Atria... um. ",
    "character_object_atria <br><br>.. ",
    "character_object_atria <br><br>.. ",
    "character_object_player <br><br>Hey, it\'s alright. Just say whatever comes naturally, it doesn\'t have to be thought out like some perfect script ",
    "character_object_narration <br><br>Her eyes shift towards your direction, and she takes a deep breath before continuing ",
    "character_object_atria <br><br>Atria2_Nervou ",
    "character_object_narration <br><br>Slowly, her body relaxes a little, as she lets go of her worries for a fleeting moment. It takes a little longer for her to grow comfortable with purposely being so outspoken like this ",
    "character_object_atria <br><br>Atria sprite is remove ",
    "Black screen <br><br>Black scree ",
    "character_object_narration <br><br>She continues speaking, slowly but surely becoming more confident as she speaks her mind, whatever small bits of information or passion that come to her ",
    "character_object_narration <br><br>Some time passes, and not long later, she begins speaking like she had been waiting for this opportunity for years ",
    "character_object_atria <br><br>Atrias club room C ",
    "character_object_narration <br><br>Her face lights up with the most genuine smile you have seen from her since the two of you met. You and Kyo give each other accomplished glances, allowing her to ramble without being ridiculed for what seems like the first time in her life ",
    "character_object_narration <br><br>She seems like an entirely different person, babbling about whatever comes to her mind, in a world of her own ",
    "character_object_narration <br><br>Even a few giddy sounding giggles manage to leave Atria. It was clear as day that she found enjoyment in this ",
    "character_object_narration <br><br>Though after a fleeting moment, she stops, making eye contact as if just remembering there are people listening to her. Her eyes widen slightly, but a small smile remains on her expression ",
    "character_object_atria <br><br>...Are you sure this is okay?.. Not suppressing the urge to talk... it feels so different ",
    "character_object_kyo <br><br>.. ",
    "character_object_kyo <br><br>...Damn she\'s traumatized ",
    "character_object_narration <br><br>You try to nudge Kyo, as this was most definitely *not* the time, but he ducks away ",
    "character_object_player <br><br>Of course it\'s alright. So, what do you say? Why don\'t you try making some friends by helping start up a club ",
    "character_object_atria <br><br>...I&mdash ",
    "character_object_narration <br><br>Atria ponders this suggestion, taking a while to push away any troubles with her \'friends\' ",
    "character_object_narration <br><br>She shakes her head, clearing her mind before nodding with a newfound assurance ",
    "character_object_atria <br><br>I think I\'d like that ",
    // end-of-CHAPTER-1-mark
    'jump CHAPTER_2',
  ],

  'CHAPTER_2': [
    'chap 2',
    // start-of-CHAPTER-2-mark
    "_Name <br><br>_Tex ",
    " <br><br>Chapter 2: Befriending the Shrewd Dreame ",
    "Background School Hallway <br><br>Background: School Hallwa ",
    "Skye's BGM <br><br>Skye\'s BG ",
    "character_object_player <br><br>Yawn.. ",
    "character_object_narration <br><br>You and Kyo sleepily make your way down through the quiet school corridor to the radio club room. Neither of you were fit to stand, let alone walk, but&mdash ",
    "character_object_player <br><br>Why are we here this early again? School hasn\'t even started yet.. ",
    "character_object_kyo <br><br>I\'m not happy about this either, but someone needs to prep the club equipment. S\'not like we got a tonna members to figure this shit out yet ",
    "character_object_player <br><br>We\'d have more members if you actually helped with recruitment y\'know ",
    "character_object_kyo <br><br>Hey, that\'s what you\'re for. I have very important club president things to deal with ",
    "character_object_narration <br><br>You grumble, but the both of you continue to make your way down the hall. Even if you lumbered the whole way like a zombie who had already lost its head, only the empty corridors and a snickering Kyo would witness such a scene ",
    "character_object_kyo <br><br>Kyo sprite moves to left ",
    "Skye_Smile at right, darkened <br><br>Skye_Smile at right, darkene ",
    "??? <br><br>&mdash;so with some struggle, you are able to ingest the Baia Bamare figure that is now inside your stomach&mdash ",
    "character_object_kyo <br><br>Kyo_FP_Shocke ",
    "character_object_narration <br><br>A muffled but excited voice catches your attention, stopping you in your tracks. The odd words are inescapable even to your drowsy heads ",
    "??? <br><br>&mdash;Arkillia goes ahead and grabs the letter opener and puts it in their pocket.. ",
    "character_object_player <br><br>.. ",
    "character_object_narration <br><br>The voice continues to excitedly narrate, small mutters and giggles leaking from a small janitor\'s closet stuffed away in the corner of the school corridor. ",
    "character_object_narration <br><br>Both you and Kyo look at each other baffled ",
    "character_object_kyo <br><br>Kyo sprite disappear ",
    "??? <br><br>&mdash;You hear the doorknob turning. As the door swings open, Eliza reenters. Alright! Let\'s wrap things up here! She pops into her chair, reorganising her papers, unaware that you\'ve been searching through them&mdash ",
    "character_object_narration <br><br>You approach the door, giving it a tentative knock that abruptly silences the voice ",
    "character_object_player <br><br>.. ",
    "character_object_narration <br><br>You bring your hand forward to knock again when the door slowly creaks open ",
    "Girl in the Closet <br><br>C-Can I help you ",
    "Skye Default Sprite, normal brightness <br><br>Skye Default Sprite, normal brightnes ",
    "character_object_narration <br><br>The girl that meets you as the door opens has a cold look firmly set on her face, flinty eyes glaring at you imperiously. Had she not stuttered, her attempt at intimidation might\'ve actually worked... well, probably ",
    "character_object_narration <br><br>A slight flush climbs her face at her stumble, but she stubbornly continues to try and fake disinterest. She\'s failing miserably, but you could say she was attempting it with an almost admirable persistence ",
    "character_object_player <br><br>Uhhh... I heard you talking, and... was wondering what you were doing in the closet... ",
    "character_object_narration <br><br>The flush on the girl\'s face only grew, her flusteredness leaking into her words, making her ramble slightly ",
    "Girl in the Closet <br><br>Well if you must know, I was conducting a very important meeting with my friends. The closet just happens to be a very convenient place for us to do so without any disturbance or without inadvertently disturbing anyone else ",
    "character_object_narration <br><br>She pushes the closet door open further, stepping out into the hallway. She dusts her skirt off primly, not at all subtly looking away in embarrassment. The closet, left open as it was, shows no one else inside. ",
    "character_object_narration <br><br>You look back at Kyo in confusion, receiving an equally confused look from the blue haired boy. ",
    "character_object_narration <br><br>You turn back to the girl who in turn looks at you strangely, darting her eyes towards Kyo questioningly ",
    "character_object_narration <br><br>You shrug off the girl\'s still strange choice of meeting location and lack of other people to have a meeting with. Not that you could really judge people on their social choices. After all, most would probably call you crazy for befriending Kyo.. ",
    "character_object_player <br><br>I heard you narrating? I think? You speak really well ",
    "character_object_narration <br><br>A surprised expression flickers through her face before her attempt at a cool expression slides back into place. Her expressiveness, still not hiding her feelings, allows a small bit of smug pride to shine through ",
    "Girl no longer in Closet <br><br>Of course! I love playing as my party\'s Game Master, and I work hard to make every game enjoyable ",
    "character_object_narration <br><br>A shy expression flickers on her face before she extends her hand towards you in a handshake ",
    "Girl no Longer in Closet <br><br>My name\'s Skye, Skye Oriana, what\'s your name ",
    "character_object_player <br><br>I\'m Player. Nice to meet you. ",
    "character_object_narration <br><br>You take her hand with a smile, receiving a small smile back ",
    "character_object_narration <br><br>Kyo coughs behind you, reminding you that you were in school this early for a reason. At this rate, class would start before you could finish your duties for the radio club ",

    // start hardcoded dialog_code == Chapter_2_0011400
    {
      'Choice': {
        'Chapter_2_Choice_1_dont_invite_her_to_the_radio_club': {
          'Text': "Don't invite her to the radio club",
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
    "Choice 1 Don't invite her to the radio club  Chapter_2_0011600 Choice 1: Don't invite her to the radio club ",
    "Skye Sprite disappears  Chapter_2_0011800 Skye Sprite disappears ",
    "character_object_kyo Chapter_2_0011900 Kyo _FP_Default Appears ",
    "Narration  <br><br> You take a step back, standing side by side with Kyo once again. He looks at you with a raised brow, unsubtly gesturing towards Skye and muttering quietly. <br><br> _Dialog Code:  Chapter_2_0012200 ",
    "character_object_kyo Chapter_2_0012500 You thinking of inviting her? ",
    "Narration  <br><br> Surprised at Kyo's sudden interest, you look at him questioningly. <br><br> _Dialog Code:  Chapter_2_0012800 ",
    "Player  <br><br> Think it's a good idea? We don't really know her... <br><br> _Dialog Code:  Chapter_2_0013100 ",
    "character_object_kyo Chapter_2_0013400 Man, do you think we're in any position to be picky? Bet you're just too chicken to ask. ",
    "character_object_kyo Chapter_2_0013600 Kyo sprite disappears ",
    "Skye Default Sprite Appears  Chapter_2_0013700 Skye Default Sprite Appears ",
    "Narration  <br><br> You roll your eyes at his obvious bait - he was the one pushing recruitment off onto you so it wasn't like he could talk.  <br><br> _Dialog Code:  Chapter_2_0014000 ",
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
    // Chapter_2_0011600 removed - covered in choice block above 
    // Chapter_2_0011800 removed - covered in choice block above 
    // Chapter_2_0011900 removed - covered in choice block above 
    // Chapter_2_0012200 removed - covered in choice block above 
    // Chapter_2_0012500 removed - covered in choice block above 
    // Chapter_2_0012800 removed - covered in choice block above 
    // Chapter_2_0013100 removed - covered in choice block above 
    // Chapter_2_0013400 removed - covered in choice block above 
    // Chapter_2_0013600 removed - covered in choice block above 
    // Chapter_2_0013700 removed - covered in choice block above 
    // Chapter_2_0014000 removed - covered in choice block above 
    // Chapter_2_0014200 removed - covered in choice block above 
    // Chapter_2_0014400 removed - covered in choice block above 
    // Chapter_2_0014600 removed - covered in choice block above 
    // Chapter_2_0014700 removed - covered in choice block above 
    "character_object_player <br><br>Hey, we\'re currently recruiting members for the radio club, do you... wanna join ",
    "Skye_Smile <br><br>Skye_Smil ",
    "character_object_narration <br><br>Skye\'s eyebrows shoot up in surprise, a small smile subconsciously spreading across her face. She looks at you in confused delight as you continue your invitation ",
    "character_object_player <br><br>We don\'t have a lot of members but we\'re pretty sure we can get more people to sign up. I think you\'d be a perfect fit for a broadcaster. You think you\'d be up for it ",
    "character_object_narration <br><br>A lost look of wonder briefly crosses her eyes before quickly dimming. She looks to the side, her eyes contemplative. Skye hums consideringly before answering mildly ",
    "character_object_skye <br><br>Well, I\'ll have to talk to my friends first, not sure I\'ll have the time considering all the things that I\'ve been needing to do lately ",
    "character_object_narration <br><br>Skye makes a big gesture of turning to the side, suddenly starting to talk loudly and gesturing broadly as if conversing with a group of people ",
    "character_object_skye <br><br>Well, what do you guys think ",
    "character_object_kyo <br><br>Kyo_FP_Shocked sprite appear ",
    "character_object_narration <br><br>You and Kyo look at her bewilderedly as silence meets Skye\'s question, but Skye only continues talking to the air, nodding and humming, responding as if someone was talking back to her ",
    "character_object_skye <br><br>&mdash;you\'re right, I\'m not in any other clubs right now but what about our campaigns? We usually conduct them right after school, we&mdash ",
    "character_object_player <br><br>.. ",
    "character_object_narration <br><br>Skye continues talking to nothing. You\'re starting to get concerned that staying in the chemical and dust filled janitor\'s closet is having a more detrimental effect on her than one would expect ",
    "character_object_player <br><br>Uhhh... Skye ",
    "character_object_narration <br><br>Skye only hums at you, looking like she was only half listening to you as she continues to nod at the thin air near her ",
    "character_object_player <br><br>Who\'re you talkin\' to ",
    "character_object_narration <br><br>Skye answers your question distractedly, still seeming completely engrossed at whatever it is she\'s listening to ",
    "character_object_skye <br><br>I\'m talking to my friends, of course ",
    "character_object_narration <br><br>Skye gestures at the empty air beside her, only half listening to your question ",
    "character_object_player <br><br>.. ",
    "character_object_kyo <br><br>Goddamn, she looks almost as crazy as you ",
    "character_object_player <br><br>Shut up ",
    "character_object_player <br><br>Narration: ",
    "character_object_player <br><br>You hiss at Kyo, throwing a smack to the short boy\'s shoulder that he dodges with an indignant yelp. You frantically turn back to Skye, hoping she didn\'t hear Kyo\'s expected but poorly timed smacktalk ",
    "character_object_player <br><br>Skye, unfortunately, did seem to notice your antics and blink ",
    "character_object_player <br><br>at you once more, bewildered ",
    "character_object_player <br><br>He\'s like this with everyone, don\'t worry about what he says. In fact, a general rule is that you probably should ignore most of what he says ",
    "character_object_kyo <br><br>Kyo Sprite becomes not the focus of scene, Skye Sprite centre ",
    "Skye_Smile2 <br><br>Skye_Smile ",
    "character_object_player <br><br>Kyo\'s exclamation of annoyance is drowned out by Skye\'s reaction. She doesn\'t react negatively to Kyo\'s ribbing. Instead, a bright smile suddenly breaks out on her face ",
    "character_object_skye <br><br>It\'s nice to know someone like me! A person who knows th ",
    "character_object_skye <br><br>pros to our more unusual friends.. ",
    "character_object_player <br><br>Huh ",
    "character_object_kyo <br><br>The fuck, did she just call me unusual ",
    "character_object_narration <br><br>Skye\'s expression only brightens further, her thick glasses not nearly covering her delight ",
    "character_object_skye <br><br>You\'re pretty nice ",
    "character_object_narration <br><br>She looks consideringly to the side again, her smile turning contemplative ",
    "character_object_skye <br><br>I actually might consider visiting your club after all. After classes, of course. I\'m pretty sure I can help you with things even without joining the club ",
    "character_object_narration <br><br>She suddenly rushes to grab your hand, making you stumble back in surprise. She quickly gives the limb a firm, decisive shake, before backing away just as quickly ",
    "character_object_skye <br><br>I\'m looking at a very busy day ahead, so I\'ll be taking my leave now. It was nice to meet you, Player ",
    "character_object_narration <br><br>Skye cheerfully skips off down the school hallways, quickly disappearing through the corridors ",
    "Skye Sprite disappears <br><br>Skye Sprite disappear ",
    "character_object_narration <br><br>You and Kyo stand there in dazed shock, both at the odd ending to the conversation and at her quick exit ",
    "character_object_player <br><br>Well... she was interesting ",
    "character_object_kyo <br><br>I mean, she\'s a little weird, but so was the other one, and you.. ",
    "character_object_narration <br><br>Kyo\'s words prompts an eye roll from you, breaking you from the reverie that Skye\'s abrupt getaway left you. The two of you finally start to make your way to the clubroom again, the strange encounter still fresh on your minds ",
    "character_object_player <br><br>I think she\'ll be a good addition to the team, and she\'s nice, she and Atria will probably get along great ",
    "character_object_kyo <br><br>Sure, if you can get her to join. Still haven\'t gotten to that part, remember ",
    "character_object_narration <br><br>You wince at Kyo\'s reminder, but as you remember her look of wonder when you first asked her the question, you don\'t think it\'ll be very difficult to convince her ",
    "character_object_narration <br><br>She was happy to be invited, she may have some reservations but you have a feeling that everything\'ll  turn out just fine. You shrug off Kyo\'s pessimism, shooting the shorter boy an eyeroll as the two of you enter the clubroom to deal with your duties for the day ",
    "Scene Change <br><br>Scene Chang ",
    "Lunch Time <br><br>Lunch Tim ",
    "School Hallway <br><br>School Hallwa ",
    "character_object_narration <br><br>** RING ** Bell SF ",
    "character_object_narration <br><br>You eagerly leave your class for your break &mdash; your early start to the day didn\'t leave you much time for breakfast, and the little you did eat didn\'t sustain you \'til lunch. You\'ve been starving all day and your stomach has been trying to make itself known ",
    "character_object_narration <br><br>Encouraged by its angry rumblings, you make your way to the school store. Hopefully you weren\'t too late to grab something. No one should have to handle the angry yowling that you know your stomach would continue to make if the beast wasn\'t fed ",
    "character_object_narration <br><br>You hum thoughtfully as you think about what you\'re going to buy when the sounds of particularly loud discussion catches your attention ",
    "character_object_student_a <br><br>&mdash;just admit it, you were the one who sprayed that ugly thing on the back of the classroom, didn\'t you. Everyone knows it was you ",
    "Skye_Default Centered <br><br>Skye_Default Centere ",
    "character_object_narration <br><br>You notice a group of four gathered in a quiet corner. You aren\'t sure what\'s going on, but you recognize Skye standing with her back against the wall ",
    "character_object_narration <br><br>Three others were surrounding her, blocking her from any sort of way out. The interaction doesn\'t seem like it\'s going well. You quietly duck behind a nearby wall, wondering what\'s going on ",
    "character_object_narration <br><br>Skye sighs heavily, annoyance clear in her tone and expression ",
    "character_object_skye <br><br>Why would I graffiti the classroom? You\'re accusing me out of nowhere. Again ",
    "character_object_narration <br><br>Skye\'s exasperated answer seems to only spur them on, with another member stepping up to batter at her unwavering stance ",
    "character_object_student_b <br><br>Who else would\'ve done it? You\'ve always been attention seeking. Just the other day you were talking to thin air again! God, you\'re annoying on a good day but now you\'re actually destroying public property? Can you get any worse ",
    "character_object_narration <br><br>Skye scoffs at their accusations, squinting at her classmates incredulously ",
    "character_object_skye <br><br>No one knows who did it. The classroom doors are locked every night and they\'re only opened in the mornings, minutes before class starts. I wasn\'t even the first person to arrive today. Your accusations have no merit and exactly zero people have come to tell me their thoughts of otherwise besides you three. This is the third time you\'ve accused me of shit I didn\'t do and it\'s honestly getting out of hand. You&mdash ",
    "character_object_student_c <br><br>Oh my god, can you just stop talking? No one wants to hear you yap all day! It\'s enough that you run your mouth in class all the time ",
    "character_object_narration <br><br>Rolling her eyes, Skye seems done with the whole interaction. She waves the person off, already moving to leave ",
    "character_object_skye <br><br>I\'m sorry that you\'re incapable of understanding anything higher than the most basic levels of communication, let me clear it up for you. I don\'t have time for your bs, get the fuck out of my way ",
    "character_object_narration <br><br>Skye attempts to sidestep her way out of the people surrounding her, but the increasingly angered trio move to block her way ",
    "character_object_student_d <br><br>You sure do know how to talk, you think people like you interrupting the class every time to spout whatever bullshit opinion you have? Everyone\'s tired of you ",
    "character_object_student_b <br><br>Yeah, I mean come on, even Sensei had to take you to the side the other day. You might be a teacher\'s pet but even they know you\'re a lunatic ",
    "Skye_Sad <br><br>Skye_Sa ",
    "character_object_narration <br><br>Skye\'s bored expression finally cracks, vulnerability seeping through. She looks away, shifting uncomfortably before glaring back at the person speaking ",
    "character_object_skye <br><br>Sensei appreciates my contributions to the class, and they said so themself. They just wish that I give a chance to the rest of the class to express their opinions as well and I concurred. You three should stop talking about things that you don\'t understand ",
    "character_object_narration <br><br>The atmosphere was slowly getting more tense. It might get bad for Skye if you don\'t intervene ",

    // start hardcoded dialog_code == Chapter_2_0035300
    {
      'Choice': {
        'Chapter_2_Choice_2_dont_intervene': {
          'Text': "Don't intervene",
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
    "Choice 1 Don't Intervene  Chapter_2_0035500 Choice 1: Don't Intervene ",
    "Narration  <br><br> You stay back a little longer. You're sure your schoolmates wouldn't resort to violence and you weren't sure Skye would appreciate a practical stranger stepping in on things they weren't fully informed on. <br><br> _Dialog Code:  Chapter_2_0035800 ",
    "character_object_student_a Chapter_2_0036100 You actually believe that crap. ",
    "Narration  <br><br> One of the trio scoffs, a derisive sneer on their face. <br><br> _Dialog Code:  Chapter_2_0036400 ",
    "character_object_student_a Chapter_2_0036700 Sensei has to be nice to you - you get the best grades, so of course she sucks up to you. Nobody here actually likes you. ",
    "Narration  <br><br> They move closer towards Skye, one of them bringing up a hand to give her a shove. Skye furrows her eyebrows, moving back to avoid the advancing group before her expression crumples when she realises there's no way for her to escape. <br><br> _Dialog Code:  Chapter_2_0037000 ",
    "Narration  <br><br> You frantically step forward, unsure how everything escalated so quickly. There's no way you can leave Skye alone on this. <br><br> _Dialog Code:  Chapter_2_0037200 ",
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
    // Chapter_2_0035500 removed - covered in choice block above 
    // Chapter_2_0035800 removed - covered in choice block above 
    // Chapter_2_0036100 removed - covered in choice block above 
    // Chapter_2_0036400 removed - covered in choice block above 
    // Chapter_2_0036700 removed - covered in choice block above 
    // Chapter_2_0037000 removed - covered in choice block above 
    // Chapter_2_0037200 removed - covered in choice block above 
    // Chapter_2_0037400 removed - covered in choice block above 
    // Chapter_2_0037600 removed - covered in choice block above 
    // Chapter_2_0037700 removed - covered in choice block above 
    "character_object_player <br><br>Hey, that\'s enough ",
    "character_object_narration <br><br>You quickly make your way to the group. With them having parted in surprise at your exclamation, it\'s easy for you to take Skye by the hand, pulling her out of the circle that they surrounded her with ",
    "character_object_player <br><br>I don\'t know who you three are, but ganging up on someone is seriously low. From the little I\'ve heard, you don\'t even have a leg to stand on. Accusing somebody for something you have no proof of is ridiculous and mocking someone for participating in class is pathetic ",
    "character_object_student_c <br><br>Who&mdash ",
    "character_object_narration <br><br>You interrupt whatever response they were about to make, not really willing to hear what these assholes have to say ",
    "character_object_player <br><br>You three should really take up some self awareness, seems like it\'s in short fucking supply around here ",
    "character_object_narration <br><br>You quickly remove yourself from the situation while tugging a quiet Skye along behind you, moving to try and find a quiet place to give her some privacy ",
    "character_object_narration <br><br>Skye stays quiet during the entire interaction. As you arrive at a quieter corner, you face her again, concerned. You don\'t know her very well, but from the little interaction you\'ve had with her, her silence seems uncharacteristic ",
    "character_object_player <br><br>Skye, are you okay? I\'m sorry for eavesdropping but you looked like you needed help ",
    "character_object_narration <br><br>Skye looks away, her shoulders hunched, defences built all the way up. She looks clearly uncomfortable and not willing to talk about what had just happened ",
    "character_object_skye <br><br>I\'m fine... Thanks for getting me out of there, those three were getting way too cocky ",
    "character_object_player <br><br>Would you like to report them to a teacher? I heard you mention that this wasn\'t the first time this has happened.. ",
    "character_object_narration <br><br>Skye shakes her head, dismissing the notion immediately ",
    "character_object_skye <br><br>No no, it\'s fine, they\'re not&mdash; they don\'t even bother me usually ",
    "character_object_narration <br><br>A heavy silence settles between the two of you. You\'re not really sure what to say; you don\'t think you really know Skye well enough to comfort her ",
    "character_object_narration <br><br>Skye suddenly starts talking again, finally looking at you directly ",
    "character_object_skye <br><br>People like the discussions that I bring up in class. They say that my insight helps them learn more about the subject we\'re learning about while simultaneously allowing them to not have to be called on unexpectedly when they\'re not willing to. I&mdash ",
    "character_object_narration <br><br>Skye cuts herself off before she finishes her sudden explanation, frustration leaking into her voice. A shuddering breath leaves her before she closes her mouth, pursing her lips ",
    "character_object_skye <br><br>I&mdash; never mind, sorry for interrupting your break, I should really be getting back to class. ",
    "character_object_player <br><br>Skye&mdash ",
    "Skye Sprite disappears <br><br>Skye Sprite disappear ",
    "character_object_narration <br><br>Your attempt at talking to her fails as Skye ignores you, making another quick exit before you could really react. This time, you didn\'t feel as optimistic about your interactions as the first time you met her ",
    "character_object_narration <br><br>** RING * ",
    "character_object_narration <br><br>The bell rings, signifying the end of your break time. It\'s a good thing your stomach had long since curdled at the thought of food after the bitter situation you just experienced. ",
    "character_object_narration <br><br>Your face scrunches in worry, but you hurry yourself to your classroom. There isn\'t much you can do. Maybe Skye needs some time to herself ",
    "Scene Change <br><br>Scene Chang ",
    "After School <br><br>After Schoo ",
    "School Hallway Day <br><br>School Hallway Da ",
    "character_object_narration <br><br>*RING* School bell SF ",
    "character_object_narration <br><br>The school bell finally signals the end of the school day. ",
    "character_object_narration <br><br>You rush out as soon as you can, the afternoon incident still hanging heavily in your mind, completely distracting you for the latter part of your school day ",
    "character_object_narration <br><br>You make your way to the clubroom hoping that Skye would keep her word of visiting, at least just so that you could talk to her. You didn\'t like that she had left upset at lunch ",
    "Background Change Radio Clubroom Basic + Printer + Mic <br><br>Background Change: Radio Clubroom Basic + Printer + Mi ",
    "character_object_kyo <br><br>Kyo_FP_Defaul ",
    "character_object_narration <br><br>You enter the clubroom to see that Kyo has already made himself comfortable. Game console in hand, his feet casually settled on the clubroom\'s table, and his chair perched precariously on its back legs ",
    "character_object_player <br><br>Do you ever leave this room? Why are you here already, classes just ended ",
    "character_object_kyo <br><br>\'Ey, don\'t blame me for you being slow, running through the halls ain\'t nothin\' ",
    "character_object_narration <br><br>You roll your eyes at the shorter boy, settling your bag on the table and slumping yourself on one of the chairs, heaving out a deep sigh ",
    "character_object_narration <br><br>Kyo looks up at your dramatics, raising an eyebrow at the long face you were pulling ",
    "character_object_kyo <br><br>\'Sup ",
    "character_object_narration <br><br>You scratch your head, not looking up at him, not sure how you should answer the question ",
    "character_object_player <br><br>I met up with Skye during lunch break. Some people were bothering her, and she really wasn\'t having a good time ",
    "character_object_narration <br><br>Kyo\'s eyebrows rise further at the mention of your new acquaintance, not expecting you to meet her so soon after your meeting this morning ",
    "character_object_kyo <br><br>Yeah ",
    "character_object_player <br><br>Yeah, they were talking about someone graffitiing their classroom? Something crazy like that, been hearing rumours about stuff like that happening all over school lately ",
    "character_object_kyo <br><br>Kyo_FP_Shocke ",
    "character_object_narration <br><br>Out of the corner of your eye, you notice Kyo freezing in his seat. He plops the precariously tilting furniture back down to a more proper position. You finally look up, raising your brow at his sudden tension ",
    "character_object_player <br><br>People\'ve been spreading rumours about ghosts around lately too, graffiti appearing and disappearing out of nowhere, weird noises, weird light, stuff like that ",
    "character_object_narration <br><br>Kyo continues to tense as you proceed describing the supernatural rumours going around your school. A smirk grows on your face as you stand up from your seat ",
    "character_object_player <br><br>You scared of ghosts, Kyo ",
    "character_object_narration <br><br>You come up to the blue haired boy, swinging an arm up to his shoulders &mdash; a move he deftly avoids. He quickly stands up from his own seat ",
    "character_object_kyo <br><br>I\'m gonna slip out for a bit &mdash; got a couple of things I need to deal with for class tomorrow ",
    "character_object_narration <br><br>Your eyes widen, surprised at his abrupt need to leave and concerned that you had gone too far with your teasing ",
    "character_object_player <br><br>Whoa, you don\'t have to leave. We don\'t have to talk about ghosts if you don\'t want to ",
    "character_object_kyo <br><br>Kyo_FP_Defaul ",
    "character_object_narration <br><br>Kyo rolls his eyes, waving off your silent apology while moving to leave the room ",
    "character_object_kyo <br><br>What? No, I just remembered I got shit to do, hold down the fort for me will you ",
    "character_object_player <br><br>Aren\'t you gonna help me convince Skye to join the club ",
    "character_object_narration <br><br>Kyo raises an eyebrow at you, stopping before opening the clubroom door, face set in a deadpan ",
    "character_object_kyo <br><br>You think my caustic ass\'ll help convince her to join ",
    "character_object_narration <br><br>You wince slightly, remembering Kyo impulsively ribbing Skye just this morning. She didn\'t seem to take offence, but maybe exposing her too much to Kyo\'s sharp tongue too early would be ill-advised ",
    "character_object_player <br><br>Don\'t you wanna stick around to at least greet her ",
    "character_object_kyo <br><br>When\'s she coming? Does she even know where the clubroom is ",
    "character_object_narration <br><br>Silence envelops the room as his question settles, before you groan in frustration, bringing your hand up to cover your face. Kyo\'s laughter rings throughout the room, the annoying gremlin finding pleasure in your misery ",
    "character_object_player <br><br>I forgot to tell her that we\'re using the music room this morning.. ",
    "character_object_kyo <br><br>You better go find her then, I\'m dealing with my shit first ",
    "character_object_narration <br><br>Kyo shrugs, casually slipping out of the room and leaving you alone with your thoughts ",
    "character_object_kyo <br><br>Kyo Sprite Disappear ",
    "character_object_player <br><br>.. ",
    "character_object_narration <br><br>You sigh in exasperation, finally standing up to go and find Skye, wherever it is she could be. ",
    "character_object_narration <br><br>You make your way to the door, opening it before noticing something in the corner of your eye ",
    "character_object_narration <br><br>You snap your head in surprise, chasing the glimpse of bright neon shapes before it disappears behind the blink of your eyelids ",
    "character_object_narration <br><br>You stare at where you thought you saw... whatever it was you thought you saw, furrowing your brows at the wall. You could\'ve sworn&mdash ",
    "??? <br><br>Player ",
    "character_object_narration <br><br>A voice calls out to you from the hallway right outside the door you just opened, snapping you out of your thoughts ",
    "Skye_Default <br><br>Skye_Defaul ",
    "character_object_player <br><br>Skye! You\'re here ",
    "character_object_narration <br><br>You blurt out her name in surprise, instinctively opening the clubroom door further and stepping back to allow the dark haired girl to step inside. She looks around the room, raising her brow curiously ",
    "character_object_skye <br><br>Of course, I did promise I would come ",
    "character_object_player <br><br>How\'d you find the clubroom? I forgot to tell you where it was this morning.. ",
    "character_object_narration <br><br>Skye waves off your question, turning to look at you curiously ",
    "character_object_skye <br><br>The clubrooms are almost always on the first floor. I was just walking around to look when I saw you at the door... Were you looking at something ",
    "character_object_player <br><br>Huh ",
    "character_object_skye <br><br>You looked a little out of it. I saw you for quite a little bit before calling you ",
    "character_object_narration <br><br>You look back at the wall, pursing your lips thoughtfully before shaking your head ",
    "character_object_player <br><br>Was nothing, probably just tired. I\'m glad you came by! I wasn\'t sure if you would, uhh, after.. ",
    "character_object_narration <br><br>You trail off a little, cursing yourself for bringing up the grim situation from the afternoon. You thought you were getting better at not putting your foot in your mouth, yet here you are, swallowing your whole fucking shoe ",
    "character_object_narration <br><br>A short silence comes after the words awkwardly dry up in your mouth, making you sweat bullets. Skye picks up on the conversation, moving deeper inside the room and casually settling herself on one of the chairs ",
    "character_object_skye <br><br>The graffiti\'s gone ",
    "character_object_player <br><br>What ",
    "character_object_narration <br><br>You blink bewilderedly. Skye shrugs, casually leaning her head on her arm settled on the table ",
    "character_object_skye <br><br>The class left for gym class a little bit after lunch and by the time we came back, poof, it just...disappeared. ",
    "character_object_skye <br><br>The teachers figured it was a temporary prank someone was pulling. They\'re still looking for the culprit, but nothing points to it being anyone in class, considering that we were all accounted for at gym.. ",
    "character_object_player <br><br>And... those guys that were bothering you ",
    "character_object_skye <br><br>Well they didn\'t apologise, but they did look pretty pissed that it was pretty clearly not me ",
    "character_object_narration <br><br>Skye shrugs faux casually. It\'s difficult to figure out what she\'s thinking. She seems a little bit more closed off than she was this morning ",
    "character_object_skye <br><br>Anyway, you don\'t have to worry about those idiots, they\'re way more of a nuisance then they are actually troubling. My class is filled with a lot of kind and friendly people, so their voices get drowned out most of the time ",
    "character_object_narration <br><br>Skye smiles at you reassuringly, looking up from her previously contemplative pose ",
    "character_object_skye <br><br>Now, why don\'t we discuss your club? It\'s what you invited me here for right ",
    "character_object_player <br><br>Yeah... about joining.. ",
    "character_object_skye <br><br>Still not too sure that\'d be necessary ",
    "character_object_skye <br><br>If all you need is another voice to help in broadcasting, or even if you need some journalist help to find some news, I\'ll be happy to help out on a more occasional, freelance basis. As long as I\'m given some credit for the work, of course ",
    "character_object_narration <br><br>You scratch your head in confusion. If Skye was willing to help the club, why not just join and get the benefit of having an after school sanctioned activity? You open your mouth to ask when the sound of the clubroom door opening catches both of your attention ",
    "character_object_atria <br><br>Atria1_Happy appear ",
    "character_object_atria <br><br>Good evening ",
    "character_object_atria <br><br>Atria1_Timi ",
    "character_object_narration <br><br>Atria\'s eyes widen as she notices Skye\'s presence in the room, her surprised expression quickly turning to a bashful smile. Atria shuffles quietly into the room, clearly apprehensive but still trying her best to be welcoming ",
    "character_object_atria <br><br>Oh! H-hello, do we have a new recruit ",
    "character_object_player <br><br>Umm, not necessarily.. ",
    "character_object_narration <br><br>Atria looks at you questioningly, moving closer to the table and placing her things on it. She fidgets awkwardly with her things before looking up at Skye, smiling uncertainly towards the taller girl ",
    "character_object_atria <br><br>I\'m Atria. Umm, i-it\'s nice to meet you. I\'m a... a new membe ",
    "character_object_atria <br><br>of the club too ",
    "character_object_skye <br><br>S-Skye. I&mdash; well, I haven\'t really&mdash; I\'m not too sure about joinin ",
    "character_object_skye <br><br>really.. ",
    "character_object_narration <br><br>Atria\'s stumbling responses were sort of expected, but Skye\'s stuttering prompts a raised eyebrow from you, confused at her sudden inarticulateness. Noticing your expression, she huffs indignantly, hissing her next words quietly at you ",
    "character_object_skye <br><br>Seeing new faces makes me anxious sometimes! You and your friend definitely caught me off guard this morning.. ",
    "character_object_player <br><br>Oh yeah, you met Kyo this morning. Sorry he couldn\'t be here, he stepped out just now ",
    "character_object_skye <br><br>Oh. That\'s fine, I didn\'t bring any of my friends here either. Communication isn\'t easy when other parties can\'t easily talk to or even see one another ",
    "character_object_narration <br><br>You laugh awkwardly remembering Skye\'s...friends. It might be a little awkward, navigating Skye\'s...eccentricities, but you feel like it would work out... you might have to invest in a sturdier poker face soon though ",
    "character_object_narration <br><br>Atria tilts her head in confusion, unaware of all that happened that day ",
    "character_object_narration <br><br>Skye flushes brightly, before turning back to the now confused but still shyly smiling Atria. She coughs awkwardly, bringing the discussion back to focus ",
    "character_object_skye <br><br>Anyway, like I said, I\'m not sure if joining the club would be beneficial for everyone involved. I\'d be happy to help y\'all out in general though, you seem like really nice people, mhm ",
    "character_object_atria <br><br>O-Oh, that\'s too bad. I\'m sure you\'d be a great new member ",
    "character_object_player <br><br>I agree, that\'s kinda why I invited you in the first place. I\'m happy that you\'re willing to help us generally, but honestly, I\'d like you to stick around. I think we\'d all get along great ",
    "Skye_Sad  <br><br>Skye_Sad ",
    "character_object_narration <br><br>Skye seems to flinch at your words, her previous light-hearted expression disappearing in an instant. She looks away from you and Atria, clearly uncomfortable. ",
    "character_object_narration <br><br>Your eyebrows furrow with worry, you share a glance with Atria, who is now frowning as well ",
    "character_object_player <br><br>Can I ask why you... don\'t want to join us? You did mention you hadn\'t signed up for any other club yet, and you don\'t seem to be against the idea in general ",
    "character_object_skye <br><br>I-I\'m a very busy woman. I can\'t just start up a new club out of nowhere! After all, who would conduct my campaigns, and.. ",
    "character_object_narration <br><br>Skye doesn\'t sound convincing, even to herself. She slumps in her chair, sighing tiredly, running her hand through her hair nervously ",
    "character_object_skye <br><br>I-It\'d just be easier for all of us. You wouldn\'t have to deal with me too regularly, and we get to go our own ways ",
    "character_object_narration <br><br>A short silence comes after her words. You\'re shocked that the cheerful girl from this morning had given you such a self-depreciating answer. Atria, having no basis for the girl\'s personality, shyly answers, noticing the tense mood ",
    "character_object_atria <br><br>I understand, I never really got on with people very easil ",
    "character_object_atria <br><br>either ",
    "character_object_narration <br><br>Atria smiles awkwardly, trying to reassure the clearly struggling Skye ",
    "character_object_narration <br><br>You appreciate her support in this situation. It helps ground you a little, having someone else\'s perspective on this. Skye shakes her head, dismissing the notion ",
    "character_object_skye <br><br>No no, you\'re both really nice, I tend to not work well with others. People tend to be really uncomfortable around me, and even if you didn\'t mind tolerating me, I\'ll just bring the mood down. Clubwork and community stuff like this never really suited me ",
    "character_object_atria <br><br>Atria1_Sad Sprite ",
    "character_object_narration <br><br>Your face scrunches at hearing the familiar narrative from this afternoon, discomfort growing at hearing Skye parroting her aggressors ",
    "character_object_player <br><br>Is this about what those people said on break? If it is, I think we should be able to find out on our own whether or not we get along. I know we just met this morning, but I think you\'re pretty great ",
    "character_object_skye <br><br>You don\'t get it, everyone gets tired of me eventually. This isn\'t about what those idiots think, it\'s just a fact. I like to keep whatever amicable acquaintances I have and I do that by keeping some distance ",
    "character_object_narration <br><br>Her voice is wrought with agitation and yours, unfortunately, rises in return. Your discomfort turns to upset at the thought of your possible friend thinking so poorly of herself, and by extension, of everyone else around her ",
    "character_object_player <br><br>I think you\'re being a little unfair here. I\'d be more comfortable with your decision if you just weren\'t sure of the club itself, or if you\'re not comfortable with interacting too closely with what would be veritable strangers ",
    "character_object_player <br><br>But, what\'s happening is that you\'re refusing to give us any credit! You\'re so sure we\'re like those assholes that you won\'t give us a chance to even form our own opinions ",
    "character_object_skye <br><br>That\'s not what I\'m saying at all! I\'m just telling you it\'s not gonna work out ",
    "character_object_skye <br><br>Maybe it is about those guys, but didn\'t you hear them? I talk weird, I talk too much, I\'m annoying, people can\'t see Pio-chan and the others and they hate it when I talk to \'em. This stuff isn\'t just a them thing! ",
    "character_object_narration <br><br>Skye\'s arguments, having reached a fever pitch, suddenly tapers off. She looks to your side where Atria is before blowing out a huge sigh, agitation slowly bleeding out of her. ",
    "character_object_atria <br><br>Atria2_Timi ",
    "character_object_narration <br><br>You turn to look at Atria, who looks almost frozen in panic. The blonde was not at all prepared to see her possible new friends fighting, especially so close after her own falling out with her previous awful friends not that long ago ",
    "character_object_narration <br><br>Skye looks away, still perturbed by your argument but no longer so fired up, leaving her sounding just... painfully tired ",
    "Skye_Default <br><br>Skye_Defaul ",
    "character_object_skye <br><br>Things are just way simpler if I\'m not around most other people. I\'m easier to digest in small doses, so you\'ll get tired of me too, sooner or later. I\'m better off spending time with my friends anyway, and I can\'t do that with other people around. They look at me like I\'m crazy ",
    "character_object_narration <br><br>Her joke dies an awkward death. You\'re not ready to meet her eyes and you aren\'t really sure what to say ",
    "character_object_narration <br><br>You want to apologise for getting so worked up and for butting in where your opinions may not be wanted, but you don\'t like that she thinks so badly of herself ",
    "character_object_skye <br><br>I think we\'re all a bit tense right now, maybe this wasn\'t such a good idea. I-I\'m just gonna go ",
    "character_object_narration <br><br>You whip your head back to her, eyes widening.  You open your mouth to call out and clear things up, but a voice stops you from doing so ",
    "character_object_atria <br><br>Atria2_Sa ",
    "character_object_atria <br><br>W-wait ",
    "character_object_narration <br><br>Atria quickly gets up from her chair, grabbing Skye\'s hand to prevent her from leaving. The timid girl holds the limb, trembling, lips pursed tightly as tears prick her eyes ",
    "character_object_atria <br><br>Player\'s just worried about you. I-I am too. It\'s not right that people\'ve made you think that you don\'t get to have friends, j-just because you\'re a little different ",
    "character_object_narration <br><br>Atria smiles uncertainly down at their clasped palms, tears still pricking her vision. ",
    "character_object_atria <br><br>I know the feeling.. ",
    "character_object_narration <br><br>Skye\'s eyes widened in surprise at the girl\'s sudden willfulness. Yours were too at this point. You knew she had some spunk to her from the way she stood up to her former friends, but you weren\'t expecting this from her ",
    "character_object_atria <br><br>You know what I think ",
    "character_object_atria <br><br>Atria2_Nervous Sprit ",
    "character_object_narration <br><br>Atria speaks up once more, looking up at Skye\'s eyes. Her smile quirks, awkwardly but genuinely, trying to reassure the taller girl ",
    "character_object_atria <br><br>You\'ve probably gone through a lot of things that\'ve caused you pain. I\'ve had to work on my own things recently and I get that it is so... so scary to trust other people after everything ",
    "character_object_narration <br><br>The blonde circles the table to move closer to the bespectacled girl, before pulling at their clasped hands, bringing the two closer together. Her eyes shine brightly with unshed tears ",
    "character_object_atria <br><br>But, maybe you\'d like some help with it? I think we both could use some practice with this friend thing. Why don\'t we try this out together ",
    "Skye_Smile1 <br><br>Skye_Smile ",
    "character_object_atria <br><br>Atria1_Happ ",
    "character_object_narration <br><br>Skye\'s eyes are still wide with disbelief, unprepared for the whirlwind of a girl that had just swept her off her feet. A small smile cracks onto her face, still uncertain but now filled with a familiar lost wonder ",
    "character_object_skye <br><br>O-okay ",
    "character_object_narration <br><br>At this point, you aren\'t sure if you should stay in the room. It feels like you\'re interrupting something even as the two finally separate, still looking at one another. You finally clear your throat, breaking the two\'s reverie, returning their gaze towards you ",
    "character_object_player <br><br>Skye, I\'m sorry for how I acted. Atria was right, I was worried, but I should\'ve been more sensitive. I... shouldn\'t have made it about myself ",
    "character_object_narration <br><br>Skye smiles at you for the apology, moving towards you and extending an arm for you to grab. You gratefully take it, grasping onto her palm to shake. Her mouth quirks up in a rueful smirk ",
    "character_object_skye <br><br>I was getting too in my head, I think. I\'m happy that you cared enough to try and snap me out of it ",
    "character_object_narration <br><br>You smile at each other, relieved that your fight hadn\'t caused irreparable damage to your new friendship. You think about the reason you fought in the first place ",

    // start hardcoded dialog_code == Chapter_2_0086100
    {
      'Choice': {
        'Chapter_2_Choice_3_dont_invite_her_to_the_radio_club': {
          'Text': "Don't invite her to the radio club",
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
    "Choice 1 Don't invite her to the radio club  Chapter_2_0086300 Choice 1: Don't invite her to the radio club ",
    "Narration  <br><br> You aren't sure how appropriate it would be to bring up the subject again after such a charged exchange, especially considering that the tension was one started by you. You stay quiet, releasing your hold on her hand.  <br><br> _Dialog Code:  Chapter_2_0086600 ",
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
    // Chapter_2_0086300 removed - covered in choice block above 
    // Chapter_2_0086600 removed - covered in choice block above 
    // Chapter_2_0086800 removed - covered in choice block above 
    // Chapter_2_0087100 removed - covered in choice block above 
    // Chapter_2_0087400 removed - covered in choice block above 
    // Chapter_2_0087600 removed - covered in choice block above 
    // Chapter_2_0087800 removed - covered in choice block above 
    // Chapter_2_0087900 removed - covered in choice block above 
    "character_object_player <br><br>Would you consider it? Joining us at the club? We\'d love to have you ",
    "character_object_narration <br><br>You aren\'t sure if the invite would be taken well, but Skye smiles softly at the two of you. She nods her head, one of her hands coming up to rest on her waist as the next words come out of her mouth ",
    "Skye Skye_Smile2 <br><br>Well, you two do look like you could use some help. Where do you think we should start ",
    "character_object_narration <br><br>Atria smiles softly as she takes Skye\'s hand in hers once more, dragging her to sit on the table as they start discussing ideas for the radio club, what they would prepare for the first broadcast, what news was popular in the school ",
    "character_object_narration <br><br>Whatever it is, it seems like they\'re having fun. You can hear Skye snorting with laughter, Atria\'s quieter giggles interspersed a little more rarely in the conversation. ",
    "character_object_narration <br><br>You smile at them as you move to settle on the table ",
    "Skye CG <br><br>Skye C ",
    "character_object_narration <br><br>Kyo slips into the room in the middle of all the excitement, quietly sneaking into the corner of the room, settling for looking at what was going on ",
    "character_object_narration <br><br>You move to greet him &mdash; and maybe grill him for missing yet another certified moment with your new club members &mdash; when Kyo motions for you to stop ",
    "character_object_narration <br><br>He moves his hands in a shushing motion, gesturing for you to be quiet. The two girls continue their excited discussion, completely unaware of Kyo\'s entrance ",
    "character_object_narration <br><br>You nod your head at the blue haired boy, returning to look once more at your new friends fondly. You definitely don\'t want to interrupt their bonding either ",
    "character_object_narration <br><br>You\'ll have time for more proper introductions later ",
    // end-of-CHAPTER-2-mark
    'jump CHAPTER_3'
  ],

  'CHAPTER_3': [
    'chap 3',
    // start-of-CHAPTER-3-mark
    "_Name <br><br>_Tex ",
    " <br><br>Chapter 3: Confronting the Moon Princ ",
    "Radio Club Basic + Printer + Mic + Laptop <br><br>Radio Club Basic + Printer + Mic + Lapto ",
    "character_object_esmeray <br><br>Esmeray\'s BG ",
    "character_object_narration <br><br>It\'s been a couple of days since Skye joined the group ",
    "character_object_narration <br><br>The Radio Club is now livelier than ever, much to Kyo\'s playful dismay, as you, Atria, and Skye chat loudly and often in the club room ",
    "character_object_narration <br><br>Now, all you need is one more member to make the club official. But who ",
    "Transition to School Hallway Day <br><br>Transition to School Hallway Da ",
    "character_object_narration <br><br>As you\'re deep in thought and walking down the hallways of ILUNA Academy, you snap to attention when you hear loud giggles, flirts, and cheers coming from a crowd in front of you ",
    "character_object_esmeray <br><br>Esmeray (Amused) Appears on Screen, labeled as ?? ",
    "character_object_narration <br><br>In the center of the crowd is a tall dude with dark turquoise hair, lots of black and shiny bling, and pretty turquoise-gold eyes ",
    "character_object_narration <br><br>Some of the people in the crowd have signs in their hands ",
    "character_object_narration <br><br>\"We love you, Esmeray!\" says the one in the hands of an enthusiastically cheering girl ",
    "character_object_narration <br><br>\"The Prince of the Dark Moon, and my heart <3\" says another in the hands of a tall, totally smitten boy ",
    "character_object_narration <br><br>The person in the center winks at the two of them, a lax smile on his face as he does so ",
    "character_object_narration <br><br>The two start squealing before the girl faints in the boy\'s arms, making him drop his sign ",
    "character_object_player <br><br>That must be the popular guy of the school I heard about. Esmeray Regulus, I think ",
    "character_object_narration <br><br>You don\'t really pay too much attention to the crowd. If anything, it\'s a little annoying ",
    "character_object_narration <br><br>The bell rings, meaning most students will be late to their class if they don\'t get going, including yourself ",
    "character_object_student <br><br>	See you later, Esmeray ",
    "character_object_narration <br><br>You walk past the crowd, hearing Esmeray laugh at the random person and wave at them ",
    "character_object_narration <br><br>	You slow down your pace. Something about that laugh is weird ",
    "character_object_narration <br><br>	You turn around, looking closely at Esmeray ",
    "character_object_narration <br><br>Sure enough, although Esmeray\'s face is smiling, his eyes look empty ",
    "character_object_narration <br><br>You move so that you\'re partially hidden by a nearby trash can, continuing to observe Esmeray ",
    "character_object_esmeray <br><br>Esmeray Unamuse ",
    "character_object_narration <br><br>Once the crowd is gone, you see Esmeray\'s smile fall, and his entire face becomes cold. He then starts trudging to his class ",
    "character_object_narration <br><br>Your eyes widen at what you\'ve just seen, but your thoughts will have to wait. You\'re late to class ",
    "Transition to Hallway BG <br><br>Transition to Hallway B ",
    "No Sprites <br><br>No Sprite ",
    "character_object_narration <br><br>The day is finally over, and you\'re heading to the Radio Club. You need to strategize with Kyo on how to gain your last member ",
    "character_object_narration <br><br>On your way there, you hear the faint sounds of guitar chords accompanied by a muffled voice ",
    "character_object_player <br><br>I shouldn\'t peek... I\'m a little busy.. ",
    "character_object_narration <br><br>But your curiosity is winning today ",
    "character_object_narration <br><br>Quietly, you walk towards the source of the noise ",
    "character_object_narration <br><br>As you get closer, the guitar chord sounds morph into a soft melody, and with it the muffled voice is now distinct and clear ",
    "character_object_narration <br><br>The voice leads you to the entrance of an empty classroom, door slightly ajar, enough to hear the song ",
    "character_object_narration <br><br>The lovely tenor voice makes you almost breathless. You have to see who\'s making that song ",
    "character_object_narration <br><br>You creep up closer to the crack of the door and carefully pull it wider. Your eyes open in shock ",
    "character_object_esmeray <br><br>Esmeray C ",
    "character_object_esmeray <br><br>	Don\'t need the plastic smiles all up in my fac ",
    "character_object_esmeray <br><br>	Just wanna be a moonchild and stay in outer space ",
    "character_object_esmeray <br><br>	Don\'t wanna keep on going on like thi ",
    "character_object_esmeray <br><br>	These people all really like to mis ",
    "character_object_esmeray <br><br>	The fact that I don\'t care.. ",
    "character_object_esmeray <br><br>	A fact that they can\'t bear.. ",
    "character_object_esmeray <br><br>	.. ",
    "character_object_esmeray <br><br>	...Someday I will travel fa ",
    "character_object_esmeray <br><br>	Riding on a shooting sta ",
    "character_object_esmeray <br><br>	Leaving won\'t give me a sca ",
    "character_object_esmeray <br><br>Cause all I need is me and my guitar~ ",
    "END CG <br><br>END C ",
    "character_object_esmeray <br><br>Esmeray Genuin ",
    "Generic Classroom background <br><br>Generic Classroom backgroun ",
    "character_object_narration <br><br>	You\'re in awe, to say the least ",
    "character_object_narration <br><br>Who would\'ve thought that the school\'s resident popular guy is also a musical talent ",
    "character_object_player <br><br>	...How amazing would it be if he joined the Radio Club ",
    "character_object_player <br><br>...Yeah! Wouldn\'t he be a good person to arrange music to broadcast? His voice is perfect ",
    "character_object_player <br><br>.. ",
    "character_object_player <br><br>Should I try to invite him ",

    // start hardcoded dialog_code == Chapter_3_0012100
    {
      'Choice': {
        'Chapter_3_Choice_1_knock_and_try_to_invite_esmeray_to_the_club': {
          'Text': "Knock and try to invite Esmeray",
          'Do': 'jump Chapter_3_Choice_1_knock_and_try_to_invite_esmeray_to_the_club',
        },
        'Chapter_3_Choice_1_dont_knock_and_invite_esmeray': {
          'Text': "Don't knock and invite Esmeray",
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
    // Chapter_3_0012300 removed - covered in choice block above 
    // Chapter_3_0012600 removed - covered in choice block above 
    // Chapter_3_0012800 removed - covered in choice block above 
    // Chapter_3_0013000 removed - covered in choice block above 
    // Chapter_3_0013200 removed - covered in choice block above 
    // Chapter_3_0013400 removed - covered in choice block above 
    // Chapter_3_0013700 removed - covered in choice block above 
    // Chapter_3_0013900 removed - covered in choice block above 
    // Chapter_3_0014100 removed - covered in choice block above 
    // Chapter_3_0014300 removed - covered in choice block above 
    // Chapter_3_0014500 removed - covered in choice block above 
    // Chapter_3_0014700 removed - covered in choice block above 
    // Chapter_3_0014900 removed - covered in choice block above 
    // Chapter_3_0015000 removed - covered in choice block above 
    "character_object_player <br><br>	...Hey! That\'s some amazing playing, you\'re really talented ",
    "character_object_player <br><br>Esmeray: ",
    "character_object_player <br><br>.. ",
    "character_object_player <br><br>So, I, uh, I\'m part of the Radio Club, and we\'re currently recruiting members. I think you\'d be an amazing fit for it ",
    "character_object_player <br><br>So, what do you say? Would you like to join the Radio Club ",
    "character_object_esmeray <br><br>	...Hah! As if I\'d join your club. ",
    "character_object_esmeray <br><br>Nah, if it\'s full of eavesdroppers like you, then hell, I definitely don\'t want to be in any part of it ",
    "character_object_esmeray <br><br>Esmeray sprite disappear ",
    "character_object_narration <br><br>Esmeray walks out, leaving you speechless and watching his shrinking figure as he walks down the hallway ",
    "character_object_narration <br><br>Gone was the smile from before ",
    "Proceed to next scene <br><br>Proceed to next scen ",
    "School Hallway Day <br><br>School Hallway Da ",
    "character_object_esmeray <br><br>Esmeray Neutra ",
    "character_object_narration <br><br>The next day, you spot Esmeray in the hallway on the way to the Radio Club. Luckily, he was alone ",
    "character_object_narration <br><br>Although he rejected you last time, you won\'t give up ",
    "character_object_narration <br><br>You know that with his talent in music, he would definitely be a great addition to the club ",
    "character_object_narration <br><br>He is a hidden gem! Not only could he use his talent in music to compose soundtracks for the club, but his voice also fits that of a charming broadcaster perfectly ",
    "character_object_narration <br><br>And, who knows? He could be as good a friend as Atria, Skye, or Kyo ",
    "character_object_narration <br><br>With conviction, you decide that this moment in the hallway would be a good time to try and get him to join the Radio Club ",
    "character_object_narration <br><br>You try to get his attention and wave at him ",
    "character_object_player <br><br>Esmeray ",
    "character_object_player <br><br>Esmeray Unamused: ",
    "character_object_player <br><br>.. ",
    "Footstep SFX <br><br>Footstep SF ",
    "character_object_esmeray <br><br>Esmeray sprite disappear ",
    "Hallway BG <br><br>Hallway B ",
    "character_object_narration <br><br>You sigh, thinking you\'ll try again ",
    "character_object_narration <br><br>You wish Kyo was with you, but you couldn\'t find him anywhere, and you don\'t have his phone number ",
    "character_object_narration <br><br>It\'s at times like this where frustration is high that you wish you could contact him, but this frustration is overtaken by your realization that really you haven\'t seen him much these past couple of days ",
    "character_object_narration <br><br>Where is he ",
    "character_object_narration <br><br>*BLACK SCREEN TRANSITION ",
    "Transition to School Hallway Day <br><br>Transition to School Hallway Da ",
    "character_object_esmeray <br><br>Esmeray Neutra ",
    "character_object_narration <br><br>After gym class, as you walk to the restroom, you find Esmeray walking out from the unisex restroom door ",
    "character_object_narration <br><br>You try waving at him again, but before you can get within a 10 foot radius of his location, he swiftly walks away in the other direction ",
    "character_object_esmeray <br><br>Esmeray Sprite Disappear ",
    "character_object_narration <br><br>Groaning, you just go into the restroom ",
    "character_object_narration <br><br>*BLACK SCREEN TRANSITION ",
    "Transition to School Hallway Day <br><br>Transition to School Hallway Da ",
    "character_object_narration <br><br>A couple days have passed since you first tried to get Esmeray into the Radio Club, each day being met with more glares and avoidance from Esmeray ",
    "character_object_narration <br><br>Kyo, on the few days you would see him, just made fun of you. Whenever you got irritated and asked him where he had been, he\'d change the subject or say he had things going on at home ",
    "character_object_narration <br><br>You would just huff in response and walk with him to the Radio Club classroom ",
    "character_object_narration <br><br>As if receiving Kyo\'s lack of help wasn\'t enough, you also dealt with more people trying to accuse Skye of the increasing incidences of vandalism going on, as well as Atria\'s old friends lurking around and glaring at your club ",
    "character_object_atria <br><br>Skye_Default and Atria2_Nervou ",
    "character_object_skye <br><br>Tch, they\'re just jealous they don\'t have what we have, right y\'all ",
    "character_object_narration <br><br>Skye gestures to you, Atria, and the air next to her while walking down the halls ",
    "character_object_narration <br><br>	Atria looks around ",
    "character_object_narration <br><br>Although they\'re a lot less intimidated of their \"friends\" than before, they\'re still cautious while walking down the halls with you, Kyo, and Skye ",
    "character_object_narration <br><br>Speaking of Kyo, he\'s not here, AGAIN. He did tell you that he had a lot of work going on lately, but if the Radio Club\'s one of his major commitments, how important must those other things be ",
    "character_object_atria <br><br>	W-Well, it seems like we\'re close to the club room! By th ",
    "character_object_atria <br><br>way, w-were we able to register officially yet ",
    "character_object_player <br><br>We still need one more member, I think. That\'s what Kyo told me, anyways ",
    "character_object_skye <br><br>Mm mm, I see. How\'s he, by the way? He seems to not be around lately ",
    "character_object_player <br><br>	*Sigh* I don\'t know, Skye.. ",
    "character_object_narration <br><br>There is silence between you three, until Atria clears their throat ",
    "character_object_atria <br><br>	So, who... who are we trying to recruit ",
    "character_object_narration <br><br>	Skye and Atria turn to you, curiosity shining on their faces ",
    "character_object_narration <br><br>	You sheepishly grin at them ",
    "character_object_player <br><br>	Uh... have you heard of Esmeray Regulus ",
    "character_object_narration <br><br>	Atria\'s and Skye\'s eyes widen in shock ",
    "character_object_atria <br><br>	WHAT? ",
    "character_object_atria <br><br>T-That really, r-really high profile person?! The so-called charming f-boy of the school who\'s so handsome no one really cares if he flirts with everyone? ",
    "character_object_skye <br><br>	Why would he want to join us? Can we even trust him ",
    "character_object_player <br><br>	Hold on, y\'all. I haven\'t brought him in yet. I\'m just thinkin ",
    "character_object_player <br><br>about bringing him ",
    "character_object_player <br><br>	There are some reasons.. ",
    "character_object_narration <br><br>	You pause ",
    "character_object_narration <br><br>	You don\'t know if it\'s okay to share with them about Esmera ",
    "character_object_narration <br><br>being a musical talent yet ",
    "character_object_narration <br><br>	It\'d be best to get his consent first ",
    "character_object_player <br><br>A-Anyways, I think he would fit right in. If&mdash; I mean, when I bring him in, you\'ll see why. Can you trust me ",
    "character_object_narration <br><br>	With some hesitation, they both nod at you ",
    "character_object_narration <br><br>	Atria has a wary smile on their face, while Skye pushes u ",
    "character_object_narration <br><br>her glasses ",
    "character_object_narration <br><br>	You smile, happy to have them as your friends ",
    "character_object_player <br><br>	Thanks, y\'all ",
    "character_object_player <br><br>*BLACK SCREEN TRANSITION ",
    "School Hallway Day <br><br>School Hallway Da ",
    "character_object_narration <br><br>Although you said that you would bring Esmeray to them, it\'s proving to be harder than you thought ",
    "character_object_narration <br><br>It\'s been a couple of days since you told Atria and Skye to trust you. You were at the point of giving up on pursuing Esmeray, and going back to Atria and Skye in defeat ",
    "character_object_narration <br><br>Before you do so, you decide to trudge up the steps that lead to the rooftop, hoping to just have a quiet lunch ",
    "character_object_narration <br><br>As you get closer to the door of the rooftop, you hear the sound of familiar singing ",
    "character_object_narration <br><br>When you get to the slightly open door (Again?? You think to yourself.), you stop and peek through the crack, only to see Esmeray sitting on a bench as he sways to the melody he is singing ",
    "Transition to Rooftop Day <br><br>Transition to Rooftop Da ",
    "character_object_esmeray <br><br>Esmeray Genuin ",
    "character_object_esmeray <br><br>What if I could fly to the blue sugar sky ",
    "character_object_esmeray <br><br>Wouldn\'t that be swee ",
    "character_object_esmeray <br><br>.. ",
    "character_object_esmeray <br><br>Don\'t wanna deal with a li ",
    "character_object_esmeray <br><br>Just wanna move to the rhythm of the bea ",
    "character_object_esmeray <br><br>If only they could see.. ",
    "character_object_esmeray <br><br>I just wanna go fa ",
    "character_object_esmeray <br><br>That could be my remed ",
    "character_object_esmeray <br><br>.. ",
    "character_object_esmeray <br><br>But all I got is me and my guitar.. ",
    "character_object_narration <br><br>	Esmeray continues to sing and hum, while you start to think ",
    "character_object_narration <br><br>How long has it been since you started trying to get him to join the club ",
    "character_object_narration <br><br>	If you go to him now, would it make a difference ",
    "character_object_player <br><br>	Should I... have one more go ",

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
    "Narration  <br><br> He immediately stops smiling. There's a long pause as Esmeray stares at you long and hard. <br><br> _Dialog Code:  Chapter_3_0038000 ",
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
    "Narration  <br><br> He immediately stops smiling. There's a long pause. You can hardly breathe as Esmeray stares at you long and hard. <br><br> _Dialog Code:  Chapter_3_0040800 ",
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
    "Narration  <br><br> He immediately stops smiling. There's a long pause. You can hardly breathe as Esmeray stares at you long and hard. <br><br> _Dialog Code:  Chapter_3_0043700 ",
    "Player  <br><br> 	Is he gonna push me away again?... <br><br> _Dialog Code:  Chapter_3_0044000 ",
    "Narration  <br><br> But, rather than pushing you away for the umpteenth time, he rolls his eyes and shifts to the side, making room for you to sit next to him. <br><br> _Dialog Code:  Chapter_3_0044300 ",
    "Narration  <br><br> Your eyes widen, but you don't want to let go of this opportunity, and go and sit next to him. <br><br> _Dialog Code:  Chapter_3_0044500 ",
    "Scene reconverges here  Chapter_3_0044600 Scene reconverges here ",
    "jump Chapter_3_after_choice_2",
  ],
  'Chapter_3_after_choice_2': [
    // end hardcoded dialog_code == 'Chapter_3_0036100
    // Chapter_3_0036300 removed - covered in choice block above 
    // Chapter_3_0036600 removed - covered in choice block above 
    // Chapter_3_0036800 removed - covered in choice block above 
    // Chapter_3_0037000 removed - covered in choice block above 
    // Chapter_3_0037200 removed - covered in choice block above 
    // Chapter_3_0037400 removed - covered in choice block above 
    // Chapter_3_0037600 removed - covered in choice block above 
    // Chapter_3_0037800 removed - covered in choice block above 
    // Chapter_3_0038000 removed - covered in choice block above 
    // Chapter_3_0038200 removed - covered in choice block above 
    // Chapter_3_0038400 removed - covered in choice block above 
    // Chapter_3_0038600 removed - covered in choice block above 
    // Chapter_3_0038800 removed - covered in choice block above 
    // Chapter_3_0039000 removed - covered in choice block above 
    // Chapter_3_0039200 removed - covered in choice block above 
    // Chapter_3_0039400 removed - covered in choice block above 
    // Chapter_3_0039600 removed - covered in choice block above 
    // Chapter_3_0039800 removed - covered in choice block above 
    // Chapter_3_0040000 removed - covered in choice block above 
    // Chapter_3_0040200 removed - covered in choice block above 
    // Chapter_3_0040400 removed - covered in choice block above 
    // Chapter_3_0040600 removed - covered in choice block above 
    // Chapter_3_0040800 removed - covered in choice block above 
    // Chapter_3_0041000 removed - covered in choice block above 
    // Chapter_3_0041200 removed - covered in choice block above 
    // Chapter_3_0041400 removed - covered in choice block above 
    // Chapter_3_0041600 removed - covered in choice block above 
    // Chapter_3_0041900 removed - covered in choice block above 
    // Chapter_3_0042100 removed - covered in choice block above 
    // Chapter_3_0042300 removed - covered in choice block above 
    // Chapter_3_0042500 removed - covered in choice block above 
    // Chapter_3_0042700 removed - covered in choice block above 
    // Chapter_3_0042900 removed - covered in choice block above 
    // Chapter_3_0043100 removed - covered in choice block above 
    // Chapter_3_0043300 removed - covered in choice block above 
    // Chapter_3_0043500 removed - covered in choice block above 
    // Chapter_3_0043700 removed - covered in choice block above 
    // Chapter_3_0044000 removed - covered in choice block above 
    // Chapter_3_0044300 removed - covered in choice block above 
    // Chapter_3_0044500 removed - covered in choice block above 
    // Chapter_3_0044600 removed - covered in choice block above 
    "character_object_player <br><br> ...Hi, Esmeray ",
    "character_object_esmeray <br><br>Esmeray Neutra ",
    "character_object_narration <br><br>Esmeray nods, looking down at the lunch in his lap and shifting the food around with the fork absentmindedly ",
    "character_object_player <br><br>.. ",
    "character_object_esmeray <br><br>.. ",
    "character_object_esmeray <br><br>Player: ",
    "character_object_esmeray <br><br>So&mdash ",
    "character_object_esmeray <br><br>Esmeray: ",
    "character_object_esmeray <br><br>Why me ",
    "character_object_narration <br><br>You pause as Esmeray looks at you with a blank face ",
    "character_object_narration <br><br>Player: ",
    "character_object_narration <br><br>Excuse me ",
    "character_object_narration <br><br>Esmeray: ",
    "character_object_narration <br><br>Why me? Don\'t you have, like, other friends? What about those multicolored-haired weirdos&mdash; I mean, friends in your club already ",
    "character_object_narration <br><br>He pauses ",
    "character_object_narration <br><br>You side-eye Esmeray ",
    "character_object_narration <br><br>He looks blankly back at you ",
    "character_object_player <br><br>	I heard that ",
    "character_object_esmeray <br><br>	Nah, you didn\'t ",
    "character_object_narration <br><br>You playfully glare at him before turning to your own lunch and shifting in your seat ",
    "character_object_player <br><br>I\'ll be blunt. I just think you would make a good addition to the club ",
    "character_object_narration <br><br>Esmeray raises his eyebrow at you in disbelief, and his eyes look at you as if asking you, \"Seriously?\ ",
    "character_object_player <br><br>Not only are you very talented in music &mdash; which would be helpful to use whenever we do broadcasts &mdash; but I think your presence alone would be good publicity for the club ",
    "character_object_narration <br><br>	Esmeray scoffs at this, but continues to listen regardless ",
    "character_object_player <br><br>And also, I would like to be friends with you. You seem interesting, and nicer than you show. Although, you need to fix that playboy personality of yours ",
    "character_object_esmeray <br><br>	Pfft&mdash ",
    "character_object_narration <br><br>You quickly turn to Esmeray in disbelief, only to find his face contorted into a laughing, genuine smile ",
    "character_object_esmeray <br><br>	Playboy? Me? Nah, das crazy, what do you mean ",
    "character_object_esmeray <br><br>Like, I thought that\'s how you\'re supposed to act when you want to make friends ",
    "character_object_narration <br><br>	Now it\'s your turn to laugh ",
    "character_object_player <br><br>Hah, what? Really? You really thought the best way to socialize with people was to rizz them up? HAHA, that\'s HILARIOUS ",
    "character_object_esmeray <br><br>Wh-WHAT?! NO! I was NOT&mdash; rizzing ANYONE! You\'re just weird to interpret it that way ",
    "character_object_narration <br><br>	You two continue to laugh and talk more on the rooftop ",
    "character_object_narration <br><br>After you finish laughing, you look past the iron fence of the rooftop and at the sky ",
    "character_object_esmeray <br><br>Esmeray Genuin ",
    "character_object_player <br><br>The sky does look like blue sugar ",
    "character_object_narration <br><br>	Esmeray\'s eyes widen, and he whips his head towards you ",
    "character_object_esmeray <br><br>H-Huh ",
    "character_object_player <br><br>I overheard you singing earlier, and also before.. ",
    "character_object_player <br><br>...Wanna talk about it? ",
    "character_object_player <br><br>I-I mean, you don\'t have to, of course ",
    "character_object_player <br><br>I was just thinking, I mean, we are friends now, so.. ",
    "character_object_player <br><br>B-But of course, you don\'t have to, a-and if you want to then feel free to take all the time you need, and stuff.. ",
    "character_object_player <br><br>Esmeray: ",
    "character_object_player <br><br>	.. ",
    "character_object_player <br><br>	.. ",
    "character_object_player <br><br>F...friends ",
    "character_object_player <br><br>.. ",
    "character_object_player <br><br>Okay, I do want to say this to someone, at least.. ",
    "character_object_narration <br><br>You patiently wait for him to keep talking ",
    "character_object_narration <br><br>After a couple moments of silence, Esmeray clears his throat ",
    "character_object_esmeray <br><br>Ahem... When...... when I was in elementary school, I had a lot of people who thought I was like an alien because I was shorter than the average height and had weird looking ears ",
    "character_object_esmeray <br><br>	And s-so, in middle school, I decided to change things up a bit ",
    "character_object_esmeray <br><br>Grew my hair out, changed my style, learned how to accessorize ",
    "character_object_esmeray <br><br>I learned about social cues, read some comics, watched some movies where the main character undergoes a transformation and suddenly they know how to talk to people, and how to get them to like them ",
    "character_object_esmeray <br><br>	So, I tried some of the lines from the movies and comics out ",
    "character_object_esmeray <br><br>	A-And it worked! People... They started to like me ",
    "character_object_esmeray <br><br>My growth spurt helped me out too &mdash; I stood out from the crowd, in a good way ",
    "character_object_esmeray <br><br>All of a sudden, people stopped calling me names like alien boy, weirdo, and bozo, and they called me things like a prince, a cool guy ",
    "character_object_esmeray <br><br>	.. ",
    "character_object_esmeray <br><br>	And I liked it, my changes ",
    "character_object_esmeray <br><br>	And I thought it would stay that way, but.. ",
    "character_object_player <br><br>	.. ",
    "character_object_esmeray <br><br>	So, I started going out with some people ",
    "character_object_esmeray <br><br>At first, it was crazy to me: people actually liked me, I was actually someone attractive to them. My ways of communication were working, and stuff. ",
    "character_object_esmeray <br><br>	Like, whoa, intimate connection? Me ",
    "character_object_esmeray <br><br>And it was okay, but like, some people ended up ending our relationship because I wasn\'t who they thought I was ",
    "character_object_esmeray <br><br>	I mean, who wanted a dinosaur-loving, closete ",
    "character_object_esmeray <br><br>emo-musician guy ",
    "character_object_esmeray <br><br>	But others gave me hope ",
    "character_object_esmeray <br><br>There was a guy I went out with, and he really appreciated me. I felt seen, and loved, genuinely. For the first time in a while ",
    "character_object_esmeray <br><br>We ended up breaking it off because he said his parents were strict ",
    "character_object_esmeray <br><br>	Or at least, that\'s what he said to my face ",
    "character_object_esmeray <br><br>	.. ",
    "character_object_player <br><br>	.. ",
    "character_object_esmeray <br><br>...Turns out he was making fun of me to his friends the entire time we were dating. I found out because this girl I knew showed me a video of him talking to her and their other friends ",
    "character_object_esmeray <br><br>I was heartbroken, angry... I mean, how could he blatantly lie to me like that and still be okay? Why... Why was I left with all the negatives ",
    "character_object_narration <br><br>You begin to pat Esmeray on the back, seeing him so sad and agitated. He calms down, thanking you quietly ",
    "character_object_esmeray <br><br>*inhale* Anyways, that girl and I ended up getting close because she told me about how she left the friend group and she was there for me ",
    "character_object_esmeray <br><br>I healed, and then I thought that maybe she was the one, ya know ",
    "character_object_esmeray <br><br>	But then, it went to shit ",
    "character_object_esmeray <br><br>This girl, she was really toxic. As in she didn\'t let me see other people, but she could see a lot of others ",
    "character_object_esmeray <br><br>And she gaslit me often, made me emotionally dependent on her, and my mental health tanked ",
    "character_object_esmeray <br><br>I felt choked, and scared, and honestly, I was really disappointed: in her, myself, and just the humans around me for being so... inhumane ",
    "character_object_esmeray <br><br>I just... wanted to breathe again. So, I left her, left the school I was at, and transferred here. Blocked everyone I knew, and I hoped that I could start anew ",
    "character_object_esmeray <br><br>And I think I did, at least. No one seems to hate me here &mdash; just a lot of admiration. ...But you never know ",
    "character_object_esmeray <br><br>So I wanted to hide everything: never get close to anyone here, never tell anyone my story... but you.. ",
    "character_object_esmeray <br><br>	You... actually seem to care for me.. ",
    "character_object_esmeray <br><br>	...Thanks, for listening.. ",
    "character_object_narration <br><br>Looks like you were right: Esmeray didn\'t really have genuine friends of his own, so you decided it was time to change that ",
    "character_object_narration <br><br>	You make direct eye contact with Esmeray ",
    "character_object_esmeray <br><br>W-What? Are you gonna accuse me of being too edgy now, or something ",
    "character_object_player <br><br>	Nah. I just wanted to invite you again to the Radio Club ",
    "character_object_player <br><br>I promise we\'re all nice people, and I guarantee that we\'re not like those people from your past. ",
    "character_object_player <br><br>You can leave if you don\'t feel like staying with us, no strings attached. I think it would be amazing if you join us. ",
    "character_object_player <br><br>Wanna give it a try ",
    "character_object_narration <br><br>You hold out your hand, ready to receive a handshake in agreement from Esmeray ",
    "character_object_narration <br><br>Esmeray stares at your hand, before his own twitches and lifts up to shake it ",
    "character_object_narration <br><br>Your face breaks out into a large smile. The mood immediately becomes more lighthearted ",
    "character_object_player <br><br>	Great! Welcome aboard, Esme ",
    "character_object_esmeray <br><br>	...W-wait, Esme? I did NOT agree to this, what the f&mdash ",
    "character_object_narration <br><br>While laughing at him, you give him a set day and time for him to come to the Radio Club, as he continues to protest against your silly, stupid nickname ",
    "Proceed to next scene <br><br>Proceed to next scen ",
    "Music Room Basic + Printer + Mic + Laptop <br><br>Music Room Basic + Printer + Mic + Lapto ",
    "character_object_kyo <br><br>Kyo_FP_Bruh, Atria2_Nervous, and Skye_Defaul ",
    "character_object_narration <br><br>Today\'s finally the day ",
    "character_object_narration <br><br>You take a deep breath, anxiously looking at the door, trying to spot the familiar shade of dark turquoise hair ",
    "character_object_narration <br><br>Atria and Skye are just as nervous: Atria is fiddling with their star clips while Skye pushes up her glasses, the light reflecting off of them and covering her eyes ",
    "character_object_narration <br><br>In the corner stands Kyo, looking at the clock\'s second hand as it moves in its consistent rhythm ",
    "character_object_narration <br><br>*tick tick tick tick... ",
    "character_object_narration <br><br>Kyo sighs ",
    "character_object_kyo <br><br>	When\'s this guy gonna be here ",
    "character_object_player <br><br>	He\'ll be here soon, y\'all. Don\'t worry ",
    "character_object_narration <br><br>Atria and Skye turn to look at you with relieved faces, the tense silence of the room finally broken ",
    "character_object_skye <br><br>	W-We\'re not worried! Y-you are ",
    "character_object_narration <br><br>	You laugh at Skye\'s poor excuse ",
    "character_object_player <br><br>	Haha, yeah, I am ",
    "character_object_narration <br><br>Before you can elaborate, you hear footsteps approaching the door ",
    "character_object_narration <br><br>	All heads in the room turn to the door ",
    "character_object_narration <br><br>	There it is: that dark turquoise hair ",
    "Remove all sprites <br><br>Remove all sprite ",
    "character_object_esmeray <br><br>Esmeray Neutral (Centered ",
    "character_object_narration <br><br>In walks Esmeray, his face blank, scanning the room before his eyes land on you ",
    "character_object_narration <br><br>Immediately, you stand up and go to his side, before making jazz hands in his direction while facing the rest of your group ",

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
    // Chapter_3_0074200 removed - covered in choice block above 
    // Chapter_3_0074400 removed - covered in choice block above 
    // Chapter_3_0074600 removed - covered in choice block above 
    // Chapter_3_0074900 removed - covered in choice block above 
    // Chapter_3_0075100 removed - covered in choice block above 
    // Chapter_3_0075300 removed - covered in choice block above 
    // Chapter_3_0075500 removed - covered in choice block above 
    // Chapter_3_0075700 removed - covered in choice block above 
    // Chapter_3_0075900 removed - covered in choice block above 
    // Chapter_3_0076000 removed - covered in choice block above 
    "character_object_player <br><br>Here he is! Y\'all, I want you to meet Esme&mdash; I mean Esmeray, our school\'s lovely playboy and the composer of our music for the Radio Club! Esmeray, meet the club ",
    "character_object_esmeray <br><br>Move Esmeray to righ ",
    "character_object_atria <br><br>Atria1_Happy and Skye_Smile on lef ",
    "character_object_narration <br><br>Atria waves shyly, while Skye pushes up her glasses further and gives a cool nod directed to Esmeray ",
    "character_object_atria <br><br>Remove Atria and Sky ",
    "character_object_kyo <br><br>Kyo_FP_Neutral on righ ",
    "character_object_narration <br><br>Kyo scans Esmeray up and down before looking at the chalkboard in the classroom, eyeing the UFO and smiling fondly ",
    "character_object_kyo <br><br>Remove Ky ",
    "character_object_esmeray <br><br>Esmeray Genuin ",
    "character_object_narration <br><br>	Esmeray raises his hand in greeting ",
    "character_object_esmeray <br><br>	Yo. Esmeray, he/they ",
    "character_object_narration <br><br>	The room goes quiet again ",
    "character_object_narration <br><br>You\'re really sick of trying to be an extrovert in these awkward situations ",
    "character_object_narration <br><br>Before you can say another word, however, Atria suddenly stands up ",
    "character_object_esmeray <br><br>Move Esmeray to righ ",
    "character_object_atria <br><br>Atria2_Happy and Skye_Smile2 on lef ",
    "character_object_atria <br><br>	*Ahem ",
    "character_object_atria <br><br>	W-WELCOME, ESMERAY, TO THE RADIO CLUB! I-I\'M ATRIA, THEY/SHE ",
    "character_object_skye <br><br>I-I\'M SKYE, SHE/THEY, AND THESE ARE MY OTHER FRIENDS AND MEMBERS OF THE CLUB. T-TREAT THEM WELL, D-DUDE ",
    "character_object_narration <br><br>	Skye gestures to the air next to her ",
    "character_object_narration <br><br>Esmeray looks at the air, then at you, with a confused expression ",
    "character_object_narration <br><br>	He looks back at the air, and slowly nods in greeting ",
    "character_object_narration <br><br>	Skye\'s face brightens up ",
    "character_object_atria <br><br>N-Now that we\'re all introduced, we will now start the induction ceremony. Player said that you would be a great ally to our cause to save humanity as we know it ",
    "character_object_atria <br><br>Remove Atria and Sky ",
    "character_object_kyo <br><br>Kyo_FP_Cheerfu ",
    "character_object_kyo <br><br>Lmao, you said that, Player? You\'re a weirdo too, hahaha ",
    "character_object_player <br><br>What? I-I didn\'t say that, I think?? I&mdash ",
    "character_object_kyo <br><br>Remove Ky ",
    "character_object_atria <br><br>Atria2_Happy and Skye_Smile2 on lef ",
    "character_object_narration <br><br>You\'re cut off by Atria, who is too busy immersing in their role right now ",
    "character_object_narration <br><br>Atria: ",
    "character_object_narration <br><br>Therefore, we have to ask you.. ",
    "character_object_skye <br><br>Esmeray, do you solemnly swear to  promise to uphold the values of honor, truth, and transparency between fellow members? To join the club and fight the dark souls of corruption of the students through the power of voice and music? To not rest, until humanity is purified of evil, deceit, and misinformation ",
    "character_object_narration <br><br>	The room becomes silent again after the two of them speak up ",
    "character_object_narration <br><br>You sweatdrop, looking at Esmeray cautiously while trying not to burst out laughing ",
    "character_object_atria <br><br>Remove Atria and Sky ",
    "character_object_esmeray <br><br>Esmeray Neutral (centered ",
    "character_object_narration <br><br>	Esmeray\'s face is blank, eyeing the two in front of him ",
    "character_object_narration <br><br>Suddenly, he lets out a low chuckle, which gradually becomes louder until he\'s almost cackling ",
    "character_object_esmeray <br><br>	...Pft ",
    "character_object_esmeray <br><br>	...PuhahaA... PftahaHAHA ",
    "character_object_esmeray <br><br>	AHAhaAHahaha ",
    "character_object_esmeray <br><br>	...Pft ",
    "character_object_esmeray <br><br>	.. ",
    "character_object_esmeray <br><br>S-Sure, I\'ll join the club and fight the dark souls of corruption of the students through the power of the club or whatever. This\'ll be fun ",
    "character_object_esmeray <br><br>Esmeray Teeth Smil ",
    "character_object_narration <br><br>On Esmeray\'s face is a wide, genuine smile as he continues to laugh ",
    "character_object_narration <br><br>Atria and Skye are in shock, while Kyo starts to laugh along with Esmeray ",
    "character_object_esmeray <br><br>Move Esmeray to righ ",
    "character_object_atria <br><br>Skye_Smile2 and Atria2_Smile on lef ",
    "character_object_skye <br><br>H-Hey! It\'s true, the dark souls exist and need to be taken down ",
    "character_object_narration <br><br>	As she talks, Skye motions a punch into her palm ",
    "character_object_atria <br><br>Y-Yeah! Don\'t underestimate our drive to help the poor students of ILUNA Academy ",
    "character_object_narration <br><br>	Esmeray just nods, as if he is in total agreement ",
    "character_object_narration <br><br>Atria and Skye continue to talk loudly, and eventually the three of them start to converse about their interests and such ",
    "character_object_narration <br><br>You watch the scene fondly. Finally, the club is complete ",
    // end-of-CHAPTER-3-mark
    'jump CHAPTER_E'
  ],

  'CHAPTER_E': [
    'chap E',
    // start-of-CHAPTER-E-mark
    "_Name <br><br>_Tex ",
    " <br><br>Epilogue: Waning Iridescent ",
    "Music Room Basic All <br><br>Music Room Basic Al ",
    "Outro BGM <br><br>Outro BG ",
    "character_object_narration <br><br>After finally registering the club last week, you walk into the radio club classroom with a little bounce in your steps. It\'s the first official radio club meeting today, and you\'re excited! ",
    "character_object_narration <br><br>You look at the notes you wrote on your phone to remember what you\'re discussing with all the club members. It\'s simple enough: assign roles to the club members and finalize the plan for future activities ",
    "character_object_narration <br><br>Now you just need to wait for them to show up. They didn\'t forget about you telling them earlier in the day to meet you at lunch, right? You hope not ",
    "character_object_narration <br><br>Speaking of showing up, will Kyo even be here? You weren\'t even able to tell him all the good news, because you haven\'t seen him all day. Well, it\'s on him for choosing to miss this momentous occasion ",
    "character_object_narration <br><br>The door opens ",
    "character_object_atria <br><br>Atria1_happy, lef ",
    "character_object_atria <br><br>I\'m here ",
    "Skye_smile, center <br><br>Skye_smile, cente ",
    "character_object_skye <br><br>And so am I ",
    "character_object_player <br><br>Now, where the heck is Esme&mdash ",
    "character_object_esmeray <br><br>Esmeray_neutral, righ ",
    "character_object_esmeray <br><br>My bad. Had to shake off my fans, but I\'m good now. ",
    "character_object_skye <br><br>Pssh, okay, Mr. Famous ",
    "character_object_player <br><br>You sure they\'re not gonna follow you ",
    "character_object_esmeray <br><br>I mean, more club members, am I right ",
    "character_object_narration <br><br>The three of you stare at him ",
    "character_object_esmeray <br><br>Okay, okay, I\'m just kidding. I was a little late finishing my classwork. I\'ll be early next time ",
    "character_object_player <br><br>I\'ll hold you to that ",
    "character_object_narration <br><br>Esmeray laughs ",
    "character_object_player <br><br>Alright y\'all, we got business to take care of. First, we gotta decide what our roles are ",
    "character_object_skye <br><br>Well, it\'s obvious what you\'re gonna be. Club president! ",
    "character_object_narration <br><br>You put your hands on your hips ",
    "character_object_player <br><br>Yup! I\'ll be doing more of the behind-the-scenes stuff. As for the other roles... ",
    "character_object_skye <br><br>I\'ve already decided ",
    "character_object_player <br><br>Wait, I haven\'t even said what the other roles are yet ",
    "character_object_skye <br><br>Well, you\'re gonna need someone to write scripts, right? Then I\'ll do it ",
    "character_object_player <br><br>Sounds good. ",
    "character_object_skye <br><br>I can also get the latest scoops on what\'s going around at school. The janitor\'s closet is quite handy for getting a hold of hot tea, you know ",
    "character_object_player <br><br>Can you handle doing both ",
    "character_object_skye <br><br>Hell yeah, brother ",
    "character_object_narration <br><br>You flash a smile. This is already going pretty smoothly ",
    "character_object_player <br><br>Now, Esmeray.. ",
    "character_object_esmeray <br><br>Hm ",
    "character_object_player <br><br>You\'ll be in charge of making little jingles before and after we\'re done announcing and stuff. Oh, and I\'m thinking we could add music segments in our broadcasts too. ",
    "character_object_esmeray <br><br>You got it ",
    "character_object_narration <br><br>Esmeray takes out a small notebook. He starts writing and humming to himself ",
    "character_object_player <br><br>And finally, Atria, you\'ll be the one on the speakers! ",
    "character_object_atria <br><br>Um, are you sure? I\'m not that loud and confident yet.. ",
    "character_object_player <br><br>You don\'t have to be the only speaker of course. We can do it together ",
    "character_object_narration <br><br>Atria slowly regains her smile ",
    "character_object_atria <br><br>That\'d be easier for me. Thank you ",
    "character_object_player <br><br>Alright, now we gotta think of our future plans for this club ",
    "character_object_atria <br><br>Actually, is it okay if I suggest something ",
    "character_object_player <br><br>Of course ",
    "character_object_atria <br><br>It\'s Back to School Night next week. The staff wants clubs to help out with the concessions. ",
    "character_object_player <br><br>Then we should join! So, are we all free to help out with the concessions next week ",
    "character_object_narration <br><br>The other three club members say yes ",
    "character_object_player <br><br>Alright, we\'re done then. ",
    "character_object_narration <br><br>Happiness feels like it\'s going to burst out of your chest. It really feels like an actual club now. No wait, it\'s not just a club. It feels like you have a friend group for real too. You wonder if everyone\'s down for a group hug before they leave ",
    "character_object_narration <br><br>You open your arms wide ",
    "character_object_player <br><br>I know this is out of nowhere but... Who\'s down for a group hug? ",
    "character_object_atria <br><br>Huh ",
    "Skye Skye_smile2 <br><br>Heh, sure, why not. Come on, get over here, Atria ",
    "character_object_esmeray <br><br>Wait, we\'re actually doing this? Hold on a minute&mdash ",
    "Group hug CG  <br><br>Group hug CG ",
    "character_object_player <br><br>Hehe, thanks y\'all. If only Kyo was here to join in the hug too. He\'s the one who started the club, after all ",
    "Group hug CG ends. <br><br>Group hug CG ends ",
    "character_object_narration <br><br>All of the club members back up and stare at you in confusion ",
    "character_object_esmeray <br><br>Who\'s Kyo ",
    "character_object_player <br><br>Kyo. You know, the radio club president before I took over his role? Bright blue hair like cotton candy. Very munchable. It\'s hard to miss. ",
    "character_object_atria <br><br>I\'ve never heard of him ",
    "character_object_player <br><br>But you all met him before! You all talked to him and everything. Are you all messing with me ",
    "Skye Skye_smile <br><br>Oh, I get it. He\'s the friend you were talking to before. ",
    "character_object_player <br><br>Yeah! ",
    "Skye Skye_default <br><br>Like the ones I used to talk to inside the locker, right ",
    "character_object_player <br><br>Yeah, yeah! Wait, no! What the hell, do you guys genuinely not know? ",
    "character_object_narration <br><br>You don\'t get much of a response ",
    "character_object_player <br><br>Never mind, forget it. I\'m imagining things, hehe ",
    "character_object_narration <br><br>The lunch bell rings, and all of you part ways as you wave to each other. Your smile then fades. What do they mean, they don\'t know who Kyo is? You walk to your next class with a resting bitch face to mask your casual existential crisis. ",
    "Scene ends <br><br>Scene end ",
    "School Hallway Night <br><br>School Hallway Nigh ",
    "character_object_narration <br><br>It\'s Back To School Night. You go back and forth from your mom\'s car to carry water bottles to the venue. It takes just a few trips but the weight tires out your arms. Thank god that you\'re not in any of the sports clubs ",
    "character_object_narration <br><br>As you rest on a nearby bench, you see something colorful faintly glowing bright on the ground. It looks like a poorly drawn hand doing a peace sign. The pain is real. Hands are the bane of every artist\'s existence. ",
    "character_object_narration <br><br>...Wait, this looks like the work of Kyo ",
    "character_object_narration <br><br>As quickly as you notice the symbol, it disappears ",
    "character_object_narration <br><br>That is the only sign you\'ve seen of him in school all week. What the hell is he up to? ",
    "character_object_narration <br><br>Looking up ahead, you see more graffiti symbols in the distance, scattered far apart in a way that beckons you to follow them. When you try to get near the symbols, they disappear as well. Oh boy, do you have some questions to ask him when you see him ",
    "School Rooftop Night <br><br>School Rooftop Nigh ",
    "character_object_narration <br><br>You follow the path until you arrive at the school\'s rooftop. ",
    "character_object_narration <br><br>There he is, spray painting symbols on the ground all around him in a circle. They vanish into thin air ",
    "character_object_narration <br><br>You call out to him.  ",
    "character_object_player <br><br>Kyo ",
    "character_object_kyo <br><br>Kyo_FP_Shocke ",
    "character_object_narration <br><br>Kyo turns around. ",
    "character_object_kyo <br><br>Oh shit, hi Player ",
    "character_object_player <br><br>Where have you been? I haven\'t seen you in school all week ",
    "character_object_kyo <br><br>Um, about that.. ",
    "character_object_narration <br><br>He shakes his spray paint can but doesn\'t use it. He looks back and forth between his spray can, the moon above, and you as if he\'s contemplating his next move. He sighs ",
    "character_object_kyo <br><br>You weren\'t supposed to come here. ",
    "character_object_player <br><br>But you left a paint trail ",
    "character_object_kyo <br><br>That wasn\'t really a trail. I didn\'t think you\'d... Damn it, I was supposed to leave before you saw me ",
    "character_object_player <br><br>Wait, you\'re leaving? What\'s going on ",
    "character_object_kyo <br><br>You know what, fuck it. I\'m not going yet. \'Cause I don\'t even know where to begin explaining everything ",
    "character_object_narration <br><br>He\'s right. You have too many questions. ",
    "character_object_narration <br><br>You remember the confused faces of the club members from last week ",
    "character_object_player <br><br>Kyo, you\'re... real, right ",
    "character_object_narration <br><br>Kyo busts out a quick laugh ",
    "character_object_kyo <br><br>Nah you\'re just imagining me in your head. Wake up. It\'s been years since the accident&mdash ",
    "character_object_player <br><br>Kyo, I\'m serious. None of the club members see or hear you except me. They don\'t even know who you are. Why? Are you a ghost? Who and what even are you ",
    "character_object_narration <br><br>Kyo lets out a deep sigh ",
    "character_object_kyo <br><br>I don\'t actually go here. I used to, but it was a long time ago ",
    "character_object_player <br><br>Why are you here then ",
    "character_object_kyo <br><br>Kyo C ",
    "character_object_kyo <br><br>To help you make friends ",
    "character_object_narration <br><br>Your eyes widen ",
    "character_object_player <br><br>How\'d you know I wanted to... ",
    "character_object_kyo <br><br>You\'re the reason I opened up the radio club in the first place. ",
    "character_object_player <br><br>Huh?! Wait, then you were the only club member on purpose ",
    "character_object_kyo <br><br>Haha, yup ",
    "character_object_player <br><br>I\'m still not over you forcing me to do free labor though ",
    "character_object_kyo <br><br>It\'s better if you initiate these friendships on your own. I\'m just here to make sure you stay on track. You\'re the lonely one here, not me ",
    "character_object_narration <br><br>You roll your eyes. ",
    "character_object_kyo <br><br>You\'re not even gonna thank me?! ",
    "character_object_player <br><br>I still have more questions for you, funny man ",
    "character_object_kyo <br><br>Okay, shoot ",
    "character_object_player <br><br>If you\'ve been a student here, why does no one remember you at all ",
    "character_object_kyo <br><br>That\'s because I don\'t exist in your reality anymore. I live in another universe ",
    "character_object_player <br><br>You\'re an alien? ",
    "character_object_kyo <br><br>Okay no, but I know someone else who is. Anyways, I was isekai\'d a while ago. But just recently, I\'ve been blessed by the moon, so now I\'m able to travel between your reality and mine ",
    "character_object_kyo <br><br>The problem is, I\'m still learning how to use this power. So it\'s not perfect. It\'s kinda weird actually. Right now, I\'m like in a world between yours and mine. I can\'t really see you, only the outline of you. ",
    "character_object_narration <br><br>Kyo pauses for a bit as if he\'s thinking ",
    "character_object_kyo <br><br>Give me a high-five ",
    "character_object_player <br><br>For what ",
    "character_object_kyo <br><br>For being able to keep up with me. You know, since I speak so fast ",
    "character_object_player <br><br>O...kay ",
    "character_object_narration <br><br>When you go high-five Kyo, your hand goes through his like air. You don\'t feel him at all ",
    "character_object_narration <br><br>You stand there in silence, flabbergasted. A realization hits you ",
    "character_object_player <br><br>So you\'re the one haunting this school ",
    "character_object_kyo <br><br>Wait, what ",
    "character_object_player <br><br>Dude, did you not know? The paranormal activity club has been obsessed with you for a long time now. They\'ve been trying to contact you and everything. ",
    "character_object_kyo <br><br>They can\'t see me, right ",
    "character_object_player <br><br>That\'s not what I mean. But there\'s been ghost-like activity happening around school. I think you have something to do with it ",
    "character_object_kyo <br><br>Shit, my bad. Didn\'t mean to ",
    "character_object_player <br><br>If only they knew I was talking to a ghost the entire time. Wait, I don\'t think anybody heard you speak either. Not even the club members. Except me. What the hell ",
    "character_object_kyo <br><br>You\'re the one I was assigned to help ",
    "character_object_player <br><br>Assigned ",
    "character_object_kyo <br><br>By the moon. Who also gave me my powers. I think that\'s why you\'re also the only person who can see and hear me. Consider yourself lucky. ",
    "character_object_player <br><br>I was chosen? Wow.. ",
    "character_object_kyo <br><br>But I\'m running out of time. Now, I won\'t exist in this reality again. For real this time ",
    "character_object_narration <br><br>The school bell rings. School Bell SF ",
    "character_object_kyo <br><br>Go. Your friends are waiting for you ",
    "character_object_narration <br><br>Kyo sets up his exit ",
    "character_object_player <br><br>Wait! Before you go.. ",
    "character_object_player <br><br>Thank you. For everything ",
    "character_object_narration <br><br>Kyo looks back one last time and smiles ",
    "character_object_kyo <br><br>Fade out Kyo, use the Kyo_BG in his special scene folde ",
    "Game end <br><br>Game en ",
    "Go to credits <br><br>Go to credit ",
    // end-of-CHAPTER-E-mark
    'end'
  ],

  // placeholder here
  'END': [

  ],

});
