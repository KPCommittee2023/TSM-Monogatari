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
	<div
		style="width: 484.08px; height: 484.08px; left: 604.08px; top: -172px; position: absolute; transform: rotate(90deg); transform-origin: 0 0">
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -5.88px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -0px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -32.04px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -26.17px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -58.21px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -52.33px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -84.38px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -78.50px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -110.54px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -104.67px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -136.71px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -130.83px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -162.88px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -157px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -189.04px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -183.17px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -215.21px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -209.33px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -241.38px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -235.50px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -267.54px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -261.67px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -293.71px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -287.83px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -319.88px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -314px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -346.04px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -340.17px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -372.21px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -366.33px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -398.38px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -392.50px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -424.54px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -418.67px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -450.71px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -444.83px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 13.08px; height: 1.33px; left: -476.88px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
		<div
			style="width: 1.33px; height: 13.08px; left: -471px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white">
		</div>
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
	



monogatari.component('settings-screen').template(() => {
	return `

	
    <button class="top left" data-action="back">
        <svg class="svg-inline--fa fa-arrow-left fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas"
            data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
            <path fill="currentColor"
                d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z">
            </path>
        </svg> <!-- <span class="fas fa-arrow-left"></span> Font Awesome fontawesome.com --></button>
		
	<div style="width: 1920px; height: 1080px; position: relative; background: #2E72C1; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
	<div style="width: 1997px; height: 1405px; left: -81px; top: -319px; position: absolute">
	  <img style="width: 1938px; height: 1080px; left: 59px; top: 325px; position: absolute" src="https://via.placeholder.com/1938x1080" />
	  <div style="width: 484.08px; height: 484.08px; left: 484.08px; top: 0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0">
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -5.88px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -0px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -32.04px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -26.17px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -58.21px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -52.33px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -84.38px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -78.50px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -110.54px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -104.67px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -136.71px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -130.83px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -162.88px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -157px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -189.04px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -183.17px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -215.21px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -209.33px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -241.38px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -235.50px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -267.54px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -261.67px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -293.71px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -287.83px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -319.88px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -314px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -346.04px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -340.17px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -372.21px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -366.33px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -398.38px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -392.50px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -424.54px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -418.67px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -450.71px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -444.83px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: -0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 5.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 26.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 32.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 52.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 58.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 78.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 84.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 104.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 110.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 130.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 136.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 157px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 162.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 183.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 189.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 209.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 215.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 235.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 241.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 261.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 267.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 287.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 293.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 314px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 319.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 340.17px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 346.04px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 366.33px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 372.21px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 392.50px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 398.38px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 418.67px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 424.54px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 444.83px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 450.71px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 13.08px; height: 1.33px; left: -476.88px; top: 471px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
		<div style="width: 1.33px; height: 13.08px; left: -471px; top: 476.88px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: white"></div>
	  </div>
	  <div style="width: 384px; height: 78.70px; left: 334px; top: 1031.30px; position: absolute">
		<div style="width: 384px; height: 78.70px; left: 0px; top: 0px; position: absolute">
		  <div style="width: 47.73px; height: 49.50px; left: 47.33px; top: 0px; position: absolute; transform: rotate(45.79deg); transform-origin: 0 0; background: #2E72C1; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 3px white solid"></div>
		  <div style="width: 19.40px; height: 20.12px; left: 14.42px; top: 20.70px; position: absolute; transform: rotate(45.79deg); transform-origin: 0 0; background: #498FCD; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 3px white solid"></div>
		  <div style="width: 343px; height: 75px; left: 41px; top: 3.70px; position: absolute">
			<div style="width: 333.04px; height: 62.17px; left: 9.96px; top: 12.83px; position: absolute; background: #76BDE0; box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25); border-radius: 30px"></div>
			<div style="width: 333.82px; height: 62.59px; left: 0px; top: 0px; position: absolute; background: white; border-radius: 31.30px; border: 4px #478DCC solid"></div>
		  </div>
		</div>
		<div style="width: 207px; height: 41px; left: 121px; top: 12.70px; position: absolute; color: #2E72C1; font-size: 32px; font-family: Nunito; font-weight: 800; word-wrap: break-word">Kyo Kaneko</div>
	  </div>
	  <div style="width: 1453px; height: 243px; left: 289px; top: 1110px; position: absolute">
		<div style="width: 1391px; height: 214px; left: 41px; top: 12px; position: absolute; opacity: 0.90; background: linear-gradient(0deg, #10588A 0%, #2D6CB5 79%, #22A2FF 100%); box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25)"></div>
		<img style="width: 1391px; height: 214px; left: 41px; top: 12px; position: absolute; opacity: 0.20; mix-blend-mode: soft-light; border-radius: 11px" src="https://via.placeholder.com/1391x214" />
		<div style="width: 1397px; height: 220px; left: 38px; top: 9px; position: absolute; opacity: 0.90; background: white; border: 3px #2E72C1 solid"></div>
		<div style="width: 29.30px; height: 33.27px; left: 1382px; top: 175px; position: absolute; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
		  <div style="width: 26.32px; height: 22.35px; left: 25.83px; top: 3.48px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: #E5E5E5; border: 1px #A2A2A2 solid"></div>
		  <div style="width: 33.27px; height: 29.30px; left: 29.30px; top: 0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: #2E72C1; border: 1px #E5E5E5 solid"></div>
		</div>
		<div style="width: 1419px; height: 48px; left: 17px; top: 181px; position: absolute; text-align: center; color: white; font-size: 20px; font-family: Nunito; font-weight: 700; word-wrap: break-word">Back   Hide   Log   Auto   Save   Load   Settings   Quit<br/></div>
		<div style="width: 1239px; height: 185px; left: 117px; top: 45px; position: absolute; color: white; font-size: 28px; font-family: Nunito; font-weight: 600; line-height: 35.11px; word-wrap: break-word">Player goes to school. Player sees a wall of posters advertising various clubs. The Radio Club poster pointing to a nearby classroom catches their eye the most. The Radio Club poster pointing to a nearby classroom catches their eye the most. </div>
	  </div>
	  <div style="width: 60.05px; height: 60.05px; left: 136px; top: 373px; position: absolute; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
		<div style="width: 64.05px; height: 64.05px; left: -2px; top: -2px; position: absolute">
		  <div style="width: 54.05px; height: 54.05px; left: 5px; top: 5px; position: absolute; background: white"></div>
		  <div style="width: 54.05px; height: 54.05px; left: 5px; top: 5px; position: absolute; background: #2E72C1"></div>
		  <div style="width: 64.05px; height: 64.05px; left: 0px; top: 0px; position: absolute; background: #2E72C1"></div>
		  <div style="width: 60.05px; height: 60.05px; left: 2px; top: 2px; position: absolute; background: white"></div>
		</div>
		<div style="width: 26.25px; height: 26.25px; left: 16.90px; top: 16.90px; position: absolute; background: white"></div>
	  </div>
	  <div style="width: 61.05px; height: 61.05px; left: 1891px; top: 371px; position: absolute; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
		<div style="width: 54.05px; height: 54.05px; left: 3.50px; top: 3.50px; position: absolute; background: #2E72C1"></div>
		<div style="width: 65.05px; height: 65.05px; left: -2px; top: -2px; position: absolute">
		  <div style="width: 16.99px; height: 31.64px; left: 16.93px; top: 16.71px; position: absolute; background: white"></div>
		  <div style="width: 10.66px; height: 19.77px; left: 37.47px; top: 22.64px; position: absolute">
			<div style="width: 6.95px; height: 12.35px; left: -0px; top: 3.71px; position: absolute; background: white"></div>
			<div style="width: 10.66px; height: 19.77px; left: 0px; top: 0px; position: absolute; background: white"></div>
		  </div>
		  <div style="width: 65.05px; height: 65.05px; left: 0px; top: 0px; position: absolute; background: #2E72C1"></div>
		  <div style="width: 61.05px; height: 61.05px; left: 2px; top: 2px; position: absolute; background: white"></div>
		</div>
	  </div>
	</div>
	<img style="width: 1941.33px; height: 1092px; left: -10.67px; top: -6px; position: absolute; box-shadow: 0px 4px 4px #83CBE5 inset; border: 4px #2E72C1 solid" src="https://via.placeholder.com/1941x1092" />
	<div style="width: 1585px; height: 925.13px; left: 151px; top: 111.87px; position: absolute">
	  <div style="width: 1557.13px; height: 856.25px; left: 27.87px; top: 0px; position: absolute; background: rgba(46, 114, 193, 0.90)"></div>
	  <img style="width: 1553.76px; height: 855.41px; left: 31.24px; top: 0.84px; position: absolute; opacity: 0.20; mix-blend-mode: soft-light; border-radius: 11px" src="https://via.placeholder.com/1554x855" />
	  <div style="width: 1174.61px; height: 180.71px; left: 0px; top: 68.40px; position: absolute; opacity: 0.20; mix-blend-mode: soft-light; border-radius: 11px"></div>
	  <div style="width: 1557.13px; height: 856.25px; left: 27.87px; top: 0px; position: absolute; background: white; border: 3px #2E72C1 solid"></div>
	  <div style="width: 29.30px; height: 33.27px; left: 1527px; top: 798.13px; position: absolute; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
		<div style="width: 26.32px; height: 22.35px; left: 25.83px; top: 3.48px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: #E5E5E5; border: 1px #A2A2A2 solid"></div>
		<div style="width: 33.27px; height: 29.30px; left: 29.30px; top: 0px; position: absolute; transform: rotate(90deg); transform-origin: 0 0; background: #2E72C1; border: 1px #E5E5E5 solid"></div>
	  </div>
	  <div style="width: 688px; height: 232px; left: 86px; top: 88.13px; position: absolute; opacity: 0.70; background: linear-gradient(348deg, #90CAFF 0%, #7FD6FA 100%); box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.50); border-radius: 60px; border: 5px white solid"></div>
	  <div style="width: 727px; height: 561px; left: 806px; top: 88.13px; position: absolute; opacity: 0.70; background: linear-gradient(348deg, #90CAFF 0%, #7FD6FA 100%); box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.50); border-radius: 60px; border: 5px white solid"></div>
	  <div style="width: 578px; height: 85px; left: 123px; top: 56.13px; position: absolute; color: white; font-size: 40px; font-family: Nunito; font-weight: 900; letter-spacing: 3.40px; word-wrap: break-word">Language</div>
	  <div style="width: 578px; height: 85px; left: 860px; top: 54.13px; position: absolute; color: white; font-size: 40px; font-family: Nunito; font-weight: 900; letter-spacing: 3.40px; word-wrap: break-word">Volume</div>
	  <div style="width: 657px; height: 61.05px; left: 843px; top: 162.13px; position: absolute">
		<div style="width: 638.31px; height: 42px; left: 18.69px; top: 17px; position: absolute; background: #2E72C1; box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25); border-radius: 56.57px; border: 3px white solid"></div>
		<div style="width: 627.92px; height: 41.85px; left: 18.69px; top: 10px; position: absolute; background: white; border-radius: 56.57px; border: 5px #2E72C1 solid"></div>
		<div style="width: 175px; height: 42px; left: 19px; top: 10px; position: absolute; background: linear-gradient(90deg, #2E72C1 0%, #4F9BD8 54%, #7FD6FA 100%); border-radius: 56.57px; border: 3px #2E72C1 solid"></div>
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
		<div style="width: 638.31px; height: 42px; left: 18.69px; top: 17px; position: absolute; background: #2E72C1; box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25); border-radius: 56.57px; border: 3px white solid"></div>
		<div style="width: 627.92px; height: 41.85px; left: 18.69px; top: 10px; position: absolute; background: white; border-radius: 56.57px; border: 5px #2E72C1 solid"></div>
		<div style="width: 547px; height: 42px; left: 19px; top: 10px; position: absolute; background: linear-gradient(90deg, #2E72C1 0%, #4F9BD8 54%, #7FD6FA 100%); border-radius: 56.57px; border: 3px #2E72C1 solid"></div>
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
		<div style="width: 638.31px; height: 42px; left: 18.69px; top: 17px; position: absolute; background: #2E72C1; box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25); border-radius: 56.57px; border: 3px white solid"></div>
		<div style="width: 627.92px; height: 41.85px; left: 18.69px; top: 10px; position: absolute; background: white; border-radius: 56.57px; border: 5px #2E72C1 solid"></div>
		<div style="width: 422px; height: 42px; left: 19px; top: 10px; position: absolute; background: linear-gradient(90deg, #2E72C1 0%, #4F9BD8 54%, #7FD6FA 100%); border-radius: 56.57px; border: 3px #2E72C1 solid"></div>
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
		<div style="width: 638.31px; height: 42px; left: 18.69px; top: 17px; position: absolute; background: #2E72C1; box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25); border-radius: 56.57px; border: 3px white solid"></div>
		<div style="width: 627.92px; height: 41.85px; left: 18.69px; top: 10px; position: absolute; background: white; border-radius: 56.57px; border: 5px #2E72C1 solid"></div>
		<div style="width: 33px; height: 42px; left: 19px; top: 10px; position: absolute; background: linear-gradient(90deg, #2E72C1 0%, #4F9BD8 54%, #7FD6FA 100%); border-radius: 56.57px; border: 3px #2E72C1 solid"></div>
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
		  <div style="width: 612.40px; height: 42px; left: 0px; top: 7px; position: absolute; background: #2E72C1; box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25); border-radius: 56.57px; border: 3px white solid"></div>
		  <div style="width: 602.43px; height: 41.85px; left: 0px; top: 0px; position: absolute; background: white; border-radius: 56.57px; border: 5px #2E72C1 solid"></div>
		  <div style="width: 357.17px; height: 42px; left: 0px; top: 0px; position: absolute; background: linear-gradient(90deg, #2E72C1 0%, #4F9BD8 54%, #7FD6FA 100%); border-radius: 56.57px; border: 3px #2E72C1 solid"></div>
		</div>
		<div style="width: 612.40px; height: 49px; left: 34.91px; top: 234px; position: absolute">
		  <div style="width: 612.40px; height: 42px; left: 0px; top: 7px; position: absolute; background: #2E72C1; box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25); border-radius: 56.57px; border: 3px white solid"></div>
		  <div style="width: 602.43px; height: 41.85px; left: 0px; top: 0px; position: absolute; background: white; border-radius: 56.57px; border: 5px #2E72C1 solid"></div>
		  <div style="width: 253.83px; height: 42px; left: 0px; top: 0px; position: absolute; background: linear-gradient(90deg, #2E72C1 0%, #4F9BD8 54%, #7FD6FA 100%); border-radius: 56.57px; border: 3px #2E72C1 solid"></div>
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
	<div style="width: 414.61px; height: 79px; left: 735px; top: 80px; position: absolute">
	  <div style="width: 414.61px; height: 79px; left: 0px; top: 0px; position: absolute">
		<div style="width: 47.73px; height: 49.50px; left: 47.33px; top: 0px; position: absolute; transform: rotate(45.79deg); transform-origin: 0 0; background: #2E72C1; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 3px white solid"></div>
		<div style="width: 19.40px; height: 20.12px; left: 14.42px; top: 20.70px; position: absolute; transform: rotate(45.79deg); transform-origin: 0 0; background: #498FCD; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 3px white solid"></div>
		<div style="width: 47.73px; height: 49.50px; left: 367.28px; top: 0px; position: absolute; transform: rotate(134.21deg); transform-origin: 0 0; background: #2E72C1; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 3px white solid"></div>
		<div style="width: 19.40px; height: 20.12px; left: 400.19px; top: 20.70px; position: absolute; transform: rotate(134.21deg); transform-origin: 0 0; background: #498FCD; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 3px white solid"></div>
		<div style="width: 333.82px; height: 75.30px; left: 41px; top: 3.70px; position: absolute">
		  <div style="width: 318px; height: 62px; left: 10px; top: 13.30px; position: absolute; background: #76BDE0; border-radius: 30px"></div>
		  <div style="width: 333.82px; height: 62.59px; left: 0px; top: 0px; position: absolute; background: white; border-radius: 31.30px; border: 4px #478DCC solid"></div>
		</div>
	  </div>
	  <div style="width: 327px; height: 41px; left: 45px; top: 13px; position: absolute; text-align: center; color: #2E72C1; font-size: 32px; font-family: Nunito; font-weight: 800; word-wrap: break-word">Settings</div>
	</div>
  </div>
`});





monogatari.component('main-menu').template(() => {
	return `
<!--	
	<button data-action="start" icon="undefined" string="Start" tabindex="0">
		<span class="undefined"></span>
		<span data-string="Start">Start</span>
	</button>
	
	<button data-action="open-screen" data-open="load" icon="undefined" string="Load" tabindex="0">
		<span class="undefined"></span>
		<span data-string="Load">Load</span>
	</button> 
	
	<button data-action="open-screen" data-open="settings" icon="undefined" string="Settings" tabindex="0">
		<span class="undefined"></span>
		<span data-string="Settings">Settings</span>
	</button> 
	
	<button data-action="open-screen" data-open="help" icon="undefined" string="Help" tabindex="0">
		<span class="undefined"></span>
		<span data-string="Help">Help</span>
	</button>
-->
		`
});


$_ready (() => {
	// 2. Inside the $_ready function:

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:

	});
});
