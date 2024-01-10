'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:
monogatari.component ('main-screen').template (() => {
	return `

	
<div style="position:relative; overflow:hidden;  margin: auto; " class = "zoom_to_fit"> 
<div
	style="width: 1920px; height: 1080px; position: relative; background: #2E72C1; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)";   >
	<div style="width: 2158px; height: 1450px; left: -238px; top: -7px; position: absolute";>
		<div
			style="width: 2158px; height: 1114px; left: 0px; top: 0px; position: absolute; background: linear-gradient(180deg, #A5DFF3 9%, #268BFF 100%)">
		</div>
		<div
			style="width: 635px; height: 705px; left: 1284px; top: 40px; position: absolute; opacity: 0.50; border: 2px white solid">
		</div>
		<div
			style="width: 635px; height: 705px; left: 1260px; top: 745px; position: absolute; opacity: 0.50; border: 2px white solid">
		</div>
		<div
			style="width: 1935px; height: 1108px; left: 223px; top: 7px; position: absolute; background: linear-gradient(270deg, white 0%, rgba(212.50, 226.95, 255, 0.92) 47%, rgba(226.31, 236.07, 255, 0) 74%)">
		</div>
	</div>
	<img style="width: 1920px; height: 1080px; left: -1px; top: 0px; position: absolute; opacity: 0.50; mix-blend-mode: luminosity"
		src="./assets/scenes/Backgrounds/Final/School_Hallway/school_hallway_daylight.png" />
	<div
		style="width: 423.46px; height: 838.14px; left: 182.78px; top: 253px; position: absolute; transform: rotate(45.79deg); transform-origin: 0 0; background: linear-gradient(180deg, white 0%, #A5DFF4 44%); box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 5px white solid">
	</div>
	<div
		style="width: 494.10px; height: 810.77px; left: 180px; top: -433px; position: absolute; background: linear-gradient(180deg, #7FD6FA 72%, #F0CE61 83%, #FE82DB 93%); box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 10px white solid">
	</div>
	<img style="width: 1274.58px; height: 1969.33px; left: 714.60px; top: -126px; position: absolute; transform: rotate(22.81deg); transform-origin: 0 0"
		src=" ./assets/fromfigma/07de7b97bc9609b83f0e9ca285ee5dbe.png" />
	<div
		style="width: 1135px; height: 939px; left: 1595px; top: 1368px; position: absolute; transform: rotate(-180deg); transform-origin: 0 0; background: radial-gradient(100.00% 100.00% at 0% 0%, #7FD6FA 0%, rgba(255, 255, 255, 0) 100%)">
	</div>
	<div
		style="width: 423.46px; height: 436.59px; left: 281.95px; top: 811px; position: absolute; transform: rotate(45.79deg); transform-origin: 0 0; background: linear-gradient(4deg, #2E72C1 0%, #7FD6FA 100%); box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 5px white solid">
	</div>
	<div
		style="width: 90.11px; height: 93.46px; left: 376.99px; top: 712.61px; position: absolute; transform: rotate(45.79deg); transform-origin: 0 0; background: #C1E6FF; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 5px white solid">
	</div>
	<div
		style="width: 36.67px; height: 38.03px; left: 484.26px; top: 740.65px; position: absolute; transform: rotate(45.79deg); transform-origin: 0 0; background: #C1E6FF; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 5px white solid">
	</div>
	<img style="width: 798px; height: 598px; left: 60px; top: 170px; position: absolute; "
		src="./assets/fromfigma/259a2df3c47c53763cd1e0dbd5e5e923.png" />
	<div style="width: 1815px; height: 52px; left: 94px; top: 62px; position: absolute">
		<div
			style="width: 1748.69px; height: 42px; left: 0px; top: 10px; position: absolute; background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.88) 31%, white 100%); box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 43px">
		</div>
		<div
			style="width: 31.68px; height: 29px; left: 1707.51px; top: 16px; position: absolute; border: 3px #90CAFF solid">
		</div>
		<div
			style="width: 41.66px; height: 46px; left: 1712.23px; top: 0px; position: absolute; color: #2E72C1; font-size: 32px; font-family: Inika; font-weight: 400; word-wrap: break-word">
			...</div>
		<div
			style="height: 26px; top: 22px; position: absolute; color: #2E72C1; font-size: 19px; font-family: Nunito; font-weight: 500; word-wrap: break-word">

			<!-- kouzie's work -->
			<div class="slider-container_kouzie">
					<div class="slider_kouzie">
						<span>... Radio club...~~~ ｽﾞｲ₍₍ (ง ˘ω˘ )ว ⁾⁾ ⁽⁽ 〪ɾ( ˘ω˘ 〫ɩ ) ₎₎ｽﾞｲ ~~~ Happy birthday Kyo! Fan game made by the Kyomies tbc ヾ(´︶｀*)/</span>
			
						<!--duplicated messages to make animation smoother-->
						<span class="duplicate_kouzie">... Radio club...~~~ ｽﾞｲ₍₍ (ง ˘ω˘ )ว ⁾⁾ ⁽⁽ 〪ɾ( ˘ω˘ 〫ɩ ) ₎₎ｽﾞｲ ~~~ Happy birthday Kyo! Fan game made by the Kyomies tbc ヾ(´︶｀*)/</span> 
						<span class="duplicate_kouzie">... Radio club...~~~ ｽﾞｲ₍₍ (ง ˘ω˘ )ว ⁾⁾ ⁽⁽ 〪ɾ( ˘ω˘ 〫ɩ ) ₎₎ｽﾞｲ ~~~ Happy birthday Kyo! Fan game made by the Kyomies tbc ヾ(´︶｀*)/</span>
						<span class="duplicate_kouzie">... Radio club...~~~ ｽﾞｲ₍₍ (ง ˘ω˘ )ว ⁾⁾ ⁽⁽ 〪ɾ( ˘ω˘ 〫ɩ ) ₎₎ｽﾞｲ ~~~ Happy birthday Kyo! Fan game made by the Kyomies tbc ヾ(´︶｀*)/</span>
						<span class="duplicate_kouzie">... Radio club...~~~ ｽﾞｲ₍₍ (ง ˘ω˘ )ว ⁾⁾ ⁽⁽ 〪ɾ( ˘ω˘ 〫ɩ ) ₎₎ｽﾞｲ ~~~ Happy birthday Kyo! Fan game made by the Kyomies tbc ヾ(´︶｀*)/</span>
					</div>
				</div>
			</div>

			</div>
		<div
			style="width: 1472px; height: 973px; left: 1929px; top: 1381px; position: absolute; transform: rotate(-180deg); transform-origin: 0 0; mix-blend-mode: hard-light; background: radial-gradient(97.29% 97.28% at 144.48% -13.60%, #7FD6FA 0%, rgba(255, 255, 255, 0) 100%)">
		</div>
		<img style="width: 467px; height: 934px; left: 1103.52px; top: 478.76px; position: absolute; transform: rotate(-7deg); transform-origin: 0 0"
			src="./assets/fromfigma/af290a50ae519f88a2c03dd3f0d77936.png " />
		<img style="width: 625px; height: 1254px; left: 570.84px; top: 443.15px; position: absolute; transform: rotate(5deg); transform-origin: 0 0"
			src=" ./assets/fromfigma/4d01f7ebb3ae9c556459aec38f4f96d0.png " />
		<div
			style="width: 1135px; height: 939px; left: 1993px; top: 1601px; position: absolute; transform: rotate(-180deg); transform-origin: 0 0; mix-blend-mode: hard-light; background: radial-gradient(97.29% 97.28% at 144.48% -13.60%, #7FD6FA 0%, rgba(255, 255, 255, 0) 100%)">
		</div>
		<div
			style="width: 276px; height: 58px; left: 1551px; top: 442px; position: absolute; color: white; font-size: 40px; font-family: Nunito; font-weight: 900; letter-spacing: 3.40px; word-wrap: break-word">
			Continue</div>
		<div
			style="width: 276px; height: 58px; left: 1551px; top: 510px; position: absolute; color: white; font-size: 40px; font-family: Nunito; font-weight: 900; letter-spacing: 3.40px; word-wrap: break-word">
			Gallery<br /></div>
		<div  data-action="open-screen" data-open="settings"
			style="width: 276px; height: 58px; left: 1551px; top: 576px; position: absolute; color: white; font-size: 40px; font-family: Nunito; font-weight: 900; letter-spacing: 3.40px; word-wrap: break-word">
			Settings<br /></div>
		<div data-action="open-screen" data-open="help" 
			style="width: 276px; height: 58px; left: 1551px; top: 642px; position: absolute; color: white; font-size: 40px; font-family: Nunito; font-weight: 900; letter-spacing: 3.40px; word-wrap: break-word">
			Help<br /><br /><br /></div>
		<div
			style="width: 678px; height: 1356px; left: 761px; top: 561px; position: absolute; flex-direction: column; justify-content: center; align-items: center; display: inline-flex">
			<img style="width: 678px; height: 1356px" src=" ./assets/fromfigma/893af70dcdcc7dccae6bd9b63726d428.png " />
		</div>
		<div data-action="open-screen" data-open="credits"
			style="width: 270.03px; height: 280.06px; bottom: -19.5%; right: 1%; position: absolute; transform: rotate(-45.79deg); transform-origin: 0 0; background: #C1E6FF; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 5px white solid; color: white; font-size: 48px; font-family: Nunito; font-weight: 900; letter-spacing: 4.08px; word-wrap: break-word;">
			Credits
		</div>
		<div data-action="start" 
			style="width: 183px; height: 42px; left: 1482px; top: 378px; position: absolute">
			<div
				style="width: 29.24px; height: 30.33px; left: 40.07px; top: 0px; position: absolute; transform: rotate(45.64deg); transform-origin: 0 0;  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 3px white solid">
			</div>
			<div
				style="width: 11.89px; height: 12.33px; left: 19.86px; top: 12.65px; position: absolute; transform: rotate(45.64deg); transform-origin: 0 0; background: #498FCD; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 3px white solid">
			</div>
			<div style="width: 118.05px; height: 39.58px; left: 64.95px; top: 0px; position: absolute;
			color: white; font-size: 36px; font-family: Nunito; font-weight: 900; letter-spacing: 3.06px; word-wrap: break-word
			">
				Start
			</div>
		</div>
		
		<div  data-action="open-screen" data-open="load" 
			style="width: 139px; height: 77px; left: 1683px; top: 378px; position: absolute; color: white; font-size: 36px; font-family: Nunito; font-weight: 900; letter-spacing: 3.06px; word-wrap: break-word"
			>/ Load</div>
		
</div>
</div>


		<main-menu></main-menu>
		`;
	});
	



monogatari.component('main-menu').template(() => {
	return `

	
`});



monogatari.component('settings-screen').template(() => {
	return `

    <button class="top left" data-action="back">
        <svg class="svg-inline--fa fa-arrow-left fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas"
            data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
            <path fill="currentColor"
                d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z">
            </path>
        </svg> <!-- <span class="fas fa-arrow-left"></span> Font Awesome fontawesome.com --></button>


  <div style="width: 1585px; height: 925.13px; position: relative; margin: auto;"  class = "zoom_to_fit">
    <div style="width: 1557.13px; height: 856.25px; left: 27.87px; top: 0px; position: absolute; background: rgba(46, 114, 193, 0.90)"></div>
    <img style="width: 1553.76px; height: 855.41px; left: 31.24px; top: 0.84px; position: absolute; opacity: 0.20; mix-blend-mode: soft-light; border-radius: 11px" src="https://via.placeholder.com/1554x855" />
    <div style="width: 1174.61px; height: 180.71px; left: 0px; top: 68.40px; position: absolute; opacity: 0.20; mix-blend-mode: soft-light; border-radius: 11px"></div>



	<div style="width: 29.30px; height: 33.27px; left: 1527px; top: 798.13px; position: absolute; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
      <div style="width: 26.32px; height: 22.35px; left: 25.83px; top: 3.48px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: #E5E5E5; border: 1px #A2A2A2 solid"></div>
      <div style="width: 33.27px; height: 29.30px; left: 29.30px; top: 0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: #2E72C1; border: 1px #E5E5E5 solid"></div>
    </div>

	<div style="width: 688px; height: 232px; left: 86px; top: 88.13px; position: absolute; opacity: 0.70; background: linear-gradient(348deg, #90CAFF 0%, #7FD6FA 100%); box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.50); border-radius: 60px; border: 5px white solid"></div>
    <div style="width: 727px; height: 561px; left: 806px; top: 88.13px; position: absolute; opacity: 0.70; background: linear-gradient(348deg, #90CAFF 0%, #7FD6FA 100%); box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.50); border-radius: 60px; border: 5px white solid"></div>
    <div style="width: 578px; height: 85px; left: 123px; top: 56.13px; position: absolute; color: white; font-size: 40px; font-family: Nunito; font-weight: 900; letter-spacing: 3.40px; word-wrap: break-word">Language</div>
    <div style="width: 578px; height: 85px; left: 860px; top: 54.13px; position: absolute; color: white; font-size: 40px; font-family: Nunito; font-weight: 900; letter-spacing: 3.40px; word-wrap: break-word">Volume</div>

	<div style="width: 657px; height: 61.05px; left: 843px; top: 162.13px; position: absolute">

	  	<input type="range" min="0.0" max="1.0" step="0.1" data-action="set-volume" data-target="music"
			id = "input_range_volume_music"
			class = "input_range"
			style="
				padding: 0px;
				width: 630px; 
				height: 52px; 
				left: -15px; 
				top: -25px; 
				position: absolute;
		">

		<div class="input_range_cover" ></div>
		<div class="bar_fill" id = "bar_fill_volume_music"></div>


	  <div style="width: 60.05px; height: 61.05px; left: 0px; top: 0px; position: absolute; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
        <div style="width: 53.16px; height: 54.05px; left: 3.44px; top: 3.50px; position: absolute; background: #2E72C1"></div>
        <div style="width: 63.98px; height: 65.05px; left: -1.97px; top: -2px; position: absolute">
          <div style="width: 16.71px; height: 31.64px; left: 16.65px; top: 16.71px; position: absolute; background: white"></div>
          <div style="width: 10.48px; height: 19.77px; left: 36.85px; top: 22.64px; position: absolute">
            <div style="width: 6.83px; height: 12.35px; left: -0px; top: 3.71px; position: absolute; background: white"></div>
            <div style="width: 10.48px; height: 19.77px; left: 0px; top: 0px; position: absolute; background: white"></div>
          </div>
          <div style="width: 63.98px; height: 65.05px; left: 0px; top: 0px; position: absolute; background: #2E72C1"></div>
          <div style="width: 60.05px; height: 61.05px; left: 1.97px; top: 2px; position: absolute; background: white"></div>
        </div>
      </div>
    </div>

	
    <div style="width: 657px; height: 61.05px; left: 843px; top: 292.13px; position: absolute">

		<input type="range" min="0.0" max="1.0" step="0.1" data-action="set-volume" data-target="voice"
			id = "input_range_volume_voice"
			class = "input_range"
			style="
				padding: 0px;
				width: 630px; 
				height: 52px; 
				left: -15px; 
				top: -25px; 
				position: absolute;
		">

		<div class="input_range_cover" ></div>
		<div class="bar_fill" id = "bar_fill_volume_voice"></div>
	 
	  <div style="width: 60.05px; height: 61.05px; left: 0px; top: 0px; position: absolute; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
        <div style="width: 53.16px; height: 54.05px; left: 3.44px; top: 3.50px; position: absolute; background: #2E72C1"></div>
        <div style="width: 63.98px; height: 65.05px; left: -1.97px; top: -2px; position: absolute">
          <div style="width: 16.71px; height: 31.64px; left: 16.65px; top: 16.71px; position: absolute; background: white"></div>
          <div style="width: 10.48px; height: 19.77px; left: 36.85px; top: 22.64px; position: absolute">
            <div style="width: 6.83px; height: 12.35px; left: -0px; top: 3.71px; position: absolute; background: white"></div>
            <div style="width: 10.48px; height: 19.77px; left: 0px; top: 0px; position: absolute; background: white"></div>
          </div>
          <div style="width: 63.98px; height: 65.05px; left: 0px; top: 0px; position: absolute; background: #2E72C1"></div>
          <div style="width: 60.05px; height: 61.05px; left: 1.97px; top: 2px; position: absolute; background: white"></div>
        </div>
      </div>
    </div>


    <div style="width: 657px; height: 61.05px; left: 843px; top: 421.13px; position: absolute">

		<input type="range" min="0.0" max="1.0" step="0.1" data-action="set-volume" data-target="sound"
			id = "input_range_volume_sound"
			class = "input_range"
			style="
				padding: 0px;
				width: 630px; 
				height: 52px; 
				left: -15px; 
				top: -25px; 
				position: absolute;
		">

		<div class="input_range_cover" ></div>
		<div class="bar_fill" id = "bar_fill_volume_sound"></div>



	  <div style="width: 60.05px; height: 61.05px; left: 0px; top: 0px; position: absolute; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
        <div style="width: 53.16px; height: 54.05px; left: 3.44px; top: 3.50px; position: absolute; background: #2E72C1"></div>
        <div style="width: 63.98px; height: 65.05px; left: -1.97px; top: -2px; position: absolute">
          <div style="width: 16.71px; height: 31.64px; left: 16.65px; top: 16.71px; position: absolute; background: white"></div>
          <div style="width: 10.48px; height: 19.77px; left: 36.85px; top: 22.64px; position: absolute">
            <div style="width: 6.83px; height: 12.35px; left: -0px; top: 3.71px; position: absolute; background: white"></div>
            <div style="width: 10.48px; height: 19.77px; left: 0px; top: 0px; position: absolute; background: white"></div>
          </div>
          <div style="width: 63.98px; height: 65.05px; left: 0px; top: 0px; position: absolute; background: #2E72C1"></div>
          <div style="width: 60.05px; height: 61.05px; left: 1.97px; top: 2px; position: absolute; background: white"></div>
        </div>
      </div>
    </div>
    
	
	<div style="width: 657px; height: 61.05px; left: 843px; top: 553.13px; position: absolute">

		<input type="range" min="0.0" max="1.0" step="0.1" data-action="set-volume" data-target="video"
			id = "input_range_volume_video"
			class = "input_range"
			style="
				padding: 0px;
				width: 630px; 
				height: 52px; 
				left: -15px; 
				top: -25px; 
				position: absolute;
		">

		<div class="input_range_cover" ></div>
		<div class="bar_fill" id = "bar_fill_volume_video"></div>


	  <div style="width: 60.05px; height: 61.05px; left: 0px; top: 0px; position: absolute; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
        <div style="width: 53.16px; height: 54.05px; left: 3.44px; top: 3.50px; position: absolute; background: #2E72C1"></div>
        <div style="width: 60.05px; height: 61.05px; left: 0px; top: -0px; position: absolute">
          <div style="width: 16.71px; height: 31.64px; left: 14.68px; top: 14.71px; position: absolute; background: white"></div>
          <div style="width: 10.48px; height: 19.77px; left: 34.88px; top: 20.64px; position: absolute">
            <div style="width: 6.83px; height: 12.35px; left: -0px; top: 3.71px; position: absolute; background: white"></div>
            <div style="width: 10.48px; height: 19.77px; left: 0px; top: 0px; position: absolute; background: white"></div>
          </div>
          <div style="width: 58.98px; height: 4.96px; left: 11.36px; top: 6.96px; position: absolute; transform: rotate(46.22deg); transform-origin: 0 0; background: white; border: 2px #2E72C1 solid"></div>
          <div style="width: 60.05px; height: 61.05px; left: 0px; top: 0px; position: absolute; background: white; border: 2px #2E72C1 solid"></div>
        </div>
      </div>
    </div>


    <div style="width: 686px; height: 371px; left: 82px; top: 324.13px; position: absolute">
      <div style="width: 686px; height: 301px; left: 0px; top: 31px; position: absolute; opacity: 0.70; background: linear-gradient(348deg, #90CAFF 0%, #7FD6FA 100%); box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.50); border-radius: 60px; border: 5px white solid"></div>
      <div style="width: 218.92px; height: 185px; left: 44.91px; top: 56px; position: absolute; color: white; font-size: 28px; font-family: Nunito; font-weight: 600; line-height: 35.11px; word-wrap: break-word">Text Speed:</div>
      <div style="width: 479.35px; height: 185px; left: 44.91px; top: 186px; position: absolute; color: white; font-size: 28px; font-family: Nunito; font-weight: 600; line-height: 35.11px; word-wrap: break-word">Auto-Forward Speed:</div>
      <div style="width: 545.40px; height: 85px; left: 46.14px; top: 0px; position: absolute; color: white; font-size: 40px; font-family: Nunito; font-weight: 900; letter-spacing: 3.40px; word-wrap: break-word">Text settings</div>
 
	  <div style="width: 612.40px; height: 49px; left: 34.91px; top: 111px; position: absolute">
		<input type="range" min="1" max="50" step="1" data-action="set-text-speed"
			id = "input_range_speed_text"
			class = "input_range"
			style="
				padding: 0px;
				width: 580px; 
				height: 52px; 
				left: -15px; 
				top: -25px; 
				position: absolute;
		">

		<div class="input_range_cover_speed" ></div>
		<div class="bar_fill_speed" id = "bar_fill_speed_text"></div>

      </div>
    
	  <div style="width: 612.40px; height: 49px; left: 34.91px; top: 234px; position: absolute">
		<input type="range" min="0" max="60" step="1" data-action="set-auto-play-speed" data-content="auto-play-speed-controller"
			id = "input_range_speed_autoPlay"
			class = "input_range"
			style="
				padding: 0px;
				width: 580px; 
				height: 52px; 
				left: -15px; 
				top: -25px; 
				position: absolute;
		">

		<div class="input_range_cover_speed" ></div>
		<div class="bar_fill_speed" id = "bar_fill_speed_autoPlay"></div>

      </div>

    </div>
    
	<div style="width: 1433px; height: 135px; left: 65px; top: 669.13px; position: absolute">
      <div style="width: 690px; height: 112px; left: 0px; top: 23px; position: absolute; opacity: 0.90; mix-blend-mode: soft-light; background: linear-gradient(4deg, #2E72C1 0%, #7FD6FA 100%); box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.50); border-radius: 60px; border: 5px white solid"></div>
      <div style="width: 690px; height: 112px; left: 743px; top: 23px; position: absolute; opacity: 0.90; mix-blend-mode: soft-light; background: linear-gradient(4deg, #2E72C1 0%, #7FD6FA 100%); box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.50); border-radius: 60px; border: 5px white solid"></div>
      <div style="width: 578px; height: 85px; left: 45px; top: 0px; position: absolute; color: white; font-size: 40px; font-family: Nunito; font-weight: 900; letter-spacing: 3.40px; word-wrap: break-word">Orientation</div>
    
	  <div style="width: 33px; height: 33px; left: 1342px; top: 72px; position: absolute">
        <div style="width: 33px; height: 33px; left: 0px; top: 0px; position: absolute; background: #2E72C1; border-radius: 9999px; border: 3px white solid"></div>
        <div style="width: 23px; height: 23px; left: 5px; top: 5px; position: absolute; background: white; border-radius: 9999px"></div>
      </div>
    
	  <div style="width: 33px; height: 33px; left: 1039px; top: 72px; position: absolute">
        <div style="width: 33px; height: 33px; left: 0px; top: 0px; position: absolute; background: #2E72C1; border-radius: 9999px; border: 3px white solid"></div>
      </div>
    
	  <div style="width: 609.08px; height: 85px; left: 795px; top: 0px; position: absolute; color: white; font-size: 40px; font-family: Nunito; font-weight: 900; letter-spacing: 3.40px; word-wrap: break-word">Resolution</div>
      <div style="width: 618px; height: 35px; left: 35px; top: 70px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 43px; display: inline-flex">
        <div style="height: 35px; justify-content: flex-start; align-items: flex-end; display: flex">
          <div style="flex: 1 1 0; height: 35px; color: white; font-size: 28px; font-family: Nunito; font-weight: 600; line-height: 35.11px; word-wrap: break-word">Mobile/Portrait: </div>
          <div style="width: 33px; height: 33px; position: relative">
            <div style="width: 33px; height: 33px; left: 0px; top: 0px; position: absolute; background: #2E72C1; border-radius: 9999px; border: 3px white solid"></div>
            <div style="width: 23px; height: 23px; left: 5px; top: 5px; position: absolute; background: white; border-radius: 9999px"></div>
          </div>
        </div>
        <div style="height: 35px; justify-content: flex-start; align-items: flex-end; display: flex">
          <div style="flex: 1 1 0; height: 35px; color: white; font-size: 28px; font-family: Nunito; font-weight: 600; line-height: 35.11px; word-wrap: break-word">Desktop/landscape:</div>
          <div style="width: 33px; height: 33px; position: relative">
            <div style="width: 33px; height: 33px; left: 0px; top: 0px; position: absolute; background: #2E72C1; border-radius: 9999px; border: 3px white solid"></div>
          </div>
        </div>
      </div>
    </div>

    <div style="width: 416px; height: 85px; left: 158px; top: 124.13px; position: absolute; color: #2E72C1; font-size: 36px; font-family: Nunito; font-weight: 900; letter-spacing: 0.18px; word-wrap: break-word">English</div>
    <div style="width: 416px; height: 85px; left: 158px; top: 185.13px; position: absolute; color: #2E72C1; font-size: 36px; font-family: Nunito; font-weight: 900; letter-spacing: 0.18px; word-wrap: break-word">中文</div>
    <div style="width: 416px; height: 85px; left: 158px; top: 247.13px; position: absolute; color: #2E72C1; font-size: 36px; font-family: Nunito; font-weight: 900; letter-spacing: 0.18px; word-wrap: break-word">日本語</div>
    <div style="width: 416px; height: 85px; left: 423px; top: 123.13px; position: absolute; color: #2E72C1; font-size: 36px; font-family: Nunito; font-weight: 900; letter-spacing: 0.18px; word-wrap: break-word">...</div>
    <div style="width: 232px; height: 34px; left: 846px; top: 114.13px; position: absolute; color: white; font-size: 28px; font-family: Nunito; font-weight: 600; line-height: 35.11px; word-wrap: break-word">Music:</div>
    <div style="width: 232px; height: 34px; left: 843px; top: 241.13px; position: absolute; color: white; font-size: 28px; font-family: Nunito; font-weight: 600; line-height: 35.11px; word-wrap: break-word">Voice:</div>
    <div style="width: 232px; height: 34px; left: 846px; top: 369.13px; position: absolute; color: white; font-size: 28px; font-family: Nunito; font-weight: 600; line-height: 35.11px; word-wrap: break-word">Sound:</div>
    <div style="width: 232px; height: 34px; left: 846px; top: 505.13px; position: absolute; color: white; font-size: 28px; font-family: Nunito; font-weight: 600; line-height: 35.11px; word-wrap: break-word">Video:</div>
    <div style="width: 244.48px; height: 185px; left: 890px; top: 739.13px; position: absolute; color: white; font-size: 28px; font-family: Nunito; font-weight: 600; line-height: 35.11px; word-wrap: break-word">Window:</div>
    <div style="width: 244.48px; height: 185px; left: 1208px; top: 740.13px; position: absolute; color: white; font-size: 28px; font-family: Nunito; font-weight: 600; line-height: 35.11px; word-wrap: break-word">Fullscreen:</div>
    
	<div style="width: 49.52px; height: 42px; left: 97px; top: 125.13px; position: absolute">
      <div style="width: 29.24px; height: 30.33px; left: 29.07px; top: 0px; position: absolute; transform: rotate(45.64deg); transform-origin: 0 0; background: #2E72C1; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 3px white solid"></div>
      <div style="width: 11.89px; height: 12.33px; left: 8.86px; top: 12.65px; position: absolute; transform: rotate(45.64deg); transform-origin: 0 0; background: #498FCD; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 3px white solid"></div>
    </div>

  </div>

	
`});


monogatari.component('text-box').template(() => {
	return `

  <div style="width: 100%; height: 100%; position: relative; left: 10%;" data-content="name">
	<div style="width: 384px; height: 78.7px; left: 0px; top: 0px; position: absolute">
	  <div class="big-bullet-point"></div>
	  <div class="small-bullet-point"></div>
	  <div class="name-box-total" style="width: 343px; height: 75px; top: 3.7px; position: absolute">
		<div class="name-box-shadow" ></div>
		<div class="name-box" >
			<div style="width: 100%; height: 100%; position: absolute; color: #2e72c1; font-family: Nunito; font-weight: 800; word-wrap: break-word; text-align: center;">
		
			<span data-ui="who" data-content="character-name"></span>
			
			</div>
		</div>
	  </div>
	</div>
  </div>
  


  <div data-content="side-image">


    <img data-ui="face" alt="" data-content="character-expression" src="" style="display: none" />
  </div>




<div class="dialog-box" style="width: 100%; height: 100%; position: relative; margin-bottom: 20px; padding-top: 12px;"    data-content="text">
  <div style="  position: relative; display: flex; justify-content: center; margin: 0px auto;  padding-top: calc(5px + 1vw); padding-left: 3%;  padding-right: 3%; padding-bottom: calc(5px + 1vw); 
   width: 80%; height: 20vh; opacity: 0.9; border-radius: 10px;
   background: linear-gradient(0deg, #10588a 0%, #2d6cb5 79%, #22a2ff 100%); 
   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25), 0 0 0 2px #2E72C1, 0 0 0 5px white, 0 0 0 2px #2E72C1">
	
    <img src="./assets/fromfigma/overlay2.png" style="opacity: 0.2; position: absolute; width: 100%">
	<p data-ui="say" data-content="dialog" style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); 
		font-family: Nunito; font-style: normal; font-weight: 400; line-height: 125.4%;  
		overflow: scroll;"></p>
		
	
	<div style="display: inline-block; bottom: 5%; position: fixed; text-align: center; width: 80%" >
		<span  data-action="auto-play"  class="quick-menu-button"
			style="width: 65px; height: 6px; 
			
			margin: 15px;
			top: 11%; position: relative; text-align: center; color: white; font-family: Nunito; font-weight: 700; word-wrap: break-word">Auto</span>
		<span  data-action="open-screen" data-open="save"  class="quick-menu-button"
			style="width: 65px; height: 6px; 
			
			margin: 15px;
			top: 11%; position: relative; text-align: center; color: white; font-family: Nunito; font-weight: 700; word-wrap: break-word">Save</span>
		<span  data-action="open-screen" data-open="load"  class="quick-menu-button"
			style="width: 59px; height: 9px; 
			
			margin: 15px;
			top: 11%; position: relative; text-align: center; color: white; font-family: Nunito; font-weight: 700; word-wrap: break-word">Load</span>
		<span  data-action="back"  class="quick-menu-button"
			style="width: 65px; height: 18px; 
			
			margin: 15px;
			top: 11%; position: relative; text-align: center; color: white; font-family: Nunito; font-weight: 700; word-wrap: break-word">Back</span>
		<span  data-action="end"  class="quick-menu-button"
			style="width: 55px; height: 29px; 
			
			margin: 15px;
			top: 11%; position: relative; text-align: center; color: white; font-family: Nunito; font-weight: 700; word-wrap: break-word">Quit</span>
		<span  data-action="dialog-log"  class="quick-menu-button"        
			style="width: 45px; height: 12px; 
			
			margin: 15px;
			top: 11%; position: relative; text-align: center; color: white; font-family: Nunito; font-weight: 700; word-wrap: break-word">Log</span>
		<span  data-action="distraction-free" class="quick-menu-button"
			style="width: 45px; height: 12px; 
			
			margin: 15px;
			top: 11%; position: relative; text-align: center; color: white; font-family: Nunito; font-weight: 700; word-wrap: break-word">Hide</span>
		<span  data-action="open-screen" data-open="settings" class="quick-menu-button"
			style="width: 87px; height: 11px; 
			
			margin: 15px;
			top: 11%; position: relative; text-align: center; color: white; font-family: Nunito; font-weight: 700; word-wrap: break-word">Settings</span>
			
	</div>
  </div>
</div>




`});

monogatari.component('credits-screen').template(() => {
	return `

	<div  class="zoom_to_fit" style="margin: auto; background: linear-gradient(0deg, rgba(205, 222, 255, 0.80) 0%, rgba(205, 222, 255, 0.80) 100%), linear-gradient(180deg, rgba(127, 214, 250, 0.90) 78.62%, rgba(254, 130, 219, 0.90) 101.65%); width: 1920px; height: 1080px; background-size: cover; display: flex; align-items: center; justify-content: center; padding: 5% 2%; overflow: hidden; position: relative;
	">
		<div style="width: 1557px; border-radius: 11px; border: 3px solid white; height: 856px; box-shadow: 0px 0px 0px 3px #2E72C1 inset; outline: 3px solid #2E72C1; background: linear-gradient(180deg, #2596FF 0%, rgba(144, 202, 255, 0.86) 100%); position: relative; padding: 4% 2% 5% 2%; display: flex; flex-direction: row; ">
			<div style="width: 424.614px; height: 79px; flex-shrink: 0; filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); position: absolute; top: -3%; left: 40%;">
				<div style="width: 47.731px; height: 49.504px; transform: rotate(45.791deg); flex-shrink: 0; border: 3px solid #FFF; background: #2E72C1; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: -5%;"></div>
				<div style="width: 19.4px; height: 20.121px; transform: rotate(45.791deg); flex-shrink: 0; border: 3px solid #FFF; background: #498FCD; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: -11%; top: 20%"></div>
				<div style="width: 47.731px; height: 49.504px; transform: rotate(-134.209deg); flex-shrink: 0; border: 3px solid #FFF; background: #2E72C1; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: 74%;"></div>
				<div style="width: 19.4px; height: 20.121px; transform: rotate(-134.209deg); flex-shrink: 0; border: 3px solid #FFF; background: #498FCD; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: 86%; top: 20%;"></div>
				<div style="width: 318px; height: 62px; flex-shrink: 0; border-radius: 30px; background: #76BDE0; position: absolute; top: 20%; left: 2.5%;"></div>
				<div style="width: 333.817px; height: 62.594px; flex-shrink: 0; border-radius: 31.297px;
			border: 4px solid transparent; background: linear-gradient(white, white) padding-box, linear-gradient(#478DCC, #83CBE5) border-box; position: relative; top: -7%;">
					<p style="color: #2E72C1; text-align: center; font-family: Nunito; font-size: 32px; font-style: normal; font-weight: 800; line-height: normal; position: absolute; top: 10%; left: 35%; margin: 0;">Credits</p>
				</div>
				</div>
			<div style="width: 50%; padding: 1rem; display: flex; flex-direction: column; align-items: flex-start; row-gap: 1rem;">
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0;">Project Organiser:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
					<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">Rizimu</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0;">Project Managers:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
					<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">Bloom<br>Valya</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0;">Writers:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
					<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">Liang<br>Izuroi<br>Rue<br>Usahino Geum</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0;">Editor:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
					<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">Aku</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0;">Programmers:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
					<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">AlphaBud<br>Fili<br>Lisbeth Arias<br>StolasHoliday<br>weepymice</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0;">Music Composers:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
					<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">Aefen<br>SticktheFigure</p>
					</div>
				</div>
			</div>
			<div style="width: 50%; padding: 1rem; display: flex; flex-direction: column; align-items: flex-start; row-gap: 1rem;">
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0;">Sprite Artists:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
					<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">Eirena<br>Otoke<br>Roz<br>tejing</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0; text-align: left;">Background Artists:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem; width: 35%;">
					<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">kimsugi<br>Niko (ShibeDraws)<br>Yuji Sakura</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0; text-align: left;">Special Scene Artists:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
					<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">Jian<br>Korichii<br>Var<br>夜記Giselle</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0;">UI Artist:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
					<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">angelisdoodlin</p>
					</div>
				</div>
			</div>
			<div style="width: 340.069px; height: 350.614px; transform: rotate(72.664deg); flex-shrink: 0; border: 5px solid #FFF;
		background: linear-gradient(4deg, #FD84DC -0.94%, #D0F1FE 98.3%);
		box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; bottom: -17%; right: 5%;">
			</div>
			<div style="width: 277px; height: 185px; transform: rotate(341.5deg); flex-shrink: 0; position: absolute; bottom: 2%; right: 8.5%;">
				<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);font-family: Nunito; font-size: 28px; font-style: normal; font-weight: 600; line-height: 125.4%; /* 35.112px */">Check out the making of TSM here! real not clickbait!</p>
			</div>
		</div>
		<button data-action="back" style="width: 270.026px; height: 280.057px; transform: rotate(-45.791deg); flex-shrink: 0; border: 5px solid #FFF; background: #C1E6FF; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; bottom: -8%; right: -3%; color: #FFF; text-align: center; font-family: Nunito; font-size: 48px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 4.08px; border-radius: 0; align-items: flex-start;">
			BACK
		</button>
	</div>
	
`});





$_ready (() => {
	// 2. Inside the $_ready function:

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:

		const input_range_volume_music	 = document.querySelector("#input_range_volume_music");
		const input_range_volume_voice	 = document.querySelector("#input_range_volume_voice");
		const input_range_volume_sound	 = document.querySelector("#input_range_volume_sound");
		const input_range_volume_video	 = document.querySelector("#input_range_volume_video");
		const input_range_speed_text	 = document.querySelector("#input_range_speed_text");
		const input_range_speed_autoPlay = document.querySelector("#input_range_speed_autoPlay");

		const bar_fill_volume_music	 	= document.querySelector("#bar_fill_volume_music");
		const bar_fill_volume_voice	 	= document.querySelector("#bar_fill_volume_voice");
		const bar_fill_volume_sound	 	= document.querySelector("#bar_fill_volume_sound");
		const bar_fill_volume_video	 	= document.querySelector("#bar_fill_volume_video");
		const bar_fill_speed_text	 	= document.querySelector("#bar_fill_speed_text");
		const bar_fill_speed_autoPlay 	= document.querySelector("#bar_fill_speed_autoPlay");

		input_range_volume_music  .addEventListener("input", (event)=>{
			console.log(event.target.value)
			bar_fill_volume_music .style.width = event.target.value * 630 + 20 + 'px';
			// chagne mute icon
		});
		input_range_volume_voice  .addEventListener("input", (event)=>{
			console.log(event.target.value)
			bar_fill_volume_voice .style.width = event.target.value * 630 + 20 + 'px';
			// chagne mute icon
		});
		input_range_volume_sound  .addEventListener("input", (event)=>{
			console.log(event.target.value)
			bar_fill_volume_sound .style.width = event.target.value * 630 + 20 + 'px';
			// chagne mute icon
		});
		input_range_volume_video  .addEventListener("input", (event)=>{
			console.log(event.target.value)
			bar_fill_volume_video .style.width = event.target.value * 630 + 20 + 'px';
			// chagne mute icon
		});
		input_range_speed_text	  .addEventListener("input", (event)=>{
			console.log(event.target.value)
			bar_fill_speed_text   .style.width = event.target.value * 12 + 'px';
			// chagne mute icon
		});
		input_range_speed_autoPlay.addEventListener("input", (event)=>{
			console.log(event.target.value)
			bar_fill_speed_autoPlay.style.width = event.target.value * 10 + 'px';
			// chagne mute icon
		});





	});
});
