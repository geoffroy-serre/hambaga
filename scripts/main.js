const MENU_ICON = document.getElementById('menu-icon-wrapper');

MENU_ICON.addEventListener('click', () => {
  if (document.getElementById('menu').style.opacity === '0.8') {
    document.getElementById('menu').style.opacity = '0';
    document.getElementById('menu').style.maxHeight = '0';
  } else {
    document.getElementById('menu').style.opacity = '0.8';
    document.getElementById('menu').style.maxHeight = '500px';
  }
});
