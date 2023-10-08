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
monogatari.assets("scenes", {});

// Define the Characters
monogatari.characters({
  y: {
    name: "Yui",
    color: "#5bcaff",
  },
  character_object_player: {
    name: "",
    color: "#2E72C1",
  },
  character_object_kyo: {
    name: "Kyo",
    color: "#005766",
  },
  character_object_atria: {
    name: "Atria",
    color: "#912756",
  },
  character_object_girl_a: {
    name: "Girl A",
    color: "#2F2F30",
  },
  character_object_girl_b: {
    name: "Girl B",
    color: "#2F2F30",
  },
  character_object_skye: {
    name: "Skye",
    color: "#890F0F",
  },
  character_object_student_a: {
    name: "Student A",
    color: "#2F2F30",
  },
  character_object_student_b: {
    name: "Student B",
    color: "#2F2F30",
  },
  character_object_student_c: {
    name: "Student C",
    color: "#2F2F30",
  },
  character_object_student_d: {
    name: "Student D",
    color: "#2F2F30",
  },
  character_object_esmeray: {
    name: "Esmeray",
    color: "#274554",
  },
  character_object_student: {
    name: "Student",
    color: "#2F2F30",
  },
});

monogatari.script({
  // The game starts here.
	'Start': [
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
		// start of CHAPTER-0-mark
		
		// end of CHAPTER-0-mark
        'jump CHAPTER_1',
	],
	
    'CHAPTER_1': [
		'chap 1',
		// start of CHAPTER-1-mark
		
		// end of CHAPTER-1-mark
		'jump CHAPTER_2',
	],
	
    'CHAPTER_2': [
		'chap 2',
		// start of CHAPTER-2-mark
		
		// end of CHAPTER-2-mark
        'jump CHAPTER_3'
	],
	
    'CHAPTER_3': [
		'chap 3',
		// start of CHAPTER-3-mark
		
		// end of CHAPTER-3-mark
        'jump CHAPTER_E'
	],
	
    'CHAPTER_E': [
		'chap E',
		// start of CHAPTER-E-mark
		
		// end of CHAPTER-E-mark
        'end'
	],
});
