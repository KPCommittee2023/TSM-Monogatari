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
monogatari.component('loading-screen').template(() => {
	return `
			<video id="bg-loading" autoplay loop muted poster="./assets/images/bg-loading.png">
				<source src="./assets/videos/background_loop.mp4" type="video/mp4">
			</video>
			<div data-content="wrapper">
				<h2 data-string="Loading" data-content="title" class="loading-text">Loading...</h2>
				<div style="
					text-align: center;
				">
					<div style="
						position: absolute;
						width: 61%;
						height: 2.5vw;
						margin: 1em auto;
						left: 20%;
						bottom: -5%;
						background: #2E72C1;
						border-radius: 50px;
						outline: 3px solid white;
						z-index: -1;
					"></div>
					<progress value="0" max="100" data-content="progress"></progress>
				</div>
				
			</div>
		`;
})

monogatari.component ('main-screen').template (() => {
	return `

	
<div style="position:relative; overflow:hidden;  margin: auto; " class = "zoom_to_fit">

<div style="
	width: 100%;
	height: 100%;
	position: sticky;
	background: #2E72C1;
	opacity: 0.6;
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0; 
	z-index: 0;"></div>

<div style="width: 1920px; height: 1080px; position: relative; background: #2E72C1; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)";   >
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
						<span>~~~ ｽﾞｲ₍₍ (ง ˘ω˘ )ว ⁾⁾&#755;⁽⁽ ɾ( ˘ω˘ ɩ ) ₎₎ｽﾞｲ ~~~ Welcome to the radio club, here to make some friends? Fan game made by the Kyomies ヾ(´︶｀&#42;)ヾ&#40;´︶*&#41;ﾉ&#9835; &#603;≡ﾍ&#40; &#884;∀\`&#41;ﾉ =≡Σ((( つ•̀ω•́)=&#62;一ω<)) ヾ&#40;´︶\`*&#41;ﾉ</span>
						<!--duplicated messages to make animation smoother-->
						<span class="duplicate_kouzie">... Radio club...~~~ ｽﾞｲ₍₍ (ง ˘ω˘ )ว ⁾⁾&#755;⁽⁽ ɾ( ˘ω˘ ɩ ) ₎₎ｽﾞｲ ~~~ Happy birthday Kyo! Fan game made by the Kyomies tbc ヾ(´︶｀&#42;)ヾ&#40;´︶*&#41;ﾉ&#9835; &#603;≡ﾍ&#40; &#884;∀\`&#41;ﾉ =≡Σ((( つ•̀ω•́)=&#62;一ω<)) ヾ&#40;´︶\`*&#41;ﾉ</span> 
						<span class="duplicate_kouzie">... Radio club...~~~ ｽﾞｲ₍₍ (ง ˘ω˘ )ว ⁾⁾&#755;⁽⁽ ɾ( ˘ω˘ ɩ ) ₎₎ｽﾞｲ ~~~ Happy birthday Kyo! Fan game made by the Kyomies tbc ヾ(´︶｀&#42;)ヾ&#40;´︶*&#41;ﾉ&#9835; &#603;≡ﾍ&#40; &#884;∀\`&#41;ﾉ =≡Σ((( つ•̀ω•́)=&#62;一ω<)) ヾ&#40;´︶\`*&#41;ﾉ</span>
						<span class="duplicate_kouzie">... Radio club...~~~ ｽﾞｲ₍₍ (ง ˘ω˘ )ว ⁾⁾&#755;⁽⁽ ɾ( ˘ω˘ ɩ ) ₎₎ｽﾞｲ ~~~ Happy birthday Kyo! Fan game made by the Kyomies tbc ヾ(´︶｀&#42;)ヾ&#40;´︶*&#41;ﾉ&#9835; &#603;≡ﾍ&#40; &#884;∀\`&#41;ﾉ =≡Σ((( つ•̀ω•́)=&#62;一ω<)) ヾ&#40;´︶\`*&#41;ﾉ</span>
						<span class="duplicate_kouzie">... Radio club...~~~ ｽﾞｲ₍₍ (ง ˘ω˘ )ว ⁾⁾&#755;⁽⁽ ɾ( ˘ω˘ ɩ ) ₎₎ｽﾞｲ ~~~ Happy birthday Kyo! Fan game made by the Kyomies tbc ヾ(´︶｀&#42;)ヾ&#40;´︶*&#41;ﾉ&#9835; &#603;≡ﾍ&#40; &#884;∀\`&#41;ﾉ =≡Σ((( つ•̀ω•́)=&#62;一ω<)) ヾ&#40;´︶\`*&#41;ﾉ</span>
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
		<div class="main-button" data-action="open-screen" data-open="gallery"
			style="width: 276px; height: 58px; left: 1485px; top: 510px; position: absolute; color: white; font-size: 40px; font-family: Nunito; font-weight: 900; letter-spacing: 3.40px; word-wrap: break-word; text-align: left; display: flex; z-index: 1;">
			<div style="width: 70px; height: 100%;">
				<svg class="cursor" xmlns="http://www.w3.org/2000/svg" width="70" height="62" viewBox="0 0 70 62" fill="none">
					<g filter="url(#filter0_d_260_3595)">
					<rect width="29.2406" height="30.3311" transform="matrix(0.699126 0.714999 -0.718598 0.695426 39.0728 6)" fill="#2E72C1"/>
					<rect x="-0.0292085" y="2.11564" width="26.2406" height="27.3311" transform="matrix(0.699126 0.714999 -0.718598 0.695426 40.5843 6.66525)" stroke="white" stroke-width="3"/>
					</g>
					<g filter="url(#filter1_d_260_3595)">
					<rect width="11.885" height="12.3283" transform="matrix(0.699126 0.714999 -0.718598 0.695426 18.8589 18.6504)" fill="#498FCD"/>
					<rect x="-0.0292085" y="2.11564" width="8.88502" height="9.32827" transform="matrix(0.699126 0.714999 -0.718598 0.695426 20.3704 19.3156)" stroke="white" stroke-width="3"/>
					</g>
					<defs>
					<filter id="filter0_d_260_3595" x="7.27686" y="0" width="62.2388" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="4"/>
						<feGaussianBlur stdDeviation="5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_260_3595"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_260_3595" result="shape"/>
					</filter>
					<filter id="filter1_d_260_3595" x="0" y="12.6504" width="37.168" height="37.0712" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="4"/>
						<feGaussianBlur stdDeviation="5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_260_3595"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_260_3595" result="shape"/>
					</filter>
					</defs>
				</svg>
			</div>
			<img class="selected" src="./assets/fromfigma/gallery_selected.png" style="height: 102%; object-fit: contain; margin: 4px 0 0 0; ">
			<img class="normal" src="./assets/fromfigma/gallery.png" style="height: 100%; object-fit: contain; padding: 5px 0 1px 0; ">
		</div>
		<div class="main-button" data-action="open-screen" data-open="settings"
			style="width: 304px; height: 58px; left: 1485px; top: 576px; position: absolute; color: white; font-size: 40px; font-family: Nunito; font-weight: 900; letter-spacing: 3.40px; word-wrap: break-word; text-align: left; display: flex; z-index: 1;">
			<div style="width: 70px; height: 100%;">
				<svg class="cursor" xmlns="http://www.w3.org/2000/svg" width="70" height="62" viewBox="0 0 70 62" fill="none">
					<g filter="url(#filter0_d_260_3595)">
					<rect width="29.2406" height="30.3311" transform="matrix(0.699126 0.714999 -0.718598 0.695426 39.0728 6)" fill="#2E72C1"/>
					<rect x="-0.0292085" y="2.11564" width="26.2406" height="27.3311" transform="matrix(0.699126 0.714999 -0.718598 0.695426 40.5843 6.66525)" stroke="white" stroke-width="3"/>
					</g>
					<g filter="url(#filter1_d_260_3595)">
					<rect width="11.885" height="12.3283" transform="matrix(0.699126 0.714999 -0.718598 0.695426 18.8589 18.6504)" fill="#498FCD"/>
					<rect x="-0.0292085" y="2.11564" width="8.88502" height="9.32827" transform="matrix(0.699126 0.714999 -0.718598 0.695426 20.3704 19.3156)" stroke="white" stroke-width="3"/>
					</g>
					<defs>
					<filter id="filter0_d_260_3595" x="7.27686" y="0" width="62.2388" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="4"/>
						<feGaussianBlur stdDeviation="5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_260_3595"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_260_3595" result="shape"/>
					</filter>
					<filter id="filter1_d_260_3595" x="0" y="12.6504" width="37.168" height="37.0712" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="4"/>
						<feGaussianBlur stdDeviation="5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_260_3595"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_260_3595" result="shape"/>
					</filter>
					</defs>
				</svg>
			</div>
			<img class="selected" src="./assets/fromfigma/settings_selected.png" style="height: 110%; object-fit: contain; margin: 3px 0 0 0; ">
			<img class="normal" src="./assets/fromfigma/settings.png" style="height: 100%; object-fit: contain; padding: 5px 0 0 0; ">
		</div>
		<div
			style="width: 678px; height: 1356px; left: 761px; top: 561px; position: absolute; flex-direction: column; justify-content: center; align-items: center; display: inline-flex">
			<img style="width: 678px; height: 1356px" src=" ./assets/fromfigma/893af70dcdcc7dccae6bd9b63726d428.png " />
		</div>
		<div data-action="open-screen" data-open="credits"
			class = "credit_button_tooltip_trigger"
			style="width: 270.03px; height: 280.06px; bottom: -19.5%; right: 1%; position: absolute; transform: rotate(-45.79deg); transform-origin: 0 0; background: #C1E6FF; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 5px white solid; color: white; font-size: 48px; font-family: Nunito; font-weight: 900; letter-spacing: 4.08px; word-wrap: break-word; text-shadow: 2px 6px 1px #7FD6FA, -2px 6px 1px #7FD6FA, 1.5px 1.5px 0 #7FD6FA, -1.5px 1.5px 0px #7FD6FA, -1.5px -1.5px 0px #7FD6FA, 1.5px -1.5px 0px #7FD6FA;">
			Credits
		</div>
		<div data-action="open-screen" data-open="credits"
			class = "credit_button_tooltip_trigger"
			style="width: 270.03px; height: 280.06px; bottom: -19.5%; right: 1%; position: absolute; transform: rotate(-45.79deg); transform-origin: 0 0; background: transparent; z-index: 1; color: white; font-size: 48px; font-family: Nunito; font-weight: 900; letter-spacing: 4.08px; word-wrap: break-word; text-shadow: 2px 6px 1px #7FD6FA, -2px 6px 1px #7FD6FA, 1.5px 1.5px 0 #7FD6FA, -1.5px 1.5px 0px #7FD6FA, -1.5px -1.5px 0px #7FD6FA, 1.5px -1.5px 0px #7FD6FA;">
			Credits
		</div>

		<div class="main-button" data-action="start" 
			style="width: 276px; height: 58px; left: 1485px; top: 378px; position: absolute; text-align: left; display: flex; z-index: 1;">
			<div style="width: 70px; height: 100%;">
				<svg class="cursor" xmlns="http://www.w3.org/2000/svg" width="70" height="62" viewBox="0 0 70 62" fill="none">
					<g filter="url(#filter0_d_260_3595)">
					<rect width="29.2406" height="30.3311" transform="matrix(0.699126 0.714999 -0.718598 0.695426 39.0728 6)" fill="#2E72C1"/>
					<rect x="-0.0292085" y="2.11564" width="26.2406" height="27.3311" transform="matrix(0.699126 0.714999 -0.718598 0.695426 40.5843 6.66525)" stroke="white" stroke-width="3"/>
					</g>
					<g filter="url(#filter1_d_260_3595)">
					<rect width="11.885" height="12.3283" transform="matrix(0.699126 0.714999 -0.718598 0.695426 18.8589 18.6504)" fill="#498FCD"/>
					<rect x="-0.0292085" y="2.11564" width="8.88502" height="9.32827" transform="matrix(0.699126 0.714999 -0.718598 0.695426 20.3704 19.3156)" stroke="white" stroke-width="3"/>
					</g>
					<defs>
					<filter id="filter0_d_260_3595" x="7.27686" y="0" width="62.2388" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="4"/>
						<feGaussianBlur stdDeviation="5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_260_3595"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_260_3595" result="shape"/>
					</filter>
					<filter id="filter1_d_260_3595" x="0" y="12.6504" width="37.168" height="37.0712" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="4"/>
						<feGaussianBlur stdDeviation="5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_260_3595"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_260_3595" result="shape"/>
					</filter>
					</defs>
				</svg>
			</div>
			<img class="selected" src="./assets/fromfigma/start_selected.png" style="height: 100%; object-fit: contain; margin: 1px 0 0 0; ">
			<img class="normal" src="./assets/fromfigma/start.png" style="height: 100%; object-fit: contain; padding: 5px 0 8px 0; ">
		</div>
		
		<div class="main-button" data-action="open-screen" data-open="load" 
			style="width: 276px; height: 62px; left: 1485px; top: 444px; position: absolute; color: white; font-size: 36px; font-family: Nunito; font-weight: 900; letter-spacing: 3.06px; word-wrap: break-word; text-align: left; display: flex; z-index: 1;"
			>
			<div style="width: 70px; height: 100%;">
				<svg class="cursor" xmlns="http://www.w3.org/2000/svg" width="70" height="62" viewBox="0 0 70 62" fill="none">
					<g filter="url(#filter0_d_260_3595)">
					<rect width="29.2406" height="30.3311" transform="matrix(0.699126 0.714999 -0.718598 0.695426 39.0728 6)" fill="#2E72C1"/>
					<rect x="-0.0292085" y="2.11564" width="26.2406" height="27.3311" transform="matrix(0.699126 0.714999 -0.718598 0.695426 40.5843 6.66525)" stroke="white" stroke-width="3"/>
					</g>
					<g filter="url(#filter1_d_260_3595)">
					<rect width="11.885" height="12.3283" transform="matrix(0.699126 0.714999 -0.718598 0.695426 18.8589 18.6504)" fill="#498FCD"/>
					<rect x="-0.0292085" y="2.11564" width="8.88502" height="9.32827" transform="matrix(0.699126 0.714999 -0.718598 0.695426 20.3704 19.3156)" stroke="white" stroke-width="3"/>
					</g>
					<defs>
					<filter id="filter0_d_260_3595" x="7.27686" y="0" width="62.2388" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="4"/>
						<feGaussianBlur stdDeviation="5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_260_3595"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_260_3595" result="shape"/>
					</filter>
					<filter id="filter1_d_260_3595" x="0" y="12.6504" width="37.168" height="37.0712" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="4"/>
						<feGaussianBlur stdDeviation="5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_260_3595"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_260_3595" result="shape"/>
					</filter>
					</defs>
				</svg>
			</div>
			<img class="selected" src="./assets/fromfigma/load_selected.png" style="height: 100%; object-fit: contain; padding: 1px 0 0 0;">
			<img class="normal" src="./assets/fromfigma/load.png" style="height: 100%; object-fit: contain; padding: 5px 0 12px 2px;">
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="none" style="position: absolute; height: 100%; width: 100%; left: 0; top: 0;">
			<mask id="path-1-inside-1_260_1987" fill="white">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M1930.67 -6H-10.6667V1086H1930.67V-6ZM40 27C32.268 27 26 33.268 26 41V1039C26 1046.73 32.268 1053 40 1053H1880C1887.73 1053 1894 1046.73 1894 1039V41C1894 33.268 1887.73 27 1880 27H40Z"/>
			</mask>
			<g filter="url(#filter0_i_260_1987)">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M1930.67 -6H-10.6667V1086H1930.67V-6ZM40 27C32.268 27 26 33.268 26 41V1039C26 1046.73 32.268 1053 40 1053H1880C1887.73 1053 1894 1046.73 1894 1039V41C1894 33.268 1887.73 27 1880 27H40Z" fill="url(#paint0_linear_260_1987)" fill-opacity="0.6"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M1930.67 -6H-10.6667V1086H1930.67V-6ZM40 27C32.268 27 26 33.268 26 41V1039C26 1046.73 32.268 1053 40 1053H1880C1887.73 1053 1894 1046.73 1894 1039V41C1894 33.268 1887.73 27 1880 27H40Z" fill="#CDDEFF" fill-opacity="0.62"/>
			</g>
			<path d="M-10.6667 -6V-10H-14.6667V-6H-10.6667ZM1930.67 -6H1934.67V-10H1930.67V-6ZM-10.6667 1086H-14.6667V1090H-10.6667V1086ZM1930.67 1086V1090H1934.67V1086H1930.67ZM-10.6667 -2H1930.67V-10H-10.6667V-2ZM-6.66675 1086V-6H-14.6667V1086H-6.66675ZM1930.67 1082H-10.6667V1090H1930.67V1082ZM1926.67 -6V1086H1934.67V-6H1926.67ZM30 41C30 35.4772 34.4772 31 40 31V23C30.0589 23 22 31.0589 22 41H30ZM30 1039V41H22V1039H30ZM40 1049C34.4771 1049 30 1044.52 30 1039H22C22 1048.94 30.0588 1057 40 1057V1049ZM1880 1049H40V1057H1880V1049ZM1890 1039C1890 1044.52 1885.52 1049 1880 1049V1057C1889.94 1057 1898 1048.94 1898 1039H1890ZM1890 41V1039H1898V41H1890ZM1880 31C1885.52 31 1890 35.4771 1890 41H1898C1898 31.0589 1889.94 23 1880 23V31ZM40 31H1880V23H40V31Z" fill="url(#paint1_linear_260_1987)" mask="url(#path-1-inside-1_260_1987)"/>
			<defs>
				<filter id="filter0_i_260_1987" x="-10.6667" y="-6" width="1941.33" height="1096" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
				<feOffset dy="4"/>
				<feGaussianBlur stdDeviation="2"/>
				<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
				<feColorMatrix type="matrix" values="0 0 0 0 0.513726 0 0 0 0 0.796078 0 0 0 0 0.898039 0 0 0 1 0"/>
				<feBlend mode="normal" in2="shape" result="effect1_innerShadow_260_1987"/>
				</filter>
				<linearGradient id="paint0_linear_260_1987" x1="960" y1="-6" x2="960" y2="1104" gradientUnits="userSpaceOnUse">
				<stop offset="0.773449" stop-color="#7FD6FA"/>
				<stop offset="1" stop-color="#FE82DB"/>
				</linearGradient>
				<linearGradient id="paint1_linear_260_1987" x1="960" y1="-6" x2="960" y2="1086" gradientUnits="userSpaceOnUse">
				<stop stop-color="#2E72C1"/>
				<stop offset="1" stop-color="#7D66AE"/>
				</linearGradient>
			</defs>
		</svg>
		
</div>
</div>


		
		`;
	});
	



monogatari.component('main-menu').template(() => {
	return `
		
	
`});



monogatari.component('settings-screen').template(() => {
	return `

	<div style="
	width: 100%;
	height: 100%;
	position: sticky;
	background: #2E72C1;
	opacity: 0.6;
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0; 
	z-index: 0;"></div>

    <div  class="zoom_to_fit" style="margin: auto; background: linear-gradient(0deg, rgba(205, 222, 255, 0.80) 0%, rgba(205, 222, 255, 0.80) 100%), linear-gradient(180deg, rgba(127, 214, 250, 0.90) 78.62%, rgba(254, 130, 219, 0.90) 101.65%); width: 1920px; height: 1080px; background-size: cover; display: flex; align-items: center; justify-content: center; padding: 5% 2%; overflow: hidden; position: relative;">

    <div style="width: 1557px;border-radius: 11px;border: 3px solid white;height: 856px;box-shadow: 0px 0px 0px 3px #2E72C1 inset;outline: 3px solid #2E72C1;background-image: url(./assets/fromfigma/load_bg.png);position: absolute;padding: 4% 5% 4% 6%;display: flex;flex-direction: column;row-gap: 30px;">

		<div style="width: 424.614px; height: 79px; flex-shrink: 0; filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); position: absolute; top: -3%; left: 40%;">
		<div style="width: 47.731px; height: 49.504px; transform: rotate(45.791deg); flex-shrink: 0; border: 3px solid #FFF; background: #2E72C1; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: -5%;"></div>
		<div style="width: 19.4px; height: 20.121px; transform: rotate(45.791deg); flex-shrink: 0; border: 3px solid #FFF; background: #498FCD; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: -11%; top: 20%"></div>
		<div style="width: 47.731px; height: 49.504px; transform: rotate(-134.209deg); flex-shrink: 0; border: 3px solid #FFF; background: #2E72C1; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: 74%;"></div>
		<div style="width: 19.4px; height: 20.121px; transform: rotate(-134.209deg); flex-shrink: 0; border: 3px solid #FFF; background: #498FCD; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: 86%; top: 20%;"></div>
		<div style="width: 318px; height: 62px; flex-shrink: 0; border-radius: 30px; background: #76BDE0; position: absolute; top: 10%; left: 2.5%;"></div>
		
		<div style="width: 333.817px; height: 62.594px; flex-shrink: 0; border-radius: 31.297px; border: 4px solid transparent; background: linear-gradient(white, white) padding-box, linear-gradient(#478DCC, #83CBE5) border-box; position: relative; top: -7%; display: flex; justify-content: center; align-items: center;">
			<p style="color: #2E72C1; text-align: center; font-family: Nunito; font-size: 32px; font-style: normal; font-weight: 800; line-height: normal; position: absolute; margin: 0;">Settings</p>
		</div>
		
		</div>
		<button data-action="back" style="width: 270.026px; height: 280.057px; transform: rotate(-45.791deg); flex-shrink: 0; border: 5px solid #FFF; background: #C1E6FF; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; bottom: -24%; right: -16%; color: #FFF; text-align: center; font-family: Nunito; font-size: 48px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 4.08px; border-radius: 0; align-items: flex-start; text-shadow: 2px 6px 1px #7FD6FA, -2px 6px 1px #7FD6FA, 1.5px 1.5px 0 #7FD6FA, -1.5px 1.5px 0px #7FD6FA, -1.5px -1.5px 0px #7FD6FA, 1.5px -1.5px 0px #7FD6FA;">
			BACK
		</button>
	</div>

	<div class="setting_screen_container" style="display: flex; flex-direction: row; justify_content: space-evenly;">

		<div class="text_settings_item">
			<div class="icon_text" style="    
				display: flex;
				flex-direction: row;
				padding-left: 20px;
				column-gap: 15px;
				padding-bottom: 5px;">
				<img src="./assets/fromfigma/next.png" style="
					z-index: 1;
					height: 55px;
					position: relative;
					top: 5px;">
				<p style="color: #FFF;font-family: Nunito;font-size: 48px;font-style: normal;font-weight: 900;line-height: normal;letter-spacing: 3.4px; text-align: left; margin: 0;text-shadow: 3px 3px 0 #2E72C1, -2px -2px 0 #2E72C1, 2px -2px 0 #2E72C1, -2px 2px 0 #2E72C1, 2px 2px 0 #2E72C1; position: relative;">Text settings</p>
			</div>
			<div style="width: 650px; height: 561px; position: relative; background: linear-gradient(348deg, rgba(144, 202, 255, 0.7) 0%, rgba(127, 214, 250, 0.7) 100%); box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.50); border-radius: 60px; border: 5px white solid; z-index: 0;">

				<div style="display: flex; justify-content: center; padding-top: 100px; padding-left: 30px; padding-right: 45px; flex-direction: column;">

					<div style="text-align: left; position: relative; color: white; font-size: 36px; font-family: Nunito; font-weight: 700; line-height: 35.11px; word-wrap: break-word; order: 1;     text-shadow: 2px 3px 1px #2E72C1, -2px -1px 1px #2E72C1, 2px -1px 1px #2E72C1, -2px 1px 1px #2E72C1, 2px 0px 1px #2E72C1;">Text Speed:</div>

				
					<div style="width: 550px; height: 75px; position: relative; order: 2;">
						<input type="range" min="1" max="50" step="1" data-action="set-text-speed"
							id = "input_range_speed_text"
							class = "input_range"
							style="
								padding: 0px;
								width: 540px; 
								position: absolute;
								top: 22px;
								left: 4px;
								height: 42px;
    							border-radius: 50px;
						">

						<div class="input_range_cover_speed" ></div>
						<div class="bar_fill_speed" id = "bar_fill_speed_text"></div>

					</div>
				
					<div style="text-align: left; position: relative; color: white; font-size: 36px; font-family: Nunito; font-weight: 600; line-height: 35.11px; word-wrap: break-word; order: 3; padding-top: 75px;     text-shadow: 2px 3px 1px #2E72C1, -2px -1px 1px #2E72C1, 2px -1px 1px #2E72C1, -2px 1px 1px #2E72C1, 2px 0px 1px #2E72C1;">Auto-Forward Speed:</div>

					<div style="width: 550px; height: 75px; position: relative; order: 4;">
						<input type="range" min="0" max="50" step="1" data-action="set-auto-play-speed" data-content="auto-play-speed-controller"
							id = "input_range_speed_autoPlay"
							class = "input_range"
							style="
								padding: 0px;
								width: 540px; 
								position: absolute;
								top: 22px;
								left: 4px;
								height: 42px;
    							border-radius: 50px;
						">

						<div class="input_range_cover_speed" ></div>
						<div class="auto_bar_fill_speed" id = "bar_fill_speed_autoPlay"></div>

					</div>

				</div>

			</div>
			
		</div>

		<div class="volume_settings_item" style="padding-left: 70px;">
			<div class="icon_text" style="    
					display: flex;
					flex-direction: row;
					padding-left: 20px;
					column-gap: 15px;
					padding-bottom: 5px;">
				<img src="./assets/fromfigma/setting_menu_buton_sound.png" style="
						z-index: 1;
						height: 60px;
						position: relative;
						top: 2px;">
				<p style="color: #FFF;font-family: Nunito;font-size: 48px;font-style: normal;font-weight: 900;line-height: normal;letter-spacing: 3.4px; text-align: left; margin: 0;text-shadow: 3px 3px 0 #2E72C1, -1px -1px 0 #2E72C1, 1px -1px 0 #2E72C1, -1px 1px 0 #2E72C1, 1px 1px 0 #2E72C1; position: relative;">Volume</p>
			</div>
			<div style="width: 650px; height: 561px; position: relative; background: linear-gradient(348deg, rgba(144, 202, 255, 0.7) 0%, rgba(127, 214, 250, 0.7) 100%); box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.50); border-radius: 60px; border: 5px white solid; z-index: 0;">

				<div style="display: flex; justify-content: center; padding-top: 35px; padding-left: 45px; padding-right: 45px; flex-direction: column;">

					<div style="text-align:left; height: 34px; position: relative; color: white; font-size: 36px; font-family: Nunito; font-weight: 700; line-height: 35.11px; word-wrap: break-word; text-shadow: 2px 3px 1px #2E72C1, -2px -1px 1px #2E72C1, 2px -1px 1px #2E72C1, -2px 1px 1px #2E72C1, 2px 0px 1px #2E72C1;">Music:</div>

					<div style="width: 657px; height: 61.05px; position: relative">

						<input type="range" min="0.0" max="1.0" step="0.1" data-action="set-volume" data-target="music"
							id = "input_range_volume_music"
							class = "input_range"
							style="
								padding: 0px;
								width: 530px;
    							height: 50px;
    							left: 4px;
    							top: 8px;
    							position: absolute;
						">

						<div class="input_range_cover" ></div>
						<div class="bar_fill" id = "bar_fill_volume_music"></div>

					</div>

					<br>

					<div style="text-align: left; height: 34px; position: relative; color: white; font-size: 36px; font-family: Nunito; font-weight: 700; line-height: 35.11px; word-wrap: break-word; text-shadow: 2px 3px 1px #2E72C1, -2px -1px 1px #2E72C1, 2px -1px 1px #2E72C1, -2px 1px 1px #2E72C1, 2px 0px 1px #2E72C1;">Voice:</div>

					<div style="width: 657px; height: 61.05px; position: relative;">

						<input type="range" min="0.0" max="1.0" step="0.1" data-action="set-volume" data-target="voice"
							id = "input_range_volume_voice"
							class = "input_range"
							style="
								padding: 0px;
								width: 530px;
								height: 50px;
								left: 4px;
								top: 8px;
								position: absolute;
						">

						<div class="input_range_cover" ></div>
						<div class="bar_fill" id = "bar_fill_volume_voice"></div>
					
					</div>

					<br>

					<div style="text-align: left; height: 34px; position: relative; color: white; font-size: 36px; font-family: Nunito; font-weight: 700; line-height: 35.11px; word-wrap: break-word; text-shadow: 2px 3px 1px #2E72C1, -2px -1px 1px #2E72C1, 2px -1px 1px #2E72C1, -2px 1px 1px #2E72C1, 2px 0px 1px #2E72C1;">Sound:</div>


					<div style="width: 657px; height: 61.05px; position: relative">

						<input type="range" min="0.0" max="1.0" step="0.1" data-action="set-volume" data-target="sound"
							id = "input_range_volume_sound"
							class = "input_range"
							style="
								padding: 0px;
								width: 530px;
								height: 50px;
								left: 4px;
								top: 8px;
								position: absolute;
						">

						<div class="input_range_cover" ></div>
						<div class="bar_fill" id = "bar_fill_volume_sound"></div>

					</div>

					<br>

					<div style="text-align: left; height: 34px; position: relative; color: white; font-size: 36px; font-family: Nunito; font-weight: 700; line-height: 35.11px; word-wrap: break-word; text-shadow: 2px 3px 1px #2E72C1, -2px -1px 1px #2E72C1, 2px -1px 1px #2E72C1, -2px 1px 1px #2E72C1, 2px 0px 1px #2E72C1;">Video:</div>
					
					
					<div style="width: 657px; height: 61.05px; position: relative">

						<input type="range" min="0.0" max="1.0" step="0.1" data-action="set-volume" data-target="video"
							id = "input_range_volume_video"
							class = "input_range"
							style="
								padding: 0px;
								width: 530px;
								height: 50px;
								left: 4px;
								top: 8px;
								position: absolute;
						">

						<div class="input_range_cover" ></div>
						<div class="bar_fill" id = "bar_fill_volume_video"></div>

					</div>
				<div>
			</div>
      </div>
  </div>


	
`});


monogatari.component('text-box').template(() => {
	return `

  <div style="width: 100%; height: 100%; position: relative; left: 10%;" data-content="name">
	<div style="width: 384px; height: 78.7px; left: 0px; top: 0px; position: absolute">
	  <div class="big-bullet-point"></div>
	  <div class="small-bullet-point"></div>
	  <div class="name-box-total" style="height: 125px; top: 3.7px; position: absolute; display: flex; flex-direction: column-reverse; justify-content: flex-end;">
		<div class="name-box-shadow" ></div>
		<div class="name-box" >
			<div style="width: fit-content; height: 100%; color: #2e72c1; 
			font-family: Nunito; font-weight: 800; word-wrap: break-word; text-align: center; display: flex;
			align-items: center; padding: 5px;
			justify-content: center;">
		
			<span data-ui="who" data-content="character-name"></span>
			
			</div>
		</div>
	  </div>
	  <div class="auto-div" style="display: none; border-radius: 31.3px; box-shadow: 0px 4px 4px rgba(2, 0, 79, 0.25); position: absolute;
		border: double 4px transparent; background-image: linear-gradient(white, white), linear-gradient(to bottom, #478DCC, #83CBE5); 
		background-origin: border-box; background-clip: content-box, border-box; text-align: center;">
	  		<span class="auto-text" style="font-family: 'Nunito'; font-weight: 800; color: #2E72C1;">Auto</span>
	  </div>
	</div>
  </div>
  


  <div data-content="side-image">


    <img data-ui="face" alt="" data-content="character-expression" src="" style="display: none" />
  </div>




<div class="dialog-box" style="width: 100%; height: 100%; position: relative; margin-bottom: 20px; padding-top: 12px;"    data-content="text">
  <div style="  position: relative; display: flex; justify-content: center; margin: 0px auto;  padding-top: calc(5px + 1vw); padding-left: 3%;  padding-right: 3%; padding-bottom: calc(5px + 1vw); 
   width: 80%; height: 22vh; opacity: 0.9; border-radius: 10px;
   background: linear-gradient(0deg, #10588a 0%, #2d6cb5 79%, #22a2ff 100%); 
   box-shadow: 0px 0px 0px 3px #2E72C1 inset; outline: 3px solid #2E72C1; border: solid white 3px;">
	
    <img src="./assets/fromfigma/overlay2.png" style="opacity: 0.2; position: absolute; width: 100%">
	<p data-ui="say" data-content="dialog" style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); 
		font-family: Nunito; font-style: normal; font-weight: 400; line-height: 125.4%;  
	"></p>
		
	
	<div style="display: inline-block; bottom: 5%; position: absolute; text-align: center; width: 80%" >
		<span id="auto-button" data-action="auto-play"  class="quick-menu-button"
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
		<span id="hide-button" data-action="distraction-free" class="quick-menu-button"
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
		<div style="width: 1557px; border-radius: 11px; border: 3px solid white; height: 856px; box-shadow: 0px 0px 0px 3px #2E72C1 inset; outline: 3px solid #2E72C1; background-image: url(./assets/fromfigma/credits_bg.png); position: relative; padding: 4% 2% 5% 2%; display: flex; flex-direction: row; ">
			<div style="width: 424.614px; height: 79px; flex-shrink: 0; filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); position: absolute; top: -3%; left: 40%;">
				<div style="width: 47.731px; height: 49.504px; transform: rotate(45.791deg); flex-shrink: 0; border: 3px solid #FFF; background: #2E72C1; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: -5%;"></div>
				<div style="width: 19.4px; height: 20.121px; transform: rotate(45.791deg); flex-shrink: 0; border: 3px solid #FFF; background: #498FCD; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: -11%; top: 20%"></div>
				<div style="width: 47.731px; height: 49.504px; transform: rotate(-134.209deg); flex-shrink: 0; border: 3px solid #FFF; background: #2E72C1; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: 74%;"></div>
				<div style="width: 19.4px; height: 20.121px; transform: rotate(-134.209deg); flex-shrink: 0; border: 3px solid #FFF; background: #498FCD; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: 86%; top: 20%;"></div>
				<div style="width: 318px; height: 62px; flex-shrink: 0; border-radius: 30px; background: #76BDE0; position: absolute; top: 10%; left: 2.5%;"></div>
				<div style="width: 333.817px; height: 62.594px; flex-shrink: 0; border-radius: 31.297px;
			border: 4px solid transparent; background: linear-gradient(white, white) padding-box, linear-gradient(#478DCC, #83CBE5) border-box; position: relative; top: -7%;">
					<p style="color: #2E72C1; text-align: center; font-family: Nunito; font-size: 32px; font-style: normal; font-weight: 800; line-height: normal; position: absolute; top: 10%; left: 35%; margin: 0;">Credits</p>
				</div>
				</div>
			<div style="width: 50%; padding: 1rem; display: flex; flex-direction: column; align-items: flex-start; row-gap: 1rem;">
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0; text-shadow: 3px 3px 0 #2E72C1, -1px -1px 0 #2E72C1, 1px -1px 0 #2E72C1, -1px 1px 0 #2E72C1, 1px 1px 0 #2E72C1;">Project Organiser:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
						<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">
							Rizimu &nbsp;
								<a href="https://rizimuwinn.carrd.co/" target="_blank">
									<img style="width: 30px; vertical-align: middle;" src="https://carrd.co/assets/docs/images/brand/svg/symbol-light.svg">
								</a>
						</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0; text-shadow: 3px 3px 0 #2E72C1, -1px -1px 0 #2E72C1, 1px -1px 0 #2E72C1, -1px 1px 0 #2E72C1, 1px 1px 0 #2E72C1;">Project Managers:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
						<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">
							Bloom &nbsp;
								<a href="https://lucid-dreaming.carrd.co/" target="_blank">
									<img style="width: 30px; vertical-align: middle;" src="https://carrd.co/assets/docs/images/brand/svg/symbol-light.svg">
								</a>
							<br>Valya &nbsp;&nbsp;&nbsp;
								<a href="https://twitter.com/valyamini" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
						</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0; text-shadow: 3px 3px 0 #2E72C1, -1px -1px 0 #2E72C1, 1px -1px 0 #2E72C1, -1px 1px 0 #2E72C1, 1px 1px 0 #2E72C1;">Writers:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
						<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">
							Liang &nbsp;
								<a href="https://yunliang.carrd.co/" target="_blank">
									<img style="width: 30px; vertical-align: middle;" src="https://carrd.co/assets/docs/images/brand/svg/symbol-light.svg">
								</a>
							<br>Izuroi &nbsp;&nbsp;
								<a href="https://x.com/izuroivastain" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
							<br>Rue &nbsp;&nbsp;&nbsp;&nbsp;
								<a href="https://twitter.com/Rue_Romaritime" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
							<br>Usahino Geum 
								<a href="https://twitter.com/geumusahino" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
						</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0; text-shadow: 3px 3px 0 #2E72C1, -1px -1px 0 #2E72C1, 1px -1px 0 #2E72C1, -1px 1px 0 #2E72C1, 1px 1px 0 #2E72C1;">Editor:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
						<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">
							Aku 
						</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0; text-shadow: 3px 3px 0 #2E72C1, -1px -1px 0 #2E72C1, 1px -1px 0 #2E72C1, -1px 1px 0 #2E72C1, 1px 1px 0 #2E72C1;">Programmers:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
						<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">
							Fili &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="https://sunfilisdev.carrd.co/" target="_blank">
									<img style="width: 30px; vertical-align: middle;" src="https://carrd.co/assets/docs/images/brand/svg/symbol-light.svg">
								</a>
							<br>Alpaka &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="https://twitter.com/Stephen42166653" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
							<br>weepymice &nbsp;&nbsp;&nbsp;
								<a href="https://www.tumblr.com/weepymice" target="_blank">
									<img style="width: 30px; vertical-align: middle;" src="https://carrd.co/assets/docs/images/brand/svg/symbol-light.svg">
								</a>
							<br>Lisbeth Arias &nbsp;
								<a href="https://instagram.com/lizzyariasdejesus" target="_blank">
									<img style="width: 30px; vertical-align: middle;" src="https://carrd.co/assets/docs/images/brand/svg/symbol-light.svg">
								</a>
							<br>rubysweetie &nbsp;&nbsp;
								<a href="https://github.com/SeonJaeY" target="_blank">
									<img style="width: 30px; vertical-align: middle;" src="https://carrd.co/assets/docs/images/brand/svg/symbol-light.svg">
								</a>
							<br>StolasHoliday 
								<a href="https://twitter.com/StolasHoliday" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
						</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 65%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0; text-shadow: 3px 3px 0 #2E72C1, -1px -1px 0 #2E72C1, 1px -1px 0 #2E72C1, -1px 1px 0 #2E72C1, 1px 1px 0 #2E72C1;">Music Composers:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
						<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">
							Aefen &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="https://twitter.com/OfficialAefen" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
							<br>SticktheFigure 
								<a href="https://twitter.com/SticktheFigure" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
						</p>
					</div>
				</div>
			</div>
			<div style="width: 50%; padding-left: 1rem; padding-top: 1rem; display: flex; flex-direction: column; align-items: flex-start; row-gap: 1rem;">
				<div style="display: flex; width: 100%;">
					<div style="width: 60%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0; text-shadow: 3px 3px 0 #2E72C1, -1px -1px 0 #2E72C1, 1px -1px 0 #2E72C1, -1px 1px 0 #2E72C1, 1px 1px 0 #2E72C1;">Sprite Artists:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
						<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">
							Eirena &nbsp;
								<a href="https://twitter.com/eirenadraws" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
							<br>Otoke &nbsp;
								<a href="https://otokeneko.carrd.co/" target="_blank">
									<img style="width: 30px; vertical-align: middle;" src="https://carrd.co/assets/docs/images/brand/svg/symbol-light.svg">
								</a>
							<br>Roz &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="https://twitter.com/nritermi" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
							<br>tejing &nbsp;&nbsp;
								<a href="https://twitter.com/bblanckett" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
						</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 60%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0; text-align: left; text-shadow: 3px 3px 0 #2E72C1, -1px -1px 0 #2E72C1, 1px -1px 0 #2E72C1, -1px 1px 0 #2E72C1, 1px 1px 0 #2E72C1;">Background Artists:</p>
					</div>
					<div style="padding-left: 1rem; padding-top: 0.5rem; width: 40%;">
						<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">
							kimsugi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="https://twitter.com/_kimsugi" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
							<br>Niko(ShibeDraws) 
								<a href="https://twitter.com/ShibeDraws" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
							<br>Yuji Sakura 
								<a href="https://twitter.com/blossomxbloom" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
						</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 60%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0; text-align: left; text-shadow: 3px 3px 0 #2E72C1, -1px -1px 0 #2E72C1, 1px -1px 0 #2E72C1, -1px 1px 0 #2E72C1, 1px 1px 0 #2E72C1;">Special Scene Artists:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
						<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">
							Jian &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="https://sincerelyoursji.carrd.co/" target="_blank">
									<img style="width: 30px; vertical-align: middle;" src="https://carrd.co/assets/docs/images/brand/svg/symbol-light.svg">
								</a>
							<br>Korichii 
								<a href="https://korichii.carrd.co/" target="_blank">
									<img style="width: 30px; vertical-align: middle;" src="https://carrd.co/assets/docs/images/brand/svg/symbol-light.svg">
								</a>
							<br>Var &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="https://twitter.com/_Varietale_" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
							<br>夜記Giselle 
								<a href="https://twitter.com/yakigiselle" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
						</p>
					</div>
				</div>
				<div style="display: flex; width: 100%;">
					<div style="width: 60%; padding: 1rem; position: relative;">
					<p style="color: #FFF; font-family: Nunito; font-size: 36px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 3.4px; position: absolute; top: 0; margin: 0; text-shadow: 3px 3px 0 #2E72C1, -1px -1px 0 #2E72C1, 1px -1px 0 #2E72C1, -1px 1px 0 #2E72C1, 1px 1px 0 #2E72C1;">UI Artist:</p>
					</div>
					<div style="padding: 1rem; padding-top: 0.5rem;">
						<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 25px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">
							angelisdoodlin 
								<a href="https://twitter.com/angelisdoodlin" target="_blank">
									<img style="width: 24px; vertical-align: middle;" src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png">
								</a>
						</p>
					</div>
				</div>
			</div>
			<div style="width: 340.069px; height: 350.614px; transform: rotate(72.664deg); flex-shrink: 0; border: 5px solid #FFF;
		background: linear-gradient(4deg, #FD84DC -0.94%, #D0F1FE 98.3%);
		box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; bottom: -22%; right: 5%;">
			</div>
			<div style="width: 277px; height: 185px; transform: rotate(341.5deg); flex-shrink: 0; position: absolute; bottom: -2%; right: 8.5%;">
				<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);font-family: Nunito; font-size: 28px; font-style: normal; font-weight: 600; line-height: 125.4%; /* 35.112px */">Check out the making of TSM <a href="https://tsmvisualnovel.carrd.co/" target="_blank"><u>here</u></a>! real not clickbait!</p>
			</div>
		</div>
		<button data-action="back" style="width: 270.026px; height: 280.057px; transform: rotate(-45.791deg); flex-shrink: 0; border: 5px solid #FFF; background: #C1E6FF; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; bottom: -8%; right: -3%; color: #FFF; text-align: center; font-family: Nunito; font-size: 48px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 4.08px; border-radius: 0; align-items: flex-start; text-shadow: 2px 6px 1px #7FD6FA, -2px 6px 1px #7FD6FA, 1.5px 1.5px 0 #7FD6FA, -1.5px 1.5px 0px #7FD6FA, -1.5px -1.5px 0px #7FD6FA, 1.5px -1.5px 0px #7FD6FA;">
			BACK
		</button>
	</div>
	
`});


monogatari.component('load-screen').template(() => {
	return `

	<div style="
	width: 100%;
	height: 100%;
	position: sticky;
	background: #2E72C1;
	opacity: 0.6;
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0; 
	z-index: 0;"></div>
	
	<div  class="zoom_to_fit" style="margin: auto; background: linear-gradient(0deg, rgba(205, 222, 255, 0.80) 0%, rgba(205, 222, 255, 0.80) 100%), linear-gradient(180deg, rgba(127, 214, 250, 0.90) 78.62%, rgba(254, 130, 219, 0.90) 101.65%); width: 1920px; height: 1080px; background-size: cover; display: flex; align-items: center; justify-content: center; padding: 5% 2%; overflow: hidden; position: relative;
	">
	<div style="width: 1557px; border-radius: 11px; border: 3px solid white; height: 856px; box-shadow: 0px 0px 0px 3px #2E72C1 inset; outline: 3px solid #2E72C1; background-image: url(./assets/fromfigma/load_bg.png); position: relative; padding: 4% 5% 4% 6%; display: flex; flex-direction: column; row-gap: 45px;">
			<div style="width: 424.614px; height: 79px; flex-shrink: 0; filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); position: absolute; top: -3%; left: 40%;">
				<div style="width: 47.731px; height: 49.504px; transform: rotate(45.791deg); flex-shrink: 0; border: 3px solid #FFF; background: #2E72C1; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: -5%;"></div>
				<div style="width: 19.4px; height: 20.121px; transform: rotate(45.791deg); flex-shrink: 0; border: 3px solid #FFF; background: #498FCD; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: -11%; top: 20%"></div>
				<div style="width: 47.731px; height: 49.504px; transform: rotate(-134.209deg); flex-shrink: 0; border: 3px solid #FFF; background: #2E72C1; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: 74%;"></div>
				<div style="width: 19.4px; height: 20.121px; transform: rotate(-134.209deg); flex-shrink: 0; border: 3px solid #FFF; background: #498FCD; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: 86%; top: 20%;"></div>
				<div style="width: 318px; height: 62px; flex-shrink: 0; border-radius: 30px; background: #76BDE0; position: absolute; top: 10%; left: 2.5%;"></div>
				<div style="width: 333.817px; height: 62.594px; flex-shrink: 0; border-radius: 31.297px;
			border: 4px solid transparent; background: linear-gradient(white, white) padding-box, linear-gradient(#478DCC, #83CBE5) border-box; position: relative; top: -7%;">
					<p style="color: #2E72C1; text-align: center; font-family: Nunito; font-size: 32px; font-style: normal; font-weight: 800; line-height: normal; position: absolute; top: 10%; left: 37.5%; margin: 0;">Load</p>
				</div>
			</div>
			<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 28px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 10px 0 0 0; text-align: left;">Select the slot to load.</p>
			<div data-ui="slots" style="overflow: auto; height: 610px;">
				<slot-container label="Save" type="load" data-component="slot-container" style="justify-content: start; display: grid; column-gap: 29px; row-gap: 46px; grid-template-columns: repeat(3, 420px);">
				</slot-container>
			</div>
			
		</div>
		<button data-action="back" style="width: 270.026px; height: 280.057px; transform: rotate(-45.791deg); flex-shrink: 0; border: 5px solid #FFF; background: #C1E6FF; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; bottom: -8%; right: -3%; color: #FFF; text-align: center; font-family: Nunito; font-size: 48px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 4.08px; border-radius: 0; align-items: flex-start; text-shadow: 2px 6px 1px #7FD6FA, -2px 6px 1px #7FD6FA, 1.5px 1.5px 0 #7FD6FA, -1.5px 1.5px 0px #7FD6FA, -1.5px -1.5px 0px #7FD6FA, 1.5px -1.5px 0px #7FD6FA;">
			BACK
		</button>
	</div>
	
`});

monogatari.component('save-screen').template(() => {
	return `

	<div  class="zoom_to_fit" style="margin: auto; background: linear-gradient(0deg, rgba(205, 222, 255, 0.80) 0%, rgba(205, 222, 255, 0.80) 100%), linear-gradient(180deg, rgba(127, 214, 250, 0.90) 78.62%, rgba(254, 130, 219, 0.90) 101.65%); width: 1920px; height: 1080px; background-size: cover; display: flex; align-items: center; justify-content: center; padding: 5% 2%; overflow: hidden; position: relative;
	">
		<div style="width: 1557px; border-radius: 11px; border: 3px solid white; height: 856px; box-shadow: 0px 0px 0px 3px #2E72C1 inset; outline: 3px solid #2E72C1; background-image: url(./assets/fromfigma/load_bg.png); position: relative; padding: 4% 5% 4% 6%; display: flex; flex-direction: column; row-gap: 30px;">
			<div style="width: 424.614px; height: 79px; flex-shrink: 0; filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); position: absolute; top: -3%; left: 40%;">
				<div style="width: 47.731px; height: 49.504px; transform: rotate(45.791deg); flex-shrink: 0; border: 3px solid #FFF; background: #2E72C1; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: -5%;"></div>
				<div style="width: 19.4px; height: 20.121px; transform: rotate(45.791deg); flex-shrink: 0; border: 3px solid #FFF; background: #498FCD; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: -11%; top: 20%"></div>
				<div style="width: 47.731px; height: 49.504px; transform: rotate(-134.209deg); flex-shrink: 0; border: 3px solid #FFF; background: #2E72C1; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: 74%;"></div>
				<div style="width: 19.4px; height: 20.121px; transform: rotate(-134.209deg); flex-shrink: 0; border: 3px solid #FFF; background: #498FCD; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; left: 86%; top: 20%;"></div>
				<div style="width: 318px; height: 62px; flex-shrink: 0; border-radius: 30px; background: #76BDE0; position: absolute; top: 10%; left: 2.5%;"></div>
				<div style="width: 333.817px; height: 62.594px; flex-shrink: 0; border-radius: 31.297px;
			border: 4px solid transparent; background: linear-gradient(white, white) padding-box, linear-gradient(#478DCC, #83CBE5) border-box; position: relative; top: -7%;">
					<p style="color: #2E72C1; text-align: center; font-family: Nunito; font-size: 32px; font-style: normal; font-weight: 800; line-height: normal; position: absolute; top: 10%; left: 37.5%; margin: 0;">Save</p>
				</div>
			</div>
			<div style="display: flex;align-items: center; justify-content: flex-start; column-gap: 30px;">
				<p style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 36, 78, 0.22); font-family: Nunito; font-size: 28px; font-style: normal; font-weight: 600; line-height: 125.4%; margin: 0; text-align: left;">Select the slot to save or create a new one.</p>
				<div style="display: flex; column-gap: 10px; align-items: center;">
					<input type="text" placeholder="Save Slot Name" data-input="slotName" data-content="slot-name" required="" style="
						font-size: 24px;
						font-family: 'Nunito';
						border-radius: 11px;
						box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
						font-weight: 400;
						height: 54px;
						width: 397px;
						border: none;
					">
					<button data-string="Save" data-action="save" style="
						font-family: 'Nunito';
						font-size: 24px;
						font-weight: 900;
						margin: 0;
						height: 60px;
						width: 124px;
						border-radius: 21px;
						border: 3px solid #FFF;
						background: #2567B2;
						box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
					">Save</button>
				</div>
			</div>
			<div data-ui="slots" style="overflow: auto; height: 610px;">
				<slot-container label="Save" type="save" data-component="slot-container" style="justify-content: start; display: grid; column-gap: 29px; row-gap: 46px; grid-template-columns: repeat(3, 420px);">
				</slot-container>
			</div>
			
		</div>
		<button data-action="back" style="width: 270.026px; height: 280.057px; transform: rotate(-45.791deg); flex-shrink: 0; border: 5px solid #FFF; background: #C1E6FF; box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25); position: absolute; bottom: -8%; right: -3%; color: #FFF; text-align: center; font-family: Nunito; font-size: 48px; font-style: normal; font-weight: 900; line-height: normal; letter-spacing: 4.08px; border-radius: 0; align-items: flex-start; text-shadow: 2px 6px 1px #7FD6FA, -2px 6px 1px #7FD6FA, 1.5px 1.5px 0 #7FD6FA, -1.5px 1.5px 0px #7FD6FA, -1.5px -1.5px 0px #7FD6FA, 1.5px -1.5px 0px #7FD6FA;">
			BACK
		</button>
	</div>
	
`});

monogatari.component('dialog-log').template(() => {
    return `
		<div class="modal__content">
			<div class="log-wrapper">
				<div class="bar-wrapper">
					<div class="progress"></div>
					<div class="progress-cursor">
						<div style="width: 26px;height: 26px;transform: rotate(45.791deg);flex-shrink: 0;border: 3px solid #FFF;background: #2E72C1;box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);position: relative;left: 8%;"></div>
						<div style="width: 11px;height: 11px;transform: rotate(45.791deg);flex-shrink: 0;border: 3px solid #FFF;background: #498FCD;box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);position: relative;left: -7px;top: -19px"></div>
					</div>
					
				</div>
				<div data-content="log" class="log" style="font-family: Nunito;">
					<div class="text--center padded"; data-string="NoDialogsAvailable"; data-content="placeholder">No dialogs available. Dialogs will appear here as they show up.</div>
				</div>
			</div>

			<div class="zoom_to_fit" style="width: 484.614px;height: 81px;flex-shrink: 0;filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));">
				<div style="width: 47.731px;height: 49.504px;transform: rotate(45.791deg);flex-shrink: 0;border: 3px solid #FFF;background: #2E72C1;box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);position: absolute;left: 11%;"></div>
				<div style="width: 19.4px;height: 20.121px;transform: rotate(45.791deg);flex-shrink: 0;border: 3px solid #FFF;background: #498FCD;box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);position: absolute;left: 7%;top: 20%"></div>
				<div style="width: 47.731px;height: 49.504px;transform: rotate(45.791deg);flex-shrink: 0;border: 3px solid #FFF;background: #2E72C1;box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);position: absolute;left: 79%;"></div>
				<div style="width: 19.4px;height: 20.121px;transform: rotate(45.791deg);flex-shrink: 0;border: 3px solid #FFF;background: #498FCD;box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);position: absolute;left: 89%;top: 20%"></div>
				<div style="width: 326.45px;height: 67.3px;flex-shrink: 0;border-radius: 41.297px;background: #76BDE0;position: absolute;top: 5%;left: 17.5%;"></div>
				<button data-string="Close" data-action="dialog-log" style="width: 336.45px;height: 67.3px;flex-shrink: 0;border-radius: 41.297px;border: 5px solid transparent;background: linear-gradient(white, white) padding-box, linear-gradient(#478DCC, #83CBE5) border-box;position: relative;top: -18%;color:#2E72C1;font-family: Nunito;font-weight: 800;font-size: 32px;">Close</button>
			</div>
		</div>

        `;
});

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

		// const setting_menu_buton_MUSIC = document.querySelector("#setting_menu_buton_MUSIC"); 
		// const setting_menu_buton_VOICE = document.querySelector("#setting_menu_buton_VOICE");
		// const setting_menu_buton_SOUND = document.querySelector("#setting_menu_buton_SOUND");
		// const setting_menu_buton_VIDEO = document.querySelector("#setting_menu_buton_VIDEO");


		input_range_volume_music  .addEventListener("input", (event)=>{
			console.log(event.target.value);
			bar_fill_volume_music .style.width = event.target.value * 530 + 10 + 'px';
			if (event.target.value < 0.1) {
				bar_fill_volume_music.style.outline = "none";
			}
			else {
				bar_fill_volume_music.style.outline = "4px solid #2E72C1";
			}
			// // chagne mute icon
			// if (event.target.value == 0) setting_menu_buton_MUSIC.src = "./assets/fromfigma/setting_menu_button_mute.png"
			// else setting_menu_buton_MUSIC.src = "./assets/fromfigma/setting_menu_buton_sound.png"
			
		});
		input_range_volume_voice  .addEventListener("input", (event)=>{
			bar_fill_volume_voice .style.width = event.target.value * 530 + 10 + 'px';
			if (event.target.value < 0.1) {
				bar_fill_volume_voice.style.outline = "none";
			}
			else {
				bar_fill_volume_voice.style.outline = "4px solid #2E72C1";
			}
			// chagne mute icon
			// if (event.target.value == 0) setting_menu_buton_VOICE.src = "./assets/fromfigma/setting_menu_button_mute.png"
			// else setting_menu_buton_VOICE.src = "./assets/fromfigma/setting_menu_buton_sound.png"
		});
		input_range_volume_sound  .addEventListener("input", (event)=>{
			bar_fill_volume_sound .style.width = event.target.value * 530 + 10 + 'px';
			if (event.target.value < 0.1) {
				bar_fill_volume_sound.style.outline = "none";
			}
			else {
				bar_fill_volume_sound.style.outline = "4px solid #2E72C1";
			}
			// chagne mute icon
			// if (event.target.value == 0) setting_menu_buton_SOUND.src = "./assets/fromfigma/setting_menu_button_mute.png"
			// else setting_menu_buton_SOUND.src = "./assets/fromfigma/setting_menu_buton_sound.png"
		});
		input_range_volume_video  .addEventListener("input", (event)=>{
			bar_fill_volume_video .style.width = event.target.value * 530 + 10 + 'px';
			if (event.target.value < 0.1) {
				bar_fill_volume_video.style.outline = "none";
			}
			else {
				bar_fill_volume_video.style.outline = "4px solid #2E72C1";
			}
			// chagne mute icon
			// if (event.target.value == 0) setting_menu_buton_VIDEO.src = "./assets/fromfigma/setting_menu_button_mute.png"
			// else setting_menu_buton_VIDEO.src = "./assets/fromfigma/setting_menu_buton_sound.png"
		});
		input_range_speed_text	  .addEventListener("input", (event)=>{
			console.log(event.target.value)
			bar_fill_speed_text   .style.width = event.target.value * 11 + 'px';
			if (event.target.value < 2) {
				bar_fill_speed_text.style.outline = "none";
			}
			else {
				bar_fill_speed_text.style.outline = "4px solid #2E72C1";
			}
		});
		input_range_speed_autoPlay.addEventListener("input", (event)=>{
			console.log(event.target.value)
			bar_fill_speed_autoPlay.style.width = event.target.value * 11 + 'px';
			if (event.target.value < 2) {
				bar_fill_speed_autoPlay.style.outline = "none";
			}
			else {
				bar_fill_speed_autoPlay.style.outline = "4px solid #2E72C1";
			}
		});


		// auto indicator
		const auto_button = document.querySelector("#auto-button");
		const auto_indicator = document.querySelector(".auto-div")

		auto_button.addEventListener("click", toggleAuto);
		function toggleAuto() {
			if (auto_indicator.style.display == "none") {
				auto_indicator.style.display = "block";
			}
			else {
				auto_indicator.style.display = "none";
			}
		}

		// show unhide fading message when pressing hide button
		const unhide_div = document.querySelector(".unhide");
		const hide_button = document.querySelector("#hide-button");
		
		hide_button.addEventListener("click", showUnhide);
		function showUnhide() {
			unhide_div.style.display = "block";
			setTimeout(function() {
				// hide message after a few seconds
				unhide_div.classList.add("animate__animated");
				unhide_div.classList.add("animate__fadeOut");
				setTimeout(function () {
					unhide_div.style.display = "none";
				}, 1000);
			}, 3000); // disappears after 3 secs
			// reset
			unhide_div.classList.remove("animate__animated");
			unhide_div.classList.remove("animate__fadeOut");
			
		}

		// // dialog log scroll progress bar
		const progress = document.querySelector(".progress");
		const log = document.querySelector(".log");
		const cursor = document.querySelector(".progress-cursor");
		log.onscroll = function() {scrolling()};

		function scrolling() {
			console.log("scrolling");
			var logScroll = document.body.scrollTop || log.scrollTop;
			console.log(logScroll);
			var height = log.scrollHeight - log.clientHeight;
			console.log(height);
			if (height == 0) {
				progress.style.height = "0%";
				cursor.style.top = "0%";
			}
			else {
				var scrolled = (logScroll / height) * 100;
				console.log(scrolled);
				if (scrolled == 0) {
					cursor.style.top = "0%";
				}
				else {
					cursor.style.top = "-4%";
				}
				progress.style.height = scrolled + "%";
			}

		}

	});
});
