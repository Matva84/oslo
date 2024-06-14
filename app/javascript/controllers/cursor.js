import { Controller } from "@hotwired/stimulus"

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
  cursor.style.top = e.clientY + "px";
});


//var cards = document.querySelectorAll('card');
//cards.forEach(function(card) {
//  card.addEventListener('mouseover', function(e) {
//    cursor.style.height = "32px",
//    cursor.style.width = "32px";
//    card.animate([
//      { transform: 'scale(1)' },
//      { transform: 'scale(1.1)' }
//    ], {
//      duration: 300,
//      iterations: 2,
//      direction: 'alternate',
//      easing: 'ease-in-out'
//    });
//  });
//  card.addEventListener('mouseout', function(e) {
//    cursor.style.height = "8px",
//    cursor.style.width = "8px";
//  });
//});

var links = document.querySelectorAll('a');
links.forEach(function(link) {
  link.addEventListener('mouseover', function(e) {
    cursor.style.height = "32px",
    cursor.style.width = "32px";
    if (link.classList.contains('arrow')) {
      link.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.07)' }
      ], {
        duration: 300,
        iterations: 2,
        direction: 'alternate',
        easing: 'ease-in-out'
      });
    }
    else {
      link.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1)' }
      ], {
        duration: 300,
        iterations: 2,
        direction: 'alternate',
        easing: 'ease-in-out'
      });
    }
  });
  link.addEventListener('mouseout', function(e) {
    cursor.style.height = "8px",
    cursor.style.width = "8px";
  });
});
