"use strict";

/* # Slideshow # */

let current_slide = 1;

function slide(destination) {

    if (destination != current_slide) {

        // slide out
        let current_slide_elmnt = document.querySelector(`.slides>div:nth-of-type(${current_slide})`);
        current_slide_elmnt.style.zIndex = '2';
        current_slide_elmnt.style.animation = 'fade_out .5s ease-in-out both';

        setTimeout(() => {
            current_slide_elmnt.style.display = 'none';
        }, 500);

        // slide in
        let destination_slide_elmnt = document.querySelector(`.slides>div:nth-of-type(${destination})`);
        current_slide_elmnt.style.zIndex = '3 !important';
        destination_slide_elmnt.style.display = 'flex';
        destination_slide_elmnt.style.animation = 'fade_in .5s ease-in-out both';

        // controls update
        document.querySelector(`#slideshow .controls button:nth-of-type(${current_slide})`).classList.remove('active');
        document.querySelector(`#slideshow .controls button:nth-of-type(${destination})`).classList.add('active');

        // update vars

        current_slide = destination;

    }

}