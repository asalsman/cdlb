$(document).ready(function(){
  
  var menu = $("#login-box");
  var hamburger = $(".login");
  var menuOpen;
  
  function openMenu(){
    menu.addClass('active');
    menuOpen = true;
  }
  
  function closeMenu(){
    menu.removeClass('active')
    menuOpen = false;
  }
  
  function toggleMenu(){
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }
 
  hamburger.on({
    mouseon: function(){
      openMenu();
    }
  });
  
  hamburger.on({
    click: function(){
      toggleMenu();
    }
  })
});