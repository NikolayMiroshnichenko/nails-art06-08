(function() {

  function disableBodyScroll() {
    var body = document.querySelector('body');
    body.classList.add('scroll-disable');
  }

  function enableBodyScroll() {
    var body = document.querySelector('body');
    body.classList.remove('scroll-disable');
  }

  function openMenu() {
    var menuEl = document.querySelector('.navigation');
    var menuBtn = document.querySelector('.menu-icon');


    if (menuEl) {
    $("#nav").fadeIn();
      menuEl.style.display = 'block';
      menuBtn.addEventListener('click', closeMenu);
    }
  }

  function closeMenu() {
    var menuEl = document.querySelector('.navigation');
    var menuBtn = document.querySelector('.menu-icon');



    if (menuEl) {
      menuBtn.removeEventListener('click', closeMenu);
      menuEl.style.display = 'none';
    }
    
  }

    $(document).mouseup(function (e) {
    var container = $('.navigation');
    if (container.has(e.target).length === 0){
        container.hide();
    }
  });

  function initMenu() {
    var menuBtn = document.querySelector('.menu-icon');
    menuBtn.addEventListener('click', openMenu);
    document.addEventListener('scroll', closeMenu);
  }

  initMenu();
})();