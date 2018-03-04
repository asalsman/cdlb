$(document).ready(function(){
  
  var menu = $(".menu");
  var hamburger = $(".hamburger");
  var line = $(".line");
  var menuOpen;
  
  function openMenu(){
    menu.css("left", "0px");
    line.css("background", "#FFF");
    hamburger.addClass('active');
    menuOpen = true;
  }
  
  function closeMenu(){
    menu.css("left", "-320px");
    line.css("background", "#222");
    hamburger.removeClass('active')
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