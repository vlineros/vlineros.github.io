var contactModalTrigger = document.getElementById("contact-modal-trigger");
var contactModal = document.getElementById("contact-modal");
var span = document.getElementsByClassName("close")[0];

contactModalTrigger.addEventListener("click", function() {
  contactModal.style.display = "block";
});

span.onclick = function() {
  contactModal.style.display = "none";
};
