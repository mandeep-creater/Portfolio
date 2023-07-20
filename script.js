$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Developer",  "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer",  "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            }
        }
    });
});

// for read more
function toggleParagraph() {
  var paragraph = document.getElementById("hidden-paragraph");
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
  } else {
    paragraph.style.display = "none";
  }
}

// email script
/*
  function openGmailCompose(event) {
    event.preventDefault();

    var name = encodeURIComponent(document.getElementById("nameInput").value);
    var email = encodeURIComponent(document.getElementById("emailInput").value);
    var subject = encodeURIComponent(document.getElementById("subjectInput").value);
    var message = encodeURIComponent(document.getElementById("messageInput").value);

    var recipient = encodeURIComponent("smandeep1609@gmail.com"); // Replace with the recipient's email address

    var gmailComposeUrl = "https://mail.google.com/mail/?view=cm&to=" + recipient + "&su=" + subject + "&body=" + message;

    var win = window.open(gmailComposeUrl, "_blank");
    win.focus();

    setTimeout(function() {
      window.location.href = "https://mandeeps-portfolio.netlify.app/"; // Replace with your portfolio website URL
    }, 200); // Redirect after 5 seconds (adjust the delay as needed)
  }*/

  function openGmailCompose(event) {
  event.preventDefault();

  var name = encodeURIComponent(document.getElementById("nameInput").value);
  var email = encodeURIComponent(document.getElementById("emailInput").value);
  var subject = encodeURIComponent(document.getElementById("subjectInput").value);
  var message = encodeURIComponent(document.getElementById("messageInput").value);

  var recipient = encodeURIComponent("smandeep1609@gmail.com"); // Replace with the recipient's email address

  var gmailComposeUrl = "https://mail.google.com/mail/?view=cm&to=" + recipient + "&su=" + subject + "&body=" + message;

  var win = window.open(gmailComposeUrl, "_blank");
  win.focus();

  setTimeout(function() {
    window.location.href = "https://mandeeps-portfolio.netlify.app/"; // Replace with your portfolio website URL
  }, 50); // Redirect after 5 seconds (adjust the delay as needed)
}

// Add event listeners for both click and touch events on the button/link
var gmailButton = document.getElementById("openGmailButton");
gmailButton.addEventListener("click", openGmailCompose);
gmailButton.addEventListener("touchstart", openGmailCompose);




