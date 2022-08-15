// Taking all component needed to modify

burger = document.querySelector('.burger');
navbar = document.querySelector('.navIcon');
cross = document.querySelector('.cross');
// as we click on burger waali class ke items me do run this func 
// this function add class & remove it from that box alternatively

burger.addEventListener('click',()=>{
  navbar.classList.toggle('add-resp');
});


// as we click on cross waali class ke items me do run this func 
// this function add class & remove it from that box alternatively

cross.addEventListener('click',()=>{
  navbar.classList.toggle('add-resp');
});
