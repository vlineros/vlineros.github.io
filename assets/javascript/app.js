var contactModalTrigger = document.getElementById("contact-modal-trigger");
var contactModal = document.getElementById("contact-modal");
var span = document.getElementsByClassName("close")[0];

contactModalTrigger.addEventListener("click", function() {
  contactModal.style.display = "block";
});

span.onclick = function() {
  contactModal.style.display = "none";
};

// var projectImages = document.getElementsByClassName("portfolio-pic");
// for (let i = 0; i < projectImages.length; i++) {
//   projectImages[i].addEventListener("mouseover", function() {
//     var title = document.getElementById("p" + i).getAttribute("id");
//     titleAnimation(title);
//   });
// }

// var titleAnimation = function(target) {
//   console.log(target);
//   anime({
//     targets: document.querySelector("#" + target),
//     maxWidth: {
//       value: "100%",
//       duration: 2000
//     }
//   });
// };

anime({
  targets: ".animate-test",
  opacity: {
    value: "1",
    duration: 2000,
    delay: 1000
  },
  easing: "linear"
});

anime({
  targets: ".animate-hr",
  height: "5px",
  maxWidth: {
    value: "100%",
    duration: 2000,
    easing: "easeInExpo"
  }
});

// var tl = anime.timeline();
// tl.add({

// })
