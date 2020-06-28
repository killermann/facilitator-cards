//@prepros-prepend plugins/vanilla-tilt.min.js
//@prepros-prepend plugins/wow.min.js
//@prepros-prepend plugins/a11y-dropdown-component.js

VanillaTilt.init(document.querySelectorAll(".sidebar .card"), {
	glare: true,
    reset: false
});

VanillaTilt.init(document.querySelectorAll("#anatomy .anatomy-wrapper"), {
});

wow = new WOW({
  animateClass: 'animated-wow', // default
})

wow.init();

window.onscroll = function changeNav(){
    var navBar = document.getElementById('masthead');
    var scrollPosY = window.pageYOffset | document.body.scrollTop;

    if(scrollPosY > 10) {
          navBar.className = ('scrolled');
    } else if(scrollPosY <= 10) {
         navBar.className =  ('unscrolled');
    }
}

Dropdowns.init();