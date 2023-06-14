function onScroll() {
  const navigation = document.getElementById('navigation')
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

const openMenu = () => {
  document.body.classList.add('menu-expanded');
  
}

const closeMenu = () => {
  const menu = document.querySelector('body');
  return menu.classList.remove('menu-expanded');
}
