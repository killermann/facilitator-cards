//@prepros-prepend plugins/flickity.pkgd.min.js
//@prepros-prepend plugins/vanilla-tilt.min.js
//@prepros-prepend plugins/wow.min.js

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  wrapAround: true,
  autoPlay: true,
  pageDots: false
});

VanillaTilt.init(document.querySelectorAll(".aside .card"), {
	glare: true,
    reset: false
});

wow = new WOW({
  animateClass: 'animated-wow', // default
})

wow.init();

window.onscroll = function changeNav(){
    var navBar = document.getElementById('masthead');
    var scrollPosY = window.pageYOffset | document.body.scrollTop;

    if(scrollPosY > 50) {
          navBar.className = ('scrolled');
    } else if(scrollPosY <= 50) {
         navBar.className =  ('unscrolled');
    }
}
