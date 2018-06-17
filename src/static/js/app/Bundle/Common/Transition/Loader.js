/* eslint-disable */

import JQuery from 'jquery'
import S from 'skylake'


// let t = {}
// t.arrLayerMask = S.Geb.class("loader-mask")

const intro = function() {
  const tl = new S.Timeline()
  const isObj = S.Is.object(tl)


  tl.from({el: '.header', p: {scale: [1.1, 1]}, d: 2000, e: 'Power4InOut'})
  tl.from({el: '#burger-border-wrap', p: {opacity: [0, .6]}, d: 1500, e: 'ExpoOut', delay: 250})
  tl.from({el: '.burger-line-hover', p: {x: [105, 0]}, d: 1000, e: 'ExpoOut', delay: 250})
  tl.from({el: '#burger-mask', p: {y: [100, -100]}, d: 2000, e: 'ExpoOut', delay: 750})

  tl.from({el: '#sail', p: {y: [0, -100]}, d: 1500, delay: 50, e: 'Power4InOut'})

  // tl.from({el: '.loader-mask-0', p: {y: [0, -100], opacity:[1,0]}, d: 1e3, delay: 50, e: 'Power4InOut'})
  // tl.from({el: '.loader-mask-1', p: {y: [0, -100], opacity:[1,0]}, d: 1e3, delay: 100, e: 'Power4InOut'})
  // tl.from({el: '.loader-mask-2', p: {y: [0, -100], opacity:[1,0]}, d: 1e3, delay: 150, e: 'Power4InOut'})
  // tl.from({el: '.loader-mask-3', p: {y: [0, -100], opacity:[1,0]}, d: 1e3, delay: 200, e: 'Power4InOut'})

  tl.from({el: '.header', p: {opacity: [0, 1]}, d: 250, e: 'ExpoIn'})
  tl.from({el: '.tagline', p: {y: [100, 0]}, d: 1600, e: 'Power4InOut'})
  tl.from({el: '.scroll-icon', p: {opacity: [0, 1]}, d: 1200, e: 'Power4InOut'})
  
  tl.play()
}


anime.timeline({ loop: false })
      .add({
        targets: ".ml8 .circle-white",
        scale: [0, 3],
        opacity: [1, 0],
        easing: "easeInOutExpo",
        rotateZ: 360,
        duration: 1100,
        delay: 3000
      })
      .add({
        targets: ".ml8 .circle-container",
        scale: [0, 1],
        duration: 1100,
        easing: "easeInOutExpo",
        offset: "-=1000"
      })
      .add({
        targets: ".ml8 .circle-dark",
        scale: [0, 1],
        duration: 1100,
        easing: "easeOutExpo",
        offset: "-=600"
      })
      .add({
        targets: ".ml8 .letters-left",
        scale: [0, 1],
        duration: 1200,
        offset: "-=550"
      })
      .add({
        targets: ".ml8 .bang",
        scale: [0, 1],
        rotateZ: [45, 15],
        duration: 1200,
        offset: "-=1000"
      })
      .add({
        targets: ".ml8",
        opacity: 1,
        duration: 2000,
        easing: "easeOutExpo",
        delay: 300
      })
      
    anime({
      targets: ".ml8 .circle-dark-dashed",
      rotateZ: 360,
      duration: 5000,
      easing: "linear",
      loop: true
    });

const Loader = {}

Loader.run = function() {
    var preloaderFadeOutTime = 2500;
    function hidePreloader() {
      var preloader = $(".spinner");
      preloader.delay(2300).show(); //show preloader - see spinner css
      preloader.delay(2300).fadeOut(preloaderFadeOutTime, intro);
    }
    hidePreloader(); 
  };

//Loader.run()
console.log('loader.js')



export default Loader