$(document).ready(function(){

    var yourNavigation = $("header");
    stickyDiv = "scrolled";
    yourHeader = $('header').height();

    $(window).scroll(function() {
        if( $(this).scrollTop() > yourHeader ) {
            yourNavigation.addClass(stickyDiv);
            if(window.innerWidth <= 1024){
                $(".nav").addClass("scrolled");
            }
        } else {
            yourNavigation.removeClass(stickyDiv);
            if(window.innerWidth <= 1024){
                $(".nav").removeClass("scrolled");
            }
        }
    });

    $(".burger").click(function(){
      $(".menu").toggleClass("show");
      $($(this).children("i")).toggleClass("fa-bars fa-times");
    });

    var addClassOnScroll = function () {
        var windowTop = $(window).scrollTop();
        $('section[id]').each(function (index, elem) {
          var offsetTop = $(elem).offset().top;
          var outerHeight = $(this).outerHeight(true);
    
          if (windowTop > (offsetTop - 50) && windowTop < (offsetTop + outerHeight)) {
            var elemId = $(elem).attr('id');
            $(".menu-item.active").removeClass('active');
            $(".menu-item[href='#" + elemId + "']").addClass('active');
          }
        });
      };
    
      var addFadeOnScroll = function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        // windowBottom = windowBottom + 80;
    
        $(".fade-in").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
              if ($(this).css("opacity")==0) {$(this).fadeTo(1000,1);}
            } else { //object goes out of view (scrolling up)
              if ($(this).css("opacity")==1) {$(this).fadeTo(1000,0);}
            }
          });
      };
    
      $(function () {
        $(window).on('scroll', function () {
          addClassOnScroll();
          addFadeOnScroll();
        });
      });
    


});