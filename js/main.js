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

	
<div style="position:relative; overflow:hidden; "> 
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
		src="https://via.placeholder.com/1920x1080" />
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
			style="width: 1664.22px; height: 26px; left: 150.78px; top: 22px; position: absolute; color: #2E72C1; font-size: 19px; font-family: Nunito; font-weight: 500; word-wrap: break-word">
			... Radio club...~~~ ｽﾞｲ₍₍ (ง ˘ω˘ )ว ⁾⁾ ⁽⁽ 〪ɾ( ˘ω˘ 〫ɩ ) ₎₎ｽﾞｲ ~~~ Happy birthday Kyo! Fan game made by the
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
		<div
			style="width: 270.03px; height: 280.06px; left: 1825.74px; top: 818px; position: absolute; transform: rotate(45.79deg); transform-origin: 0 0; background: #C1E6FF; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 5px white solid">
		</div>
		<div data-action="start" 
			style="width: 183px; height: 42px; left: 1482px; top: 378px; position: absolute">
			<div
				style="width: 29.24px; height: 30.33px; left: 40.07px; top: 0px; position: absolute; transform: rotate(45.64deg); transform-origin: 0 0; background: #2E72C1; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 3px white solid">
			</div>
			<div
				style="width: 11.89px; height: 12.33px; left: 19.86px; top: 12.65px; position: absolute; transform: rotate(45.64deg); transform-origin: 0 0; background: #498FCD; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 3px white solid">
			</div>
			<div style="width: 118.05px; height: 39.58px; left: 64.95px; top: 0px; position: absolute">
				<div
					style="width: 110.63px; height: 32.20px; left: 3.71px; top: 3.69px; position: absolute; background: #2E72C1; border: 1px #2E72C1 solid">
				</div>
				<div
					style="width: 118.05px; height: 39.58px; left: 0px; top: 0px; position: absolute; background: white; border: 2px #2E72C1 solid">
				</div>
			</div>
		</div>
		<div
			style="width: 356.13px; height: 74.84px; left: 1665px; top: 991.82px; position: absolute; transform: rotate(-45deg); transform-origin: 0 0; color: white; font-size: 48px; font-family: Nunito; font-weight: 900; letter-spacing: 4.08px; word-wrap: break-word">
			Credits</div>
		<div  data-action="open-screen" data-open="load" 
			style="width: 139px; height: 77px; left: 1683px; top: 378px; position: absolute; color: white; font-size: 36px; font-family: Nunito; font-weight: 900; letter-spacing: 3.06px; word-wrap: break-word">
			/ Load</div>
		
</div>
</div>


		<main-menu></main-menu>
		`;
	});
	



monogatari.component('main-menu').template(() => {
	return `

	
`});


// monogatari.component('settings-screen').template(() => {
// 	return `

	
// `});



monogatari.component('text-box').template(() => {
	return `

  <div style="width: 100%; height: 100%; position: relative" data-content="name">
	<div style="width: 384px; height: 78.7px; left: 0px; top: 0px; position: absolute">
	  <div style="width: 47.73px; height: 49.5px; left: 47.33px; top: 0px; position: absolute; transform: rotate(45.79deg); transform-origin: 0 0; background: #2e72c1; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 3px white solid"></div>
	  <div style="width: 19.4px; height: 20.12px; left: 14.42px; top: 20.7px; position: absolute; transform: rotate(45.79deg); transform-origin: 0 0; background: #498fcd; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 3px white solid"></div>
	  <div style="width: 343px; height: 75px; left: 41px; top: 3.7px; position: absolute">
		<div style="width: 333.04px; height: 62.17px; left: 9.96px; top: 12.83px; position: absolute; background: #76bde0; box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25); border-radius: 30px"></div>
		<div style="width: 333.82px; height: 62.59px; left: 0px; top: 0px; position: absolute; background: white; border-radius: 31.3px; border: 4px #478dcc solid"></div>
	  </div>
	</div>
	<div style="width: 207px; height: 41px; left: 121px; top: 12.7px; position: absolute; color: #2e72c1; font-size: 32px; font-family: Nunito; font-weight: 800; word-wrap: break-word">
	
    <span data-ui="who" data-content="character-name"></span>
	
	</div>
  </div>
  


  <div data-content="side-image">


    <img data-ui="face" alt="" data-content="character-expression" src="" style="display: none" />
  </div>




<div style="width: 100%; height: 100%; position: relative; margin-top: 90px;"    data-content="text">
  <div style="width: 90%; height: 214px; left: 41px; top: 12px; position: absolute; opacity: 0.9; background: linear-gradient(0deg, #10588a 0%, #2d6cb5 79%, #22a2ff 100%); box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25)">
  
  <p data-ui="say" data-content="dialog"></p>
  
  </div>
  <img style="width: 1391px; height: 214px; left: 41px; top: 12px; position: absolute; opacity: 0.2; mix-blend-mode: soft-light; border-radius: 11px" src="./assets/fromfigma/overlay.png" />
  
 
  <div style="width: 29.3px; height: 33.27px; left: 1382px; top: 175px; position: absolute; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
  </div>
  <div style="width: 65px; height: 6px; left: 705px; top: 181px; position: absolute; text-align: center; color: white; font-size: 20px; font-family: Nunito; font-weight: 700; word-wrap: break-word">Save</div>
  <div style="width: 59px; height: 9px; left: 769px; top: 181px; position: absolute; text-align: center; color: white; font-size: 20px; font-family: Nunito; font-weight: 700; word-wrap: break-word">Load</div>
  <div style="width: 87px; height: 11px; left: 833px; top: 181px; position: absolute; text-align: center; color: white; font-size: 20px; font-family: Nunito; font-weight: 700; word-wrap: break-word">Settings</div>
  <div style="width: 55px; height: 29px; left: 924px; top: 181px; position: absolute; text-align: center; color: white; font-size: 20px; font-family: Nunito; font-weight: 700; word-wrap: break-word">Quit</div>
  <div style="width: 45px; height: 12px; left: 597px; top: 181px; position: absolute; text-align: center; color: white; font-size: 20px; font-family: Nunito; font-weight: 700; word-wrap: break-word">Log</div>
  <div style="width: 45px; height: 12px; left: 542px; top: 181px; position: absolute; text-align: center; color: white; font-size: 20px; font-family: Nunito; font-weight: 700; word-wrap: break-word">Hide<br /></div>
  <div style="width: 65px; height: 18px; left: 471px; top: 181px; position: absolute; text-align: center; color: white; font-size: 20px; font-family: Nunito; font-weight: 700; word-wrap: break-word">Back</div>
  <div style="width: 65px; height: 6px; left: 644px; top: 181px; position: absolute; text-align: center; color: white; font-size: 20px; font-family: Nunito; font-weight: 700; word-wrap: break-word">Auto</div>
</div>




`});





$_ready (() => {
	// 2. Inside the $_ready function:

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:

	});
});
