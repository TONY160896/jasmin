AOS.init({
    useClassNames: true,
    initClassName: false,
    offset: 100,
    delay: 0,
    duration: 800,
    once: true
});
$(document).ready(function() {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $("header").addClass('fix')
        }
        else {
            $("header").removeClass('fix')
        }
    });
    /* goto top btn */
 $(".goto-top").click(function () {
  $("html, body").animate({scrollTop: 0}, 1000);
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 250) {
      $(".goto-top").addClass('open')
  }
  else {
      $(".goto-top").removeClass('open')
  }
});
    

});
 


$(document).ready(function () {
    $('.menu-btn').click(function(){
        $('.header_menu').toggleClass('open');
        $('.menu-btn').toggleClass('open');
    });  
});

$(document).ready(function () {

    $("#banner").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        smartSpeed: 1000,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        responsiveClass: true,        
        rewind: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });

    $('#homeservice').owlCarousel({
        margin: 0,
        center: false,
        loop: true,
        nav: true,
        dots:false,
        responsive: {
        0: {
           items: 1,
           center:true,
        },
        650: {
          items: 2,
       
       },
        900: {
           items: 2,
        
        },
        1000: {
          items: 3,
       
       },
        1025: {
           items: 3,
        }
        }
    })
    $('#blog').owlCarousel({
      margin: 0,
      center: false,
      loop: true,
      nav: false,
      dots:true,
      responsive: {
      0: {
         items: 1,         
      },
      600: {
        items: 2,
     
     },
      900: {
         items: 3,
      
      },
      1025: {
         items: 3,
      }
      }
  })
  $('#teamslider').owlCarousel({
    margin: 0,
    center: false,
    loop: true,
    nav: true,
    dots:false,
    responsive: {
    0: {
       items: 1,    
       nav: false,
      dots: true     
    },
    600: {
      items: 1,   
      nav: false,
      dots: true
   },
 
    900: {
       items: 1,
    
    },
    1025: {
       items: 2,
    },
    2200: {
       items: 3,
    }
    }
})
$('#gallery_slider').owlCarousel({
  margin: 0,
  center: false,
  loop: true,
  nav: false,
  dots:false,
  responsive: {
  0: {
     items:3,         
  },
  600: {
    items: 4,
 
 },
  900: {
     items: 4,
  
  },
  1025: {
     items: 5,
  }
  }
})
$('#homeblog_slider').owlCarousel({
  margin: 0,
  center: true,
  loop: true,
  nav: true,
  dots:false,
  responsive: {
  0: {
     items: 1,
     nav: false,
      dots: true         
  },
  600: {
    items: 1.5,
    nav: false,
      dots: true
 
 },
  900: {
     items: 3,
  
  },
  1025: {
     items: 3,
  }
  }
})
$('#testimonial').owlCarousel({
  margin: 0,
  center: false,
  loop: true,
  nav: false,
  dots:true,
  responsive: {
  0: {
     items: 1,
     center:true,
  },
  600: {
    items: 2,
 
 },
  900: {
     items: 3,
  
  },
  1025: {
     items: 4,
  }
  }
})
$('#gallery').owlCarousel({
  loop:true,
  margin:0,
  nav: false,       
  autoplay: true,
  smartSpeed: 7000,  
  autoplayTimeout: 6000, 
  dots: false,
  autoplayHoverPause:true,
  responsiveClass:true,
  responsive: {
  0: {
     items: 1,
     center:true,
  },
  600: {
    items: 2,
 
 },
  900: {
     items: 3,
  
  },
  1025: {
     items: 3,
  }
  }
})
    
    
  });
  $(document).ready(function () {
    $("#imageslider").owlCarousel({
      loop: true,
      margin:0,
      nav: true,
      autoplay: false,
      smartSpeed: 1500,
      autoplaySpeed: 5000,
      mouseDrag: true,
      touchDrag: true,
      // animateIn: 'fadeIn',
      // animateOut: 'fadeOut',
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        800: {
          items: 2,
          
        },
        1000: {
          items: 3,
        },
        1300: {
          items: 4,
          
        },
      },
    });

    $(function() {
      // Owl Carousel
      var owl = $("#partners");
      owl.owlCarousel({
        items: 5,
        margin: 50,
        loop: true,
        nav: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        responsiveClass:true,
          responsive:{
              0:{
                  items: 2,                 
              },
              600:{
                  items: 2
              },
              1000:{
                  items: 4
              },
              1200:{
                  items: 5
              }
          }
      });
    });
    $('#ourteam').owlCarousel({
      margin: 10,
      center: false,
      loop: true,
      nav: true,
      dots:false,
      responsive: {
      0: {
         items: 1,         
      },
      600: {
        items: 1,
     
     },
      900: {
         items: 1,
      
      },
      1025: {
         items: 1,
      }
      }
  })
  });  
  $(document).ready(function () {
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");
	

    $("#resume").change(function () {
      var path = $(this).val();
      $("#file_label").text(path);
      $("#file_label").addClass('new-path');
  });  
});



