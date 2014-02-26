// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.

// To enable Swipe JS uncomment the code below
// ===========================================
// var $nextSlide = $('#js-swipe-next'),
// 		$bullets = $('#bullets li'),
// 		$prevSlide = $('#js-swipe-prev');

// window.mySwipe = new Swipe(document.getElementById('slider'), {
//   startSlide: 0,
//   continuous: true,
//   disableScroll: false,
//   stopPropagation: false,
//   callback: function(position) {
//     var i = $bullets.length;
//     while (i--) {
//       $bullets[i].className = " ";
//     }
//     $bullets[position].className = "active";
//   },
//   transitionEnd: function(index, elem) {}
// });

// // Slide Control
// $nextSlide.on('click', function(){
// 	mySwipe.next();
// });

// $prevSlide.on('click', function(){
// 	mySwipe.prev();
// });

// $('#js-slide-one').on('click', function() {
//   mySwipe.slide(0);
// })
// $('#js-slide-two').on('click', function() {
//   mySwipe.slide(1);
// })
// $('#js-slide-three').on('click', function() {
//   mySwipe.slide(2);
// })

