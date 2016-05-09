function handleScroll(){

    if (window.XMLHttpRequest){
        var offset = window.pageYOffset
                   ? window.pageYOffset
                   : document.documentElement.scrollTop;
        document.getElementById('naviposition').className =
            (offset > 340 ? 'fixed' : '');
    }
}

if (window.addEventListener){
  window.addEventListener('scroll', handleScroll, false);
}
else{
  window.attachEvent('onscroll', handleScroll);
}

window.onscroll = function (){
    scrollHandler();
    
}
function scrollHandler (){
    if (window.pageYOffset > 380) {
        document.getElementById('navdeskposition').className = 'fix';
    }
    else{
        document.getElementById('navdeskposition').className = ''; 
    }
}


//<![CDATA[
    window.addEventListener("load", function() {
        
        scrollTo = function(element, to, duration) {
            
            var start = element,
                change = to - element,
                currentTime = 0,
                increment = 20;
            var animateScroll = function() {
                currentTime += increment;
                var val = Math.easeInOutQuint(currentTime, start, change, duration);
                window.scroll(0, val);
                if (currentTime < duration) {
                    setTimeout(animateScroll, increment);
                }
            };
            animateScroll();
        };
        var backToTop = document.getElementById("scrolltotop");
        document.addEventListener('scroll', function() {
        (window.pageYOffset > 100) ? backToTop.className = 'show' : backToTop.className = '';
                if (window.pageYOffset > 1000) {
                    backToTop.className = 'show-out';
                }
        });
        backToTop.addEventListener('click', function() {
            scrollTo(window.pageYOffset, 0, 1500)
        });

        Math.easeInOutQuint = function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        };
    });
//]]>