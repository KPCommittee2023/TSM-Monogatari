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
    "_Name <br><br>_Tex  <br><br> _Dialog Code:  _DialogCode ",
    " <br><br>Prologue: Waxing Iridescen  <br><br> _Dialog Code:  Chapter_0_0000100 ",
    "show scene school_hallway_daylight", // rule based 
    "Intro Music <br><br>Intro Musi  <br><br> _Dialog Code:  Chapter_0_0000400 ",
    "character_object_narration <br><br>It\'s lunch break at school, but the atmosphere is livelier than usual. Oh right, it\'s Club Day today. You still can\'t decide which club you want to join this year.  <br><br> _Dialog Code:  Chapter_0_0000700 ",
    "character_object_narration <br><br>You stop walking the hallways to look at the board of various club posters. Oh man, you\'ve never joined one before, so the amount of options overwhelm you a little. You think of just joining multiple clubs at a time, but you quickly brush off that thought. Clubs are supposed to be a good break from the humdrum of academics. Don\'t get ahead of yourself  <br><br> _Dialog Code:  Chapter_0_0000900 ",
    "character_object_narration <br><br>There\'s an art club poster. That\'s a hard no. The most artistic you\'ve ever been was when you colored the sky a solid green and the ground magenta. Only because the other crayons were missing. And that was in a coloring book. Not fun at all  <br><br> _Dialog Code:  Chapter_0_0001100 ",
    "character_object_narration <br><br>There are also a few posters advertising different sports clubs. No thanks. P.E. class already tires you out daily. There\'s no way you have the endurance to do that kind of stuff in your precious free time.  <br><br> _Dialog Code:  Chapter_0_0001300 ",
    "character_object_narration <br><br>Oh god, there\'s also the paranormal activity club. No way. Nope. You don\'t take the supernatural as seriously as its club members do. You know this because earlier at brunch today, the club advertised by telling ghost stories that were, in their own words, �real, not clickbait.  <br><br> _Dialog Code:  Chapter_0_0001500 ",
    "character_object_narration <br><br>One of them even said, �In fact, there\'s a ghost in this school right now, giving bad luck to people who are about to do presentations!� Nonsense. You\'re a junior and you are damn sure that there were no ghosts the entire time you attended school  <br><br> _Dialog Code:  Chapter_0_0001700 ",
    "character_object_narration <br><br>It would be fine if the club was interested in ghosts just for fun, but their fervent attitude says otherwise. You shudder at the thought of even talking to them.  <br><br> _Dialog Code:  Chapter_0_0001900 ",
    "character_object_narration <br><br>Ooh, a debate club poster. You don\'t consider yourself a chatterbox, but it\'s always fascinating to listen to other people\'s perspectives and find ways to decimate their arguments. It\'s basically a fun way to talk shit to others. Well, for the most part, save for some annoyingly serious people..  <br><br> _Dialog Code:  Chapter_0_0002100 ",
    "character_object_narration <br><br>Damn, besides the debate club, it looks like you don\'t have many good options here  <br><br> _Dialog Code:  Chapter_0_0002300 ",
    "character_object_narration <br><br>Wait, what\'s with that poster over there?  <br><br> _Dialog Code:  Chapter_0_0002500 ",
    "Radio club poster (wall poster). Allow toggle for zoom in to the RadioClub.png in Art folder. <br><br>Radio club poster (wall poster). Allow toggle for zoom in to the RadioClub.png in Art folder  <br><br> _Dialog Code:  Chapter_0_0002700 ",
    "character_object_narration <br><br>It advertises... a radio club? Interesting. Teachers love to praise your diction and confidence in your class presentations. This could be worth a try.  <br><br> _Dialog Code:  Chapter_0_0002900 ",
    "character_object_narration <br><br>You enter a nearby room with the radio club sign on its door.  <br><br> _Dialog Code:  Chapter_0_0003100 ",
    "show scene music_room_basic", // rule based 
    "show character character_object_kyo Kyo_BP_Default centered", // rule based 
    "Centered <br><br>Centere  <br><br> _Dialog Code:  Chapter_0_0003600 ",
    "character_object_narration <br><br>There\'s only one student here. Yet, you can tell that you\'re in the right place. Her appearance is just as colorful as the poster, and the graffiti beside her only emphasizes that  <br><br> _Dialog Code:  Chapter_0_0003800 ",
    "character_object_narration <br><br>The microphone on the other side of the room looks too high for her to reach. That�s a bit weird  <br><br> _Dialog Code:  Chapter_0_0004000 ",
    "character_object_narration <br><br>It looks like the girl�s still on her phone. You decide to get her attention  <br><br> _Dialog Code:  Chapter_0_0004200 ",
    "character_object_player <br><br>Hi, I wanna join the radio club  <br><br> _Dialog Code:  Chapter_0_0004500 ",
    "character_object_narration <br><br>She puts her phone away and turns around  <br><br> _Dialog Code:  Chapter_0_0004800 ",
    "show character character_object_kyo Kyo_FP_Shocked normal", // rule based 
    "character_object_narration <br><br>The student\'s voice then drops a few octaves lower than you expect her to have  <br><br> _Dialog Code:  Chapter_0_0005400 ",
    "show character character_object_kyo Kyo_FP_Bruh normal", // rule based 
    "character_object_narration <br><br>Well, you now know two things. One, this girl is actually a guy. Two, this dude�s language is as colorful as his hair. What a bombastic impression you�ve left on each other. It only goes uphill from here  <br><br> _Dialog Code:  Chapter_0_0006000 ",
    "character_object_player <br><br>Sorry, I just walked in. Is this the wrong room? I think I\'m in the wrong ro  <br><br> _Dialog Code:  Chapter_0_0006300 ",
    "show character character_object_kyo FP_Default normal", // rule based 
    "character_object_player <br><br>Yeah, that\'s kinda what I said before you started freaking out.  <br><br> _Dialog Code:  Chapter_0_0006900 ",
    "character_object_kyo <br><br>Okay, okay, my bad. I literally didn\'t hear you walk in. Anyways, hi, I\'m Kyo Kaneko. What\'s your name  <br><br> _Dialog Code:  Chapter_0_0007200 ",
    "character_object_player <br><br>I\'m Player.  <br><br> _Dialog Code:  Chapter_0_0007500 ",
    "character_object_player <br><br>Player. Alright, here\'s how the club works  <br><br> _Dialog Code:  Chapter_0_0007800 ",
    "character_object_player <br><br>Wait, you\'re not gonna be writing anything on the board or something like that  <br><br> _Dialog Code:  Chapter_0_0008100 ",
    "character_object_kyo <br><br>Nah. It\'s not that complicated.  <br><br> _Dialog Code:  Chapter_0_0008400 ",
    "character_object_narration <br><br>Is that his way of saying that he\'s not prepared  <br><br> _Dialog Code:  Chapter_0_0008700 ",
    "character_object_kyo <br><br>For now, this club mainly does school announcements, but I plan to make it so that we also do podcasting too.  <br><br> _Dialog Code:  Chapter_0_0009000 ",
    "character_object_narration <br><br>You reach into your backpack  <br><br> _Dialog Code:  Chapter_0_0009300 ",
    "character_object_narration <br><br>Kyo looks at you in confusion  <br><br> _Dialog Code:  Chapter_0_0009500 ",
    "character_object_player <br><br>Oh don\'t mind me, I\'m just gonna eat my lunch  <br><br> _Dialog Code:  Chapter_0_0009800 ",
    "character_object_kyo <br><br>Ooh, what are you having  <br><br> _Dialog Code:  Chapter_0_0010100 ",
    "character_object_player <br><br>Butter croissants  <br><br> _Dialog Code:  Chapter_0_0010400 ",
    "character_object_narration <br><br>Kyo stares at your bread a little longer than you want him to  <br><br> _Dialog Code:  Chapter_0_0010700 ",
    "character_object_kyo <br><br>Can I have some  <br><br> _Dialog Code:  Chapter_0_0011000 ",

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
    "character_object_kyo <br><br>Anyways, since this club requires confident people, I\'d say you\'re a pretty good candidate so far. Most people don�t have the balls to approach me  <br><br> _Dialog Code:  Chapter_0_0013600 ",
    "character_object_narration <br><br>You look up and down at Kyo incredulously  <br><br> _Dialog Code:  Chapter_0_0013900 ",
    "character_object_player <br><br>Really? You�re not even tall enough to reach the mic over there  <br><br> _Dialog Code:  Chapter_0_0014200 ",
    "character_object_kyo <br><br>Hey hey, shut up. Shut the fuck up  <br><br> _Dialog Code:  Chapter_0_0014500 ",
    "character_object_narration <br><br>Kyo looks up at the classroom clock  <br><br> _Dialog Code:  Chapter_0_0014800 ",
    "character_object_kyo <br><br>Lunch\'s almost over. So, whaddya say, you wanna join the club or not  <br><br> _Dialog Code:  Chapter_0_0015100 ",

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
    "_Name <br><br>_Tex  <br><br> _Dialog Code:  _DialogCode ",
    " <br><br>Chapter 1: Healing the Conditioned Puppe  <br><br> _Dialog Code:  Chapter_1_0000100 ",
    "School Rooftop Day <br><br>School Rooftop Da  <br><br> _Dialog Code:  Chapter_1_0000300 ",
    "character_object_atria <br><br>Atria\'s BG  <br><br> _Dialog Code:  Chapter_1_0000400 ",
    "character_object_narration <br><br>  <br><br> _Dialog Code:  Chapter_1_0000700 ",
    "character_object_narration <br><br>The fresh air really is relaxing when there\'s so much going on. Having to recruit members for a radio club of all things, and so suddenly too� as if that isn�t crazy enough, the amount of drama at the school has been�irritating, to say the least  <br><br> _Dialog Code:  Chapter_1_0000900 ",
    "character_object_narration <br><br>Hell, it�s insane. �Those damn rumors that the school is haunted are� unnerving, to say the least  <br><br> _Dialog Code:  Chapter_1_0001100 ",
    "character_object_player <br><br>�People are so desperate to just get a reaction out of people, huh� at this point I don�t doubt this school�s going to digress into chaos  <br><br> _Dialog Code:  Chapter_1_0001400 ",
    "character_object_kyo <br><br>Chaos? I call it fun  <br><br> _Dialog Code:  Chapter_1_0001700 ",
    "character_object_player <br><br>WHAT TH  <br><br> _Dialog Code:  Chapter_1_0002000 ",
    "character_object_kyo <br><br>Have you found any recruits yet  <br><br> _Dialog Code:  Chapter_1_0002300 ",
    "character_object_player <br><br>�Warn me next time before sneaking up on me, will you?  <br><br> _Dialog Code:  Chapter_1_0002600 ",
    "character_object_kyo <br><br>No thanks  <br><br> _Dialog Code:  Chapter_1_0002900 ",
    "character_object_narration <br><br>Kyo leans forward, his hands on his hips. His expression screams nothing but smug mockery, plainly amused at your annoyance  <br><br> _Dialog Code:  Chapter_1_0003200 ",
    "character_object_kyo <br><br>Now, you�ve found someone, right? Surely it can\'t be so hard to evaluate who here is a good candidate. Not when there are very few people who stand out amongst the rest  <br><br> _Dialog Code:  Chapter_1_0003500 ",
    "character_object_narration <br><br>He speaks as if he already has certain people in mind. If so, why is he so insistent on you recruiting members as opposed to him  <br><br> _Dialog Code:  Chapter_1_0003800 ",
    "character_object_player <br><br>No, Kyo, it has quite literally only been a couple hours  <br><br> _Dialog Code:  Chapter_1_0004100 ",
    "character_object_kyo <br><br>Mhm� from the way you�re acting now, I�ve most likely put too much faith in you� I guarantee you�re just too introverted to go up and ask someone to join  <br><br> _Dialog Code:  Chapter_1_0004400 ",
    "character_object_player <br><br>�Actually, I genuinely haven�t seen anyone who looks suitable. A radio club requires someone who is willing to� well, talk. Right  <br><br> _Dialog Code:  Chapter_1_0004700 ",
    "character_object_kyo <br><br>Right  <br><br> _Dialog Code:  Chapter_1_0005000 ",
    "character_object_kyo <br><br>You sure you\'re not just scared to interact with people  <br><br> _Dialog Code:  Chapter_1_0005200 ",
    "character_object_player <br><br>Shut up  <br><br> _Dialog Code:  Chapter_1_0005500 ",
    "character_object_narration <br><br>Jeez. For someone he just met, Kyo sure has some nerve  <br><br> _Dialog Code:  Chapter_1_0005800 ",
    "character_object_player <br><br>I hate to break it to you, Mr. know-it-all, but I have yet to see anybody who seems talkative. If anything, I�m the most extroverted person here  <br><br> _Dialog Code:  Chapter_1_0006100 ",
    "character_object_narration <br><br>Kyo just shoots you a cocky grin, rolling his eyes playfully.  <br><br> _Dialog Code:  Chapter_1_0006400 ",
    "character_object_kyo <br><br>Mhm, very believable. Just be a bit more observant, will you? It really can�t be that difficult to find someone  <br><br> _Dialog Code:  Chapter_1_0006700 ",
    "character_object_player <br><br>But  <br><br> _Dialog Code:  Chapter_1_0007000 ",
    "character_object_kyo <br><br>Yeah, yeah. I get it. Your short attention span won\'t allow you to tune into one person for more than 15 seconds  <br><br> _Dialog Code:  Chapter_1_0007300 ",
    "character_object_narration <br><br>You scowl at his remark, but your reaction only further enables him to keep poking at you. You didn�t really mind his banter, but at the very least you wish you could have the ability to snap back  <br><br> _Dialog Code:  Chapter_1_0007600 ",
    "character_object_player <br><br>What do you want me to do? Just sit and observe as someone goes about their day?? Just stand menacingly in some corner and watch them  <br><br> _Dialog Code:  Chapter_1_0007900 ",
    "character_object_kyo <br><br>No need to make it sound so creepy. Listen, you gotta do what you gotta do. Just don�t make it too obvious.  <br><br> _Dialog Code:  Chapter_1_0008200 ",
    "character_object_kyo <br><br>Though, from what I�ve seen, I�m starting to even question whether you�re capable of that much  <br><br> _Dialog Code:  Chapter_1_0008400 ",

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
    "character_object_kyo <br><br>Remove Ky  <br><br> _Dialog Code:  Chapter_1_0010900 ",
    "character_object_atria <br><br>Atria1_Happy. Darken by 50%, centere  <br><br> _Dialog Code:  Chapter_1_0011000 ",
    "character_object_narration <br><br>At that moment, you see a group of girls across the courtyard. They all seem rather silent�bored, even� but one of them in particular stands out to you  <br><br> _Dialog Code:  Chapter_1_0011300 ",
    "??? <br><br>Anyways! About the person I was talking about earlier, the one that I frequently watch. They did this one stream recently, it was a collaboration with some of my favorite streamers! When I saw the waiting room for it, I got really excited  <br><br> _Dialog Code:  Chapter_1_0011600 ",
    "??? <br><br>I sent it to you guys a while back, though I�m not sure if you saw it? Neither of you responded� Do you think there\'s a possibility we could watch it together sometime  <br><br> _Dialog Code:  Chapter_1_0011900 ",
    "character_object_narration <br><br>The two other girls look at each other before faking a smile towards her direction  <br><br> _Dialog Code:  Chapter_1_0012200 ",
    "character_object_girl_a <br><br>...You�re ranting about these streamers every two seconds, you expect us to know which one you are talking about  <br><br> _Dialog Code:  Chapter_1_0012500 ",
    "character_object_atria <br><br>Oh� �Yeah. Sorry. I guess sometimes I just say stuff without really thinking  <br><br> _Dialog Code:  Chapter_1_0012800 ",
    "character_object_atria <br><br>The one with� let�s see, I\'m trying to think of a way to describe this to someone who doesn�t watch them. They have� blue hair. It�s short, around shoulder length. Does that ring a bell  <br><br> _Dialog Code:  Chapter_1_0013100 ",
    "character_object_narration <br><br>Wait  <br><br> _Dialog Code:  Chapter_1_0013400 ",
    "character_object_narration <br><br>Short� blue hair�? That\'s  <br><br> _Dialog Code:  Chapter_1_0013600 ",
    "character_object_narration <br><br>Kind of silly  <br><br> _Dialog Code:  Chapter_1_0013800 ",
    "??? <br><br>I understand if you guys don�t remember! I know I can speak a bit quickly at times  <br><br> _Dialog Code:  Chapter_1_0014100 ",
    "??? <br><br>Oh! Yeah, the one I was talking about yesterday! Surely you remember th  <br><br> _Dialog Code:  Chapter_1_0014300 ",
    "character_object_girl_a <br><br>Hello? Earth to Atria? Atria Aiyashi  <br><br> _Dialog Code:  Chapter_1_0014600 ",
    "character_object_girl_a <br><br>You know, the Atria that thinks before she goes on meaningless tangents? We�re tired of you constantly bothering us about stuff we aren�t interested in  <br><br> _Dialog Code:  Chapter_1_0014800 ",
    "character_object_atria <br><br>Atria2_Nervou  <br><br> _Dialog Code:  Chapter_1_0015000 ",
    "character_object_narration <br><br>The small yellow haired girl, supposedly named Atria, tenses at the others� remark. She had been rambling excitedly about her interests just a moment ago and yet� her tone suddenly falters  <br><br> _Dialog Code:  Chapter_1_0015300 ",
    "character_object_atria <br><br>...A-Ah.. was I too much?.  <br><br> _Dialog Code:  Chapter_1_0015600 ",
    "Girl B <br><br>Atria, you can�t keep forgetting we raised you to be silent  <br><br> _Dialog Code:  Chapter_1_0015900 ",
    "character_object_atria <br><br>I�m sorry� I didn�t mean to do anything  <br><br> _Dialog Code:  Chapter_1_0016200 ",
    "Girl B <br><br>It\'s the same answer every single time. No matter how much we remind you, you go back to your annoying little �hyperfixations�  <br><br> _Dialog Code:  Chapter_1_0016500 ",
    "Girl B <br><br>Surely you can try a bit harder? You�ve been like this for years now. Is there really something stopping you from just� realizing we don�t care  <br><br> _Dialog Code:  Chapter_1_0016700 ",
    "Girl B <br><br>Take your silly little blue guy and talk about him to yourself, yeah  <br><br> _Dialog Code:  Chapter_1_0016900 ",
    "character_object_atria <br><br>Genuinely, I didn�t mean to do anything  <br><br> _Dialog Code:  Chapter_1_0017200 ",
    "Girl B <br><br>Do you want us to help you or not  <br><br> _Dialog Code:  Chapter_1_0017500 ",
    "character_object_atria <br><br>I�m sorry, okay  <br><br> _Dialog Code:  Chapter_1_0017800 ",
    "Girl B <br><br>We at least had some sort of faith in you. We thought we could change you to stop you from constantly babbling on�but you haven�t even made any ounce of progress  <br><br> _Dialog Code:  Chapter_1_0018100 ",
    "character_object_girl_a <br><br>The only reason we even tolerate you is because we feel bad  <br><br> _Dialog Code:  Chapter_1_0018400 ",
    "character_object_atria <br><br>Atria1_Sa  <br><br> _Dialog Code:  Chapter_1_0018600 ",
    "character_object_narration <br><br>Atria opens her mouth, as if to speak, but no sound escape  <br><br> _Dialog Code:  Chapter_1_0018900 ",
    "character_object_narration <br><br>her  <br><br> _Dialog Code:  Chapter_1_0019000 ",
    "character_object_narration <br><br>Her voice is caught, suffocated by the others words and the fear of the repercussions of standing up for herself. Her body language speaks volumes, clearly burdened by the weight of the expectations placed upon her  <br><br> _Dialog Code:  Chapter_1_0019200 ",
    "character_object_narration <br><br>In a shaky, pitiful murmur, she chokes out a rebuttal  <br><br> _Dialog Code:  Chapter_1_0019400 ",
    "character_object_atria <br><br>I-I said I�m sorry, okay  <br><br> _Dialog Code:  Chapter_1_0019700 ",
    "character_object_narration <br><br>Atria seems to regret speaking up halfway through her argument, audible desperation in her wavering voice. However, it was simply idiotic to think that the two standing next to her would back down so easily  <br><br> _Dialog Code:  Chapter_1_0020000 ",
    "Girl B <br><br>You really can�t do anything right, can you  <br><br> _Dialog Code:  Chapter_1_0020300 ",
    "character_object_narration <br><br>The girl at her side clicks her tongue, smiling manipulatively  <br><br> _Dialog Code:  Chapter_1_0020600 ",
    "Girl B <br><br>We�re nice enough to give you advice, and you can�t even shut up and take it? You�re lucky we even waste our effort on you.  <br><br> _Dialog Code:  Chapter_1_0020900 ",
    "Girl B <br><br>What happened to the promise you made us? That you�d do what we ask of you? Do you really want a repeat of what happened last time  <br><br> _Dialog Code:  Chapter_1_0021100 ",
    "character_object_narration <br><br>The third individual reaches upwards, placing a hand on Atria�s shoulder �comfortingly�.  <br><br> _Dialog Code:  Chapter_1_0021400 ",
    "character_object_atria <br><br>Atria2_Sad. Make sprite jump in surpris  <br><br> _Dialog Code:  Chapter_1_0021600 ",
    "character_object_narration <br><br>This only causes Atria to flinch and instinctively put her hand  <br><br> _Dialog Code:  Chapter_1_0021800 ",
    "character_object_narration <br><br>up in defense  <br><br> _Dialog Code:  Chapter_1_0021900 ",
    "character_object_girl_a <br><br>...We�ll take that reaction as a no  <br><br> _Dialog Code:  Chapter_1_0022200 ",
    "character_object_girl_a <br><br>Remember, we\'re your only friends. We\'re really just trying t  <br><br> _Dialog Code:  Chapter_1_0022500 ",
    "character_object_girl_a <br><br>do you a favor  <br><br> _Dialog Code:  Chapter_1_0022600 ",
    "character_object_atria <br><br>  <br><br> _Dialog Code:  Chapter_1_0022900 ",
    "character_object_narration <br><br>There is a hesitation that lasts for what seems like an eternity, as Atria�s expression fades. Her emotion is lacking in comparison to mere seconds ago. It seems forced, for sure, yet it\'s clear she�s putting significant effort into holding this mask  <br><br> _Dialog Code:  Chapter_1_0023200 ",
    "character_object_atria <br><br>�Yeah, thank you for reminding me  <br><br> _Dialog Code:  Chapter_1_0023500 ",
    "character_object_narration <br><br>She lowers her gaze, attempting with all her will to keep a strong, emotionless veil. This would have been manageable for the time being, but the two others don�t even respond to her submission  <br><br> _Dialog Code:  Chapter_1_0023800 ",
    "character_object_narration <br><br>They just� stare.  <br><br> _Dialog Code:  Chapter_1_0024000 ",
    "character_object_narration <br><br>Stare as she attempts to keep her composure  <br><br> _Dialog Code:  Chapter_1_0024200 ",
    "character_object_atria <br><br>  <br><br> _Dialog Code:  Chapter_1_0024500 ",
    "character_object_atria <br><br>  <br><br> _Dialog Code:  Chapter_1_0024800 ",
    "character_object_atria <br><br>Atria2_Sad � only shown momentarily before she disappear  <br><br> _Dialog Code:  Chapter_1_0025000 ",
    "Footstep SFX <br><br>Footstep SF  <br><br> _Dialog Code:  Chapter_1_0025100 ",
    "character_object_kyo <br><br>  <br><br> _Dialog Code:  Chapter_1_0025400 ",
    "character_object_kyo <br><br>Das crazy  <br><br> _Dialog Code:  Chapter_1_0025700 ",
    "character_object_player <br><br>�That\'s really all you have to say  <br><br> _Dialog Code:  Chapter_1_0026000 ",
    "character_object_kyo <br><br>Kyo_FP_Smilin  <br><br> _Dialog Code:  Chapter_1_0026200 ",
    "character_object_narration <br><br>Kyo looks at you with an obvious smugness, outwardly unphased by� whatever had just happened between those three.  <br><br> _Dialog Code:  Chapter_1_0026500 ",
    "character_object_kyo <br><br>I told you if you actually took the time to tune into a conversation, it wouldn�t be so hard to find someone  <br><br> _Dialog Code:  Chapter_1_0026800 ",
    "character_object_player <br><br>What, do you want me to go get her and ask her to join a radio club after that  <br><br> _Dialog Code:  Chapter_1_0027100 ",
    "character_object_narration <br><br>His eyes flicker, looking at the school door where Atria had run off to, then back at you  <br><br> _Dialog Code:  Chapter_1_0027400 ",
    "character_object_narration <br><br>Back� and forth� and back� and  <br><br> _Dialog Code:  Chapter_1_0027600 ",
    "character_object_kyo <br><br>So� are you gonna just sit there? Seriously  <br><br> _Dialog Code:  Chapter_1_0027900 ",
    "character_object_player <br><br>Wh  <br><br> _Dialog Code:  Chapter_1_0028200 ",
    "character_object_kyo <br><br>Are you even gonna do something? Or nah  <br><br> _Dialog Code:  Chapter_1_0028500 ",
    "character_object_narration <br><br>Kyo looks at you, like he wants you to go run after her. It�s� oddly ominous. Like he just wants an excuse to make you speak with Atria. �Does he know her or something? Is that what this was all about?  <br><br> _Dialog Code:  Chapter_1_0028800 ",

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
    "character_object_player <br><br>Fine, fine. Let�s go find her, alright  <br><br> _Dialog Code:  Chapter_1_0032200 ",
    "character_object_kyo <br><br>...Actually, I think you should go on your own. I� will only ge  <br><br> _Dialog Code:  Chapter_1_0032500 ",
    "character_object_kyo <br><br>in the way  <br><br> _Dialog Code:  Chapter_1_0032600 ",
    "character_object_narration <br><br>He speaks in an eerie tone, as if he�s admitting to something  <br><br> _Dialog Code:  Chapter_1_0032900 ",
    "character_object_narration <br><br>What on earth is up with him  <br><br> _Dialog Code:  Chapter_1_0033000 ",
    "character_object_player <br><br>�Okay? So� you just want me to convince her to join  <br><br> _Dialog Code:  Chapter_1_0033300 ",
    "character_object_player <br><br>Wait, what do you mean by �get in the way�??  <br><br> _Dialog Code:  Chapter_1_0033500 ",
    "character_object_player <br><br>  <br><br> _Dialog Code:  Chapter_1_0033700 ",
    "character_object_player <br><br>Actually, nevermind. I can see it  <br><br> _Dialog Code:  Chapter_1_0033900 ",
    "character_object_kyo <br><br>Kyo sprite is remove  <br><br> _Dialog Code:  Chapter_1_0034100 ",
    "character_object_narration <br><br>You look at the school building momentarily, sighing. It�s an irritating reality, but the longer you wait, the harder it will be to find her  <br><br> _Dialog Code:  Chapter_1_0034400 ",
    "character_object_player <br><br>I guess I�ll see you later then  <br><br> _Dialog Code:  Chapter_1_0034700 ",
    "character_object_narration <br><br>You look back to where Kyo had stood just a moment ago, your eyes only meeting blank space  <br><br> _Dialog Code:  Chapter_1_0035000 ",
    "character_object_player <br><br>Huh  <br><br> _Dialog Code:  Chapter_1_0035300 ",
    "character_object_narration <br><br>�He never fails to do something strange, does he  <br><br> _Dialog Code:  Chapter_1_0035600 ",
    "character_object_narration <br><br>You figure you should just get moving  <br><br> _Dialog Code:  Chapter_1_0035800 ",
    "Transition to School Classroom Day <br><br>Transition to School Classroom Da  <br><br> _Dialog Code:  Chapter_1_0036100 ",
    "character_object_narration <br><br>  <br><br> _Dialog Code:  Chapter_1_0036400 ",
    "character_object_narration <br><br>Alright then, she has to be somewhere around here  <br><br> _Dialog Code:  Chapter_1_0036600 ",
    "character_object_player <br><br>Atria? Hello  <br><br> _Dialog Code:  Chapter_1_0036900 ",
    "character_object_narration <br><br>�  <br><br> _Dialog Code:  Chapter_1_0037200 ",
    "character_object_narration <br><br>Silence  <br><br> _Dialog Code:  Chapter_1_0037400 ",
    "character_object_player <br><br>Atria? Don�t worry� I�m not gonna yell  <br><br> _Dialog Code:  Chapter_1_0037700 ",
    "character_object_atria <br><br>Atria1_Sa  <br><br> _Dialog Code:  Chapter_1_0037900 ",
    "Centered <br><br>Centere  <br><br> _Dialog Code:  Chapter_1_0038000 ",
    "character_object_narration <br><br>You glance around, scanning the room, your eyes spotting a fragile figure hunched in the corner. The eye contact causes her body to tense, as if she were expecting judgment, or ridicule  <br><br> _Dialog Code:  Chapter_1_0038300 ",
    "character_object_atria <br><br>�W-why do you� know my name�  <br><br> _Dialog Code:  Chapter_1_0038600 ",
    "character_object_narration <br><br>Atria speaks between quiet sobs, her voice strained with emotion. She�s vulnerable, her guard shattered from the weight of her own struggles  <br><br> _Dialog Code:  Chapter_1_0038900 ",
    "character_object_player <br><br>I� overheard your conversation earlier  <br><br> _Dialog Code:  Chapter_1_0039200 ",
    "character_object_narration <br><br>You take a few steps towards her, careful not to invade her space. Despite your carefulness, she pushes herself against the walls, making herself appear as small and insignificant as possible  <br><br> _Dialog Code:  Chapter_1_0039500 ",
    "character_object_atria <br><br>D-did they send you here� to deal with me�  <br><br> _Dialog Code:  Chapter_1_0039800 ",
    "character_object_narration <br><br>Her voice drips with anticipation. Anticipation to be met with some sort of pain, whether it be emotional or physical  <br><br> _Dialog Code:  Chapter_1_0040100 ",
    "character_object_player <br><br>No� it�s nothing of the sort. My name is Player� It� must be really exhausting having to listen to their torment  <br><br> _Dialog Code:  Chapter_1_0040400 ",
    "character_object_player <br><br>Do they constantly tell you things like that  <br><br> _Dialog Code:  Chapter_1_0040600 ",
    "character_object_atria <br><br>I-  <br><br> _Dialog Code:  Chapter_1_0040900 ",
    "character_object_narration <br><br>Atria hesitates, unsure whether she should even respond to such a question  <br><br> _Dialog Code:  Chapter_1_0041200 ",
    "character_object_atria <br><br>They� they just want what�s best for me. They�ve been my friends for a long time.  <br><br> _Dialog Code:  Chapter_1_0041500 ",
    "character_object_narration <br><br>  <br><br> _Dialog Code:  Chapter_1_0041800 ",
    "character_object_narration <br><br>If you were to disregard the scene that had taken place earlier, her self-assured words would seem genuine.  <br><br> _Dialog Code:  Chapter_1_0042000 ",
    "character_object_narration <br><br>She\'s noticeably frustrated, like she\'s trying to convince you to believe in her words. Has she really been tricked into thinking she\'s at fault? To the point she would stand up for those so-called �friends�  <br><br> _Dialog Code:  Chapter_1_0042200 ",
    "character_object_player <br><br>How long, exactly, have they been your friends  <br><br> _Dialog Code:  Chapter_1_0042500 ",
    "character_object_narration <br><br>Your tone is soft, encouraging her to open up. Even so, her eyes dart around, desperately seeking for anywhere to look except your own gaze  <br><br> _Dialog Code:  Chapter_1_0042800 ",
    "character_object_atria <br><br>�As long as I remember. Really, I�m serious� they�re jus  <br><br> _Dialog Code:  Chapter_1_0043100 ",
    "character_object_atria <br><br>trying to deal with me  <br><br> _Dialog Code:  Chapter_1_0043200 ",
    "character_object_player <br><br>Don�t you think they are being a bit� ah, harsh  <br><br> _Dialog Code:  Chapter_1_0043500 ",
    "character_object_atria <br><br>Atria2_Sa  <br><br> _Dialog Code:  Chapter_1_0043700 ",
    "character_object_narration <br><br>You observe Atria closely, noticing the conflict within her as she struggles with her loyalty to her �friends� and their effect on her emotional stability. She seems torn, caught between the conflicting beliefs instilled by her �friends� and the flickers of doubt emerging within her  <br><br> _Dialog Code:  Chapter_1_0044000 ",
    "character_object_narration <br><br>She speaks, her voice laced with a forced conviction  <br><br> _Dialog Code:  Chapter_1_0044200 ",
    "character_object_atria <br><br>It\'s� fine. I�m used to it  <br><br> _Dialog Code:  Chapter_1_0044500 ",
    "character_object_narration <br><br>�Used to it  <br><br> _Dialog Code:  Chapter_1_0044800 ",
    "character_object_narration <br><br>You struggle for a good moment, before a realization hits you; her perception of reality has been shaped by years of� whatever they had done to her  <br><br> _Dialog Code:  Chapter_1_0045000 ",
    "character_object_narration <br><br>Comforting and giving advice wasn�t exactly your strong suit..  <br><br> _Dialog Code:  Chapter_1_0045200 ",
    "character_object_player <br><br>Atria� that\'s not normal  <br><br> _Dialog Code:  Chapter_1_0045500 ",
    "character_object_atria <br><br>Huh  <br><br> _Dialog Code:  Chapter_1_0045800 ",
    "character_object_narration <br><br>She takes a few seconds to herself, a mix of confusion and curiosity seeping through her expression. You take the silence as an opportunity to explain and clear up any possible questions  <br><br> _Dialog Code:  Chapter_1_0046100 ",
    "character_object_player <br><br>What I mean is, friends are meant to encourage your hobbies, and allow you to open up about yourself. What I saw back there wasn�t healthy� nor acceptable  <br><br> _Dialog Code:  Chapter_1_0046400 ",
    "character_object_narration <br><br>You speak with a confident tone, pushing aside your own uncertainties on how to navigate such a sensitive conversation. The more you speak, however, the more confusion crosses Atrias face  <br><br> _Dialog Code:  Chapter_1_0046700 ",
    "character_object_atria <br><br>But� that\'s how it�s always been. It\'s been like that for a  <br><br> _Dialog Code:  Chapter_1_0047000 ",
    "character_object_atria <br><br>long as I remember  <br><br> _Dialog Code:  Chapter_1_0047100 ",
    "character_object_narration <br><br>The confusion of the whole situation only proved the depth of her conditioning  <br><br> _Dialog Code:  Chapter_1_0047400 ",
    "character_object_narration <br><br>The dynamics you had witnessed between her and her so-called �friends� seem to be ingrained in her entire understanding of relationships. It blurs the line of what she depicts as acceptable or not.  <br><br> _Dialog Code:  Chapter_1_0047600 ",
    "character_object_player <br><br>Do you mind explaining to me what your friends have been like towards you? Perhaps I can get a better insight on what exactly is going on  <br><br> _Dialog Code:  Chapter_1_0047900 ",
    "character_object_player <br><br>I� understand if you don�t want to share. Though it really could help me evaluate who�s in the wrong  <br><br> _Dialog Code:  Chapter_1_0048100 ",
    "character_object_atria <br><br>�I would, but� they don�t really like me talking to othe  <br><br> _Dialog Code:  Chapter_1_0048400 ",
    "character_object_atria <br><br>people  <br><br> _Dialog Code:  Chapter_1_0048500 ",
    "character_object_atria <br><br>�But� the way you are talking to me completely contradicts the things that they have said would happen if I did  <br><br> _Dialog Code:  Chapter_1_0048700 ",
    "character_object_narration <br><br>Atria mumbles, taking in a deep breath as she contemplates whether or not she should open up  <br><br> _Dialog Code:  Chapter_1_0049000 ",
    "character_object_atria <br><br>�Alright, just� please don�t tell them I said anything. Nobody� has ever, er� offered this to me, so� I�m not really sure how they would react if they found out  <br><br> _Dialog Code:  Chapter_1_0049300 ",
    "character_object_narration <br><br>You nod, reassuring her  <br><br> _Dialog Code:  Chapter_1_0049600 ",
    "character_object_player <br><br>I wouldn�t dream of it  <br><br> _Dialog Code:  Chapter_1_0049900 ",
    "character_object_narration <br><br>Atria visibly relaxes, her tense posture softening slightly as she starts to consider sharing her experiences. It\'s a step into the unknown for her.  <br><br> _Dialog Code:  Chapter_1_0050200 ",
    "character_object_atria <br><br>Okay, just� give me a moment.  <br><br> _Dialog Code:  Chapter_1_0050500 ",
    "character_object_narration <br><br>She takes a deep breath, steadying herself as she gathers the courage to break the chains of silence that have bound her for so long  <br><br> _Dialog Code:  Chapter_1_0050800 ",
    "character_object_atria <br><br>Atria1_Nervou  <br><br> _Dialog Code:  Chapter_1_0051000 ",
    "character_object_narration <br><br>A weak smile forms as she reminisces  <br><br> _Dialog Code:  Chapter_1_0051200 ",
    "character_object_atria <br><br>I met them in 2nd grade, and they were the first people in my life that would actually call me a friend. �They never really liked me hanging out with others. So, since then, I�ve just kind of stuck with them  <br><br> _Dialog Code:  Chapter_1_0051500 ",
    "character_object_atria <br><br>They helped me, and they still help me to this day. The least I can do for them is follow a couple orders here and there. �I don�t exactly know what would happen if I didn�t do as they asked, anyways. There\'s no use putting up too much of a fight  <br><br> _Dialog Code:  Chapter_1_0051700 ",
    "character_object_narration <br><br>A small, breathless laugh leaves her, but it seems rather simulated  <br><br> _Dialog Code:  Chapter_1_0052000 ",
    "character_object_atria <br><br>They remind me when I speak too much, and push me to improve myself. They put up with me, even now, after years of not being able to keep to myself  <br><br> _Dialog Code:  Chapter_1_0052300 ",
    "character_object_atria <br><br>Atria1_Timi  <br><br> _Dialog Code:  Chapter_1_0052500 ",
    "character_object_narration <br><br>Atria�s expression fades as she takes a moment to think about what she had just said. Quietly, she repeats her words to herself  <br><br> _Dialog Code:  Chapter_1_0052800 ",
    "character_object_atria <br><br>�Years  <br><br> _Dialog Code:  Chapter_1_0053100 ",
    "character_object_atria <br><br>I�m� lucky they even stick around  <br><br> _Dialog Code:  Chapter_1_0053400 ",
    "character_object_narration <br><br>Her words are solemn, yet she accepts this idea as the truth with no troubles. You shake your head  <br><br> _Dialog Code:  Chapter_1_0053700 ",
    "character_object_player <br><br>I� I can�t know exactly what your life has been like, but from what I saw back there, they� really don�t seem like they are doing this for your sake.  <br><br> _Dialog Code:  Chapter_1_0054000 ",
    "character_object_player <br><br>I can understand it\'s difficult to accept this, especially since you haven�t been exposed to kinder relationships  <br><br> _Dialog Code:  Chapter_1_0054200 ",
    "character_object_player <br><br>However, isolating you from others and demanding obedience is not a healthy dynamic. You have individuality, and it shouldn�t be suppressed  <br><br> _Dialog Code:  Chapter_1_0054400 ",
    "character_object_narration <br><br>You emphasize the qualities of healthy relationships, hoping your words impact her twisted definition of a friend  <br><br> _Dialog Code:  Chapter_1_0054700 ",
    "character_object_atria <br><br>Atria2_Timi  <br><br> _Dialog Code:  Chapter_1_0054900 ",
    "character_object_narration <br><br>She looks up in thought, finding it difficult to grasp the foreign concept that her �friends� actions may not align with true friendship  <br><br> _Dialog Code:  Chapter_1_0055100 ",
    "character_object_atria <br><br>But� they\'ve always said it\'s for my own good. That their guidance and control are necessary to make me better. Isn�t� that how friends are supposed to be  <br><br> _Dialog Code:  Chapter_1_0055400 ",
    "character_object_narration <br><br>You look at her questioningly, wondering how exactly you could explain this to her when her thought process had been so warped and muddled  <br><br> _Dialog Code:  Chapter_1_0055700 ",
    "character_object_player <br><br>�Here, imagine this; a friendship where you are allowed to express yourself freely, and your thoughts and feelings are valued.  <br><br> _Dialog Code:  Chapter_1_0056000 ",
    "character_object_narration <br><br>Atria\'s eyes widen, fascinated in the allure of this alternate reality  <br><br> _Dialog Code:  Chapter_1_0056300 ",
    "character_object_atria <br><br>Atria1_Timi  <br><br> _Dialog Code:  Chapter_1_0056500 ",
    "character_object_atria <br><br>�Are you sure� that�s really possible  <br><br> _Dialog Code:  Chapter_1_0056800 ",
    "character_object_narration <br><br>You nod, offering her your hand. She reluctantly takes it, standing  <br><br> _Dialog Code:  Chapter_1_0057100 ",
    "character_object_player <br><br>...I understand if you don�t believe me, but hey, why not try it out  <br><br> _Dialog Code:  Chapter_1_0057400 ",
    "character_object_atria <br><br>  <br><br> _Dialog Code:  Chapter_1_0057700 ",
    "character_object_atria <br><br>�I-I�m scared  <br><br> _Dialog Code:  Chapter_1_0057900 ",
    "character_object_atria <br><br>�What are they going to think  <br><br> _Dialog Code:  Chapter_1_0058100 ",
    "character_object_narration <br><br>You look at her with solemn eyes, acknowledging the severity of her situation  <br><br> _Dialog Code:  Chapter_1_0058400 ",

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
    "character_object_atria <br><br>But  <br><br> _Dialog Code:  Chapter_1_0063900 ",
    "character_object_atria <br><br>Atria1_Nervou  <br><br> _Dialog Code:  Chapter_1_0064100 ",
    "character_object_atria <br><br>I can try  <br><br> _Dialog Code:  Chapter_1_0064300 ",
    "character_object_narration <br><br>You smile at her efforts  <br><br> _Dialog Code:  Chapter_1_0064600 ",
    "character_object_player <br><br>I�ll be here whenever you need me, okay  <br><br> _Dialog Code:  Chapter_1_0064900 ",
    "character_object_player <br><br>Well� of course I�m not always here but- My point is, if you need help, don�t worry about asking for it  <br><br> _Dialog Code:  Chapter_1_0065100 ",
    "character_object_atria <br><br>Atria2_Nervou  <br><br> _Dialog Code:  Chapter_1_0065300 ",
    "character_object_narration <br><br>Atria nods, which you take as a cue to leave  <br><br> _Dialog Code:  Chapter_1_0065600 ",
    "character_object_narration <br><br>  <br><br> _Dialog Code:  Chapter_1_0065800 ",
    "character_object_narration <br><br>But upon turning around  <br><br> _Dialog Code:  Chapter_1_0066000 ",
    "character_object_atria <br><br>Atria sprite is remove  <br><br> _Dialog Code:  Chapter_1_0066200 ",
    "character_object_kyo <br><br>Kyo_FP_Bruh - Appears before dialogue bo  <br><br> _Dialog Code:  Chapter_1_0066400 ",
    "character_object_player <br><br>K  <br><br> _Dialog Code:  Chapter_1_0066700 ",
    "character_object_player <br><br>Holy BONKERS will you stop doing that  <br><br> _Dialog Code:  Chapter_1_0066900 ",
    "character_object_kyo <br><br>Oh, come on. I�m not that scary  <br><br> _Dialog Code:  Chapter_1_0067200 ",
    "character_object_kyo <br><br>Anyways, will you stop forgetting why you even talked to her in the first place?  <br><br> _Dialog Code:  Chapter_1_0067400 ",
    "character_object_narration <br><br>Oh, right. The radio club  <br><br> _Dialog Code:  Chapter_1_0067700 ",
    "character_object_player <br><br>Well� you�re here now, so why don�t you do it  <br><br> _Dialog Code:  Chapter_1_0068000 ",
    "character_object_kyo <br><br>...She�s waaay more likely to listen to you, you�re the one that was persuading her to do a load of other things  <br><br> _Dialog Code:  Chapter_1_0068300 ",
    "character_object_player <br><br>Sounds like an excuse to me. You�re pretty good a  <br><br> _Dialog Code:  Chapter_1_0068600 ",
    "character_object_player <br><br>blabbering, you two could get along  <br><br> _Dialog Code:  Chapter_1_0068700 ",
    "character_object_narration <br><br>Kyo reaches his hand out to push you back towards Atria, but stops mid-way, pulling his hand back, and letting out a long sigh before gesturing to her  <br><br> _Dialog Code:  Chapter_1_0069000 ",
    "character_object_kyo <br><br>Go on  <br><br> _Dialog Code:  Chapter_1_0069300 ",
    "character_object_atria <br><br>Atria2_Nervou  <br><br> _Dialog Code:  Chapter_1_0069500 ",
    "character_object_kyo <br><br>Kyo left, Atria righ  <br><br> _Dialog Code:  Chapter_1_0069600 ",
    "character_object_player <br><br>�Sorry about that  <br><br> _Dialog Code:  Chapter_1_0069900 ",
    "character_object_narration <br><br>Atria looks towards you with blatant confusion  <br><br> _Dialog Code:  Chapter_1_0070200 ",
    "character_object_player <br><br>I was just wondering if you�re interested in clubs at all? It�ll be a perfect opportunity to get yourself out there and make new friends  <br><br> _Dialog Code:  Chapter_1_0070500 ",
    "character_object_player <br><br>I was hoping to recruit you to the radio club. There, you�ll be able to go on tangents without being judged. I think you�ll fit the role perfectly, and hey, you could maybe help recruit some new members too�  <br><br> _Dialog Code:  Chapter_1_0070700 ",
    "character_object_atria <br><br>Atria2_Timi  <br><br> _Dialog Code:  Chapter_1_0070900 ",
    "character_object_atria <br><br>Ah� you�re sure I won�t come off as annoying? Y�know� talking and such  <br><br> _Dialog Code:  Chapter_1_0071200 ",
    "character_object_player <br><br>Of course not. The entire point of a radio club is to speak into a microphone. You can even take it for a little test run, if you�d like  <br><br> _Dialog Code:  Chapter_1_0071500 ",
    "character_object_atria <br><br>..  <br><br> _Dialog Code:  Chapter_1_0071800 ",
    "character_object_atria <br><br>W-well� I suppose it�s the least I can do� you�ve kind of helped me consider possibilities I would have never even imagined otherwise  <br><br> _Dialog Code:  Chapter_1_0072000 ",
    "character_object_narration <br><br>There�s a brief pause before Atria clings to your sleeve, allowing you to lead the way  <br><br> _Dialog Code:  Chapter_1_0072300 ",
    "Sprites are removed - momentarily for background transition <br><br>Sprites are removed - momentarily for background transitio  <br><br> _Dialog Code:  Chapter_1_0072500 ",
    "Music_Room_Basic + Music_Printer <br><br>Music_Room_Basic + Music_Printe  <br><br> _Dialog Code:  Chapter_1_0072700 ",
    "character_object_kyo <br><br>Kyo_SP_Defaul  <br><br> _Dialog Code:  Chapter_1_0072900 ",
    "character_object_atria <br><br>Atria1_Timi  <br><br> _Dialog Code:  Chapter_1_0073000 ",
    "character_object_kyo <br><br>Kyo left, Atria righ  <br><br> _Dialog Code:  Chapter_1_0073100 ",
    "character_object_player <br><br>Here�s the club room! Cozy, isn�t it  <br><br> _Dialog Code:  Chapter_1_0073400 ",
    "character_object_kyo <br><br>Kyo_FP_Smilin  <br><br> _Dialog Code:  Chapter_1_0073600 ",
    "character_object_narration <br><br>Kyo speaks, his tone strung with an obvious sarcasm  <br><br> _Dialog Code:  Chapter_1_0073900 ",
    "character_object_kyo <br><br>Wooow� 32/10 persuasive skills  <br><br> _Dialog Code:  Chapter_1_0074200 ",
    "character_object_kyo <br><br>Narration:  <br><br> _Dialog Code:  Chapter_1_0074400 ",
    "character_object_kyo <br><br>You just shoot a glare at him before sighing and moving on  <br><br> _Dialog Code:  Chapter_1_0074500 ",
    "character_object_player <br><br>Well, how about you step up to the microphone and try it out? Sound good  <br><br> _Dialog Code:  Chapter_1_0074800 ",
    "character_object_narration <br><br>Atria reluctantly approaches the microphone at the back of the studio, looking at you for approval before switching it on, tapping its end unsurely.  <br><br> _Dialog Code:  Chapter_1_0075100 ",
    "character_object_narration <br><br>She has to lower it a bit in order to reach it properly� heh, that would make two short people in the club  <br><br> _Dialog Code:  Chapter_1_0075300 ",
    "character_object_atria <br><br>...Ah� what should I say  <br><br> _Dialog Code:  Chapter_1_0075600 ",
    "character_object_player <br><br>Hmm.  <br><br> _Dialog Code:  Chapter_1_0075900 ",
    "character_object_narration <br><br>You look at Kyo for an answer, but you only receive a shrug in response  <br><br> _Dialog Code:  Chapter_1_0076200 ",
    "character_object_player <br><br>...I guess whatever you feel like. It�s just a test, so, how about something you�re passionate about  <br><br> _Dialog Code:  Chapter_1_0076500 ",
    "character_object_kyo <br><br>Yeah, that works. Just whatever is easy to talk about  <br><br> _Dialog Code:  Chapter_1_0076800 ",
    "character_object_kyo <br><br>Kyo sprite is remove  <br><br> _Dialog Code:  Chapter_1_0077000 ",
    "character_object_atria <br><br>Atria2_Timi  <br><br> _Dialog Code:  Chapter_1_0077100 ",
    "Centered <br><br>Centere  <br><br> _Dialog Code:  Chapter_1_0077200 ",
    "character_object_narration <br><br>Atria approaches the mic, a bit tense. She starts off very reluctant, stuttering over her sentences  <br><br> _Dialog Code:  Chapter_1_0077500 ",
    "character_object_atria <br><br>...Hello, I-I�m Atria� um.  <br><br> _Dialog Code:  Chapter_1_0077800 ",
    "character_object_atria <br><br>..  <br><br> _Dialog Code:  Chapter_1_0078000 ",
    "character_object_atria <br><br>..  <br><br> _Dialog Code:  Chapter_1_0078200 ",
    "character_object_player <br><br>Hey, it\'s alright. Just say whatever comes naturally, it doesn�t have to be thought out like some perfect script  <br><br> _Dialog Code:  Chapter_1_0078500 ",
    "character_object_narration <br><br>Her eyes shift towards your direction, and she takes a deep breath before continuing  <br><br> _Dialog Code:  Chapter_1_0078800 ",
    "character_object_atria <br><br>Atria2_Nervou  <br><br> _Dialog Code:  Chapter_1_0079000 ",
    "character_object_narration <br><br>Slowly, her body relaxes a little, as she lets go of her worries for a fleeting moment. It takes a little longer for her to grow comfortable with purposely being so outspoken like this  <br><br> _Dialog Code:  Chapter_1_0079300 ",
    "character_object_atria <br><br>Atria sprite is remove  <br><br> _Dialog Code:  Chapter_1_0079500 ",
    "Black screen <br><br>Black scree  <br><br> _Dialog Code:  Chapter_1_0079700 ",
    "character_object_narration <br><br>She continues speaking, slowly but surely becoming more confident as she speaks her mind, whatever small bits of information or passion that come to her  <br><br> _Dialog Code:  Chapter_1_0079900 ",
    "character_object_narration <br><br>Some time passes, and not long later, she begins speaking like she had been waiting for this opportunity for years  <br><br> _Dialog Code:  Chapter_1_0080100 ",
    "character_object_atria <br><br>Atrias club room C  <br><br> _Dialog Code:  Chapter_1_0080300 ",
    "character_object_narration <br><br>Her face lights up with the most genuine smile you have seen from her since the two of you met. You and Kyo give each other accomplished glances, allowing her to ramble without being ridiculed for what seems like the first time in her life  <br><br> _Dialog Code:  Chapter_1_0080500 ",
    "character_object_narration <br><br>She seems like an entirely different person, babbling about whatever comes to her mind, in a world of her own  <br><br> _Dialog Code:  Chapter_1_0080700 ",
    "character_object_narration <br><br>Even a few giddy sounding giggles manage to leave Atria. It was clear as day that she found enjoyment in this  <br><br> _Dialog Code:  Chapter_1_0080900 ",
    "character_object_narration <br><br>Though after a fleeting moment, she stops, making eye contact as if just remembering there are people listening to her. Her eyes widen slightly, but a small smile remains on her expression  <br><br> _Dialog Code:  Chapter_1_0081100 ",
    "character_object_atria <br><br>...Are you sure this is okay?.. Not suppressing the urge to talk� it feels so different  <br><br> _Dialog Code:  Chapter_1_0081400 ",
    "character_object_kyo <br><br>..  <br><br> _Dialog Code:  Chapter_1_0081700 ",
    "character_object_kyo <br><br>...Damn she�s traumatized  <br><br> _Dialog Code:  Chapter_1_0081900 ",
    "character_object_narration <br><br>You try to nudge Kyo, as this was most definitely *not* the time, but he ducks away  <br><br> _Dialog Code:  Chapter_1_0082200 ",
    "character_object_player <br><br>Of course it�s alright. So, what do you say? Why don�t you try making some friends by helping start up a club  <br><br> _Dialog Code:  Chapter_1_0082500 ",
    "character_object_atria <br><br>...I  <br><br> _Dialog Code:  Chapter_1_0082800 ",
    "character_object_narration <br><br>Atria ponders this suggestion, taking a while to push away any troubles with her �friends�  <br><br> _Dialog Code:  Chapter_1_0083100 ",
    "character_object_narration <br><br>She shakes her head, clearing her mind before nodding with a newfound assurance  <br><br> _Dialog Code:  Chapter_1_0083300 ",
    "character_object_atria <br><br>I think I�d like that  <br><br> _Dialog Code:  Chapter_1_0083600 ",
    // end-of-CHAPTER-1-mark
    'jump CHAPTER_2',
  ],

  'CHAPTER_2': [
    'chap 2',
    // start-of-CHAPTER-2-mark
    "_Name <br><br>_Tex  <br><br> _Dialog Code:  _DialogCode ",
    " <br><br>Chapter 2: Befriending the Shrewd Dreame  <br><br> _Dialog Code:  Chapter_2_0000100 ",
    "Background School Hallway <br><br>Background: School Hallwa  <br><br> _Dialog Code:  Chapter_2_0000300 ",
    "Skye's BGM <br><br>Skye\'s BG  <br><br> _Dialog Code:  Chapter_2_0000400 ",
    "character_object_player <br><br>Yawn  <br><br> _Dialog Code:  Chapter_2_0000700 ",
    "character_object_narration <br><br>You and Kyo sleepily make your way down through the quiet school corridor to the radio club room. Neither of you were fit to stand, let alone walk, but  <br><br> _Dialog Code:  Chapter_2_0001000 ",
    "character_object_player <br><br>Why are we here this early again? School hasn\'t even started yet  <br><br> _Dialog Code:  Chapter_2_0001300 ",
    "character_object_kyo <br><br>I\'m not happy about this either, but someone needs to prep the club equipment. S\'not like we got a tonna members to figure this shit out yet  <br><br> _Dialog Code:  Chapter_2_0001600 ",
    "character_object_player <br><br>We\'d have more members if you actually helped with recruitment y\'know  <br><br> _Dialog Code:  Chapter_2_0001900 ",
    "character_object_kyo <br><br>Hey, that\'s what you\'re for. I have very important club president things to deal with  <br><br> _Dialog Code:  Chapter_2_0002200 ",
    "character_object_narration <br><br>You grumble, but the both of you continue to make your way down the hall. Even if you lumbered the whole way like a zombie who had already lost its head, only the empty corridors and a snickering Kyo would witness such a scene  <br><br> _Dialog Code:  Chapter_2_0002500 ",
    "character_object_kyo <br><br>Kyo sprite moves to left  <br><br> _Dialog Code:  Chapter_2_0002700 ",
    "Skye_Smile at right, darkened <br><br>Skye_Smile at right, darkene  <br><br> _Dialog Code:  Chapter_2_0002800 ",
    "??? <br><br>�so with some struggle, you are able to ingest the Baia Bamare figure that is now inside your stomach  <br><br> _Dialog Code:  Chapter_2_0003100 ",
    "character_object_kyo <br><br>Kyo_FP_Shocke  <br><br> _Dialog Code:  Chapter_2_0003300 ",
    "character_object_narration <br><br>A muffled but excited voice catches your attention, stopping you in your tracks. The odd words are inescapable even to your drowsy heads  <br><br> _Dialog Code:  Chapter_2_0003600 ",
    "??? <br><br>�Arkillia goes ahead and grabs the letter opener and puts it in their pocket  <br><br> _Dialog Code:  Chapter_2_0003900 ",
    "character_object_player <br><br>  <br><br> _Dialog Code:  Chapter_2_0004200 ",
    "character_object_narration <br><br>The voice continues to excitedly narrate, small mutters and giggles leaking from a small janitor\'s closet stuffed away in the corner of the school corridor.  <br><br> _Dialog Code:  Chapter_2_0004500 ",
    "character_object_narration <br><br>Both you and Kyo look at each other baffled  <br><br> _Dialog Code:  Chapter_2_0004700 ",
    "character_object_kyo <br><br>Kyo sprite disappear  <br><br> _Dialog Code:  Chapter_2_0004900 ",
    "??? <br><br>�You hear the doorknob turning. As the door swings open, Eliza reenters. Alright! Let\'s wrap things up here! She pops into her chair, reorganising her papers, unaware that you\'ve been searching through them  <br><br> _Dialog Code:  Chapter_2_0005200 ",
    "character_object_narration <br><br>You approach the door, giving it a tentative knock that abruptly silences the voice  <br><br> _Dialog Code:  Chapter_2_0005500 ",
    "character_object_player <br><br>  <br><br> _Dialog Code:  Chapter_2_0005800 ",
    "character_object_narration <br><br>You bring your hand forward to knock again when the door slowly creaks open  <br><br> _Dialog Code:  Chapter_2_0006100 ",
    "Girl in the Closet <br><br>C-Can I help you  <br><br> _Dialog Code:  Chapter_2_0006400 ",
    "Skye Default Sprite, normal brightness <br><br>Skye Default Sprite, normal brightnes  <br><br> _Dialog Code:  Chapter_2_0006600 ",
    "character_object_narration <br><br>The girl that meets you as the door opens has a cold look firmly set on her face, flinty eyes glaring at you imperiously. Had she not stuttered, her attempt at intimidation might�ve actually worked� well, probably  <br><br> _Dialog Code:  Chapter_2_0006900 ",
    "character_object_narration <br><br>A slight flush climbs her face at her stumble, but she stubbornly continues to try and fake disinterest. She�s failing miserably, but you could say she was attempting it with an almost admirable persistence  <br><br> _Dialog Code:  Chapter_2_0007100 ",
    "character_object_player <br><br>Uhhh� I heard you talking, and� was wondering what you were doing in the closet�  <br><br> _Dialog Code:  Chapter_2_0007400 ",
    "character_object_narration <br><br>The flush on the girl�s face only grew, her flusteredness leaking into her words, making her ramble slightly  <br><br> _Dialog Code:  Chapter_2_0007700 ",
    "Girl in the Closet <br><br>Well if you must know, I was conducting a very important meeting with my friends. The closet just happens to be a very convenient place for us to do so without any disturbance or without inadvertently disturbing anyone else  <br><br> _Dialog Code:  Chapter_2_0008000 ",
    "character_object_narration <br><br>She pushes the closet door open further, stepping out into the hallway. She dusts her skirt off primly, not at all subtly looking away in embarrassment. The closet, left open as it was, shows no one else inside.  <br><br> _Dialog Code:  Chapter_2_0008300 ",
    "character_object_narration <br><br>You look back at Kyo in confusion, receiving an equally confused look from the blue haired boy.  <br><br> _Dialog Code:  Chapter_2_0008500 ",
    "character_object_narration <br><br>You turn back to the girl who in turn looks at you strangely, darting her eyes towards Kyo questioningly  <br><br> _Dialog Code:  Chapter_2_0008700 ",
    "character_object_narration <br><br>You shrug off the girl�s still strange choice of meeting location and lack of other people to have a meeting with. Not that you could really judge people on their social choices. After all, most would probably call you crazy for befriending Kyo  <br><br> _Dialog Code:  Chapter_2_0008900 ",
    "character_object_player <br><br>I heard you narrating? I think? You speak really well  <br><br> _Dialog Code:  Chapter_2_0009200 ",
    "character_object_narration <br><br>A surprised expression flickers through her face before her attempt at a cool expression slides back into place. Her expressiveness, still not hiding her feelings, allows a small bit of smug pride to shine through  <br><br> _Dialog Code:  Chapter_2_0009500 ",
    "Girl no longer in Closet <br><br>Of course! I love playing as my party\'s Game Master, and I work hard to make every game enjoyable  <br><br> _Dialog Code:  Chapter_2_0009800 ",
    "character_object_narration <br><br>A shy expression flickers on her face before she extends her hand towards you in a handshake  <br><br> _Dialog Code:  Chapter_2_0010100 ",
    "Girl no Longer in Closet <br><br>My name\'s Skye, Skye Oriana, what�s your name  <br><br> _Dialog Code:  Chapter_2_0010400 ",
    "character_object_player <br><br>I\'m Player. Nice to meet you.  <br><br> _Dialog Code:  Chapter_2_0010700 ",
    "character_object_narration <br><br>You take her hand with a smile, receiving a small smile back  <br><br> _Dialog Code:  Chapter_2_0011000 ",
    "character_object_narration <br><br>Kyo coughs behind you, reminding you that you were in school this early for a reason. At this rate, class would start before you could finish your duties for the radio club  <br><br> _Dialog Code:  Chapter_2_0011200 ",

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
    "character_object_player <br><br>Hey, we\'re currently recruiting members for the radio club, do you� wanna join  <br><br> _Dialog Code:  Chapter_2_0015000 ",
    "Skye_Smile <br><br>Skye_Smil  <br><br> _Dialog Code:  Chapter_2_0015200 ",
    "character_object_narration <br><br>Skye\'s eyebrows shoot up in surprise, a small smile subconsciously spreading across her face. She looks at you in confused delight as you continue your invitation  <br><br> _Dialog Code:  Chapter_2_0015400 ",
    "character_object_player <br><br>We don\'t have a lot of members but we\'re pretty sure we can get more people to sign up. I think you\'d be a perfect fit for a broadcaster. You think you\'d be up for it  <br><br> _Dialog Code:  Chapter_2_0015700 ",
    "character_object_narration <br><br>A lost look of wonder briefly crosses her eyes before quickly dimming. She looks to the side, her eyes contemplative. Skye hums consideringly before answering mildly  <br><br> _Dialog Code:  Chapter_2_0016000 ",
    "character_object_skye <br><br>Well, I\'ll have to talk to my friends first, not sure I\'ll have the time considering all the things that I\'ve been needing to do lately  <br><br> _Dialog Code:  Chapter_2_0016300 ",
    "character_object_narration <br><br>Skye makes a big gesture of turning to the side, suddenly starting to talk loudly and gesturing broadly as if conversing with a group of people  <br><br> _Dialog Code:  Chapter_2_0016600 ",
    "character_object_skye <br><br>Well, what do you guys think  <br><br> _Dialog Code:  Chapter_2_0016900 ",
    "character_object_kyo <br><br>Kyo_FP_Shocked sprite appear  <br><br> _Dialog Code:  Chapter_2_0017100 ",
    "character_object_narration <br><br>You and Kyo look at her bewilderedly as silence meets Skye\'s question, but Skye only continues talking to the air, nodding and humming, responding as if someone was talking back to her  <br><br> _Dialog Code:  Chapter_2_0017400 ",
    "character_object_skye <br><br>�you\'re right, I\'m not in any other clubs right now but what about our campaigns? We usually conduct them right after school, we  <br><br> _Dialog Code:  Chapter_2_0017700 ",
    "character_object_player <br><br>  <br><br> _Dialog Code:  Chapter_2_0018000 ",
    "character_object_narration <br><br>Skye continues talking to nothing. You�re starting to get concerned that staying in the chemical and dust filled janitor�s closet is having a more detrimental effect on her than one would expect  <br><br> _Dialog Code:  Chapter_2_0018300 ",
    "character_object_player <br><br>Uhhh� Skye  <br><br> _Dialog Code:  Chapter_2_0018600 ",
    "character_object_narration <br><br>Skye only hums at you, looking like she was only half listening to you as she continues to nod at the thin air near her  <br><br> _Dialog Code:  Chapter_2_0018900 ",
    "character_object_player <br><br>Who�re you talkin� to  <br><br> _Dialog Code:  Chapter_2_0019200 ",
    "character_object_narration <br><br>Skye answers your question distractedly, still seeming completely engrossed at whatever it is she�s listening to  <br><br> _Dialog Code:  Chapter_2_0019500 ",
    "character_object_skye <br><br>I\'m talking to my friends, of course  <br><br> _Dialog Code:  Chapter_2_0019800 ",
    "character_object_narration <br><br>Skye gestures at the empty air beside her, only half listening to your question  <br><br> _Dialog Code:  Chapter_2_0020100 ",
    "character_object_player <br><br>  <br><br> _Dialog Code:  Chapter_2_0020400 ",
    "character_object_kyo <br><br>Goddamn, she looks almost as crazy as you  <br><br> _Dialog Code:  Chapter_2_0020700 ",
    "character_object_player <br><br>Shut up  <br><br> _Dialog Code:  Chapter_2_0021000 ",
    "character_object_player <br><br>Narration:  <br><br> _Dialog Code:  Chapter_2_0021200 ",
    "character_object_player <br><br>You hiss at Kyo, throwing a smack to the short boy�s shoulder that he dodges with an indignant yelp. You frantically turn back to Skye, hoping she didn�t hear Kyo�s expected but poorly timed smacktalk  <br><br> _Dialog Code:  Chapter_2_0021300 ",
    "character_object_player <br><br>Skye, unfortunately, did seem to notice your antics and blink  <br><br> _Dialog Code:  Chapter_2_0021500 ",
    "character_object_player <br><br>at you once more, bewildered  <br><br> _Dialog Code:  Chapter_2_0021600 ",
    "character_object_player <br><br>He\'s like this with everyone, don\'t worry about what he says. In fact, a general rule is that you probably should ignore most of what he says  <br><br> _Dialog Code:  Chapter_2_0021900 ",
    "character_object_kyo <br><br>Kyo Sprite becomes not the focus of scene, Skye Sprite centre  <br><br> _Dialog Code:  Chapter_2_0022100 ",
    "Skye_Smile2 <br><br>Skye_Smile  <br><br> _Dialog Code:  Chapter_2_0022200 ",
    "character_object_player <br><br>Kyo�s exclamation of annoyance is drowned out by Skye�s reaction. She doesn\'t react negatively to Kyo�s ribbing. Instead, a bright smile suddenly breaks out on her face  <br><br> _Dialog Code:  Chapter_2_0022400 ",
    "character_object_skye <br><br>It\'s nice to know someone like me! A person who knows th  <br><br> _Dialog Code:  Chapter_2_0022700 ",
    "character_object_skye <br><br>pros to our more unusual friends  <br><br> _Dialog Code:  Chapter_2_0022800 ",
    "character_object_player <br><br>Huh  <br><br> _Dialog Code:  Chapter_2_0023100 ",
    "character_object_kyo <br><br>The fuck, did she just call me unusual  <br><br> _Dialog Code:  Chapter_2_0023400 ",
    "character_object_narration <br><br>Skye\'s expression only brightens further, her thick glasses not nearly covering her delight  <br><br> _Dialog Code:  Chapter_2_0023700 ",
    "character_object_skye <br><br>You\'re pretty nice  <br><br> _Dialog Code:  Chapter_2_0024000 ",
    "character_object_narration <br><br>She looks consideringly to the side again, her smile turning contemplative  <br><br> _Dialog Code:  Chapter_2_0024300 ",
    "character_object_skye <br><br>I actually might consider visiting your club after all. After classes, of course. I\'m pretty sure I can help you with things even without joining the club  <br><br> _Dialog Code:  Chapter_2_0024600 ",
    "character_object_narration <br><br>She suddenly rushes to grab your hand, making you stumble back in surprise. She quickly gives the limb a firm, decisive shake, before backing away just as quickly  <br><br> _Dialog Code:  Chapter_2_0024900 ",
    "character_object_skye <br><br>I\'m looking at a very busy day ahead, so I\'ll be taking my leave now. It was nice to meet you, Player  <br><br> _Dialog Code:  Chapter_2_0025200 ",
    "character_object_narration <br><br>Skye cheerfully skips off down the school hallways, quickly disappearing through the corridors  <br><br> _Dialog Code:  Chapter_2_0025500 ",
    "Skye Sprite disappears <br><br>Skye Sprite disappear  <br><br> _Dialog Code:  Chapter_2_0025700 ",
    "character_object_narration <br><br>You and Kyo stand there in dazed shock, both at the odd ending to the conversation and at her quick exit  <br><br> _Dialog Code:  Chapter_2_0025900 ",
    "character_object_player <br><br>Well� she was interesting  <br><br> _Dialog Code:  Chapter_2_0026200 ",
    "character_object_kyo <br><br>I mean, she�s a little weird, but so was the other one, and you  <br><br> _Dialog Code:  Chapter_2_0026500 ",
    "character_object_narration <br><br>Kyo�s words prompts an eye roll from you, breaking you from the reverie that Skye�s abrupt getaway left you. The two of you finally start to make your way to the clubroom again, the strange encounter still fresh on your minds  <br><br> _Dialog Code:  Chapter_2_0026800 ",
    "character_object_player <br><br>I think she�ll be a good addition to the team, and she�s nice, she and Atria will probably get along great  <br><br> _Dialog Code:  Chapter_2_0027100 ",
    "character_object_kyo <br><br>Sure, if you can get her to join. Still haven�t gotten to that part, remember  <br><br> _Dialog Code:  Chapter_2_0027400 ",
    "character_object_narration <br><br>You wince at Kyo�s reminder, but as you remember her look of wonder when you first asked her the question, you don�t think it�ll be very difficult to convince her  <br><br> _Dialog Code:  Chapter_2_0027700 ",
    "character_object_narration <br><br>She was happy to be invited, she may have some reservations but you have a feeling that everything�ll  turn out just fine. You shrug off Kyo�s pessimism, shooting the shorter boy an eyeroll as the two of you enter the clubroom to deal with your duties for the day  <br><br> _Dialog Code:  Chapter_2_0027900 ",
    "Scene Change <br><br>Scene Chang  <br><br> _Dialog Code:  Chapter_2_0028100 ",
    "Lunch Time <br><br>Lunch Tim  <br><br> _Dialog Code:  Chapter_2_0028400 ",
    "School Hallway <br><br>School Hallwa  <br><br> _Dialog Code:  Chapter_2_0028600 ",
    "character_object_narration <br><br>** RING ** Bell SF  <br><br> _Dialog Code:  Chapter_2_0028900 ",
    "character_object_narration <br><br>You eagerly leave your class for your break � your early start to the day didn�t leave you much time for breakfast, and the little you did eat didn�t sustain you �til lunch. You�ve been starving all day and your stomach has been trying to make itself known  <br><br> _Dialog Code:  Chapter_2_0029100 ",
    "character_object_narration <br><br>Encouraged by its angry rumblings, you make your way to the school store. Hopefully you weren�t too late to grab something. No one should have to handle the angry yowling that you know your stomach would continue to make if the beast wasn�t fed  <br><br> _Dialog Code:  Chapter_2_0029300 ",
    "character_object_narration <br><br>You hum thoughtfully as you think about what you�re going to buy when the sounds of particularly loud discussion catches your attention  <br><br> _Dialog Code:  Chapter_2_0029500 ",
    "character_object_student_a <br><br>�just admit it, you were the one who sprayed that ugly thing on the back of the classroom, didn�t you. Everyone knows it was you  <br><br> _Dialog Code:  Chapter_2_0029800 ",
    "Skye_Default Centered <br><br>Skye_Default Centere  <br><br> _Dialog Code:  Chapter_2_0030000 ",
    "character_object_narration <br><br>You notice a group of four gathered in a quiet corner. You aren�t sure what�s going on, but you recognize Skye standing with her back against the wall  <br><br> _Dialog Code:  Chapter_2_0030300 ",
    "character_object_narration <br><br>Three others were surrounding her, blocking her from any sort of way out. The interaction doesn�t seem like it\'s going well. You quietly duck behind a nearby wall, wondering what�s going on  <br><br> _Dialog Code:  Chapter_2_0030500 ",
    "character_object_narration <br><br>Skye sighs heavily, annoyance clear in her tone and expression  <br><br> _Dialog Code:  Chapter_2_0030700 ",
    "character_object_skye <br><br>Why would I graffiti the classroom? You�re accusing me out of nowhere. Again  <br><br> _Dialog Code:  Chapter_2_0031000 ",
    "character_object_narration <br><br>Skye\'s exasperated answer seems to only spur them on, with another member stepping up to batter at her unwavering stance  <br><br> _Dialog Code:  Chapter_2_0031300 ",
    "character_object_student_b <br><br>Who else would�ve done it? You�ve always been attention seeking. Just the other day you were talking to thin air again! God, you�re annoying on a good day but now you�re actually destroying public property? Can you get any worse  <br><br> _Dialog Code:  Chapter_2_0031600 ",
    "character_object_narration <br><br>Skye scoffs at their accusations, squinting at her classmates incredulously  <br><br> _Dialog Code:  Chapter_2_0031900 ",
    "character_object_skye <br><br>No one knows who did it. The classroom doors are locked every night and they�re only opened in the mornings, minutes before class starts. I wasn�t even the first person to arrive today. Your accusations have no merit and exactly zero people have come to tell me their thoughts of otherwise besides you three. This is the third time you�ve accused me of shit I didn�t do and it�s honestly getting out of hand. You  <br><br> _Dialog Code:  Chapter_2_0032200 ",
    "character_object_student_c <br><br>Oh my god, can you just stop talking? No one wants to hear you yap all day! It\'s enough that you run your mouth in class all the time  <br><br> _Dialog Code:  Chapter_2_0032500 ",
    "character_object_narration <br><br>Rolling her eyes, Skye seems done with the whole interaction. She waves the person off, already moving to leave  <br><br> _Dialog Code:  Chapter_2_0032800 ",
    "character_object_skye <br><br>I\'m sorry that you\'re incapable of understanding anything higher than the most basic levels of communication, let me clear it up for you. I don\'t have time for your bs, get the fuck out of my way  <br><br> _Dialog Code:  Chapter_2_0033100 ",
    "character_object_narration <br><br>Skye attempts to sidestep her way out of the people surrounding her, but the increasingly angered trio move to block her way  <br><br> _Dialog Code:  Chapter_2_0033400 ",
    "character_object_student_d <br><br>You sure do know how to talk, you think people like you interrupting the class every time to spout whatever bullshit opinion you have? Everyone\'s tired of you  <br><br> _Dialog Code:  Chapter_2_0033700 ",
    "character_object_student_b <br><br>Yeah, I mean come on, even Sensei had to take you to the side the other day. You might be a teacher�s pet but even they know you�re a lunatic  <br><br> _Dialog Code:  Chapter_2_0034000 ",
    "Skye_Sad <br><br>Skye_Sa  <br><br> _Dialog Code:  Chapter_2_0034200 ",
    "character_object_narration <br><br>Skye�s bored expression finally cracks, vulnerability seeping through. She looks away, shifting uncomfortably before glaring back at the person speaking  <br><br> _Dialog Code:  Chapter_2_0034500 ",
    "character_object_skye <br><br>Sensei appreciates my contributions to the class, and they said so themself. They just wish that I give a chance to the rest of the class to express their opinions as well and I concurred. You three should stop talking about things that you don\'t understand  <br><br> _Dialog Code:  Chapter_2_0034800 ",
    "character_object_narration <br><br>The atmosphere was slowly getting more tense. It might get bad for Skye if you don\'t intervene  <br><br> _Dialog Code:  Chapter_2_0035100 ",

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
    "character_object_player <br><br>Hey, that\'s enough  <br><br> _Dialog Code:  Chapter_2_0038000 ",
    "character_object_narration <br><br>You quickly make your way to the group. With them having parted in surprise at your exclamation, it\'s easy for you to take Skye by the hand, pulling her out of the circle that they surrounded her with  <br><br> _Dialog Code:  Chapter_2_0038300 ",
    "character_object_player <br><br>I don\'t know who you three are, but ganging up on someone is seriously low. From the little I\'ve heard, you don\'t even have a leg to stand on. Accusing somebody for something you have no proof of is ridiculous and mocking someone for participating in class is pathetic  <br><br> _Dialog Code:  Chapter_2_0038600 ",
    "character_object_student_c <br><br>Who  <br><br> _Dialog Code:  Chapter_2_0038900 ",
    "character_object_narration <br><br>You interrupt whatever response they were about to make, not really willing to hear what these assholes have to say  <br><br> _Dialog Code:  Chapter_2_0039200 ",
    "character_object_player <br><br>You three should really take up some self awareness, seems like it\'s in short fucking supply around here  <br><br> _Dialog Code:  Chapter_2_0039500 ",
    "character_object_narration <br><br>You quickly remove yourself from the situation while tugging a quiet Skye along behind you, moving to try and find a quiet place to give her some privacy  <br><br> _Dialog Code:  Chapter_2_0039800 ",
    "character_object_narration <br><br>Skye stays quiet during the entire interaction. As you arrive at a quieter corner, you face her again, concerned. You don\'t know her very well, but from the little interaction you\'ve had with her, her silence seems uncharacteristic  <br><br> _Dialog Code:  Chapter_2_0040000 ",
    "character_object_player <br><br>Skye, are you okay? I\'m sorry for eavesdropping but you looked like you needed help  <br><br> _Dialog Code:  Chapter_2_0040300 ",
    "character_object_narration <br><br>Skye looks away, her shoulders hunched, defences built all the way up. She looks clearly uncomfortable and not willing to talk about what had just happened  <br><br> _Dialog Code:  Chapter_2_0040600 ",
    "character_object_skye <br><br>I\'m fine� Thanks for getting me out of there, those three were getting way too cocky  <br><br> _Dialog Code:  Chapter_2_0040900 ",
    "character_object_player <br><br>Would you like to report them to a teacher? I heard you mention that this wasn\'t the first time this has happened  <br><br> _Dialog Code:  Chapter_2_0041200 ",
    "character_object_narration <br><br>Skye shakes her head, dismissing the notion immediately  <br><br> _Dialog Code:  Chapter_2_0041500 ",
    "character_object_skye <br><br>No no, it\'s fine, they\'re not� they don\'t even bother me usually  <br><br> _Dialog Code:  Chapter_2_0041800 ",
    "character_object_narration <br><br>A heavy silence settles between the two of you. You\'re not really sure what to say; you don\'t think you really know Skye well enough to comfort her  <br><br> _Dialog Code:  Chapter_2_0042100 ",
    "character_object_narration <br><br>Skye suddenly starts talking again, finally looking at you directly  <br><br> _Dialog Code:  Chapter_2_0042300 ",
    "character_object_skye <br><br>People like the discussions that I bring up in class. They say that my insight helps them learn more about the subject we\'re learning about while simultaneously allowing them to not have to be called on unexpectedly when they\'re not willing to. I  <br><br> _Dialog Code:  Chapter_2_0042600 ",
    "character_object_narration <br><br>Skye cuts herself off before she finishes her sudden explanation, frustration leaking into her voice. A shuddering breath leaves her before she closes her mouth, pursing her lips  <br><br> _Dialog Code:  Chapter_2_0042900 ",
    "character_object_skye <br><br>I� never mind, sorry for interrupting your break, I should really be getting back to class.  <br><br> _Dialog Code:  Chapter_2_0043200 ",
    "character_object_player <br><br>Skye  <br><br> _Dialog Code:  Chapter_2_0043500 ",
    "Skye Sprite disappears <br><br>Skye Sprite disappear  <br><br> _Dialog Code:  Chapter_2_0043700 ",
    "character_object_narration <br><br>Your attempt at talking to her fails as Skye ignores you, making another quick exit before you could really react. This time, you didn\'t feel as optimistic about your interactions as the first time you met her  <br><br> _Dialog Code:  Chapter_2_0044000 ",
    "character_object_narration <br><br>** RING *  <br><br> _Dialog Code:  Chapter_2_0044200 ",
    "character_object_narration <br><br>The bell rings, signifying the end of your break time. It\'s a good thing your stomach had long since curdled at the thought of food after the bitter situation you just experienced.  <br><br> _Dialog Code:  Chapter_2_0044400 ",
    "character_object_narration <br><br>Your face scrunches in worry, but you hurry yourself to your classroom. There isn\'t much you can do. Maybe Skye needs some time to herself  <br><br> _Dialog Code:  Chapter_2_0044600 ",
    "Scene Change <br><br>Scene Chang  <br><br> _Dialog Code:  Chapter_2_0044800 ",
    "After School <br><br>After Schoo  <br><br> _Dialog Code:  Chapter_2_0045100 ",
    "School Hallway Day <br><br>School Hallway Da  <br><br> _Dialog Code:  Chapter_2_0045300 ",
    "character_object_narration <br><br>*RING* School bell SF  <br><br> _Dialog Code:  Chapter_2_0045500 ",
    "character_object_narration <br><br>The school bell finally signals the end of the school day.  <br><br> _Dialog Code:  Chapter_2_0045700 ",
    "character_object_narration <br><br>You rush out as soon as you can, the afternoon incident still hanging heavily in your mind, completely distracting you for the latter part of your school day  <br><br> _Dialog Code:  Chapter_2_0045900 ",
    "character_object_narration <br><br>You make your way to the clubroom hoping that Skye would keep her word of visiting, at least just so that you could talk to her. You didn�t like that she had left upset at lunch  <br><br> _Dialog Code:  Chapter_2_0046100 ",
    "Background Change Radio Clubroom Basic + Printer + Mic <br><br>Background Change: Radio Clubroom Basic + Printer + Mi  <br><br> _Dialog Code:  Chapter_2_0046300 ",
    "character_object_kyo <br><br>Kyo_FP_Defaul  <br><br> _Dialog Code:  Chapter_2_0046500 ",
    "character_object_narration <br><br>You enter the clubroom to see that Kyo has already made himself comfortable. Game console in hand, his feet casually settled on the clubroom�s table, and his chair perched precariously on its back legs  <br><br> _Dialog Code:  Chapter_2_0046700 ",
    "character_object_player <br><br>Do you ever leave this room? Why are you here already, classes just ended  <br><br> _Dialog Code:  Chapter_2_0047000 ",
    "character_object_kyo <br><br>\'Ey, don\'t blame me for you being slow, running through the halls ain\'t nothin\'  <br><br> _Dialog Code:  Chapter_2_0047300 ",
    "character_object_narration <br><br>You roll your eyes at the shorter boy, settling your bag on the table and slumping yourself on one of the chairs, heaving out a deep sigh  <br><br> _Dialog Code:  Chapter_2_0047600 ",
    "character_object_narration <br><br>Kyo looks up at your dramatics, raising an eyebrow at the long face you were pulling  <br><br> _Dialog Code:  Chapter_2_0047800 ",
    "character_object_kyo <br><br>�Sup  <br><br> _Dialog Code:  Chapter_2_0048100 ",
    "character_object_narration <br><br>You scratch your head, not looking up at him, not sure how you should answer the question  <br><br> _Dialog Code:  Chapter_2_0048400 ",
    "character_object_player <br><br>I met up with Skye during lunch break. Some people were bothering her, and she really wasn\'t having a good time  <br><br> _Dialog Code:  Chapter_2_0048700 ",
    "character_object_narration <br><br>Kyo�s eyebrows rise further at the mention of your new acquaintance, not expecting you to meet her so soon after your meeting this morning  <br><br> _Dialog Code:  Chapter_2_0049000 ",
    "character_object_kyo <br><br>Yeah  <br><br> _Dialog Code:  Chapter_2_0049300 ",
    "character_object_player <br><br>Yeah, they were talking about someone graffitiing their classroom? Something crazy like that, been hearing rumours about stuff like that happening all over school lately  <br><br> _Dialog Code:  Chapter_2_0049600 ",
    "character_object_kyo <br><br>Kyo_FP_Shocke  <br><br> _Dialog Code:  Chapter_2_0049800 ",
    "character_object_narration <br><br>Out of the corner of your eye, you notice Kyo freezing in his seat. He plops the precariously tilting furniture back down to a more proper position. You finally look up, raising your brow at his sudden tension  <br><br> _Dialog Code:  Chapter_2_0050100 ",
    "character_object_player <br><br>People�ve been spreading rumours about ghosts around lately too, graffiti appearing and disappearing out of nowhere, weird noises, weird light, stuff like that  <br><br> _Dialog Code:  Chapter_2_0050400 ",
    "character_object_narration <br><br>Kyo continues to tense as you proceed describing the supernatural rumours going around your school. A smirk grows on your face as you stand up from your seat  <br><br> _Dialog Code:  Chapter_2_0050700 ",
    "character_object_player <br><br>You scared of ghosts, Kyo  <br><br> _Dialog Code:  Chapter_2_0051000 ",
    "character_object_narration <br><br>You come up to the blue haired boy, swinging an arm up to his shoulders � a move he deftly avoids. He quickly stands up from his own seat  <br><br> _Dialog Code:  Chapter_2_0051300 ",
    "character_object_kyo <br><br>I\'m gonna slip out for a bit � got a couple of things I need to deal with for class tomorrow  <br><br> _Dialog Code:  Chapter_2_0051600 ",
    "character_object_narration <br><br>Your eyes widen, surprised at his abrupt need to leave and concerned that you had gone too far with your teasing  <br><br> _Dialog Code:  Chapter_2_0051900 ",
    "character_object_player <br><br>Whoa, you don�t have to leave. We don�t have to talk about ghosts if you don�t want to  <br><br> _Dialog Code:  Chapter_2_0052200 ",
    "character_object_kyo <br><br>Kyo_FP_Defaul  <br><br> _Dialog Code:  Chapter_2_0052400 ",
    "character_object_narration <br><br>Kyo rolls his eyes, waving off your silent apology while moving to leave the room  <br><br> _Dialog Code:  Chapter_2_0052700 ",
    "character_object_kyo <br><br>What? No, I just remembered I got shit to do, hold down the fort for me will you  <br><br> _Dialog Code:  Chapter_2_0053000 ",
    "character_object_player <br><br>Aren\'t you gonna help me convince Skye to join the club  <br><br> _Dialog Code:  Chapter_2_0053300 ",
    "character_object_narration <br><br>Kyo raises an eyebrow at you, stopping before opening the clubroom door, face set in a deadpan  <br><br> _Dialog Code:  Chapter_2_0053600 ",
    "character_object_kyo <br><br>You think my caustic ass\'ll help convince her to join  <br><br> _Dialog Code:  Chapter_2_0053900 ",
    "character_object_narration <br><br>You wince slightly, remembering Kyo impulsively ribbing Skye just this morning. She didn�t seem to take offence, but maybe exposing her too much to Kyo\'s sharp tongue too early would be ill-advised  <br><br> _Dialog Code:  Chapter_2_0054200 ",
    "character_object_player <br><br>Don�t you wanna stick around to at least greet her  <br><br> _Dialog Code:  Chapter_2_0054500 ",
    "character_object_kyo <br><br>When�s she coming? Does she even know where the clubroom is  <br><br> _Dialog Code:  Chapter_2_0054800 ",
    "character_object_narration <br><br>Silence envelops the room as his question settles, before you groan in frustration, bringing your hand up to cover your face. Kyo\'s laughter rings throughout the room, the annoying gremlin finding pleasure in your misery  <br><br> _Dialog Code:  Chapter_2_0055100 ",
    "character_object_player <br><br>I forgot to tell her that we�re using the music room this morning  <br><br> _Dialog Code:  Chapter_2_0055400 ",
    "character_object_kyo <br><br>You better go find her then, I�m dealing with my shit first  <br><br> _Dialog Code:  Chapter_2_0055700 ",
    "character_object_narration <br><br>Kyo shrugs, casually slipping out of the room and leaving you alone with your thoughts  <br><br> _Dialog Code:  Chapter_2_0056000 ",
    "character_object_kyo <br><br>Kyo Sprite Disappear  <br><br> _Dialog Code:  Chapter_2_0056200 ",
    "character_object_player <br><br>  <br><br> _Dialog Code:  Chapter_2_0056500 ",
    "character_object_narration <br><br>You sigh in exasperation, finally standing up to go and find Skye, wherever it is she could be.  <br><br> _Dialog Code:  Chapter_2_0056800 ",
    "character_object_narration <br><br>You make your way to the door, opening it before noticing something in the corner of your eye  <br><br> _Dialog Code:  Chapter_2_0057000 ",
    "character_object_narration <br><br>You snap your head in surprise, chasing the glimpse of bright neon shapes before it disappears behind the blink of your eyelids  <br><br> _Dialog Code:  Chapter_2_0057200 ",
    "character_object_narration <br><br>You stare at where you thought you saw� whatever it was you thought you saw, furrowing your brows at the wall. You could�ve sworn  <br><br> _Dialog Code:  Chapter_2_0057400 ",
    "??? <br><br>Player  <br><br> _Dialog Code:  Chapter_2_0057700 ",
    "character_object_narration <br><br>A voice calls out to you from the hallway right outside the door you just opened, snapping you out of your thoughts  <br><br> _Dialog Code:  Chapter_2_0058000 ",
    "Skye_Default <br><br>Skye_Defaul  <br><br> _Dialog Code:  Chapter_2_0058200 ",
    "character_object_player <br><br>Skye! You�re here  <br><br> _Dialog Code:  Chapter_2_0058500 ",
    "character_object_narration <br><br>You blurt out her name in surprise, instinctively opening the clubroom door further and stepping back to allow the dark haired girl to step inside. She looks around the room, raising her brow curiously  <br><br> _Dialog Code:  Chapter_2_0058800 ",
    "character_object_skye <br><br>Of course, I did promise I would come  <br><br> _Dialog Code:  Chapter_2_0059100 ",
    "character_object_player <br><br>How�d you find the clubroom? I forgot to tell you where it was this morning  <br><br> _Dialog Code:  Chapter_2_0059400 ",
    "character_object_narration <br><br>Skye waves off your question, turning to look at you curiously  <br><br> _Dialog Code:  Chapter_2_0059700 ",
    "character_object_skye <br><br>The clubrooms are almost always on the first floor. I was just walking around to look when I saw you at the door� Were you looking at something  <br><br> _Dialog Code:  Chapter_2_0060000 ",
    "character_object_player <br><br>Huh  <br><br> _Dialog Code:  Chapter_2_0060300 ",
    "character_object_skye <br><br>You looked a little out of it. I saw you for quite a little bit before calling you  <br><br> _Dialog Code:  Chapter_2_0060600 ",
    "character_object_narration <br><br>You look back at the wall, pursing your lips thoughtfully before shaking your head  <br><br> _Dialog Code:  Chapter_2_0060900 ",
    "character_object_player <br><br>Was nothing, probably just tired. I�m glad you came by! I wasn�t sure if you would, uhh, after  <br><br> _Dialog Code:  Chapter_2_0061200 ",
    "character_object_narration <br><br>You trail off a little, cursing yourself for bringing up the grim situation from the afternoon. You thought you were getting better at not putting your foot in your mouth, yet here you are, swallowing your whole fucking shoe  <br><br> _Dialog Code:  Chapter_2_0061500 ",
    "character_object_narration <br><br>A short silence comes after the words awkwardly dry up in your mouth, making you sweat bullets. Skye picks up on the conversation, moving deeper inside the room and casually settling herself on one of the chairs  <br><br> _Dialog Code:  Chapter_2_0061700 ",
    "character_object_skye <br><br>The graffiti�s gone  <br><br> _Dialog Code:  Chapter_2_0062000 ",
    "character_object_player <br><br>What  <br><br> _Dialog Code:  Chapter_2_0062300 ",
    "character_object_narration <br><br>You blink bewilderedly. Skye shrugs, casually leaning her head on her arm settled on the table  <br><br> _Dialog Code:  Chapter_2_0062600 ",
    "character_object_skye <br><br>The class left for gym class a little bit after lunch and by the time we came back, poof, it just�disappeared.  <br><br> _Dialog Code:  Chapter_2_0062900 ",
    "character_object_skye <br><br>The teachers figured it was a temporary prank someone was pulling. They�re still looking for the culprit, but nothing points to it being anyone in class, considering that we were all accounted for at gym  <br><br> _Dialog Code:  Chapter_2_0063100 ",
    "character_object_player <br><br>And� those guys that were bothering you  <br><br> _Dialog Code:  Chapter_2_0063400 ",
    "character_object_skye <br><br>Well they didn�t apologise, but they did look pretty pissed that it was pretty clearly not me  <br><br> _Dialog Code:  Chapter_2_0063700 ",
    "character_object_narration <br><br>Skye shrugs faux casually. It\'s difficult to figure out what she\'s thinking. She seems a little bit more closed off than she was this morning  <br><br> _Dialog Code:  Chapter_2_0064000 ",
    "character_object_skye <br><br>Anyway, you don�t have to worry about those idiots, they�re way more of a nuisance then they are actually troubling. My class is filled with a lot of kind and friendly people, so their voices get drowned out most of the time  <br><br> _Dialog Code:  Chapter_2_0064300 ",
    "character_object_narration <br><br>Skye smiles at you reassuringly, looking up from her previously contemplative pose  <br><br> _Dialog Code:  Chapter_2_0064600 ",
    "character_object_skye <br><br>Now, why don�t we discuss your club? It�s what you invited me here for right  <br><br> _Dialog Code:  Chapter_2_0064900 ",
    "character_object_player <br><br>Yeah� about joining  <br><br> _Dialog Code:  Chapter_2_0065200 ",
    "character_object_skye <br><br>Still not too sure that�d be necessary  <br><br> _Dialog Code:  Chapter_2_0065500 ",
    "character_object_skye <br><br>If all you need is another voice to help in broadcasting, or even if you need some journalist help to find some news, I�ll be happy to help out on a more occasional, freelance basis. As long as I�m given some credit for the work, of course  <br><br> _Dialog Code:  Chapter_2_0065700 ",
    "character_object_narration <br><br>You scratch your head in confusion. If Skye was willing to help the club, why not just join and get the benefit of having an after school sanctioned activity? You open your mouth to ask when the sound of the clubroom door opening catches both of your attention  <br><br> _Dialog Code:  Chapter_2_0066000 ",
    "character_object_atria <br><br>Atria1_Happy appear  <br><br> _Dialog Code:  Chapter_2_0066200 ",
    "character_object_atria <br><br>Good evening  <br><br> _Dialog Code:  Chapter_2_0066500 ",
    "character_object_atria <br><br>Atria1_Timi  <br><br> _Dialog Code:  Chapter_2_0066700 ",
    "character_object_narration <br><br>Atria�s eyes widen as she notices Skye�s presence in the room, her surprised expression quickly turning to a bashful smile. Atria shuffles quietly into the room, clearly apprehensive but still trying her best to be welcoming  <br><br> _Dialog Code:  Chapter_2_0067000 ",
    "character_object_atria <br><br>Oh! H-hello, do we have a new recruit  <br><br> _Dialog Code:  Chapter_2_0067300 ",
    "character_object_player <br><br>Umm, not necessarily  <br><br> _Dialog Code:  Chapter_2_0067600 ",
    "character_object_narration <br><br>Atria looks at you questioningly, moving closer to the table and placing her things on it. She fidgets awkwardly with her things before looking up at Skye, smiling uncertainly towards the taller girl  <br><br> _Dialog Code:  Chapter_2_0067900 ",
    "character_object_atria <br><br>I�m Atria. Umm, i-it�s nice to meet you. I�m a� a new membe  <br><br> _Dialog Code:  Chapter_2_0068200 ",
    "character_object_atria <br><br>of the club too  <br><br> _Dialog Code:  Chapter_2_0068300 ",
    "character_object_skye <br><br>S-Skye. I� well, I haven�t really� I�m not too sure about joinin  <br><br> _Dialog Code:  Chapter_2_0068600 ",
    "character_object_skye <br><br>really  <br><br> _Dialog Code:  Chapter_2_0068700 ",
    "character_object_narration <br><br>Atria�s stumbling responses were sort of expected, but Skye�s stuttering prompts a raised eyebrow from you, confused at her sudden inarticulateness. Noticing your expression, she huffs indignantly, hissing her next words quietly at you  <br><br> _Dialog Code:  Chapter_2_0069000 ",
    "character_object_skye <br><br>Seeing new faces makes me anxious sometimes! You and your friend definitely caught me off guard this morning  <br><br> _Dialog Code:  Chapter_2_0069300 ",
    "character_object_player <br><br>Oh yeah, you met Kyo this morning. Sorry he couldn�t be here, he stepped out just now  <br><br> _Dialog Code:  Chapter_2_0069600 ",
    "character_object_skye <br><br>Oh. That�s fine, I didn�t bring any of my friends here either. Communication isn�t easy when other parties can�t easily talk to or even see one another  <br><br> _Dialog Code:  Chapter_2_0069900 ",
    "character_object_narration <br><br>You laugh awkwardly remembering Skye�s�friends. It might be a little awkward, navigating Skye�s�eccentricities, but you feel like it would work out� you might have to invest in a sturdier poker face soon though  <br><br> _Dialog Code:  Chapter_2_0070200 ",
    "character_object_narration <br><br>Atria tilts her head in confusion, unaware of all that happened that day  <br><br> _Dialog Code:  Chapter_2_0070400 ",
    "character_object_narration <br><br>Skye flushes brightly, before turning back to the now confused but still shyly smiling Atria. She coughs awkwardly, bringing the discussion back to focus  <br><br> _Dialog Code:  Chapter_2_0070600 ",
    "character_object_skye <br><br>Anyway, like I said, I�m not sure if joining the club would be beneficial for everyone involved. I�d be happy to help y\'all out in general though, you seem like really nice people, mhm  <br><br> _Dialog Code:  Chapter_2_0070900 ",
    "character_object_atria <br><br>O-Oh, that�s too bad. I�m sure you�d be a great new member  <br><br> _Dialog Code:  Chapter_2_0071200 ",
    "character_object_player <br><br>I agree, that�s kinda why I invited you in the first place. I�m happy that you�re willing to help us generally, but honestly, I�d like you to stick around. I think we�d all get along great  <br><br> _Dialog Code:  Chapter_2_0071500 ",
    "Skye_Sad  <br><br>Skye_Sad  <br><br> _Dialog Code:  Chapter_2_0071700 ",
    "character_object_narration <br><br>Skye seems to flinch at your words, her previous light-hearted expression disappearing in an instant. She looks away from you and Atria, clearly uncomfortable.  <br><br> _Dialog Code:  Chapter_2_0072000 ",
    "character_object_narration <br><br>Your eyebrows furrow with worry, you share a glance with Atria, who is now frowning as well  <br><br> _Dialog Code:  Chapter_2_0072200 ",
    "character_object_player <br><br>Can I ask why you� don�t want to join us? You did mention you hadn�t signed up for any other club yet, and you don�t seem to be against the idea in general  <br><br> _Dialog Code:  Chapter_2_0072500 ",
    "character_object_skye <br><br>I-I\'m a very busy woman. I can\'t just start up a new club out of nowhere! After all, who would conduct my campaigns, and  <br><br> _Dialog Code:  Chapter_2_0072800 ",
    "character_object_narration <br><br>Skye doesn\'t sound convincing, even to herself. She slumps in her chair, sighing tiredly, running her hand through her hair nervously  <br><br> _Dialog Code:  Chapter_2_0073100 ",
    "character_object_skye <br><br>I-It�d just be easier for all of us. You wouldn�t have to deal with me too regularly, and we get to go our own ways  <br><br> _Dialog Code:  Chapter_2_0073400 ",
    "character_object_narration <br><br>A short silence comes after her words. You�re shocked that the cheerful girl from this morning had given you such a self-depreciating answer. Atria, having no basis for the girl\'s personality, shyly answers, noticing the tense mood  <br><br> _Dialog Code:  Chapter_2_0073700 ",
    "character_object_atria <br><br>I understand, I never really got on with people very easil  <br><br> _Dialog Code:  Chapter_2_0074000 ",
    "character_object_atria <br><br>either  <br><br> _Dialog Code:  Chapter_2_0074100 ",
    "character_object_narration <br><br>Atria smiles awkwardly, trying to reassure the clearly struggling Skye  <br><br> _Dialog Code:  Chapter_2_0074400 ",
    "character_object_narration <br><br>You appreciate her support in this situation. It helps ground you a little, having someone else\'s perspective on this. Skye shakes her head, dismissing the notion  <br><br> _Dialog Code:  Chapter_2_0074600 ",
    "character_object_skye <br><br>No no, you�re both really nice, I tend to not work well with others. People tend to be really uncomfortable around me, and even if you didn�t mind tolerating me, I�ll just bring the mood down. Clubwork and community stuff like this never really suited me  <br><br> _Dialog Code:  Chapter_2_0074900 ",
    "character_object_atria <br><br>Atria1_Sad Sprite  <br><br> _Dialog Code:  Chapter_2_0075100 ",
    "character_object_narration <br><br>Your face scrunches at hearing the familiar narrative from this afternoon, discomfort growing at hearing Skye parroting her aggressors  <br><br> _Dialog Code:  Chapter_2_0075400 ",
    "character_object_player <br><br>Is this about what those people said on break? If it is, I think we should be able to find out on our own whether or not we get along. I know we just met this morning, but I think you\'re pretty great  <br><br> _Dialog Code:  Chapter_2_0075700 ",
    "character_object_skye <br><br>You don\'t get it, everyone gets tired of me eventually. This isn\'t about what those idiots think, it\'s just a fact. I like to keep whatever amicable acquaintances I have and I do that by keeping some distance  <br><br> _Dialog Code:  Chapter_2_0076000 ",
    "character_object_narration <br><br>Her voice is wrought with agitation and yours, unfortunately, rises in return. Your discomfort turns to upset at the thought of your possible friend thinking so poorly of herself, and by extension, of everyone else around her  <br><br> _Dialog Code:  Chapter_2_0076300 ",
    "character_object_player <br><br>I think you\'re being a little unfair here. I\'d be more comfortable with your decision if you just weren\'t sure of the club itself, or if you\'re not comfortable with interacting too closely with what would be veritable strangers  <br><br> _Dialog Code:  Chapter_2_0076600 ",
    "character_object_player <br><br>But, what\'s happening is that you\'re refusing to give us any credit! You\'re so sure we\'re like those assholes that you won\'t give us a chance to even form our own opinions  <br><br> _Dialog Code:  Chapter_2_0076800 ",
    "character_object_skye <br><br>That\'s not what I\'m saying at all! I\'m just telling you it\'s not gonna work out  <br><br> _Dialog Code:  Chapter_2_0077100 ",
    "character_object_skye <br><br>Maybe it is about those guys, but didn\'t you hear them? I talk weird, I talk too much, I\'m annoying, people can\'t see Pio-chan and the others and they hate it when I talk to \'em. This stuff isn\'t just a them thing!  <br><br> _Dialog Code:  Chapter_2_0077300 ",
    "character_object_narration <br><br>Skye�s arguments, having reached a fever pitch, suddenly tapers off. She looks to your side where Atria is before blowing out a huge sigh, agitation slowly bleeding out of her.  <br><br> _Dialog Code:  Chapter_2_0077600 ",
    "character_object_atria <br><br>Atria2_Timi  <br><br> _Dialog Code:  Chapter_2_0077800 ",
    "character_object_narration <br><br>You turn to look at Atria, who looks almost frozen in panic. The blonde was not at all prepared to see her possible new friends fighting, especially so close after her own falling out with her previous awful friends not that long ago  <br><br> _Dialog Code:  Chapter_2_0078000 ",
    "character_object_narration <br><br>Skye looks away, still perturbed by your argument but no longer so fired up, leaving her sounding just� painfully tired  <br><br> _Dialog Code:  Chapter_2_0078200 ",
    "Skye_Default <br><br>Skye_Defaul  <br><br> _Dialog Code:  Chapter_2_0078400 ",
    "character_object_skye <br><br>Things are just way simpler if I\'m not around most other people. I\'m easier to digest in small doses, so you\'ll get tired of me too, sooner or later. I\'m better off spending time with my friends anyway, and I can\'t do that with other people around. They look at me like I\'m crazy  <br><br> _Dialog Code:  Chapter_2_0078700 ",
    "character_object_narration <br><br>Her joke dies an awkward death. You�re not ready to meet her eyes and you aren�t really sure what to say  <br><br> _Dialog Code:  Chapter_2_0079000 ",
    "character_object_narration <br><br>You want to apologise for getting so worked up and for butting in where your opinions may not be wanted, but you don�t like that she thinks so badly of herself  <br><br> _Dialog Code:  Chapter_2_0079200 ",
    "character_object_skye <br><br>I think we�re all a bit tense right now, maybe this wasn�t such a good idea. I-I�m just gonna go  <br><br> _Dialog Code:  Chapter_2_0079500 ",
    "character_object_narration <br><br>You whip your head back to her, eyes widening.  You open your mouth to call out and clear things up, but a voice stops you from doing so  <br><br> _Dialog Code:  Chapter_2_0079800 ",
    "character_object_atria <br><br>Atria2_Sa  <br><br> _Dialog Code:  Chapter_2_0080000 ",
    "character_object_atria <br><br>W-wait  <br><br> _Dialog Code:  Chapter_2_0080300 ",
    "character_object_narration <br><br>Atria quickly gets up from her chair, grabbing Skye�s hand to prevent her from leaving. The timid girl holds the limb, trembling, lips pursed tightly as tears prick her eyes  <br><br> _Dialog Code:  Chapter_2_0080600 ",
    "character_object_atria <br><br>Player�s just worried about you. I-I am too. It�s not right that people�ve made you think that you don�t get to have friends, j-just because you�re a little different  <br><br> _Dialog Code:  Chapter_2_0080900 ",
    "character_object_narration <br><br>Atria smiles uncertainly down at their clasped palms, tears still pricking her vision.  <br><br> _Dialog Code:  Chapter_2_0081200 ",
    "character_object_atria <br><br>I know the feeling  <br><br> _Dialog Code:  Chapter_2_0081500 ",
    "character_object_narration <br><br>Skye�s eyes widened in surprise at the girl�s sudden willfulness. Yours were too at this point. You knew she had some spunk to her from the way she stood up to her former friends, but you weren�t expecting this from her  <br><br> _Dialog Code:  Chapter_2_0081800 ",
    "character_object_atria <br><br>You know what I think  <br><br> _Dialog Code:  Chapter_2_0082100 ",
    "character_object_atria <br><br>Atria2_Nervous Sprit  <br><br> _Dialog Code:  Chapter_2_0082300 ",
    "character_object_narration <br><br>Atria speaks up once more, looking up at Skye�s eyes. Her smile quirks, awkwardly but genuinely, trying to reassure the taller girl  <br><br> _Dialog Code:  Chapter_2_0082600 ",
    "character_object_atria <br><br>You�ve probably gone through a lot of things that\'ve caused you pain. I�ve had to work on my own things recently and I get that it is so� so scary to trust other people after everything  <br><br> _Dialog Code:  Chapter_2_0082900 ",
    "character_object_narration <br><br>The blonde circles the table to move closer to the bespectacled girl, before pulling at their clasped hands, bringing the two closer together. Her eyes shine brightly with unshed tears  <br><br> _Dialog Code:  Chapter_2_0083200 ",
    "character_object_atria <br><br>But, maybe you�d like some help with it? I think we both could use some practice with this friend thing. Why don�t we try this out together  <br><br> _Dialog Code:  Chapter_2_0083500 ",
    "Skye_Smile1 <br><br>Skye_Smile  <br><br> _Dialog Code:  Chapter_2_0083700 ",
    "character_object_atria <br><br>Atria1_Happ  <br><br> _Dialog Code:  Chapter_2_0083800 ",
    "character_object_narration <br><br>Skye�s eyes are still wide with disbelief, unprepared for the whirlwind of a girl that had just swept her off her feet. A small smile cracks onto her face, still uncertain but now filled with a familiar lost wonder  <br><br> _Dialog Code:  Chapter_2_0084100 ",
    "character_object_skye <br><br>O-okay  <br><br> _Dialog Code:  Chapter_2_0084400 ",
    "character_object_narration <br><br>At this point, you aren�t sure if you should stay in the room. It feels like you�re interrupting something even as the two finally separate, still looking at one another. You finally clear your throat, breaking the two�s reverie, returning their gaze towards you  <br><br> _Dialog Code:  Chapter_2_0084700 ",
    "character_object_player <br><br>Skye, I�m sorry for how I acted. Atria was right, I was worried, but I should�ve been more sensitive. I� shouldn�t have made it about myself  <br><br> _Dialog Code:  Chapter_2_0085000 ",
    "character_object_narration <br><br>Skye smiles at you for the apology, moving towards you and extending an arm for you to grab. You gratefully take it, grasping onto her palm to shake. Her mouth quirks up in a rueful smirk  <br><br> _Dialog Code:  Chapter_2_0085300 ",
    "character_object_skye <br><br>I was getting too in my head, I think. I�m happy that you cared enough to try and snap me out of it  <br><br> _Dialog Code:  Chapter_2_0085600 ",
    "character_object_narration <br><br>You smile at each other, relieved that your fight hadn�t caused irreparable damage to your new friendship. You think about the reason you fought in the first place  <br><br> _Dialog Code:  Chapter_2_0085900 ",

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
    "character_object_player <br><br>Would you consider it? Joining us at the club? We�d love to have you  <br><br> _Dialog Code:  Chapter_2_0088200 ",
    "character_object_narration <br><br>You aren�t sure if the invite would be taken well, but Skye smiles softly at the two of you. She nods her head, one of her hands coming up to rest on her waist as the next words come out of her mouth  <br><br> _Dialog Code:  Chapter_2_0088500 ",
    "Skye Skye_Smile2 <br><br>Well, you two do look like you could use some help. Where do you think we should start  <br><br> _Dialog Code:  Chapter_2_0088800 ",
    "character_object_narration <br><br>Atria smiles softly as she takes Skye�s hand in hers once more, dragging her to sit on the table as they start discussing ideas for the radio club, what they would prepare for the first broadcast, what news was popular in the school  <br><br> _Dialog Code:  Chapter_2_0089100 ",
    "character_object_narration <br><br>Whatever it is, it seems like they\'re having fun. You can hear Skye snorting with laughter, Atria�s quieter giggles interspersed a little more rarely in the conversation.  <br><br> _Dialog Code:  Chapter_2_0089300 ",
    "character_object_narration <br><br>You smile at them as you move to settle on the table  <br><br> _Dialog Code:  Chapter_2_0089500 ",
    "Skye CG <br><br>Skye C  <br><br> _Dialog Code:  Chapter_2_0089700 ",
    "character_object_narration <br><br>Kyo slips into the room in the middle of all the excitement, quietly sneaking into the corner of the room, settling for looking at what was going on  <br><br> _Dialog Code:  Chapter_2_0089900 ",
    "character_object_narration <br><br>You move to greet him � and maybe grill him for missing yet another certified moment with your new club members � when Kyo motions for you to stop  <br><br> _Dialog Code:  Chapter_2_0090100 ",
    "character_object_narration <br><br>He moves his hands in a shushing motion, gesturing for you to be quiet. The two girls continue their excited discussion, completely unaware of Kyo�s entrance  <br><br> _Dialog Code:  Chapter_2_0090300 ",
    "character_object_narration <br><br>You nod your head at the blue haired boy, returning to look once more at your new friends fondly. You definitely don\'t want to interrupt their bonding either  <br><br> _Dialog Code:  Chapter_2_0090500 ",
    "character_object_narration <br><br>You\'ll have time for more proper introductions later  <br><br> _Dialog Code:  Chapter_2_0090700 ",
    // end-of-CHAPTER-2-mark
    'jump CHAPTER_3'
  ],

  'CHAPTER_3': [
    'chap 3',
    // start-of-CHAPTER-3-mark
    "_Name <br><br>_Tex  <br><br> _Dialog Code:  _DialogCode ",
    " <br><br>Chapter 3: Confronting the Moon Princ  <br><br> _Dialog Code:  Chapter_3_0000100 ",
    "Radio Club Basic + Printer + Mic + Laptop <br><br>Radio Club Basic + Printer + Mic + Lapto  <br><br> _Dialog Code:  Chapter_3_0000300 ",
    "character_object_esmeray <br><br>Esmeray\'s BG  <br><br> _Dialog Code:  Chapter_3_0000400 ",
    "character_object_narration <br><br>It�s been a couple of days since Skye joined the group  <br><br> _Dialog Code:  Chapter_3_0000700 ",
    "character_object_narration <br><br>The Radio Club is now livelier than ever, much to Kyo�s playful dismay, as you, Atria, and Skye chat loudly and often in the club room  <br><br> _Dialog Code:  Chapter_3_0000900 ",
    "character_object_narration <br><br>Now, all you need is one more member to make the club official. But who  <br><br> _Dialog Code:  Chapter_3_0001100 ",
    "Transition to School Hallway Day <br><br>Transition to School Hallway Da  <br><br> _Dialog Code:  Chapter_3_0001300 ",
    "character_object_narration <br><br>As you�re deep in thought and walking down the hallways of ILUNA Academy, you snap to attention when you hear loud giggles, flirts, and cheers coming from a crowd in front of you  <br><br> _Dialog Code:  Chapter_3_0001600 ",
    "character_object_esmeray <br><br>Esmeray (Amused) Appears on Screen, labeled as ??  <br><br> _Dialog Code:  Chapter_3_0001800 ",
    "character_object_narration <br><br>In the center of the crowd is a tall dude with dark turquoise hair, lots of black and shiny bling, and pretty turquoise-gold eyes  <br><br> _Dialog Code:  Chapter_3_0002000 ",
    "character_object_narration <br><br>Some of the people in the crowd have signs in their hands  <br><br> _Dialog Code:  Chapter_3_0002200 ",
    "character_object_narration <br><br>\"We love you, Esmeray!\" says the one in the hands of an enthusiastically cheering girl  <br><br> _Dialog Code:  Chapter_3_0002400 ",
    "character_object_narration <br><br>\"The Prince of the Dark Moon, and my heart <3\" says another in the hands of a tall, totally smitten boy  <br><br> _Dialog Code:  Chapter_3_0002600 ",
    "character_object_narration <br><br>The person in the center winks at the two of them, a lax smile on his face as he does so  <br><br> _Dialog Code:  Chapter_3_0002800 ",
    "character_object_narration <br><br>The two start squealing before the girl faints in the boy�s arms, making him drop his sign  <br><br> _Dialog Code:  Chapter_3_0003000 ",
    "character_object_player <br><br>That must be the popular guy of the school I heard about. Esmeray Regulus, I think  <br><br> _Dialog Code:  Chapter_3_0003300 ",
    "character_object_narration <br><br>You don�t really pay too much attention to the crowd. If anything, it�s a little annoying  <br><br> _Dialog Code:  Chapter_3_0003600 ",
    "character_object_narration <br><br>The bell rings, meaning most students will be late to their class if they don�t get going, including yourself  <br><br> _Dialog Code:  Chapter_3_0003800 ",
    "character_object_student <br><br>	See you later, Esmeray  <br><br> _Dialog Code:  Chapter_3_0004100 ",
    "character_object_narration <br><br>You walk past the crowd, hearing Esmeray laugh at the random person and wave at them  <br><br> _Dialog Code:  Chapter_3_0004400 ",
    "character_object_narration <br><br>	You slow down your pace. Something about that laugh is weird  <br><br> _Dialog Code:  Chapter_3_0004600 ",
    "character_object_narration <br><br>	You turn around, looking closely at Esmeray  <br><br> _Dialog Code:  Chapter_3_0004800 ",
    "character_object_narration <br><br>Sure enough, although Esmeray�s face is smiling, his eyes look empty  <br><br> _Dialog Code:  Chapter_3_0005000 ",
    "character_object_narration <br><br>You move so that you\'re partially hidden by a nearby trash can, continuing to observe Esmeray  <br><br> _Dialog Code:  Chapter_3_0005200 ",
    "character_object_esmeray <br><br>Esmeray Unamuse  <br><br> _Dialog Code:  Chapter_3_0005400 ",
    "character_object_narration <br><br>Once the crowd is gone, you see Esmeray�s smile fall, and his entire face becomes cold. He then starts trudging to his class  <br><br> _Dialog Code:  Chapter_3_0005600 ",
    "character_object_narration <br><br>Your eyes widen at what you\'ve just seen, but your thoughts will have to wait. You�re late to class  <br><br> _Dialog Code:  Chapter_3_0005800 ",
    "Transition to Hallway BG <br><br>Transition to Hallway B  <br><br> _Dialog Code:  Chapter_3_0006000 ",
    "No Sprites <br><br>No Sprite  <br><br> _Dialog Code:  Chapter_3_0006100 ",
    "character_object_narration <br><br>The day is finally over, and you\'re heading to the Radio Club. You need to strategize with Kyo on how to gain your last member  <br><br> _Dialog Code:  Chapter_3_0006400 ",
    "character_object_narration <br><br>On your way there, you hear the faint sounds of guitar chords accompanied by a muffled voice  <br><br> _Dialog Code:  Chapter_3_0006600 ",
    "character_object_player <br><br>I shouldn�t peek� I�m a little busy  <br><br> _Dialog Code:  Chapter_3_0006900 ",
    "character_object_narration <br><br>But your curiosity is winning today  <br><br> _Dialog Code:  Chapter_3_0007200 ",
    "character_object_narration <br><br>Quietly, you walk towards the source of the noise  <br><br> _Dialog Code:  Chapter_3_0007400 ",
    "character_object_narration <br><br>As you get closer, the guitar chord sounds morph into a soft melody, and with it the muffled voice is now distinct and clear  <br><br> _Dialog Code:  Chapter_3_0007600 ",
    "character_object_narration <br><br>The voice leads you to the entrance of an empty classroom, door slightly ajar, enough to hear the song  <br><br> _Dialog Code:  Chapter_3_0007800 ",
    "character_object_narration <br><br>The lovely tenor voice makes you almost breathless. You have to see who�s making that song  <br><br> _Dialog Code:  Chapter_3_0008000 ",
    "character_object_narration <br><br>You creep up closer to the crack of the door and carefully pull it wider. Your eyes open in shock  <br><br> _Dialog Code:  Chapter_3_0008200 ",
    "character_object_esmeray <br><br>Esmeray C  <br><br> _Dialog Code:  Chapter_3_0008400 ",
    "character_object_esmeray <br><br>	Don�t need the plastic smiles all up in my fac  <br><br> _Dialog Code:  Chapter_3_0008700 ",
    "character_object_esmeray <br><br>	Just wanna be a moonchild and stay in outer space  <br><br> _Dialog Code:  Chapter_3_0008800 ",
    "character_object_esmeray <br><br>	Don�t wanna keep on going on like thi  <br><br> _Dialog Code:  Chapter_3_0009000 ",
    "character_object_esmeray <br><br>	These people all really like to mis  <br><br> _Dialog Code:  Chapter_3_0009100 ",
    "character_object_esmeray <br><br>	The fact that I don�t care  <br><br> _Dialog Code:  Chapter_3_0009200 ",
    "character_object_esmeray <br><br>	A fact that they can�t bear  <br><br> _Dialog Code:  Chapter_3_0009300 ",
    "character_object_esmeray <br><br>	  <br><br> _Dialog Code:  Chapter_3_0009500 ",
    "character_object_esmeray <br><br>	�Someday I will travel fa  <br><br> _Dialog Code:  Chapter_3_0009700 ",
    "character_object_esmeray <br><br>	Riding on a shooting sta  <br><br> _Dialog Code:  Chapter_3_0009800 ",
    "character_object_esmeray <br><br>	Leaving won�t give me a sca  <br><br> _Dialog Code:  Chapter_3_0009900 ",
    "character_object_esmeray <br><br>Cause all I need is me and my guitar~  <br><br> _Dialog Code:  Chapter_3_0010000 ",
    "END CG <br><br>END C  <br><br> _Dialog Code:  Chapter_3_0010200 ",
    "character_object_esmeray <br><br>Esmeray Genuin  <br><br> _Dialog Code:  Chapter_3_0010400 ",
    "Generic Classroom background <br><br>Generic Classroom backgroun  <br><br> _Dialog Code:  Chapter_3_0010500 ",
    "character_object_narration <br><br>	You�re in awe, to say the least  <br><br> _Dialog Code:  Chapter_3_0010800 ",
    "character_object_narration <br><br>Who would�ve thought that the school�s resident popular guy is also a musical talent  <br><br> _Dialog Code:  Chapter_3_0011000 ",
    "character_object_player <br><br>	�How amazing would it be if he joined the Radio Club  <br><br> _Dialog Code:  Chapter_3_0011300 ",
    "character_object_player <br><br>�Yeah! Wouldn�t he be a good person to arrange music to broadcast? His voice is perfect  <br><br> _Dialog Code:  Chapter_3_0011500 ",
    "character_object_player <br><br>  <br><br> _Dialog Code:  Chapter_3_0011700 ",
    "character_object_player <br><br>Should I try to invite him  <br><br> _Dialog Code:  Chapter_3_0011900 ",

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
    "character_object_player <br><br>	�Hey! That�s some amazing playing, you�re really talented  <br><br> _Dialog Code:  Chapter_3_0015300 ",
    "character_object_player <br><br>Esmeray:  <br><br> _Dialog Code:  Chapter_3_0015500 ",
    "character_object_player <br><br>  <br><br> _Dialog Code:  Chapter_3_0015600 ",
    "character_object_player <br><br>So, I, uh, I�m part of the Radio Club, and we�re currently recruiting members. I think you�d be an amazing fit for it  <br><br> _Dialog Code:  Chapter_3_0015900 ",
    "character_object_player <br><br>So, what do you say? Would you like to join the Radio Club  <br><br> _Dialog Code:  Chapter_3_0016100 ",
    "character_object_esmeray <br><br>	�Hah! As if I�d join your club.  <br><br> _Dialog Code:  Chapter_3_0016400 ",
    "character_object_esmeray <br><br>Nah, if it�s full of eavesdroppers like you, then hell, I definitely don�t want to be in any part of it  <br><br> _Dialog Code:  Chapter_3_0016600 ",
    "character_object_esmeray <br><br>Esmeray sprite disappear  <br><br> _Dialog Code:  Chapter_3_0016800 ",
    "character_object_narration <br><br>Esmeray walks out, leaving you speechless and watching his shrinking figure as he walks down the hallway  <br><br> _Dialog Code:  Chapter_3_0017100 ",
    "character_object_narration <br><br>Gone was the smile from before  <br><br> _Dialog Code:  Chapter_3_0017300 ",
    "Proceed to next scene <br><br>Proceed to next scen  <br><br> _Dialog Code:  Chapter_3_0017500 ",
    "School Hallway Day <br><br>School Hallway Da  <br><br> _Dialog Code:  Chapter_3_0017700 ",
    "character_object_esmeray <br><br>Esmeray Neutra  <br><br> _Dialog Code:  Chapter_3_0017800 ",
    "character_object_narration <br><br>The next day, you spot Esmeray in the hallway on the way to the Radio Club. Luckily, he was alone  <br><br> _Dialog Code:  Chapter_3_0018100 ",
    "character_object_narration <br><br>Although he rejected you last time, you won�t give up  <br><br> _Dialog Code:  Chapter_3_0018300 ",
    "character_object_narration <br><br>You know that with his talent in music, he would definitely be a great addition to the club  <br><br> _Dialog Code:  Chapter_3_0018500 ",
    "character_object_narration <br><br>He is a hidden gem! Not only could he use his talent in music to compose soundtracks for the club, but his voice also fits that of a charming broadcaster perfectly  <br><br> _Dialog Code:  Chapter_3_0018700 ",
    "character_object_narration <br><br>And, who knows? He could be as good a friend as Atria, Skye, or Kyo  <br><br> _Dialog Code:  Chapter_3_0018900 ",
    "character_object_narration <br><br>With conviction, you decide that this moment in the hallway would be a good time to try and get him to join the Radio Club  <br><br> _Dialog Code:  Chapter_3_0019100 ",
    "character_object_narration <br><br>You try to get his attention and wave at him  <br><br> _Dialog Code:  Chapter_3_0019300 ",
    "character_object_player <br><br>Esmeray  <br><br> _Dialog Code:  Chapter_3_0019600 ",
    "character_object_player <br><br>Esmeray Unamused:  <br><br> _Dialog Code:  Chapter_3_0019800 ",
    "character_object_player <br><br>  <br><br> _Dialog Code:  Chapter_3_0019900 ",
    "Footstep SFX <br><br>Footstep SF  <br><br> _Dialog Code:  Chapter_3_0020100 ",
    "character_object_esmeray <br><br>Esmeray sprite disappear  <br><br> _Dialog Code:  Chapter_3_0020200 ",
    "Hallway BG <br><br>Hallway B  <br><br> _Dialog Code:  Chapter_3_0020300 ",
    "character_object_narration <br><br>You sigh, thinking you�ll try again  <br><br> _Dialog Code:  Chapter_3_0020600 ",
    "character_object_narration <br><br>You wish Kyo was with you, but you couldn�t find him anywhere, and you don�t have his phone number  <br><br> _Dialog Code:  Chapter_3_0020800 ",
    "character_object_narration <br><br>It�s at times like this where frustration is high that you wish you could contact him, but this frustration is overtaken by your realization that really you haven�t seen him much these past couple of days  <br><br> _Dialog Code:  Chapter_3_0021000 ",
    "character_object_narration <br><br>Where is he  <br><br> _Dialog Code:  Chapter_3_0021200 ",
    "character_object_narration <br><br>*BLACK SCREEN TRANSITION  <br><br> _Dialog Code:  Chapter_3_0021500 ",
    "Transition to School Hallway Day <br><br>Transition to School Hallway Da  <br><br> _Dialog Code:  Chapter_3_0021600 ",
    "character_object_esmeray <br><br>Esmeray Neutra  <br><br> _Dialog Code:  Chapter_3_0021700 ",
    "character_object_narration <br><br>After gym class, as you walk to the restroom, you find Esmeray walking out from the unisex restroom door  <br><br> _Dialog Code:  Chapter_3_0022000 ",
    "character_object_narration <br><br>You try waving at him again, but before you can get within a 10 foot radius of his location, he swiftly walks away in the other direction  <br><br> _Dialog Code:  Chapter_3_0022200 ",
    "character_object_esmeray <br><br>Esmeray Sprite Disappear  <br><br> _Dialog Code:  Chapter_3_0022400 ",
    "character_object_narration <br><br>Groaning, you just go into the restroom  <br><br> _Dialog Code:  Chapter_3_0022600 ",
    "character_object_narration <br><br>*BLACK SCREEN TRANSITION  <br><br> _Dialog Code:  Chapter_3_0022800 ",
    "Transition to School Hallway Day <br><br>Transition to School Hallway Da  <br><br> _Dialog Code:  Chapter_3_0022900 ",
    "character_object_narration <br><br>A couple days have passed since you first tried to get Esmeray into the Radio Club, each day being met with more glares and avoidance from Esmeray  <br><br> _Dialog Code:  Chapter_3_0023200 ",
    "character_object_narration <br><br>Kyo, on the few days you would see him, just made fun of you. Whenever you got irritated and asked him where he had been, he�d change the subject or say he had things going on at home  <br><br> _Dialog Code:  Chapter_3_0023400 ",
    "character_object_narration <br><br>You would just huff in response and walk with him to the Radio Club classroom  <br><br> _Dialog Code:  Chapter_3_0023600 ",
    "character_object_narration <br><br>As if receiving Kyo�s lack of help wasn�t enough, you also dealt with more people trying to accuse Skye of the increasing incidences of vandalism going on, as well as Atria�s old friends lurking around and glaring at your club  <br><br> _Dialog Code:  Chapter_3_0023800 ",
    "character_object_atria <br><br>Skye_Default and Atria2_Nervou  <br><br> _Dialog Code:  Chapter_3_0024000 ",
    "character_object_skye <br><br>Tch, they�re just jealous they don�t have what we have, right y\'all  <br><br> _Dialog Code:  Chapter_3_0024300 ",
    "character_object_narration <br><br>Skye gestures to you, Atria, and the air next to her while walking down the halls  <br><br> _Dialog Code:  Chapter_3_0024600 ",
    "character_object_narration <br><br>	Atria looks around  <br><br> _Dialog Code:  Chapter_3_0024800 ",
    "character_object_narration <br><br>Although they�re a lot less intimidated of their �friends� than before, they\'re still cautious while walking down the halls with you, Kyo, and Skye  <br><br> _Dialog Code:  Chapter_3_0025000 ",
    "character_object_narration <br><br>Speaking of Kyo, he�s not here, AGAIN. He did tell you that he had a lot of work going on lately, but if the Radio Club�s one of his major commitments, how important must those other things be  <br><br> _Dialog Code:  Chapter_3_0025200 ",
    "character_object_atria <br><br>	W-Well, it seems like we�re close to the club room! By th  <br><br> _Dialog Code:  Chapter_3_0025500 ",
    "character_object_atria <br><br>way, w-were we able to register officially yet  <br><br> _Dialog Code:  Chapter_3_0025600 ",
    "character_object_player <br><br>We still need one more member, I think. That�s what Kyo told me, anyways  <br><br> _Dialog Code:  Chapter_3_0025900 ",
    "character_object_skye <br><br>Mm mm, I see. How�s he, by the way? He seems to not be around lately  <br><br> _Dialog Code:  Chapter_3_0026200 ",
    "character_object_player <br><br>	*Sigh* I don�t know, Skye  <br><br> _Dialog Code:  Chapter_3_0026500 ",
    "character_object_narration <br><br>There is silence between you three, until Atria clears their throat  <br><br> _Dialog Code:  Chapter_3_0026800 ",
    "character_object_atria <br><br>	So, who� who are we trying to recruit  <br><br> _Dialog Code:  Chapter_3_0027100 ",
    "character_object_narration <br><br>	Skye and Atria turn to you, curiosity shining on their faces  <br><br> _Dialog Code:  Chapter_3_0027400 ",
    "character_object_narration <br><br>	You sheepishly grin at them  <br><br> _Dialog Code:  Chapter_3_0027600 ",
    "character_object_player <br><br>	Uh� have you heard of Esmeray Regulus  <br><br> _Dialog Code:  Chapter_3_0027900 ",
    "character_object_narration <br><br>	Atria�s and Skye�s eyes widen in shock  <br><br> _Dialog Code:  Chapter_3_0028200 ",
    "character_object_atria <br><br>	WHAT?  <br><br> _Dialog Code:  Chapter_3_0028500 ",
    "character_object_atria <br><br>T-That really, r-really high profile person?! The so-called charming f-boy of the school who�s so handsome no one really cares if he flirts with everyone?  <br><br> _Dialog Code:  Chapter_3_0028800 ",
    "character_object_skye <br><br>	Why would he want to join us? Can we even trust him  <br><br> _Dialog Code:  Chapter_3_0029100 ",
    "character_object_player <br><br>	Hold on, y�all. I haven�t brought him in yet. I\'m just thinkin  <br><br> _Dialog Code:  Chapter_3_0029400 ",
    "character_object_player <br><br>about bringing him  <br><br> _Dialog Code:  Chapter_3_0029500 ",
    "character_object_player <br><br>	There are some reasons  <br><br> _Dialog Code:  Chapter_3_0029700 ",
    "character_object_narration <br><br>	You pause  <br><br> _Dialog Code:  Chapter_3_0030000 ",
    "character_object_narration <br><br>	You don�t know if it�s okay to share with them about Esmera  <br><br> _Dialog Code:  Chapter_3_0030200 ",
    "character_object_narration <br><br>being a musical talent yet  <br><br> _Dialog Code:  Chapter_3_0030300 ",
    "character_object_narration <br><br>	It\'d be best to get his consent first  <br><br> _Dialog Code:  Chapter_3_0030500 ",
    "character_object_player <br><br>A-Anyways, I think he would fit right in. If� I mean, when I bring him in, you�ll see why. Can you trust me  <br><br> _Dialog Code:  Chapter_3_0030800 ",
    "character_object_narration <br><br>	With some hesitation, they both nod at you  <br><br> _Dialog Code:  Chapter_3_0031100 ",
    "character_object_narration <br><br>	Atria has a wary smile on their face, while Skye pushes u  <br><br> _Dialog Code:  Chapter_3_0031300 ",
    "character_object_narration <br><br>her glasses  <br><br> _Dialog Code:  Chapter_3_0031400 ",
    "character_object_narration <br><br>	You smile, happy to have them as your friends  <br><br> _Dialog Code:  Chapter_3_0031600 ",
    "character_object_player <br><br>	Thanks, y�all  <br><br> _Dialog Code:  Chapter_3_0031900 ",
    "character_object_player <br><br>*BLACK SCREEN TRANSITION  <br><br> _Dialog Code:  Chapter_3_0032100 ",
    "School Hallway Day <br><br>School Hallway Da  <br><br> _Dialog Code:  Chapter_3_0032200 ",
    "character_object_narration <br><br>Although you said that you would bring Esmeray to them, it�s proving to be harder than you thought  <br><br> _Dialog Code:  Chapter_3_0032500 ",
    "character_object_narration <br><br>It�s been a couple of days since you told Atria and Skye to trust you. You were at the point of giving up on pursuing Esmeray, and going back to Atria and Skye in defeat  <br><br> _Dialog Code:  Chapter_3_0032700 ",
    "character_object_narration <br><br>Before you do so, you decide to trudge up the steps that lead to the rooftop, hoping to just have a quiet lunch  <br><br> _Dialog Code:  Chapter_3_0032900 ",
    "character_object_narration <br><br>As you get closer to the door of the rooftop, you hear the sound of familiar singing  <br><br> _Dialog Code:  Chapter_3_0033100 ",
    "character_object_narration <br><br>When you get to the slightly open door (Again?? You think to yourself.), you stop and peek through the crack, only to see Esmeray sitting on a bench as he sways to the melody he is singing  <br><br> _Dialog Code:  Chapter_3_0033300 ",
    "Transition to Rooftop Day <br><br>Transition to Rooftop Da  <br><br> _Dialog Code:  Chapter_3_0033500 ",
    "character_object_esmeray <br><br>Esmeray Genuin  <br><br> _Dialog Code:  Chapter_3_0033600 ",
    "character_object_esmeray <br><br>What if I could fly to the blue sugar sky  <br><br> _Dialog Code:  Chapter_3_0033900 ",
    "character_object_esmeray <br><br>Wouldn�t that be swee  <br><br> _Dialog Code:  Chapter_3_0034000 ",
    "character_object_esmeray <br><br>  <br><br> _Dialog Code:  Chapter_3_0034100 ",
    "character_object_esmeray <br><br>Don�t wanna deal with a li  <br><br> _Dialog Code:  Chapter_3_0034200 ",
    "character_object_esmeray <br><br>Just wanna move to the rhythm of the bea  <br><br> _Dialog Code:  Chapter_3_0034300 ",
    "character_object_esmeray <br><br>If only they could see  <br><br> _Dialog Code:  Chapter_3_0034500 ",
    "character_object_esmeray <br><br>I just wanna go fa  <br><br> _Dialog Code:  Chapter_3_0034600 ",
    "character_object_esmeray <br><br>That could be my remed  <br><br> _Dialog Code:  Chapter_3_0034700 ",
    "character_object_esmeray <br><br>  <br><br> _Dialog Code:  Chapter_3_0034800 ",
    "character_object_esmeray <br><br>But all I got is me and my guitar  <br><br> _Dialog Code:  Chapter_3_0034900 ",
    "character_object_narration <br><br>	Esmeray continues to sing and hum, while you start to think  <br><br> _Dialog Code:  Chapter_3_0035200 ",
    "character_object_narration <br><br>How long has it been since you started trying to get him to join the club  <br><br> _Dialog Code:  Chapter_3_0035400 ",
    "character_object_narration <br><br>	If you go to him now, would it make a difference  <br><br> _Dialog Code:  Chapter_3_0035600 ",
    "character_object_player <br><br>	Should I� have one more go  <br><br> _Dialog Code:  Chapter_3_0035900 ",

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
    "character_object_player <br><br> �Hi, Esmeray  <br><br> _Dialog Code:  Chapter_3_0044900 ",
    "character_object_esmeray <br><br>Esmeray Neutra  <br><br> _Dialog Code:  Chapter_3_0045100 ",
    "character_object_narration <br><br>Esmeray nods, looking down at the lunch in his lap and shifting the food around with the fork absentmindedly  <br><br> _Dialog Code:  Chapter_3_0045400 ",
    "character_object_player <br><br>  <br><br> _Dialog Code:  Chapter_3_0045700 ",
    "character_object_esmeray <br><br>  <br><br> _Dialog Code:  Chapter_3_0046000 ",
    "character_object_esmeray <br><br>Player:  <br><br> _Dialog Code:  Chapter_3_0046200 ",
    "character_object_esmeray <br><br>So  <br><br> _Dialog Code:  Chapter_3_0046300 ",
    "character_object_esmeray <br><br>Esmeray:  <br><br> _Dialog Code:  Chapter_3_0046500 ",
    "character_object_esmeray <br><br>Why me  <br><br> _Dialog Code:  Chapter_3_0046600 ",
    "character_object_narration <br><br>You pause as Esmeray looks at you with a blank face  <br><br> _Dialog Code:  Chapter_3_0046900 ",
    "character_object_narration <br><br>Player:  <br><br> _Dialog Code:  Chapter_3_0047100 ",
    "character_object_narration <br><br>Excuse me  <br><br> _Dialog Code:  Chapter_3_0047200 ",
    "character_object_narration <br><br>Esmeray:  <br><br> _Dialog Code:  Chapter_3_0047400 ",
    "character_object_narration <br><br>Why me? Don�t you have, like, other friends? What about those multicolored-haired weirdos� I mean, friends in your club already  <br><br> _Dialog Code:  Chapter_3_0047500 ",
    "character_object_narration <br><br>He pauses  <br><br> _Dialog Code:  Chapter_3_0047800 ",
    "character_object_narration <br><br>You side-eye Esmeray  <br><br> _Dialog Code:  Chapter_3_0048000 ",
    "character_object_narration <br><br>He looks blankly back at you  <br><br> _Dialog Code:  Chapter_3_0048200 ",
    "character_object_player <br><br>	I heard that  <br><br> _Dialog Code:  Chapter_3_0048500 ",
    "character_object_esmeray <br><br>	Nah, you didn�t  <br><br> _Dialog Code:  Chapter_3_0048800 ",
    "character_object_narration <br><br>You playfully glare at him before turning to your own lunch and shifting in your seat  <br><br> _Dialog Code:  Chapter_3_0049100 ",
    "character_object_player <br><br>I�ll be blunt. I just think you would make a good addition to the club  <br><br> _Dialog Code:  Chapter_3_0049400 ",
    "character_object_narration <br><br>Esmeray raises his eyebrow at you in disbelief, and his eyes look at you as if asking you, \"Seriously?\  <br><br> _Dialog Code:  Chapter_3_0049700 ",
    "character_object_player <br><br>Not only are you very talented in music � which would be helpful to use whenever we do broadcasts � but I think your presence alone would be good publicity for the club  <br><br> _Dialog Code:  Chapter_3_0050000 ",
    "character_object_narration <br><br>	Esmeray scoffs at this, but continues to listen regardless  <br><br> _Dialog Code:  Chapter_3_0050300 ",
    "character_object_player <br><br>And also, I would like to be friends with you. You seem interesting, and nicer than you show. Although, you need to fix that playboy personality of yours  <br><br> _Dialog Code:  Chapter_3_0050600 ",
    "character_object_esmeray <br><br>	Pfft  <br><br> _Dialog Code:  Chapter_3_0050900 ",
    "character_object_narration <br><br>You quickly turn to Esmeray in disbelief, only to find his face contorted into a laughing, genuine smile  <br><br> _Dialog Code:  Chapter_3_0051200 ",
    "character_object_esmeray <br><br>	Playboy? Me? Nah, das crazy, what do you mean  <br><br> _Dialog Code:  Chapter_3_0051500 ",
    "character_object_esmeray <br><br>Like, I thought that�s how you�re supposed to act when you want to make friends  <br><br> _Dialog Code:  Chapter_3_0051700 ",
    "character_object_narration <br><br>	Now it�s your turn to laugh  <br><br> _Dialog Code:  Chapter_3_0052000 ",
    "character_object_player <br><br>Hah, what? Really? You really thought the best way to socialize with people was to rizz them up? HAHA, that�s HILARIOUS  <br><br> _Dialog Code:  Chapter_3_0052300 ",
    "character_object_esmeray <br><br>Wh-WHAT?! NO! I was NOT� rizzing ANYONE! You�re just weird to interpret it that way  <br><br> _Dialog Code:  Chapter_3_0052600 ",
    "character_object_narration <br><br>	You two continue to laugh and talk more on the rooftop  <br><br> _Dialog Code:  Chapter_3_0052900 ",
    "character_object_narration <br><br>After you finish laughing, you look past the iron fence of the rooftop and at the sky  <br><br> _Dialog Code:  Chapter_3_0053100 ",
    "character_object_esmeray <br><br>Esmeray Genuin  <br><br> _Dialog Code:  Chapter_3_0053300 ",
    "character_object_player <br><br>The sky does look like blue sugar  <br><br> _Dialog Code:  Chapter_3_0053600 ",
    "character_object_narration <br><br>	Esmeray�s eyes widen, and he whips his head towards you  <br><br> _Dialog Code:  Chapter_3_0053900 ",
    "character_object_esmeray <br><br>H-Huh  <br><br> _Dialog Code:  Chapter_3_0054200 ",
    "character_object_player <br><br>I overheard you singing earlier, and also before  <br><br> _Dialog Code:  Chapter_3_0054500 ",
    "character_object_player <br><br>�Wanna talk about it?  <br><br> _Dialog Code:  Chapter_3_0054700 ",
    "character_object_player <br><br>I-I mean, you don�t have to, of course  <br><br> _Dialog Code:  Chapter_3_0054900 ",
    "character_object_player <br><br>I was just thinking, I mean, we are friends now, so  <br><br> _Dialog Code:  Chapter_3_0055100 ",
    "character_object_player <br><br>B-But of course, you don�t have to, a-and if you want to then feel free to take all the time you need, and stuff  <br><br> _Dialog Code:  Chapter_3_0055300 ",
    "character_object_player <br><br>Esmeray:  <br><br> _Dialog Code:  Chapter_3_0055500 ",
    "character_object_player <br><br>	  <br><br> _Dialog Code:  Chapter_3_0055600 ",
    "character_object_player <br><br>	  <br><br> _Dialog Code:  Chapter_3_0055800 ",
    "character_object_player <br><br>F�friends  <br><br> _Dialog Code:  Chapter_3_0056000 ",
    "character_object_player <br><br>  <br><br> _Dialog Code:  Chapter_3_0056200 ",
    "character_object_player <br><br>Okay, I do want to say this to someone, at least  <br><br> _Dialog Code:  Chapter_3_0056400 ",
    "character_object_narration <br><br>You patiently wait for him to keep talking  <br><br> _Dialog Code:  Chapter_3_0056700 ",
    "character_object_narration <br><br>After a couple moments of silence, Esmeray clears his throat  <br><br> _Dialog Code:  Chapter_3_0056900 ",
    "character_object_esmeray <br><br>Ahem� When�� when I was in elementary school, I had a lot of people who thought I was like an alien because I was shorter than the average height and had weird looking ears  <br><br> _Dialog Code:  Chapter_3_0057200 ",
    "character_object_esmeray <br><br>	And s-so, in middle school, I decided to change things up a bit  <br><br> _Dialog Code:  Chapter_3_0057400 ",
    "character_object_esmeray <br><br>Grew my hair out, changed my style, learned how to accessorize  <br><br> _Dialog Code:  Chapter_3_0057600 ",
    "character_object_esmeray <br><br>I learned about social cues, read some comics, watched some movies where the main character undergoes a transformation and suddenly they know how to talk to people, and how to get them to like them  <br><br> _Dialog Code:  Chapter_3_0057800 ",
    "character_object_esmeray <br><br>	So, I tried some of the lines from the movies and comics out  <br><br> _Dialog Code:  Chapter_3_0058000 ",
    "character_object_esmeray <br><br>	A-And it worked! People� They started to like me  <br><br> _Dialog Code:  Chapter_3_0058200 ",
    "character_object_esmeray <br><br>My growth spurt helped me out too � I stood out from the crowd, in a good way  <br><br> _Dialog Code:  Chapter_3_0058400 ",
    "character_object_esmeray <br><br>All of a sudden, people stopped calling me names like alien boy, weirdo, and bozo, and they called me things like a prince, a cool guy  <br><br> _Dialog Code:  Chapter_3_0058600 ",
    "character_object_esmeray <br><br>	  <br><br> _Dialog Code:  Chapter_3_0058800 ",
    "character_object_esmeray <br><br>	And I liked it, my changes  <br><br> _Dialog Code:  Chapter_3_0059000 ",
    "character_object_esmeray <br><br>	And I thought it would stay that way, but  <br><br> _Dialog Code:  Chapter_3_0059200 ",
    "character_object_player <br><br>	  <br><br> _Dialog Code:  Chapter_3_0059500 ",
    "character_object_esmeray <br><br>	So, I started going out with some people  <br><br> _Dialog Code:  Chapter_3_0059800 ",
    "character_object_esmeray <br><br>At first, it was crazy to me: people actually liked me, I was actually someone attractive to them. My ways of communication were working, and stuff.  <br><br> _Dialog Code:  Chapter_3_0060000 ",
    "character_object_esmeray <br><br>	Like, whoa, intimate connection? Me  <br><br> _Dialog Code:  Chapter_3_0060200 ",
    "character_object_esmeray <br><br>And it was okay, but like, some people ended up ending our relationship because I wasn�t who they thought I was  <br><br> _Dialog Code:  Chapter_3_0060400 ",
    "character_object_esmeray <br><br>	I mean, who wanted a dinosaur-loving, closete  <br><br> _Dialog Code:  Chapter_3_0060600 ",
    "character_object_esmeray <br><br>emo-musician guy  <br><br> _Dialog Code:  Chapter_3_0060700 ",
    "character_object_esmeray <br><br>	But others gave me hope  <br><br> _Dialog Code:  Chapter_3_0060900 ",
    "character_object_esmeray <br><br>There was a guy I went out with, and he really appreciated me. I felt seen, and loved, genuinely. For the first time in a while  <br><br> _Dialog Code:  Chapter_3_0061100 ",
    "character_object_esmeray <br><br>We ended up breaking it off because he said his parents were strict  <br><br> _Dialog Code:  Chapter_3_0061300 ",
    "character_object_esmeray <br><br>	Or at least, that�s what he said to my face  <br><br> _Dialog Code:  Chapter_3_0061500 ",
    "character_object_esmeray <br><br>	  <br><br> _Dialog Code:  Chapter_3_0061700 ",
    "character_object_player <br><br>	  <br><br> _Dialog Code:  Chapter_3_0062000 ",
    "character_object_esmeray <br><br>�Turns out he was making fun of me to his friends the entire time we were dating. I found out because this girl I knew showed me a video of him talking to her and their other friends  <br><br> _Dialog Code:  Chapter_3_0062300 ",
    "character_object_esmeray <br><br>I was heartbroken, angry� I mean, how could he blatantly lie to me like that and still be okay? Why� Why was I left with all the negatives  <br><br> _Dialog Code:  Chapter_3_0062500 ",
    "character_object_narration <br><br>You begin to pat Esmeray on the back, seeing him so sad and agitated. He calms down, thanking you quietly  <br><br> _Dialog Code:  Chapter_3_0062800 ",
    "character_object_esmeray <br><br>*inhale* Anyways, that girl and I ended up getting close because she told me about how she left the friend group and she was there for me  <br><br> _Dialog Code:  Chapter_3_0063100 ",
    "character_object_esmeray <br><br>I healed, and then I thought that maybe she was the one, ya know  <br><br> _Dialog Code:  Chapter_3_0063300 ",
    "character_object_esmeray <br><br>	But then, it went to shit  <br><br> _Dialog Code:  Chapter_3_0063600 ",
    "character_object_esmeray <br><br>This girl, she was really toxic. As in she didn�t let me see other people, but she could see a lot of others  <br><br> _Dialog Code:  Chapter_3_0063800 ",
    "character_object_esmeray <br><br>And she gaslit me often, made me emotionally dependent on her, and my mental health tanked  <br><br> _Dialog Code:  Chapter_3_0064000 ",
    "character_object_esmeray <br><br>I felt choked, and scared, and honestly, I was really disappointed: in her, myself, and just the humans around me for being so� inhumane  <br><br> _Dialog Code:  Chapter_3_0064200 ",
    "character_object_esmeray <br><br>I just� wanted to breathe again. So, I left her, left the school I was at, and transferred here. Blocked everyone I knew, and I hoped that I could start anew  <br><br> _Dialog Code:  Chapter_3_0064500 ",
    "character_object_esmeray <br><br>And I think I did, at least. No one seems to hate me here � just a lot of admiration. �But you never know  <br><br> _Dialog Code:  Chapter_3_0064800 ",
    "character_object_esmeray <br><br>So I wanted to hide everything: never get close to anyone here, never tell anyone my story� but you  <br><br> _Dialog Code:  Chapter_3_0065000 ",
    "character_object_esmeray <br><br>	You� actually seem to care for me  <br><br> _Dialog Code:  Chapter_3_0065300 ",
    "character_object_esmeray <br><br>	�Thanks, for listening  <br><br> _Dialog Code:  Chapter_3_0065500 ",
    "character_object_narration <br><br>Looks like you were right: Esmeray didn�t really have genuine friends of his own, so you decided it was time to change that  <br><br> _Dialog Code:  Chapter_3_0065800 ",
    "character_object_narration <br><br>	You make direct eye contact with Esmeray  <br><br> _Dialog Code:  Chapter_3_0066000 ",
    "character_object_esmeray <br><br>W-What? Are you gonna accuse me of being too edgy now, or something  <br><br> _Dialog Code:  Chapter_3_0066300 ",
    "character_object_player <br><br>	Nah. I just wanted to invite you again to the Radio Club  <br><br> _Dialog Code:  Chapter_3_0066600 ",
    "character_object_player <br><br>I promise we�re all nice people, and I guarantee that we�re not like those people from your past.  <br><br> _Dialog Code:  Chapter_3_0066800 ",
    "character_object_player <br><br>You can leave if you don�t feel like staying with us, no strings attached. I think it would be amazing if you join us.  <br><br> _Dialog Code:  Chapter_3_0067000 ",
    "character_object_player <br><br>Wanna give it a try  <br><br> _Dialog Code:  Chapter_3_0067200 ",
    "character_object_narration <br><br>You hold out your hand, ready to receive a handshake in agreement from Esmeray  <br><br> _Dialog Code:  Chapter_3_0067500 ",
    "character_object_narration <br><br>Esmeray stares at your hand, before his own twitches and lifts up to shake it  <br><br> _Dialog Code:  Chapter_3_0067700 ",
    "character_object_narration <br><br>Your face breaks out into a large smile. The mood immediately becomes more lighthearted  <br><br> _Dialog Code:  Chapter_3_0067900 ",
    "character_object_player <br><br>	Great! Welcome aboard, Esme  <br><br> _Dialog Code:  Chapter_3_0068200 ",
    "character_object_esmeray <br><br>	�W-wait, Esme? I did NOT agree to this, what the f  <br><br> _Dialog Code:  Chapter_3_0068500 ",
    "character_object_narration <br><br>While laughing at him, you give him a set day and time for him to come to the Radio Club, as he continues to protest against your silly, stupid nickname  <br><br> _Dialog Code:  Chapter_3_0068800 ",
    "Proceed to next scene <br><br>Proceed to next scen  <br><br> _Dialog Code:  Chapter_3_0069000 ",
    "Music Room Basic + Printer + Mic + Laptop <br><br>Music Room Basic + Printer + Mic + Lapto  <br><br> _Dialog Code:  Chapter_3_0069200 ",
    "character_object_kyo <br><br>Kyo_FP_Bruh, Atria2_Nervous, and Skye_Defaul  <br><br> _Dialog Code:  Chapter_3_0069300 ",
    "character_object_narration <br><br>Today�s finally the day  <br><br> _Dialog Code:  Chapter_3_0069600 ",
    "character_object_narration <br><br>You take a deep breath, anxiously looking at the door, trying to spot the familiar shade of dark turquoise hair  <br><br> _Dialog Code:  Chapter_3_0069800 ",
    "character_object_narration <br><br>Atria and Skye are just as nervous: Atria is fiddling with their star clips while Skye pushes up her glasses, the light reflecting off of them and covering her eyes  <br><br> _Dialog Code:  Chapter_3_0070000 ",
    "character_object_narration <br><br>In the corner stands Kyo, looking at the clock�s second hand as it moves in its consistent rhythm  <br><br> _Dialog Code:  Chapter_3_0070200 ",
    "character_object_narration <br><br>*tick tick tick tick�  <br><br> _Dialog Code:  Chapter_3_0070400 ",
    "character_object_narration <br><br>Kyo sighs  <br><br> _Dialog Code:  Chapter_3_0070600 ",
    "character_object_kyo <br><br>	When�s this guy gonna be here  <br><br> _Dialog Code:  Chapter_3_0070900 ",
    "character_object_player <br><br>	He�ll be here soon, y�all. Don�t worry  <br><br> _Dialog Code:  Chapter_3_0071200 ",
    "character_object_narration <br><br>Atria and Skye turn to look at you with relieved faces, the tense silence of the room finally broken  <br><br> _Dialog Code:  Chapter_3_0071500 ",
    "character_object_skye <br><br>	W-We�re not worried! Y-you are  <br><br> _Dialog Code:  Chapter_3_0071800 ",
    "character_object_narration <br><br>	You laugh at Skye�s poor excuse  <br><br> _Dialog Code:  Chapter_3_0072100 ",
    "character_object_player <br><br>	Haha, yeah, I am  <br><br> _Dialog Code:  Chapter_3_0072400 ",
    "character_object_narration <br><br>Before you can elaborate, you hear footsteps approaching the door  <br><br> _Dialog Code:  Chapter_3_0072700 ",
    "character_object_narration <br><br>	All heads in the room turn to the door  <br><br> _Dialog Code:  Chapter_3_0072900 ",
    "character_object_narration <br><br>	There it is: that dark turquoise hair  <br><br> _Dialog Code:  Chapter_3_0073100 ",
    "Remove all sprites <br><br>Remove all sprite  <br><br> _Dialog Code:  Chapter_3_0073300 ",
    "character_object_esmeray <br><br>Esmeray Neutral (Centered  <br><br> _Dialog Code:  Chapter_3_0073400 ",
    "character_object_narration <br><br>In walks Esmeray, his face blank, scanning the room before his eyes land on you  <br><br> _Dialog Code:  Chapter_3_0073600 ",
    "character_object_narration <br><br>Immediately, you stand up and go to his side, before making jazz hands in his direction while facing the rest of your group  <br><br> _Dialog Code:  Chapter_3_0073800 ",

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
    "character_object_player <br><br>Here he is! Y�all, I want you to meet Esme� I mean Esmeray, our school�s lovely playboy and the composer of our music for the Radio Club! Esmeray, meet the club  <br><br> _Dialog Code:  Chapter_3_0076300 ",
    "character_object_esmeray <br><br>Move Esmeray to righ  <br><br> _Dialog Code:  Chapter_3_0076500 ",
    "character_object_atria <br><br>Atria1_Happy and Skye_Smile on lef  <br><br> _Dialog Code:  Chapter_3_0076600 ",
    "character_object_narration <br><br>Atria waves shyly, while Skye pushes up her glasses further and gives a cool nod directed to Esmeray  <br><br> _Dialog Code:  Chapter_3_0076900 ",
    "character_object_atria <br><br>Remove Atria and Sky  <br><br> _Dialog Code:  Chapter_3_0077100 ",
    "character_object_kyo <br><br>Kyo_FP_Neutral on righ  <br><br> _Dialog Code:  Chapter_3_0077200 ",
    "character_object_narration <br><br>Kyo scans Esmeray up and down before looking at the chalkboard in the classroom, eyeing the UFO and smiling fondly  <br><br> _Dialog Code:  Chapter_3_0077500 ",
    "character_object_kyo <br><br>Remove Ky  <br><br> _Dialog Code:  Chapter_3_0077700 ",
    "character_object_esmeray <br><br>Esmeray Genuin  <br><br> _Dialog Code:  Chapter_3_0077800 ",
    "character_object_narration <br><br>	Esmeray raises his hand in greeting  <br><br> _Dialog Code:  Chapter_3_0078100 ",
    "character_object_esmeray <br><br>	Yo. Esmeray, he/they  <br><br> _Dialog Code:  Chapter_3_0078400 ",
    "character_object_narration <br><br>	The room goes quiet again  <br><br> _Dialog Code:  Chapter_3_0078700 ",
    "character_object_narration <br><br>You\'re really sick of trying to be an extrovert in these awkward situations  <br><br> _Dialog Code:  Chapter_3_0078900 ",
    "character_object_narration <br><br>Before you can say another word, however, Atria suddenly stands up  <br><br> _Dialog Code:  Chapter_3_0079100 ",
    "character_object_esmeray <br><br>Move Esmeray to righ  <br><br> _Dialog Code:  Chapter_3_0079300 ",
    "character_object_atria <br><br>Atria2_Happy and Skye_Smile2 on lef  <br><br> _Dialog Code:  Chapter_3_0079400 ",
    "character_object_atria <br><br>	*Ahem  <br><br> _Dialog Code:  Chapter_3_0079700 ",
    "character_object_atria <br><br>	W-WELCOME, ESMERAY, TO THE RADIO CLUB! I-I�M ATRIA, THEY/SHE  <br><br> _Dialog Code:  Chapter_3_0079900 ",
    "character_object_skye <br><br>I-I�M SKYE, SHE/THEY, AND THESE ARE MY OTHER FRIENDS AND MEMBERS OF THE CLUB. T-TREAT THEM WELL, D-DUDE  <br><br> _Dialog Code:  Chapter_3_0080200 ",
    "character_object_narration <br><br>	Skye gestures to the air next to her  <br><br> _Dialog Code:  Chapter_3_0080500 ",
    "character_object_narration <br><br>Esmeray looks at the air, then at you, with a confused expression  <br><br> _Dialog Code:  Chapter_3_0080700 ",
    "character_object_narration <br><br>	He looks back at the air, and slowly nods in greeting  <br><br> _Dialog Code:  Chapter_3_0080900 ",
    "character_object_narration <br><br>	Skye�s face brightens up  <br><br> _Dialog Code:  Chapter_3_0081100 ",
    "character_object_atria <br><br>N-Now that we�re all introduced, we will now start the induction ceremony. Player said that you would be a great ally to our cause to save humanity as we know it  <br><br> _Dialog Code:  Chapter_3_0081400 ",
    "character_object_atria <br><br>Remove Atria and Sky  <br><br> _Dialog Code:  Chapter_3_0081600 ",
    "character_object_kyo <br><br>Kyo_FP_Cheerfu  <br><br> _Dialog Code:  Chapter_3_0081700 ",
    "character_object_kyo <br><br>Lmao, you said that, Player? You\'re a weirdo too, hahaha  <br><br> _Dialog Code:  Chapter_3_0082000 ",
    "character_object_player <br><br>What? I-I didn�t say that, I think?? I  <br><br> _Dialog Code:  Chapter_3_0082300 ",
    "character_object_kyo <br><br>Remove Ky  <br><br> _Dialog Code:  Chapter_3_0082500 ",
    "character_object_atria <br><br>Atria2_Happy and Skye_Smile2 on lef  <br><br> _Dialog Code:  Chapter_3_0082600 ",
    "character_object_narration <br><br>You�re cut off by Atria, who is too busy immersing in their role right now  <br><br> _Dialog Code:  Chapter_3_0082900 ",
    "character_object_narration <br><br>Atria:  <br><br> _Dialog Code:  Chapter_3_0083100 ",
    "character_object_narration <br><br>Therefore, we have to ask you  <br><br> _Dialog Code:  Chapter_3_0083200 ",
    "character_object_skye <br><br>Esmeray, do you solemnly swear to  promise to uphold the values of honor, truth, and transparency between fellow members? To join the club and fight the dark souls of corruption of the students through the power of voice and music? To not rest, until humanity is purified of evil, deceit, and misinformation  <br><br> _Dialog Code:  Chapter_3_0083500 ",
    "character_object_narration <br><br>	The room becomes silent again after the two of them speak up  <br><br> _Dialog Code:  Chapter_3_0083800 ",
    "character_object_narration <br><br>You sweatdrop, looking at Esmeray cautiously while trying not to burst out laughing  <br><br> _Dialog Code:  Chapter_3_0084000 ",
    "character_object_atria <br><br>Remove Atria and Sky  <br><br> _Dialog Code:  Chapter_3_0084200 ",
    "character_object_esmeray <br><br>Esmeray Neutral (centered  <br><br> _Dialog Code:  Chapter_3_0084300 ",
    "character_object_narration <br><br>	Esmeray�s face is blank, eyeing the two in front of him  <br><br> _Dialog Code:  Chapter_3_0084600 ",
    "character_object_narration <br><br>Suddenly, he lets out a low chuckle, which gradually becomes louder until he�s almost cackling  <br><br> _Dialog Code:  Chapter_3_0084800 ",
    "character_object_esmeray <br><br>	�Pft  <br><br> _Dialog Code:  Chapter_3_0085100 ",
    "character_object_esmeray <br><br>	�PuhahaA� PftahaHAHA  <br><br> _Dialog Code:  Chapter_3_0085300 ",
    "character_object_esmeray <br><br>	AHAhaAHahaha  <br><br> _Dialog Code:  Chapter_3_0085600 ",
    "character_object_esmeray <br><br>	�Pft  <br><br> _Dialog Code:  Chapter_3_0085800 ",
    "character_object_esmeray <br><br>	  <br><br> _Dialog Code:  Chapter_3_0086100 ",
    "character_object_esmeray <br><br>S-Sure, I�ll join the club and fight the dark souls of corruption of the students through the power of the club or whatever. This�ll be fun  <br><br> _Dialog Code:  Chapter_3_0086300 ",
    "character_object_esmeray <br><br>Esmeray Teeth Smil  <br><br> _Dialog Code:  Chapter_3_0086500 ",
    "character_object_narration <br><br>On Esmeray�s face is a wide, genuine smile as he continues to laugh  <br><br> _Dialog Code:  Chapter_3_0086800 ",
    "character_object_narration <br><br>Atria and Skye are in shock, while Kyo starts to laugh along with Esmeray  <br><br> _Dialog Code:  Chapter_3_0087000 ",
    "character_object_esmeray <br><br>Move Esmeray to righ  <br><br> _Dialog Code:  Chapter_3_0087200 ",
    "character_object_atria <br><br>Skye_Smile2 and Atria2_Smile on lef  <br><br> _Dialog Code:  Chapter_3_0087300 ",
    "character_object_skye <br><br>H-Hey! It�s true, the dark souls exist and need to be taken down  <br><br> _Dialog Code:  Chapter_3_0087600 ",
    "character_object_narration <br><br>	As she talks, Skye motions a punch into her palm  <br><br> _Dialog Code:  Chapter_3_0087900 ",
    "character_object_atria <br><br>Y-Yeah! Don�t underestimate our drive to help the poor students of ILUNA Academy  <br><br> _Dialog Code:  Chapter_3_0088200 ",
    "character_object_narration <br><br>	Esmeray just nods, as if he is in total agreement  <br><br> _Dialog Code:  Chapter_3_0088500 ",
    "character_object_narration <br><br>Atria and Skye continue to talk loudly, and eventually the three of them start to converse about their interests and such  <br><br> _Dialog Code:  Chapter_3_0088700 ",
    "character_object_narration <br><br>You watch the scene fondly. Finally, the club is complete  <br><br> _Dialog Code:  Chapter_3_0088900 ",
    // end-of-CHAPTER-3-mark
    'jump CHAPTER_E'
  ],

  'CHAPTER_E': [
    'chap E',
    // start-of-CHAPTER-E-mark
    "_Name <br><br>_Tex  <br><br> _Dialog Code:  _DialogCode ",
    " <br><br>Epilogue: Waning Iridescent  <br><br> _Dialog Code:  Chapter_E_0000100 ",
    "Music Room Basic All <br><br>Music Room Basic Al  <br><br> _Dialog Code:  Chapter_E_0000300 ",
    "Outro BGM <br><br>Outro BG  <br><br> _Dialog Code:  Chapter_E_0000400 ",
    "character_object_narration <br><br>After finally registering the club last week, you walk into the radio club classroom with a little bounce in your steps. It\'s the first official radio club meeting today, and you�re excited!  <br><br> _Dialog Code:  Chapter_E_0000700 ",
    "character_object_narration <br><br>You look at the notes you wrote on your phone to remember what you�re discussing with all the club members. It�s simple enough: assign roles to the club members and finalize the plan for future activities  <br><br> _Dialog Code:  Chapter_E_0000900 ",
    "character_object_narration <br><br>Now you just need to wait for them to show up. They didn�t forget about you telling them earlier in the day to meet you at lunch, right? You hope not  <br><br> _Dialog Code:  Chapter_E_0001100 ",
    "character_object_narration <br><br>Speaking of showing up, will Kyo even be here? You weren�t even able to tell him all the good news, because you haven�t seen him all day. Well, it�s on him for choosing to miss this momentous occasion  <br><br> _Dialog Code:  Chapter_E_0001300 ",
    "character_object_narration <br><br>The door opens  <br><br> _Dialog Code:  Chapter_E_0001500 ",
    "character_object_atria <br><br>Atria1_happy, lef  <br><br> _Dialog Code:  Chapter_E_0001700 ",
    "character_object_atria <br><br>I�m here  <br><br> _Dialog Code:  Chapter_E_0002000 ",
    "Skye_smile, center <br><br>Skye_smile, cente  <br><br> _Dialog Code:  Chapter_E_0002200 ",
    "character_object_skye <br><br>And so am I  <br><br> _Dialog Code:  Chapter_E_0002500 ",
    "character_object_player <br><br>Now, where the heck is Esme  <br><br> _Dialog Code:  Chapter_E_0002800 ",
    "character_object_esmeray <br><br>Esmeray_neutral, righ  <br><br> _Dialog Code:  Chapter_E_0003000 ",
    "character_object_esmeray <br><br>My bad. Had to shake off my fans, but I�m good now.  <br><br> _Dialog Code:  Chapter_E_0003300 ",
    "character_object_skye <br><br>Pssh, okay, Mr. Famous  <br><br> _Dialog Code:  Chapter_E_0003600 ",
    "character_object_player <br><br>You sure they�re not gonna follow you  <br><br> _Dialog Code:  Chapter_E_0003900 ",
    "character_object_esmeray <br><br>I mean, more club members, am I right  <br><br> _Dialog Code:  Chapter_E_0004200 ",
    "character_object_narration <br><br>The three of you stare at him  <br><br> _Dialog Code:  Chapter_E_0004500 ",
    "character_object_esmeray <br><br>Okay, okay, I�m just kidding. I was a little late finishing my classwork. I�ll be early next time  <br><br> _Dialog Code:  Chapter_E_0004800 ",
    "character_object_player <br><br>I�ll hold you to that  <br><br> _Dialog Code:  Chapter_E_0005100 ",
    "character_object_narration <br><br>Esmeray laughs  <br><br> _Dialog Code:  Chapter_E_0005400 ",
    "character_object_player <br><br>Alright y�all, we got business to take care of. First, we gotta decide what our roles are  <br><br> _Dialog Code:  Chapter_E_0005700 ",
    "character_object_skye <br><br>Well, it�s obvious what you�re gonna be. Club president!  <br><br> _Dialog Code:  Chapter_E_0006000 ",
    "character_object_narration <br><br>You put your hands on your hips  <br><br> _Dialog Code:  Chapter_E_0006300 ",
    "character_object_player <br><br>Yup! I�ll be doing more of the behind-the-scenes stuff. As for the other roles�  <br><br> _Dialog Code:  Chapter_E_0006600 ",
    "character_object_skye <br><br>I�ve already decided  <br><br> _Dialog Code:  Chapter_E_0006900 ",
    "character_object_player <br><br>Wait, I haven\'t even said what the other roles are yet  <br><br> _Dialog Code:  Chapter_E_0007200 ",
    "character_object_skye <br><br>Well, you�re gonna need someone to write scripts, right? Then I�ll do it  <br><br> _Dialog Code:  Chapter_E_0007500 ",
    "character_object_player <br><br>Sounds good.  <br><br> _Dialog Code:  Chapter_E_0007800 ",
    "character_object_skye <br><br>I can also get the latest scoops on what�s going around at school. The janitor�s closet is quite handy for getting a hold of hot tea, you know  <br><br> _Dialog Code:  Chapter_E_0008100 ",
    "character_object_player <br><br>Can you handle doing both  <br><br> _Dialog Code:  Chapter_E_0008400 ",
    "character_object_skye <br><br>Hell yeah, brother  <br><br> _Dialog Code:  Chapter_E_0008700 ",
    "character_object_narration <br><br>You flash a smile. This is already going pretty smoothly  <br><br> _Dialog Code:  Chapter_E_0009000 ",
    "character_object_player <br><br>Now, Esmeray  <br><br> _Dialog Code:  Chapter_E_0009300 ",
    "character_object_esmeray <br><br>Hm  <br><br> _Dialog Code:  Chapter_E_0009600 ",
    "character_object_player <br><br>You�ll be in charge of making little jingles before and after we�re done announcing and stuff. Oh, and I�m thinking we could add music segments in our broadcasts too.  <br><br> _Dialog Code:  Chapter_E_0009900 ",
    "character_object_esmeray <br><br>You got it  <br><br> _Dialog Code:  Chapter_E_0010200 ",
    "character_object_narration <br><br>Esmeray takes out a small notebook. He starts writing and humming to himself  <br><br> _Dialog Code:  Chapter_E_0010500 ",
    "character_object_player <br><br>And finally, Atria, you�ll be the one on the speakers!  <br><br> _Dialog Code:  Chapter_E_0010800 ",
    "character_object_atria <br><br>Um, are you sure? I�m not that loud and confident yet  <br><br> _Dialog Code:  Chapter_E_0011100 ",
    "character_object_player <br><br>You don�t have to be the only speaker of course. We can do it together  <br><br> _Dialog Code:  Chapter_E_0011400 ",
    "character_object_narration <br><br>Atria slowly regains her smile  <br><br> _Dialog Code:  Chapter_E_0011700 ",
    "character_object_atria <br><br>That�d be easier for me. Thank you  <br><br> _Dialog Code:  Chapter_E_0012000 ",
    "character_object_player <br><br>Alright, now we gotta think of our future plans for this club  <br><br> _Dialog Code:  Chapter_E_0012300 ",
    "character_object_atria <br><br>Actually, is it okay if I suggest something  <br><br> _Dialog Code:  Chapter_E_0012600 ",
    "character_object_player <br><br>Of course  <br><br> _Dialog Code:  Chapter_E_0012900 ",
    "character_object_atria <br><br>It�s Back to School Night next week. The staff wants clubs to help out with the concessions.  <br><br> _Dialog Code:  Chapter_E_0013200 ",
    "character_object_player <br><br>Then we should join! So, are we all free to help out with the concessions next week  <br><br> _Dialog Code:  Chapter_E_0013500 ",
    "character_object_narration <br><br>The other three club members say yes  <br><br> _Dialog Code:  Chapter_E_0013800 ",
    "character_object_player <br><br>Alright, we�re done then.  <br><br> _Dialog Code:  Chapter_E_0014100 ",
    "character_object_narration <br><br>Happiness feels like it\'s going to burst out of your chest. It really feels like an actual club now. No wait, it�s not just a club. It feels like you have a friend group for real too. You wonder if everyone\'s down for a group hug before they leave  <br><br> _Dialog Code:  Chapter_E_0014400 ",
    "character_object_narration <br><br>You open your arms wide  <br><br> _Dialog Code:  Chapter_E_0014600 ",
    "character_object_player <br><br>I know this is out of nowhere but� Who�s down for a group hug?  <br><br> _Dialog Code:  Chapter_E_0014900 ",
    "character_object_atria <br><br>Huh  <br><br> _Dialog Code:  Chapter_E_0015200 ",
    "Skye Skye_smile2 <br><br>Heh, sure, why not. Come on, get over here, Atria  <br><br> _Dialog Code:  Chapter_E_0015500 ",
    "character_object_esmeray <br><br>Wait, we�re actually doing this? Hold on a minute  <br><br> _Dialog Code:  Chapter_E_0015800 ",
    "Group hug CG  <br><br>Group hug CG  <br><br> _Dialog Code:  Chapter_E_0016000 ",
    "character_object_player <br><br>Hehe, thanks y�all. If only Kyo was here to join in the hug too. He�s the one who started the club, after all  <br><br> _Dialog Code:  Chapter_E_0016300 ",
    "Group hug CG ends. <br><br>Group hug CG ends  <br><br> _Dialog Code:  Chapter_E_0016500 ",
    "character_object_narration <br><br>All of the club members back up and stare at you in confusion  <br><br> _Dialog Code:  Chapter_E_0016800 ",
    "character_object_esmeray <br><br>Who�s Kyo  <br><br> _Dialog Code:  Chapter_E_0017100 ",
    "character_object_player <br><br>Kyo. You know, the radio club president before I took over his role? Bright blue hair like cotton candy. Very munchable. It�s hard to miss.  <br><br> _Dialog Code:  Chapter_E_0017400 ",
    "character_object_atria <br><br>I�ve never heard of him  <br><br> _Dialog Code:  Chapter_E_0017700 ",
    "character_object_player <br><br>But you all met him before! You all talked to him and everything. Are you all messing with me  <br><br> _Dialog Code:  Chapter_E_0018000 ",
    "Skye Skye_smile <br><br>Oh, I get it. He�s the friend you were talking to before.  <br><br> _Dialog Code:  Chapter_E_0018300 ",
    "character_object_player <br><br>Yeah!  <br><br> _Dialog Code:  Chapter_E_0018600 ",
    "Skye Skye_default <br><br>Like the ones I used to talk to inside the locker, right  <br><br> _Dialog Code:  Chapter_E_0018900 ",
    "character_object_player <br><br>Yeah, yeah! Wait, no! What the hell, do you guys genuinely not know?  <br><br> _Dialog Code:  Chapter_E_0019200 ",
    "character_object_narration <br><br>You don�t get much of a response  <br><br> _Dialog Code:  Chapter_E_0019500 ",
    "character_object_player <br><br>Never mind, forget it. I�m imagining things, hehe  <br><br> _Dialog Code:  Chapter_E_0019800 ",
    "character_object_narration <br><br>The lunch bell rings, and all of you part ways as you wave to each other. Your smile then fades. What do they mean, they don�t know who Kyo is? You walk to your next class with a resting bitch face to mask your casual existential crisis.  <br><br> _Dialog Code:  Chapter_E_0020100 ",
    "Scene ends <br><br>Scene end  <br><br> _Dialog Code:  Chapter_E_0020300 ",
    "School Hallway Night <br><br>School Hallway Nigh  <br><br> _Dialog Code:  Chapter_E_0020500 ",
    "character_object_narration <br><br>It\'s Back To School Night. You go back and forth from your mom\'s car to carry water bottles to the venue. It takes just a few trips but the weight tires out your arms. Thank god that you\'re not in any of the sports clubs  <br><br> _Dialog Code:  Chapter_E_0020800 ",
    "character_object_narration <br><br>As you rest on a nearby bench, you see something colorful faintly glowing bright on the ground. It looks like a poorly drawn hand doing a peace sign. The pain is real. Hands are the bane of every artist�s existence.  <br><br> _Dialog Code:  Chapter_E_0021000 ",
    "character_object_narration <br><br>�Wait, this looks like the work of Kyo  <br><br> _Dialog Code:  Chapter_E_0021200 ",
    "character_object_narration <br><br>As quickly as you notice the symbol, it disappears  <br><br> _Dialog Code:  Chapter_E_0021400 ",
    "character_object_narration <br><br>That is the only sign you\'ve seen of him in school all week. What the hell is he up to?  <br><br> _Dialog Code:  Chapter_E_0021600 ",
    "character_object_narration <br><br>Looking up ahead, you see more graffiti symbols in the distance, scattered far apart in a way that beckons you to follow them. When you try to get near the symbols, they disappear as well. Oh boy, do you have some questions to ask him when you see him  <br><br> _Dialog Code:  Chapter_E_0021800 ",
    "School Rooftop Night <br><br>School Rooftop Nigh  <br><br> _Dialog Code:  Chapter_E_0022000 ",
    "character_object_narration <br><br>You follow the path until you arrive at the school\'s rooftop.  <br><br> _Dialog Code:  Chapter_E_0022300 ",
    "character_object_narration <br><br>There he is, spray painting symbols on the ground all around him in a circle. They vanish into thin air  <br><br> _Dialog Code:  Chapter_E_0022500 ",
    "character_object_narration <br><br>You call out to him.   <br><br> _Dialog Code:  Chapter_E_0022700 ",
    "character_object_player <br><br>Kyo  <br><br> _Dialog Code:  Chapter_E_0023000 ",
    "character_object_kyo <br><br>Kyo_FP_Shocke  <br><br> _Dialog Code:  Chapter_E_0023200 ",
    "character_object_narration <br><br>Kyo turns around.  <br><br> _Dialog Code:  Chapter_E_0023500 ",
    "character_object_kyo <br><br>Oh shit, hi Player  <br><br> _Dialog Code:  Chapter_E_0023800 ",
    "character_object_player <br><br>Where have you been? I haven\'t seen you in school all week  <br><br> _Dialog Code:  Chapter_E_0024100 ",
    "character_object_kyo <br><br>Um, about that..  <br><br> _Dialog Code:  Chapter_E_0024400 ",
    "character_object_narration <br><br>He shakes his spray paint can but doesn\'t use it. He looks back and forth between his spray can, the moon above, and you as if he\'s contemplating his next move. He sighs  <br><br> _Dialog Code:  Chapter_E_0024700 ",
    "character_object_kyo <br><br>You weren\'t supposed to come here.  <br><br> _Dialog Code:  Chapter_E_0025000 ",
    "character_object_player <br><br>But you left a paint trail  <br><br> _Dialog Code:  Chapter_E_0025300 ",
    "character_object_kyo <br><br>That wasn\'t really a trail. I didn\'t think you\'d... Damn it, I was supposed to leave before you saw me  <br><br> _Dialog Code:  Chapter_E_0025600 ",
    "character_object_player <br><br>Wait, you\'re leaving? What\'s going on  <br><br> _Dialog Code:  Chapter_E_0025900 ",
    "character_object_kyo <br><br>You know what, fuck it. I\'m not going yet. \'Cause I don\'t even know where to begin explaining everything  <br><br> _Dialog Code:  Chapter_E_0026200 ",
    "character_object_narration <br><br>He\'s right. You have too many questions.  <br><br> _Dialog Code:  Chapter_E_0026500 ",
    "character_object_narration <br><br>You remember the confused faces of the club members from last week  <br><br> _Dialog Code:  Chapter_E_0026700 ",
    "character_object_player <br><br>Kyo, you\'re... real, right  <br><br> _Dialog Code:  Chapter_E_0027000 ",
    "character_object_narration <br><br>Kyo busts out a quick laugh  <br><br> _Dialog Code:  Chapter_E_0027300 ",
    "character_object_kyo <br><br>Nah you\'re just imagining me in your head. Wake up. It\'s been years since the accident  <br><br> _Dialog Code:  Chapter_E_0027600 ",
    "character_object_player <br><br>Kyo, I\'m serious. None of the club members see or hear you except me. They don\'t even know who you are. Why? Are you a ghost? Who and what even are you  <br><br> _Dialog Code:  Chapter_E_0027900 ",
    "character_object_narration <br><br>Kyo lets out a deep sigh  <br><br> _Dialog Code:  Chapter_E_0028200 ",
    "character_object_kyo <br><br>I don\'t actually go here. I used to, but it was a long time ago  <br><br> _Dialog Code:  Chapter_E_0028500 ",
    "character_object_player <br><br>Why are you here then  <br><br> _Dialog Code:  Chapter_E_0028800 ",
    "character_object_kyo <br><br>Kyo C  <br><br> _Dialog Code:  Chapter_E_0029000 ",
    "character_object_kyo <br><br>To help you make friends  <br><br> _Dialog Code:  Chapter_E_0029300 ",
    "character_object_narration <br><br>Your eyes widen  <br><br> _Dialog Code:  Chapter_E_0029600 ",
    "character_object_player <br><br>How\'d you know I wanted to...  <br><br> _Dialog Code:  Chapter_E_0029900 ",
    "character_object_kyo <br><br>You\'re the reason I opened up the radio club in the first place.  <br><br> _Dialog Code:  Chapter_E_0030200 ",
    "character_object_player <br><br>Huh?! Wait, then you were the only club member on purpose  <br><br> _Dialog Code:  Chapter_E_0030500 ",
    "character_object_kyo <br><br>Haha, yup  <br><br> _Dialog Code:  Chapter_E_0030800 ",
    "character_object_player <br><br>I\'m still not over you forcing me to do free labor though  <br><br> _Dialog Code:  Chapter_E_0031100 ",
    "character_object_kyo <br><br>It\'s better if you initiate these friendships on your own. I\'m just here to make sure you stay on track. You\'re the lonely one here, not me  <br><br> _Dialog Code:  Chapter_E_0031400 ",
    "character_object_narration <br><br>You roll your eyes.  <br><br> _Dialog Code:  Chapter_E_0031700 ",
    "character_object_kyo <br><br>You\'re not even gonna thank me?!  <br><br> _Dialog Code:  Chapter_E_0032000 ",
    "character_object_player <br><br>I still have more questions for you, funny man  <br><br> _Dialog Code:  Chapter_E_0032300 ",
    "character_object_kyo <br><br>Okay, shoot  <br><br> _Dialog Code:  Chapter_E_0032600 ",
    "character_object_player <br><br>If you\'ve been a student here, why does no one remember you at all  <br><br> _Dialog Code:  Chapter_E_0032900 ",
    "character_object_kyo <br><br>That\'s because I don\'t exist in your reality anymore. I live in another universe  <br><br> _Dialog Code:  Chapter_E_0033200 ",
    "character_object_player <br><br>You\'re an alien?  <br><br> _Dialog Code:  Chapter_E_0033500 ",
    "character_object_kyo <br><br>Okay no, but I know someone else who is. Anyways, I was isekai\'d a while ago. But just recently, I\'ve been blessed by the moon, so now I\'m able to travel between your reality and mine  <br><br> _Dialog Code:  Chapter_E_0033800 ",
    "character_object_kyo <br><br>The problem is, I\'m still learning how to use this power. So it\'s not perfect. It\'s kinda weird actually. Right now, I\'m like in a world between yours and mine. I can\'t really see you, only the outline of you.  <br><br> _Dialog Code:  Chapter_E_0034000 ",
    "character_object_narration <br><br>Kyo pauses for a bit as if he\'s thinking  <br><br> _Dialog Code:  Chapter_E_0034300 ",
    "character_object_kyo <br><br>Give me a high-five  <br><br> _Dialog Code:  Chapter_E_0034600 ",
    "character_object_player <br><br>For what  <br><br> _Dialog Code:  Chapter_E_0034900 ",
    "character_object_kyo <br><br>For being able to keep up with me. You know, since I speak so fast  <br><br> _Dialog Code:  Chapter_E_0035200 ",
    "character_object_player <br><br>O...kay  <br><br> _Dialog Code:  Chapter_E_0035500 ",
    "character_object_narration <br><br>When you go high-five Kyo, your hand goes through his like air. You don\'t feel him at all  <br><br> _Dialog Code:  Chapter_E_0035800 ",
    "character_object_narration <br><br>You stand there in silence, flabbergasted. A realization hits you  <br><br> _Dialog Code:  Chapter_E_0036000 ",
    "character_object_player <br><br>So you\'re the one haunting this school  <br><br> _Dialog Code:  Chapter_E_0036300 ",
    "character_object_kyo <br><br>Wait, what  <br><br> _Dialog Code:  Chapter_E_0036600 ",
    "character_object_player <br><br>Dude, did you not know? The paranormal activity club has been obsessed with you for a long time now. They\'ve been trying to contact you and everything.  <br><br> _Dialog Code:  Chapter_E_0036900 ",
    "character_object_kyo <br><br>They can\'t see me, right  <br><br> _Dialog Code:  Chapter_E_0037200 ",
    "character_object_player <br><br>That\'s not what I mean. But there\'s been ghost-like activity happening around school. I think you have something to do with it  <br><br> _Dialog Code:  Chapter_E_0037500 ",
    "character_object_kyo <br><br>Shit, my bad. Didn\'t mean to  <br><br> _Dialog Code:  Chapter_E_0037800 ",
    "character_object_player <br><br>If only they knew I was talking to a ghost the entire time. Wait, I don\'t think anybody heard you speak either. Not even the club members. Except me. What the hell  <br><br> _Dialog Code:  Chapter_E_0038100 ",
    "character_object_kyo <br><br>You\'re the one I was assigned to help  <br><br> _Dialog Code:  Chapter_E_0038400 ",
    "character_object_player <br><br>Assigned  <br><br> _Dialog Code:  Chapter_E_0038700 ",
    "character_object_kyo <br><br>By the moon. Who also gave me my powers. I think that�s why you�re also the only person who can see and hear me. Consider yourself lucky.  <br><br> _Dialog Code:  Chapter_E_0039000 ",
    "character_object_player <br><br>I was chosen? Wow..  <br><br> _Dialog Code:  Chapter_E_0039300 ",
    "character_object_kyo <br><br>But I\'m running out of time. Now, I won\'t exist in this reality again. For real this time  <br><br> _Dialog Code:  Chapter_E_0039600 ",
    "character_object_narration <br><br>The school bell rings. School Bell SF  <br><br> _Dialog Code:  Chapter_E_0039900 ",
    "character_object_kyo <br><br>Go. Your friends are waiting for you  <br><br> _Dialog Code:  Chapter_E_0040200 ",
    "character_object_narration <br><br>Kyo sets up his exit  <br><br> _Dialog Code:  Chapter_E_0040500 ",
    "character_object_player <br><br>Wait! Before you go..  <br><br> _Dialog Code:  Chapter_E_0040800 ",
    "character_object_player <br><br>Thank you. For everything  <br><br> _Dialog Code:  Chapter_E_0041000 ",
    "character_object_narration <br><br>Kyo looks back one last time and smiles  <br><br> _Dialog Code:  Chapter_E_0041300 ",
    "character_object_kyo <br><br>Fade out Kyo, use the Kyo_BG in his special scene folde  <br><br> _Dialog Code:  Chapter_E_0041500 ",
    "Game end <br><br>Game en  <br><br> _Dialog Code:  Chapter_E_0041700 ",
    "Go to credits <br><br>Go to credit  <br><br> _Dialog Code:  Chapter_E_0041900 ",
    // end-of-CHAPTER-E-mark
    'end'
  ],

  // placeholder here
  'END': [

  ],

});
