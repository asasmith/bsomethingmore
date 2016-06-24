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

var myAuthorPages = document.getElementById('author-pages');
var myNavItem = document.querySelector('[href="#author-pages"]');

myNavItem.addEventListener("click", handlerAuthorPages, false);

function handlerAuthorPages() {

  if (myAuthorPages.classList.contains('close')) {

  myAuthorPages.classList.remove('close');
  myAuthorPages.classList.add('open');
  }

  else {

    myAuthorPages.classList.remove('open');
    myAuthorPages.classList.add('close');
  }
}
