window.addEventListener('scroll', onScroll);

onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  const navigation = document.getElementById('navigation');
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

function showBackToTopButtonOnScroll() {
  const buttomBackTop = document.querySelector('#backToTopButton');
  
 if (scrollY > 800) {
  buttomBackTop.classList.add('show');
 } else {
  buttomBackTop.classList.remove('show');
 }

 
}

const openMenu = () => {
  document.body.classList.add('menu-expanded');
  
}

const closeMenu = () => {
  const menu = document.querySelector('body');
  return menu.classList.remove('menu-expanded');
}


ScrollReveal({ 
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img,
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)