
//Navbar
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Loading Animation
let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function () {
    
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});

// Play Video on Mouse Hover and Pause on Mouseout
const clip = document.querySelectorAll('.clip');
  for(let i = 0; i<clip.length; i++){
    clip[i].addEventListener('mouseenter', function(e){
      clip[i].play()
    })
    clip[i].addEventListener('mouseout', function(e){
      clip[i].pause()
    })
  }

//Contact Form
$(document).ready(function () {
  $('.submit').click(function (event) { 

    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') &&email.includes('.')) {
      statusElm.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')

    }
    if (subject.length >= 2 ) {
      statusElm.append('<div>Subject is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Subject is not valid</div>')
    }
    if (message.length >= 10) {
      statusElm.append('<div>Message is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Message is not valid</div>')
  
    }
})
})

// Typewriting effect
  const texts =  ["Home", "Heaven", "Love"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  
  (function type () {
    if(count === texts.length){
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
  
    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
      count++;
      index = 0;
    }
    setTimeout(type, 500);
  })();




  