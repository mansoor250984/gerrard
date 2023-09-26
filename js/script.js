$(document).ready(function() { 
$(".menu-bar").click(function(){
    $(".nav div.menu, .overlay").toggle(500);
	$('body').css('overflow', 'hidden');
});
$(".menu .fa-bars").click(function(){
    $(".nav div.menu, .overlay").toggle(500);
	$('body').css('overflow', 'visible');
});
  $(".title").click(function(){
    $(".widgetBox").slideToggle(500);
  });

$(".nav .submenu1").click(function(){$(".nav ul li.submenu1 ul").slideToggle(500);});
$(".nav .submenu2").click(function(){$(".nav ul li.submenu2 ul").slideToggle(500);});
$(".nav .submenu3").click(function(){$(".nav ul li.submenu3 ul").slideToggle(500);});
$(".nav .submenu4").click(function(){$(".nav ul li.submenu4 ul").slideToggle(500);});
$(".nav .submenu5").click(function(){$(".nav ul li.submenu5 ul").slideToggle(500);});
$(".nav .submenu6").click(function(){$(".nav ul li.submenu6 ul").slideToggle(500);});
$(".nav .submenu7").click(function(){$(".nav ul li.submenu7 ul").slideToggle(500);});
$(".search, .searchBox .fa-times").click(function(){$(".searchBox").slideToggle(100);});

})



   jQuery(document).ready(function($){
   var owl = $("#owl-demo-banner");
      owl.owlCarousel({
      items :1, //10 items above 1000px browser width
	  autoPlay:true,
      navigation : true,
	  pagination : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true

      });

      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
      $(".play").click(function(){
        owl.trigger('owl.play',1000);
      })
      $(".stop").click(function(){
        owl.trigger('owl.stop');
      })
});
