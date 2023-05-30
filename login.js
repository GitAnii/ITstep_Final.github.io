

































function Registration(ev){
ev.preventDefault();
fetch('https://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 
  "userName": document.getElementById("userName").value,
  "firstName" : document.getElementById("firstName").value,
  "lastName" : document.getElementById("lastName").value,
  "email": document.getElementById("email").value,
  "privateNumber": document.getElementById("privateNumber").value,
  "password": document.getElementById("psw").value,
  "active": true})
})
 .then(response => response.json())
 .then(response => 
  {console.log(JSON.stringify(response))
    // window.location.replace("login.html")
  })


};




function LogIn(event){
  event.preventDefault();
  fetch('https://kketelauri-001-site1.gtempurl.com/api/user/login',{
    method: 'POST',
    headers:{
    'Accept': 'application/json',
    'Content-Type': 'application.json'
    },
    body: JSON.stringify({
      "email":document.getElementById("email").value,
      "password": document.getElementById("password").value})
  })
  .then(response => response.json())
  .then(response => {
    console.log(JSON.stringify(response))
    localStorage.setItem("name",response.userName)
    window.location.replace("index.html")
  })
};











//registraciis dizaini
function signin()
{
container.classList.remove('right-panel-active');
}
function signup()
{
container.classList.add('right-panel-active');
}



 
