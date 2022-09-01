// start of hamburger menu
const hamburger=document.querySelector(".hamburger");
const navmenu=document.querySelector(".nav-menu");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
     navmenu.classList.toggle("active");
     })
 document.querySelectorAll(".link1").forEach(n => n.addEventListener("click",() =>{
     hamburger.classList.remove("active");
     navmenu.classList.remove("active");
    
}))
  // end of hamburger menu

  //start of Email validation
document.getElementById("subscribe").addEventListener("click", function() {
  var email=document.getElementById("email").value;
  
  if(email == ""){
    swal("please provide a EmailAddress!");
    return true;
  }
  
  if(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ){
  swal(document.getElementById("email").value + " " +"SUBSCRIBED");
  return false;
  }
  else{
    swal(email+" "+ "is"+ " "+"incorrect email ID" );
  }
})
document.getElementById("subscribe1").addEventListener("click", function() {
  var email1=document.getElementById("email1").value;
  
  if(email1 == ""){
    swal("please provide a EmailAddress!");
    return true;
  }
  
  if(email1.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ){
  swal(document.getElementById("email1").value + " " +"SUBSCRIBED");
  return false;
  }
  else{
    swal(email1+" "+ "is"+ " "+"incorrect email ID" );
  }
})
//end of email validation

//start of dynamic content
const object = [
  {
    message:"Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.",
    Author:"Katherine Bishop"
  }
]
const whitebox =document.getElementsByClassName('whitebox')[0];
object.forEach((object) =>{
  var img = new Image();
  var img1= new Image();
  img1.src="Assets/Twitter.svg";
img.src="Assets/Userpic.svg";

var node=document.getElementById("whitebox");
node.innerHTML="<img src='"+img.src+"' ><img src='"+img1.src+"'>";
  let a=document.createElement('p');
  let b=document.createTextNode(object.message);
  a.appendChild(b);
  whitebox.appendChild(a);
 
  
  let c=document.createElement('p');
    let d=document.createTextNode(object.Author);
    c.appendChild(d);
    whitebox.appendChild(c);
    
   
})
const object1 = [
  {
    message:"Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.",
    Author:"Bertha Blake"
  }
]
const whitebox1 = document.getElementsByClassName('whitebox')[1];
object1.forEach((object1) =>{
  var img = new Image();
  var img1 = new Image();
 
  img1.src="Assets/Twitter.svg";
  img.src="Assets/Userpic.svg";
  
  var node=document.getElementById("mediabox");
  node.innerHTML="<img src='"+img.src+"' ><img src='"+img1.src+"'>";
  let f=document.createElement('p');
  let b=document.createTextNode(object1.message);
  f.appendChild(b);
  whitebox1.appendChild(f);

  let c=document.createElement('p');
  let d=document.createTextNode(object1.Author);
    c.appendChild(d);
    whitebox1.appendChild(c);
  
  

})
const object2 = [
  {
    message:"Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.",
    Author:"Sarah Bailey"
  }
]
const whitebox2 = document.getElementsByClassName('whitebox')[2];
object2.forEach((object2) =>{
  var img = new Image();
  var img1 =new Image();
 
  img.src="Assets/Userpic.svg";
  img1.src="Assets/Twitter.svg";
 
  var node=document.getElementById("whitebox2");
  node.innerHTML="<img src='"+img.src+"'><img src='"+img1.src+"'>";
  
  let f=document.createElement('p');
  let b=document.createTextNode(object2.message);
  f.appendChild(b);
  whitebox2.appendChild(f);
  let c=document.createElement('p');
  let d=document.createTextNode(object2.Author);
    c.appendChild(d);
    whitebox2.appendChild(c);
   
})
//end of dynamic content


