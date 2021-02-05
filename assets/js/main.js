$(document).ready(function(){

// color bloque expande home
 $(".item2 , .item3 , .item4 , .item5 , .item6 , .item7 , .item8 , .item9 , .item10 , .item11 , .item12 , .item13 , .item14 , .item15 , .item16 , .item17 ").mouseover(function() {
  $(".item1").removeClass("activeMenuItem");
}).mouseout(function() {
  $(".item1").addClass("activeMenuItem")
});


$('#displayNone').click(function(e) {

  $('.hide-me').css('visibility', 'visible');

  if( $('.hide-me').is(":visible") ) {

    $('.hide-me').css('display', 'none'); 

  } else {

    $('.hide-me').css('display', 'block');

  }

});

  // collape ========

  $('#botonplus').click(function(e) {

  // Resetear, por si acaso has estado jugando con la otra propiedad

  $('.mostrarInt').css('visibility', 'visible');

  

  if( $('.mostrarInt').is(":visible") ) {

  //  $('.mostrarInt').css('display', 'none');
    $('.mostrarInt').hide(500);

  } else {
$('.mostrarInt').show(500);
    //$('.mostrarInt').css('display', 'block');

  }

});

    // collpse2 ========

  $('#botonplus2').click(function(e) {

  $('.mostrarInt2').css('visibility', 'visible');


  if( $('.mostrarInt2').is(":visible") ) {

    $('.mostrarInt2').css('display', 'none'); 

  } else {

    $('.mostrarInt2').css('display', 'block');

  }

});

      // collpse3 ========

  $('#botonplus3').click(function(e) {

  $('.mostrarInt3').css('visibility', 'visible');

  

  if( $('.mostrarInt3').is(":visible") ) {

    $('.mostrarInt3').css('display', 'none'); 

  } else {

    $('.mostrarInt3').css('display', 'block');

  }

});

      // collpse4 ========

  $('#botonplus4').click(function(e) {

  $('.mostrarInt4').css('visibility', 'visible');

  

  if( $('.mostrarInt4').is(":visible") ) {

    $('.mostrarInt4').css('display', 'none'); 

  } else {

    $('.mostrarInt4').css('display', 'block');

  }

});

        // collpse4  comites ========

  $('#botonplusCtes').click(function(e) {

  $('.mostrarIntCtes').css('visibility', 'visible');

  
  if( $('.mostrarIntCtes').is(":visible") ) {

    $('.mostrarIntCtes').css('display', 'none'); 

  } else {

    $('.mostrarIntCtes').css('display', 'block');

  }

});



          // collpse4  grande ========

  $('#mostrartodo').click(function(e) {

  $('.contefullInt').css('visibility', 'visible');

  
  if( $('.contefullInt').is(":visible") ) {

    $('.contefullInt').css('display', 'none'); 

  } else {

    $('.contefullInt').css('display', 'block');

  }

});



function ellipsisJS ( containerId , largomaximo) {

    var $container = $("#" + containerId); 

  var $text = $("#textpartNot1 p");    

 

    while ( $container.text().length > largomaximo ) {

        $text.text(function (index, text) {

            return text.replace(/\W*\s(\S)*$/, '...');

        });

    }

  }

ellipsisJS("textpartNot1", 166); 


// empieza los contadores 
$.fn.jQuerySimpleCounter = function( options ) {
      var settings = $.extend({
          start:  0,
          end:    100,
          easing: 'swing',
          duration: 400,
          complete: ''
      }, options );

      var thisElement = $(this);

      $({count: settings.start}).animate({count: settings.end}, {
      duration: settings.duration,
      easing: settings.easing,
      step: function() {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete
    });
  };
  var seEjecuto = 0;
 $(window).scroll(function() {
 if ($(this).scrollTop() >= $("#projectFacts").position().top && seEjecuto === 0) {
  seEjecuto = 1;
  $('#number1').jQuerySimpleCounter({start: 0,end:1060796,duration: 3000});
  $('#number2').jQuerySimpleCounter({start: 0,end: 11895791,duration: 3000});
  $('#number3').jQuerySimpleCounter({start: 0,end: 40938,duration: 2000});
  $('#number4').jQuerySimpleCounter({start: 0,end: 7740534,duration: 2500});
}
});

// Referencia
/* $.fn.jQuerySimpleCounter = function( options ) {
      var settings = $.extend({
          start:  0,
          end:    100,
          easing: 'swing',
          duration: 400,
          complete: ''
      }, options );

      var thisElement = $(this);

      $({count: settings.start}).animate({count: settings.end}, {
      duration: settings.duration,
      easing: settings.easing,
      step: function() {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete
    });
  };
  var seEjecuto = 0;
 $(window).scroll(function() {
 if ($(this).scrollTop() >= $("#projectFacts").position().top && seEjecuto === 0) {
  seEjecuto = 1;
  $('#number1').jQuerySimpleCounter({start: 0,end: 450,duration: 3000});
  $('#number2').jQuerySimpleCounter({start: 0,end: 20,duration: 3000});
  $('#number3').jQuerySimpleCounter({start: 0,end: 700,duration: 2000});
  $('#number4').jQuerySimpleCounter({start: 0,end: 8,duration: 2500});
}
});
*/

});// fin todo
 
 $(document).ready(function() {
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a img")
        .removeClass("mas")
        .addClass("menos");
    } else {
      $(".set > a img")
        .removeClass("mas")
        .addClass("menos");
      $(this)
        .find("i")
        .removeClass("mas")
        .addClass("menos");
      $(".set > a img").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(1000);
       $(".content").addClass("content2");
      $(this)
        .siblings(".content")
        .slideDown(1000);
    }
  });
});



