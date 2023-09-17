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
  Start: [
	" _Name _Tex " ,

	"  Prologue: Waxing Iridescent " ,
   
	" School hallway day  School hallway day " ,
   
	" Intro Music  Intro Music " ,
   
	" Narration  It\'s lunch break at school, but the atmosphere is livelier than usual. Oh right, it\'s Club Day today. You still can\'t decide which club you want to join this year.  " ,
   
	" Narration  You stop walking the hallways to look at the board of various club posters. Oh man, you\'ve never joined one before, so the amount of options overwhelm you a little. You think of just joining multiple clubs at a time, but you quickly brush off that thought. Clubs are supposed to be a good break from the humdrum of academics. Don\'t get ahead of yourself. " ,
   
	" Narration  There\'s an art club poster. That\'s a hard no. The most artistic you\'ve ever been was when you colored the sky a solid green and the ground magenta. Only because the other crayons were missing. And that was in a coloring book. Not fun at all. " ,
   
	" Narration  There are also a few posters advertising different sports clubs. No thanks. P.E. class already tires you out daily. There\'s no way you have the endurance to do that kind of stuff in your precious free time.  " ,
   
	" Narration  Oh god, there\'s also the paranormal activity club. No way. Nope. You don\'t take the supernatural as seriously as its club members do. You know this because earlier at brunch today, the club advertised by telling ghost stories that were, in their own words, �real, not clickbait.� " ,
   
	" Narration  One of them even said, �In fact, there\'s a ghost in this school right now, giving bad luck to people who are about to do presentations!� Nonsense. You\'re a junior and you are damn sure that there were no ghosts the entire time you attended school. " ,
   
	" Narration  It would be fine if the club was interested in ghosts just for fun, but their fervent attitude says otherwise. You shudder at the thought of even talking to them.  " ,
   
	" Narration  Ooh, a debate club poster. You don\'t consider yourself a chatterbox, but it\'s always fascinating to listen to other people\'s perspectives and find ways to decimate their arguments. It\'s basically a fun way to talk shit to others. Well, for the most part, save for some annoyingly serious people... " ,
   
	" Narration  Damn, besides the debate club, it looks like you don\'t have many good options here. " ,
   
	" Narration  Wait, what\'s with that poster over there?  " ,
   
	" Radio club poster (wall poster). Allow toggle for zoom in to the RadioClub.png in Art folder.  Radio club poster (wall poster). Allow toggle for zoom in to the RadioClub.png in Art folder. " ,
   
	" Narration  It advertises... a radio club? Interesting. Teachers love to praise your diction and confidence in your class presentations. This could be worth a try.  " ,
   
	" Narration  You enter a nearby room with the radio club sign on its door.  " ,
   
	" Music_Room_Basic  Music_Room_Basic " ,
   
	" Kyo_BP_Default  Kyo_BP_Default " ,
   
	" Centered  Centered " ,
   
	" Narration  There\'s only one student here. Yet, you can tell that you\'re in the right place. Her appearance is just as colorful as the poster, and the graffiti beside her only emphasizes that. " ,
   
	" Narration  The microphone on the other side of the room looks too high for her to reach. That�s a bit weird. " ,
   
	" Narration  It looks like the girl�s still on her phone. You decide to get her attention. " ,
   
	" Player  Hi, I wanna join the radio club. " ,
   
	" Narration  She puts her phone away and turns around. " ,
   
	" ??? Kyo_FP_Shocked  AAAAAAAAAAAAAAAAAAAAH!!! " ,
   
	" Narration  The student\'s voice then drops a few octaves lower than you expect her to have. " ,
   
	" ??? Kyo_FP_Bruh  You fucking scared the shit out of me! My god.  " ,
   
	" Narration  Well, you now know two things. One, this girl is actually a guy. Two, this dude�s language is as colorful as his hair. What a bombastic impression you�ve left on each other. It only goes uphill from here. " ,
   
	" Player  Sorry, I just walked in. Is this the wrong room? I think I\'m in the wrong ro� " ,
   
	" Kyo FP_Default  No no, wait. I made sure that the door had a sign on it. You\'re here for the radio club, right? " ,
   
	" Player  Yeah, that\'s kinda what I said before you started freaking out.  " ,
   
	" Kyo  Okay, okay, my bad. I literally didn\'t hear you walk in. Anyways, hi, I\'m Kyo Kaneko. What\'s your name? " ,
   
	" Player  I\'m Player.  " ,
   
	" Player. Alright, here's how the club works.  Player. Alright, here\'s how the club works. " ,
   
	" Player  Wait, you\'re not gonna be writing anything on the board or something like that? " ,
   
	" Kyo  Nah. It\'s not that complicated.  " ,
   
	" Narration  Is that his way of saying that he\'s not prepared? " ,
   
	" Kyo  For now, this club mainly does school announcements, but I plan to make it so that we also do podcasting too.  " ,
   
	" Narration  You reach into your backpack. " ,
   
	" Narration  Kyo looks at you in confusion. " ,
   
	" Player  Oh don\'t mind me, I\'m just gonna eat my lunch. " ,
   
	" Kyo  Ooh, what are you having? " ,
   
	" Player  Butter croissants. " ,
   
	" Narration  Kyo stares at your bread a little longer than you want him to. " ,
   
	" Kyo  Can I have some? " ,
   
	" Proceed to two choices <Sure, you can have a bit.> or <No, this is mine. Get your own.>  Proceed to two choices: <Sure, you can have a bit.> or <No, this is mine. Get your own.> " ,
   
	" Choice 1 Sure, you can have a bit.  Choice 1: Sure, you can have a bit. " ,
   
	" Kyo FP_Bruh  Actually, never mind. There are probably some RAAAAAAAANCID germs in there. I don\'t want any of that. I refuuuuuuuuuuse. " ,
   
	" Narration  The nerve of this guy...!  " ,
   
	" Scene reconverges here  Scene reconverges here " ,
   
	" Choice 2 No, this is mine. Get your own.  Choice 2: No, this is mine. Get your own. " ,
   
	" Kyo_FP_Bruh  Kyo_FP_Bruh " ,
   
	" Narration  Kyo whines and pouts. " ,
   
	" Narration  What is up with this guy? Yet, you find his pouting face a little cute. Like a puntable cat.  " ,
   
	" Scene Reconverges Here  Scene Reconverges Here " ,
   
	" Kyo FP_Default  Anyways, since this club requires confident people, I\'d say you\'re a pretty good candidate so far. Most people don�t have the balls to approach me. " ,
   
	" Narration  You look up and down at Kyo incredulously. " ,
   
	" Player  Really? You�re not even tall enough to reach the mic over there. " ,
   
	" Kyo  Hey hey, shut up. Shut the fuck up. " ,
   
	" Narration  Kyo looks up at the classroom clock. " ,
   
	" Kyo  Lunch\'s almost over. So, whaddya say, you wanna join the club or not? " ,
   
	" Proceed to two choices <Yes> or <No>  Proceed to two choices: <Yes> or <No> " ,
   
	" Choice 1 Yes.  Choice 1: Yes. " ,
   
	" Kyo_FP_Cheerful  Kyo_FP_Cheerful " ,
   
	" Narration  Kyo claps his hands. " ,
   
	" Kyo  Yeah, let\'s go! Finally, there\'s a second member. " ,
   
	" Player  Wait, nobody else is in this club yet?  " ,
   
	" Kyo  Oh shit, I forgot to tell you. Yeah, you\'re the only one who joined so far. But here\'s where you come in. " ,
   
	" Kyo  To officially register the club, I\'m gonna need you to recruit 3 more people by the end of the month. You can do it, you\'re charismatic enough. " ,
   
	" Player  Hold on, I didn\'t agree to do free labor. Why don\'t you do it yourself� " ,
   
	" Narration  The lunch bell rings. " ,
   
	" Kyo  Too late, gotta go. " ,
   
	" Player  Hey, wait! " ,
   
	" Narration  You catch a glimpse of Kyo grinning as he bolts past you and out the door. He sings as he escapes into the hallways, cracking his voice. " ,
   
	" Kyo  Running through the halls so fast, something something dash� " ,
   
	" Narration  And just like that, he makes a left and disappears. The nerve of this dude to leave you hanging like that. . .  " ,
   
	" Narration  You go in the opposite direction to your class. As you make your way there, you think about his request. It\'s a lot of work, but it\'s not like you have other plans or commitments this year. Eh, fuck it, you ball. " ,
   
	" Fade to black  Fade to black " ,
   
	" Proceed to Chapter 1  Proceed to Chapter 1 " ,
   
	" Choice 2 No.  Choice 2: No. " ,
   
	" Kyo FP_Sad  Oh, why not?  " ,
   
	" Player  Oh, don\'t take this the wrong way. It\'s just that I wanna consider my other options.  " ,
   
	" Kyo  Like what? " ,
   
	" Player  Hm? Isn\'t it normal to do that?  " ,
   
	" Kyo  What other clubs were you thinking of joining? Because this club can do better than all of them. " ,
   
	" Narration  Where did this sudden pushiness and big ego come from?  " ,
   
	" Player  I was thinking of joining the debate club� " ,
   
	" Kyo FP_Bruh  Bro, I am right here. I am THE debate master. I\'m not all business all the time you know. I can do other things outside of club meetings.  " ,
   
	" Player  Okay, but I have to ask. You\'re cool and all, but are you the only club member?  " ,
   
	" Kyo  Yes, but I\'m gonna get more soon� " ,
   
	" Player  Look, I\'ll go check out other clubs later this week. If I don\'t like any of them, I\'ll come back here. Okay? " ,
   
	" Narration  The lunch bell rings. " ,
   
	" Player  Don\'t wanna be late to class. See ya. " ,
   
	" Kyo_BP_Sad  Kyo_BP_Sad " ,
   
	" Narration  You feel a little guilty seeing his dejected expression as you leave the classroom. But it\'s too late now; you stick to your decision and go to your next class. " ,
   
	" Empty black screen.  Empty black screen. " ,
   
	" Narration  The next day, you try to find Kyo in the radio club room. But the room is empty. You try asking people about Kyo�s whereabouts, but people don�t even know who he is. What the hell. That�s weird. Eh, whatever. Life continues to be lonely as usual. " ,
   
	" Game end - joke ending. Restart from beginning of game  Game end - joke ending. Restart from beginning of game " ,
   
   
   
  ],
});
