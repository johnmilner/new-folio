/* eslint-disable */

import S from 'skylake'
import jQuery from "jquery"


const Transition = {}

Transition.headerVisible = !0;
Transition.currentStep = 0
Transition.nextStep = 0


Transition.open = function() {

Transition.intro = new S.Timeline()
const isObj = S.Is.object(Transition.intro)
Transition.intro.from({el: '#sail', p: {y: [-100, 100]}, d: 5000, e: 'Power4InOut', delay: 7000})

Transition.outro = new S.Timeline()
const isObj2 = S.Is.object(Transition.outro)
Transition.outro.from({el: '#sail', p: {y: [100, -100]}, d: 5000, e: 'Power4InOut'})

Transition.arr = S.Geb.class("h-txt-title")
Transition.arrTitle = S.Geb.class("h-client")
Transition.arrText = S.Geb.class("h-txt-desc-txt")
Transition.arrBotTitle = S.Geb.class("h-bottom-title")
Transition.arrBotRole = S.Geb.class("h-bottom-value-r")
Transition.arrBotAgency = S.Geb.class("h-bottom-value-a")
Transition.arrBotYear = S.Geb.class('h-bottom-value-y')

Transition.arrPagiTopNo = S.Geb.class('h-pagi-top-no')
Transition.arrPagiBotNo = S.Geb.class('h-pagi-bottom-no')

Transition.arrTopPagiWrap = S.Geb.class('h-pagi-top-no-wrap')
Transition.arrTopTitleWrap = S.Geb.class('h-pagi-top-title-wrap')
Transition.arrBotPagiWrap = S.Geb.class('h-pagi-bottom-no-wrap')
Transition.arrBotTitleWrap = S.Geb.class('h-pagi-bottom-title-wrap')

Transition.pagiBottomMarkerWrap = S.Geb.id('h-pagi-bottom-marker-wrap')
Transition.pagiBottomMarker = S.Geb.id('h-pagi-bottom-marker')
Transition.pagiSocialWrap = S.Geb.id("h-pagi-social-wrap")

Transition.scrollInit()
}




    let debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
            };
    };

    function throttled(delay, fn) {
        let lastCall = 0;
        return function (...args) {
          const now = (new Date).getTime();
          if (now - lastCall < delay) {
            return;
          }
          lastCall = now;
          return fn(...args);
        }
      }

      function throttle(fn, threshhold, scope) {
        threshhold || (threshhold = 250);
        var last,
            deferTimer;
        return function () {
          var context = scope || this;
      
          var now = +new Date,
              args = arguments;
          if (last && now < last + threshhold) {
            // hold on to it
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
              last = now;
              fn.apply(context, args);
            }, threshhold);
          } else {
            last = now;
            fn.apply(context, args);
          }
        };
      }

    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = [37, 38, 39, 40];

    Transition.preventDefault = function(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
    }

    Transition.keydown = function(e) {
        for (var i = keys.length; i--;) {
            if (e.keyCode === keys[i]) {
                Transition.preventDefault(e);
                return;
            }
        }
    }

    Transition.wheel = function(e) {
    Transition.preventDefault(e);
    }

    Transition.disable_scroll = function() {
        const body = S.Dom.body
        S.Listen(body, 'remove', 'mouseWheel', Transition.headerScroll)

      }
      
     Transition.enable_scroll = function() {
        const body = S.Dom.body
        S.Listen(body, 'add', 'mouseWheel', Transition.headerScroll)
        

      }

   Transition.next = debounce(function() {
 
        Transition.disable_scroll() 
        Transition.nextStep = Transition.currentStep + 1
        console.log('scrolling down - nextItem')
        Transition.currentStep = Transition.nextStep 
        
        console.log('currentStep: ' + Transition.currentStep)
        console.log('nextStep: ' + Transition.nextStep)

        if (Transition.currentStep === 1) {

            Transition.imgReset()
        } 

        if (Transition.currentStep === 4) {

            console.log('index 4 recognitionUp')
            Transition.recognitionUp()
        } 

        if (Transition.currentStep === 5) {

            console.log('index 5 experienceUp')
            
            Transition.experienceUp()
        } 

        if (Transition.currentStep === 6) {

            console.log('index 6 socialUp')

            Transition.pagiFadeOut()
            
            
        } 

        if (Transition.currentStep > 6) {

            return Transition.currentStep = 6
                
        } 

        return Transition.currentStep
        
    }, 250);


    Transition.prev = debounce(function() {

        Transition.disable_scroll()
        Transition.nextStep = Transition.currentStep - 1
        //for cirular array
        //Transition.nextStep = (Transition.currentStep + Transition.arr.length - 1) % Transition.arr.length
        console.log('scrolling up - prevItem')
        Transition.currentStep = Transition.nextStep 
        

        console.log('currentStep: ' + Transition.currentStep)
        console.log('nextStep: ' + Transition.nextStep)

        // if (Transition.currentStep === -1) {

        //     console.log('index 0 header down')

        //     Transition.headerDown()

        // } 

        if (Transition.currentStep === 0) {

            Transition.imgResetIn()

        } 

        if (Transition.currentStep <= -1) {

            Transition.headerDown()
            return Transition.currentStep = -1
                
        } 

        if (Transition.currentStep === 3) {

            console.log('index 3 recognitionDown')
            Transition.recognitionDown()

            } 

        if (Transition.currentStep === 4) {

            console.log('index 4 experienceDown recognitionUp')

            
            Transition.experienceDown()
            } 

        if (Transition.currentStep === 5) {

            console.log('index 5 socialDown experienceUp')

            Transition.socialDown()
            } 

        return Transition.currentStep
        
    }, 250);
    

Transition.headerScroll = (currentScrollY, delta, event) => {

    var delta = null,
    currentScrollY = false,
    event = window.event;


    function offset(el) {
        var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    // example use
    var div = document.querySelector('.header');
    var divOffset = offset(div);
    console.log(divOffset.top)


    Transition.headerUp = function() {

        Transition.disable_scroll()
        Transition.headerUp = new S.Timeline()
        const isObj3 = S.Is.object(Transition.headerUp)
        Transition.headerUp.from({el: '.header', p: {y: [0, -100]}, d: 1300, e: 'Power4InOut'})
        Transition.headerUp.play({delay: 500, cb: Transition.titleInit})

        //console.log(divOffset.left, divOffset.top);

    };
    
    Transition.headerDown = function() {

        Transition.disable_scroll()
        Transition.headerDown = new S.Timeline()
        const isObj4 = S.Is.object(Transition.headerDown)
        Transition.headerDown.from({el: '.header', p: {y: [-100, 0]}, d: 1300, e: 'Power4InOut'})

        Transition.headerDown.from({el: Transition.arrBotTitle[0], p: {y: [0, 100]}, d: 600, e: 'Power4InOut'})
        Transition.headerDown.from({el: Transition.arrBotTitle[1], p: {y: [0, 100]}, d: 600, e: 'Power4InOut'})
        Transition.headerDown.from({el: Transition.arrBotTitle[2], p: {y: [0, 100]}, d: 600, e: 'Power4InOut'})

        Transition.headerDown.from({el: Transition.arrPagiTopNo[Transition.currentStep], p: {y: [0, -100]}, d: 1200, e: 'Power4InOut'})

        Transition.headerDown.from({el: '#h-pagi-line', p: {x: [0, -102]}, d: 600, e: 'Power4InOut'})
        Transition.headerDown.from({el: '#h-pagi-bottom-marker', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})

        //Transition.headerDown.from({el: "#h-img-0", p: {opacity: [1, 0], x:[0, 16]}, d: 1200, e: 'Power4InOut'})
        // Transition.headerDown.from({el: "#h-img-0-b", p: {opacity: [1, 0], x:[0, 4]}, d: 600, e: 'Power4InOut'})

        Transition.headerDown.play({delay: 500, cb: Transition.reset})
        //console.log(divOffset.left, divOffset.top);

    };

    Transition.titleInit = function() {
  
        Transition.currentStep = 0
        
        const textInit = new S.Timeline()
        const isObj5 = S.Is.object(textInit)
    
    
        textInit.from({el: Transition.arr[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
        console.log('title text')
        textInit.from({el: Transition.arrText[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
        textInit.from({el: Transition.arrTitle[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
    
        textInit.from({el: Transition.arrBotTitle[0], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
        textInit.from({el: Transition.arrBotTitle[1], p: {y: [100, 0]}, d: 1500, e: 'Power4InOut'})
        textInit.from({el: Transition.arrBotTitle[2], p: {y: [100, 0]}, d: 1800, e: 'Power4InOut'})
    
        textInit.from({el: Transition.arrBotRole[Transition.currentStep], p: {y: [100, 0]}, d: 1800, e: 'Power4InOut'})
        textInit.from({el: Transition.arrBotAgency[Transition.currentStep], p: {y: [100, 0]}, d: 1800, e: 'Power4InOut'})
        textInit.from({el: Transition.arrBotYear[Transition.currentStep], p: {y: [100, 0]}, d: 2000, e: 'Power4InOut'})
    
        textInit.from({el: '#h-txt-desc-line', p: {x: [-110, 0]}, d: 2800, e: 'Power4InOut'})

        Transition.arrTopPagiWrap[Transition.currentStep + 1].style.height = "auto";
        Transition.arrTopTitleWrap[Transition.currentStep + 1].style.height = "auto";

        textInit.from({el: Transition.arrPagiTopNo[Transition.currentStep + 1], p: {y: [-100, 0]}, d: 2800, e: 'Power4InOut'})

        textInit.from({el: '#h-pagi-line', p: {y: [-102, 0]}, d: 2000, e: 'Power4InOut'})
        textInit.from({el: '#h-pagi-bottom-marker', p: {y: [100, 0]}, d: 2800, e: 'Power4InOut'})

        textInit.from({el: "#h-img-" + Transition.currentStep, p: {opacity: [0, 1], x:[16, 0]}, d: 1200, e: 'Power4InOut'})
        textInit.from({el: "#h-img-0-b", p: {opacity: [0, 1], x:[4, 0]}, d: 1200, delay: 150, e: 'Power4InOut'})
    
        textInit.play({cb: setTimeout(Transition.enable_scroll, 4000)})
    
        };
    
       Transition.reset = function() {
    
        const elReset = new S.Timeline()
        const isObj15 = S.Is.object(elReset)
    
        elReset.from({el: '#h-txt-desc-line', p: {x: [0, -100]}, d: 1200, e: 'Power4InOut'})

        console.log('hello from Transition.reset')
        elReset.play()
        
    
       }
    
    Transition.imgReset = function() {

        const imgReset = new S.Timeline()
        const isObj23 = S.Is.object(imgReset)

        imgReset.from({el: "#h-img-0-b", p: {opacity: [1, 0], x:[0, 4]}, d: 600, e: 'Power4InOut'})
        imgReset.play()
    }

    Transition.imgResetIn = function() {

        const imgResetIn = new S.Timeline()
        const isObj24 = S.Is.object(imgResetIn)

        imgResetIn.from({el: "#h-img-0-b", p: {opacity: [0, 1], x:[4, 0]}, d: 600, delay: 2000, e: 'Power4InOut'})
        imgResetIn.play()
    }

    Transition.pagiOut = function() {
            
        for (var n = 7; n > Transition.currentStep + 1; n--) {
            Transition.arrTopPagiWrap[Transition.currentStep + 2].style.height = ""
            Transition.arrTopTitleWrap[Transition.currentStep + 2].style.height = ""
            
            }
            
            console.log('hello from pagiOut')
    }

    Transition.recognitionUp = function() {

        const recUp = new S.Timeline()
        const isObj16 = S.Is.object(recUp)

        recUp.from({el: '#h-resume', p: {y: [100, 0]}, d: 1200, e: 'Power3In'})
        recUp.from({el: '#h-reco-title', p: {y: [100, 0]}, d: 1200, e: 'Power4InOut', delay: 600})
        recUp.from({el: '.h-reco-txt-title', p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
        recUp.from({el: '.h-reco-txt-list', p: {y: [100, 0]}, d: 1200, e: 'Power4InOut', delay: 100})

        recUp.play()

   }

   Transition.recognitionDown = function() {

    const recDown = new S.Timeline()
    const isObj17 = S.Is.object(recDown)

    recDown.from({el: Transition.arrBotTitle[0], p: {y: [100, 0]}, d: 1800, e: 'Power4InOut'})
    recDown.from({el: Transition.arrBotTitle[1], p: {y: [100, 0]}, d: 2100, e: 'Power4InOut'})
    recDown.from({el: Transition.arrBotTitle[2], p: {y: [100, 0]}, d: 2400, e: 'Power4InOut'})

    recDown.from({el: '#h-resume', p: {y: [0, 100]}, d: 1200, e: 'Power3In'})
    recDown.from({el: '#h-reco-title', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
    recDown.from({el: '.h-reco-txt-list', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
    recDown.from({el: '.h-reco-txt-title', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})

    recDown.play()

    }

    Transition.experienceUp = function() {
        
        const xpUp = new S.Timeline()
        const isObj18 = S.Is.object(xpUp)

        xpUp.from({el: '#h-reco-title', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        xpUp.from({el: '.h-reco-txt-list', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        xpUp.from({el: '.h-reco-txt-title', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})

        xpUp.from({el: '.h-xp-title', p: {y: [100, 0]}, d: 1200, e: 'Power4InOut', delay: 500})
        xpUp.from({el: '#h-xp-list', p: {y: [100, 0]}, d: 1200, e: 'Power4InOut', delay: 500})
        xpUp.from({el: '#h-xp-txt', p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})

        xpUp.play()

   }

   Transition.experienceDown = function() {
        
    const xpDown = new S.Timeline()
    const isObj19 = S.Is.object(xpDown)

    xpDown.from({el: '.h-xp-title', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
    xpDown.from({el: '#h-xp-list', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
    xpDown.from({el: '#h-xp-txt', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})

    xpDown.from({el: '#h-reco-title', p: {y: [100, 0]}, d: 1200, e: 'Power4InOut', delay: 600})
    xpDown.from({el: '.h-reco-txt-list', p: {y: [100, 0]}, d: 1200, e: 'Power4InOut', delay: 100})
    xpDown.from({el: '.h-reco-txt-title', p: {y: [100, 0]}, d: 1200, e: 'Power4InOut', delay: 300})

    xpDown.play()


}

    Transition.socialUp = function() {

        const socUp = new S.Timeline()
        const isObj20 = S.Is.object(socUp)

        socUp.from({el: '.h-xp-title', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        socUp.from({el: '#h-xp-list', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        socUp.from({el: '#h-xp-txt', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})

        socUp.from({el: '#h-social', p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
        socUp.from({el: '#h-social-title', p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
        socUp.from({el: '.cf', p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})

        socUp.play({cb: Transition.showSocial})

    }

    Transition.socialDown = function() {

        const socDown = new S.Timeline()
        const isObj21 = S.Is.object(socDown)

        Transition.hideSocial()
        socDown.from({el: '#h-social', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        socDown.from({el: '#h-social-title', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        socDown.from({el: '.cf', p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})

        socDown.from({el: '.h-xp-title', p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
        socDown.from({el: '#h-xp-list', p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
        socDown.from({el: '#h-xp-txt', p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
        
        socDown.play({cb: Transition.pagiFadeIn, cbDelay: 600})
    }

    Transition.pagiFadeOut = function() {

        const pagiFadeOut = new S.Timeline()
        const isObj24 = S.Is.object(pagiFadeOut)

        pagiFadeOut.from({el: '#h-pagi-line', p: {x: [0, -102]}, d: 800, e: 'Power4InOut'})
        pagiFadeOut.from({el: '#h-pagi-bottom-marker', p: {y: [0, 100]}, d: 800, e: 'Power4InOut'})
        pagiFadeOut.play({cb: Transition.socialUp})
        console.log('hello from pagiFadeOut')
    }

    Transition.pagiFadeIn = function() {

        const pagiFadeIn = new S.Timeline()
        const isObj25 = S.Is.object(pagiFadeIn)

        pagiFadeIn.from({el: '#h-pagi-line', p: {x: [-102, 0]}, d: 800, e: 'Power4InOut'})
        pagiFadeIn.from({el: '#h-pagi-bottom-marker', p: {y: [100, 0]}, d: 800, e: 'Power4InOut'})
        pagiFadeIn.play()
        console.log('hello from pagiFadeIn')
    }

    Transition.showSocial = function() {
        const showSocial = new S.Timeline()
        const isObj26 = S.Is.object(showSocial)

        Transition.pagiSocialWrap.style.zIndex = 4;
        showSocial.from({el: '#h-pagi-social', p: {y: [100, 0]}, d: 1400, delay: 300, e: 'Power4InOut'})
        showSocial.play()
    }

    Transition.hideSocial = function() {
        const hideSocial = new S.Timeline()
        const isObj26 = S.Is.object(hideSocial)

        Transition.pagiSocialWrap.style.zIndex = -1;
        hideSocial.from({el: '#h-pagi-social', p: {y: [0, 100]}, d: 500, e: 'Power4In'})
        hideSocial.play()
    }

    Transition.pagiColor = function() {

        if (Transition.currentStep > 3) {
            Transition.pagiBottomMarkerWrap.style.transform = "translate3d(0,0,0)"
            Transition.arrPagiTopNo[Transition.currentStep + 1].style.color = "#fff";
            Transition.arrPagiTopNo[Transition.currentStep + 1].style.transition = "color 200ms";
            Transition.pagiBottomMarker.style.color = "#fff";
            Transition.pagiBottomMarker.style.transition = "color 200ms";
        }
    }

    Transition.n2 = function() {


        Transition.next()
        
        Transition.textInOut = new S.Timeline()
        const isObj8 = S.Is.object(Transition.textInOut)

        Transition.textInOut.from({el: '#h-txt-desc-line', p: {x: [0, -110]}, d: 1200, e: 'Power4InOut'})

        Transition.textInOut.from({el: Transition.arr[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        Transition.textInOut.from({el: Transition.arrText[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        Transition.textInOut.from({el: Transition.arrTitle[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})

        Transition.textInOut.from({el: Transition.arrBotRole[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        Transition.textInOut.from({el: Transition.arrBotAgency[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        Transition.textInOut.from({el: Transition.arrBotYear[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})

        Transition.textInOut.from({el: Transition.arrPagiTopNo[Transition.currentStep + 1], 
            p: {x: [0, -100]}, d: 1200, e: 'Power4InOut'})

        if (Transition.currentStep < 4) {
            Transition.textInOut.from({el: "#h-img-" + Transition.currentStep, p: {opacity: [1, 0], x:[0, 16]}, d: 1200, e: 'Power4InOut'})
        }

        if (Transition.currentStep <= 5) {
        Transition.arrTopPagiWrap[Transition.currentStep + 1].style.height = "auto";
        Transition.arrTopTitleWrap[Transition.currentStep + 1].style.height = "auto";
        }

 
        Transition.textInOut.play({ cb: function() {

        
            Transition.textIn2 = new S.Timeline()
            const isObj9 = S.Is.object(Transition.textIn2)
            const t = -1

            Transition.textIn2.from({el: '#h-txt-desc-line', p: {x: [-110 * t, 0]}, d: 1200, e: 'Power4InOut'})

            Transition.textIn2.from({el: Transition.arr[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
            Transition.textIn2.from({el: Transition.arrText[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
            Transition.textIn2.from({el: Transition.arrTitle[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})

            Transition.textIn2.from({el: Transition.arrBotRole[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
            Transition.textIn2.from({el: Transition.arrBotAgency[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
            Transition.textIn2.from({el: Transition.arrBotYear[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})

            Transition.textIn2.from({el: Transition.arrPagiTopNo[Transition.currentStep + 1], p: {x: [100, 0]}, d: 1200, e: 'Power4InOut'})

            if (Transition.currentStep < 4) {
                Transition.textIn2.from({el: "#h-img-" + Transition.currentStep, p: {opacity: [0, 1], x:[16, 0]}, d: 1200, e: 'Power4InOut'})
                } 

            if (Transition.currentStep <= 5) {
            Transition.arrTopPagiWrap[Transition.currentStep + 1].style.height = "auto";
            Transition.arrTopTitleWrap[Transition.currentStep + 1].style.height = "auto";
            }
        
            Transition.pagiColor()

            Transition.textIn2.play({cb: setTimeout(Transition.enable_scroll, 3000)})

            }
        })

    }

    Transition.p2 = function() {

        Transition.prev()

        Transition.textOutIn = new S.Timeline()
        const isObj10 = S.Is.object(Transition.textOutIn)
        const t = -1

        Transition.textOutIn.from({el: '#h-txt-desc-line', p: {x: [0, -110 * t]}, d: 1200, e: 'Power4InOut'})

        Transition.textOutIn.from({el: Transition.arr[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        Transition.textOutIn.from({el: Transition.arrText[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        Transition.textOutIn.from({el: Transition.arrTitle[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})


        Transition.textOutIn.from({el: Transition.arrBotRole[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        Transition.textOutIn.from({el: Transition.arrBotAgency[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})
        Transition.textOutIn.from({el: Transition.arrBotYear[Transition.currentStep], p: {y: [0, 100]}, d: 1200, e: 'Power4InOut'})

        
        Transition.textOutIn.from({el: Transition.arrPagiTopNo[Transition.currentStep + 1],
            p: {x: [0, 100]}, d: 1200, e: 'Power4InOut'})
        

        if (Transition.currentStep < 4) {
        Transition.textOutIn.from({el: "#h-img-" + Transition.currentStep, p: {opacity: [1, 0], x:[0, 16]}, d: 1200, e: 'Power4InOut'})
        }

        if (Transition.currentStep === 0) {
            Transition.imgReset()
        }
        
        Transition.textOutIn.play({cb: function() {

                setTimeout(Transition.pagiOut, 300)
                
                Transition.textOut2 = new S.Timeline()
                const isObj11 = S.Is.object(Transition.textOut2)

                Transition.textOut2.from({el: '#h-txt-desc-line', p: {x: [-110, 0]}, d: 1200, e: 'Power4InOut'})

                Transition.textOut2.from({el: Transition.arr[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
                Transition.textOut2.from({el: Transition.arrText[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
                Transition.textOut2.from({el: Transition.arrTitle[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})

                Transition.textOut2.from({el: Transition.arrBotRole[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
                Transition.textOut2.from({el: Transition.arrBotAgency[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})
                Transition.textOut2.from({el: Transition.arrBotYear[Transition.currentStep], p: {y: [100, 0]}, d: 1200, e: 'Power4InOut'})

                
                Transition.textOut2.from({el: Transition.arrPagiTopNo[Transition.currentStep + 1], p: {x: [-100, 0]}, d: 1200, e: 'Power4InOut'})
                

                if (Transition.currentStep < 4 && Transition.currentStep > -1) {
                    Transition.arrPagiTopNo[Transition.currentStep + 1].style.color = "";
                    Transition.pagiBottomMarker.style.color = "";
                }

                if (Transition.currentStep < 4 && Transition.currentStep > -1) {
                Transition.textOut2.from({el: "#h-img-" + Transition.currentStep, p: {opacity: [0, 1], x:[16, 0]}, d: 1200, e: 'Power4InOut'})
                }
                
                Transition.textOut2.play({cb: setTimeout(Transition.enable_scroll, 3000)})
        
        }})

    }


    if ( !event ) { // if the event is not provided, we get it from the window object
        event = window.event;
    }
    if ( event.wheelDelta ) { // will work in most cases
        delta = event.wheelDelta / 60;
    } else if ( event.detail ) { // fallback for Firefox
        delta = -event.detail / 2;
    }
    if ( delta !== null) {
        
        if (delta < 0 && divOffset.top === 30) {
            
            Transition.headerUp()

        } else if (delta > 0 && divOffset.top < -600) {

            Transition.p2()


        } else if (delta < 0 && divOffset.top < -600) {

            Transition.n2()
            
        } 

    }
}


Transition.scrollInit = () => {
    const body = S.Dom.body
    //S.BindMaker(this, ['Transition.headerScroll'])
    //S.scroll = new S.Scroll(Transition.headerScroll)
    S.Listen(body, 'add', 'mouseWheel', Transition.headerScroll)

    
    // this.scroll.on()
    // this.scroll.off()
    console.log('hello from scroll init')
}

console.log('transition.js')

export default Transition
