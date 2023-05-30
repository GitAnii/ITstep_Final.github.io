document.getElementById("welcome").innerHTML="welcome "+localStorage.getItem("fi")
//banner slider
var index = 0;
displayImages();
function displayImages() {
  var i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 4000); 
}



function submit(){
  alert("Message is sent!")
}