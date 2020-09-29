// Get the modal
var modals = document.getElementsByClassName("modal");

// When the user clicks on the button, open the modal
displayModal = function(modalName) {
  modals[modalName].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
removeModal = function(modalName) {
    document.getElementById(modalName).style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    for(let modal of modals)
      if (event.target == modal)
        modal.style.display = "none";
}
