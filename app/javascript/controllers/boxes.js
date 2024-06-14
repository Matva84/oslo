// Enregistrement du plugin ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger);
//console.log("boxes.js loaded");

// Sélection de tous les éléments avec la classe "boxes"
const boxes = document.querySelectorAll(".boxes");

// Vérification que des éléments avec la classe "boxes" existent
if (boxes.length > 0) {
  // Affichage de la valeur maximale de défilement pour le premier élément "boxes"
  //console.log(ScrollTrigger.maxScroll(boxes[0]));

  // Animation des éléments en fonction de l'attribut "data-speed"
  gsap.to("[data-speed]", {
    y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(boxes[0]),
    ease: "none",
    scrollTrigger: {
      trigger: boxes[0],
      start: "top top", // Commence au début de l'élément 'boxes'
      end: "bottom bottom", // Se termine à la fin de l'élément 'boxes'
      invalidateOnRefresh: true,
      scrub: 0
    }
  });
}
