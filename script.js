// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
// var img7 = document.getElementById("myImg7");
// var img8 = document.getElementById("myImg8");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

//Refactorisation 
function imgDisplay(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img.onclick = imgDisplay;

img2.onclick =  imgDisplay;

img3.onclick = imgDisplay;
img4.onclick = imgDisplay;
img5.onclick = imgDisplay;
img6.onclick = imgDisplay;
// img7.onclick = imgDisplay;
// img8.onclick = imgDisplay;



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}