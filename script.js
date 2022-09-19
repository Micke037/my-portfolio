
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        
        window.location.hash = hash;
      });
    } 
  });
});

const typed = new Typed(".typing", {
  strings: ["Frontend Developer", "CSS", "HTML", "JavaScript",],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
})
