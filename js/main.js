var parent = document.querySelector("ul");
var myNavitems = document.querySelectorAll('li a');

parent.addEventListener("click", handlerActive, false);

function handlerActive(e) {

  if (e.target !== e.currentTarget) {

    for(i = 0; i < myNavitems.length; i++) {
      myNavitems[i].classList.remove('active');
    }

    e.target.classList.add('active');
   }

  e.stopPropagation();
}

var myContactBar = document.getElementById('contact-bar');
var myContactNavItem = document.querySelector('[href="#contact"]');

myContactNavItem.addEventListener("click", handlerContactBar, false);

function handlerContactBar() {

  if (myContactBar.classList.contains('close')) {

  myContactBar.classList.remove('close');
  myContactBar.classList.add('open');
  }

  else {

    myContactBar.classList.remove('open');
    myContactBar.classList.add('close');
  }
}
