// this peace of code needed for library typed.js
let typed = new Typed('#typed', {
stringsElement: '#typed-strings',
typeSpeed: 40,
backSpeed: 0,
});

const fragment = document.createDocumentFragment();




// I add a new method for capitalizing first letter
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

// create method for creating menu

function newMenuItem (){
  // I extract all section in order to  get their ids and then create a menu
  const sections = document.querySelectorAll('section');
  // create menu element with display none 
  const new_ul = document.createElement('ul');
  new_ul.id = 'menu'

  const menu = document.querySelector('#menuToggle');

  for (let i of sections){
     // I get id names of sections and create li elements with first name of id. it looks like audit_section. and put it in <ul>
    let regexp = /(.*?)_/;
    let pattern = `<li><a href="#${i.id}">${i.id.match(regexp)[1].capitalize()}</a></li>`;
    if(i.id.match(regexp)[1].capitalize() !=='Footer'){
    new_ul.insertAdjacentHTML("beforeEnd", pattern);}
  }

  menu.appendChild(new_ul);
  const anchors = document.querySelectorAll('#menu li a');
  nav  = document.getElementById('menuToggle');
  // I create listeners for links in the menu and making navigation more smooth 
  for(let anchor of anchors){
    anchor.addEventListener('click', function(e){
      e.preventDefault()
      const blockID = anchor.getAttribute('href');
      nav.classList.toggle('active');
      burger.classList.toggle('is-open');
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  
  });
}    
}

// I listen when DOM ready
document.addEventListener('DOMContentLoaded', function(event) {
  // I call my function through browser, bypassing stack
  setTimeout(newMenuItem, 0)

  let burger = document.getElementById('burger'),
  nav  = document.getElementById('menuToggle');
// I think no need comments this  
  burger.addEventListener('click', function(e){
      this.classList.toggle('is-open');
      nav.classList.toggle('active');
      document.getElementById('menu').classList.add('smoothie')
    });
});



