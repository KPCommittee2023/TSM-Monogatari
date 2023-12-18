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

	
<div style="position:relative;"> 
<div
	style="width: 1920px; height: 1080px; position: relative; background: #2E72C1; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"; overflow:hidden;  >
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
		<div
			style="width: 276px; height: 58px; left: 1551px; top: 576px; position: absolute; color: white; font-size: 40px; font-family: Nunito; font-weight: 900; letter-spacing: 3.40px; word-wrap: break-word">
			Settings<br /></div>
		<div
			style="width: 276px; height: 58px; left: 1551px; top: 642px; position: absolute; color: white; font-size: 40px; font-family: Nunito; font-weight: 900; letter-spacing: 3.40px; word-wrap: break-word">
			Quit<br /><br /><br /></div>
		<div
			style="width: 678px; height: 1356px; left: 761px; top: 561px; position: absolute; flex-direction: column; justify-content: center; align-items: center; display: inline-flex">
			<img style="width: 678px; height: 1356px" src=" ./assets/fromfigma/893af70dcdcc7dccae6bd9b63726d428.png " />
		</div>
		<div
			style="width: 270.03px; height: 280.06px; left: 1825.74px; top: 818px; position: absolute; transform: rotate(45.79deg); transform-origin: 0 0; background: #C1E6FF; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); border: 5px white solid">
		</div>
		<div style="width: 183px; height: 42px; left: 1482px; top: 378px; position: absolute">
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
		<div
			style="width: 139px; height: 77px; left: 1683px; top: 378px; position: absolute; color: white; font-size: 36px; font-family: Nunito; font-weight: 900; letter-spacing: 3.06px; word-wrap: break-word">
			/ Load</div>
		
</div>
</div>


		<main-menu></main-menu>
		`;
	});
	

// BEGIN: make the buttons at main-menu(landing page)

// END: make the buttons at main-menu(landing page)




// BEGIN: make the buttons at settings-screen

// END: make the buttons at settings-screen
monogatari.component('main-menu').template(() => {
	return `

	
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

		`
});


$_ready (() => {
	// 2. Inside the $_ready function:

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:

	});
});
