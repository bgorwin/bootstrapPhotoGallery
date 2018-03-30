
var hideGallery = document.getElementByClass();

window.onload = function(){
  hideGallery.hide();
};

function showGallery(){
  var x = document.getElementById('gallery');
  if (x.style.display === "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
