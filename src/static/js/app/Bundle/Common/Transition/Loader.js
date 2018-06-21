/* eslint-disable */

import JQuery from 'jquery'
import S from 'skylake'

const intro = function() {
  const tl = new S.Timeline()
  const isObj = S.Is.object(tl)


  tl.from({el: '#sail', p: {x: [0, 100]}, d: 1500, e: 'Power4InOut'})
  tl.from({el: '.header', p: {opacity: [0, 1], scale: [1.1, 1]}, d: 250, e: 'ExpoIn'})
  //tl.from({el: '.tagline', p: {y: [100, 0]}, d: 1600, e: 'Power4InOut'})
  tl.from({el: '.scroll-icon-wrap', p: {opacity: [0, 1], y: [100, 0]}, d: 1500, e: 'Power4InOut', delay: 500})
  tl.from({el: '#burger-border-wrap', p: {opacity: [0, .6]}, d: 1500, e: 'ExpoOut', delay: 200})
  tl.from({el: '.burger-line-hover', p: {x: [105, 0]}, d: 1000, e: 'ExpoOut', delay: 500})
  tl.from({el: '#burger-mask', p: {y: [100, -100]}, d: 2000, e: 'ExpoOut', delay: 750})

  tl.play()
}


const Loader = {}

Loader.pr = new S.Timeline()
const isObj = S.Is.object(Loader.pr)
const t = -1

Loader.pr.from({el: ".loader-line", p: { y: [100, 100 * t] }, d: 4000, e: "ExpoOut", delay: 600});


Loader.run = function() {

    Loader.pr.play({cb: intro})

};

console.log('loader.js')



export default Loader