fetch('https://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 
      "userName": "keti4",
  "firstName": "keti4",
  "lastName": "ketelauri4",
  "email": "keti4@gmail.com",
  "privateNumber": "12345678914",
  "password": "123",
  "active": true})
})
 .then(response => response.json())
 .then(response => console.log(JSON.stringify(response)))


//registraciaa

function signupFunc(){
let username = document.getElementById("username").value;
let inputEmail = document.getElementById("email").value;
let Password = document.getElementById("password").value;

localStorage.setItem("username", username);
localStorage.setItem("email", inputEmail);
localStorage.setItem("password", Password);

 }


function signinFunc(){
  let enteruser = document.getElementById("username").value;
  let enterpass = document.getElementById("passord").value;


   let getuser = localStorage.getItem("username");
   let getpass = localStorage.getItem("password");

   if(enteruser == getuser)
   {
     if (enterpass == getpass)
     {
      alert("Login Successful");
     }
     else{
      alert("Wrong Password");
     }
   }
   else{
    alert("Invalid details");
   }
}




//registraciis dizaini
function signin()
{
container.classList.remove('right-panel-active');
}
function signup()
{
container.classList.add('right-panel-active');
}


//add to cart function


function addtocartfunc(){
  alert("It is added in your cart!")
}

function submit(){
  alert ("message is sent!")
}




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





///fotoebis slide


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}








///////////popup

 
