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
  Content_Warnings: {
    title: "Content Warnings",
    body: `
      <p>The characters in this visual novel have gone through experiences that may be sensitive or triggering to others.</p>
      <p>This includes: <b>toxic relationships, bullying, mentions of abuse, mentions of emotional manipulation, and references to suicide</b>.</p>
      <p>These topics are not explicitly described, but are mentioned in the characters' backstories. If you are uncomfortable with these topics, then please proceed with caution and ensure that your own comfort and safety is prioritized.</p>
    `,
  }
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
monogatari.assets("music", {

  
  'EsmerayMaster_1' : '/aefen/EsmerayMaster_1.wav', 
  'Opening_closing_VINTAGE' : '/aefen/Opening_closing_VINTAGE.wav', 
  'SkyeMaster' : '/aefen/SkyeMaster.wav',

  'Atria_intro' :'/stickthefigure/Atria_intro.wav' ,
  'Atria_loop' :'/stickthefigure/Atria_loop.wav' ,
  'intro_intro' :'/stickthefigure/intro_intro.wav' ,
  'intro_loop' :'/stickthefigure/intro_loop.wav' ,
  'sad_intro' :'/stickthefigure/sad_intro.wav',
  // 'sad_loop' :'music/stickthefigure/sad_loop.wav',


});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {

  'Running_SFX_Atria' : 'Running_SFX_Atria.mp3',
  'Walking_SFX_Esme' : 'Walking_SFX_Esme.mp3',
  'school_bell_sfx' : 'school_bell_sfx_2.mp3',
});

// Define the videos used in the game.
monogatari.assets("videos", {

  'background_loop' : 'background_loop.mp4'
});

// Define the images used in the game.
monogatari.assets("images", {

  'radio_club_poster': 'RadioClub.png',
  'wallposter': 'wallposter.png',
});


// Define the backgrounds for each scene.
monogatari.assets("scenes", {


  'Atria_CG': 'special_scenes/Final/Atria_CG.jpg',
  'Esmeray_CG': 'special_scenes/Final/Esmeray_CG.png',

  'kyo_bg': 'special_scenes/Final/Kyo_CG/kyo-bg.png',
  'kyo_cg': 'special_scenes/Final/Kyo_CG/kyo-cg.png',
  'kyo_cg2': 'special_scenes/Final/Kyo_CG/kyo-cg2.png',
  'kyo_sparkle': 'special_scenes/Final/Kyo_CG/kyo-sparkle.png',

  'skye_cg': 'special_scenes/Final/Skye_CG/Tak_berjudul85_20230701211359.png',
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
  'music_room_basic_printer': 'Backgrounds/Final/Music_Room_BG_assets/music_room_basic_printer.png',
  'music_room_basic_printer_mic_laptop': 'Backgrounds/Final/Music_Room_BG_assets/music_room_basic_printer_mic_laptop.png',

  'Rooftop_bg_day': 'Backgrounds/Final/Rooftop/Rooftop_bg_day.jpeg',
  'Rooftop_bg_night': 'Backgrounds/Final/Rooftop/Rooftop_bg_night.jpeg',

  'school_hallway_daylight': 'Backgrounds/Final/School_Hallway/school_hallway_daylight.png',
  'school_hallway_evening': 'Backgrounds/Final/School_Hallway/school_hallway_evening.png',

  'generic_classroom_bg': 'Backgrounds/Final/generic_classroom_bg_daylight.png',
  'black_screen': 'Backgrounds/Final/black_screen.png',

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
  'character_object_???_atria': {
    name: "???",
    color: "#912756",
    directory: 'Atria',
    sprites: {
      atria1_nervous: 'atria1_nervous.png',
      atria2_happy: 'atria2_happy.png',
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
      Kyo_FP_Cheerful: 'FrontPose/Kyo_FP_Cheerful.png',
      Kyo_FP_Default: 'FrontPose/Kyo_FP_Default.png',
      Kyo_FP_Sad: 'FrontPose/Kyo_FP_Sad.png',
      Kyo_FP_Shocked: 'FrontPose/Kyo_FP_Shocked.png',
      Kyo_FP_Smiling: 'FrontPose/Kyo_FP_Smiling.png',
      Kyo_SP_Bruh: 'SidePose/Kyo_SP_Bruh.png',
      Kyo_SP_Default: 'SidePose/Kyo_SP_Default.png',
      Kyo_SP_Sad: 'SidePose/Kyo_SP_Sad.png',
    }
  },
  'character_object_???_kyo': {
    name: "???",
    color: "#005766",
    directory: 'Kyo',
    sprites: {
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
  'character_object_???_skye': {
    name: "???",
    color: "#890F0F",
    directory: 'Skye',
    sprites: {
    }
  },
  'character_object_closet_skye': {
    name: "Girl in the Closet",
    color: "#890F0F",
    directory: 'Skye',
    sprites: {
    }
  },
  'character_object_no_closet_skye': {
    name: "Girl No Longer in Closet",
    color: "#890F0F",
    directory: 'Skye',
    sprites: {
    }
  },
  'character_object_player': {
    name: "_Player",
    color: "#2E72C1",
  },
  'character_object_narration': {
    name: "Narration",
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

    "show video background_loop background loop animate__animated animate__fadeIn animate__faster",

    // Content warnings
    // to remove the text box in the background temporarily + frame
    {'Function':{
			'Apply': function () {
				const textbox = document.querySelector('[data-component="text-box"]');
				textbox.style.display = "none";
        const frame = document.querySelector('.frame-game');
        frame.style.display = "none";
				return true;
			},
			'Reverse': function () {
				const textbox = document.querySelector('[data-component="text-box"]');
				textbox.style.removeProperty("display");
        const frame = document.querySelector('.frame-game');
        frame.style.removeProperty("display");
			}
		}},
    'show message Content_Warnings',
    // input name
    {
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					if (input.trim().toUpperCase() == "KYO") {
						alert("Sorry there can only be one Kyo, and it ain't you buddy");
						return false;
					}
          if (input.trim().length > 19) {  
            return false;
          }
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a valid name! (1-19 characters)'
			}
		},
    {'Function': {
      'Apply': function () {
        monogatari.characters({
          'character_object_player': {
            name: monogatari.storage('player').name,
            color: "#2E72C1",
          }
        });
        return true;
      },

      'Reverse': function () {
        
      }
    }},
    // put back frame
    {'Function':{
			'Apply': function () {
				const frame = document.querySelector('.frame-game');
        frame.style.removeProperty("display");
				return true;
			},
			'Reverse': function () {
				const frame = document.querySelector('.frame-game');
        frame.style.display = "none";
			}
		}},
    // chapter title
    "centered <img class=\"logo-img\" src=\"assets/fromfigma/logo.png\"><div class=\"chapter-title-wrapper\"><p class=\"chapter-title typed\">Prologue: Waxing Iridescent</p></div><p class=\"click-to-start\">Click anywhere to start</p>",

    "hide video background_loop animate__animated animate__fadeOut animate__faster",

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



// 'play music Atria_intro  with loop',
// 'play music intro_intro  with loop',
// 'play music sad_intro with loop', 
// 'play music EsmerayMaster_1  with loop',
// 'play music Opening_closing_VINTAGE with loop', 
// 'play music SkyeMaster with loop',

// 'stop music Atria_intro  with loop',
// 'stop music intro_intro  with loop',
// 'stop music sad_intro with loop', 
// 'stop music EsmerayMaster_1  with loop',
// 'stop music Opening_closing_VINTAGE with loop', 
// 'stop music SkyeMaster with loop', 




    // {
    //   'Choice': {
    //     'Dialog': 'Jump to certain chapter? \
		// 		<br>\
		// 		 (This for developer to use. Delete in actual relesase.)\
		// 		<br>\
		// 		 (top of script.js)',

    //     'CHAPTER_0': {
    //       'Text': 'CHAPTER_0',
    //       'Do': 'jump CHAPTER_0'
    //     },
    //     'CHAPTER_1': {
    //       'Text': 'CHAPTER_1',
    //       'Do': 'jump CHAPTER_1'
    //     },
    //     'CHAPTER_2': {
    //       'Text': 'CHAPTER_2',
    //       'Do': 'jump CHAPTER_2'
    //     },
    //     'CHAPTER_3': {
    //       'Text': 'CHAPTER_3',
    //       'Do': 'jump CHAPTER_3'
    //     },
    //     'CHAPTER_E': {
    //       'Text': 'CHAPTER_E',
    //       'Do': 'jump CHAPTER_E'
    //     },
    //     'END': {
    //       'Text': 'END',
    //       'Do': 'jump END'
    //     }
    //   }
    // },
    
    'jump CHAPTER_0'
  ],

  'CHAPTER_0': [
    
    // start-of-CHAPTER-0-mark

    // "School hallway day School hallway da ",
    "show scene school_hallway_daylight with fadeIn duration 500ms",

    // "Intro Music Intro Musi ",
    'play music intro_loop  with loop',

    "character_object_narration It\'s lunch break at school, but the atmosphere is livelier than usual. Oh right, it\'s Club Day today. You still can\'t decide which club you want to join this year. ",
    "character_object_narration You stop walking the hallways to look at the board of various club posters. Oh man, you\'ve never joined one before, so the amount of options overwhelm you a little. ",
    "character_object_narration You think of just joining multiple clubs at a time, but you quickly brush off that thought. Clubs are supposed to be a good break from the humdrum of academics. Don\'t get ahead of yourself.",
    "character_object_narration There\'s an art club poster. That\'s a hard no. The most artistic you\'ve ever been was when you colored the sky a solid green and the ground magenta. Only because the other crayons were missing. And that was in a coloring book. Not fun at all. ",
    "character_object_narration There are also a few posters advertising different sports clubs. No thanks. P.E. class already tires you out daily. There\'s no way you have the endurance to do that kind of stuff in your precious free time. ",
    "character_object_narration Oh god, there\'s also the paranormal activity club. No way. Nope. ",
    "character_object_narration You don\'t take the supernatural as seriously as its club members do. You know this because earlier at brunch today, the club advertised by telling ghost stories that were, in their own words, \"real, not clickbait.\" ",
    "character_object_narration One of them even said, \"In fact, there\'s a ghost in this school right now, giving bad luck to people who are about to do presentations!\" Nonsense. You\'re a junior and you are damn sure that there were no ghosts the entire time you attended school. ",
    "character_object_narration It would be fine if the club was interested in ghosts just for fun, but their fervent attitude says otherwise. You shudder at the thought of even talking to them. ",
    "character_object_narration Ooh, a debate club poster. You don\'t consider yourself a chatterbox, but it\'s always fascinating to listen to other people\'s perspectives and find ways to decimate their arguments. ",
    "character_object_narration It\'s basically a fun way to talk shit to others. Well, for the most part, save for some annoyingly serious people... ",
    "character_object_narration Damn, besides the debate club, it looks like you don\'t have many good options here. ",
    "character_object_narration Wait, what\'s with that poster over there? ",
    
    // "Radio club poster (wall poster). ",
    'show image radio_club_poster center with fadeIn',
    // Allow toggle for zoom in to the RadioClub.png in Art folder. Radio club poster (wall poster). Allow toggle for zoom in to the RadioClub.png in Art folder ",
    
    
    "character_object_narration It advertises... a radio club? Interesting. Teachers love to praise your diction and confidence in your class presentations. This could be worth a try. ",
    "character_object_narration You enter a nearby room with the radio club sign on its door. ",


    // "Music_Room_Basic Music_Room_Basi ",
    "show scene music_room_basic with fadeIn",
    
    // "character_object_kyo Kyo_BP_Defaul ",
    'show character character_object_kyo Kyo_BP_Default normal with fadeIn',

    // "Centered Centere ",
    "character_object_narration There\'s only one student here. Yet, you can tell that you\'re in the right place. Her appearance is just as colorful as the poster, and the graffiti beside her only emphasizes that. ",
    "character_object_narration The microphone on the other side of the room looks too high for her to reach. That\'s a bit weird. ",
    "character_object_narration It looks like the girl\'s still on her phone. You decide to get her attention. ",
    "character_object_player Hi, I wanna join the radio club. ",
    "character_object_narration She puts her phone away and turns around. ",


    // 'show character character_object_kyo Kyo_FP_Shocked normal',
    'show character character_object_kyo Kyo_FP_Shocked normal',
            "character_object_???_kyo AAAAAAAAAAAAAAAAAAAAH!!!   ", // rule based 
   
            "show character character_object_kyo Kyo_FP_Shocked normal", // rule based 
 
                "character_object_narration The student\'s voice then drops a few octaves lower than you expect her to have. ",
    
    
    // 'show character character_object_kyo Kyo_FP_Bruh normal',
    'show character character_object_kyo Kyo_FP_Bruh normal',
    "character_object_???_kyo You fucking scared the shit out of me! My god. ",

    
    "character_object_narration Well, you now know two things. One, this girl is actually a guy. Two, this dude\'s language is as colorful as his hair. What a bombastic impression you\'ve left on each other. It only goes uphill from here. ",
    "character_object_player Sorry, I just walked in. Is this the wrong room? I think I\'m in the wrong ro&mdash; ",

    'show character character_object_kyo Kyo_FP_Default normal',

    "character_object_kyo No no, wait. I made sure that the door had a sign on it. You\'re here for the radio club, right? ",
    "character_object_player Yeah, that\'s kinda what I said before you started freaking out. ",
    "character_object_kyo Okay, okay, my bad. I literally didn\'t hear you walk in. Anyways, hi, I\'m Kyo Kaneko. What\'s your name? ",

      //Allows player to add custom name to the player character

  
      // Using player's custom name in dialogue --> {{playerName}}



    "character_object_player I\'m {{player.name}}. ",
    "character_object_kyo {{player.name}}. Alright, here\'s how the club works. ",
    "character_object_player Wait, you\'re not gonna be writing anything on the board or something like that? ",
    "character_object_kyo Nah. It\'s not that complicated. ",
    "character_object_narration Is that his way of saying that he\'s not prepared? ",
    "character_object_kyo For now, this club mainly does school announcements, but I plan to make it so that we also do podcasting too. ",
    "character_object_narration You reach into your backpack. ",
    "character_object_narration Kyo looks at you in confusion. ",
    "character_object_player Oh don\'t mind me, I\'m just gonna eat my lunch. ",
    "character_object_kyo Ooh, what are you having? ",
    "character_object_player Butter croissants. ",
    "character_object_narration Kyo stares at your bread a little longer than you want him to. ",
    "character_object_kyo Can I have some? ",

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
    // "Choice 1 Sure, you can have a bit.  Chapter_0_0011400 Choice 1: Sure, you can have a bit. ",

    
    // 'show character character_object_kyo Kyo_FP_Bruh normal',
    'show character character_object_kyo Kyo_FP_Bruh normal',

    "character_object_kyo  Actually, never mind. There are probably some RAAAAAAAANCID germs in there. I don't want any of that. I refuuuuuuuuuuse. ",
    "character_object_narration   The nerve of this guy...!  ",
    // "Scene reconverges here  Chapter_0_0012200 Scene reconverges here ",
    "jump Chapter_0_after_choice_1",
  ],
  'Chapter_0_Choice_2_No_this_is_mine_Get_your_own': [
    // "Choice 2 No, this is mine. Get your own.  Chapter_0_0012500 Choice 2: No, this is mine. Get your own. ",

    // "character_object_kyo Chapter_0_0012700 Kyo_FP_Bruh ",
    'show character character_object_kyo Kyo_FP_Bruh normal',

    "character_object_narration   Kyo whines and pouts. ",
    "character_object_narration   What is up with this guy? Yet, you find his pouting face a little cute. Like a puntable cat.   ",
    // "Scene Reconverges Here  Chapter_0_0013300 Scene Reconverges Here ",
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



    'show character character_object_kyo Kyo_FP_Default normal',
    "character_object_kyo Anyways, since this club requires confident people, I\'d say you\'re a pretty good candidate so far. Most people don\'t have the balls to approach me. ",
    "character_object_narration You look up and down at Kyo incredulously. ",
    "character_object_player Really? You\'re not even tall enough to reach the mic over there. ",
    "character_object_kyo Hey hey, shut up. Shut the fuck up. ",
    "character_object_narration Kyo looks up at the classroom clock. ",
    "character_object_kyo Lunch\'s almost over. So, whaddya say, you wanna join the club or not? ",

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
    // "Choice 1 Yes.  Chapter_0_0015500 Choice 1: Yes. ",
    
    // "character_object_kyo Chapter_0_0015700 Kyo_FP_Cheerful ",
    'show character character_object_kyo Kyo_FP_Cheerful normal',


    "character_object_narration   Kyo claps his hands.   ",
    "character_object_kyo  Yeah, let's go! Finally, there's a second member. ",
    "character_object_player   Wait, nobody else is in this club yet?   ",
    "character_object_kyo  Oh shit, I forgot to tell you. Yeah, you're the only one who joined so far. But here's where you come in. ",
    "character_object_kyo  To officially register the club, I'm gonna need you to recruit 3 more people by the end of the month. You can do it, you're charismatic enough. ",
    "character_object_player   Hold on, I didn't agree to do free labor. Why don't you do it yourself&mdash; ",
    "character_object_narration   The lunch bell rings.   ",
    "character_object_kyo  Too late, gotta go. ",
    "character_object_player   Hey, wait!   ",
    "character_object_narration   You catch a glimpse of Kyo grinning as he bolts past you and out the door. He sings as he escapes into the hallways, cracking his voice.  ",
    "character_object_kyo  Running through the halls so fast, something something dash&mdash; ",
    "hide character character_object_kyo with fadeOutLeft",
    "character_object_narration   And just like that, he makes a left and disappears. The nerve of this dude to leave you hanging like that...   ",
    "character_object_narration   You go in the opposite direction to your class. As you make your way there, you think about his request. It's a lot of work, but it's not like you have other plans or commitments this year.  ",
    "character_object_narration   Eh, fuck it, you ball.  ",

    'stop music intro_loop with fade 5',
    // "Fade to black   Fade to black ",
    "show scene black_screen with fadeIn duration 2s",


    // "Proceed to Chapter 1   Proceed to Chapter 1 ",

    "jump CHAPTER_1",
    //"jump END",



  ],
  'Chapter_0_Choice_2_No': [
    // "Choice 2 No.  Chapter_0_0020100 Choice 2: No. ",

    'show character character_object_kyo Kyo_FP_Sad normal',
    "character_object_kyo  Oh, why not?  ",



    "character_object_player   Oh, don't take this the wrong way. It's just that I wanna consider my other options.   ",
    "character_object_kyo  Like what? ",
    "character_object_player   Hm? Isn't it normal to do that?   ",
    "character_object_kyo  What other clubs were you thinking of joining? Because this club can do better than all of them. ",
    "character_object_narration   Where did this sudden pushiness and big ego come from?   ",
    "character_object_player   I was thinking of joining the debate club&mdash;  ",


    'show character character_object_kyo Kyo_FP_Bruh normal',
    "character_object_kyo  Bro, I am right here. I am THE debate master. I'm not all business all the time you know. I can do other things outside of club meetings.  ",
   
   
   
   
    "character_object_player   Okay, but I have to ask. You're cool and all, but are you the only club member?   ",
    "character_object_kyo  Yes, but I'm gonna get more soon&mdash; ",
    "character_object_player   Look, I'll go check out other clubs later this week. If I don't like any of them, I'll come back here. Okay?  ",
    "character_object_narration   The lunch bell rings.  ",
    "character_object_player   Don't wanna be late to class. See ya.  ",

    'show character character_object_kyo Kyo_SP_Sad normal',


    "character_object_narration   You feel a little guilty seeing his dejected expression as you leave the classroom. But it's too late now; you stick to your decision and go to your next class.  ",


    // "Empty black screen.  Chapter_0_0024700 Empty black screen. ",
    "show scene black_screen with fadeIn",


    "character_object_narration   The next day, you try to find Kyo in the radio club room. But the room is empty. You try asking people about Kyo's whereabouts, but people don't even know who he is. What the hell. That's weird. Eh, whatever. Life continues to be lonely as usual.   ",
    // "Game end - joke ending. Restart from beginning of game  Chapter_0_0025200 Game end - joke ending. Restart from beginning of game ",
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

    // 'jump CHAPTER_1',
  ],

  'CHAPTER_1': [
    // start-of-CHAPTER-1-mark
    // chapter index
    "show video background_loop background loop animate__animated animate__fadeIn animate__faster",
    //" Chapter 1: Healing the Conditioned Puppet ",
    "centered <div class=\"chapter-title-wrapper-1\"><p class=\"chapter-title typed-1\">Chapter 1:</p></div><div class=\"chapter-title-wrapper-2\"><p class=\"chapter-title typed-2\">Healing the Conditioned Puppet</p></div><p class=\"click-to-continue\">Click anywhere to continue</p>",
    "hide video background_loop animate__animated animate__fadeOut animate__faster",

    // "School Rooftop Day School Rooftop Da ",
    "show scene Rooftop_bg_day",


    // "character_object_atria Atria\'s BGM ",
    'play music Atria_intro  with loop  ',



    "character_object_narration ... ",
    "character_object_narration The fresh air really is relaxing when there\'s so much going on. Having to recruit members for a radio club of all things, and so suddenly too... as if that isn\'t crazy enough, the amount of drama at the school has been...irritating, to say the least. ",
    "character_object_narration Hell, it\'s insane. ...Those damn rumors that the school is haunted are... <i>unnerving</i>, to say the least. ",
    "character_object_player ...People are so desperate to just get a reaction out of people, huh... at this point I don\'t doubt this school\'s going to digress into chaos. ",
   
   
    'show character character_object_kyo Kyo_FP_Smiling normal',
    "character_object_kyo Chaos? I call it fun! ",



    "character_object_player WHAT TH&mdash; ",
    "character_object_kyo Have you found any recruits yet? ",
    "character_object_player ...Warn me next time before sneaking up on me, will you?? ",


    'show character character_object_kyo Kyo_FP_Cheerful normal',
    "character_object_kyo No thanks. ",




    "character_object_narration Kyo leans forward, his hands on his hips. His expression screams nothing but smug mockery, plainly amused at your annoyance. ",
    "character_object_kyo Now, you\'ve found someone, right? <i>Surely</i> it can\'t be so hard to evaluate who here is a good candidate. Not when there are <i>very few</i> people who stand out amongst the rest. ",
    "character_object_narration He speaks as if he already has certain people in mind. If so, why is he so insistent on <i>you</i> recruiting members as opposed to him? ",
    "character_object_player No, <i>Kyo</i>, it has quite literally only been a couple hours. ",



    'show character character_object_kyo Kyo_FP_Bruh normal',
    "character_object_kyo Mhm... from the way you\'re acting now, I\'ve most likely put too much faith in you... I <i>guarantee</i> you\'re just too introverted to go up and ask someone to join. ",
    
    
    
    
    "character_object_player ...<i>Actually</i>, I genuinely haven\'t seen anyone who looks suitable. A radio club requires someone who is willing to... well, talk. Right? ",
    "character_object_kyo Right... ",
    "character_object_kyo You sure you\'re not just scared to interact with people? ",
    "character_object_player Shut up. ",
    "character_object_narration Jeez. For someone he just met, Kyo sure has some nerve. ",
    "character_object_player I hate to break it to you, Mr. know-it-all, but I have yet to see anybody who seems talkative. If anything, I\'m the most extroverted person here. ",
    
    
    
    'show character character_object_kyo Kyo_FP_Cheerful normal',
    "character_object_narration Kyo just shoots you a cocky grin, rolling his eyes playfully. ",




    "character_object_kyo Mhm, <i>very</i> believable. Just be a bit more observant, will you? It really can\'t be <i>that</i> difficult to find someone. ",
    "character_object_player But&mdash; ",
    "character_object_kyo Yeah, yeah. I get it. Your short attention span won\'t allow you to tune into one person for more than 15 seconds. ",
    "character_object_narration You scowl at his remark, but your reaction only further enables him to keep poking at you. You didn\'t really mind his banter, but at the very least you wish you could have the ability to snap back. ",
    "character_object_player What do you want me to do? Just sit and observe as someone goes about their day?? Just stand menacingly in some corner and watch them? ",
    
    
    
    'show character character_object_kyo Kyo_SP_Default normal',
    "character_object_kyo No need to make it sound so creepy. Listen, you gotta do what you gotta do. Just don\'t make it too obvious. ",
   
   
   
    "character_object_kyo Though, from what I\'ve seen, I\'m starting to even question whether you\'re capable of <i>that</i> much. ",

    // start hardcoded dialog_code == 'Chapter_1_0008500
    {
      'Choice': {
        'Chapter_1_Choice_1_Let_it_slide': {
          'Text': 'Let it slide',
          'Do': 'jump Chapter_1_Choice_1_Let_it_slide',
        },
        'Chapter_1_Choice_1_Try_proving_him_wrong': {
          'Text': 'Try proving him wrong',
          'Do': 'jump Chapter_1_Choice_2_Try_proving_him_wrong',
        },
      }
    },
  ],

  'Chapter_1_Choice_1_Let_it_slide': [
    "character_object_narration   Kyo snickers, tilting his head momentarily as if discreetly pointing somewhere.   ",
    "character_object_kyo  I bet you anything if you actually listen you'll find someone <i>immediately</i>. ",
    "character_object_narration   Your eyes follow the direction of his nudge.  ",
    // "Scene reconverges here   Scene reconverges here ",
    "jump Chapter_1_after_choice_1",
  ],
  'Chapter_1_Choice_2_Try_proving_him_wrong': [
    "character_object_narration   You glance around, searching for someone you can listen in on to make your point.  ",
    "character_object_narration   Your ears pick up on some commotion, and your attention drifts.  ",
    // "Narration   		Scene reconverges here  ",
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



    // "character_object_kyo Remove Ky ",
    'hide character character_object_kyo',

    'show character character_object_atria atria1_happy normal atria-darken with fadeIn',
    // "character_object_atria Atria1_Happy. Darken by 50%, centere ",




    "character_object_narration At that moment, you see a group of girls across the courtyard. They all seem rather silent&mdash;bored, even&mdash; but one of them in particular stands out to you. ",
    "character_object_???_atria Anyways! About the person I was talking about earlier, the one that I frequently watch. They did this one stream recently, it was a collaboration with some of my favorite streamers! When I saw the waiting room for it, I got really excited! ",
    "character_object_???_atria I sent it to you guys a while back, though I\'m not sure if you saw it? Neither of you responded... Do you think there\'s a possibility we could watch it together sometime? ",
    "character_object_narration The two other girls look at each other before faking a smile towards her direction. ",
    "character_object_girl_a ...You\'re ranting about these streamers every two seconds, you expect us to know which one you are talking about? ",
    
    

    'show character character_object_atria atria1_nervous normal atria-darken',
    "character_object_???_atria Oh&mdash; ...Yeah. Sorry. I guess sometimes I just say stuff without really thinking. ",


    'show character character_object_atria atria2_happy normal atria-darken',
    "character_object_???_atria The one with... let\'s see, I\'m trying to think of a way to describe this to someone who doesn\'t watch them. They have... blue hair. It\'s short, around shoulder length. Does that ring a bell? ",
    
    
    
    "character_object_narration Wait... ",
    "character_object_narration Short... blue hair...? That\'s... ",
    "character_object_narration Kind of silly. ",
    "character_object_???_atria I understand if you guys don\'t remember! I know I can speak a bit quickly at times. ",
    "character_object_???_atria Oh! Yeah, the one I was talking about yesterday! Surely you remember th&mdash; ",
    "character_object_girl_a Hello? Earth to Atria? Atria Aiyashi? ",
    "character_object_girl_a You know, the Atria that thinks before she goes on meaningless tangents? We\'re tired of you constantly bothering us about stuff we aren\'t interested in. ",
    
    
    // "character_object_atria Atria2_Nervou ",
    'show character character_object_atria atria2_nervous normal atria-darken',



    "character_object_narration The small yellow haired girl, supposedly named Atria, tenses at the others\' remark. She had been rambling excitedly about her interests just a moment ago and yet... her tone suddenly falters. ",
    "character_object_atria ...A-Ah.. was I too much?.. ",
    "character_object_girl_b Atria, you can\'t keep forgetting we raised you to be silent. ",
    "character_object_atria I\'m sorry... I didn\'t mean to do anything... ",
    "character_object_girl_b It\'s the same answer every single time. No matter how much we remind you, you go back to your annoying little \'hyperfixations\'. ",
    "character_object_girl_b Surely you can try a bit harder? You\'ve been like this for years now. Is there really something stopping you from just... <i>realizing</i> we don\'t care? ",
    "character_object_girl_b Take your silly little blue guy and talk about him to yourself, yeah? ",



    'show character character_object_atria atria1_nervous normal atria-darken',
    "character_object_atria Genuinely, I didn\'t mean to do anything... ",




    "character_object_girl_b Do you want us to help you or not? ",
    "character_object_atria I\'m <i>sorry, okay</i>? ",
    "character_object_girl_b We at least had some sort of faith in you. We thought we could change you to stop you from constantly babbling on...but you haven\'t even made any ounce of progress. ",
    "character_object_girl_a The only reason we even tolerate you is because we feel bad. ",
    
    
    
    // "character_object_atria Atria1_Sa ",
    'show character character_object_atria atria1_sad normal atria-darken',


    "character_object_narration Atria opens her mouth, as if to speak, but no sound escapes her.",
    "character_object_narration Her voice is caught, suffocated by the others words and the fear of the repercussions of standing up for herself. Her body language speaks volumes, clearly burdened by the weight of the expectations placed upon her. ",
    "character_object_narration In a shaky, pitiful murmur, she chokes out a rebuttal. ",
    "character_object_atria I-I said I\'m <i>sorry</i>, okay? ",
    "character_object_narration Atria seems to regret speaking up halfway through her argument, audible desperation in her wavering voice. However, it was simply idiotic to think that the two standing next to her would back down so easily. ",
    "character_object_girl_b You really can\'t do anything right, can you? ",
    "character_object_narration The girl at her side clicks her tongue, smiling manipulatively. ",
    "character_object_girl_b We\'re nice enough to give you advice, and you can\'t even shut up and take it? You\'re lucky we even waste our effort on you. ",
    "character_object_girl_b What happened to the promise you made us? That you\'d do what we ask of you? Do you really want a repeat of what happened <i>last time</i>? ",
    "character_object_narration The third individual reaches upwards, placing a hand on Atria\'s shoulder \'comfortingly\'. ",
  
  
  
    // "character_object_atria Atria2_Sad. Make sprite jump in surpris ",
    'show character character_object_atria atria2_sad normal atria-darken with bounce',


    "character_object_narration This only causes Atria to flinch and instinctively put her hands up in defense. ",

    "character_object_girl_a ...We\'ll take that reaction as a no. ",
    "character_object_girl_a Remember, we\'re your only friends. We\'re really just trying to do you a favor. ",
    "character_object_atria ... ",
    "character_object_narration There is a hesitation that lasts for what seems like an eternity, as Atria\'s expression fades. Her emotion is lacking in comparison to mere seconds ago. It seems forced, for sure, yet it\'s clear she\'s putting significant effort into holding this mask. ",
    
    
    'show character character_object_atria atria2_timid normal atria-darken',
    "character_object_atria ...Yeah, thank you for reminding me. ",



    "character_object_narration She lowers her gaze, attempting with all her will to keep a strong, emotionless veil. This would have been manageable for the time being, but the two others don\'t even respond to her submission. ",
    "character_object_narration They just... stare. ",
    "character_object_narration Stare as she attempts to keep her composure. ",
    "character_object_atria ... ",
    "character_object_atria ... ",


    'show character character_object_atria atria2_sad normal atria-darken',
    // "character_object_atria Atria2_Sad &mdash; only shown momentarily before she disappear ",

    "hide character character_object_atria with fadeOut",

    //"Footstep SFX Footstep SF ",
    'play sound Running_SFX_Atria',

    'wait 3000',

    'show character character_object_kyo Kyo_FP_Shocked normal',

    "character_object_kyo ... ",
    "character_object_kyo Das crazy. ",
    "character_object_player ...That\'s really all you have to say? ",


    // "character_object_kyo Kyo_FP_Smilin ",
    'show character character_object_kyo Kyo_FP_Smiling normal',



    "character_object_narration Kyo looks at you with an obvious smugness, outwardly unphased by... <i>whatever</i> had just happened between those three. ",
    "character_object_kyo I <i>told</i> you if you actually took the time to tune into a conversation, it wouldn\'t be so hard to find someone. ",
    "character_object_player What, do you want me to go get her and ask her to join a <i>radio club</i> after <i>that</i>? ",
    "character_object_narration His eyes flicker, looking at the school door where Atria had run off to, then back at you. ",
    "character_object_narration Back... and forth... and back... and&mdash; ",
    "character_object_kyo So... are you gonna just sit there? Seriously? ",
    "character_object_player Wh&mdash; ",
    "character_object_kyo Are you even gonna do something? Or nah? ",
    "character_object_narration Kyo looks at you, like he wants you to go run after her. It\'s... oddly ominous. Like he just wants an excuse to make you speak with Atria. ...Does he know her or something? Is <i>that</i> what this was all about? ",

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
    // "Choice 1 Ignore the whole incident  Chapter_1_0029200 Choice 1: Ignore the whole incident ",
    "character_object_player   I really don't think I should interfere...  ",


    // "character_object_kyo Chapter_1_0029700 Kyo_FP_Bruh ",
    'show character character_object_kyo Kyo_FP_Bruh normal',


    "character_object_narration   Kyo stares at you with a tinge of concern.  ",
    "character_object_kyo  ...Don't you think she would be a good candidate for the radio club? ...Can't you just... <i>tell</i>? ",
    "character_object_narration   He clearly knows more than he's letting on... his consistently unsettling statements are starting to stand out more and more...  ",
    "character_object_narration   Eh, surely it's nothing. There's no way <i>this</i> guy can do anything, anyways.  ",
    "character_object_player   What is she, the 'chosen one' or something?  ",
    "character_object_narration   You joke, rolling your eyes.  ",
    // "Scene reconverges here   Scene reconverges here ",
    "jump Chapter_1_after_choice_2",
  ],
  'Chapter_1_Choice_2_go_search_for_atria': [
    // "Scene reconverges here   Scene reconverges here ",
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
    "character_object_player Fine, fine. Let\'s go find her, alright? ",

    'show character character_object_kyo Kyo_FP_Bruh normal',
    "character_object_kyo ...Actually, I think you should go on your own. I... will only get in the way. ",




    "character_object_narration He speaks in an eerie tone, as if he\'s admitting to something. ",
    "character_object_narration What on earth is up with him? ",
    "character_object_player ...Okay? So... you just want me to convince her to join? ",
    "character_object_player Wait, what do you mean by \'get in the way\'?? ",
    "character_object_player ... ",
    "character_object_player Actually, nevermind. I can see it. ",


    // "character_object_kyo Kyo sprite is remove ",
    'hide character character_object_kyo',
    
    
    "character_object_narration You look at the school building momentarily, sighing. It\'s an irritating reality, but the longer you wait, the harder it will be to find her. ",
    "character_object_player I guess I\'ll see you later then&mdash; ",
    "character_object_narration You look back to where Kyo had stood just a moment ago, your eyes only meeting blank space. ",
    "character_object_player Huh? ",
    "character_object_narration ...He never fails to do something strange, does he? ",
    "character_object_narration You figure you should just get moving. ",

    "show scene generic_classroom_bg with fadeIn",
    // "Transition to School Classroom Day Transition to School Classroom Da ",




    "character_object_narration ... ",
    "character_object_narration Alright then, she has to be somewhere around here. ",
    "character_object_player Atria? Hello? ",
    "character_object_narration ... ",
    "character_object_narration Silence. ",
    "character_object_player Atria? Don\'t worry... I\'m not gonna yell. ",


    // "character_object_atria Atria1_Sa ",
    'show character character_object_atria atria1_sad with fadeIn normal',


    "character_object_narration You glance around, scanning the room, your eyes spotting a fragile figure hunched in the corner. The eye contact causes her body to tense, as if she were expecting judgment, or ridicule. ",
    "character_object_atria ...W-why do you... know my name...? ",
    "character_object_narration Atria speaks between quiet sobs, her voice strained with emotion. She\'s vulnerable, her guard shattered from the weight of her own struggles. ",
    "character_object_player I... overheard your conversation earlier. ",
    "character_object_narration You take a few steps towards her, careful not to invade her space. Despite your carefulness, she pushes herself against the walls, making herself appear as small and insignificant as possible. ",
    "character_object_atria D-did <i>they</i> send you here... to deal with me...? ",
    "character_object_narration Her voice drips with anticipation. Anticipation to be met with some sort of pain, whether it be emotional or physical. ",
    "character_object_player No&mdash; it\'s nothing of the sort. My name is {{player.name}}... It... must be really exhausting having to listen to their torment. ",
    "character_object_player Do they constantly tell you things like that? ",
    "character_object_atria I&mdash;... ",
    "character_object_narration Atria hesitates, unsure whether she should even respond to such a question. ",
    "character_object_atria They... they just want what\'s best for me. They\'ve been my friends for a long time. ",
    "character_object_narration ... ",
    "character_object_narration If you were to disregard the scene that had taken place earlier, her self-assured words would seem genuine. ",
    "character_object_narration She\'s noticeably frustrated, like she\'s trying to convince you to believe in her words. Has she really been tricked into thinking she\'s at fault? To the point she would stand up for those so-called \'friends\'? ",
    "character_object_player How long, exactly, have they been your friends? ",
    "character_object_narration Your tone is soft, encouraging her to open up. Even so, her eyes dart around, desperately seeking for anywhere to look except your own gaze. ",
    "character_object_atria ...As long as I remember. Really, I\'m serious... they\'re just trying to deal with me. ",
    "character_object_player Don\'t you think they are being a bit... ah, harsh? ",



    // "character_object_atria Atria2_Sa ",
    'show character character_object_atria atria2_sad normal',


    "character_object_narration You observe Atria closely, noticing the conflict within her as she struggles with her loyalty to her \'friends\' and their effect on her emotional stability. She seems torn, caught between the conflicting beliefs instilled by her \'friends\' and the flickers of doubt emerging within her. ",
    "character_object_narration She speaks, her voice laced with a forced conviction. ",
    "character_object_atria It\'s... fine. I\'m used to it. ",
    "character_object_narration ...Used to it? ",
    "character_object_narration You struggle for a good moment, before a realization hits you; her perception of reality has been shaped by years of... whatever they had done to her. ",
    "character_object_narration Comforting and giving advice wasn\'t exactly your strong suit... ",
    "character_object_player Atria... that\'s not normal. ",



    "show character character_object_atria atria2_timid normal",
    "character_object_atria Huh? ",


    "character_object_narration She takes a few seconds to herself, a mix of confusion and curiosity seeping through her expression. You take the silence as an opportunity to explain and clear up any possible questions. ",
    "character_object_player What I mean is, friends are meant to encourage your hobbies, and allow you to open up about yourself. What I saw back there wasn\'t healthy... nor acceptable. ",
    "character_object_narration You speak with a confident tone, pushing aside your own uncertainties on how to navigate such a sensitive conversation. The more you speak, however, the more confusion crosses Atrias face. ",
    "character_object_atria But... that\'s how it\'s always been. It\'s been like that for as long as I remember. ",
    "character_object_narration The confusion of the whole situation only proved the depth of her conditioning. ",
    "character_object_narration The dynamics you had witnessed between her and her so-called \'friends\' seem to be ingrained in her entire understanding of relationships. It blurs the line of what she depicts as acceptable or not. ",
    "character_object_player Do you mind explaining to me what your friends have been like towards you? Perhaps I can get a better insight on what exactly is going on. ",
    "character_object_player I... understand if you don\'t want to share. Though it really could help me evaluate who\'s in the wrong. ",
    
    
    
    'show character character_object_atria atria1_timid normal',
    "character_object_atria ...I would, but... they don\'t really like me talking to other people... ",
    "character_object_atria ...But... the way you are talking to me completely contradicts the things that they have said would happen if I did... ",
    "character_object_narration Atria mumbles, taking in a deep breath as she contemplates whether or not she should open up. ",
    "character_object_atria ...Alright, just&mdash; <i>please</i> don\'t tell them I said anything. Nobody... has ever, er... offered this to me, so... I\'m not really sure how they would react if they found out. ",
    "character_object_narration You nod, reassuring her. ",
    "character_object_player I wouldn\'t dream of it. ",
    "character_object_narration Atria visibly relaxes, her tense posture softening slightly as she starts to consider sharing her experiences. It\'s a step into the unknown for her. ",
    "character_object_atria Okay, just... give me a moment. ",
    "character_object_narration She takes a deep breath, steadying herself as she gathers the courage to break the chains of silence that have bound her for so long. ",
    
    
    
    // "character_object_atria Atria1_Nervou ",
    'show character character_object_atria atria1_nervous normal',




    "character_object_narration A weak smile forms as she reminisces. ",
    "character_object_atria I met them in 2nd grade, and they were the first people in my life that would actually call me a friend. ...They never really liked me hanging out with others. So, since then, I\'ve just kind of stuck with them. ",
    "character_object_atria They helped me, and they still help me to this day. The least I can do for them is follow a couple orders here and there. ...I don\'t exactly know what would happen if I <i>didn\'t</i> do as they asked, anyways. There\'s no use putting up too much of a fight. ",
    "character_object_narration A small, breathless laugh leaves her, but it seems rather simulated. ",
    "character_object_atria They remind me when I speak too much, and push me to improve myself. They put up with me, even now, after years of not being able to keep to myself. ",
   
   
   
    // "character_object_atria Atria1_Timi ",
    'show character character_object_atria atria1_timid normal',



    "character_object_narration Atria\'s expression fades as she takes a moment to think about what she had just said. Quietly, she repeats her words to herself. ",
    "character_object_atria ...Years. ",
    "character_object_atria I\'m... lucky they even stick around. ",
    "character_object_narration Her words are solemn, yet she accepts this idea as the truth with no troubles. You shake your head. ",
    "character_object_player I... I can\'t know exactly what your life has been like, but from what I saw back there, they... <i>really</i> don\'t seem like they are doing this for your sake. ",
    "character_object_player I can understand it\'s difficult to accept this, especially since you haven\'t been exposed to kinder relationships. ",
    "character_object_player However, isolating you from others and demanding obedience is not a healthy dynamic. You have individuality, and it shouldn\'t be suppressed. ",
    "character_object_narration You emphasize the qualities of healthy relationships, hoping your words impact her twisted definition of a friend. ",
    
    
    
    // "character_object_atria Atria2_Timi ",
    'show character character_object_atria atria2_timid normal',



    "character_object_narration She looks up in thought, finding it difficult to grasp the foreign concept that her \'friends\' actions may not align with true friendship. ",
    "character_object_atria But... they\'ve always said it\'s for my own good. That their guidance and control are necessary to make me better. Isn\'t... that how friends are supposed to be? ",
    "character_object_narration You look at her questioningly, wondering how exactly you could explain this to her when her thought process had been so warped and muddled. ",
    "character_object_player ...Here, imagine this; a friendship where you are allowed to express yourself freely, and your thoughts and feelings are valued. ",
    "character_object_narration Atria\'s eyes widen, fascinated in the allure of this alternate reality. ",
    
    
    // "character_object_atria Atria1_Timi ",
    'show character character_object_atria atria1_timid normal',


    "character_object_atria ...Are you sure... that\'s really possible? ",
    "character_object_narration You nod, offering her your hand. She reluctantly takes it, standing. ",
    "character_object_player ...I understand if you don\'t believe me, but hey, why not try it out? ",
    
    "show character character_object_atria atria2_timid normal",
    
    "character_object_atria ... ",
    "character_object_atria ...I-I\'m scared... ",
    "character_object_atria ...What are they going to think? ",
    "character_object_narration You look at her with solemn eyes, acknowledging the severity of her situation. ",

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

    "character_object_player   Atria, I understand your attachment to them, but a lot of their actions that you've explained to me don't seem right in any way..  ",
    "character_object_player   If you think they are causing you hurt, the best thing to do is confront them as soon as possible.  ",
    "character_object_player   If they disregard your feelings after you do so, they aren't worth your time. Let alone your pain.  ",
    "character_object_player   I know it may be hard, but sometimes cutting people out of your life is the best decision. It can be the difference between differing sides of your mental stability.  ",
    "character_object_narration   Atrias eyes widen at this, fearing the mere idea of confrontation.  ",
    "character_object_atria  ...But what if they respond negatively...? ",



    // "character_object_atria Chapter_1_0060500 Atria2_Sad ",
    'show character character_object_atria atria2_sad normal',



    "character_object_atria What if they... ",
    "character_object_narration   She flinches, seemingly reimagining older events. Taking a deep breath, she composes herself. It was a blatant lie, a response that seems like a natural reflex to recalling such things.  ",
   
   
   
    // "character_object_atria Chapter_1_0061300 Atria1_Timid ",
    'show character character_object_atria atria1_timid normal',




    "character_object_atria  ...I... don't think that's a good idea. ",
    "jump Chapter_1_after_choice_3",
  ],
  'Chapter_1_Choice_3_go_search_for_atria': [
    "character_object_player   Don't worry too much about it. I'll help you through this, and you can take as much time as you need.  ",
    "character_object_player   It's a large step to take, and it can take a lot. I encourage you to take your time.  ",
    "character_object_player   ...Just, think about what's best for you. Consider the idea of friends that allow you to just be yourself.  ",
    "character_object_narration   Slowly, Atria nods in agreement.  ",



    // "character_object_atria Chapter_1_0063200 Atria1_Timid ",
    'show character character_object_atria atria1_timid normal',



    "character_object_atria I... I don't really know... I've known them for so long...",
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
    "character_object_atria But... ",




    // "character_object_atria Atria1_Nervou ",
    'show character character_object_atria atria1_nervous normal',




    "character_object_atria I can try. ",
    "character_object_narration You smile at her efforts. ",
    "character_object_player I\'ll be here whenever you need me, okay? ",
    "character_object_player Well... of course I\'m not <i>always</i> here but&mdash; My point is, if you need help, don\'t worry about asking for it. ",
   
   
   
    // "character_object_atria Atria2_Nervou ",
    'show character character_object_atria atria2_nervous normal',



    "character_object_narration Atria nods, which you take as a cue to leave. ",
    "character_object_narration ... ",
    "character_object_narration But upon turning around... ",


    // "character_object_atria Atria sprite is remove ",
    'hide character character_object_atria',


    
    // "character_object_kyo Kyo_FP_Bruh - Appears before dialogue bo ",
    'show character character_object_kyo Kyo_FP_Bruh normal',



    "character_object_player K&mdash; ",
    "character_object_player Holy BONKERS will you stop doing that&mdash; ",
    "character_object_kyo Oh, come on. I\'m not <i>that</i> scary. ",
    "character_object_kyo Anyways, will <i>you</i> stop forgetting why you even talked to her in the first place?? ",
    "character_object_narration <i>Oh, right. The radio club.</i> ",
    "character_object_player Well&mdash; you\'re here now, so why don\'t <i>you</i> do it? ",
    "character_object_kyo ...She\'s waaay more likely to listen to you, you\'re the one that was persuading her to do a load of other things. ",
    "character_object_player Sounds like an excuse to me. You\'re pretty good at blabbering, you two could get along. ",
    "character_object_narration Kyo reaches his hand out to push you back towards Atria, but stops mid-way, pulling his hand back, and letting out a long sigh before gesturing to her. ",
    
    

    'show character character_object_kyo Kyo_FP_Default kyo-left',
    "character_object_kyo Go on. ",

    'show character character_object_atria atria2_nervous atria-right',
    //"character_object_atria Atria2_Nervou ",



    //"character_object_kyo Kyo left, Atria righ ",
    "character_object_player ...Sorry about that. ",
    "character_object_narration Atria looks towards you with blatant confusion. ",
    "character_object_player I was just wondering if you\'re interested in clubs at all? It\'ll be a perfect opportunity to get yourself out there and make new friends. ",
    "character_object_player I was hoping to recruit you to the radio club. There, you\'ll be able to go on tangents without being judged. I think you\'ll fit the role perfectly, and hey, you could maybe help recruit some new members too...? ",
   
   
   
   
    // "character_object_atria Atria2_Timi ",
    'show character character_object_atria atria2_timid normal atria-right',



    "character_object_atria Ah... you\'re sure I won\'t come off as annoying? Y\'know... talking and such? ",
    "character_object_player Of course not. The entire point of a radio club is to speak into a microphone. You can even take it for a little test run, if you\'d like. ",
    "character_object_atria ... ",
    "character_object_atria W-well... I suppose it\'s the least I can do... you\'ve kind of helped me consider possibilities I would have never even imagined otherwise... ",
    "character_object_narration There\'s a brief pause before Atria clings to your sleeve, allowing you to lead the way. ",
    //"Sprites are removed - momentarily for background transition Sprites are removed - momentarily for background transitio ",
    
    
    
    
    //"Music_Room_Basic + Music_Printer Music_Room_Basic + Music_Printe ",
    "show scene music_room_basic_printer with fadeIn",



    // "character_object_kyo Kyo_SP_Defaul ",
    'show character character_object_kyo Kyo_SP_Default normal kyo-left',



    // "character_object_atria Atria1_Timi ",
    'show character character_object_atria atria1_timid normal atria-right',


    //"character_object_kyo Kyo left, Atria right ",




    "character_object_player Here\'s the club room! Cozy, isn\'t it? ",




    // "character_object_kyo Kyo_FP_Smilin ",
    'show character character_object_kyo Kyo_FP_Smiling normal kyo-left',



    "character_object_narration Kyo speaks, his tone strung with an obvious sarcasm. ",
    "character_object_kyo Wooow... 32/10 persuasive skills. ",
    "character_object_narration You just shoot a glare at him before sighing and moving on. ",
    "character_object_player Well, how about you step up to the microphone and try it out? Sound good? ",
    "character_object_narration Atria reluctantly approaches the microphone at the back of the studio, looking at you for approval before switching it on, tapping its end unsurely. ",
    "character_object_narration She has to lower it a bit in order to reach it properly... heh, that would make <i>two</i> short people in the club. ",
    "character_object_atria ...Ah... what should I say? ",
    "character_object_player Hmm.. ",
    "character_object_narration You look at Kyo for an answer, but you only receive a shrug in response. ",
    "character_object_player ...I guess whatever you feel like. It\'s just a test, so, how about something you\'re passionate about? ",
    "character_object_kyo Yeah, that works. Just whatever is easy to talk about. ",



    // "character_object_kyo Kyo sprite is remove ",
    'hide character character_object_kyo',

    
    // "character_object_atria Atria2_Timi ",
    'show character character_object_atria atria2_timid normal at center with fadeIn',



    // "Centered Centere ",




    
    "character_object_narration Atria approaches the mic, a bit tense. She starts off very reluctant, stuttering over her sentences. ",
    "character_object_atria ...Hello, I-I\'m Atria... um.. ",
    "character_object_atria ... ",
    "character_object_atria ... ",
    "character_object_player Hey, it\'s alright. Just say whatever comes naturally, it doesn\'t have to be thought out like some perfect script. ",
    "character_object_narration Her eyes shift towards your direction, and she takes a deep breath before continuing. ",
  
  
  
    // "character_object_atria Atria2_Nervou ",
    'show character character_object_atria atria2_nervous normal',




    "character_object_narration Slowly, her body relaxes a little, as she lets go of her worries for a fleeting moment. It takes a little longer for her to grow comfortable with purposely being so outspoken like this. ",
    
    
    // "character_object_atria Atria sprite is remove ",
    'hide character character_object_atria',


    // "Black screen Black scree ",
    "show scene black_screen",

    "character_object_narration She continues speaking, slowly but surely becoming more confident as she speaks her mind, whatever small bits of information or passion that come to her. ",
    "character_object_narration Some time passes, and not long later, she begins speaking like she had been waiting for this opportunity for years. ",
    "show scene Atria_CG with fadeIn",
    "character_object_narration Her face lights up with the most genuine smile you have seen from her since the two of you met. You and Kyo give each other accomplished glances, allowing her to ramble without being ridiculed for what seems like the first time in her life. ",
    "character_object_narration She seems like an entirely different person, babbling about whatever comes to her mind, in a world of her own. ",
    "character_object_narration Even a few giddy sounding giggles manage to leave Atria. It was clear as day that she found enjoyment in this. ",
    "character_object_narration Though after a fleeting moment, she stops, making eye contact as if just remembering there are people listening to her. Her eyes widen slightly, but a small smile remains on her expression. ",
    "character_object_atria ...Are you sure this is okay?.. Not suppressing the urge to talk... it feels so different. ",
    "character_object_kyo ... ",
    "character_object_kyo ...Damn she\'s traumatized. ",
    "character_object_narration You try to nudge Kyo, as this was most definitely *not* the time, but he ducks away. ",
    "character_object_player Of course it\'s alright. So, what do you say? Why don\'t you try making some friends by helping start up a club? ",
    "character_object_atria ...I&mdash; ",
    "character_object_narration Atria ponders this suggestion, taking a while to push away any troubles with her \'friends\'. ",
    "character_object_narration She shakes her head, clearing her mind before nodding with a newfound assurance. ",
    "character_object_atria I think I\'d like that. ",
    // end-of-CHAPTER-1-mark

    'stop music Atria_intro with fade 5',
    "show scene black_screen with fadeIn duration 2s",

    'jump CHAPTER_2',
  ],

  'CHAPTER_2': [
    // 'chap 2',
    // start-of-CHAPTER-2-mark
    "show video background_loop background loop animate__animated animate__fadeIn animate__faster",
    //" Chapter 2: Befriending the Shrewd Dreame ",
    "centered <div class=\"chapter-title-wrapper-1\"><p class=\"chapter-title typed-1\">Chapter 2:</p></div><div class=\"chapter-title-wrapper-2\"><p class=\"chapter-title typed-2\">Befriending the Shrewd Dreamer</p></div><p class=\"click-to-continue\">Click anywhere to continue</p>",
    "hide video background_loop animate__animated animate__fadeOut animate__faster",

    // "Background School Hallway Background: School Hallwa ",
    "show scene school_hallway_daylight with fadeIn",


    // "Skye's BGM Skye\'s BG ",
    'play music SkyeMaster with loop',


    'show character character_object_kyo Kyo_FP_Default normal',
    "character_object_player <i>Yawn</i>... ",
    "character_object_kyo <i>Yawn</i>... ",


    "character_object_narration You and Kyo sleepily make your way down through the quiet school corridor to the radio club room. Neither of you were fit to stand, let alone walk, but&mdash; ",
    "character_object_player Why are we here this early again? School hasn\'t even started yet... ",
    "character_object_kyo I\'m not happy about this either, but someone needs to prep the club equipment. S\'not like we got a tonna members to figure this shit out yet. ",
    "character_object_player We\'d have more members if you actually helped with recruitment y\'know. ",
    "character_object_kyo Hey, that\'s what <i>you\'re</i> for. <i>I</i> have very important club president things to deal with. ",
    "character_object_narration You grumble, but the both of you continue to make your way down the hall. Even if you lumbered the whole way like a zombie who had already lost its head, only the empty corridors and a snickering Kyo would witness such a scene. ",
   
   
   
    //"character_object_kyo Kyo sprite moves to left ",
    'show character character_object_kyo Kyo_FP_Default kyo-left with fadeIn',

    //"Skye_Smile at right, darkened Skye_Smile at right, darkene ",
    'show character character_object_skye skye_smile atria-darken atria-right with fadeIn',


    "character_object_???_skye <i>&mdash;so with some struggle, you are able to ingest the Baia Bamare figure that is now inside your stomach&mdash;</i> ",



    // "character_object_kyo Kyo_FP_Shocke ",
    'show character character_object_kyo Kyo_FP_Shocked kyo-left',


    "character_object_narration A muffled but excited voice catches your attention, stopping you in your tracks. The odd words are inescapable even to your drowsy heads. ",
    "character_object_???_skye <i>&mdash;Arkillia goes ahead and grabs the letter opener and puts it in their pocket...</i> ",
    "character_object_player ... ",
    "character_object_kyo ... ",
    "character_object_narration The voice continues to excitedly narrate, small mutters and giggles leaking from a small janitor\'s closet stuffed away in the corner of the school corridor. ",
    "character_object_narration Both you and Kyo look at each other baffled. ",
    


    // "character_object_kyo Kyo sprite disappear ",
    'hide character character_object_kyo',
    'show character character_object_skye skye_smile at center with fadeIn atria-darken',


    "character_object_???_skye <i>&mdash;You hear the doorknob turning. As the door swings open, Eliza reenters. Alright! Let\'s wrap things up here! She pops into her chair, reorganising her papers, unaware that you\'ve been searching through them&mdash;</i> ",
    "character_object_narration You approach the door, giving it a tentative knock that abruptly silences the voice. ",
    "character_object_player ... ",
    "character_object_narration You bring your hand forward to knock again when the door slowly creaks open. ",
    "character_object_closet_skye C-Can I help you? ",



    // "Skye Default Sprite, normal brightness Skye Default Sprite, normal brightnes ",
    'show character character_object_skye fix_skye_default normal',

    
    "character_object_narration The girl that meets you as the door opens has a cold look firmly set on her face, flinty eyes glaring at you imperiously. Had she not stuttered, her attempt at intimidation might\'ve actually worked... well, probably. ",
    "character_object_narration A slight flush climbs her face at her stumble, but she stubbornly continues to try and fake disinterest. She\'s failing miserably, but you could say she was attempting it with an almost admirable persistence. ",
    "character_object_player Uhhh... I heard you talking, and... was wondering what you were doing in the closet...? ",
    "character_object_narration The flush on the girl\'s face only grew, her flusteredness leaking into her words, making her ramble slightly. ",
    "character_object_closet_skye Well if you must know, I was conducting a very important meeting with my friends. The closet just happens to be a very convenient place for us to do so without any disturbance or without inadvertently disturbing anyone else. ",
    "character_object_narration She pushes the closet door open further, stepping out into the hallway. She dusts her skirt off primly, not at all subtly looking away in embarrassment. The closet, left open as it was, shows no one else inside. ",
    "character_object_narration You look back at Kyo in confusion, receiving an equally confused look from the blue haired boy. ",
    "character_object_narration You turn back to the girl who in turn looks at you strangely, darting her eyes towards Kyo questioningly. ",
    "character_object_narration You shrug off the girl\'s still strange choice of meeting location and lack of other people to have a meeting with. Not that you could really judge people on their social choices. After all, most would probably call you crazy for befriending Kyo... ",
    "character_object_player I heard you narrating? I think? You speak really well. ",
    "character_object_narration A surprised expression flickers through her face before her attempt at a cool expression slides back into place. Her expressiveness, still not hiding her feelings, allows a small bit of smug pride to shine through. ",
    "character_object_no_closet_skye Of course! I love playing as my party\'s Game Master, and I work hard to make every game enjoyable. ",
    "character_object_narration A shy expression flickers on her face before she extends her hand towards you in a handshake. ",
    "character_object_no_closet_skye My name\'s Skye, Skye Oriana, what\'s your name? ",
    "character_object_player I\'m {{player.name}}. Nice to meet you. ",
    "character_object_narration You take her hand with a smile, receiving a small smile back. ",
    "character_object_narration Kyo coughs behind you, reminding you that you were in school this early for a reason. At this rate, class would start before you could finish your duties for the radio club. ",

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
    // "Choice 1 Don't invite her to the radio club  Chapter_2_0011600 Choice 1: Don't invite her to the radio club ",



    // "Skye Sprite disappears  Chapter_2_0011800 Skye Sprite disappears ",
    'hide character character_object_skye',

    // "character_object_kyo Chapter_2_0011900 Kyo _FP_Default Appears ",
    'show character character_object_kyo Kyo_FP_Default normal',
    
    
    
    "character_object_narration   You take a step back, standing side by side with Kyo once again. He looks at you with a raised brow, unsubtly gesturing towards Skye and muttering quietly. ",
    "character_object_kyo You thinking of inviting her? ",
    "character_object_narration   Surprised at Kyo's sudden interest, you look at him questioningly. ",
    "character_object_player   Think it's a good idea? We don't really know her... ",
    "character_object_kyo  Man, do you think we're in any position to be picky? Bet you're just too chicken to ask. ",


    // "character_object_kyo Chapter_2_0013600 Kyo sprite disappears ",
    'hide character character_object_kyo',


    // "Skye Default Sprite Appears  Chapter_2_0013700 Skye Default Sprite Appears ",
    'show character character_object_skye fix_skye_default normal',




    "character_object_narration   You roll your eyes at his obvious bait &mdash; he was the one pushing recruitment off onto you so it wasn't like he could talk.  ",
    "character_object_narration   With a grumble, you turn back to Skye, who blinks weirdly at you, looking strangely at the both of you muttering at each other. ",
    //"Scene reconverges here  Chapter_2_0014400 Scene reconverges here ",
    "jump Chapter_2_after_choice_1",
  ],
  'Chapter_2_Choice_1_invite_her_to_the_radio_club': [
    // "Choice 2 Invite her to the radio club   Choice 2: Invite her to the radio club ",
    // "Scene reconverges here   Scene reconverges here ",
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
    "character_object_player Hey, we\'re currently recruiting members for the radio club, do you... wanna join? ",



    // "Skye_Smile Skye_Smil ",
    'show character character_object_skye skye_smile normal',



    "character_object_narration Skye\'s eyebrows shoot up in surprise, a small smile subconsciously spreading across her face. She looks at you in confused delight as you continue your invitation. ",
    "character_object_player We don\'t have a lot of members but we\'re pretty sure we can get more people to sign up. I think you\'d be a perfect fit for a broadcaster. You think you\'d be up for it? ",
    "character_object_narration A lost look of wonder briefly crosses her eyes before quickly dimming. She looks to the side, her eyes contemplative. Skye hums consideringly before answering mildly. ",
    "character_object_skye Well, I\'ll have to talk to my friends first, not sure I\'ll have the time considering all the things that I\'ve been needing to do lately. ",
    "character_object_narration Skye makes a big gesture of turning to the side, suddenly starting to talk loudly and gesturing broadly as if conversing with a group of people. ",
    "character_object_skye Well, what do you guys think? ",


    // "character_object_kyo Kyo_FP_Shocked sprite appear to the left ",
    'show character character_object_kyo Kyo_FP_Shocked kyo-left',
    'show character character_object_skye skye_smile atria-right',


    "character_object_narration You and Kyo look at her bewilderedly as silence meets Skye\'s question, but Skye only continues talking to the air, nodding and humming, responding as if someone was talking back to her. ",
    "character_object_skye &mdash;you\'re right, I\'m not in any other clubs right now but what about our campaigns? We usually conduct them right after school, we&mdash; ",
    "character_object_player ... ",
    "character_object_kyo ... ",
    "character_object_narration Skye continues talking to nothing. You\'re starting to get concerned that staying in the chemical and dust filled janitor\'s closet is having a more detrimental effect on her than one would expect. ",
    "character_object_player Uhhh... Skye? ",
    "character_object_narration Skye only hums at you, looking like she was only half listening to you as she continues to nod at the thin air near her. ",
    "character_object_player Who\'re you talkin\' to? ",
    "character_object_narration Skye answers your question distractedly, still seeming completely engrossed at whatever it is she\'s listening to. ",
    "character_object_skye I\'m talking to my friends, of course. ",
    "character_object_narration Skye gestures at the empty air beside her, only half listening to your question. ",



    'show character character_object_kyo Kyo_FP_Bruh kyo-left',
    "character_object_player ... ",
    "character_object_kyo ... ",



    "character_object_kyo Goddamn, she looks almost as crazy as you. ",
    "character_object_player Shut up. ",


    "character_object_narration You hiss at Kyo, throwing a smack to the short boy\'s shoulder that he dodges with an indignant yelp. You frantically turn back to Skye, hoping she didn\'t hear Kyo\'s expected but poorly timed smacktalk. ",
   
   
   
    "character_object_narration Skye, unfortunately, did seem to notice your antics and blinks at you once more, bewildered. ",
    "character_object_player He\'s like this with everyone, don\'t worry about what he says. In fact, a general rule is that you probably should ignore most of what he says. ",
   
   
   
   
    // "character_object_kyo Kyo Sprite becomes not the focus of scene, Skye Sprite centre ",
    // "Skye_Smile2 Skye_Smile ",
    'show character character_object_kyo Kyo_FP_Bruh kyo-left atria-darken',
    'show character character_object_skye skye_smile2 atria-right',




    "character_object_narration Kyo\'s exclamation of annoyance is drowned out by Skye\'s reaction. She doesn\'t react negatively to Kyo\'s ribbing. Instead, a bright smile suddenly breaks out on her face. ",
    "character_object_skye It\'s nice to know someone like me! A person who knows the pros to our more unusual friends... ",
    "character_object_player Huh? ",
    "character_object_kyo The fuck, did she just call me unusual? ",
    "character_object_narration Skye\'s expression only brightens further, her thick glasses not nearly covering her delight ",
    "character_object_skye You\'re pretty nice. ",
    "character_object_narration She looks consideringly to the side again, her smile turning contemplative. ",
    "character_object_skye I actually might consider visiting your club after all. After classes, of course. I\'m pretty sure I can help you with things even without joining the club! ",
    "character_object_narration She suddenly rushes to grab your hand, making you stumble back in surprise. She quickly gives the limb a firm, decisive shake, before backing away just as quickly. ",
    "character_object_skye I\'m looking at a very busy day ahead, so I\'ll be taking my leave now. It was nice to meet you, {{player.name}}! ",
    "character_object_narration Skye cheerfully skips off down the school hallways, quickly disappearing through the corridors. ",
    
    
    
    // "Skye Sprite disappears Skye Sprite disappear ",
    'hide character character_object_skye',

    'show character character_object_kyo Kyo_FP_Bruh normal',

    "character_object_narration You and Kyo stand there in dazed shock, both at the odd ending to the conversation and at her quick exit. ",
    "character_object_player Well... she was interesting. ",
    "character_object_kyo I mean, she\'s a little weird, but so was the other one, and you... ",
    "character_object_narration Kyo\'s words prompts an eye roll from you, breaking you from the reverie that Skye\'s abrupt getaway left you. The two of you finally start to make your way to the clubroom again, the strange encounter still fresh on your minds. ",
    "character_object_player I think she\'ll be a good addition to the team, and she\'s nice, she and Atria will probably get along great! ",
    "character_object_kyo Sure, if you can get her to join. Still haven\'t gotten to that part, remember? ",
    "character_object_narration You wince at Kyo\'s reminder, but as you remember her look of wonder when you first asked her the question, you don\'t think it\'ll be very difficult to convince her. ",
    "character_object_narration She was happy to be invited, she may have some reservations but you have a feeling that everything\'ll  turn out just fine. You shrug off Kyo\'s pessimism, shooting the shorter boy an eyeroll as the two of you enter the clubroom to deal with your duties for the day. ",
   
   
   
   
    // "Scene Change Scene Chang ",
    "character_object_narration <i><u>[Lunch Time]</u></i> ",



    "show scene school_hallway_daylight with fadeIn",
    // "School Hallway School Hallwa ",



    //TODO: insert Bell SFX here
    "play sound school_bell_sfx",
    "character_object_narration ** <i>RING</i> **",
    "character_object_narration You eagerly leave your class for your break &mdash; your early start to the day didn\'t leave you much time for breakfast, and the little you did eat didn\'t sustain you \'til lunch. You\'ve been starving all day and your stomach has been trying to make itself known. ",
    "character_object_narration Encouraged by its angry rumblings, you make your way to the school store. Hopefully you weren\'t too late to grab something. No one should have to handle the angry yowling that you know your stomach would continue to make if the beast wasn\'t fed. ",
    "character_object_narration You hum thoughtfully as you think about what you\'re going to buy when the sounds of particularly loud discussion catches your attention. ",
    "character_object_student_a &mdash;just admit it, you were the one who sprayed that ugly thing on the back of the classroom, didn\'t you. <i>Everyone</i> knows it was you. ",
    
    
    
    'show character character_object_skye fix_skye_default normal',
    // "Skye_Default Centered Skye_Default Centere ",





    "character_object_narration You notice a group of four gathered in a quiet corner. You aren\'t sure what\'s going on, but you recognize Skye standing with her back against the wall. ",
    "character_object_narration Three others were surrounding her, blocking her from any sort of way out. The interaction doesn\'t seem like it\'s going well. You quietly duck behind a nearby wall, wondering what\'s going on. ",
    "character_object_narration Skye sighs heavily, annoyance clear in her tone and expression. ",
    "character_object_skye Why would I graffiti the classroom? You\'re accusing me out of nowhere. <i>Again.</i> ",
    "character_object_narration Skye\'s exasperated answer seems to only spur them on, with another member stepping up to batter at her unwavering stance. ",
    "character_object_student_b Who else would\'ve done it? You\'ve always been attention seeking. Just the other day you were talking to thin air <i>again</i>! God, you\'re annoying on a good day but now you\'re actually destroying public property? Can you get any worse? ",
    "character_object_narration Skye scoffs at their accusations, squinting at her classmates incredulously. ",
    "character_object_skye No one knows who did it. The classroom doors are locked every night and they\'re only opened in the mornings, minutes before class starts. I wasn\'t even the first person to arrive today. ",
    "character_object_skye Your accusations have no merit and exactly zero people have come to tell me their thoughts of otherwise besides you three. This is the third time you\'ve accused me of shit I didn\'t do and it\'s honestly getting out of hand. You&mdash; ",
    "character_object_student_c Oh my god, can you just stop talking? No one wants to hear you yap all day! It\'s enough that you run your mouth in class all the time! ",
    "character_object_narration Rolling her eyes, Skye seems done with the whole interaction. She waves the person off, already moving to leave. ",
    "character_object_skye I\'m sorry that you\'re incapable of understanding anything higher than the most basic levels of communication, let me clear it up for you. I don\'t have time for your bs, get the fuck out of my way. ",
    "character_object_narration Skye attempts to sidestep her way out of the people surrounding her, but the increasingly angered trio move to block her way. ",
    "character_object_student_d You sure do know how to talk, you think people <i>like</i> you interrupting the class every time to spout whatever bullshit opinion you have? Everyone\'s tired of you. ",
    "character_object_student_b Yeah, I mean come on, even Sensei had to take you to the side the other day. You might be a teacher\'s pet but even they know you\'re a lunatic. ",
   
   
   
    // "Skye_Sad Skye_Sa ",
    'show character character_object_skye skye_sad normal',




    "character_object_narration Skye\'s bored expression finally cracks, vulnerability seeping through. She looks away, shifting uncomfortably before glaring back at the person speaking. ",
    "character_object_skye Sensei appreciates my contributions to the class, and they said so themself. They just wish that I give a chance to the rest of the class to express their opinions as well and I concurred. You three should stop talking about things that you don\'t understand. ",
    "character_object_narration The atmosphere was slowly getting more tense. It might get bad for Skye if you don\'t intervene. ",

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
   // "Choice 1 Don't Intervene  Chapter_2_0035500 Choice 1: Don't Intervene ",
    "character_object_narration   You stay back a little longer. You're sure your schoolmates wouldn't resort to violence and you weren't sure Skye would appreciate a practical stranger stepping in on things they weren't fully informed on.  ",
    "character_object_student_a  You actually believe that crap. ",
    "character_object_narration   One of the trio scoffs, a derisive sneer on their face.  ",
    "character_object_student_a  Sensei <i>has</i> to be nice to you &mdash; you get the best grades, so of course she sucks up to you. Nobody here actually <i>likes</i> you. ",
    "character_object_narration   They move closer towards Skye, one of them bringing up a hand to give her a shove. Skye furrows her eyebrows, moving back to avoid the advancing group before her expression crumples when she realises there's no way for her to escape.  ",
    "character_object_narration   You frantically step forward, unsure how everything escalated so quickly. There's no way you can leave Skye alone on this.  ",
   // "Scene reconverges here   Scene reconverges here ",
    "jump Chapter_2_after_choice_2",
  ],
  'Chapter_2_Choice_2_intervene': [
   // "Choice 2 Intervene  Chapter_2_0037600 Choice 2: Intervene ",
   // "Narration   	Scene reconverges here  ",
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
    "character_object_player Hey, that\'s enough! ",
    "character_object_narration You quickly make your way to the group. With them having parted in surprise at your exclamation, it\'s easy for you to take Skye by the hand, pulling her out of the circle that they surrounded her with. ",
    "character_object_player I don\'t know who you three are, but ganging up on someone is seriously low. From the little I\'ve heard, you don\'t even have a leg to stand on. Accusing somebody for something you have no proof of is ridiculous and mocking someone for participating in class is pathetic. ",
    "character_object_student_c Who&mdash; ",
    "character_object_narration You interrupt whatever response they were about to make, not really willing to hear what these assholes have to say. ",
    "character_object_player You three should really take up some self awareness, seems like it\'s in short fucking supply around here. ",
    "character_object_narration You quickly remove yourself from the situation while tugging a quiet Skye along behind you, moving to try and find a quiet place to give her some privacy. ",
    "character_object_narration Skye stays quiet during the entire interaction. As you arrive at a quieter corner, you face her again, concerned. You don\'t know her very well, but from the little interaction you\'ve had with her, her silence seems uncharacteristic. ",
    "character_object_player Skye, are you okay? I\'m sorry for eavesdropping but you looked like you needed help. ",
    "character_object_narration Skye looks away, her shoulders hunched, defences built all the way up. She looks clearly uncomfortable and not willing to talk about what had just happened. ",
    "character_object_skye I\'m fine... Thanks for getting me out of there, those three were getting way too cocky. ",
    "character_object_player Would you like to report them to a teacher? I heard you mention that this wasn\'t the first time this has happened... ",
    "character_object_narration Skye shakes her head, dismissing the notion immediately. ",
    "character_object_skye No no, it\'s fine, they\'re not&mdash; they don\'t even bother me usually. ",
    "character_object_narration A heavy silence settles between the two of you. You\'re not really sure what to say; you don\'t think you really know Skye well enough to comfort her. ",
    "character_object_narration Skye suddenly starts talking again, finally looking at you directly. ",
    "character_object_skye People like the discussions that I bring up in class. They say that my insight helps them learn more about the subject we\'re learning about while simultaneously allowing them to not have to be called on unexpectedly when they\'re not willing to. I&mdash; ",
    "character_object_narration Skye cuts herself off before she finishes her sudden explanation, frustration leaking into her voice. A shuddering breath leaves her before she closes her mouth, pursing her lips. ",
    "character_object_skye I&mdash; never mind, sorry for interrupting your break, I should really be getting back to class. ",
    "character_object_player Skye&mdash; ",





    // "Skye Sprite disappears Skye Sprite disappear ",
    'hide character character_object_skye',





    "character_object_narration Your attempt at talking to her fails as Skye ignores you, making another quick exit before you could really react. This time, you didn\'t feel as optimistic about your interactions as the first time you met her. ",
    "character_object_narration ** <i>RING</i> ** ",
    "character_object_narration The bell rings, signifying the end of your break time. It\'s a good thing your stomach had long since curdled at the thought of food after the bitter situation you just experienced. ",
    "character_object_narration Your face scrunches in worry, but you hurry yourself to your classroom. There isn\'t much you can do. Maybe Skye needs some time to herself. ",
    
    
    
    // "Scene Change Scene Chang ",
    // "After School After Schoo ",
    "character_object_narration <i><u>[After School]</u></i>",
    "show scene school_hallway_daylight with fadeIn",
    // "School Hallway Day School Hallway Da ",

    // TODO: insert school bell sfx
    "play sound school_bell_sfx",
    "character_object_narration ** <i>RING</i> ** ",




    "character_object_narration The school bell finally signals the end of the school day. ",
    "character_object_narration You rush out as soon as you can, the afternoon incident still hanging heavily in your mind, completely distracting you for the latter part of your school day. ",
    "character_object_narration You make your way to the clubroom hoping that Skye would keep her word of visiting, at least just so that you could talk to her. You didn\'t like that she had left upset at lunch. ",
    
    
    
    // "Background Change Radio Clubroom Basic + Printer + Mic Background Change: Radio Clubroom Basic + Printer + Mi ",
    "show scene music_room_basic_printer_mic_laptop with fadeIn",


    // "character_object_kyo Kyo_FP_Defaul ",
    'show character character_object_kyo Kyo_FP_Default normal',
    
    
    "character_object_narration You enter the clubroom to see that Kyo has already made himself comfortable. Game console in hand, his feet casually settled on the clubroom\'s table, and his chair perched precariously on its back legs. ",
    "character_object_player Do you ever leave this room? Why are you here already, classes <i>just</i> ended. ",
    "character_object_kyo \'Ey, don\'t blame me for you being slow, running through the halls ain\'t nothin\'. ",
    "character_object_narration You roll your eyes at the shorter boy, settling your bag on the table and slumping yourself on one of the chairs, heaving out a deep sigh. ",
    "character_object_narration Kyo looks up at your dramatics, raising an eyebrow at the long face you were pulling. ",
    "character_object_kyo \'Sup? ",
    "character_object_narration You scratch your head, not looking up at him, not sure how you should answer the question. ",
    "character_object_player I met up with Skye during lunch break. Some people were bothering her, and she really wasn\'t having a good time. ",
    "character_object_narration Kyo\'s eyebrows rise further at the mention of your new acquaintance, not expecting you to meet her so soon after your meeting this morning. ",
    "character_object_kyo Yeah? ",
    "character_object_player Yeah, they were talking about someone graffitiing their classroom? Something crazy like that, been hearing rumours about stuff like that happening all over school lately. ",
    
    
    // "character_object_kyo Kyo_FP_Shocke ",
    'show character character_object_kyo Kyo_FP_Shocked normal',


    "character_object_narration Out of the corner of your eye, you notice Kyo freezing in his seat. He plops the precariously tilting furniture back down to a more proper position. You finally look up, raising your brow at his sudden tension. ",
    "character_object_player People\'ve been spreading rumours about ghosts around lately too, graffiti appearing and disappearing out of nowhere, weird noises, weird light, stuff like that. ",
    "character_object_narration Kyo continues to tense as you proceed describing the supernatural rumours going around your school. A smirk grows on your face as you stand up from your seat. ",
    "character_object_player You scared of ghosts, Kyo? ",
    "character_object_narration You come up to the blue haired boy, swinging an arm up to his shoulders &mdash; a move he deftly avoids. He quickly stands up from his own seat. ",
    "character_object_kyo I\'m gonna slip out for a bit &mdash; got a couple of things I need to deal with for class tomorrow. ",
    "character_object_narration Your eyes widen, surprised at his abrupt need to leave and concerned that you had gone too far with your teasing. ",
    "character_object_player Whoa, you don\'t have to leave. We don\'t have to talk about ghosts if you don\'t want to. ",
    
    
    // "character_object_kyo Kyo_FP_Defaul ",
    'show character character_object_kyo Kyo_FP_Default normal',



    "character_object_narration Kyo rolls his eyes, waving off your silent apology while moving to leave the room. ",
    "character_object_kyo What? No, I just remembered I got shit to do, hold down the fort for me will you? ",
    "character_object_player Aren\'t you gonna help me convince Skye to join the club? ",
    "character_object_narration Kyo raises an eyebrow at you, stopping before opening the clubroom door, face set in a deadpan. ",
    "character_object_kyo You think my caustic ass\'ll help convince her to <i>join</i>? ",
    "character_object_narration You wince slightly, remembering Kyo impulsively ribbing Skye just this morning. She didn\'t seem to take offence, but maybe exposing her too much to Kyo\'s sharp tongue too early would be ill-advised. ",
    "character_object_player Don\'t you wanna stick around to at least greet her? ",
    "character_object_kyo When\'s she coming? Does she even know where the clubroom is? ",
    "character_object_narration Silence envelops the room as his question settles, before you groan in frustration, bringing your hand up to cover your face. Kyo\'s laughter rings throughout the room, the annoying gremlin finding pleasure in your misery. ",
    "character_object_player I forgot to tell her that we\'re using the music room this morning... ",
    "character_object_kyo You better go find her then, I\'m dealing with my shit first. ",
    "character_object_narration Kyo shrugs, casually slipping out of the room and leaving you alone with your thoughts. ",
  
  
  
    // "character_object_kyo Kyo Sprite Disappear ",
    'hide character character_object_kyo',



    "character_object_player ... ",
    "character_object_narration You sigh in exasperation, finally standing up to go and find Skye, wherever it is she could be. ",
    "character_object_narration You make your way to the door, opening it before noticing something in the corner of your eye. ",
    "character_object_narration You snap your head in surprise, chasing the glimpse of bright neon shapes before it disappears behind the blink of your eyelids. ",
    "character_object_narration You stare at where you thought you saw... whatever it was you thought you saw, furrowing your brows at the wall. You could\'ve sworn&mdash; ",
    "character_object_???_skye {{player.name}}! ",
    "character_object_narration A voice calls out to you from the hallway right outside the door you just opened, snapping you out of your thoughts. ",
   
   
   
   
   
    // "Skye_Default Skye_Defaul ",
    'show character character_object_skye fix_skye_default normal with fadeIn',





    "character_object_player Skye! You\'re here? ",
    "character_object_narration You blurt out her name in surprise, instinctively opening the clubroom door further and stepping back to allow the dark haired girl to step inside. She looks around the room, raising her brow curiously. ",
    "character_object_skye Of course, I did promise I would come. ",
    "character_object_player How\'d you find the clubroom? I forgot to tell you where it was this morning... ",
    "character_object_narration Skye waves off your question, turning to look at you curiously. ",
    "character_object_skye The clubrooms are almost always on the first floor. I was just walking around to look when I saw you at the door... Were you looking at something? ",
    "character_object_player Huh? ",
    "character_object_skye You looked a little out of it. I saw you for quite a little bit before calling you. ",
    "character_object_narration You look back at the wall, pursing your lips thoughtfully before shaking your head. ",
    "character_object_player Was nothing, probably just tired. I\'m glad you came by! I wasn\'t sure if you would, uhh, after... ",
    "character_object_narration You trail off a little, cursing yourself for bringing up the grim situation from the afternoon. You thought you were getting better at not putting your foot in your mouth, yet here you are, swallowing your whole fucking shoe. ",
    "character_object_narration A short silence comes after the words awkwardly dry up in your mouth, making you sweat bullets. Skye picks up on the conversation, moving deeper inside the room and casually settling herself on one of the chairs. ",
    "character_object_skye The graffiti\'s gone. ",
    "character_object_player What? ",
    "character_object_narration You blink bewilderedly. Skye shrugs, casually leaning her head on her arm settled on the table. ",
    "character_object_skye The class left for gym class a little bit after lunch and by the time we came back, poof, it just...disappeared. ",
    "character_object_skye The teachers figured it was a temporary prank someone was pulling. They\'re still looking for the culprit, but nothing points to it being anyone in class, considering that we were all accounted for at gym... ",
    "character_object_player And... those guys that were bothering you? ",
    "character_object_skye Well they didn\'t apologise, but they did look pretty pissed that it was pretty clearly not me. ",
    "character_object_narration Skye shrugs faux casually. It\'s difficult to figure out what she\'s thinking. She seems a little bit more closed off than she was this morning. ",
    "character_object_skye Anyway, you don\'t have to worry about those idiots, they\'re way more of a nuisance then they are actually troubling. My class is filled with a lot of kind and friendly people, so their voices get drowned out most of the time. ",
    "character_object_narration Skye smiles at you reassuringly, looking up from her previously contemplative pose. ",
    "character_object_skye Now, why don\'t we discuss your club? It\'s what you invited me here for right? ",
    "character_object_player Yeah... about joining... ",
    "character_object_skye Still not too sure that\'d be necessary. ",
    "character_object_skye If all you need is another voice to help in broadcasting, or even if you need some journalist help to find some news, I\'ll be happy to help out on a more occasional, freelance basis. As long as I\'m given some credit for the work, of course. ",
    "character_object_narration You scratch your head in confusion. If Skye was willing to help the club, why not just join and get the benefit of having an after school sanctioned activity? You open your mouth to ask when the sound of the clubroom door opening catches both of your attention. ",
  
  
  
  
  
  
    // "character_object_atria Atria1_Happy appear ",
    'show character character_object_atria atria1_happy atria-right',


    'show character character_object_skye fix_skye_default skye-left',




    "character_object_atria Good evening! ",



    // "character_object_atria Atria1_Timi ",
    'show character character_object_atria atria1_timid atria-right with fadeIn',
    
    
    
    "character_object_narration Atria\'s eyes widen as she notices Skye\'s presence in the room, her surprised expression quickly turning to a bashful smile. Atria shuffles quietly into the room, clearly apprehensive but still trying her best to be welcoming. ",
    "character_object_atria Oh! H-hello, do we have a new recruit? ",
    "character_object_player Umm, not necessarily... ",
    "character_object_narration Atria looks at you questioningly, moving closer to the table and placing her things on it. She fidgets awkwardly with her things before looking up at Skye, smiling uncertainly towards the taller girl. ",
    "character_object_atria I\'m Atria. Umm, i-it\'s nice to meet you. I\'m a... a new member of the club too. ",
    "character_object_skye S-Skye. I&mdash; well, I haven\'t really&mdash; I\'m not too sure about joining really... ",
    "character_object_narration Atria\'s stumbling responses were sort of expected, but Skye\'s stuttering prompts a raised eyebrow from you, confused at her sudden inarticulateness. Noticing your expression, she huffs indignantly, hissing her next words quietly at you. ",
    "character_object_skye Seeing new faces makes me anxious sometimes! You and your friend definitely caught me off guard this morning... ",
    "character_object_player Oh yeah, you met Kyo this morning. Sorry he couldn\'t be here, he stepped out just now. ",
    "character_object_skye Oh. That\'s fine, I didn\'t bring any of my friends here either. Communication isn\'t easy when other parties can\'t easily talk to or even see one another. ",
    "character_object_narration You laugh awkwardly remembering Skye\'s...friends. It might be a little awkward, navigating Skye\'s...eccentricities, but you feel like it would work out... you might have to invest in a sturdier poker face soon though. ",
    "character_object_narration Atria tilts her head in confusion, unaware of all that happened that day. ",
    "character_object_narration Skye flushes brightly, before turning back to the now confused but still shyly smiling Atria. She coughs awkwardly, bringing the discussion back to focus. ",
    "character_object_skye Anyway, like I said, I\'m not sure if joining the club would be beneficial for everyone involved. I\'d be happy to help y\'all out in general though, you seem like really nice people, mhm. ",
    "character_object_atria O-Oh, that\'s too bad. I\'m sure you\'d be a great new member. ",
    "character_object_player I agree, that\'s kinda why I invited you in the first place. I\'m happy that you\'re willing to help us generally, but honestly, I\'d like you to stick around. I think we\'d all get along great. ",
   
   
   
   
   
    // "Skye_Sad  Skye_Sad ",
    'show character character_object_skye skye_sad skye-left',








    "character_object_narration Skye seems to flinch at your words, her previous light-hearted expression disappearing in an instant. She looks away from you and Atria, clearly uncomfortable. ",
    "character_object_narration Your eyebrows furrow with worry, you share a glance with Atria, who is now frowning as well. ",
    "character_object_player Can I ask why you... <i>don\'t</i> want to join us? You did mention you hadn\'t signed up for any other club yet, and you don\'t seem to be against the idea in general. ",
    "character_object_skye I-I\'m a very busy woman. I can\'t just start up a new club out of nowhere! After all, who would conduct my campaigns, and... ",
    "character_object_narration Skye doesn\'t sound convincing, even to herself. She slumps in her chair, sighing tiredly, running her hand through her hair nervously. ",
    "character_object_skye I-It\'d just be easier for all of us. You wouldn\'t have to deal with me too regularly, and we get to go our own ways. ",
    "character_object_narration A short silence comes after her words. You\'re shocked that the cheerful girl from this morning had given you such a self-depreciating answer. Atria, having no basis for the girl\'s personality, shyly answers, noticing the tense mood. ",
    "character_object_atria I understand, I never really got on with people very easily either. ",
    "character_object_narration Atria smiles awkwardly, trying to reassure the clearly struggling Skye. ",
    "character_object_narration You appreciate her support in this situation. It helps ground you a little, having someone else\'s perspective on this. Skye shakes her head, dismissing the notion. ",
    "character_object_skye No no, you\'re both really nice, <i>I</i> tend to not work well with others. People tend to be really uncomfortable around me, and even if you didn\'t mind tolerating me, I\'ll just bring the mood down. Clubwork and community stuff like this never really suited me. ",
    
    
    
    // "character_object_atria Atria1_Sad Sprite ",
    'show character character_object_atria atria1_sad atria-right',


    "character_object_narration Your face scrunches at hearing the familiar narrative from this afternoon, discomfort growing at hearing Skye parroting her aggressors. ",
    "character_object_player Is this about what those people said on break? If it is, I think we should be able to find out on our own whether or not we get along. I know we just met this morning, but I think you\'re pretty great. ",
    "character_object_skye You don\'t get it, <i>everyone</i> gets tired of me eventually. This isn\'t about what those idiots think, it\'s just a fact. I like to keep whatever amicable acquaintances I have and I do that by keeping some distance. ",
    "character_object_narration Her voice is wrought with agitation and yours, unfortunately, rises in return. Your discomfort turns to upset at the thought of your possible friend thinking so poorly of herself, and by extension, of everyone else around her. ",
    "character_object_player I think you\'re being a little unfair here. I\'d be more comfortable with your decision if you just weren\'t sure of the club itself, or if you\'re not comfortable with interacting too closely with what would be veritable strangers. ",
    "character_object_player But, what\'s happening is that you\'re refusing to give us any credit! You\'re so sure we\'re like those assholes that you won\'t give us a chance to even form our own opinions! ",
    "character_object_skye That\'s not what I\'m saying at all! I\'m just telling you it\'s not gonna work out! ",
    "character_object_skye Maybe it is about those guys, but didn\'t you hear them? I talk weird, I talk too much, I\'m annoying, people can\'t see Pio-chan and the others and they hate it when I talk to \'em. This stuff isn\'t just a them thing! ",
    "character_object_narration Skye\'s arguments, having reached a fever pitch, suddenly tapers off. She looks to your side where Atria is before blowing out a huge sigh, agitation slowly bleeding out of her. ",
    
    

    'show character character_object_atria atria2_timid atria-right',
    // "character_object_atria Atria2_Timi ",


    "character_object_narration You turn to look at Atria, who looks almost frozen in panic. The blonde was not at all prepared to see her possible new friends fighting, especially so close after her own falling out with her previous awful friends not that long ago. ",
    "character_object_narration Skye looks away, still perturbed by your argument but no longer so fired up, leaving her sounding just... painfully tired. ",
   
   
    // "Skye_Default Skye_Defaul ",
    'show character character_object_skye fix_skye_default skye-left',


    "character_object_skye Things are just way simpler if I\'m not around most other people. I\'m easier to digest in small doses, so you\'ll get tired of me too, sooner or later. I\'m better off spending time with my friends anyway, and I can\'t do that with other people around. They look at me like I\'m crazy. ",
    "character_object_narration Her joke dies an awkward death. You\'re not ready to meet her eyes and you aren\'t really sure what to say. ",
    "character_object_narration You want to apologise for getting so worked up and for butting in where your opinions may not be wanted, but you don\'t like that she thinks so badly of herself. ",
    "character_object_skye I think we\'re all a bit tense right now, maybe this wasn\'t such a good idea. I-I\'m just gonna go. ",
    "character_object_narration You whip your head back to her, eyes widening.  You open your mouth to call out and clear things up, but a voice stops you from doing so. ",
    
    
    // "character_object_atria Atria2_Sa ",
    'show character character_object_atria atria2_sad normal atria-right',


    "character_object_atria W-wait! ",
    "character_object_narration Atria quickly gets up from her chair, grabbing Skye\'s hand to prevent her from leaving. The timid girl holds the limb, trembling, lips pursed tightly as tears prick her eyes. ",
    "character_object_atria {{player.name}}\'s just worried about you. I-I am too. It\'s not right that people\'ve made you think that you don\'t get to have friends, j-just because you\'re a little different. ",
    "character_object_narration Atria smiles uncertainly down at their clasped palms, tears still pricking her vision. ",
    "character_object_atria I know the feeling... ",
    "character_object_narration Skye\'s eyes widened in surprise at the girl\'s sudden willfulness. Yours were too at this point. You knew she had some spunk to her from the way she stood up to her former friends, but you weren\'t expecting this from her. ",
    "character_object_atria You know what I think? ",


    // "character_object_atria Atria2_Nervous Sprit ",
    'show character character_object_atria atria2_nervous atria-right',


    "character_object_narration Atria speaks up once more, looking up at Skye\'s eyes. Her smile quirks, awkwardly but genuinely, trying to reassure the taller girl. ",
    "character_object_atria You\'ve probably gone through a lot of things that\'ve caused you pain. I\'ve had to work on my own things recently and I get that it is so... so scary to trust other people after everything. ",
    "character_object_narration The blonde circles the table to move closer to the bespectacled girl, before pulling at their clasped hands, bringing the two closer together. Her eyes shine brightly with unshed tears. ",
    "character_object_atria But, maybe you\'d like some help with it? I think we both could use some practice with this friend thing. Why don\'t we try this out together? ",
   
   
    // "Skye_Smile1 Skye_Smile ",
    'show character character_object_skye skye_smile skye-left',


    // "character_object_atria Atria1_Happ ",
    'show character character_object_atria atria1_happy atria-right',



    "character_object_narration Skye\'s eyes are still wide with disbelief, unprepared for the whirlwind of a girl that had just swept her off her feet. A small smile cracks onto her face, still uncertain but now filled with a familiar lost wonder. ",
    "character_object_skye O-okay. ",
    "character_object_narration At this point, you aren\'t sure if you should stay in the room. It feels like you\'re interrupting something even as the two finally separate, still looking at one another. You finally clear your throat, breaking the two\'s reverie, returning their gaze towards you. ",
    "character_object_player Skye, I\'m sorry for how I acted. Atria was right, I was worried, but I should\'ve been more sensitive. I... shouldn\'t have made it about myself. ",
    "character_object_narration Skye smiles at you for the apology, moving towards you and extending an arm for you to grab. You gratefully take it, grasping onto her palm to shake. Her mouth quirks up in a rueful smirk. ",
    "character_object_skye I was getting too in my head, I think. I\'m happy that you cared enough to try and snap me out of it. ",
    "character_object_narration You smile at each other, relieved that your fight hadn\'t caused irreparable damage to your new friendship. You think about the reason you fought in the first place. ",

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
    //"Choice 1 Don't invite her to the radio club  Chapter_2_0086300 Choice 1: Don't invite her to the radio club ",
    "character_object_narration   You aren't sure how appropriate it would be to bring up the subject again after such a charged exchange, especially considering that the tension was one started by you. You stay quiet, releasing your hold on her hand.  ",
    "character_object_narration   To your surprise, a voice pipes up from beside Skye, finally approaching closer after your apologies were finished. ",

    "show character character_object_atria atria2_happy atria-right",

    "character_object_atria  Skye? Would you maybe consider joining us? Maybe even if it's later on? ",
    "character_object_narration   You're surprised once again by the girl's boldness. Looks like <i>she</i> was the braver one out of the two of you. You smile at Skye, emboldened by your friend to ask again. ",
    //"Scene reconverges here   Scene reconverges here ",
    "jump Chapter_2_after_choice_3",
  ],
  'Chapter_2_Choice_3_invite_her_to_the_radio_club': [
   // "Choice 2 Invite her to the radio club  Chapter_2_0087800 Choice 2: Invite her to the radio club ",
    //"Narration   	Scene reconverges here  ",
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
    "character_object_player Would you consider it? Joining us at the club? We\'d love to have you. ",
    "character_object_narration You aren\'t sure if the invite would be taken well, but Skye smiles softly at the two of you. She nods her head, one of her hands coming up to rest on her waist as the next words come out of her mouth. ",
   
   
    "show character character_object_skye skye_smile2 skye-left",
    "character_object_skye Well, you two do look like you could use some help. Where do you think we should start? ",


    "character_object_narration Atria smiles softly as she takes Skye\'s hand in hers once more, dragging her to sit on the table as they start discussing ideas for the radio club, what they would prepare for the first broadcast, what news was popular in the school. ",
    "character_object_narration Whatever it is, it seems like they\'re having fun. You can hear Skye snorting with laughter, Atria\'s quieter giggles interspersed a little more rarely in the conversation. ",
    "character_object_narration You smile at them as you move to settle on the table. ",

    // Skye CG
    "show scene skye_cg with fadeIn",

    "character_object_narration Kyo slips into the room in the middle of all the excitement, quietly sneaking into the corner of the room, settling for looking at what was going on. ",
    "character_object_narration You move to greet him &mdash; and maybe grill him for missing yet another certified moment with your new club members &mdash; when Kyo motions for you to stop. ",
    "character_object_narration He moves his hands in a shushing motion, gesturing for you to be quiet. The two girls continue their excited discussion, completely unaware of Kyo\'s entrance. ",
    "character_object_narration You nod your head at the blue haired boy, returning to look once more at your new friends fondly. You definitely don\'t want to interrupt their bonding either. ",
    "character_object_narration You\'ll have time for more proper introductions later. ",
    // end-of-CHAPTER-2-mark


    'stop music SkyeMaster with fade 5', 

    // TEMPORARY END FOR DEMO
    "show scene black_screen with fadeIn duration 2s",
    'to be continued...',
    "jump END",

    'jump CHAPTER_3'
  ],

  'CHAPTER_3': [
    // 'chap 3',
    // start-of-CHAPTER-3-mark
    //" Chapter 3: Confronting the Moon Princ ",
    "show video background_loop background loop animate__animated animate__fadeIn animate__faster",
    "centered <div class=\"chapter-title-wrapper-1\"><p class=\"chapter-title typed-1\">Chapter 3:</p></div><div class=\"chapter-title-wrapper-2\"><p class=\"chapter-title typed-2\">Confronting the Moon Prince</p></div><p class=\"click-to-continue\">Click anywhere to continue</p>",
    "hide video background_loop animate__animated animate__fadeOut animate__faster",


    // "Radio Club Basic + Printer + Mic + Laptop Radio Club Basic + Printer + Mic + Lapto ",
    "show scene music_room_basic",


    // "character_object_esmeray Esmeray\'s BGM ",
    'play music EsmerayMaster_1  with loop',



    "character_object_narration It\'s been a couple of days since Skye joined the group. ",
    "character_object_narration The Radio Club is now livelier than ever, much to Kyo\'s playful dismay, as you, Atria, and Skye chat loudly and often in the club room. ",
    "character_object_narration Now, all you need is one more member to make the club official. But who? ",



    // "Transition to School Hallway Day Transition to School Hallway Da ",
    "show scene school_hallway_daylight with fadeIn",




    "character_object_narration As you\'re deep in thought and walking down the hallways of ILUNA Academy, you snap to attention when you hear loud giggles, flirts, and cheers coming from a crowd in front of you. ",
   
   
   
   
    // "character_object_esmeray Esmeray (Amused) Appears on Screen, labeled as ?? ",
    'show character character_object_esmeray Esmeray_amused normal',




    "character_object_narration In the center of the crowd is a tall dude with dark turquoise hair, lots of black and shiny bling, and pretty turquoise-gold eyes. ",
    "character_object_narration Some of the people in the crowd have signs in their hands. ",
    "character_object_narration \"We love you, Esmeray!\" says the one in the hands of an enthusiastically cheering girl. ",
    "character_object_narration \"The Prince of the Dark Moon, and my heart <3\" says another in the hands of a tall, totally smitten boy. ",
    "character_object_narration The person in the center winks at the two of them, a lax smile on his face as he does so. ",
    "character_object_narration The two start squealing before the girl faints in the boy\'s arms, making him drop his sign. ",
    "character_object_player That must be the popular guy of the school I heard about. Esmeray Regulus, I think. ",
    "character_object_narration You don\'t really pay too much attention to the crowd. If anything, it\'s a little annoying. ",
    "character_object_narration The bell rings, meaning most students will be late to their class if they don\'t get going, including yourself. ",
    "character_object_student 	See you later, Esmeray! ",
    "character_object_narration You walk past the crowd, hearing Esmeray laugh at the random person and wave at them. ",
    "character_object_narration 	You slow down your pace. Something about that laugh is weird. ",
    "character_object_narration 	You turn around, looking closely at Esmeray. ",
    "character_object_narration Sure enough, although Esmeray\'s face is smiling, his eyes look empty. ",
    "character_object_narration You move so that you\'re partially hidden by a nearby trash can, continuing to observe Esmeray. ",



    // "character_object_esmeray Esmeray Unamuse ",
    'show character character_object_esmeray Esmeray_unamused normal',



    "character_object_narration Once the crowd is gone, you see Esmeray\'s smile fall, and his entire face becomes cold. He then starts trudging to his class. ",
    "character_object_narration Your eyes widen at what you\'ve just seen, but your thoughts will have to wait. You\'re late to class! ",
   
   
   
   
    // "Transition to Hallway BG Transition to Hallway B ",
    "show scene school_hallway_daylight with fadeIn",




    // "No Sprites No Sprite ",





    "character_object_narration The day is finally over, and you\'re heading to the Radio Club. You need to strategize with Kyo on how to gain your last member. ",
    "character_object_narration On your way there, you hear the faint sounds of guitar chords accompanied by a muffled voice. ",
    "character_object_player I shouldn\'t peek... I\'m a little busy... ",
    "character_object_narration But your curiosity is winning today. ",
    "character_object_narration Quietly, you walk towards the source of the noise. ",
    "character_object_narration As you get closer, the guitar chord sounds morph into a soft melody, and with it the muffled voice is now distinct and clear. ",
    "character_object_narration The voice leads you to the entrance of an empty classroom, door slightly ajar, enough to hear the song. ",
    "character_object_narration The lovely tenor voice makes you almost breathless. You have to see who\'s making that song. ",
    "character_object_narration You creep up closer to the crack of the door and carefully pull it wider. Your eyes open in shock. ",


    // "character_object_esmeray Esmeray CG ",
    'show scene Esmeray_CG',



    "character_object_esmeray 	Don\'t need the plastic smiles all up in my face ",
    "character_object_esmeray 	Just wanna be a moonchild and stay in outer space~ ",
    "character_object_esmeray 	Don\'t wanna keep on going on like this ",
    "character_object_esmeray 	These people all really like to miss ",
    "character_object_esmeray 	The fact that I don\'t care... ",
    "character_object_esmeray 	A fact that they can\'t bear... ",
    "character_object_esmeray 	... ",
    "character_object_esmeray 	...Someday I will travel far ",
    "character_object_esmeray 	Riding on a shooting star ",
    "character_object_esmeray 	Leaving won\'t give me a scar ",
    "character_object_esmeray   Cause all I need is me and my guitar~ ",


    //"END CG END CG ",



    // "character_object_esmeray Esmeray Genuin ",
    'show character character_object_esmeray Esmeray_genuine normal',



    //"Generic Classroom background Generic Classroom background ",
    "show scene generic_classroom_bg with fadeIn",

    "character_object_narration 	You\'re in awe, to say the least. ",
    "character_object_narration Who would\'ve thought that the school\'s resident popular guy is also a musical talent! ",
    "character_object_player 	...How amazing would it be if he joined the Radio Club? ",
    "character_object_player ...Yeah! Wouldn\'t he be a good person to arrange music to broadcast? His voice is perfect! ",
    "character_object_player ... ",
    "character_object_player Should I try to invite him? ",

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
    //"character_object_esmeray Chapter_3_0012300 Choice 1: Knock and try to invite Esmeray to the Club ",
    "character_object_narration   You take a deep breath and knock quietly before walking into the classroom.  ",




    // "character_object_esmeray Chapter_3_0012800 Esmeray Unamused ",
    'show character character_object_esmeray Esmeray_unamused normal',



    "character_object_narration   Esmeray immediately stops playing, his face loses its smile, and he turns to you with a cold face.  ",
    //"Scene reconverges here  Chapter_3_0013200 Scene reconverges here ",
    "jump Chapter_3_after_choice_1",
  ],
  'Chapter_3_Choice_1_dont_knock_and_invite_esmeray': [
    //"character_object_esmeray Chapter_3_0013400 Choice 2: Don't Knock and invite Esmeray ",
    "character_object_narration   You hesitate in asking Esmeray to join.  ",
    "character_object_narration   He's very high profile! Why would he want to join a club that no one knows about?  ",
    "character_object_narration   While you were deliberating, you accidentally shuffle in place, bumping into the classroom's door.  ",
    //"character_object_narration   *CREAK* Door creak SFX  ", //? idk what to do with this...
    
    
    // "character_object_esmeray Chapter_3_0014500 Esmeray Unamused ",
    'show character character_object_esmeray Esmeray_unamused normal',


    "character_object_narration   Quickly, Esmeray stops playing, his face loses its smile, and he turns to the door with a cold face.  ",
    "character_object_narration   You laugh awkwardly, before slowly entering the room.  ",
    //"Scene reconverges here  Chapter_3_0015000 Scene reconverges here ",
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
    "character_object_player 	...Hey! That\'s some amazing playing, you\'re really talented. ",
    "character_object_esmeray ...",
    "character_object_player ... ",
    "character_object_player So, I, uh, I\'m part of the Radio Club, and we\'re currently recruiting members. I think you\'d be an amazing fit for it! ",
    "character_object_player So, what do you say? Would you like to join the Radio Club? ",



    'show character character_object_esmeray Esmeray_angry normal',
    "character_object_esmeray 	...Hah! As if I\'d join your club. ",



    "character_object_esmeray Nah, if it\'s full of eavesdroppers like you, then hell, I definitely don\'t want to be in any part of it. ",



    // "character_object_esmeray Esmeray sprite disappear ",
    'hide character character_object_esmeray',


    
    "character_object_narration Esmeray walks out, leaving you speechless and watching his shrinking figure as he walks down the hallway. ",
    "character_object_narration Gone was the smile from before. ",




    // "Proceed to next scene Proceed to next scen ",



    // "School Hallway Day School Hallway Da ",
    "show scene school_hallway_daylight with fadeIn",
    // "character_object_esmeray Esmeray Neutra ",
    'show character character_object_esmeray Esmeray_neutral normal',



    "character_object_narration The next day, you spot Esmeray in the hallway on the way to the Radio Club. Luckily, he was alone. ",
    "character_object_narration Although he rejected you last time, you won\'t give up! ",
    "character_object_narration You know that with his talent in music, he would definitely be a great addition to the club. ",
    "character_object_narration He is a hidden gem! Not only could he use his talent in music to compose soundtracks for the club, but his voice also fits that of a charming broadcaster perfectly. ",
    "character_object_narration And, who knows? He could be as good a friend as Atria, Skye, or Kyo. ",
    "character_object_narration With conviction, you decide that this moment in the hallway would be a good time to try and get him to join the Radio Club. ",
    "character_object_narration You try to get his attention and wave at him. ",



    // "character_object_player Esmeray ",
    // "character_object_player Esmeray Unamused: ",
    'show character character_object_esmeray Esmeray_unamused normal',


    "character_object_esmeray ... ",
    //"Footstep SFX Footstep SFX ",
    "play sound Walking_SFX_Esme.mp3",



    // "character_object_esmeray Esmeray sprite disappear ",
    'hide character character_object_esmeray',



    //"Hallway BG Hallway BG ",




    "character_object_narration You sigh, thinking you\'ll try again. ",
    "character_object_narration You wish Kyo was with you, but you couldn\'t find him anywhere, and you don\'t have his phone number. ",
    "character_object_narration It\'s at times like this where frustration is high that you wish you could contact him, but this frustration is overtaken by your realization that really you haven\'t seen him much these past couple of days. ",
    "character_object_narration Where is he? ",



    // "Transition to School Hallway Day Transition to School Hallway Day ",
    "show scene school_hallway_daylight with fadeIn",



    // "character_object_esmeray Esmeray Neutra ",
    'show character character_object_esmeray Esmeray_neutral normal',



    "character_object_narration After gym class, as you walk to the restroom, you find Esmeray walking out from the unisex restroom door. ",
    "character_object_narration You try waving at him again, but before you can get within a 10 foot radius of his location, he swiftly walks away in the other direction. ",
   
   
   
   
   
    // "character_object_esmeray Esmeray Sprite Disappear ",
    'hide character character_object_esmeray',



    "character_object_narration Groaning, you just go into the restroom. ",




    // "Transition to School Hallway Day Transition to School Hallway Day ",
    "show scene school_hallway_daylight with fadeIn",




    "character_object_narration A couple days have passed since you first tried to get Esmeray into the Radio Club, each day being met with more glares and avoidance from Esmeray. ",
    "character_object_narration Kyo, on the few days you would see him, just made fun of you. Whenever you got irritated and asked him where he had been, he\'d change the subject or say he had things going on at home. ",
    "character_object_narration You would just huff in response and walk with him to the Radio Club classroom. ",
    "character_object_narration As if receiving Kyo\'s lack of help wasn\'t enough, you also dealt with more people trying to accuse Skye of the increasing incidences of vandalism going on, as well as Atria\'s old \"friends\" lurking around and glaring at your club. ",
   
   
   
   
    // "character_object_atria Skye_Default and Atria2_Nervou ",
    'show character character_object_skye fix_skye_default kyo-left',
    'show character character_object_atria atria2_nervous atria-right',

   
   
   
    "character_object_skye Tch, they\'re just jealous they don\'t have what we have, right y\'all? ",
    "character_object_narration Skye gestures to you, Atria, and the air next to her while walking down the halls. ",
    "character_object_narration 	Atria looks around. ",
    "character_object_narration Although they\'re a lot less intimidated of their \"friends\" than before, they\'re still cautious while walking down the halls with you, Kyo, and Skye. ",
    "character_object_narration Speaking of Kyo, he\'s not here, AGAIN. He did tell you that he had a lot of work going on lately, but if the Radio Club\'s one of his major commitments, how important must those other things be? ",
    "character_object_atria 	W-Well, it seems like we\'re close to the club room! By the way, w-were we able to register officially yet? ",
    "character_object_player We still need one more member, I think. That\'s what Kyo told me, anyways. ",
    "character_object_skye Mm mm, I see. How\'s he, by the way? He seems to not be around lately. ",
    "character_object_player 	*Sigh* I don\'t know, Skye... ",
    "character_object_narration There is silence between you three, until Atria clears their throat. ",


    'show character character_object_atria atria2_timid atria-right',
    "character_object_atria 	So, who... who are we trying to recruit? ",




    "character_object_narration 	Skye and Atria turn to you, curiosity shining on their faces. ",
    "character_object_narration 	You sheepishly grin at them. ",
    "character_object_player 	Uh... have you heard of Esmeray Regulus? ",
    "character_object_narration 	Atria\'s and Skye\'s eyes widen in shock. ",
    "character_object_atria 	WHAT?? ",


    'show character character_object_atria atria2_nervous normal',
    "character_object_atria T-That really, r-really high profile person?! The so-called charming f-boy of the school who\'s so handsome no one really cares if he flirts with everyone??? ",
    
    
    
    "character_object_skye 	Why would he want to join us? Can we even trust him? ",
    "character_object_player 	Hold on, y\'all. I haven\'t brought him in yet. I\'m just thinking about bringing him. ",
    "character_object_player 	There are some reasons... ",
    "character_object_narration 	You pause. ",
    "character_object_narration 	You don\'t know if it\'s okay to share with them about Esmeray being a musical talent yet. ",
    "character_object_narration 	It\'d be best to get his consent first. ",
    "character_object_player A-Anyways, I think he would fit right in. If&mdash; I mean, when I bring him in, you\'ll see why. Can you trust me? ",
    "character_object_narration 	With some hesitation, they both nod at you. ",
    "character_object_narration 	Atria has a wary smile on their face, while Skye pushes up her glasses. ",
    "character_object_narration 	You smile, happy to have them as your friends. ",
    "character_object_player 	Thanks, y\'all. ",






    "show scene school_hallway_daylight with fadeIn",
    //"School Hallway Day School Hallway Day ",




    "character_object_narration Although you said that you would bring Esmeray to them, it\'s proving to be harder than you thought. ",
    "character_object_narration It\'s been a couple of days since you told Atria and Skye to trust you. You were at the point of giving up on pursuing Esmeray, and going back to Atria and Skye in defeat. ",
    "character_object_narration Before you do so, you decide to trudge up the steps that lead to the rooftop, hoping to just have a quiet lunch. ",
    "character_object_narration As you get closer to the door of the rooftop, you hear the sound of familiar singing. ",
    "character_object_narration When you get to the slightly open door (Again?? You think to yourself.), you stop and peek through the crack, only to see Esmeray sitting on a bench as he sways to the melody he is singing. ",
   
   
   
   
   
    // "Transition to Rooftop Day Transition to Rooftop Da ",
    // "character_object_esmeray Esmeray Genuin ",
    "show scene Rooftop_bg_day with fadeIn",
    'show character character_object_esmeray Esmeray_genuine normal',





    "character_object_esmeray What if I could fly to the blue sugar sky, ",
    "character_object_esmeray Wouldn\'t that be sweet ",
    "character_object_esmeray ... ",
    "character_object_esmeray Don\'t wanna deal with a lie ",
    "character_object_esmeray Just wanna move to the rhythm of the beat ",
    "character_object_esmeray If only they could see... ",
    "character_object_esmeray I just wanna go far ",
    "character_object_esmeray That could be my remedy ",
    "character_object_esmeray ... ",
    "character_object_esmeray But all I got is me and my guitar... ",

    "character_object_narration 	Esmeray continues to sing and hum, while you start to think. ",
    "character_object_narration How long has it been since you started trying to get him to join the club? ",
    "character_object_narration 	If you go to him now, would it make a difference? ",
    "character_object_player 	Should I... have one more go? ",

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
    //"character_object_esmeray Chapter_3_0036300 Choice 1: Invite Esmeray to the Club ",
    "character_object_narration   You remember how it went the last time you had found Esmeray sitting alone and singing to himself, as well as the stinging rejection that came with it.  ",
    "character_object_narration   But, you also remember the friends you made along the way, and the benefits of having Esmeray in the club.  ",
    "character_object_narration   Like last time, you take a deep breath before pushing open the door to the rooftop boldly.  ",
    //"character_object_narration   *CREAK* Door creak SFX  ", lol i still dk how to do this-




    // "character_object_esmeray Chapter_3_0037400 Esmeray Neutral ",
    'show character character_object_esmeray Esmeray_neutral normal',




    "character_object_narration   Esmeray stops singing and turns to the door, only to make eye contact with you.  ",





    // "character_object_esmeray Chapter_3_0037800 Esmeray Unamused ",
    'show character character_object_esmeray Esmeray_unamused normal',



    "character_object_narration   He immediately stops smiling. There's a long pause as Esmeray stares at you long and hard.  ",
    "character_object_narration   But, rather than pushing you away for the umpteenth time, he rolls his eyes and shifts to the side, making room for you to sit next to him.  ",
    "character_object_narration   Your eyes widen, but you don't want to let go of this opportunity, and go and sit next to him.  ",
    //"Scene reconverges here  Chapter_3_0038600 Scene reconverges here ",
    "jump Chapter_3_after_choice_2",
  ],
  'Chapter_3_Choice_2_hesitate': [
   // "Choice 2 Hesitate  Chapter_3_0038800 Choice 2: Hesitate ",
    "character_object_narration   You remember how it went the last time you had found Esmeray sitting alone and singing to himself, as well as the stinging rejection that came with it.  ",
    "character_object_narration   What would be the difference now?  ",
    "character_object_narration   Sure, you pestered him the last couple of days so maybe he'll consider it.  ",
    "character_object_narration   But what if he doesn't?  ",
    "character_object_narration   While deliberating and waving your arms around, trying to make a plan, your thoughts distract you so much to the point that you accidentally hit the door wide open.  ",
    //"character_object_narration   *CREAK* Door creak SFX  ", idk......




    // "character_object_esmeray Chapter_3_0040200 Esmeray Neutral ",
    'show character character_object_esmeray Esmeray_neutral normal',



    "character_object_narration   Esmeray stops singing and turns to the door, only to make eye contact with you.  ",




    // "character_object_esmeray Chapter_3_0040600 Esmeray Unamused ",
    'show character character_object_esmeray Esmeray_unamused normal',



    "character_object_narration   He immediately stops smiling. There's a long pause. You can hardly breathe as Esmeray stares at you long and hard.  ",
    "character_object_narration   But, rather than pushing you away for the umpteenth time, he rolls his eyes and shifts to the side, making room for you to sit next to him.  ",
    "character_object_narration   Your eyes widen, but you don't want to let go of this opportunity, and go and sit next to him.  ",
   // "Scene reconverges here  Chapter_3_0041400 Scene reconverges here ",
    "jump Chapter_3_after_choice_2",
  ],
  'Chapter_3_Choice_2_turn_around_and_go_back_down_the_stairs': [
    //"Choice 3 Turn around and Go Back Down the Stairs  Chapter_3_0041600 Choice 3: Turn around and Go Back Down the Stairs ",
    "character_object_narration   You remember how it went the last time you had found Esmeray sitting alone and singing to himself, as well as the stinging rejection that came with it.  ",
    "character_object_narration   You remember how tiring it was to have the courage to face Esmeray and invite him over and over, only for him to brush you off.  ",
    "character_object_narration   Maybe this was the time to finally give up.  ",
    "character_object_narration   Thinking so, you turn around, getting ready to go down the stairs again.  ",
    "character_object_narration   ...Unfortunately for you, you turn so quickly that your elbow slams into the door, making it creak loudly as it swings wide open.  ",
    //"character_object_narration   *CREAK* Door creak SFX  ", idk :D



    // "character_object_esmeray Chapter_3_0043100 Esmeray Neutral ",
    'show character character_object_esmeray Esmeray_neutral normal',



    "character_object_narration   Esmeray stops singing and turns to the door, only to make eye contact with you.  ",



    // "character_object_esmeray Chapter_3_0043500 Esmeray Unamused ",
    'show character character_object_esmeray Esmeray_unamused normal',




    "character_object_narration   He immediately stops smiling. There's a long pause. You can hardly breathe as Esmeray stares at you long and hard.  ",
    "character_object_player   	Is he gonna push me away again?...  ",
    "character_object_narration   But, rather than pushing you away for the umpteenth time, he rolls his eyes and shifts to the side, making room for you to sit next to him.  ",
    "character_object_narration   Your eyes widen, but you don't want to let go of this opportunity, and go and sit next to him.  ",
    //"Scene reconverges here  Chapter_3_0044600 Scene reconverges here ",
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
    "character_object_player  ...Hi, Esmeray. ",
    'show character character_object_esmeray Esmeray_neutral normal',
    "character_object_narration Esmeray nods, looking down at the lunch in his lap and shifting the food around with the fork absentmindedly. ",
    "character_object_player ... ",
    "character_object_esmeray ... ",
    "character_object_player ... ",
    "character_object_player So&mdash; ",
    "character_object_esmeray Why me? ",
    "character_object_narration You pause as Esmeray looks at you with a blank face. ",
    "character_object_player Excuse me? ",
    "character_object_esmeray Why me? Don\'t you have, like, other friends? What about those multicolored-haired weirdos&mdash; I mean, friends in your club already? ",
    "character_object_narration He pauses. ",
    "character_object_narration You side-eye Esmeray. ",
    "character_object_narration He looks blankly back at you. ",
    "character_object_player 	I heard that. ",
    "character_object_esmeray 	Nah, you didn\'t. ",
    "character_object_narration You playfully glare at him before turning to your own lunch and shifting in your seat. ",
    "character_object_player I\'ll be blunt. I just think you would make a good addition to the club. ",




    'show character character_object_esmeray Esmeray_unamused normal',
    "character_object_narration Esmeray raises his eyebrow at you in disbelief, and his eyes look at you as if asking you, \"Seriously?\" ",
   
   
   
   
    "character_object_player Not only are you very talented in music &mdash; which would be helpful to use whenever we do broadcasts &mdash; but I think your presence alone would be good publicity for the club. ",
    "character_object_narration 	Esmeray scoffs at this, but continues to listen regardless. ",
    "character_object_player And also, I would like to be friends with you. You seem interesting, and nicer than you show. Although, you need to fix that playboy personality of yours... ",
   
   
   
    'show character character_object_esmeray Esmeray_amused normal',
    "character_object_esmeray 	Pfft&mdash; ",





    "character_object_narration You quickly turn to Esmeray in disbelief, only to find his face contorted into a laughing, genuine smile. ",
    "character_object_esmeray 	Playboy? Me? Nah, das crazy, what do you mean? ",
    "character_object_esmeray Like, I thought that\'s how you\'re supposed to act when you want to make friends. ",
    "character_object_narration 	Now it\'s your turn to laugh. ",
    "character_object_player Haha, what? Really? You really thought the best way to socialize with people was to rizz them up? HAHA, that\'s HILARIOUS! ",
    
    
    
    'show character character_object_esmeray Esmeray_teeth_smile normal',
    "character_object_esmeray Wh-WHAT?! NO! I was NOT&mdash; rizzing ANYONE! You\'re just weird to interpret it that way! ",




    "character_object_narration 	You two continue to laugh and talk more on the rooftop. ",
    "character_object_narration After you finish laughing, you look past the iron fence of the rooftop and at the sky. ",



    // "character_object_esmeray Esmeray Genuin ",
    'show character character_object_esmeray Esmeray_genuine normal',


    "character_object_player The sky does look like blue sugar. ",


    'show character character_object_esmeray Esmeray_neutral normal',
    "character_object_narration 	Esmeray\'s eyes widen, and he whips his head towards you. ",





    "character_object_esmeray H-Huh? ",
    "character_object_player I overheard you singing earlier, and also before... ",
    "character_object_player ...Wanna talk about it? ",
    "character_object_player I-I mean, you don\'t have to, of course. ",
    "character_object_player I was just thinking, I mean, we are friends now, so... ",
    "character_object_player B-But of course, you don\'t have to, a-and if you want to then feel free to take all the time you need, and stuff... ",
    "character_object_esmeray 	... ",
    "character_object_esmeray F...friends? ",
    "character_object_esmeray ... ",
    "character_object_esmeray Okay, I do want to say this to someone, at least... ",
    "character_object_narration You patiently wait for him to keep talking. ",
    "character_object_narration After a couple moments of silence, Esmeray clears his throat. ",
    "character_object_esmeray Ahem... When...... when I was in elementary school, I had a lot of people who thought I was like an alien because I was shorter than the average height and had weird looking ears. ",
    "character_object_esmeray 	And s-so, in middle school, I decided to change things up a bit. ",
    "character_object_esmeray Grew my hair out, changed my style, learned how to accessorize. ",
    "character_object_esmeray I learned about social cues, read some comics, watched some movies where the main character undergoes a transformation and suddenly they know how to talk to people, and how to get them to like them. ",
    "character_object_esmeray 	So, I tried some of the lines from the movies and comics out. ",
    "character_object_esmeray 	A-And it worked! People... They started to like me! ",
    "character_object_esmeray My growth spurt helped me out too &mdash; I stood out from the crowd, in a good way. ",
    "character_object_esmeray All of a sudden, people stopped calling me names like alien boy, weirdo, and bozo, and they called me things like a prince, a cool guy. ",
    "character_object_esmeray 	... ",
    "character_object_esmeray 	And I liked it, my changes. ",
    "character_object_esmeray 	And I thought it would stay that way, but... ",
    "character_object_player 	... ",
    "character_object_esmeray 	So, I started going out with some people ",
    "character_object_esmeray At first, it was crazy to me: people actually liked me, I was actually someone attractive to them. My ways of communication were working, and stuff. ",
    "character_object_esmeray 	Like, whoa, intimate connection? Me? ",
    "character_object_esmeray And it was okay, but like, some people ended up ending our relationship because I wasn\'t who they thought I was. ",
    "character_object_esmeray 	I mean, who wanted a dinosaur-loving, closeted emo-musician guy? ",
    "character_object_esmeray 	But others gave me hope. ",
    "character_object_esmeray There was a guy I went out with, and he really appreciated me. I felt seen, and loved, genuinely. For the first time in a while. ",
    "character_object_esmeray We ended up breaking it off because he said his parents were strict. ",
    "character_object_esmeray 	Or at least, that\'s what he said to my face. ",
    "character_object_esmeray 	... ",
    "character_object_player 	... ",



    'show character character_object_esmeray Esmeray_angry normal',
    "character_object_esmeray ...Turns out he was making fun of me to his friends the entire time we were dating. I found out because this girl I knew showed me a video of him talking to her and their other friends. ",
    
    
    
    
    "character_object_esmeray I was heartbroken, angry... I mean, how could he blatantly lie to me like that and still be okay? Why... Why was I left with all the negatives? ",
    "character_object_narration You begin to pat Esmeray on the back, seeing him so sad and agitated. He calms down, thanking you quietly. ",
   
   
   
   
   
    'show character character_object_esmeray Esmeray_neutral normal',
    "character_object_esmeray *inhale* Anyways, that girl and I ended up getting close because she told me about how she left the friend group and she was there for me. ",
   
   
   
    "character_object_esmeray I healed, and then I thought that maybe she was the one, ya know? ",




    'show character character_object_esmeray Esmeray_angry normal',
    "character_object_esmeray 	But then, it went to shit. ",






    "character_object_esmeray This girl, she was really toxic. As in she didn\'t let me see other people, but she could see a lot of others. ",
    "character_object_esmeray And she gaslit me often, made me emotionally dependent on her, and my mental health tanked. ",
    "character_object_esmeray I felt choked, and scared, and honestly, I was really disappointed: in her, myself, and just the humans around me for being so... inhumane. ",
   
   
   
   
    'show character character_object_esmeray Esmeray_unamused normal',
    "character_object_esmeray I just... wanted to breathe again. So, I left her, left the school I was at, and transferred here. Blocked everyone I knew, and I hoped that I could start anew. ",
   
   
   
   
    'show character character_object_esmeray Esmeray_neutral normal',
    "character_object_esmeray And I think I did, at least. No one seems to hate me here &mdash; just a lot of admiration. ...But you never know. ",
    "character_object_esmeray So I wanted to hide everything: never get close to anyone here, never tell anyone my story... but you... ",
   
   
   
   
    'show character character_object_esmeray Esmeray_genuine normal',
    "character_object_esmeray 	You... actually seem to care for me... ",



    "character_object_esmeray 	...Thanks, for listening... ",
    "character_object_narration Looks like you were right: Esmeray didn\'t really have genuine friends of his own, so you decided it was time to change that. ",
    "character_object_narration 	You make direct eye contact with Esmeray. ",



    'show character character_object_esmeray Esmeray_unamused normal',
    "character_object_esmeray W-What? Are you gonna accuse me of being too edgy now, or something? ",
    "character_object_player 	Nah. I just wanted to invite you again to the Radio Club. ",
    "character_object_narration He scoffs softly, but continues to listen regardless.",
    "character_object_player I promise we\'re all nice people, and I guarantee that we\'re not like those people from your past. ",
    "character_object_player You can leave if you don\'t feel like staying with us, no strings attached. I think it would be amazing if you join us. ",
    "character_object_player Wanna give it a try? ",
    "character_object_narration You hold out your hand, ready to receive a handshake in agreement from Esmeray .",
    "character_object_narration Esmeray stares at your hand, before his own twitches and lifts up to shake it. ",
    "character_object_narration Your face breaks out into a large smile. The mood immediately becomes more lighthearted. ",
    "character_object_player 	Great! Welcome aboard, Esme! ",


    'show character character_object_esmeray Esmeray_smile normal',
    "character_object_esmeray 	...W-wait, Esme? I did NOT agree to this, what the f&mdash; ",


    'show character character_object_esmeray Esmeray_teeth_smile normal',
    "character_object_narration While laughing at him, you give him a set day and time for him to come to the Radio Club, as he continues to protest against your silly, stupid nickname. ",
    
   
   
   
   // "Proceed to next scene Proceed to next scen ",
   
   
   
   
    // "Music Room Basic + Printer + Mic + Laptop Music Room Basic + Printer + Mic + Lapto ",
    "show scene music_room_basic with fadeIn",


    'show character character_object_atria atria2_nervous normal',
    'show character character_object_skye fix_skye_default atria-right',
    'show character character_object_kyo Kyo_FP_Bruh kyo-left',
   
   
   
   
    "character_object_narration Today\'s finally the day. ",
    "character_object_narration You take a deep breath, anxiously looking at the door, trying to spot the familiar shade of dark turquoise hair. ",
    "character_object_narration Atria and Skye are just as nervous: Atria is fiddling with their star clips while Skye pushes up her glasses, the light reflecting off of them and covering her eyes. ",
    "character_object_narration In the corner stands Kyo, looking at the clock\'s second hand as it moves in its consistent rhythm. ",
    "character_object_narration *tick tick tick tick... ",
    "character_object_narration Kyo sighs. ",
    "character_object_kyo 	When\'s this guy gonna be here? ",
    "character_object_player 	He\'ll be here soon, y\'all. Don\'t worry. ",
    "character_object_narration Atria and Skye turn to look at you with relieved faces, the tense silence of the room finally broken. ",
    "character_object_skye 	W-We\'re not worried! Y-you are! ",
    "character_object_narration 	You laugh at Skye\'s poor excuse. ",
    "character_object_player 	Haha, yeah, I am. ",
    "character_object_narration Before you can elaborate, you hear footsteps approaching the door. ",
    "character_object_narration 	All heads in the room turn to the door. ",
    "character_object_narration 	There it is: that dark turquoise hair. ",
   
   
   
   // "Remove all sprites Remove all sprite ",
    'hide character character_object_atria',
    'hide character character_object_skye',
    'hide character character_object_kyo',

   
   
   
    // "character_object_esmeray Esmeray Neutral (Centered ",
    'show character character_object_esmeray Esmeray_neutral normal',
   
   
   
    "character_object_narration In walks Esmeray, his face blank, scanning the room before his eyes land on you. ",
    "character_object_narration Immediately, you stand up and go to his side, before making jazz hands in his direction while facing the rest of your group. ",

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
    //"character_object_esmeray Chapter_3_0074200 Choice 1: Introduce Esmeray ",
    //"Scene reconverges here  Chapter_3_0074400 Scene reconverges here ",
    "jump Chapter_3_after_choice_3",
  ],
  'Chapter_3_Choice_3_wait_for_esmeray_to_intreoduce_themselves': [
    //"character_object_esmeray Chapter_3_0074600 Choice 2: Wait for Esmeray to introduce themselves ",
    "character_object_narration   You want to let Esmeray introduce himself, and do jazz hands to start it off. ",
    "character_object_narration   Really, you're just doing jazz hands in awkward silence... ",
    "character_object_narration   ... ",
    "character_object_narration   ...What are you doing right now? Lol. ",
    "character_object_narration   You cough awkwardly at the silence before slowly putting your hands down. ",
    "character_object_narration   You clear your throat again, desperate to get out of this situation. ",
    //"Scene reconverges here  Chapter_3_0076000 Scene reconverges here ",
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
    "character_object_player Here he is! Y\'all, I want you to meet Esme&mdash; I mean Esmeray, our school\'s lovely playboy and the composer of our music for the Radio Club! Esmeray, meet the club. ",
   
   
   
   
    // "character_object_esmeray Move Esmeray to righ ",
    'show character character_object_esmeray Esmeray_neutral kyo-left',
    'show character character_object_skye fix_skye_default normal',
    'show character character_object_atria atria2_nervous atria-right',
   
   
   
   
    "character_object_narration Atria waves shyly, while Skye pushes up her glasses further and gives a cool nod directed to Esmeray. ",
    
    'hide character character_object_atria',
    'hide character character_object_skye',

    'show character character_object_kyo Kyo_FP_Bruh atria-right',
    "character_object_narration Kyo scans Esmeray up and down before looking at the chalkboard in the classroom, eyeing the UFO and smiling fondly. ",
    'hide character character_object_kyo',
    
    
    
    // "character_object_esmeray Esmeray Genuin ",
    'show character character_object_esmeray Esmeray_genuine normal',



    "character_object_narration 	Esmeray raises his hand in greeting. ",
    "character_object_esmeray 	Yo. Esmeray, he/they. ",
    "character_object_narration 	The room goes quiet again. ",
    "character_object_narration You\'re really sick of trying to be an extrovert in these awkward situations. ",
    "character_object_narration Before you can say another word, however, Atria suddenly stands up. ",



    // "character_object_esmeray Move Esmeray to righ ",
    'show character character_object_esmeray Esmeray_genuine kyo-left',
   
   
    'show character character_object_skye skye_smile2 atria-right',
    'show character character_object_atria atria2_happy normal',
    // "character_object_atria Atria2_Happy and Skye_Smile2 on lef ",
   
   
   
   
    "character_object_atria 	*Ahem ",
    "character_object_atria 	W-WELCOME, ESMERAY, TO THE RADIO CLUB! I-I\'M ATRIA, THEY/SHE! ",
    "character_object_skye I-I\'M SKYE, SHE/THEY, AND THESE ARE MY OTHER FRIENDS AND MEMBERS OF THE CLUB. T-TREAT THEM WELL, D-DUDE! ",
    "character_object_narration 	Skye gestures to the air next to her. ",
    "character_object_narration Esmeray looks at the air, then at you, with a confused expression. ",
    "character_object_narration 	He looks back at the air, and slowly nods in greeting. ",
    "character_object_narration 	Skye\'s face brightens up. ",
    "character_object_atria N-Now that we\'re all introduced, we will now start the induction ceremony. {{player.name}} said that you would be a great ally to our cause to save humanity as we know it. ",
   
   
   
   
   
    'hide character character_object_atria',
    'hide character character_object_skye',




    // "character_object_kyo Kyo_FP_Cheerfu ",
    'show character character_object_kyo Kyo_FP_Cheerful normal',




    "character_object_kyo Lmao, you said that, {{player.name}}? You\'re a weirdo too, hahaha ",
    "character_object_player What? I-I didn\'t say that, I think?? I&mdash; ",
   
   
   
   
    'hide character character_object_kyo',
   
   
   
    'show character character_object_skye skye_smile2 atria-right',
    'show character character_object_atria atria2_happy normal',
   
   
   
    "character_object_narration You\'re cut off by Atria, who is too busy immersing in their role right now. ",
    "character_object_atria Therefore, we have to ask you... ",
    "character_object_skye Esmeray, do you solemnly swear to  promise to uphold the values of honor, truth, and transparency between fellow members? To join the club and fight the dark souls of corruption of the students through the power of voice and music? To not rest, until humanity is purified of evil, deceit, and misinformation? ",
    "character_object_narration 	The room becomes silent again after the two of them speak up. ",
    "character_object_narration You sweatdrop, looking at Esmeray cautiously while trying not to burst out laughing. ",
    
    //"character_object_atria Remove Atria and Sky ",
    'hide character character_object_atria',
    'hide character character_object_skye',


    // "character_object_esmeray Esmeray Neutral (centered ",
    'show character character_object_esmeray Esmeray_neutral normal',
    
    
    
    
    
    "character_object_narration 	Esmeray\'s face is blank, eyeing the two in front of him, ",
    "character_object_narration Suddenly, he lets out a low chuckle, which gradually becomes louder until he\'s almost cackling. ",





    'show character character_object_esmeray Esmeray_amused normal',
    "character_object_esmeray 	...Pft ",
    "character_object_esmeray 	...PuhahaA... PftahaHAHA ",




    'show character character_object_esmeray Esmeray_teeth_smile normal',
    "character_object_esmeray 	AHAhaAHahaha ",
    "character_object_esmeray 	...Pft ",
    "character_object_esmeray 	... ",




    'show character character_object_esmeray Esmeray_smile normal',
    "character_object_esmeray S-Sure, I\'ll join the club and fight the dark souls of corruption of the students through the power of the club or whatever. This\'ll be fun. ",
   
   
   
   
    // "character_object_esmeray Esmeray Teeth Smil ",
    'show character character_object_esmeray Esmeray_teeth_smile normal',


    "character_object_narration On Esmeray\'s face is a wide, genuine smile as he continues to laugh. ",
    "character_object_narration Atria and Skye are in shock, while Kyo starts to laugh along with Esmeray. ",
   
   
   
   
    // "character_object_esmeray Move Esmeray to righ ",
    'show character character_object_esmeray Esmeray_teeth_smile atria-right',


    // "character_object_atria Skye_Smile2 and Atria2_Smile on left ",
    'show character character_object_skye skye_smile2 kyo-left',
    'show character character_object_atria atria2_happy normal',
   
   
   
   
    "character_object_skye H-Hey! It\'s true, the dark souls exist and need to be taken down! ",
    "character_object_narration 	As she talks, Skye motions a punch into her palm. ",
    "character_object_atria Y-Yeah! Don\'t underestimate our drive to help the poor students of ILUNA Academy. ",
    "character_object_narration 	Esmeray just nods, as if he is in total agreement. ",
    "character_object_narration Atria and Skye continue to talk loudly, and eventually the three of them start to converse about their interests and such. ",
    "character_object_narration You watch the scene fondly. Finally, the club is complete! ",
    // end-of-CHAPTER-3-mark


    'stop music EsmerayMaster_1  with loop',



    'jump CHAPTER_E'
  ],

  'CHAPTER_E': [
    //'chap E',
    // start-of-CHAPTER-E-mark
    //" Epilogue: Waning Iridescent ",
    "show video background_loop background loop animate__animated animate__fadeIn animate__faster",
    "centered <div class=\"chapter-title-wrapper-1\"><p class=\"chapter-title typed-1\">Epilogue:</p></div><div class=\"chapter-title-wrapper-2\"><p class=\"chapter-title typed-2\">Waning Iridescent</p></div><p class=\"click-to-continue\">Click anywhere to continue</p>",
    "hide video background_loop animate__animated animate__fadeOut animate__faster",
    
    // "Music Room Basic All Music Room Basic Al ",
    "show scene music_room_basic_ALL",
    
    // "Outro BGM Outro BGM ",
    'play music Opening_closing_VINTAGE with loop', 


    "character_object_narration After finally registering the club last week, you walk into the radio club classroom with a little bounce in your steps. It\'s the first official radio club meeting today, and you\'re excited! ",
    "character_object_narration You look at the notes you wrote on your phone to remember what you\'re discussing with all the club members. It\'s simple enough: assign roles to the club members and finalize the plan for future activities ",
    "character_object_narration Now you just need to wait for them to show up. They didn\'t forget about you telling them earlier in the day to meet you at lunch, right? You hope not ",
    "character_object_narration Speaking of showing up, will Kyo even be here? You weren\'t even able to tell him all the good news, because you haven\'t seen him all day. Well, it\'s on him for choosing to miss this momentous occasion ",
    "character_object_narration The door opens ",



    // "character_object_atria Atria1_happy, lef ",
    'show character character_object_atria atria1_happy normal',


    "character_object_atria I\'m here ",
   
   
    // "Skye_smile, center Skye_smile, cente ",
    'show character character_object_skye skye_smile normal',
   
   
   
   
    "character_object_skye And so am I ",
    "character_object_player Now, where the heck is Esme&mdash; ",



    // "character_object_esmeray Esmeray_neutral, righ ",
    'show character character_object_esmeray Esmeray_neutral normal',



    "character_object_esmeray My bad. Had to shake off my fans, but I\'m good now. ",
    "character_object_skye Pssh, okay, Mr. Famous ",
    "character_object_player You sure they\'re not gonna follow you ",
    "character_object_esmeray I mean, more club members, am I right ",
    "character_object_narration The three of you stare at him ",




    'show character character_object_esmeray Esmeray_amused normal',
    "character_object_esmeray Okay, okay, I\'m just kidding. I was a little late finishing my classwork. I\'ll be early next time ",
    "character_object_player I\'ll hold you to that ",


    "character_object_narration Esmeray laughs ",


    "character_object_player Alright y\'all, we got business to take care of. First, we gotta decide what our roles are ",
    "character_object_skye Well, it\'s obvious what you\'re gonna be. Club president! ",
    "character_object_narration You put your hands on your hips ",
    "character_object_player Yup! I\'ll be doing more of the behind-the-scenes stuff. As for the other roles... ",
    "character_object_skye I\'ve already decided ",
    "character_object_player Wait, I haven\'t even said what the other roles are yet ",
    "character_object_skye Well, you\'re gonna need someone to write scripts, right? Then I\'ll do it ",
    "character_object_player Sounds good. ",
    "character_object_skye I can also get the latest scoops on what\'s going around at school. The janitor\'s closet is quite handy for getting a hold of hot tea, you know ",
    "character_object_player Can you handle doing both ",
    "character_object_skye Hell yeah, brother ",
    "character_object_narration You flash a smile. This is already going pretty smoothly ",
    "character_object_player Now, Esmeray.. ",


    'show character character_object_esmeray Esmeray_neutral normal',
    "character_object_esmeray Hm ",



    "character_object_player You\'ll be in charge of making little jingles before and after we\'re done announcing and stuff. Oh, and I\'m thinking we could add music segments in our broadcasts too. ",
    "character_object_esmeray You got it ",
    "character_object_narration Esmeray takes out a small notebook. He starts writing and humming to himself ",
    "character_object_player And finally, Atria, you\'ll be the one on the speakers! ",
    "character_object_atria Um, are you sure? I\'m not that loud and confident yet.. ",
    "character_object_player You don\'t have to be the only speaker of course. We can do it together ",
    "character_object_narration Atria slowly regains her smile ",

    'show character character_object_atria atria1_happy normal',
    "character_object_atria That\'d be easier for me. Thank you ",



    "character_object_player Alright, now we gotta think of our future plans for this club ",
    "character_object_atria Actually, is it okay if I suggest something ",
    "character_object_player Of course ",
    "character_object_atria It\'s Back to School Night next week. The staff wants clubs to help out with the concessions. ",
    "character_object_player Then we should join! So, are we all free to help out with the concessions next week ",
    "character_object_narration The other three club members say yes ",
    "character_object_player Alright, we\'re done then. ",
    "character_object_narration Happiness feels like it\'s going to burst out of your chest. It really feels like an actual club now. No wait, it\'s not just a club. It feels like you have a friend group for real too. You wonder if everyone\'s down for a group hug before they leave ",
    "character_object_narration You open your arms wide ",
    "character_object_player I know this is out of nowhere but... Who\'s down for a group hug? ",



    'show character character_object_atria atria1_nervous normal',
    "character_object_atria Huh ",
   
   
   
    'show character character_object_skye skye_smile2 normal',
    "Skye Skye_smile2 Heh, sure, why not. Come on, get over here, Atria ",
   
   
   
    'show character character_object_esmeray Esmeray_amused normal',
    "character_object_esmeray Wait, we\'re actually doing this? Hold on a minute&mdash; ",





    // "Group hug CG  Group hug CG ",
    'show scene Tak_berjudul85_20230701211442',


    "character_object_player Hehe, thanks y\'all. If only Kyo was here to join in the hug too. He\'s the one who started the club, after all ",
    
    
    // "Group hug CG ends. Group hug CG ends ",
    'hide scene Tak_berjudul85_20230701211442',



    "character_object_narration All of the club members back up and stare at you in confusion ",
    "character_object_esmeray Who\'s Kyo ",
    "character_object_player Kyo. You know, the radio club president before I took over his role? Bright blue hair like cotton candy. Very munchable. It\'s hard to miss. ",
    "character_object_atria I\'ve never heard of him ",
    "character_object_player But you all met him before! You all talked to him and everything. Are you all messing with me ",
   
   
   
    'show character character_object_skye skye_smile normal',
    "Skye Skye_smile Oh, I get it. He\'s the friend you were talking to before. ",
   
   
   
   
    "character_object_player Yeah! ",
   
   
   
   
    'show character character_object_skye fix_skye_default normal',
    "Skye Skye_default Like the ones I used to talk to inside the locker, right ",
   
   
   
    "character_object_player Yeah, yeah! Wait, no! What the hell, do you guys genuinely not know? ",
    "character_object_narration You don\'t get much of a response ",
    "character_object_player Never mind, forget it. I\'m imagining things, hehe ",
    "character_object_narration The lunch bell rings, and all of you part ways as you wave to each other. Your smile then fades. What do they mean, they don\'t know who Kyo is? You walk to your next class with a resting bitch face to mask your casual existential crisis. ",
    
    
    
    
    "Scene ends Scene end ",



    // "School Hallway Night School Hallway Nigh ",
    "show scene school_hallway_evening",




    "character_object_narration It\'s Back To School Night. You go back and forth from your mom\'s car to carry water bottles to the venue. It takes just a few trips but the weight tires out your arms. Thank god that you\'re not in any of the sports clubs ",
    "character_object_narration As you rest on a nearby bench, you see something colorful faintly glowing bright on the ground. It looks like a poorly drawn hand doing a peace sign. The pain is real. Hands are the bane of every artist\'s existence. ",
    "character_object_narration ...Wait, this looks like the work of Kyo ",
    "character_object_narration As quickly as you notice the symbol, it disappears ",
    "character_object_narration That is the only sign you\'ve seen of him in school all week. What the hell is he up to? ",
    "character_object_narration Looking up ahead, you see more graffiti symbols in the distance, scattered far apart in a way that beckons you to follow them. When you try to get near the symbols, they disappear as well. Oh boy, do you have some questions to ask him when you see him ",
    "School Rooftop Night School Rooftop Nigh ",
    "character_object_narration You follow the path until you arrive at the school\'s rooftop. ",
    "character_object_narration There he is, spray painting symbols on the ground all around him in a circle. They vanish into thin air ",
    "character_object_narration You call out to him.  ",
    "character_object_player Kyo ",



    // "character_object_kyo Kyo_FP_Shocke ",
    'show character character_object_kyo Kyo_FP_Shocked normal',




    "character_object_narration Kyo turns around. ",
    "character_object_kyo Oh shit, hi {{player.name}} ",
    "character_object_player Where have you been? I haven\'t seen you in school all week ",
    "character_object_kyo Um, about that.. ",
    "character_object_narration He shakes his spray paint can but doesn\'t use it. He looks back and forth between his spray can, the moon above, and you as if he\'s contemplating his next move. He sighs ",
    "character_object_kyo You weren\'t supposed to come here. ",
    "character_object_player But you left a paint trail ",
    "character_object_kyo That wasn\'t really a trail. I didn\'t think you\'d... Damn it, I was supposed to leave before you saw me ",
    "character_object_player Wait, you\'re leaving? What\'s going on ",
    "character_object_kyo You know what, fuck it. I\'m not going yet. \'Cause I don\'t even know where to begin explaining everything ",
    "character_object_narration He\'s right. You have too many questions. ",
    "character_object_narration You remember the confused faces of the club members from last week ",
    "character_object_player Kyo, you\'re... real, right ",
    "character_object_narration Kyo busts out a quick laugh ",
    "character_object_kyo Nah you\'re just imagining me in your head. Wake up. It\'s been years since the accident&mdash; ",
    "character_object_player Kyo, I\'m serious. None of the club members see or hear you except me. They don\'t even know who you are. Why? Are you a ghost? Who and what even are you ",
    "character_object_narration Kyo lets out a deep sigh ",
    "character_object_kyo I don\'t actually go here. I used to, but it was a long time ago ",
    "character_object_player Why are you here then ",
    "character_object_kyo Kyo C ",
    "character_object_kyo To help you make friends ",
    "character_object_narration Your eyes widen ",
    "character_object_player How\'d you know I wanted to... ",
    "character_object_kyo You\'re the reason I opened up the radio club in the first place. ",
    "character_object_player Huh?! Wait, then you were the only club member on purpose ",
    "character_object_kyo Haha, yup ",
    "character_object_player I\'m still not over you forcing me to do free labor though ",
    "character_object_kyo It\'s better if you initiate these friendships on your own. I\'m just here to make sure you stay on track. You\'re the lonely one here, not me ",
    "character_object_narration You roll your eyes. ",
    "character_object_kyo You\'re not even gonna thank me?! ",
    "character_object_player I still have more questions for you, funny man ",
    "character_object_kyo Okay, shoot ",
    "character_object_player If you\'ve been a student here, why does no one remember you at all ",
    "character_object_kyo That\'s because I don\'t exist in your reality anymore. I live in another universe ",
    "character_object_player You\'re an alien? ",
    "character_object_kyo Okay no, but I know someone else who is. Anyways, I was isekai\'d a while ago. But just recently, I\'ve been blessed by the moon, so now I\'m able to travel between your reality and mine ",
    "character_object_kyo The problem is, I\'m still learning how to use this power. So it\'s not perfect. It\'s kinda weird actually. Right now, I\'m like in a world between yours and mine. I can\'t really see you, only the outline of you. ",
    "character_object_narration Kyo pauses for a bit as if he\'s thinking ",
    "character_object_kyo Give me a high-five ",
    "character_object_player For what ",
    "character_object_kyo For being able to keep up with me. You know, since I speak so fast ",
    "character_object_player O...kay ",
    "character_object_narration When you go high-five Kyo, your hand goes through his like air. You don\'t feel him at all ",
    "character_object_narration You stand there in silence, flabbergasted. A realization hits you ",
    "character_object_player So you\'re the one haunting this school ",
    "character_object_kyo Wait, what ",
    "character_object_player Dude, did you not know? The paranormal activity club has been obsessed with you for a long time now. They\'ve been trying to contact you and everything. ",
    "character_object_kyo They can\'t see me, right ",
    "character_object_player That\'s not what I mean. But there\'s been ghost-like activity happening around school. I think you have something to do with it ",
    "character_object_kyo Shit, my bad. Didn\'t mean to ",
    "character_object_player If only they knew I was talking to a ghost the entire time. Wait, I don\'t think anybody heard you speak either. Not even the club members. Except me. What the hell ",
    "character_object_kyo You\'re the one I was assigned to help ",
    "character_object_player Assigned ",
    "character_object_kyo By the moon. Who also gave me my powers. I think that\'s why you\'re also the only person who can see and hear me. Consider yourself lucky. ",
    "character_object_player I was chosen? Wow.. ",
    "character_object_kyo But I\'m running out of time. Now, I won\'t exist in this reality again. For real this time ",
    "character_object_narration The school bell rings. School Bell SF ",
    "character_object_kyo Go. Your friends are waiting for you ",
    "character_object_narration Kyo sets up his exit ",
    "character_object_player Wait! Before you go.. ",
    "character_object_player Thank you. For everything ",
    "character_object_narration Kyo looks back one last time and smiles ",



    // "character_object_kyo Fade out Kyo, use the Kyo_BG in his special scene folde ",
    'hide character character_object_kyo',
'show scene kyo_cg',


'stop music Opening_closing_VINTAGE with loop', 

    "Game end Game en ",
    "Go to credits Go to credit ",
    // end-of-CHAPTER-E-mark
    'end'
  ],
  
  // placeholder here
  'END': [
    
    'end'
  ],

});
