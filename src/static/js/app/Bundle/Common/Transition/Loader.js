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
  //tl.from({el: '.tagline', p: {y: [100, 0]}, d: 1600, e: 'Power4InOut'})
  tl.from({el: '.scroll-icon', p: {opacity: [0, 1]}, d: 1200, delay: 2000, e: 'Power4InOut'})

  tl.play()
}


const Loader = {}

Loader.pr = new S.Timeline()
const isObj = S.Is.object(Loader.pr)
const t = -1

Loader.pr.from({el: ".loader-line", p: { y: [100, 100 * t] }, d: 2500, e: "Power4InOut"});


Loader.run = function() {

    Loader.pr.play({cb: intro})
 
};

console.log('loader.js')



export default Loader