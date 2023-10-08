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
 " _Name _DialogCode _Tex " ,

 "  Chapter_0-0000100 Prologue: Waxing Iridescent " ,

 " School hallway day  Chapter_0-0000300 School hallway day " ,

 " Intro Music  Chapter_0-0000400 Intro Music " ,

 " Narration  Chapter_0-0000700 It\'s lunch break at school, but the atmosphere is livelier than usual. Oh right, it\'s Club Day today. You still can\'t decide which club you want to join this year.  " ,

 " Narration  Chapter_0-0000900 You stop walking the hallways to look at the board of various club posters. Oh man, you\'ve never joined one before, so the amount of options overwhelm you a little. You think of just joining multiple clubs at a time, but you quickly brush off that thought. Clubs are supposed to be a good break from the humdrum of academics. Don\'t get ahead of yourself. " ,

 " Narration  Chapter_0-0001100 There\'s an art club poster. That\'s a hard no. The most artistic you\'ve ever been was when you colored the sky a solid green and the ground magenta. Only because the other crayons were missing. And that was in a coloring book. Not fun at all. " ,

 " Narration  Chapter_0-0001300 There are also a few posters advertising different sports clubs. No thanks. P.E. class already tires you out daily. There\'s no way you have the endurance to do that kind of stuff in your precious free time.  " ,

 " Narration  Chapter_0-0001500 Oh god, there\'s also the paranormal activity club. No way. Nope. You don\'t take the supernatural as seriously as its club members do. You know this because earlier at brunch today, the club advertised by telling ghost stories that were, in their own words, “real, not clickbait.” " ,

 " Narration  Chapter_0-0001700 One of them even said, “In fact, there\'s a ghost in this school right now, giving bad luck to people who are about to do presentations!” Nonsense. You\'re a junior and you are damn sure that there were no ghosts the entire time you attended school. " ,

 " Narration  Chapter_0-0001900 It would be fine if the club was interested in ghosts just for fun, but their fervent attitude says otherwise. You shudder at the thought of even talking to them.  " ,

 " Narration  Chapter_0-0002100 Ooh, a debate club poster. You don\'t consider yourself a chatterbox, but it\'s always fascinating to listen to other people\'s perspectives and find ways to decimate their arguments. It\'s basically a fun way to talk shit to others. Well, for the most part, save for some annoyingly serious people... " ,

 " Narration  Chapter_0-0002300 Damn, besides the debate club, it looks like you don\'t have many good options here. " ,

 " Narration  Chapter_0-0002500 Wait, what\'s with that poster over there?  " ,

 " Radio club poster (wall poster). Allow toggle for zoom in to the RadioClub.png in Art folder.  Chapter_0-0002700 Radio club poster (wall poster). Allow toggle for zoom in to the RadioClub.png in Art folder. " ,

 " Narration  Chapter_0-0002900 It advertises... a radio club? Interesting. Teachers love to praise your diction and confidence in your class presentations. This could be worth a try.  " ,

 " Narration  Chapter_0-0003100 You enter a nearby room with the radio club sign on its door.  " ,

 " Music_Room_Basic  Chapter_0-0003300 Music_Room_Basic " ,

 " Kyo_BP_Default  Chapter_0-0003500 Kyo_BP_Default " ,

 " Centered  Chapter_0-0003600 Centered " ,

 " Narration  Chapter_0-0003800 There\'s only one student here. Yet, you can tell that you\'re in the right place. Her appearance is just as colorful as the poster, and the graffiti beside her only emphasizes that. " ,

 " Narration  Chapter_0-0004000 The microphone on the other side of the room looks too high for her to reach. That’s a bit weird. " ,

 " Narration  Chapter_0-0004200 It looks like the girl’s still on her phone. You decide to get her attention. " ,

 " Player  Chapter_0-0004500 Hi, I wanna join the radio club. " ,

 " Narration  Chapter_0-0004800 She puts her phone away and turns around. " ,

 " ??? Kyo_FP_Shocked  Chapter_0-0005100 AAAAAAAAAAAAAAAAAAAAH!!! " ,

 " Narration  Chapter_0-0005400 The student\'s voice then drops a few octaves lower than you expect her to have. " ,

 " ??? Kyo_FP_Bruh  Chapter_0-0005700 You fucking scared the shit out of me! My god.  " ,

 " Narration  Chapter_0-0006000 Well, you now know two things. One, this girl is actually a guy. Two, this dude’s language is as colorful as his hair. What a bombastic impression you’ve left on each other. It only goes uphill from here. " ,

 " Player  Chapter_0-0006300 Sorry, I just walked in. Is this the wrong room? I think I\'m in the wrong ro— " ,

 " Kyo FP_Default  Chapter_0-0006600 No no, wait. I made sure that the door had a sign on it. You\'re here for the radio club, right? " ,

 " Player  Chapter_0-0006900 Yeah, that\'s kinda what I said before you started freaking out.  " ,

 " Kyo  Chapter_0-0007200 Okay, okay, my bad. I literally didn\'t hear you walk in. Anyways, hi, I\'m Kyo Kaneko. What\'s your name? " ,

 " Player  Chapter_0-0007500 I\'m Player.  " ,

 " Player. Alright, here's how the club works.  Chapter_0-0007800 Player. Alright, here\'s how the club works. " ,

 " Player  Chapter_0-0008100 Wait, you\'re not gonna be writing anything on the board or something like that? " ,

 " Kyo  Chapter_0-0008400 Nah. It\'s not that complicated.  " ,

 " Narration  Chapter_0-0008700 Is that his way of saying that he\'s not prepared? " ,

 " Kyo  Chapter_0-0009000 For now, this club mainly does school announcements, but I plan to make it so that we also do podcasting too.  " ,

 " Narration  Chapter_0-0009300 You reach into your backpack. " ,

 " Narration  Chapter_0-0009500 Kyo looks at you in confusion. " ,

 " Player  Chapter_0-0009800 Oh don\'t mind me, I\'m just gonna eat my lunch. " ,

 " Kyo  Chapter_0-0010100 Ooh, what are you having? " ,

 " Player  Chapter_0-0010400 Butter croissants. " ,

 " Narration  Chapter_0-0010700 Kyo stares at your bread a little longer than you want him to. " ,

 " Kyo  Chapter_0-0011000 Can I have some? " ,

 " Proceed to two choices <Sure, you can have a bit.> or <No, this is mine. Get your own.>  Chapter_0-0011200 Proceed to two choices: <Sure, you can have a bit.> or <No, this is mine. Get your own.> " ,

 " Choice 1 Sure, you can have a bit.  Chapter_0-0011400 Choice 1: Sure, you can have a bit. " ,

 " Kyo FP_Bruh  Chapter_0-0011700 Actually, never mind. There are probably some RAAAAAAAANCID germs in there. I don\'t want any of that. I refuuuuuuuuuuse. " ,

 " Narration  Chapter_0-0012000 The nerve of this guy...!  " ,

 " Scene reconverges here  Chapter_0-0012200 Scene reconverges here " ,

 " Choice 2 No, this is mine. Get your own.  Chapter_0-0012500 Choice 2: No, this is mine. Get your own. " ,

 " Kyo_FP_Bruh  Chapter_0-0012700 Kyo_FP_Bruh " ,

 " Narration  Chapter_0-0013000 Kyo whines and pouts. " ,

 " Narration  Chapter_0-0013200 What is up with this guy? Yet, you find his pouting face a little cute. Like a puntable cat.  " ,

 " Scene Reconverges Here  Chapter_0-0013300 Scene Reconverges Here " ,

 " Kyo FP_Default  Chapter_0-0013600 Anyways, since this club requires confident people, I\'d say you\'re a pretty good candidate so far. Most people don’t have the balls to approach me. " ,

 " Narration  Chapter_0-0013900 You look up and down at Kyo incredulously. " ,

 " Player  Chapter_0-0014200 Really? You’re not even tall enough to reach the mic over there. " ,

 " Kyo  Chapter_0-0014500 Hey hey, shut up. Shut the fuck up. " ,

 " Narration  Chapter_0-0014800 Kyo looks up at the classroom clock. " ,

 " Kyo  Chapter_0-0015100 Lunch\'s almost over. So, whaddya say, you wanna join the club or not? " ,

 " Proceed to two choices <Yes> or <No>  Chapter_0-0015300 Proceed to two choices: <Yes> or <No> " ,

 " Choice 1 Yes.  Chapter_0-0015500 Choice 1: Yes. " ,

 " Kyo_FP_Cheerful  Chapter_0-0015700 Kyo_FP_Cheerful " ,

 " Narration  Chapter_0-0016000 Kyo claps his hands. " ,

 " Kyo  Chapter_0-0016300 Yeah, let\'s go! Finally, there\'s a second member. " ,

 " Player  Chapter_0-0016600 Wait, nobody else is in this club yet?  " ,

 " Kyo  Chapter_0-0016900 Oh shit, I forgot to tell you. Yeah, you\'re the only one who joined so far. But here\'s where you come in. " ,

 " Kyo  Chapter_0-0017200 To officially register the club, I\'m gonna need you to recruit 3 more people by the end of the month. You can do it, you\'re charismatic enough. " ,

 " Player  Chapter_0-0017500 Hold on, I didn\'t agree to do free labor. Why don\'t you do it yourself— " ,

 " Narration  Chapter_0-0017800 The lunch bell rings. " ,

 " Kyo  Chapter_0-0018100 Too late, gotta go. " ,

 " Player  Chapter_0-0018400 Hey, wait! " ,

 " Narration  Chapter_0-0018700 You catch a glimpse of Kyo grinning as he bolts past you and out the door. He sings as he escapes into the hallways, cracking his voice. " ,

 " Kyo  Chapter_0-0019000 Running through the halls so fast, something something dash— " ,

 " Narration  Chapter_0-0019300 And just like that, he makes a left and disappears. The nerve of this dude to leave you hanging like that. . .  " ,

 " Narration  Chapter_0-0019500 You go in the opposite direction to your class. As you make your way there, you think about his request. It\'s a lot of work, but it\'s not like you have other plans or commitments this year. Eh, fuck it, you ball. " ,

 " Fade to black  Chapter_0-0019700 Fade to black " ,

 " Proceed to Chapter 1  Chapter_0-0019800 Proceed to Chapter 1 " ,

 " Choice 2 No.  Chapter_0-0020100 Choice 2: No. " ,

 " Kyo FP_Sad  Chapter_0-0020400 Oh, why not?  " ,

 " Player  Chapter_0-0020700 Oh, don\'t take this the wrong way. It\'s just that I wanna consider my other options.  " ,

 " Kyo  Chapter_0-0021000 Like what? " ,

 " Player  Chapter_0-0021300 Hm? Isn\'t it normal to do that?  " ,

 " Kyo  Chapter_0-0021600 What other clubs were you thinking of joining? Because this club can do better than all of them. " ,

 " Narration  Chapter_0-0021900 Where did this sudden pushiness and big ego come from?  " ,

 " Player  Chapter_0-0022200 I was thinking of joining the debate club— " ,

 " Kyo FP_Bruh  Chapter_0-0022500 Bro, I am right here. I am THE debate master. I\'m not all business all the time you know. I can do other things outside of club meetings.  " ,

 " Player  Chapter_0-0022800 Okay, but I have to ask. You\'re cool and all, but are you the only club member?  " ,

 " Kyo  Chapter_0-0023100 Yes, but I\'m gonna get more soon— " ,

 " Player  Chapter_0-0023400 Look, I\'ll go check out other clubs later this week. If I don\'t like any of them, I\'ll come back here. Okay? " ,

 " Narration  Chapter_0-0023700 The lunch bell rings. " ,

 " Player  Chapter_0-0024000 Don\'t wanna be late to class. See ya. " ,

 " Kyo_BP_Sad  Chapter_0-0024200 Kyo_BP_Sad " ,

 " Narration  Chapter_0-0024500 You feel a little guilty seeing his dejected expression as you leave the classroom. But it\'s too late now; you stick to your decision and go to your next class. " ,

 " Empty black screen.  Chapter_0-0024700 Empty black screen. " ,

 " Narration  Chapter_0-0025000 The next day, you try to find Kyo in the radio club room. But the room is empty. You try asking people about Kyo’s whereabouts, but people don’t even know who he is. What the hell. That’s weird. Eh, whatever. Life continues to be lonely as usual. " ,

 " Game end - joke ending. Restart from beginning of game  Chapter_0-0025200 Game end - joke ending. Restart from beginning of game " ,

		// start-of-CHAPTER-0-mark
		// end-of-CHAPTER-0-mark
        'jump CHAPTER_1',
	],
	
    'CHAPTER_1': [
		'chap 1',
 " _Name _DialogCode _Tex " ,

 // 
 " School Rooftop Day  Chapter_1-0000300 School Rooftop Day " ,

 " Atria's BGM  Chapter_1-0000400 Atria\'s BGM " ,

 " Narration  Chapter_1-0000700 … " ,

 " Narration  Chapter_1-0000900 The fresh air really is relaxing when there\'s so much going on. Having to recruit members for a radio club of all things, and so suddenly too… as if that isn’t crazy enough, the amount of drama at the school has been…irritating, to say the least. " ,

 " Narration  Chapter_1-0001100 Hell, it’s insane. …Those damn rumors that the school is haunted are… unnerving, to say the least. " ,

 " Player  Chapter_1-0001400 …People are so desperate to just get a reaction out of people, huh… at this point I don’t doubt this school’s going to digress into chaos. " ,

 " Kyo Kyo_FP_Smiling  Chapter_1-0001700 Chaos? I call it fun! " ,

 " Player  Chapter_1-0002000 WHAT TH– " ,

 " Kyo  Chapter_1-0002300 Have you found any recruits yet? " ,

 " Player  Chapter_1-0002600 …Warn me next time before sneaking up on me, will you?? " ,

 " Kyo Kyo_FP_Cheerful  Chapter_1-0002900 No thanks. " ,

 " Narration  Chapter_1-0003200 Kyo leans forward, his hands on his hips. His expression screams nothing but smug mockery, plainly amused at your annoyance. " ,

 " Kyo  Chapter_1-0003500 Now, you’ve found someone, right? Surely it can\'t be so hard to evaluate who here is a good candidate. Not when there are very few people who stand out amongst the rest. " ,

 " Narration  Chapter_1-0003800 He speaks as if he already has certain people in mind. If so, why is he so insistent on you recruiting members as opposed to him? " ,

 " Player  Chapter_1-0004100 No, Kyo, it has quite literally only been a couple hours. " ,

 " Kyo Kyo_FP_Bruh  Chapter_1-0004400 Mhm… from the way you’re acting now, I’ve most likely put too much faith in you… I guarantee you’re just too introverted to go up and ask someone to join. " ,

 " Player  Chapter_1-0004700 …Actually, I genuinely haven’t seen anyone who looks suitable. A radio club requires someone who is willing to… well, talk. Right? " ,

 " Kyo  Chapter_1-0005000 Right… " ,

 " Kyo  Chapter_1-0005200 You sure you\'re not just scared to interact with people? " ,

 " Player  Chapter_1-0005500 Shut up. " ,

 " Narration  Chapter_1-0005800 Jeez. For someone he just met, Kyo sure has some nerve. " ,

 " Player  Chapter_1-0006100 I hate to break it to you, Mr. know-it-all, but I have yet to see anybody who seems talkative. If anything, I’m the most extroverted person here. " ,

 " Narration Kyo_FP_Cheerful  Chapter_1-0006400 Kyo just shoots you a cocky grin, rolling his eyes playfully.  " ,

 " Kyo  Chapter_1-0006700 Mhm, very believable. Just be a bit more observant, will you? It really can’t be that difficult to find someone. " ,

 " Player  Chapter_1-0007000 But- " ,

 " Kyo  Chapter_1-0007300 Yeah, yeah. I get it. Your short attention span won\'t allow you to tune into one person for more than 15 seconds. " ,

 " Narration  Chapter_1-0007600 You scowl at his remark, but your reaction only further enables him to keep poking at you. You didn’t really mind his banter, but at the very least you wish you could have the ability to snap back. " ,

 " Player  Chapter_1-0007900 What do you want me to do? Just sit and observe as someone goes about their day?? Just stand menacingly in some corner and watch them? " ,

 " Kyo Kyo_SP_Default  Chapter_1-0008200 No need to make it sound so creepy. Listen, you gotta do what you gotta do. Just don’t make it too obvious.  " ,

 " Kyo Kyo_SP_Default  Chapter_1-0008400 Though, from what I’ve seen, I’m starting to even question whether you’re capable of that much. " ,

 " Proceed to two choices <Let it slide> or <Try proving him wrong>  Chapter_1-0008500 Proceed to two choices: <Let it slide> or <Try proving him wrong> " ,

 " Choice 1 Let it slide  Chapter_1-0008700 Choice 1: Let it slide " ,

 " Narration  Chapter_1-0009000 Kyo snickers, tilting his head momentarily as if discreetly pointing somewhere.  " ,

 " Kyo  Chapter_1-0009300 I bet you anything if you actually listen you’ll find someone immediately. " ,

 " Narration  Chapter_1-0009600 Your eyes follow the direction of his nudge. " ,

 " Scene reconverges here  Chapter_1-0009800 Scene reconverges here " ,

 " Choice 2 Try proving him wrong  Chapter_1-0010100 Choice 2: Try proving him wrong " ,

 " Narration  Chapter_1-0010400 You glance around, searching for someone you can listen in on to make your point. " ,

 " Narration  Chapter_1-0010600 Your ears pick up on some commotion, and your attention drifts. " ,

 " Narration  Chapter_1-0010700 		Scene reconverges here " ,

 " Remove Kyo  Chapter_1-0010900 Remove Kyo " ,

 " Atria1_Happy. Darken by 50%, centered  Chapter_1-0011000 Atria1_Happy. Darken by 50%, centered " ,

 " Narration  Chapter_1-0011300 At that moment, you see a group of girls across the courtyard. They all seem rather silent–bored, even– but one of them in particular stands out to you. " ,

 " ???  Chapter_1-0011600 Anyways! About the person I was talking about earlier, the one that I frequently watch. They did this one stream recently, it was a collaboration with some of my favorite streamers! When I saw the waiting room for it, I got really excited! " ,

 " ???  Chapter_1-0011900 I sent it to you guys a while back, though I’m not sure if you saw it? Neither of you responded… Do you think there\'s a possibility we could watch it together sometime? " ,

 " Narration  Chapter_1-0012200 The two other girls look at each other before faking a smile towards her direction. " ,

 " Girl A  Chapter_1-0012500 ...You’re ranting about these streamers every two seconds, you expect us to know which one you are talking about? " ,

 " ??? Atria1_Nervous  Chapter_1-0012800 Oh– …Yeah. Sorry. I guess sometimes I just say stuff without really thinking. " ,

 " ??? Atria2_Happy  Chapter_1-0013100 The one with… let’s see, I\'m trying to think of a way to describe this to someone who doesn’t watch them. They have… blue hair. It’s short, around shoulder length. Does that ring a bell? " ,

 " Narration  Chapter_1-0013400 Wait… " ,

 " Narration  Chapter_1-0013600 Short… blue hair…? That\'s… " ,

 " Narration  Chapter_1-0013800 Kind of silly. " ,

 " ???  Chapter_1-0014100 I understand if you guys don’t remember! I know I can speak a bit quickly at times. " ,

 " ???  Chapter_1-0014300 Oh! Yeah, the one I was talking about yesterday! Surely you remember th– " ,

 " Girl A  Chapter_1-0014600 Hello? Earth to Atria? Atria Aiyashi? " ,

 " Girl A  Chapter_1-0014800 You know, the Atria that thinks before she goes on meaningless tangents? We’re tired of you constantly bothering us about stuff we aren’t interested in. " ,

 " Atria2_Nervous  Chapter_1-0015000 Atria2_Nervous " ,

 " Narration  Chapter_1-0015300 The small yellow haired girl, supposedly named Atria, tenses at the others’ remark. She had been rambling excitedly about her interests just a moment ago and yet… her tone suddenly falters. " ,

 " Atria  Chapter_1-0015600 ...A-Ah.. was I too much?.. " ,

 " Girl B  Chapter_1-0015900 Atria, you can’t keep forgetting we raised you to be silent. " ,

 " Atria  Chapter_1-0016200 I’m sorry… I didn’t mean to do anything… " ,

 " Girl B  Chapter_1-0016500 It\'s the same answer every single time. No matter how much we remind you, you go back to your annoying little ‘hyperfixations’. " ,

 " Girl B  Chapter_1-0016700 Surely you can try a bit harder? You’ve been like this for years now. Is there really something stopping you from just… realizing we don’t care? " ,

 " Girl B  Chapter_1-0016900 Take your silly little blue guy and talk about him to yourself, yeah? " ,

 " Atria Atria1_Nervous  Chapter_1-0017200 Genuinely, I didn’t mean to do anything… " ,

 " Girl B  Chapter_1-0017500 Do you want us to help you or not? " ,

 " Atria  Chapter_1-0017800 I’m sorry, okay? " ,

 " Girl B  Chapter_1-0018100 We at least had some sort of faith in you. We thought we could change you to stop you from constantly babbling on…but you haven’t even made any ounce of progress. " ,

 " Girl A  Chapter_1-0018400 The only reason we even tolerate you is because we feel bad. " ,

 " Atria1_Sad  Chapter_1-0018600 Atria1_Sad " ,

 " Narration  Chapter_1-0018900 Atria opens her mouth, as if to speak, but no sound escapes " ,

 " Narration  Chapter_1-0019000 her. " ,

 " Narration  Chapter_1-0019200 Her voice is caught, suffocated by the others words and the fear of the repercussions of standing up for herself. Her body language speaks volumes, clearly burdened by the weight of the expectations placed upon her. " ,

 " Narration  Chapter_1-0019400 In a shaky, pitiful murmur, she chokes out a rebuttal. " ,

 " Atria  Chapter_1-0019700 I-I said I’m sorry, okay? " ,

 " Narration  Chapter_1-0020000 Atria seems to regret speaking up halfway through her argument, audible desperation in her wavering voice. However, it was simply idiotic to think that the two standing next to her would back down so easily. " ,

 " Girl B  Chapter_1-0020300 You really can’t do anything right, can you? " ,

 " Narration  Chapter_1-0020600 The girl at her side clicks her tongue, smiling manipulatively. " ,

 " Girl B  Chapter_1-0020900 We’re nice enough to give you advice, and you can’t even shut up and take it? You’re lucky we even waste our effort on you.  " ,

 " Girl B  Chapter_1-0021100 What happened to the promise you made us? That you’d do what we ask of you? Do you really want a repeat of what happened last time? " ,

 " Narration  Chapter_1-0021400 The third individual reaches upwards, placing a hand on Atria’s shoulder ‘comfortingly’.  " ,

 " Atria2_Sad. Make sprite jump in surprise  Chapter_1-0021600 Atria2_Sad. Make sprite jump in surprise " ,

 " Narration  Chapter_1-0021800 This only causes Atria to flinch and instinctively put her hands " ,

 " Narration  Chapter_1-0021900 up in defense. " ,

 " Girl A  Chapter_1-0022200 ...We’ll take that reaction as a no. " ,

 " Girl A  Chapter_1-0022500 Remember, we\'re your only friends. We\'re really just trying to " ,

 " Girl A  Chapter_1-0022600 do you a favor. " ,

 " Atria  Chapter_1-0022900 … " ,

 " Narration  Chapter_1-0023200 There is a hesitation that lasts for what seems like an eternity, as Atria’s expression fades. Her emotion is lacking in comparison to mere seconds ago. It seems forced, for sure, yet it\'s clear she’s putting significant effort into holding this mask. " ,

 " Atria Atria2_Timid  Chapter_1-0023500 …Yeah, thank you for reminding me. " ,

 " Narration  Chapter_1-0023800 She lowers her gaze, attempting with all her will to keep a strong, emotionless veil. This would have been manageable for the time being, but the two others don’t even respond to her submission. " ,

 " Narration  Chapter_1-0024000 They just… stare.  " ,

 " Narration  Chapter_1-0024200 Stare as she attempts to keep her composure. " ,

 " Atria  Chapter_1-0024500 … " ,

 " Atria  Chapter_1-0024800 … " ,

 " Atria2_Sad – only shown momentarily before she disappears  Chapter_1-0025000 Atria2_Sad – only shown momentarily before she disappears " ,

 " Footstep SFX  Chapter_1-0025100 Footstep SFX " ,

 " Kyo FP_Shocked, centered  Chapter_1-0025400 … " ,

 " Kyo  Chapter_1-0025700 Das crazy. " ,

 " Player  Chapter_1-0026000 …That\'s really all you have to say? " ,

 " Kyo_FP_Smiling  Chapter_1-0026200 Kyo_FP_Smiling " ,

 " Narration  Chapter_1-0026500 Kyo looks at you with an obvious smugness, outwardly unphased by… whatever had just happened between those three.  " ,

 " Kyo  Chapter_1-0026800 I told you if you actually took the time to tune into a conversation, it wouldn’t be so hard to find someone. " ,

 " Player  Chapter_1-0027100 What, do you want me to go get her and ask her to join a radio club after that? " ,

 " Narration  Chapter_1-0027400 His eyes flicker, looking at the school door where Atria had run off to, then back at you. " ,

 " Narration  Chapter_1-0027600 Back… and forth… and back… and– " ,

 " Kyo  Chapter_1-0027900 So… are you gonna just sit there? Seriously? " ,

 " Player  Chapter_1-0028200 Wh– " ,

 " Kyo  Chapter_1-0028500 Are you even gonna do something? Or nah? " ,

 " Narration  Chapter_1-0028800 Kyo looks at you, like he wants you to go run after her. It’s… oddly ominous. Like he just wants an excuse to make you speak with Atria. …Does he know her or something? Is that what this was all about?? " ,

 " Proceed to two choices <Ignore the whole incident> or <Go search for Atria>  Chapter_1-0029000 Proceed to two choices: <Ignore the whole incident> or <Go search for Atria> " ,

 " Choice 1 Ignore the whole incident  Chapter_1-0029200 Choice 1: Ignore the whole incident " ,

 " Player  Chapter_1-0029500 I really don’t think I should interfere… " ,

 " Kyo_FP_Bruh  Chapter_1-0029700 Kyo_FP_Bruh " ,

 " Narration  Chapter_1-0030000 Kyo stares at you with a tinge of concern. " ,

 " Kyo  Chapter_1-0030300 …Don’t you think she would be a good candidate for the radio club? …Can’t you just… tell? " ,

 " Narration  Chapter_1-0030600 He clearly knows more than he\'s letting on… his consistently unsettling statements are starting to stand out more and more… " ,

 " Narration  Chapter_1-0030800 Eh, surely it\'s nothing. There\'s no way this guy can do anything, anyways. " ,

 " Player  Chapter_1-0031100 What is she, the ‘chosen one’ or something? " ,

 " Narration  Chapter_1-0031400 You joke, rolling your eyes. " ,

 " Scene reconverges here  Chapter_1-0031600 Scene reconverges here " ,

 " Choice 2 Go search for Atria  Chapter_1-0031800 Choice 2: Go search for Atria " ,

 " Scene reconverges here  Chapter_1-0031900 Scene reconverges here " ,

 " Player  Chapter_1-0032200 Fine, fine. Let’s go find her, alright? " ,

 " Kyo Kyo_FP_Bruh  Chapter_1-0032500 ...Actually, I think you should go on your own. I… will only get " ,

 " Kyo Kyo_FP_Bruh  Chapter_1-0032600 in the way. " ,

 " Narration  Chapter_1-0032900 He speaks in an eerie tone, as if he’s admitting to something. " ,

 " Narration  Chapter_1-0033000 What on earth is up with him? " ,

 " Player  Chapter_1-0033300 …Okay? So… you just want me to convince her to join? " ,

 " Player  Chapter_1-0033500 Wait, what do you mean by ‘get in the way’??  " ,

 " Player  Chapter_1-0033700 … " ,

 " Player  Chapter_1-0033900 Actually, nevermind. I can see it. " ,

 " Kyo sprite is removed  Chapter_1-0034100 Kyo sprite is removed " ,

 " Narration  Chapter_1-0034400 You look at the school building momentarily, sighing. It’s an irritating reality, but the longer you wait, the harder it will be to find her. " ,

 " Player  Chapter_1-0034700 I guess I’ll see you later then- " ,

 " Narration  Chapter_1-0035000 You look back to where Kyo had stood just a moment ago, your eyes only meeting blank space. " ,

 " Player  Chapter_1-0035300 Huh? " ,

 " Narration  Chapter_1-0035600 …He never fails to do something strange, does he? " ,

 " Narration  Chapter_1-0035800 You figure you should just get moving. " ,

 " Transition to School Classroom Day  Chapter_1-0036100 Transition to School Classroom Day " ,

 " Narration  Chapter_1-0036400 … " ,

 " Narration  Chapter_1-0036600 Alright then, she has to be somewhere around here. " ,

 " Player  Chapter_1-0036900 Atria? Hello? " ,

 " Narration  Chapter_1-0037200 …  " ,

 " Narration  Chapter_1-0037400 Silence. " ,

 " Player  Chapter_1-0037700 Atria? Don’t worry… I’m not gonna yell. " ,

 " Atria1_Sad  Chapter_1-0037900 Atria1_Sad " ,

 " Centered  Chapter_1-0038000 Centered " ,

 " Narration  Chapter_1-0038300 You glance around, scanning the room, your eyes spotting a fragile figure hunched in the corner. The eye contact causes her body to tense, as if she were expecting judgment, or ridicule. " ,

 " Atria  Chapter_1-0038600 …W-why do you… know my name…? " ,

 " Narration  Chapter_1-0038900 Atria speaks between quiet sobs, her voice strained with emotion. She’s vulnerable, her guard shattered from the weight of her own struggles. " ,

 " Player  Chapter_1-0039200 I… overheard your conversation earlier. " ,

 " Narration  Chapter_1-0039500 You take a few steps towards her, careful not to invade her space. Despite your carefulness, she pushes herself against the walls, making herself appear as small and insignificant as possible. " ,

 " Atria  Chapter_1-0039800 D-did they send you here… to deal with me…? " ,

 " Narration  Chapter_1-0040100 Her voice drips with anticipation. Anticipation to be met with some sort of pain, whether it be emotional or physical. " ,

 " Player  Chapter_1-0040400 No– it’s nothing of the sort. My name is Player… It… must be really exhausting having to listen to their torment. " ,

 " Player  Chapter_1-0040600 Do they constantly tell you things like that? " ,

 " Atria  Chapter_1-0040900 I-… " ,

 " Narration  Chapter_1-0041200 Atria hesitates, unsure whether she should even respond to such a question. " ,

 " Atria  Chapter_1-0041500 They… they just want what’s best for me. They’ve been my friends for a long time.	 " ,

 " Narration  Chapter_1-0041800 … " ,

 " Narration  Chapter_1-0042000 If you were to disregard the scene that had taken place earlier, her self-assured words would seem genuine.  " ,

 " Narration  Chapter_1-0042200 She\'s noticeably frustrated, like she\'s trying to convince you to believe in her words. Has she really been tricked into thinking she\'s at fault? To the point she would stand up for those so-called ‘friends’? " ,

 " Player  Chapter_1-0042500 How long, exactly, have they been your friends? " ,

 " Narration  Chapter_1-0042800 Your tone is soft, encouraging her to open up. Even so, her eyes dart around, desperately seeking for anywhere to look except your own gaze. " ,

 " Atria  Chapter_1-0043100 …As long as I remember. Really, I’m serious… they’re just " ,

 " Atria  Chapter_1-0043200 trying to deal with me. " ,

 " Player  Chapter_1-0043500 Don’t you think they are being a bit… ah, harsh? " ,

 " Atria2_Sad  Chapter_1-0043700 Atria2_Sad " ,

 " Narration  Chapter_1-0044000 You observe Atria closely, noticing the conflict within her as she struggles with her loyalty to her ‘friends’ and their effect on her emotional stability. She seems torn, caught between the conflicting beliefs instilled by her ‘friends’ and the flickers of doubt emerging within her. " ,

 " Narration  Chapter_1-0044200 She speaks, her voice laced with a forced conviction. " ,

 " Atria  Chapter_1-0044500 It\'s… fine. I’m used to it. " ,

 " Narration  Chapter_1-0044800 …Used to it? " ,

 " Narration  Chapter_1-0045000 You struggle for a good moment, before a realization hits you; her perception of reality has been shaped by years of… whatever they had done to her. " ,

 " Narration  Chapter_1-0045200 Comforting and giving advice wasn’t exactly your strong suit... " ,

 " Player  Chapter_1-0045500 Atria… that\'s not normal. " ,

 " Atria Atria2_Timid  Chapter_1-0045800 Huh? " ,

 " Narration  Chapter_1-0046100 She takes a few seconds to herself, a mix of confusion and curiosity seeping through her expression. You take the silence as an opportunity to explain and clear up any possible questions. " ,

 " Player  Chapter_1-0046400 What I mean is, friends are meant to encourage your hobbies, and allow you to open up about yourself. What I saw back there wasn’t healthy… nor acceptable. " ,

 " Narration  Chapter_1-0046700 You speak with a confident tone, pushing aside your own uncertainties on how to navigate such a sensitive conversation. The more you speak, however, the more confusion crosses Atrias face. " ,

 " Atria  Chapter_1-0047000 But… that\'s how it’s always been. It\'s been like that for as " ,

 " Atria  Chapter_1-0047100 long as I remember. " ,

 " Narration  Chapter_1-0047400 The confusion of the whole situation only proved the depth of her conditioning. " ,

 " Narration  Chapter_1-0047600 The dynamics you had witnessed between her and her so-called ‘friends’ seem to be ingrained in her entire understanding of relationships. It blurs the line of what she depicts as acceptable or not.  " ,

 " Player  Chapter_1-0047900 Do you mind explaining to me what your friends have been like towards you? Perhaps I can get a better insight on what exactly is going on. " ,

 " Player  Chapter_1-0048100 I… understand if you don’t want to share. Though it really could help me evaluate who’s in the wrong. " ,

 " Atria Atria1_Timid  Chapter_1-0048400 …I would, but… they don’t really like me talking to other " ,

 " Atria Atria1_Timid  Chapter_1-0048500 people… " ,

 " Atria Atria1_Timid  Chapter_1-0048700 …But… the way you are talking to me completely contradicts the things that they have said would happen if I did… " ,

 " Narration  Chapter_1-0049000 Atria mumbles, taking in a deep breath as she contemplates whether or not she should open up. " ,

 " Atria  Chapter_1-0049300 …Alright, just– please don’t tell them I said anything. Nobody… has ever, er… offered this to me, so… I’m not really sure how they would react if they found out. " ,

 " Narration  Chapter_1-0049600 You nod, reassuring her. " ,

 " Player  Chapter_1-0049900 I wouldn’t dream of it. " ,

 " Narration  Chapter_1-0050200 Atria visibly relaxes, her tense posture softening slightly as she starts to consider sharing her experiences. It\'s a step into the unknown for her.  " ,

 " Atria  Chapter_1-0050500 Okay, just… give me a moment.  " ,

 " Narration  Chapter_1-0050800 She takes a deep breath, steadying herself as she gathers the courage to break the chains of silence that have bound her for so long. " ,

 " Atria1_Nervous  Chapter_1-0051000 Atria1_Nervous " ,

 " Narration  Chapter_1-0051200 A weak smile forms as she reminisces. " ,

 " Atria  Chapter_1-0051500 I met them in 2nd grade, and they were the first people in my life that would actually call me a friend. …They never really liked me hanging out with others. So, since then, I’ve just kind of stuck with them. " ,

 " Atria  Chapter_1-0051700 They helped me, and they still help me to this day. The least I can do for them is follow a couple orders here and there. …I don’t exactly know what would happen if I didn’t do as they asked, anyways. There\'s no use putting up too much of a fight. " ,

 " Narration  Chapter_1-0052000 A small, breathless laugh leaves her, but it seems rather simulated. " ,

 " Atria  Chapter_1-0052300 They remind me when I speak too much, and push me to improve myself. They put up with me, even now, after years of not being able to keep to myself. " ,

 " Atria1_Timid  Chapter_1-0052500 Atria1_Timid " ,

 " Narration  Chapter_1-0052800 Atria’s expression fades as she takes a moment to think about what she had just said. Quietly, she repeats her words to herself. " ,

 " Atria  Chapter_1-0053100 …Years. " ,

 " Atria  Chapter_1-0053400 I’m… lucky they even stick around. " ,

 " Narration  Chapter_1-0053700 Her words are solemn, yet she accepts this idea as the truth with no troubles. You shake your head. " ,

 " Player  Chapter_1-0054000 I… I can’t know exactly what your life has been like, but from what I saw back there, they… really don’t seem like they are doing this for your sake.  " ,

 " Player  Chapter_1-0054200 I can understand it\'s difficult to accept this, especially since you haven’t been exposed to kinder relationships. " ,

 " Player  Chapter_1-0054400 However, isolating you from others and demanding obedience is not a healthy dynamic. You have individuality, and it shouldn’t be suppressed. " ,

 " Narration  Chapter_1-0054700 You emphasize the qualities of healthy relationships, hoping your words impact her twisted definition of a friend. " ,

 " Atria2_Timid  Chapter_1-0054900 Atria2_Timid " ,

 " Narration  Chapter_1-0055100 She looks up in thought, finding it difficult to grasp the foreign concept that her ‘friends’ actions may not align with true friendship. " ,

 " Atria  Chapter_1-0055400 But… they\'ve always said it\'s for my own good. That their guidance and control are necessary to make me better. Isn’t… that how friends are supposed to be? " ,

 " Narration  Chapter_1-0055700 You look at her questioningly, wondering how exactly you could explain this to her when her thought process had been so warped and muddled. " ,

 " Player  Chapter_1-0056000 …Here, imagine this; a friendship where you are allowed to express yourself freely, and your thoughts and feelings are valued.  " ,

 " Narration  Chapter_1-0056300 Atria\'s eyes widen, fascinated in the allure of this alternate reality. " ,

 " Atria1_Timid  Chapter_1-0056500 Atria1_Timid " ,

 " Atria  Chapter_1-0056800 …Are you sure… that’s really possible? " ,

 " Narration  Chapter_1-0057100 You nod, offering her your hand. She reluctantly takes it, standing. " ,

 " Player  Chapter_1-0057400 ...I understand if you don’t believe me, but hey, why not try it out? " ,

 " Atria Atria2_Timid  Chapter_1-0057700 … " ,

 " Atria Atria2_Timid  Chapter_1-0057900 …I-I’m scared… " ,

 " Atria Atria2_Timid  Chapter_1-0058100 …What are they going to think? " ,

 " Narration  Chapter_1-0058400 You look at her with solemn eyes, acknowledging the severity of her situation. " ,

 " Proceed to two choices <Tell her to confront them?> or <Tell her to take her time>  Chapter_1-0058600 Proceed to two choices: <Tell her to confront them?> or <Tell her to take her time> " ,

 " Choice 1 Tell her to confront them  Chapter_1-0058800 Choice 1: Tell her to confront them " ,

 " Player  Chapter_1-0059100 Atria, I understand your attachment to them, but a lot of their actions that you’ve explained to me don’t seem right in any way.. " ,

 " Player  Chapter_1-0059300 If you think they are causing you hurt, the best thing to do is confront them as soon as possible. " ,

 " Player  Chapter_1-0059500 If they disregard your feelings after you do so, they aren’t worth your time. Let alone your pain. " ,

 " Player  Chapter_1-0059700 I know it may be hard, but sometimes cutting people out of your life is the best decision. It can be the difference between differing sides of your mental stability. " ,

 " Narration  Chapter_1-0060000 Atrias eyes widen at this, fearing the mere idea of confrontation. " ,

 " Atria  Chapter_1-0060300 …But what if they respond negatively…? " ,

 " Atria2_Sad  Chapter_1-0060500 Atria2_Sad " ,

 " Atria  Chapter_1-0060800 What if they… " ,

 " Narration  Chapter_1-0061100 She flinches, seemingly reimagining older events. Taking a deep breath, she composes herself. It was a blatant lie, a response that seems like a natural reflex to recalling such things. " ,

 " Atria1_Timid  Chapter_1-0061300 Atria1_Timid " ,

 " Atria  Chapter_1-0061600 …I… don’t think that’s a good idea. " ,

 " Scene reconverges here  Chapter_1-0061800 Scene reconverges here " ,

 " Choice 2 Tell her to take her time  Chapter_1-0062000 Choice 2: Tell her to take her time " ,

 " Player  Chapter_1-0062300 Don’t worry too much about it. I’ll help you through this, and you can take as much time as you need. " ,

 " Player  Chapter_1-0062500 It\'s a large step to take, and it can take a lot. I encourage you to take your time. " ,

 " Player  Chapter_1-0062700 …Just, think about what\'s best for you. Consider the idea of friends that allow you to just be yourself. " ,

 " Narration  Chapter_1-0063000 Slowly, Atria nods in agreement. " ,

 " Atria1_Timid  Chapter_1-0063200 Atria1_Timid " ,

 " Atria  Chapter_1-0063500 I… I don’t really know… I’ve known them for so long… " ,

 " Scene reconverges here  Chapter_1-0063600 Scene reconverges here " ,

 " Atria  Chapter_1-0063900 But… " ,

 " Atria1_Nervous  Chapter_1-0064100 Atria1_Nervous " ,

 " Atria  Chapter_1-0064300 I can try. " ,

 " Narration  Chapter_1-0064600 You smile at her efforts. " ,

 " Player  Chapter_1-0064900 I’ll be here whenever you need me, okay? " ,

 " Player  Chapter_1-0065100 Well… of course I’m not always here but- My point is, if you need help, don’t worry about asking for it. " ,

 " Atria2_Nervous  Chapter_1-0065300 Atria2_Nervous " ,

 " Narration  Chapter_1-0065600 Atria nods, which you take as a cue to leave. " ,

 " Narration  Chapter_1-0065800 … " ,

 " Narration  Chapter_1-0066000 But upon turning around… " ,

 " Atria sprite is removed  Chapter_1-0066200 Atria sprite is removed " ,

 " Kyo_FP_Bruh - Appears before dialogue box  Chapter_1-0066400 Kyo_FP_Bruh - Appears before dialogue box " ,

 " Player  Chapter_1-0066700 K– " ,

 " Player  Chapter_1-0066900 Holy BONKERS will you stop doing that– " ,

 " Kyo  Chapter_1-0067200 Oh, come on. I’m not that scary. " ,

 " Kyo  Chapter_1-0067400 Anyways, will you stop forgetting why you even talked to her in the first place?? " ,

 " Narration  Chapter_1-0067700 Oh, right. The radio club. " ,

 " Player  Chapter_1-0068000 Well– you’re here now, so why don’t you do it? " ,

 " Kyo  Chapter_1-0068300 ...She’s waaay more likely to listen to you, you’re the one that was persuading her to do a load of other things. " ,

 " Player  Chapter_1-0068600 Sounds like an excuse to me. You’re pretty good at " ,

 " Player  Chapter_1-0068700 blabbering, you two could get along. " ,

 " Narration  Chapter_1-0069000 Kyo reaches his hand out to push you back towards Atria, but stops mid-way, pulling his hand back, and letting out a long sigh before gesturing to her. " ,

 " Kyo Kyo_FP_Default  Chapter_1-0069300 Go on. " ,

 " Atria2_Nervous  Chapter_1-0069500 Atria2_Nervous " ,

 " Kyo left, Atria right  Chapter_1-0069600 Kyo left, Atria right " ,

 " Player  Chapter_1-0069900 …Sorry about that. " ,

 " Narration  Chapter_1-0070200 Atria looks towards you with blatant confusion. " ,

 " Player  Chapter_1-0070500 I was just wondering if you’re interested in clubs at all? It’ll be a perfect opportunity to get yourself out there and make new friends. " ,

 " Player  Chapter_1-0070700 I was hoping to recruit you to the radio club. There, you’ll be able to go on tangents without being judged. I think you’ll fit the role perfectly, and hey, you could maybe help recruit some new members too…? " ,

 " Atria2_Timid  Chapter_1-0070900 Atria2_Timid " ,

 " Atria  Chapter_1-0071200 Ah… you’re sure I won’t come off as annoying? Y’know… talking and such? " ,

 " Player  Chapter_1-0071500 Of course not. The entire point of a radio club is to speak into a microphone. You can even take it for a little test run, if you’d like. " ,

 " Atria  Chapter_1-0071800 ... " ,

 " Atria  Chapter_1-0072000 W-well… I suppose it’s the least I can do… you’ve kind of helped me consider possibilities I would have never even imagined otherwise… " ,

 " Narration  Chapter_1-0072300 There’s a brief pause before Atria clings to your sleeve, allowing you to lead the way. " ,

 " Sprites are removed - momentarily for background transition  Chapter_1-0072500 Sprites are removed - momentarily for background transition " ,

 " Music_Room_Basic + Music_Printer  Chapter_1-0072700 Music_Room_Basic + Music_Printer " ,

 " Kyo_SP_Default  Chapter_1-0072900 Kyo_SP_Default " ,

 " Atria1_Timid  Chapter_1-0073000 Atria1_Timid " ,

 " Kyo left, Atria right  Chapter_1-0073100 Kyo left, Atria right " ,

 " Player  Chapter_1-0073400 Here’s the club room! Cozy, isn’t it? " ,

 " Kyo_FP_Smiling  Chapter_1-0073600 Kyo_FP_Smiling " ,

 " Narration  Chapter_1-0073900 Kyo speaks, his tone strung with an obvious sarcasm. " ,

 " Kyo  Chapter_1-0074200 Wooow… 32/10 persuasive skills. " ,

 " Kyo  Chapter_1-0074400 Narration:  " ,

 " Kyo  Chapter_1-0074500 You just shoot a glare at him before sighing and moving on. " ,

 " Player  Chapter_1-0074800 Well, how about you step up to the microphone and try it out? Sound good? " ,

 " Narration  Chapter_1-0075100 Atria reluctantly approaches the microphone at the back of the studio, looking at you for approval before switching it on, tapping its end unsurely.  " ,

 " Narration  Chapter_1-0075300 She has to lower it a bit in order to reach it properly… heh, that would make two short people in the club. " ,

 " Atria  Chapter_1-0075600 ...Ah… what should I say? " ,

 " Player  Chapter_1-0075900 Hmm.. " ,

 " Narration  Chapter_1-0076200 You look at Kyo for an answer, but you only receive a shrug in response. " ,

 " Player  Chapter_1-0076500 ...I guess whatever you feel like. It’s just a test, so, how about something you’re passionate about? " ,

 " Kyo  Chapter_1-0076800 Yeah, that works. Just whatever is easy to talk about. " ,

 " Kyo sprite is removed  Chapter_1-0077000 Kyo sprite is removed " ,

 " Atria2_Timid  Chapter_1-0077100 Atria2_Timid " ,

 " Centered  Chapter_1-0077200 Centered " ,

 " Narration  Chapter_1-0077500 Atria approaches the mic, a bit tense. She starts off very reluctant, stuttering over her sentences. " ,

 " Atria  Chapter_1-0077800 ...Hello, I-I’m Atria… um.. " ,

 " Atria  Chapter_1-0078000 ... " ,

 " Atria  Chapter_1-0078200 ... " ,

 " Player  Chapter_1-0078500 Hey, it\'s alright. Just say whatever comes naturally, it doesn’t have to be thought out like some perfect script. " ,

 " Narration  Chapter_1-0078800 Her eyes shift towards your direction, and she takes a deep breath before continuing. " ,

 " Atria2_Nervous  Chapter_1-0079000 Atria2_Nervous " ,

 " Narration  Chapter_1-0079300 Slowly, her body relaxes a little, as she lets go of her worries for a fleeting moment. It takes a little longer for her to grow comfortable with purposely being so outspoken like this. " ,

 " Atria sprite is removed  Chapter_1-0079500 Atria sprite is removed " ,

 " Black screen  Chapter_1-0079700 Black screen " ,

 " Narration  Chapter_1-0079900 She continues speaking, slowly but surely becoming more confident as she speaks her mind, whatever small bits of information or passion that come to her. " ,

 " Narration  Chapter_1-0080100 Some time passes, and not long later, she begins speaking like she had been waiting for this opportunity for years. " ,

 " Atrias club room CG  Chapter_1-0080300 Atrias club room CG " ,

 " Narration  Chapter_1-0080500 Her face lights up with the most genuine smile you have seen from her since the two of you met. You and Kyo give each other accomplished glances, allowing her to ramble without being ridiculed for what seems like the first time in her life. " ,

 " Narration  Chapter_1-0080700 She seems like an entirely different person, babbling about whatever comes to her mind, in a world of her own. " ,

 " Narration  Chapter_1-0080900 Even a few giddy sounding giggles manage to leave Atria. It was clear as day that she found enjoyment in this. " ,

 " Narration  Chapter_1-0081100 Though after a fleeting moment, she stops, making eye contact as if just remembering there are people listening to her. Her eyes widen slightly, but a small smile remains on her expression. " ,

 " Atria  Chapter_1-0081400 ...Are you sure this is okay?.. Not suppressing the urge to talk… it feels so different. " ,

 " Kyo  Chapter_1-0081700 ... " ,

 " Kyo  Chapter_1-0081900 ...Damn she’s traumatized. " ,

 " Narration  Chapter_1-0082200 You try to nudge Kyo, as this was most definitely *not* the time, but he ducks away. " ,

 " Player  Chapter_1-0082500 Of course it’s alright. So, what do you say? Why don’t you try making some friends by helping start up a club? " ,

 " Atria  Chapter_1-0082800 ...I– " ,

 " Narration  Chapter_1-0083100 Atria ponders this suggestion, taking a while to push away any troubles with her ‘friends’. " ,

 " Narration  Chapter_1-0083300 She shakes her head, clearing her mind before nodding with a newfound assurance. " ,

 " Atria  Chapter_1-0083600 I think I’d like that. " ,

		// start-of-CHAPTER-1-mark
		// end-of-CHAPTER-1-mark
		'jump CHAPTER_2',
	],
	
    'CHAPTER_2': [
		'chap 2',
 " _Name _DialogCode _Tex " ,

 "  Chapter_2-0000100 Chapter 2: Befriending the Shrewd Dreamer " ,

 " Background School Hallway  Chapter_2-0000300 Background: School Hallway " ,

 " Skye's BGM  Chapter_2-0000400 Skye\'s BGM " ,

 " Player and Kyo Kyo_FP_Default  Chapter_2-0000700 Yawn… " ,

 " Narration  Chapter_2-0001000 You and Kyo sleepily make your way down through the quiet school corridor to the radio club room. Neither of you were fit to stand, let alone walk, but– " ,

 " Player  Chapter_2-0001300 Why are we here this early again? School hasn\'t even started yet… " ,

 " Kyo  Chapter_2-0001600 I\'m not happy about this either, but someone needs to prep the club equipment. S\'not like we got a tonna members to figure this shit out yet. " ,

 " Player  Chapter_2-0001900 We\'d have more members if you actually helped with recruitment y\'know. " ,

 " Kyo  Chapter_2-0002200 Hey, that\'s what you\'re for. I have very important club president things to deal with. " ,

 " Narration  Chapter_2-0002500 You grumble, but the both of you continue to make your way down the hall. Even if you lumbered the whole way like a zombie who had already lost its head, only the empty corridors and a snickering Kyo would witness such a scene. " ,

 " Kyo sprite moves to left.  Chapter_2-0002700 Kyo sprite moves to left. " ,

 " Skye_Smile at right, darkened  Chapter_2-0002800 Skye_Smile at right, darkened " ,

 " ???  Chapter_2-0003100 –so with some struggle, you are able to ingest the Baia Bamare figure that is now inside your stomach– " ,

 " Kyo_FP_Shocked  Chapter_2-0003300 Kyo_FP_Shocked " ,

 " Narration  Chapter_2-0003600 A muffled but excited voice catches your attention, stopping you in your tracks. The odd words are inescapable even to your drowsy heads. " ,

 " ???  Chapter_2-0003900 –Arkillia goes ahead and grabs the letter opener and puts it in their pocket… " ,

 " Player and Kyo  Chapter_2-0004200 … " ,

 " Narration  Chapter_2-0004500 The voice continues to excitedly narrate, small mutters and giggles leaking from a small janitor\'s closet stuffed away in the corner of the school corridor.  " ,

 " Narration  Chapter_2-0004700 Both you and Kyo look at each other baffled. " ,

 " Kyo sprite disappears  Chapter_2-0004900 Kyo sprite disappears " ,

 " ???  Chapter_2-0005200 –You hear the doorknob turning. As the door swings open, Eliza reenters. Alright! Let\'s wrap things up here! She pops into her chair, reorganising her papers, unaware that you\'ve been searching through them– " ,

 " Narration  Chapter_2-0005500 You approach the door, giving it a tentative knock that abruptly silences the voice. " ,

 " Player  Chapter_2-0005800 … " ,

 " Narration  Chapter_2-0006100 You bring your hand forward to knock again when the door slowly creaks open. " ,

 " Girl in the Closet  Chapter_2-0006400 C-Can I help you? " ,

 " Skye Default Sprite, normal brightness  Chapter_2-0006600 Skye Default Sprite, normal brightness " ,

 " Narration  Chapter_2-0006900 The girl that meets you as the door opens has a cold look firmly set on her face, flinty eyes glaring at you imperiously. Had she not stuttered, her attempt at intimidation might’ve actually worked… well, probably. " ,

 " Narration  Chapter_2-0007100 A slight flush climbs her face at her stumble, but she stubbornly continues to try and fake disinterest. She’s failing miserably, but you could say she was attempting it with an almost admirable persistence. " ,

 " Player  Chapter_2-0007400 Uhhh… I heard you talking, and… was wondering what you were doing in the closet…? " ,

 " Narration  Chapter_2-0007700 The flush on the girl’s face only grew, her flusteredness leaking into her words, making her ramble slightly. " ,

 " Girl in the Closet  Chapter_2-0008000 Well if you must know, I was conducting a very important meeting with my friends. The closet just happens to be a very convenient place for us to do so without any disturbance or without inadvertently disturbing anyone else. " ,

 " Narration  Chapter_2-0008300 She pushes the closet door open further, stepping out into the hallway. She dusts her skirt off primly, not at all subtly looking away in embarrassment. The closet, left open as it was, shows no one else inside.  " ,

 " Narration  Chapter_2-0008500 You look back at Kyo in confusion, receiving an equally confused look from the blue haired boy.  " ,

 " Narration  Chapter_2-0008700 You turn back to the girl who in turn looks at you strangely, darting her eyes towards Kyo questioningly. " ,

 " Narration  Chapter_2-0008900 You shrug off the girl’s still strange choice of meeting location and lack of other people to have a meeting with. Not that you could really judge people on their social choices. After all, most would probably call you crazy for befriending Kyo… " ,

 " Player  Chapter_2-0009200 I heard you narrating? I think? You speak really well. " ,

 " Narration  Chapter_2-0009500 A surprised expression flickers through her face before her attempt at a cool expression slides back into place. Her expressiveness, still not hiding her feelings, allows a small bit of smug pride to shine through. " ,

 " Girl no longer in Closet  Chapter_2-0009800 Of course! I love playing as my party\'s Game Master, and I work hard to make every game enjoyable. " ,

 " Narration  Chapter_2-0010100 A shy expression flickers on her face before she extends her hand towards you in a handshake. " ,

 " Girl no Longer in Closet  Chapter_2-0010400 My name\'s Skye, Skye Oriana, what’s your name? " ,

 " Player  Chapter_2-0010700 I\'m Player. Nice to meet you.  " ,

 " Narration  Chapter_2-0011000 You take her hand with a smile, receiving a small smile back. " ,

 " Narration  Chapter_2-0011200 Kyo coughs behind you, reminding you that you were in school this early for a reason. At this rate, class would start before you could finish your duties for the radio club. " ,

 " Proceed to two choices <Don’t invite her to the radio club> or <Invite her to the radio club>  Chapter_2-0011400 Proceed to two choices: <Don’t invite her to the radio club> or <Invite her to the radio club> " ,

 " Choice 1 Don't invite her to the radio club  Chapter_2-0011600 Choice 1: Don\'t invite her to the radio club " ,

 " Skye Sprite disappears  Chapter_2-0011800 Skye Sprite disappears " ,

 " Kyo _FP_Default Appears  Chapter_2-0011900 Kyo _FP_Default Appears " ,

 " Narration  Chapter_2-0012200 You take a step back, standing side by side with Kyo once again. He looks at you with a raised brow, unsubtly gesturing towards Skye and muttering quietly. " ,

 " Kyo  Chapter_2-0012500 You thinking of inviting her? " ,

 " Narration  Chapter_2-0012800 Surprised at Kyo’s sudden interest, you look at him questioningly. " ,

 " Player  Chapter_2-0013100 Think it\'s a good idea? We don\'t really know her… " ,

 " Kyo  Chapter_2-0013400 Man, do you think we\'re in any position to be picky? Bet you\'re just too chicken to ask. " ,

 " Kyo sprite disappears  Chapter_2-0013600 Kyo sprite disappears " ,

 " Skye Default Sprite Appears  Chapter_2-0013700 Skye Default Sprite Appears " ,

 " Narration  Chapter_2-0014000 You roll your eyes at his obvious bait – he was the one pushing recruitment off onto you so it wasn\'t like he could talk.  " ,

 " Narration  Chapter_2-0014200 With a grumble, you turn back to Skye, who blinks weirdly at you, looking strangely at the both of you muttering at each other. " ,

 " Scene reconverges here  Chapter_2-0014400 Scene reconverges here " ,

 " Choice 2 Invite her to the radio club  Chapter_2-0014600 Choice 2: Invite her to the radio club " ,

 " Scene reconverges here  Chapter_2-0014700 Scene reconverges here " ,

 " Player  Chapter_2-0015000 Hey, we\'re currently recruiting members for the radio club, do you… wanna join? " ,

 " Skye_Smile  Chapter_2-0015200 Skye_Smile " ,

 " Narration  Chapter_2-0015400 Skye\'s eyebrows shoot up in surprise, a small smile subconsciously spreading across her face. She looks at you in confused delight as you continue your invitation. " ,

 " Player  Chapter_2-0015700 We don\'t have a lot of members but we\'re pretty sure we can get more people to sign up. I think you\'d be a perfect fit for a broadcaster. You think you\'d be up for it? " ,

 " Narration  Chapter_2-0016000 A lost look of wonder briefly crosses her eyes before quickly dimming. She looks to the side, her eyes contemplative. Skye hums consideringly before answering mildly. " ,

 " Skye  Chapter_2-0016300 Well, I\'ll have to talk to my friends first, not sure I\'ll have the time considering all the things that I\'ve been needing to do lately. " ,

 " Narration  Chapter_2-0016600 Skye makes a big gesture of turning to the side, suddenly starting to talk loudly and gesturing broadly as if conversing with a group of people. " ,

 " Skye  Chapter_2-0016900 Well, what do you guys think? " ,

 " Kyo_FP_Shocked sprite appears  Chapter_2-0017100 Kyo_FP_Shocked sprite appears " ,

 " Narration  Chapter_2-0017400 You and Kyo look at her bewilderedly as silence meets Skye\'s question, but Skye only continues talking to the air, nodding and humming, responding as if someone was talking back to her. " ,

 " Skye  Chapter_2-0017700 –you\'re right, I\'m not in any other clubs right now but what about our campaigns? We usually conduct them right after school, we– " ,

 " Player and Kyo  Chapter_2-0018000 … " ,

 " Narration  Chapter_2-0018300 Skye continues talking to nothing. You’re starting to get concerned that staying in the chemical and dust filled janitor’s closet is having a more detrimental effect on her than one would expect. " ,

 " Player  Chapter_2-0018600 Uhhh… Skye? " ,

 " Narration  Chapter_2-0018900 Skye only hums at you, looking like she was only half listening to you as she continues to nod at the thin air near her. " ,

 " Player  Chapter_2-0019200 Who’re you talkin’ to? " ,

 " Narration  Chapter_2-0019500 Skye answers your question distractedly, still seeming completely engrossed at whatever it is she’s listening to. " ,

 " Skye  Chapter_2-0019800 I\'m talking to my friends, of course. " ,

 " Narration  Chapter_2-0020100 Skye gestures at the empty air beside her, only half listening to your question. " ,

 " Player and Kyo Kyo_FP_Bruh  Chapter_2-0020400 … " ,

 " Kyo  Chapter_2-0020700 Goddamn, she looks almost as crazy as you. " ,

 " Player  Chapter_2-0021000 Shut up. " ,

 " Player  Chapter_2-0021200 Narration:  " ,

 " Player  Chapter_2-0021300 You hiss at Kyo, throwing a smack to the short boy’s shoulder that he dodges with an indignant yelp. You frantically turn back to Skye, hoping she didn’t hear Kyo’s expected but poorly timed smacktalk. " ,

 " Player  Chapter_2-0021500 Skye, unfortunately, did seem to notice your antics and blinks " ,

 " Player  Chapter_2-0021600 at you once more, bewildered. " ,

 " Player  Chapter_2-0021900 He\'s like this with everyone, don\'t worry about what he says. In fact, a general rule is that you probably should ignore most of what he says. " ,

 " Kyo Sprite becomes not the focus of scene, Skye Sprite centred  Chapter_2-0022100 Kyo Sprite becomes not the focus of scene, Skye Sprite centred " ,

 " Skye_Smile2  Chapter_2-0022200 Skye_Smile2 " ,

 " Player  Chapter_2-0022400 Kyo’s exclamation of annoyance is drowned out by Skye’s reaction. She doesn\'t react negatively to Kyo’s ribbing. Instead, a bright smile suddenly breaks out on her face. " ,

 " Skye  Chapter_2-0022700 It\'s nice to know someone like me! A person who knows the " ,

 " Skye  Chapter_2-0022800 pros to our more unusual friends… " ,

 " Player  Chapter_2-0023100 Huh? " ,

 " Kyo  Chapter_2-0023400 The fuck, did she just call me unusual? " ,

 " Narration  Chapter_2-0023700 Skye\'s expression only brightens further, her thick glasses not nearly covering her delight. " ,

 " Skye  Chapter_2-0024000 You\'re pretty nice. " ,

 " Narration  Chapter_2-0024300 She looks consideringly to the side again, her smile turning contemplative. " ,

 " Skye  Chapter_2-0024600 I actually might consider visiting your club after all. After classes, of course. I\'m pretty sure I can help you with things even without joining the club! " ,

 " Narration  Chapter_2-0024900 She suddenly rushes to grab your hand, making you stumble back in surprise. She quickly gives the limb a firm, decisive shake, before backing away just as quickly. " ,

 " Skye  Chapter_2-0025200 I\'m looking at a very busy day ahead, so I\'ll be taking my leave now. It was nice to meet you, Player! " ,

 " Narration  Chapter_2-0025500 Skye cheerfully skips off down the school hallways, quickly disappearing through the corridors. " ,

 " Skye Sprite disappears  Chapter_2-0025700 Skye Sprite disappears " ,

 " Narration  Chapter_2-0025900 You and Kyo stand there in dazed shock, both at the odd ending to the conversation and at her quick exit. " ,

 " Player  Chapter_2-0026200 Well… she was interesting. " ,

 " Kyo  Chapter_2-0026500 I mean, she’s a little weird, but so was the other one, and you… " ,

 " Narration  Chapter_2-0026800 Kyo’s words prompts an eye roll from you, breaking you from the reverie that Skye’s abrupt getaway left you. The two of you finally start to make your way to the clubroom again, the strange encounter still fresh on your minds. " ,

 " Player  Chapter_2-0027100 I think she’ll be a good addition to the team, and she’s nice, she and Atria will probably get along great. " ,

 " Kyo  Chapter_2-0027400 Sure, if you can get her to join. Still haven’t gotten to that part, remember? " ,

 " Narration  Chapter_2-0027700 You wince at Kyo’s reminder, but as you remember her look of wonder when you first asked her the question, you don’t think it’ll be very difficult to convince her. " ,

 " Narration  Chapter_2-0027900 She was happy to be invited, she may have some reservations but you have a feeling that everything’ll  turn out just fine. You shrug off Kyo’s pessimism, shooting the shorter boy an eyeroll as the two of you enter the clubroom to deal with your duties for the day. " ,

 " Scene Change  Chapter_2-0028100 Scene Change " ,

 " Lunch Time  Chapter_2-0028400 Lunch Time " ,

 " School Hallway  Chapter_2-0028600 School Hallway " ,

 " Narration  Chapter_2-0028900 ** RING ** Bell SFX " ,

 " Narration  Chapter_2-0029100 You eagerly leave your class for your break – your early start to the day didn’t leave you much time for breakfast, and the little you did eat didn’t sustain you ‘til lunch. You’ve been starving all day and your stomach has been trying to make itself known. " ,

 " Narration  Chapter_2-0029300 Encouraged by its angry rumblings, you make your way to the school store. Hopefully you weren’t too late to grab something. No one should have to handle the angry yowling that you know your stomach would continue to make if the beast wasn’t fed. " ,

 " Narration  Chapter_2-0029500 You hum thoughtfully as you think about what you’re going to buy when the sounds of particularly loud discussion catches your attention. " ,

 " Student A  Chapter_2-0029800 –just admit it, you were the one who sprayed that ugly thing on the back of the classroom, didn’t you. Everyone knows it was you. " ,

 " Skye_Default Centered  Chapter_2-0030000 Skye_Default Centered " ,

 " Narration  Chapter_2-0030300 You notice a group of four gathered in a quiet corner. You aren’t sure what’s going on, but you recognize Skye standing with her back against the wall. " ,

 " Narration  Chapter_2-0030500 Three others were surrounding her, blocking her from any sort of way out. The interaction doesn’t seem like it\'s going well. You quietly duck behind a nearby wall, wondering what’s going on. " ,

 " Narration  Chapter_2-0030700 Skye sighs heavily, annoyance clear in her tone and expression. " ,

 " Skye  Chapter_2-0031000 Why would I graffiti the classroom? You’re accusing me out of nowhere. Again. " ,

 " Narration  Chapter_2-0031300 Skye\'s exasperated answer seems to only spur them on, with another member stepping up to batter at her unwavering stance. " ,

 " Student B  Chapter_2-0031600 Who else would’ve done it? You’ve always been attention seeking. Just the other day you were talking to thin air again! God, you’re annoying on a good day but now you’re actually destroying public property? Can you get any worse? " ,

 " Narration  Chapter_2-0031900 Skye scoffs at their accusations, squinting at her classmates incredulously. " ,

 " Skye  Chapter_2-0032200 No one knows who did it. The classroom doors are locked every night and they’re only opened in the mornings, minutes before class starts. I wasn’t even the first person to arrive today. Your accusations have no merit and exactly zero people have come to tell me their thoughts of otherwise besides you three. This is the third time you’ve accused me of shit I didn’t do and it’s honestly getting out of hand. You– " ,

 " Student C  Chapter_2-0032500 Oh my god, can you just stop talking? No one wants to hear you yap all day! It\'s enough that you run your mouth in class all the time! " ,

 " Narration  Chapter_2-0032800 Rolling her eyes, Skye seems done with the whole interaction. She waves the person off, already moving to leave. " ,

 " Skye  Chapter_2-0033100 I\'m sorry that you\'re incapable of understanding anything higher than the most basic levels of communication, let me clear it up for you. I don\'t have time for your bs, get the fuck out of my way. " ,

 " Narration  Chapter_2-0033400 Skye attempts to sidestep her way out of the people surrounding her, but the increasingly angered trio move to block her way. " ,

 " Student D  Chapter_2-0033700 You sure do know how to talk, you think people like you interrupting the class every time to spout whatever bullshit opinion you have? Everyone\'s tired of you. " ,

 " Student B  Chapter_2-0034000 Yeah, I mean come on, even Sensei had to take you to the side the other day. You might be a teacher’s pet but even they know you’re a lunatic. " ,

 " Skye_Sad  Chapter_2-0034200 Skye_Sad " ,

 " Narration  Chapter_2-0034500 Skye’s bored expression finally cracks, vulnerability seeping through. She looks away, shifting uncomfortably before glaring back at the person speaking. " ,

 " Skye  Chapter_2-0034800 Sensei appreciates my contributions to the class, and they said so themself. They just wish that I give a chance to the rest of the class to express their opinions as well and I concurred. You three should stop talking about things that you don\'t understand. " ,

 " Narration  Chapter_2-0035100 The atmosphere was slowly getting more tense. It might get bad for Skye if you don\'t intervene. " ,

 " Proceed to two choices <Don't intervene> or <Intervene>  Chapter_2-0035300 Proceed to two choices: <Don\'t intervene> or <Intervene> " ,

 " Choice 1 Don't Intervene  Chapter_2-0035500 Choice 1: Don\'t Intervene " ,

 " Narration  Chapter_2-0035800 You stay back a little longer. You\'re sure your schoolmates wouldn\'t resort to violence and you weren\'t sure Skye would appreciate a practical stranger stepping in on things they weren\'t fully informed on. " ,

 " Student A  Chapter_2-0036100 You actually believe that crap. " ,

 " Narration  Chapter_2-0036400 One of the trio scoffs, a derisive sneer on their face. " ,

 " Student A  Chapter_2-0036700 Sensei has to be nice to you – you get the best grades, so of course she sucks up to you. Nobody here actually likes you. " ,

 " Narration  Chapter_2-0037000 They move closer towards Skye, one of them bringing up a hand to give her a shove. Skye furrows her eyebrows, moving back to avoid the advancing group before her expression crumples when she realises there\'s no way for her to escape. " ,

 " Narration  Chapter_2-0037200 You frantically step forward, unsure how everything escalated so quickly. There\'s no way you can leave Skye alone on this. " ,

 " Scene reconverges here  Chapter_2-0037400 Scene reconverges here " ,

 " Choice 2 Intervene  Chapter_2-0037600 Choice 2: Intervene " ,

 " Narration  Chapter_2-0037700 	Scene reconverges here " ,

 " Player  Chapter_2-0038000 Hey, that\'s enough! " ,

 " Narration  Chapter_2-0038300 You quickly make your way to the group. With them having parted in surprise at your exclamation, it\'s easy for you to take Skye by the hand, pulling her out of the circle that they surrounded her with. " ,

 " Player  Chapter_2-0038600 I don\'t know who you three are, but ganging up on someone is seriously low. From the little I\'ve heard, you don\'t even have a leg to stand on. Accusing somebody for something you have no proof of is ridiculous and mocking someone for participating in class is pathetic. " ,

 " Student C  Chapter_2-0038900 Who– " ,

 " Narration  Chapter_2-0039200 You interrupt whatever response they were about to make, not really willing to hear what these assholes have to say. " ,

 " Player  Chapter_2-0039500 You three should really take up some self awareness, seems like it\'s in short fucking supply around here. " ,

 " Narration  Chapter_2-0039800 You quickly remove yourself from the situation while tugging a quiet Skye along behind you, moving to try and find a quiet place to give her some privacy. " ,

 " Narration  Chapter_2-0040000 Skye stays quiet during the entire interaction. As you arrive at a quieter corner, you face her again, concerned. You don\'t know her very well, but from the little interaction you\'ve had with her, her silence seems uncharacteristic. " ,

 " Player  Chapter_2-0040300 Skye, are you okay? I\'m sorry for eavesdropping but you looked like you needed help. " ,

 " Narration  Chapter_2-0040600 Skye looks away, her shoulders hunched, defences built all the way up. She looks clearly uncomfortable and not willing to talk about what had just happened. " ,

 " Skye  Chapter_2-0040900 I\'m fine… Thanks for getting me out of there, those three were getting way too cocky. " ,

 " Player  Chapter_2-0041200 Would you like to report them to a teacher? I heard you mention that this wasn\'t the first time this has happened… " ,

 " Narration  Chapter_2-0041500 Skye shakes her head, dismissing the notion immediately. " ,

 " Skye  Chapter_2-0041800 No no, it\'s fine, they\'re not– they don\'t even bother me usually. " ,

 " Narration  Chapter_2-0042100 A heavy silence settles between the two of you. You\'re not really sure what to say; you don\'t think you really know Skye well enough to comfort her. " ,

 " Narration  Chapter_2-0042300 Skye suddenly starts talking again, finally looking at you directly. " ,

 " Skye  Chapter_2-0042600 People like the discussions that I bring up in class. They say that my insight helps them learn more about the subject we\'re learning about while simultaneously allowing them to not have to be called on unexpectedly when they\'re not willing to. I– " ,

 " Narration  Chapter_2-0042900 Skye cuts herself off before she finishes her sudden explanation, frustration leaking into her voice. A shuddering breath leaves her before she closes her mouth, pursing her lips. " ,

 " Skye  Chapter_2-0043200 I– never mind, sorry for interrupting your break, I should really be getting back to class.  " ,

 " Player  Chapter_2-0043500 Skye– " ,

 " Skye Sprite disappears  Chapter_2-0043700 Skye Sprite disappears " ,

 " Narration  Chapter_2-0044000 Your attempt at talking to her fails as Skye ignores you, making another quick exit before you could really react. This time, you didn\'t feel as optimistic about your interactions as the first time you met her. " ,

 " Narration  Chapter_2-0044200 ** RING ** " ,

 " Narration  Chapter_2-0044400 The bell rings, signifying the end of your break time. It\'s a good thing your stomach had long since curdled at the thought of food after the bitter situation you just experienced.  " ,

 " Narration  Chapter_2-0044600 Your face scrunches in worry, but you hurry yourself to your classroom. There isn\'t much you can do. Maybe Skye needs some time to herself. " ,

 " Scene Change  Chapter_2-0044800 Scene Change " ,

 " After School  Chapter_2-0045100 After School " ,

 " School Hallway Day  Chapter_2-0045300 School Hallway Day " ,

 " Narration  Chapter_2-0045500 *RING* School bell SFX " ,

 " Narration  Chapter_2-0045700 The school bell finally signals the end of the school day.  " ,

 " Narration  Chapter_2-0045900 You rush out as soon as you can, the afternoon incident still hanging heavily in your mind, completely distracting you for the latter part of your school day. " ,

 " Narration  Chapter_2-0046100 You make your way to the clubroom hoping that Skye would keep her word of visiting, at least just so that you could talk to her. You didn’t like that she had left upset at lunch. " ,

 " Background Change Radio Clubroom Basic + Printer + Mic  Chapter_2-0046300 Background Change: Radio Clubroom Basic + Printer + Mic " ,

 " Kyo_FP_Default  Chapter_2-0046500 Kyo_FP_Default " ,

 " Narration  Chapter_2-0046700 You enter the clubroom to see that Kyo has already made himself comfortable. Game console in hand, his feet casually settled on the clubroom’s table, and his chair perched precariously on its back legs. " ,

 " Player  Chapter_2-0047000 Do you ever leave this room? Why are you here already, classes just ended. " ,

 " Kyo  Chapter_2-0047300 \'Ey, don\'t blame me for you being slow, running through the halls ain\'t nothin\'. " ,

 " Narration  Chapter_2-0047600 You roll your eyes at the shorter boy, settling your bag on the table and slumping yourself on one of the chairs, heaving out a deep sigh. " ,

 " Narration  Chapter_2-0047800 Kyo looks up at your dramatics, raising an eyebrow at the long face you were pulling. " ,

 " Kyo  Chapter_2-0048100 ‘Sup? " ,

 " Narration  Chapter_2-0048400 You scratch your head, not looking up at him, not sure how you should answer the question. " ,

 " Player  Chapter_2-0048700 I met up with Skye during lunch break. Some people were bothering her, and she really wasn\'t having a good time. " ,

 " Narration  Chapter_2-0049000 Kyo’s eyebrows rise further at the mention of your new acquaintance, not expecting you to meet her so soon after your meeting this morning. " ,

 " Kyo  Chapter_2-0049300 Yeah? " ,

 " Player  Chapter_2-0049600 Yeah, they were talking about someone graffitiing their classroom? Something crazy like that, been hearing rumours about stuff like that happening all over school lately. " ,

 " Kyo_FP_Shocked  Chapter_2-0049800 Kyo_FP_Shocked " ,

 " Narration  Chapter_2-0050100 Out of the corner of your eye, you notice Kyo freezing in his seat. He plops the precariously tilting furniture back down to a more proper position. You finally look up, raising your brow at his sudden tension. " ,

 " Player  Chapter_2-0050400 People’ve been spreading rumours about ghosts around lately too, graffiti appearing and disappearing out of nowhere, weird noises, weird light, stuff like that. " ,

 " Narration  Chapter_2-0050700 Kyo continues to tense as you proceed describing the supernatural rumours going around your school. A smirk grows on your face as you stand up from your seat. " ,

 " Player  Chapter_2-0051000 You scared of ghosts, Kyo? " ,

 " Narration  Chapter_2-0051300 You come up to the blue haired boy, swinging an arm up to his shoulders – a move he deftly avoids. He quickly stands up from his own seat. " ,

 " Kyo  Chapter_2-0051600 I\'m gonna slip out for a bit – got a couple of things I need to deal with for class tomorrow. " ,

 " Narration  Chapter_2-0051900 Your eyes widen, surprised at his abrupt need to leave and concerned that you had gone too far with your teasing. " ,

 " Player  Chapter_2-0052200 Whoa, you don’t have to leave. We don’t have to talk about ghosts if you don’t want to. " ,

 " Kyo_FP_Default  Chapter_2-0052400 Kyo_FP_Default " ,

 " Narration  Chapter_2-0052700 Kyo rolls his eyes, waving off your silent apology while moving to leave the room. " ,

 " Kyo  Chapter_2-0053000 What? No, I just remembered I got shit to do, hold down the fort for me will you? " ,

 " Player  Chapter_2-0053300 Aren\'t you gonna help me convince Skye to join the club? " ,

 " Narration  Chapter_2-0053600 Kyo raises an eyebrow at you, stopping before opening the clubroom door, face set in a deadpan. " ,

 " Kyo  Chapter_2-0053900 You think my caustic ass\'ll help convince her to join? " ,

 " Narration  Chapter_2-0054200 You wince slightly, remembering Kyo impulsively ribbing Skye just this morning. She didn’t seem to take offence, but maybe exposing her too much to Kyo\'s sharp tongue too early would be ill-advised. " ,

 " Player  Chapter_2-0054500 Don’t you wanna stick around to at least greet her? " ,

 " Kyo  Chapter_2-0054800 When’s she coming? Does she even know where the clubroom is? " ,

 " Narration  Chapter_2-0055100 Silence envelops the room as his question settles, before you groan in frustration, bringing your hand up to cover your face. Kyo\'s laughter rings throughout the room, the annoying gremlin finding pleasure in your misery. " ,

 " Player  Chapter_2-0055400 I forgot to tell her that we’re using the music room this morning… " ,

 " Kyo  Chapter_2-0055700 You better go find her then, I’m dealing with my shit first. " ,

 " Narration  Chapter_2-0056000 Kyo shrugs, casually slipping out of the room and leaving you alone with your thoughts. " ,

 " Kyo Sprite Disappears  Chapter_2-0056200 Kyo Sprite Disappears " ,

 " Player  Chapter_2-0056500 … " ,

 " Narration  Chapter_2-0056800 You sigh in exasperation, finally standing up to go and find Skye, wherever it is she could be.  " ,

 " Narration  Chapter_2-0057000 You make your way to the door, opening it before noticing something in the corner of your eye. " ,

 " Narration  Chapter_2-0057200 You snap your head in surprise, chasing the glimpse of bright neon shapes before it disappears behind the blink of your eyelids. " ,

 " Narration  Chapter_2-0057400 You stare at where you thought you saw… whatever it was you thought you saw, furrowing your brows at the wall. You could’ve sworn– " ,

 " ???  Chapter_2-0057700 Player! " ,

 " Narration  Chapter_2-0058000 A voice calls out to you from the hallway right outside the door you just opened, snapping you out of your thoughts. " ,

 " Skye_Default  Chapter_2-0058200 Skye_Default " ,

 " Player  Chapter_2-0058500 Skye! You’re here? " ,

 " Narration  Chapter_2-0058800 You blurt out her name in surprise, instinctively opening the clubroom door further and stepping back to allow the dark haired girl to step inside. She looks around the room, raising her brow curiously. " ,

 " Skye  Chapter_2-0059100 Of course, I did promise I would come. " ,

 " Player  Chapter_2-0059400 How’d you find the clubroom? I forgot to tell you where it was this morning… " ,

 " Narration  Chapter_2-0059700 Skye waves off your question, turning to look at you curiously. " ,

 " Skye  Chapter_2-0060000 The clubrooms are almost always on the first floor. I was just walking around to look when I saw you at the door… Were you looking at something? " ,

 " Player  Chapter_2-0060300 Huh? " ,

 " Skye  Chapter_2-0060600 You looked a little out of it. I saw you for quite a little bit before calling you. " ,

 " Narration  Chapter_2-0060900 You look back at the wall, pursing your lips thoughtfully before shaking your head. " ,

 " Player  Chapter_2-0061200 Was nothing, probably just tired. I’m glad you came by! I wasn’t sure if you would, uhh, after… " ,

 " Narration  Chapter_2-0061500 You trail off a little, cursing yourself for bringing up the grim situation from the afternoon. You thought you were getting better at not putting your foot in your mouth, yet here you are, swallowing your whole fucking shoe. " ,

 " Narration  Chapter_2-0061700 A short silence comes after the words awkwardly dry up in your mouth, making you sweat bullets. Skye picks up on the conversation, moving deeper inside the room and casually settling herself on one of the chairs. " ,

 " Skye  Chapter_2-0062000 The graffiti’s gone. " ,

 " Player  Chapter_2-0062300 What? " ,

 " Narration  Chapter_2-0062600 You blink bewilderedly. Skye shrugs, casually leaning her head on her arm settled on the table. " ,

 " Skye  Chapter_2-0062900 The class left for gym class a little bit after lunch and by the time we came back, poof, it just…disappeared.  " ,

 " Skye  Chapter_2-0063100 The teachers figured it was a temporary prank someone was pulling. They’re still looking for the culprit, but nothing points to it being anyone in class, considering that we were all accounted for at gym… " ,

 " Player  Chapter_2-0063400 And… those guys that were bothering you? " ,

 " Skye  Chapter_2-0063700 Well they didn’t apologise, but they did look pretty pissed that it was pretty clearly not me. " ,

 " Narration  Chapter_2-0064000 Skye shrugs faux casually. It\'s difficult to figure out what she\'s thinking. She seems a little bit more closed off than she was this morning. " ,

 " Skye  Chapter_2-0064300 Anyway, you don’t have to worry about those idiots, they’re way more of a nuisance then they are actually troubling. My class is filled with a lot of kind and friendly people, so their voices get drowned out most of the time. " ,

 " Narration  Chapter_2-0064600 Skye smiles at you reassuringly, looking up from her previously contemplative pose. " ,

 " Skye  Chapter_2-0064900 Now, why don’t we discuss your club? It’s what you invited me here for right? " ,

 " Player  Chapter_2-0065200 Yeah… about joining… " ,

 " Skye  Chapter_2-0065500 Still not too sure that’d be necessary. " ,

 " Skye  Chapter_2-0065700 If all you need is another voice to help in broadcasting, or even if you need some journalist help to find some news, I’ll be happy to help out on a more occasional, freelance basis. As long as I’m given some credit for the work, of course. " ,

 " Narration  Chapter_2-0066000 You scratch your head in confusion. If Skye was willing to help the club, why not just join and get the benefit of having an after school sanctioned activity? You open your mouth to ask when the sound of the clubroom door opening catches both of your attention. " ,

 " Atria1_Happy appears  Chapter_2-0066200 Atria1_Happy appears " ,

 " Atria  Chapter_2-0066500 Good evening! " ,

 " Atria1_Timid  Chapter_2-0066700 Atria1_Timid " ,

 " Narration  Chapter_2-0067000 Atria’s eyes widen as she notices Skye’s presence in the room, her surprised expression quickly turning to a bashful smile. Atria shuffles quietly into the room, clearly apprehensive but still trying her best to be welcoming. " ,

 " Atria  Chapter_2-0067300 Oh! H-hello, do we have a new recruit? " ,

 " Player  Chapter_2-0067600 Umm, not necessarily… " ,

 " Narration  Chapter_2-0067900 Atria looks at you questioningly, moving closer to the table and placing her things on it. She fidgets awkwardly with her things before looking up at Skye, smiling uncertainly towards the taller girl. " ,

 " Atria  Chapter_2-0068200 I’m Atria. Umm, i-it’s nice to meet you. I’m a… a new member " ,

 " Atria  Chapter_2-0068300 of the club too. " ,

 " Skye  Chapter_2-0068600 S-Skye. I– well, I haven’t really– I’m not too sure about joining " ,

 " Skye  Chapter_2-0068700 really… " ,

 " Narration  Chapter_2-0069000 Atria’s stumbling responses were sort of expected, but Skye’s stuttering prompts a raised eyebrow from you, confused at her sudden inarticulateness. Noticing your expression, she huffs indignantly, hissing her next words quietly at you. " ,

 " Skye  Chapter_2-0069300 Seeing new faces makes me anxious sometimes! You and your friend definitely caught me off guard this morning… " ,

 " Player  Chapter_2-0069600 Oh yeah, you met Kyo this morning. Sorry he couldn’t be here, he stepped out just now. " ,

 " Skye  Chapter_2-0069900 Oh. That’s fine, I didn’t bring any of my friends here either. Communication isn’t easy when other parties can’t easily talk to or even see one another. " ,

 " Narration  Chapter_2-0070200 You laugh awkwardly remembering Skye’s…friends. It might be a little awkward, navigating Skye’s…eccentricities, but you feel like it would work out… you might have to invest in a sturdier poker face soon though. " ,

 " Narration  Chapter_2-0070400 Atria tilts her head in confusion, unaware of all that happened that day. " ,

 " Narration  Chapter_2-0070600 Skye flushes brightly, before turning back to the now confused but still shyly smiling Atria. She coughs awkwardly, bringing the discussion back to focus. " ,

 " Skye  Chapter_2-0070900 Anyway, like I said, I’m not sure if joining the club would be beneficial for everyone involved. I’d be happy to help y\'all out in general though, you seem like really nice people, mhm. " ,

 " Atria  Chapter_2-0071200 O-Oh, that’s too bad. I’m sure you’d be a great new member. " ,

 " Player  Chapter_2-0071500 I agree, that’s kinda why I invited you in the first place. I’m happy that you’re willing to help us generally, but honestly, I’d like you to stick around. I think we’d all get along great. " ,

 " Skye_Sad   Chapter_2-0071700 Skye_Sad  " ,

 " Narration  Chapter_2-0072000 Skye seems to flinch at your words, her previous light-hearted expression disappearing in an instant. She looks away from you and Atria, clearly uncomfortable.  " ,

 " Narration  Chapter_2-0072200 Your eyebrows furrow with worry, you share a glance with Atria, who is now frowning as well. " ,

 " Player  Chapter_2-0072500 Can I ask why you… don’t want to join us? You did mention you hadn’t signed up for any other club yet, and you don’t seem to be against the idea in general. " ,

 " Skye  Chapter_2-0072800 I-I\'m a very busy woman. I can\'t just start up a new club out of nowhere! After all, who would conduct my campaigns, and… " ,

 " Narration  Chapter_2-0073100 Skye doesn\'t sound convincing, even to herself. She slumps in her chair, sighing tiredly, running her hand through her hair nervously. " ,

 " Skye  Chapter_2-0073400 I-It’d just be easier for all of us. You wouldn’t have to deal with me too regularly, and we get to go our own ways. " ,

 " Narration  Chapter_2-0073700 A short silence comes after her words. You’re shocked that the cheerful girl from this morning had given you such a self-depreciating answer. Atria, having no basis for the girl\'s personality, shyly answers, noticing the tense mood. " ,

 " Atria  Chapter_2-0074000 I understand, I never really got on with people very easily " ,

 " Atria  Chapter_2-0074100 either. " ,

 " Narration  Chapter_2-0074400 Atria smiles awkwardly, trying to reassure the clearly struggling Skye. " ,

 " Narration  Chapter_2-0074600 You appreciate her support in this situation. It helps ground you a little, having someone else\'s perspective on this. Skye shakes her head, dismissing the notion. " ,

 " Skye  Chapter_2-0074900 No no, you’re both really nice, I tend to not work well with others. People tend to be really uncomfortable around me, and even if you didn’t mind tolerating me, I’ll just bring the mood down. Clubwork and community stuff like this never really suited me. " ,

 " Atria1_Sad Sprite   Chapter_2-0075100 Atria1_Sad Sprite  " ,

 " Narration  Chapter_2-0075400 Your face scrunches at hearing the familiar narrative from this afternoon, discomfort growing at hearing Skye parroting her aggressors. " ,

 " Player  Chapter_2-0075700 Is this about what those people said on break? If it is, I think we should be able to find out on our own whether or not we get along. I know we just met this morning, but I think you\'re pretty great. " ,

 " Skye  Chapter_2-0076000 You don\'t get it, everyone gets tired of me eventually. This isn\'t about what those idiots think, it\'s just a fact. I like to keep whatever amicable acquaintances I have and I do that by keeping some distance. " ,

 " Narration  Chapter_2-0076300 Her voice is wrought with agitation and yours, unfortunately, rises in return. Your discomfort turns to upset at the thought of your possible friend thinking so poorly of herself, and by extension, of everyone else around her. " ,

 " Player  Chapter_2-0076600 I think you\'re being a little unfair here. I\'d be more comfortable with your decision if you just weren\'t sure of the club itself, or if you\'re not comfortable with interacting too closely with what would be veritable strangers. " ,

 " Player  Chapter_2-0076800 But, what\'s happening is that you\'re refusing to give us any credit! You\'re so sure we\'re like those assholes that you won\'t give us a chance to even form our own opinions! " ,

 " Skye  Chapter_2-0077100 That\'s not what I\'m saying at all! I\'m just telling you it\'s not gonna work out! " ,

 " Skye  Chapter_2-0077300 Maybe it is about those guys, but didn\'t you hear them? I talk weird, I talk too much, I\'m annoying, people can\'t see Pio-chan and the others and they hate it when I talk to \'em. This stuff isn\'t just a them thing!  " ,

 " Narration  Chapter_2-0077600 Skye’s arguments, having reached a fever pitch, suddenly tapers off. She looks to your side where Atria is before blowing out a huge sigh, agitation slowly bleeding out of her.  " ,

 " Atria2_Timid  Chapter_2-0077800 Atria2_Timid " ,

 " Narration  Chapter_2-0078000 You turn to look at Atria, who looks almost frozen in panic. The blonde was not at all prepared to see her possible new friends fighting, especially so close after her own falling out with her previous awful friends not that long ago. " ,

 " Narration  Chapter_2-0078200 Skye looks away, still perturbed by your argument but no longer so fired up, leaving her sounding just… painfully tired. " ,

 " Skye_Default  Chapter_2-0078400 Skye_Default " ,

 " Skye  Chapter_2-0078700 Things are just way simpler if I\'m not around most other people. I\'m easier to digest in small doses, so you\'ll get tired of me too, sooner or later. I\'m better off spending time with my friends anyway, and I can\'t do that with other people around. They look at me like I\'m crazy. " ,

 " Narration  Chapter_2-0079000 Her joke dies an awkward death. You’re not ready to meet her eyes and you aren’t really sure what to say. " ,

 " Narration  Chapter_2-0079200 You want to apologise for getting so worked up and for butting in where your opinions may not be wanted, but you don’t like that she thinks so badly of herself. " ,

 " Skye  Chapter_2-0079500 I think we’re all a bit tense right now, maybe this wasn’t such a good idea. I-I’m just gonna go. " ,

 " Narration  Chapter_2-0079800 You whip your head back to her, eyes widening.  You open your mouth to call out and clear things up, but a voice stops you from doing so. " ,

 " Atria2_Sad  Chapter_2-0080000 Atria2_Sad " ,

 " Atria  Chapter_2-0080300 W-wait! " ,

 " Narration  Chapter_2-0080600 Atria quickly gets up from her chair, grabbing Skye’s hand to prevent her from leaving. The timid girl holds the limb, trembling, lips pursed tightly as tears prick her eyes. " ,

 " Atria  Chapter_2-0080900 Player’s just worried about you. I-I am too. It’s not right that people’ve made you think that you don’t get to have friends, j-just because you’re a little different. " ,

 " Narration  Chapter_2-0081200 Atria smiles uncertainly down at their clasped palms, tears still pricking her vision.  " ,

 " Atria  Chapter_2-0081500 I know the feeling… " ,

 " Narration  Chapter_2-0081800 Skye’s eyes widened in surprise at the girl’s sudden willfulness. Yours were too at this point. You knew she had some spunk to her from the way she stood up to her former friends, but you weren’t expecting this from her. " ,

 " Atria  Chapter_2-0082100 You know what I think? " ,

 " Atria2_Nervous Sprite  Chapter_2-0082300 Atria2_Nervous Sprite " ,

 " Narration  Chapter_2-0082600 Atria speaks up once more, looking up at Skye’s eyes. Her smile quirks, awkwardly but genuinely, trying to reassure the taller girl. " ,

 " Atria  Chapter_2-0082900 You’ve probably gone through a lot of things that\'ve caused you pain. I’ve had to work on my own things recently and I get that it is so… so scary to trust other people after everything. " ,

 " Narration  Chapter_2-0083200 The blonde circles the table to move closer to the bespectacled girl, before pulling at their clasped hands, bringing the two closer together. Her eyes shine brightly with unshed tears. " ,

 " Atria  Chapter_2-0083500 But, maybe you’d like some help with it? I think we both could use some practice with this friend thing. Why don’t we try this out together? " ,

 " Skye_Smile1  Chapter_2-0083700 Skye_Smile1 " ,

 " Atria1_Happy  Chapter_2-0083800 Atria1_Happy " ,

 " Narration  Chapter_2-0084100 Skye’s eyes are still wide with disbelief, unprepared for the whirlwind of a girl that had just swept her off her feet. A small smile cracks onto her face, still uncertain but now filled with a familiar lost wonder. " ,

 " Skye  Chapter_2-0084400 O-okay. " ,

 " Narration  Chapter_2-0084700 At this point, you aren’t sure if you should stay in the room. It feels like you’re interrupting something even as the two finally separate, still looking at one another. You finally clear your throat, breaking the two’s reverie, returning their gaze towards you. " ,

 " Player  Chapter_2-0085000 Skye, I’m sorry for how I acted. Atria was right, I was worried, but I should’ve been more sensitive. I… shouldn’t have made it about myself. " ,

 " Narration  Chapter_2-0085300 Skye smiles at you for the apology, moving towards you and extending an arm for you to grab. You gratefully take it, grasping onto her palm to shake. Her mouth quirks up in a rueful smirk. " ,

 " Skye  Chapter_2-0085600 I was getting too in my head, I think. I’m happy that you cared enough to try and snap me out of it. " ,

 " Narration  Chapter_2-0085900 You smile at each other, relieved that your fight hadn’t caused irreparable damage to your new friendship. You think about the reason you fought in the first place. " ,

 " Proceed to two choices <Don't invite her to the radio club> or <Invite her to the radio club>  Chapter_2-0086100 Proceed to two choices: <Don\'t invite her to the radio club> or <Invite her to the radio club> " ,

 " Choice 1 Don't invite her to the radio club  Chapter_2-0086300 Choice 1: Don\'t invite her to the radio club " ,

 " Narration  Chapter_2-0086600 You aren\'t sure how appropriate it would be to bring up the subject again after such a charged exchange, especially considering that the tension was one started by you. You stay quiet, releasing your hold on her hand.  " ,

 " Narration  Chapter_2-0086800 To your surprise, a voice pipes up from beside Skye, finally approaching closer after your apologies were finished. " ,

 " Atria Atria2_Happy  Chapter_2-0087100 Skye? Would you maybe consider joining us? Maybe even if it’s later on? " ,

 " Narration  Chapter_2-0087400 You’re surprised once again by the girl’s boldness. Looks like she was the braver one out of the two of you. You smile at Skye, emboldened by your friend to ask again. " ,

 " Scene reconverges here  Chapter_2-0087600 Scene reconverges here " ,

 " Choice 2 Invite her to the radio club  Chapter_2-0087800 Choice 2: Invite her to the radio club " ,

 " Narration  Chapter_2-0087900 	Scene reconverges here " ,

 " Player  Chapter_2-0088200 Would you consider it? Joining us at the club? We’d love to have you. " ,

 " Narration  Chapter_2-0088500 You aren’t sure if the invite would be taken well, but Skye smiles softly at the two of you. She nods her head, one of her hands coming up to rest on her waist as the next words come out of her mouth. " ,

 " Skye Skye_Smile2  Chapter_2-0088800 Well, you two do look like you could use some help. Where do you think we should start? " ,

 " Narration  Chapter_2-0089100 Atria smiles softly as she takes Skye’s hand in hers once more, dragging her to sit on the table as they start discussing ideas for the radio club, what they would prepare for the first broadcast, what news was popular in the school. " ,

 " Narration  Chapter_2-0089300 Whatever it is, it seems like they\'re having fun. You can hear Skye snorting with laughter, Atria’s quieter giggles interspersed a little more rarely in the conversation.  " ,

 " Narration  Chapter_2-0089500 You smile at them as you move to settle on the table. " ,

 " Skye CG  Chapter_2-0089700 Skye CG " ,

 " Narration  Chapter_2-0089900 Kyo slips into the room in the middle of all the excitement, quietly sneaking into the corner of the room, settling for looking at what was going on. " ,

 " Narration  Chapter_2-0090100 You move to greet him – and maybe grill him for missing yet another certified moment with your new club members – when Kyo motions for you to stop. " ,

 " Narration  Chapter_2-0090300 He moves his hands in a shushing motion, gesturing for you to be quiet. The two girls continue their excited discussion, completely unaware of Kyo’s entrance. " ,

 " Narration  Chapter_2-0090500 You nod your head at the blue haired boy, returning to look once more at your new friends fondly. You definitely don\'t want to interrupt their bonding either. " ,

 " Narration  Chapter_2-0090700 You\'ll have time for more proper introductions later. " ,

		// start-of-CHAPTER-2-mark
		// end-of-CHAPTER-2-mark
        'jump CHAPTER_3'
	],
	
    'CHAPTER_3': [
		'chap 3',
 " _Name _DialogCode _Tex " ,

 "  Chapter_3-0000100 Chapter 3: Confronting the Moon Prince " ,

 " Radio Club Basic + Printer + Mic + Laptop  Chapter_3-0000300 Radio Club Basic + Printer + Mic + Laptop " ,

 " Esmeray's BGM  Chapter_3-0000400 Esmeray\'s BGM " ,

 " Narration  Chapter_3-0000700 It’s been a couple of days since Skye joined the group. " ,

 " Narration  Chapter_3-0000900 The Radio Club is now livelier than ever, much to Kyo’s playful dismay, as you, Atria, and Skye chat loudly and often in the club room. " ,

 " Narration  Chapter_3-0001100 Now, all you need is one more member to make the club official. But who? " ,

 " Transition to School Hallway Day  Chapter_3-0001300 Transition to School Hallway Day " ,

 " Narration  Chapter_3-0001600 As you’re deep in thought and walking down the hallways of ILUNA Academy, you snap to attention when you hear loud giggles, flirts, and cheers coming from a crowd in front of you. " ,

 " Esmeray (Amused) Appears on Screen, labeled as ???  Chapter_3-0001800 Esmeray (Amused) Appears on Screen, labeled as ??? " ,

 " Narration  Chapter_3-0002000 In the center of the crowd is a tall dude with dark turquoise hair, lots of black and shiny bling, and pretty turquoise-gold eyes. " ,

 " Narration  Chapter_3-0002200 Some of the people in the crowd have signs in their hands. " ,

 " Narration  Chapter_3-0002400 "We love you, Esmeray!" says the one in the hands of an enthusiastically cheering girl. " ,

 " Narration  Chapter_3-0002600 "The Prince of the Dark Moon, and my heart <3" says another in the hands of a tall, totally smitten boy. " ,

 " Narration  Chapter_3-0002800 The person in the center winks at the two of them, a lax smile on his face as he does so. " ,

 " Narration  Chapter_3-0003000 The two start squealing before the girl faints in the boy’s arms, making him drop his sign. " ,

 " Player  Chapter_3-0003300 That must be the popular guy of the school I heard about. Esmeray Regulus, I think? " ,

 " Narration  Chapter_3-0003600 You don’t really pay too much attention to the crowd. If anything, it’s a little annoying. " ,

 " Narration  Chapter_3-0003800 The bell rings, meaning most students will be late to their class if they don’t get going, including yourself. " ,

 " Student  Chapter_3-0004100 	See you later, Esmeray! " ,

 " Narration  Chapter_3-0004400 You walk past the crowd, hearing Esmeray laugh at the random person and wave at them. " ,

 " Narration  Chapter_3-0004600 	You slow down your pace. Something about that laugh is weird. " ,

 " Narration  Chapter_3-0004800 	You turn around, looking closely at Esmeray. " ,

 " Narration  Chapter_3-0005000 Sure enough, although Esmeray’s face is smiling, his eyes look empty. " ,

 " Narration  Chapter_3-0005200 You move so that you\'re partially hidden by a nearby trash can, continuing to observe Esmeray. " ,

 " Esmeray Unamused  Chapter_3-0005400 Esmeray Unamused " ,

 " Narration  Chapter_3-0005600 Once the crowd is gone, you see Esmeray’s smile fall, and his entire face becomes cold. He then starts trudging to his class. " ,

 " Narration  Chapter_3-0005800 Your eyes widen at what you\'ve just seen, but your thoughts will have to wait. You’re late to class! " ,

 " Transition to Hallway BG  Chapter_3-0006000 Transition to Hallway BG " ,

 " No Sprites  Chapter_3-0006100 No Sprites " ,

 " Narration  Chapter_3-0006400 The day is finally over, and you\'re heading to the Radio Club. You need to strategize with Kyo on how to gain your last member. " ,

 " Narration  Chapter_3-0006600 On your way there, you hear the faint sounds of guitar chords accompanied by a muffled voice. " ,

 " Player  Chapter_3-0006900 I shouldn’t peek… I’m a little busy… " ,

 " Narration  Chapter_3-0007200 But your curiosity is winning today. " ,

 " Narration  Chapter_3-0007400 Quietly, you walk towards the source of the noise. " ,

 " Narration  Chapter_3-0007600 As you get closer, the guitar chord sounds morph into a soft melody, and with it the muffled voice is now distinct and clear. " ,

 " Narration  Chapter_3-0007800 The voice leads you to the entrance of an empty classroom, door slightly ajar, enough to hear the song. " ,

 " Narration  Chapter_3-0008000 The lovely tenor voice makes you almost breathless. You have to see who’s making that song. " ,

 " Narration  Chapter_3-0008200 You creep up closer to the crack of the door and carefully pull it wider. Your eyes open in shock. " ,

 " Esmeray CG  Chapter_3-0008400 Esmeray CG " ,

 " Esmeray  Chapter_3-0008700 	Don’t need the plastic smiles all up in my face " ,

 " Esmeray  Chapter_3-0008800 	Just wanna be a moonchild and stay in outer space~ " ,

 " Esmeray  Chapter_3-0009000 	Don’t wanna keep on going on like this " ,

 " Esmeray  Chapter_3-0009100 	These people all really like to miss " ,

 " Esmeray  Chapter_3-0009200 	The fact that I don’t care… " ,

 " Esmeray  Chapter_3-0009300 	A fact that they can’t bear… " ,

 " Esmeray  Chapter_3-0009500 	… " ,

 " Esmeray  Chapter_3-0009700 	…Someday I will travel far " ,

 " Esmeray  Chapter_3-0009800 	Riding on a shooting star " ,

 " Esmeray  Chapter_3-0009900 	Leaving won’t give me a scar " ,

 " Esmeray  Chapter_3-0010000 Cause all I need is me and my guitar~! " ,

 " END CG  Chapter_3-0010200 END CG " ,

 " Esmeray Genuine  Chapter_3-0010400 Esmeray Genuine " ,

 " Generic Classroom background  Chapter_3-0010500 Generic Classroom background " ,

 " Narration  Chapter_3-0010800 	You’re in awe, to say the least. " ,

 " Narration  Chapter_3-0011000 Who would’ve thought that the school’s resident popular guy is also a musical talent? " ,

 " Player  Chapter_3-0011300 	…How amazing would it be if he joined the Radio Club? " ,

 " Player  Chapter_3-0011500 …Yeah! Wouldn’t he be a good person to arrange music to broadcast? His voice is perfect! " ,

 " Player  Chapter_3-0011700 … " ,

 " Player  Chapter_3-0011900 Should I try to invite him? " ,

 " Proceed to two choices <Knock and try to invite Esmeray> or <Don't knock and invite Esmeray>  Chapter_3-0012100 Proceed to two choices: <Knock and try to invite Esmeray> or <Don\'t knock and invite Esmeray> " ,

 " Choice 1 Knock and try to invite Esmeray to the Club  Chapter_3-0012300 Choice 1: Knock and try to invite Esmeray to the Club " ,

 " Narration  Chapter_3-0012600 You take a deep breath and knock quietly before walking into the classroom. " ,

 " Esmeray Unamused  Chapter_3-0012800 Esmeray Unamused " ,

 " Narration  Chapter_3-0013000 Esmeray immediately stops playing, his face loses its smile, and he turns to you with a cold face. " ,

 " Scene reconverges here  Chapter_3-0013200 Scene reconverges here " ,

 " Choice 2 Don’t Knock and invite Esmeray  Chapter_3-0013400 Choice 2: Don’t Knock and invite Esmeray " ,

 " Narration  Chapter_3-0013700 You hesitate in asking Esmeray to join. " ,

 " Narration  Chapter_3-0013900 He’s very high profile! Why would he want to join a club that no one knows about? " ,

 " Narration  Chapter_3-0014100 While you were deliberating, you accidentally shuffle in place, bumping into the classroom’s door. " ,

 " Narration  Chapter_3-0014300 *CREAK* Door creak SFX " ,

 " Esmeray Unamused  Chapter_3-0014500 Esmeray Unamused " ,

 " Narration  Chapter_3-0014700 Quickly, Esmeray stops playing, his face loses its smile, and he turns to the door with a cold face. " ,

 " Narration  Chapter_3-0014900 You laugh awkwardly, before slowly entering the room. " ,

 " Scene reconverges here  Chapter_3-0015000 Scene reconverges here " ,

 " Player  Chapter_3-0015300 	…Hey! That’s some amazing playing, you’re really talented! " ,

 " Player  Chapter_3-0015500 Esmeray:  " ,

 " Player  Chapter_3-0015600 … " ,

 " Player  Chapter_3-0015900 So, I, uh, I’m part of the Radio Club, and we’re currently recruiting members. I think you’d be an amazing fit for it! " ,

 " Player  Chapter_3-0016100 So, what do you say? Would you like to join the Radio Club? " ,

 " Esmeray Angry  Chapter_3-0016400 	…Hah! As if I’d join your club.  " ,

 " Esmeray Angry  Chapter_3-0016600 Nah, if it’s full of eavesdroppers like you, then hell, I definitely don’t want to be in any part of it. " ,

 " Esmeray sprite disappears  Chapter_3-0016800 Esmeray sprite disappears " ,

 " Narration  Chapter_3-0017100 Esmeray walks out, leaving you speechless and watching his shrinking figure as he walks down the hallway. " ,

 " Narration  Chapter_3-0017300 Gone was the smile from before. " ,

 " Proceed to next scene  Chapter_3-0017500 Proceed to next scene " ,

 " School Hallway Day  Chapter_3-0017700 School Hallway Day " ,

 " Esmeray Neutral  Chapter_3-0017800 Esmeray Neutral " ,

 " Narration  Chapter_3-0018100 The next day, you spot Esmeray in the hallway on the way to the Radio Club. Luckily, he was alone. " ,

 " Narration  Chapter_3-0018300 Although he rejected you last time, you won’t give up! " ,

 " Narration  Chapter_3-0018500 You know that with his talent in music, he would definitely be a great addition to the club. " ,

 " Narration  Chapter_3-0018700 He is a hidden gem! Not only could he use his talent in music to compose soundtracks for the club, but his voice also fits that of a charming broadcaster perfectly. " ,

 " Narration  Chapter_3-0018900 And, who knows? He could be as good a friend as Atria, Skye, or Kyo. " ,

 " Narration  Chapter_3-0019100 With conviction, you decide that this moment in the hallway would be a good time to try and get him to join the Radio Club. " ,

 " Narration  Chapter_3-0019300 You try to get his attention and wave at him. " ,

 " Player  Chapter_3-0019600 Esmeray! " ,

 " Player  Chapter_3-0019800 Esmeray Unamused:  " ,

 " Player  Chapter_3-0019900 … " ,

 " Footstep SFX  Chapter_3-0020100 Footstep SFX " ,

 " Esmeray sprite disappears  Chapter_3-0020200 Esmeray sprite disappears " ,

 " Hallway BG  Chapter_3-0020300 Hallway BG " ,

 " Narration  Chapter_3-0020600 You sigh, thinking you’ll try again. " ,

 " Narration  Chapter_3-0020800 You wish Kyo was with you, but you couldn’t find him anywhere, and you don’t have his phone number. " ,

 " Narration  Chapter_3-0021000 It’s at times like this where frustration is high that you wish you could contact him, but this frustration is overtaken by your realization that really you haven’t seen him much these past couple of days. " ,

 " Narration  Chapter_3-0021200 Where is he? " ,

 " Narration  Chapter_3-0021500 *BLACK SCREEN TRANSITION* " ,

 " Transition to School Hallway Day  Chapter_3-0021600 Transition to School Hallway Day " ,

 " Esmeray Neutral  Chapter_3-0021700 Esmeray Neutral " ,

 " Narration  Chapter_3-0022000 After gym class, as you walk to the restroom, you find Esmeray walking out from the unisex restroom door. " ,

 " Narration  Chapter_3-0022200 You try waving at him again, but before you can get within a 10 foot radius of his location, he swiftly walks away in the other direction. " ,

 " Esmeray Sprite Disappears  Chapter_3-0022400 Esmeray Sprite Disappears " ,

 " Narration  Chapter_3-0022600 Groaning, you just go into the restroom. " ,

 " Narration  Chapter_3-0022800 *BLACK SCREEN TRANSITION* " ,

 " Transition to School Hallway Day  Chapter_3-0022900 Transition to School Hallway Day " ,

 " Narration  Chapter_3-0023200 A couple days have passed since you first tried to get Esmeray into the Radio Club, each day being met with more glares and avoidance from Esmeray. " ,

 " Narration  Chapter_3-0023400 Kyo, on the few days you would see him, just made fun of you. Whenever you got irritated and asked him where he had been, he’d change the subject or say he had things going on at home. " ,

 " Narration  Chapter_3-0023600 You would just huff in response and walk with him to the Radio Club classroom. " ,

 " Narration  Chapter_3-0023800 As if receiving Kyo’s lack of help wasn’t enough, you also dealt with more people trying to accuse Skye of the increasing incidences of vandalism going on, as well as Atria’s old friends lurking around and glaring at your club. " ,

 " Skye_Default and Atria2_Nervous  Chapter_3-0024000 Skye_Default and Atria2_Nervous " ,

 " Skye  Chapter_3-0024300 Tch, they’re just jealous they don’t have what we have, right y\'all? " ,

 " Narration  Chapter_3-0024600 Skye gestures to you, Atria, and the air next to her while walking down the halls. " ,

 " Narration  Chapter_3-0024800 	Atria looks around. " ,

 " Narration  Chapter_3-0025000 Although they’re a lot less intimidated of their “friends” than before, they\'re still cautious while walking down the halls with you, Kyo, and Skye. " ,

 " Narration  Chapter_3-0025200 Speaking of Kyo, he’s not here, AGAIN. He did tell you that he had a lot of work going on lately, but if the Radio Club’s one of his major commitments, how important must those other things be? " ,

 " Atria  Chapter_3-0025500 	W-Well, it seems like we’re close to the club room! By the " ,

 " Atria  Chapter_3-0025600 way, w-were we able to register officially yet? " ,

 " Player  Chapter_3-0025900 We still need one more member, I think. That’s what Kyo told me, anyways. " ,

 " Skye  Chapter_3-0026200 Mm mm, I see. How’s he, by the way? He seems to not be around lately. " ,

 " Player  Chapter_3-0026500 	*Sigh* I don’t know, Skye… " ,

 " Narration  Chapter_3-0026800 There is silence between you three, until Atria clears their throat. " ,

 " Atria Atria2_Timid  Chapter_3-0027100 	So, who… who are we trying to recruit? " ,

 " Narration  Chapter_3-0027400 	Skye and Atria turn to you, curiosity shining on their faces. " ,

 " Narration  Chapter_3-0027600 	You sheepishly grin at them. " ,

 " Player  Chapter_3-0027900 	Uh… have you heard of Esmeray Regulus? " ,

 " Narration  Chapter_3-0028200 	Atria’s and Skye’s eyes widen in shock. " ,

 " Atria and Skye  Chapter_3-0028500 	WHAT?! " ,

 " Atria Atria2_Nervous  Chapter_3-0028800 T-That really, r-really high profile person?! The so-called charming f-boy of the school who’s so handsome no one really cares if he flirts with everyone?! " ,

 " Skye  Chapter_3-0029100 	Why would he want to join us? Can we even trust him? " ,

 " Player  Chapter_3-0029400 	Hold on, y’all. I haven’t brought him in yet. I\'m just thinking " ,

 " Player  Chapter_3-0029500 about bringing him. " ,

 " Player  Chapter_3-0029700 	There are some reasons… " ,

 " Narration  Chapter_3-0030000 	You pause. " ,

 " Narration  Chapter_3-0030200 	You don’t know if it’s okay to share with them about Esmeray " ,

 " Narration  Chapter_3-0030300 being a musical talent yet. " ,

 " Narration  Chapter_3-0030500 	It\'d be best to get his consent first. " ,

 " Player  Chapter_3-0030800 A-Anyways, I think he would fit right in. If– I mean, when I bring him in, you’ll see why. Can you trust me? " ,

 " Narration  Chapter_3-0031100 	With some hesitation, they both nod at you. " ,

 " Narration  Chapter_3-0031300 	Atria has a wary smile on their face, while Skye pushes up " ,

 " Narration  Chapter_3-0031400 her glasses. " ,

 " Narration  Chapter_3-0031600 	You smile, happy to have them as your friends. " ,

 " Player  Chapter_3-0031900 	Thanks, y’all. " ,

 " Player  Chapter_3-0032100 *BLACK SCREEN TRANSITION* " ,

 " School Hallway Day  Chapter_3-0032200 School Hallway Day " ,

 " Narration  Chapter_3-0032500 Although you said that you would bring Esmeray to them, it’s proving to be harder than you thought. " ,

 " Narration  Chapter_3-0032700 It’s been a couple of days since you told Atria and Skye to trust you. You were at the point of giving up on pursuing Esmeray, and going back to Atria and Skye in defeat. " ,

 " Narration  Chapter_3-0032900 Before you do so, you decide to trudge up the steps that lead to the rooftop, hoping to just have a quiet lunch. " ,

 " Narration  Chapter_3-0033100 As you get closer to the door of the rooftop, you hear the sound of familiar singing. " ,

 " Narration  Chapter_3-0033300 When you get to the slightly open door (Again?? You think to yourself.), you stop and peek through the crack, only to see Esmeray sitting on a bench as he sways to the melody he is singing. " ,

 " Transition to Rooftop Day  Chapter_3-0033500 Transition to Rooftop Day " ,

 " Esmeray Genuine  Chapter_3-0033600 Esmeray Genuine " ,

 " Esmeray  Chapter_3-0033900 What if I could fly to the blue sugar sky? " ,

 " Esmeray  Chapter_3-0034000 Wouldn’t that be sweet " ,

 " Esmeray  Chapter_3-0034100 … " ,

 " Esmeray  Chapter_3-0034200 Don’t wanna deal with a lie " ,

 " Esmeray  Chapter_3-0034300 Just wanna move to the rhythm of the beat " ,

 " Esmeray  Chapter_3-0034500 If only they could see… " ,

 " Esmeray  Chapter_3-0034600 I just wanna go far " ,

 " Esmeray  Chapter_3-0034700 That could be my remedy " ,

 " Esmeray  Chapter_3-0034800 … " ,

 " Esmeray  Chapter_3-0034900 But all I got is me and my guitar… " ,

 " Narration  Chapter_3-0035200 	Esmeray continues to sing and hum, while you start to think. " ,

 " Narration  Chapter_3-0035400 How long has it been since you started trying to get him to join the club? " ,

 " Narration  Chapter_3-0035600 	If you go to him now, would it make a difference? " ,

 " Player  Chapter_3-0035900 	Should I… have one more go? " ,

 " Proceed to three choices <Invite Esmeray to the club> or <Hesitate> or <Turn around and go back down the stairs>  Chapter_3-0036100 Proceed to three choices: <Invite Esmeray to the club> or <Hesitate> or <Turn around and go back down the stairs> " ,

 " Choice 1 Invite Esmeray to the Club  Chapter_3-0036300 Choice 1: Invite Esmeray to the Club " ,

 " Narration  Chapter_3-0036600 You remember how it went the last time you had found Esmeray sitting alone and singing to himself, as well as the stinging rejection that came with it. " ,

 " Narration  Chapter_3-0036800 But, you also remember the friends you made along the way, and the benefits of having Esmeray in the club. " ,

 " Narration  Chapter_3-0037000 Like last time, you take a deep breath before pushing open the door to the rooftop boldly. " ,

 " Narration  Chapter_3-0037200 *CREAK* Door creak SFX " ,

 " Esmeray Neutral  Chapter_3-0037400 Esmeray Neutral " ,

 " Narration  Chapter_3-0037600 Esmeray stops singing and turns to the door, only to make eye contact with you. " ,

 " Esmeray Unamused  Chapter_3-0037800 Esmeray Unamused " ,

 " Narration  Chapter_3-0038000 He immediately stops smiling. There\'s a long pause as Esmeray stares at you long and hard. " ,

 " Narration  Chapter_3-0038200 But, rather than pushing you away for the umpteenth time, he rolls his eyes and shifts to the side, making room for you to sit next to him. " ,

 " Narration  Chapter_3-0038400 Your eyes widen, but you don’t want to let go of this opportunity, and go and sit next to him. " ,

 " Scene reconverges here  Chapter_3-0038600 Scene reconverges here " ,

 " Choice 2 Hesitate  Chapter_3-0038800 Choice 2: Hesitate " ,

 " Narration  Chapter_3-0039000 You remember how it went the last time you had found Esmeray sitting alone and singing to himself, as well as the stinging rejection that came with it. " ,

 " Narration  Chapter_3-0039200 What would be the difference now? " ,

 " Narration  Chapter_3-0039400 Sure, you pestered him the last couple of days so maybe he’ll consider it. " ,

 " Narration  Chapter_3-0039600 But what if he doesn’t? " ,

 " Narration  Chapter_3-0039800 While deliberating and waving your arms around, trying to make a plan, your thoughts distract you so much to the point that you accidentally hit the door wide open. " ,

 " Narration  Chapter_3-0040000 *CREAK* Door creak SFX " ,

 " Esmeray Neutral  Chapter_3-0040200 Esmeray Neutral " ,

 " Narration  Chapter_3-0040400 Esmeray stops singing and turns to the door, only to make eye contact with you. " ,

 " Esmeray Unamused  Chapter_3-0040600 Esmeray Unamused " ,

 " Narration  Chapter_3-0040800 He immediately stops smiling. There\'s a long pause. You can hardly breathe as Esmeray stares at you long and hard. " ,

 " Narration  Chapter_3-0041000 But, rather than pushing you away for the umpteenth time, he rolls his eyes and shifts to the side, making room for you to sit next to him. " ,

 " Narration  Chapter_3-0041200 Your eyes widen, but you don’t want to let go of this opportunity, and go and sit next to him. " ,

 " Scene reconverges here  Chapter_3-0041400 Scene reconverges here " ,

 " Choice 3 Turn around and Go Back Down the Stairs  Chapter_3-0041600 Choice 3: Turn around and Go Back Down the Stairs " ,

 " Narration  Chapter_3-0041900 You remember how it went the last time you had found Esmeray sitting alone and singing to himself, as well as the stinging rejection that came with it. " ,

 " Narration  Chapter_3-0042100 You remember how tiring it was to have the courage to face Esmeray and invite him over and over, only for him to brush you off. " ,

 " Narration  Chapter_3-0042300 Maybe this was the time to finally give up. " ,

 " Narration  Chapter_3-0042500 Thinking so, you turn around, getting ready to go down the stairs again. " ,

 " Narration  Chapter_3-0042700 ...Unfortunately for you, you turn so quickly that your elbow slams into the door, making it creak loudly as it swings wide open. " ,

 " Narration  Chapter_3-0042900 *CREAK* Door creak SFX " ,

 " Esmeray Neutral  Chapter_3-0043100 Esmeray Neutral " ,

 " Narration  Chapter_3-0043300 Esmeray stops singing and turns to the door, only to make eye contact with you. " ,

 " Esmeray Unamused  Chapter_3-0043500 Esmeray Unamused " ,

 " Narration  Chapter_3-0043700 He immediately stops smiling. There\'s a long pause. You can hardly breathe as Esmeray stares at you long and hard. " ,

 " Player  Chapter_3-0044000 	Is he gonna push me away again?... " ,

 " Narration  Chapter_3-0044300 But, rather than pushing you away for the umpteenth time, he rolls his eyes and shifts to the side, making room for you to sit next to him. " ,

 " Narration  Chapter_3-0044500 Your eyes widen, but you don’t want to let go of this opportunity, and go and sit next to him. " ,

 " Scene reconverges here  Chapter_3-0044600 Scene reconverges here " ,

 " Player  Chapter_3-0044900  …Hi, Esmeray. " ,

 " Esmeray Neutral  Chapter_3-0045100 Esmeray Neutral " ,

 " Narration  Chapter_3-0045400 Esmeray nods, looking down at the lunch in his lap and shifting the food around with the fork absentmindedly. " ,

 " Player  Chapter_3-0045700 … " ,

 " Esmeray  Chapter_3-0046000 … " ,

 " Esmeray  Chapter_3-0046200 Player:  " ,

 " Esmeray  Chapter_3-0046300 So– " ,

 " Esmeray  Chapter_3-0046500 Esmeray:  " ,

 " Esmeray  Chapter_3-0046600 Why me? " ,

 " Narration  Chapter_3-0046900 You pause as Esmeray looks at you with a blank face. " ,

 " Narration  Chapter_3-0047100 Player:  " ,

 " Narration  Chapter_3-0047200 Excuse me? " ,

 " Narration  Chapter_3-0047400 Esmeray:  " ,

 " Narration  Chapter_3-0047500 Why me? Don’t you have, like, other friends? What about those multicolored-haired weirdos– I mean, friends in your club already? " ,

 " Narration  Chapter_3-0047800 He pauses. " ,

 " Narration  Chapter_3-0048000 You side-eye Esmeray. " ,

 " Narration  Chapter_3-0048200 He looks blankly back at you. " ,

 " Player  Chapter_3-0048500 	I heard that. " ,

 " Esmeray  Chapter_3-0048800 	Nah, you didn’t. " ,

 " Narration  Chapter_3-0049100 You playfully glare at him before turning to your own lunch and shifting in your seat. " ,

 " Player  Chapter_3-0049400 I’ll be blunt. I just think you would make a good addition to the club. " ,

 " Narration Esmeray Unamused  Chapter_3-0049700 Esmeray raises his eyebrow at you in disbelief, and his eyes look at you as if asking you, "Seriously?" " ,

 " Player  Chapter_3-0050000 Not only are you very talented in music – which would be helpful to use whenever we do broadcasts – but I think your presence alone would be good publicity for the club. " ,

 " Narration  Chapter_3-0050300 	Esmeray scoffs at this, but continues to listen regardless. " ,

 " Player  Chapter_3-0050600 And also, I would like to be friends with you. You seem interesting, and nicer than you show. Although, you need to fix that playboy personality of yours. " ,

 " Esmeray Amused  Chapter_3-0050900 	Pfft– " ,

 " Narration  Chapter_3-0051200 You quickly turn to Esmeray in disbelief, only to find his face contorted into a laughing, genuine smile. " ,

 " Esmeray  Chapter_3-0051500 	Playboy? Me? Nah, das crazy, what do you mean? " ,

 " Esmeray  Chapter_3-0051700 Like, I thought that’s how you’re supposed to act when you want to make friends? " ,

 " Narration  Chapter_3-0052000 	Now it’s your turn to laugh. " ,

 " Player  Chapter_3-0052300 Hah, what? Really? You really thought the best way to socialize with people was to rizz them up? HAHA, that’s HILARIOUS! " ,

 " Esmeray Teeth Smile  Chapter_3-0052600 Wh-WHAT?! NO! I was NOT– rizzing ANYONE! You’re just weird to interpret it that way! " ,

 " Narration  Chapter_3-0052900 	You two continue to laugh and talk more on the rooftop. " ,

 " Narration  Chapter_3-0053100 After you finish laughing, you look past the iron fence of the rooftop and at the sky. " ,

 " Esmeray Genuine  Chapter_3-0053300 Esmeray Genuine " ,

 " Player  Chapter_3-0053600 The sky does look like blue sugar. " ,

 " Narration Esmeray Neutral  Chapter_3-0053900 	Esmeray’s eyes widen, and he whips his head towards you. " ,

 " Esmeray  Chapter_3-0054200 H-Huh? " ,

 " Player  Chapter_3-0054500 I overheard you singing earlier, and also before… " ,

 " Player  Chapter_3-0054700 …Wanna talk about it?  " ,

 " Player  Chapter_3-0054900 I-I mean, you don’t have to, of course! " ,

 " Player  Chapter_3-0055100 I was just thinking, I mean, we are friends now, so… " ,

 " Player  Chapter_3-0055300 B-But of course, you don’t have to, a-and if you want to then feel free to take all the time you need, and stuff… " ,

 " Player  Chapter_3-0055500 Esmeray:  " ,

 " Player  Chapter_3-0055600 	… " ,

 " Player  Chapter_3-0055800 	… " ,

 " Player  Chapter_3-0056000 F…friends? " ,

 " Player  Chapter_3-0056200 … " ,

 " Player  Chapter_3-0056400 Okay, I do want to say this to someone, at least… " ,

 " Narration  Chapter_3-0056700 You patiently wait for him to keep talking. " ,

 " Narration  Chapter_3-0056900 After a couple moments of silence, Esmeray clears his throat. " ,

 " Esmeray  Chapter_3-0057200 Ahem… When…… when I was in elementary school, I had a lot of people who thought I was like an alien because I was shorter than the average height and had weird looking ears. " ,

 " Esmeray  Chapter_3-0057400 	And s-so, in middle school, I decided to change things up a bit. " ,

 " Esmeray  Chapter_3-0057600 Grew my hair out, changed my style, learned how to accessorize. " ,

 " Esmeray  Chapter_3-0057800 I learned about social cues, read some comics, watched some movies where the main character undergoes a transformation and suddenly they know how to talk to people, and how to get them to like them. " ,

 " Esmeray  Chapter_3-0058000 	So, I tried some of the lines from the movies and comics out. " ,

 " Esmeray  Chapter_3-0058200 	A-And it worked! People… They started to like me. " ,

 " Esmeray  Chapter_3-0058400 My growth spurt helped me out too – I stood out from the crowd, in a good way. " ,

 " Esmeray  Chapter_3-0058600 All of a sudden, people stopped calling me names like alien boy, weirdo, and bozo, and they called me things like a prince, a cool guy. " ,

 " Esmeray  Chapter_3-0058800 	… " ,

 " Esmeray  Chapter_3-0059000 	And I liked it, my changes. " ,

 " Esmeray  Chapter_3-0059200 	And I thought it would stay that way, but… " ,

 " Player  Chapter_3-0059500 	… " ,

 " Esmeray  Chapter_3-0059800 	So, I started going out with some people. " ,

 " Esmeray  Chapter_3-0060000 At first, it was crazy to me: people actually liked me, I was actually someone attractive to them. My ways of communication were working, and stuff.  " ,

 " Esmeray  Chapter_3-0060200 	Like, whoa, intimate connection? Me? " ,

 " Esmeray  Chapter_3-0060400 And it was okay, but like, some people ended up ending our relationship because I wasn’t who they thought I was. " ,

 " Esmeray  Chapter_3-0060600 	I mean, who wanted a dinosaur-loving, closeted " ,

 " Esmeray  Chapter_3-0060700 emo-musician guy? " ,

 " Esmeray  Chapter_3-0060900 	But others gave me hope! " ,

 " Esmeray  Chapter_3-0061100 There was a guy I went out with, and he really appreciated me. I felt seen, and loved, genuinely. For the first time in a while. " ,

 " Esmeray  Chapter_3-0061300 We ended up breaking it off because he said his parents were strict. " ,

 " Esmeray  Chapter_3-0061500 	Or at least, that’s what he said to my face. " ,

 " Esmeray  Chapter_3-0061700 	… " ,

 " Player  Chapter_3-0062000 	… " ,

 " Esmeray Angry  Chapter_3-0062300 …Turns out he was making fun of me to his friends the entire time we were dating. I found out because this girl I knew showed me a video of him talking to her and their other friends. " ,

 " Esmeray Angry  Chapter_3-0062500 I was heartbroken, angry… I mean, how could he blatantly lie to me like that and still be okay? Why… Why was I left with all the negatives? " ,

 " Narration  Chapter_3-0062800 You begin to pat Esmeray on the back, seeing him so sad and agitated. He calms down, thanking you quietly. " ,

 " Esmeray Neutral  Chapter_3-0063100 *inhale* Anyways, that girl and I ended up getting close because she told me about how she left the friend group and she was there for me. " ,

 " Esmeray Neutral  Chapter_3-0063300 I healed, and then I thought that maybe she was the one, ya know? " ,

 " Esmeray Angry  Chapter_3-0063600 	But then, it went to shit. " ,

 " Esmeray Angry  Chapter_3-0063800 This girl, she was really toxic. As in she didn’t let me see other people, but she could see a lot of others? " ,

 " Esmeray Angry  Chapter_3-0064000 And she gaslit me often, made me emotionally dependent on her, and my mental health tanked. " ,

 " Esmeray Angry  Chapter_3-0064200 I felt choked, and scared, and honestly, I was really disappointed: in her, myself, and just the humans around me for being so… inhumane. " ,

 " Esmeray Unamused  Chapter_3-0064500 I just… wanted to breathe again. So, I left her, left the school I was at, and transferred here. Blocked everyone I knew, and I hoped that I could start anew. " ,

 " Esmeray Neutral 1  Chapter_3-0064800 And I think I did, at least. No one seems to hate me here – just a lot of admiration. …But you never know. " ,

 " Esmeray Neutral 1  Chapter_3-0065000 So I wanted to hide everything: never get close to anyone here, never tell anyone my story… but you… " ,

 " Esmeray Genuine  Chapter_3-0065300 	You… actually seem to care for me… " ,

 " Esmeray Genuine  Chapter_3-0065500 	…Thanks, for listening… " ,

 " Narration  Chapter_3-0065800 Looks like you were right: Esmeray didn’t really have genuine friends of his own, so you decided it was time to change that. " ,

 " Narration  Chapter_3-0066000 	You make direct eye contact with Esmeray. " ,

 " Esmeray Unamused  Chapter_3-0066300 W-What? Are you gonna accuse me of being too edgy now, or something? " ,

 " Player  Chapter_3-0066600 	Nah. I just wanted to invite you again to the Radio Club. " ,

 " Player  Chapter_3-0066800 I promise we’re all nice people, and I guarantee that we’re not like those people from your past.  " ,

 " Player  Chapter_3-0067000 You can leave if you don’t feel like staying with us, no strings attached. I think it would be amazing if you join us.  " ,

 " Player  Chapter_3-0067200 Wanna give it a try? " ,

 " Narration  Chapter_3-0067500 You hold out your hand, ready to receive a handshake in agreement from Esmeray. " ,

 " Narration  Chapter_3-0067700 Esmeray stares at your hand, before his own twitches and lifts up to shake it. " ,

 " Narration  Chapter_3-0067900 Your face breaks out into a large smile. The mood immediately becomes more lighthearted. " ,

 " Player  Chapter_3-0068200 	Great! Welcome aboard, Esme! " ,

 " Esmeray Smile  Chapter_3-0068500 	…W-wait, Esme? I did NOT agree to this, what the f– " ,

 " Narration Esmeray Teeth Smile  Chapter_3-0068800 While laughing at him, you give him a set day and time for him to come to the Radio Club, as he continues to protest against your silly, stupid nickname. " ,

 " Proceed to next scene  Chapter_3-0069000 Proceed to next scene " ,

 " Music Room Basic + Printer + Mic + Laptop  Chapter_3-0069200 Music Room Basic + Printer + Mic + Laptop " ,

 " Kyo_FP_Bruh, Atria2_Nervous, and Skye_Default  Chapter_3-0069300 Kyo_FP_Bruh, Atria2_Nervous, and Skye_Default " ,

 " Narration  Chapter_3-0069600 Today’s finally the day. " ,

 " Narration  Chapter_3-0069800 You take a deep breath, anxiously looking at the door, trying to spot the familiar shade of dark turquoise hair. " ,

 " Narration  Chapter_3-0070000 Atria and Skye are just as nervous: Atria is fiddling with their star clips while Skye pushes up her glasses, the light reflecting off of them and covering her eyes. " ,

 " Narration  Chapter_3-0070200 In the corner stands Kyo, looking at the clock’s second hand as it moves in its consistent rhythm. " ,

 " Narration  Chapter_3-0070400 *tick tick tick tick…* " ,

 " Narration  Chapter_3-0070600 Kyo sighs. " ,

 " Kyo  Chapter_3-0070900 	When’s this guy gonna be here? " ,

 " Player  Chapter_3-0071200 	He’ll be here soon, y’all. Don’t worry. " ,

 " Narration  Chapter_3-0071500 Atria and Skye turn to look at you with relieved faces, the tense silence of the room finally broken. " ,

 " Skye  Chapter_3-0071800 	W-We’re not worried! Y-you are! " ,

 " Narration  Chapter_3-0072100 	You laugh at Skye’s poor excuse. " ,

 " Player  Chapter_3-0072400 	Haha, yeah, I am. " ,

 " Narration  Chapter_3-0072700 Before you can elaborate, you hear footsteps approaching the door. " ,

 " Narration  Chapter_3-0072900 	All heads in the room turn to the door. " ,

 " Narration  Chapter_3-0073100 	There it is: that dark turquoise hair. " ,

 " Remove all sprites  Chapter_3-0073300 Remove all sprites " ,

 " Esmeray Neutral (Centered)  Chapter_3-0073400 Esmeray Neutral (Centered) " ,

 " Narration  Chapter_3-0073600 In walks Esmeray, his face blank, scanning the room before his eyes land on you. " ,

 " Narration  Chapter_3-0073800 Immediately, you stand up and go to his side, before making jazz hands in his direction while facing the rest of your group. " ,

 " Proceed to two choices <Introduce Esmeray> or <Wait for Esmeray to introduce themselves>  Chapter_3-0074000 Proceed to two choices: <Introduce Esmeray> or <Wait for Esmeray to introduce themselves> " ,

 " Choice 1 Introduce Esmeray  Chapter_3-0074200 Choice 1: Introduce Esmeray " ,

 " Scene reconverges here  Chapter_3-0074400 Scene reconverges here " ,

 " Choice 2 Wait for Esmeray to introduce themselves  Chapter_3-0074600 Choice 2: Wait for Esmeray to introduce themselves " ,

 " Narration  Chapter_3-0074900 You want to let Esmeray introduce himself, and do jazz hands to start it off. " ,

 " Narration  Chapter_3-0075100 Really, you’re just doing jazz hands in awkward silence… " ,

 " Narration  Chapter_3-0075300 … " ,

 " Narration  Chapter_3-0075500 ...What are you doing right now? Lol. " ,

 " Narration  Chapter_3-0075700 You cough awkwardly at the silence before slowly putting your hands down. " ,

 " Narration  Chapter_3-0075900 You clear your throat again, desperate to get out of this situation. " ,

 " Scene reconverges here  Chapter_3-0076000 Scene reconverges here " ,

 " Player  Chapter_3-0076300 Here he is! Y’all, I want you to meet Esme– I mean Esmeray, our school’s lovely playboy and the composer of our music for the Radio Club! Esmeray, meet the club! " ,

 " Move Esmeray to right  Chapter_3-0076500 Move Esmeray to right " ,

 " Atria1_Happy and Skye_Smile on left  Chapter_3-0076600 Atria1_Happy and Skye_Smile on left " ,

 " Narration  Chapter_3-0076900 Atria waves shyly, while Skye pushes up her glasses further and gives a cool nod directed to Esmeray. " ,

 " Remove Atria and Skye  Chapter_3-0077100 Remove Atria and Skye " ,

 " Kyo_FP_Neutral on right  Chapter_3-0077200 Kyo_FP_Neutral on right " ,

 " Narration  Chapter_3-0077500 Kyo scans Esmeray up and down before looking at the chalkboard in the classroom, eyeing the UFO and smiling fondly. " ,

 " Remove Kyo  Chapter_3-0077700 Remove Kyo " ,

 " Esmeray Genuine  Chapter_3-0077800 Esmeray Genuine " ,

 " Narration  Chapter_3-0078100 	Esmeray raises his hand in greeting. " ,

 " Esmeray  Chapter_3-0078400 	Yo. Esmeray, he/they. " ,

 " Narration  Chapter_3-0078700 	The room goes quiet again. " ,

 " Narration  Chapter_3-0078900 You\'re really sick of trying to be an extrovert in these awkward situations. " ,

 " Narration  Chapter_3-0079100 Before you can say another word, however, Atria suddenly stands up. " ,

 " Move Esmeray to right  Chapter_3-0079300 Move Esmeray to right " ,

 " Atria2_Happy and Skye_Smile2 on left  Chapter_3-0079400 Atria2_Happy and Skye_Smile2 on left " ,

 " Atria  Chapter_3-0079700 	*Ahem* " ,

 " Atria  Chapter_3-0079900 	W-WELCOME, ESMERAY, TO THE RADIO CLUB! I-I’M ATRIA, THEY/SHE. " ,

 " Skye  Chapter_3-0080200 I-I’M SKYE, SHE/THEY, AND THESE ARE MY OTHER FRIENDS AND MEMBERS OF THE CLUB. T-TREAT THEM WELL, D-DUDE! " ,

 " Narration  Chapter_3-0080500 	Skye gestures to the air next to her. " ,

 " Narration  Chapter_3-0080700 Esmeray looks at the air, then at you, with a confused expression. " ,

 " Narration  Chapter_3-0080900 	He looks back at the air, and slowly nods in greeting. " ,

 " Narration  Chapter_3-0081100 	Skye’s face brightens up. " ,

 " Atria  Chapter_3-0081400 N-Now that we’re all introduced, we will now start the induction ceremony. Player said that you would be a great ally to our cause to save humanity as we know it. " ,

 " Remove Atria and Skye  Chapter_3-0081600 Remove Atria and Skye " ,

 " Kyo_FP_Cheerful  Chapter_3-0081700 Kyo_FP_Cheerful " ,

 " Kyo  Chapter_3-0082000 Lmao, you said that, Player? You\'re a weirdo too, hahaha. " ,

 " Player  Chapter_3-0082300 What? I-I didn’t say that, I think?? I– " ,

 " Remove Kyo  Chapter_3-0082500 Remove Kyo " ,

 " Atria2_Happy and Skye_Smile2 on left  Chapter_3-0082600 Atria2_Happy and Skye_Smile2 on left " ,

 " Narration  Chapter_3-0082900 You’re cut off by Atria, who is too busy immersing in their role right now. " ,

 " Narration  Chapter_3-0083100 Atria:  " ,

 " Narration  Chapter_3-0083200 Therefore, we have to ask you… " ,

 " Skye  Chapter_3-0083500 Esmeray, do you solemnly swear to  promise to uphold the values of honor, truth, and transparency between fellow members? To join the club and fight the dark souls of corruption of the students through the power of voice and music? To not rest, until humanity is purified of evil, deceit, and misinformation? " ,

 " Narration  Chapter_3-0083800 	The room becomes silent again after the two of them speak up. " ,

 " Narration  Chapter_3-0084000 You sweatdrop, looking at Esmeray cautiously while trying not to burst out laughing. " ,

 " Remove Atria and Skye  Chapter_3-0084200 Remove Atria and Skye " ,

 " Esmeray Neutral (centered)  Chapter_3-0084300 Esmeray Neutral (centered) " ,

 " Narration  Chapter_3-0084600 	Esmeray’s face is blank, eyeing the two in front of him. " ,

 " Narration  Chapter_3-0084800 Suddenly, he lets out a low chuckle, which gradually becomes louder until he’s almost cackling. " ,

 " Esmeray Amused  Chapter_3-0085100 	…Pft. " ,

 " Esmeray Amused  Chapter_3-0085300 	…PuhahaA… PftahaHAHA! " ,

 " Esmeray Teeth Smile  Chapter_3-0085600 	AHAhaAHahaha! " ,

 " Esmeray Teeth Smile  Chapter_3-0085800 	…Pft. " ,

 " Esmeray Smile 1  Chapter_3-0086100 	… " ,

 " Esmeray Smile 1  Chapter_3-0086300 S-Sure, I’ll join the club and fight the dark souls of corruption of the students through the power of the club or whatever. This’ll be fun. " ,

 " Esmeray Teeth Smile  Chapter_3-0086500 Esmeray Teeth Smile " ,

 " Narration  Chapter_3-0086800 On Esmeray’s face is a wide, genuine smile as he continues to laugh. " ,

 " Narration  Chapter_3-0087000 Atria and Skye are in shock, while Kyo starts to laugh along with Esmeray. " ,

 " Move Esmeray to right  Chapter_3-0087200 Move Esmeray to right " ,

 " Skye_Smile2 and Atria2_Smile on left  Chapter_3-0087300 Skye_Smile2 and Atria2_Smile on left " ,

 " Skye  Chapter_3-0087600 H-Hey! It’s true, the dark souls exist and need to be taken down! " ,

 " Narration  Chapter_3-0087900 	As she talks, Skye motions a punch into her palm. " ,

 " Atria  Chapter_3-0088200 Y-Yeah! Don’t underestimate our drive to help the poor students of ILUNA Academy! " ,

 " Narration  Chapter_3-0088500 	Esmeray just nods, as if he is in total agreement. " ,

 " Narration  Chapter_3-0088700 Atria and Skye continue to talk loudly, and eventually the three of them start to converse about their interests and such. " ,

 " Narration  Chapter_3-0088900 You watch the scene fondly. Finally, the club is complete! " ,

		// start-of-CHAPTER-3-mark
		// end-of-CHAPTER-3-mark
        'jump CHAPTER_E'
	],
	
    'CHAPTER_E': [
		'chap E',
 " _Name _DialogCode _Tex " ,

 "  Chapter_E-0000100 Epilogue: Waning Iridescent  " ,

 " Music Room Basic All  Chapter_E-0000300 Music Room Basic All " ,

 " Outro BGM  Chapter_E-0000400 Outro BGM " ,

 " Narration  Chapter_E-0000700 After finally registering the club last week, you walk into the radio club classroom with a little bounce in your steps. It\'s the first official radio club meeting today, and you’re excited!  " ,

 " Narration  Chapter_E-0000900 You look at the notes you wrote on your phone to remember what you’re discussing with all the club members. It’s simple enough: assign roles to the club members and finalize the plan for future activities. " ,

 " Narration  Chapter_E-0001100 Now you just need to wait for them to show up. They didn’t forget about you telling them earlier in the day to meet you at lunch, right? You hope not. " ,

 " Narration  Chapter_E-0001300 Speaking of showing up, will Kyo even be here? You weren’t even able to tell him all the good news, because you haven’t seen him all day. Well, it’s on him for choosing to miss this momentous occasion. " ,

 " Narration  Chapter_E-0001500 The door opens. " ,

 " Atria1_happy, left  Chapter_E-0001700 Atria1_happy, left " ,

 " Atria  Chapter_E-0002000 I’m here. " ,

 " Skye_smile, center  Chapter_E-0002200 Skye_smile, center " ,

 " Skye  Chapter_E-0002500 And so am I! " ,

 " Player  Chapter_E-0002800 Now, where the heck is Esme— " ,

 " Esmeray_neutral, right  Chapter_E-0003000 Esmeray_neutral, right " ,

 " Esmeray  Chapter_E-0003300 My bad. Had to shake off my fans, but I’m good now.  " ,

 " Skye  Chapter_E-0003600 Pssh, okay, Mr. Famous. " ,

 " Player  Chapter_E-0003900 You sure they’re not gonna follow you? " ,

 " Esmeray  Chapter_E-0004200 I mean, more club members, am I right? " ,

 " Narration  Chapter_E-0004500 The three of you stare at him. " ,

 " Esmeray Amused  Chapter_E-0004800 Okay, okay, I’m just kidding. I was a little late finishing my classwork. I’ll be early next time. " ,

 " Player  Chapter_E-0005100 I’ll hold you to that. " ,

 " Narration  Chapter_E-0005400 Esmeray laughs. " ,

 " Player  Chapter_E-0005700 Alright y’all, we got business to take care of. First, we gotta decide what our roles are. " ,

 " Skye  Chapter_E-0006000 Well, it’s obvious what you’re gonna be. Club president!  " ,

 " Narration  Chapter_E-0006300 You put your hands on your hips. " ,

 " Player  Chapter_E-0006600 Yup! I’ll be doing more of the behind-the-scenes stuff. As for the other roles…  " ,

 " Skye  Chapter_E-0006900 I’ve already decided. " ,

 " Player  Chapter_E-0007200 Wait, I haven\'t even said what the other roles are yet. " ,

 " Skye  Chapter_E-0007500 Well, you’re gonna need someone to write scripts, right? Then I’ll do it. " ,

 " Player  Chapter_E-0007800 Sounds good.  " ,

 " Skye  Chapter_E-0008100 I can also get the latest scoops on what’s going around at school. The janitor’s closet is quite handy for getting a hold of hot tea, you know. " ,

 " Player  Chapter_E-0008400 Can you handle doing both? " ,

 " Skye  Chapter_E-0008700 Hell yeah, brother. " ,

 " Narration  Chapter_E-0009000 You flash a smile. This is already going pretty smoothly. " ,

 " Player  Chapter_E-0009300 Now, Esmeray… " ,

 " Esmeray Neutral  Chapter_E-0009600 Hm? " ,

 " Player  Chapter_E-0009900 You’ll be in charge of making little jingles before and after we’re done announcing and stuff. Oh, and I’m thinking we could add music segments in our broadcasts too.  " ,

 " Esmeray  Chapter_E-0010200 You got it. " ,

 " Narration  Chapter_E-0010500 Esmeray takes out a small notebook. He starts writing and humming to himself. " ,

 " Player  Chapter_E-0010800 And finally, Atria, you’ll be the one on the speakers!  " ,

 " Atria Atria1_Nervous  Chapter_E-0011100 Um, are you sure? I’m not that loud and confident yet… " ,

 " Player  Chapter_E-0011400 You don’t have to be the only speaker of course. We can do it together. " ,

 " Narration  Chapter_E-0011700 Atria slowly regains her smile. " ,

 " Atria Atria1_Happy  Chapter_E-0012000 That’d be easier for me. Thank you. " ,

 " Player  Chapter_E-0012300 Alright, now we gotta think of our future plans for this club. " ,

 " Atria  Chapter_E-0012600 Actually, is it okay if I suggest something? " ,

 " Player  Chapter_E-0012900 Of course. " ,

 " Atria  Chapter_E-0013200 It’s Back to School Night next week. The staff wants clubs to help out with the concessions.  " ,

 " Player  Chapter_E-0013500 Then we should join! So, are we all free to help out with the concessions next week? " ,

 " Narration  Chapter_E-0013800 The other three club members say yes. " ,

 " Player  Chapter_E-0014100 Alright, we’re done then.  " ,

 " Narration  Chapter_E-0014400 Happiness feels like it\'s going to burst out of your chest. It really feels like an actual club now. No wait, it’s not just a club. It feels like you have a friend group for real too. You wonder if everyone\'s down for a group hug before they leave. " ,

 " Narration  Chapter_E-0014600 You open your arms wide. " ,

 " Player  Chapter_E-0014900 I know this is out of nowhere but… Who’s down for a group hug?! " ,

 " Atria Atria1_Nervous  Chapter_E-0015200 Huh? " ,

 " Skye Skye_smile2  Chapter_E-0015500 Heh, sure, why not. Come on, get over here, Atria. " ,

 " Esmeray Amused  Chapter_E-0015800 Wait, we’re actually doing this? Hold on a minute— " ,

 " Group hug CG   Chapter_E-0016000 Group hug CG  " ,

 " Player  Chapter_E-0016300 Hehe, thanks y’all. If only Kyo was here to join in the hug too. He’s the one who started the club, after all. " ,

 " Group hug CG ends.  Chapter_E-0016500 Group hug CG ends. " ,

 " Narration  Chapter_E-0016800 All of the club members back up and stare at you in confusion. " ,

 " Esmeray Neutral  Chapter_E-0017100 Who’s Kyo? " ,

 " Player  Chapter_E-0017400 Kyo. You know, the radio club president before I took over his role? Bright blue hair like cotton candy. Very munchable. It’s hard to miss.  " ,

 " Atria Atria1_Timid  Chapter_E-0017700 I’ve never heard of him. " ,

 " Player  Chapter_E-0018000 But you all met him before! You all talked to him and everything. Are you all messing with me? " ,

 " Skye Skye_smile  Chapter_E-0018300 Oh, I get it. He’s the friend you were talking to before.  " ,

 " Player  Chapter_E-0018600 Yeah!  " ,

 " Skye Skye_default  Chapter_E-0018900 Like the ones I used to talk to inside the locker, right? " ,

 " Player  Chapter_E-0019200 Yeah, yeah! Wait, no! What the hell, do you guys genuinely not know?  " ,

 " Narration  Chapter_E-0019500 You don’t get much of a response. " ,

 " Player  Chapter_E-0019800 Never mind, forget it. I’m imagining things, hehe. " ,

 " Narration  Chapter_E-0020100 The lunch bell rings, and all of you part ways as you wave to each other. Your smile then fades. What do they mean, they don’t know who Kyo is? You walk to your next class with a resting bitch face to mask your casual existential crisis.  " ,

 " Scene ends  Chapter_E-0020300 Scene ends " ,

 " School Hallway Night  Chapter_E-0020500 School Hallway Night " ,

 " Narration  Chapter_E-0020800 It\'s Back To School Night. You go back and forth from your mom\'s car to carry water bottles to the venue. It takes just a few trips but the weight tires out your arms. Thank god that you\'re not in any of the sports clubs. " ,

 " Narration  Chapter_E-0021000 As you rest on a nearby bench, you see something colorful faintly glowing bright on the ground. It looks like a poorly drawn hand doing a peace sign. The pain is real. Hands are the bane of every artist’s existence.  " ,

 " Narration  Chapter_E-0021200 …Wait, this looks like the work of Kyo! " ,

 " Narration  Chapter_E-0021400 As quickly as you notice the symbol, it disappears. " ,

 " Narration  Chapter_E-0021600 That is the only sign you\'ve seen of him in school all week. What the hell is he up to?  " ,

 " Narration  Chapter_E-0021800 Looking up ahead, you see more graffiti symbols in the distance, scattered far apart in a way that beckons you to follow them. When you try to get near the symbols, they disappear as well. Oh boy, do you have some questions to ask him when you see him. " ,

 " School Rooftop Night  Chapter_E-0022000 School Rooftop Night " ,

 " Narration  Chapter_E-0022300 You follow the path until you arrive at the school\'s rooftop.  " ,

 " Narration  Chapter_E-0022500 There he is, spray painting symbols on the ground all around him in a circle. They vanish into thin air. " ,

 " Narration  Chapter_E-0022700 You call out to him.   " ,

 " Player  Chapter_E-0023000 Kyo? " ,

 " Kyo_FP_Shocked  Chapter_E-0023200 Kyo_FP_Shocked " ,

 " Narration  Chapter_E-0023500 Kyo turns around.  " ,

 " Kyo  Chapter_E-0023800 Oh shit, hi Player! " ,

 " Player  Chapter_E-0024100 Where have you been? I haven\'t seen you in school all week. " ,

 " Kyo Kyo_FP_Default  Chapter_E-0024400 Um, about that... " ,

 " Narration  Chapter_E-0024700 He shakes his spray paint can but doesn\'t use it. He looks back and forth between his spray can, the moon above, and you as if he\'s contemplating his next move. He sighs. " ,

 " Kyo  Chapter_E-0025000 You weren\'t supposed to come here.  " ,

 " Player  Chapter_E-0025300 But you left a paint trail. " ,

 " Kyo  Chapter_E-0025600 That wasn\'t really a trail. I didn\'t think you\'d... Damn it, I was supposed to leave before you saw me. " ,

 " Player  Chapter_E-0025900 Wait, you\'re leaving? What\'s going on? " ,

 " Kyo  Chapter_E-0026200 You know what, fuck it. I\'m not going yet. \'Cause I don\'t even know where to begin explaining everything. " ,

 " Narration  Chapter_E-0026500 He\'s right. You have too many questions.  " ,

 " Narration  Chapter_E-0026700 You remember the confused faces of the club members from last week. " ,

 " Player  Chapter_E-0027000 Kyo, you\'re... real, right? " ,

 " Narration  Chapter_E-0027300 Kyo busts out a quick laugh. " ,

 " Kyo  Chapter_E-0027600 Nah you\'re just imagining me in your head. Wake up. It\'s been years since the accident— " ,

 " Player  Chapter_E-0027900 Kyo, I\'m serious. None of the club members see or hear you except me. They don\'t even know who you are. Why? Are you a ghost? Who and what even are you? " ,

 " Narration  Chapter_E-0028200 Kyo lets out a deep sigh. " ,

 " Kyo  Chapter_E-0028500 I don\'t actually go here. I used to, but it was a long time ago. " ,

 " Player  Chapter_E-0028800 Why are you here then? " ,

 " Kyo CG  Chapter_E-0029000 Kyo CG " ,

 " Kyo  Chapter_E-0029300 To help you make friends. " ,

 " Narration  Chapter_E-0029600 Your eyes widen. " ,

 " Player  Chapter_E-0029900 How\'d you know I wanted to...? " ,

 " Kyo  Chapter_E-0030200 You\'re the reason I opened up the radio club in the first place.  " ,

 " Player  Chapter_E-0030500 Huh?! Wait, then you were the only club member on purpose? " ,

 " Kyo  Chapter_E-0030800 Haha, yup. " ,

 " Player  Chapter_E-0031100 I\'m still not over you forcing me to do free labor though. " ,

 " Kyo  Chapter_E-0031400 It\'s better if you initiate these friendships on your own. I\'m just here to make sure you stay on track. You\'re the lonely one here, not me. " ,

 " Narration  Chapter_E-0031700 You roll your eyes.  " ,

 " Kyo  Chapter_E-0032000 You\'re not even gonna thank me?!  " ,

 " Player  Chapter_E-0032300 I still have more questions for you, funny man. " ,

 " Kyo  Chapter_E-0032600 Okay, shoot. " ,

 " Player  Chapter_E-0032900 If you\'ve been a student here, why does no one remember you at all? " ,

 " Kyo  Chapter_E-0033200 That\'s because I don\'t exist in your reality anymore. I live in another universe. " ,

 " Player  Chapter_E-0033500 You\'re an alien?! " ,

 " Kyo  Chapter_E-0033800 Okay no, but I know someone else who is. Anyways, I was isekai\'d a while ago. But just recently, I\'ve been blessed by the moon, so now I\'m able to travel between your reality and mine. " ,

 " Kyo  Chapter_E-0034000 The problem is, I\'m still learning how to use this power. So it\'s not perfect. It\'s kinda weird actually. Right now, I\'m like in a world between yours and mine. I can\'t really see you, only the outline of you.  " ,

 " Narration  Chapter_E-0034300 Kyo pauses for a bit as if he\'s thinking. " ,

 " Kyo  Chapter_E-0034600 Give me a high-five. " ,

 " Player  Chapter_E-0034900 For what? " ,

 " Kyo  Chapter_E-0035200 For being able to keep up with me. You know, since I speak so fast. " ,

 " Player  Chapter_E-0035500 O...kay. " ,

 " Narration  Chapter_E-0035800 When you go high-five Kyo, your hand goes through his like air. You don\'t feel him at all. " ,

 " Narration  Chapter_E-0036000 You stand there in silence, flabbergasted. A realization hits you. " ,

 " Player  Chapter_E-0036300 So you\'re the one haunting this school! " ,

 " Kyo  Chapter_E-0036600 Wait, what? " ,

 " Player  Chapter_E-0036900 Dude, did you not know? The paranormal activity club has been obsessed with you for a long time now. They\'ve been trying to contact you and everything.  " ,

 " Kyo  Chapter_E-0037200 They can\'t see me, right? " ,

 " Player  Chapter_E-0037500 That\'s not what I mean. But there\'s been ghost-like activity happening around school. I think you have something to do with it. " ,

 " Kyo  Chapter_E-0037800 Shit, my bad. Didn\'t mean to. " ,

 " Player  Chapter_E-0038100 If only they knew I was talking to a ghost the entire time. Wait, I don\'t think anybody heard you speak either. Not even the club members. Except me. What the hell? " ,

 " Kyo  Chapter_E-0038400 You\'re the one I was assigned to help. " ,

 " Player  Chapter_E-0038700 Assigned? " ,

 " Kyo  Chapter_E-0039000 By the moon. Who also gave me my powers. I think that’s why you’re also the only person who can see and hear me. Consider yourself lucky.  " ,

 " Player  Chapter_E-0039300 I was chosen? Wow... " ,

 " Kyo  Chapter_E-0039600 But I\'m running out of time. Now, I won\'t exist in this reality again. For real this time. " ,

 " Narration  Chapter_E-0039900 The school bell rings. School Bell SFX " ,

 " Kyo  Chapter_E-0040200 Go. Your friends are waiting for you. " ,

 " Narration  Chapter_E-0040500 Kyo sets up his exit. " ,

 " Player  Chapter_E-0040800 Wait! Before you go... " ,

 " Player  Chapter_E-0041000 Thank you. For everything. " ,

 " Narration  Chapter_E-0041300 Kyo looks back one last time and smiles. " ,

 " Fade out Kyo, use the Kyo_BG in his special scene folder  Chapter_E-0041500 Fade out Kyo, use the Kyo_BG in his special scene folder " ,

 " Game end  Chapter_E-0041700 Game end " ,

 " Go to credits  Chapter_E-0041900 Go to credits " ,

		// start-of-CHAPTER-E-mark
		// end-of-CHAPTER-E-mark
        'end'
	],
});
