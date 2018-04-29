$(document).ready(function(){
    var controller = new ScrollMagic.Controller();
    var tween = TweenMax.to(".headimg",3,{opacity:1,y:0,delay:.75,ease:Power2.easeOut});
    var ourScene = new ScrollMagic.Scene({
        triggerElement:".title",
        triggerHook:0.6,
        reverse:false
        
        
    })
    .setTween(tween)
    
    .addTo(controller);
    var tween2 = TweenMax.to(".top-button",3,{opacity:1,y:-35,delay:1.75,ease:Power2.easeOut});
    var ourScene2 = new ScrollMagic.Scene({
        triggerElement:".headimg",
        triggerHook:0.6,
        reverse:false
        
        
    })
    .setTween(tween2)
    .addTo(controller);
    
     $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "" && !this.hash.includes("day")) {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 1300, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

	var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
   
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


});
