/* ===================================================
                  preloader
=======================================================*/

if( device.tablet() && device.mobile() ) {
            
    window.addEventListener("DOMContentLoaded", function() {
        $("body").queryLoader2({
              minimumTime: 500,
              showbar: true,                 
              barColor: "#fff",
              textColor: "#000;",
              backgroundColor: "#ff9192",
              barHeight: '10',
              percentage: true,                       
              completeAnimation: "fade",
              onComplete: function() {
                  $(".bghide").fadeOut("fast", "easeInSine", function(){
                    $(this).remove();
                  }); 
                  }
            
        });
    });
    
} else {
    $(document).ready(function() {
        $("body").queryLoader2({
            minimumTime: 500,
            showbar: true,                 
            barColor: "#fff",
            textColor: "#000;",
            backgroundColor: "#ff9192",
            barHeight: '10',
            percentage: true,                       
            completeAnimation: "fade",
            onComplete: function() {
                $(".bghide").fadeOut("fast", "easeInSine", function(){
                    $(this).remove();
                }); 
             }
        
    });
    });
    
};


$(document).ready(function() {

/* ===================================================
          RSVP form
=======================================================*/

    $(".border .row > div").click(function(){
                    
        var eventValue = $(this).find("h5").text();
        var theID = $(this).find("h5").attr('class');
        
        var eventParticipating = "<div class='eventTag'><label class='checkbox-inline' for='"+theID+"'><input type='checkbox' checked='checked' id='"+theID+"' name='event[]' value='"+eventValue+"'>"+eventValue+"</label><span class='remove'>x</span></div>";  

        var currentCheckbox = $('input#'+theID);
        var n = currentCheckbox.length;
        
        if (n == 0) {
           $( eventParticipating ).appendTo( $( "#thecheckboxes" ) );
        }  
                
        $('.remove').click(function(){
            $(this).parent().remove();
            
        });
    });


/* ===================================================
                  "collapse mobile menu after click"
=======================================================*/
if( device.tablet() && device.mobile() ) {
    $('.navbar-collapse a').click(function (e) {
        $('.navbar-collapse').collapse('toggle');
    });
}




/* ===================================================
            initialize the flexslider
======================================================= */  

  $('.flexslider').flexslider({
        animation: "fade",
        smoothHeight: false,
    });
  

/* ===================================================
            set the megafolio
======================================================= */ 

    var api=jQuery('.megafolio-container').megafoliopro(
    {
        filterChangeAnimation:"rotatescale",
        filterChangeSpeed:600,
        filterChangeRotate:99,
        filterChangeScale:0.6,          
        delay:20,
        paddingHorizontal:10,
        paddingVertical:10,
        layoutarray:[0]
     });

    var api2=jQuery('.megafolio-container2').megafoliopro(
    {
        filterChangeAnimation:"rotatescale",
        filterChangeSpeed:600,
        filterChangeRotate:99,
        filterChangeScale:0.6,          
        delay:20,
        paddingHorizontal:10,
        paddingVertical:10,
        layoutarray:[13]
     });

    var api3=jQuery('.megafolio-container3').megafoliopro(
    {
        filterChangeAnimation:"scale",          // fade, rotate, scale, rotatescale, pagetop, pagebottom,pagemiddle
        filterChangeSpeed:400,                  // Speed of Transition
        filterChangeRotate:99,                  // If you ue scalerotate or rotate you can set the rotation (99 = random !!)
        filterChangeScale:0.6,                  // Scale Animation Endparameter
        delay:20,
        defaultWidth:980,
        paddingHorizontal:10,
        paddingVertical:10,
        layoutarray:[2]      // Defines the Layout Types which can be used in the Gallery. 2-9 or "random". You can define more than one, like {5,2,6,4} where the first items will be orderd in layout 5, the next comming items in layout 2, the next comming items in layout 6 etc... You can use also simple {9} then all item ordered in Layout 9 type.
     });

    

    // THE FANCYBOX PLUGIN INITALISATION
    $(".fancybox").fancybox({
         openEffect  : 'none',
         closeEffect : 'none',
         helpers : {
                     media : {}
                    }
    });

    // ADD/REMOVE the class "selected" from the gallery filters
    $('.filter-list li').click(function(){
        $('.filter-list li').each(function() { 
            $(this).removeClass("selected")
        });
        $(this).addClass("selected");
    });


         
});

$(window).load(function(){



/* ===================================================
                  parallax effects
=======================================================*/

    if( !device.tablet() && !device.mobile() ) {
        // $('#ourstoryphoto').parallax("50%", 0.1); 
        // $('#thebridesidephoto').parallax("50%", 0.1); 
        // $('#thegroomsidephoto').parallax("50%", 0.18);
        // $('#weddinglocationphoto').parallax("50%", 0.1);
        // $('#blog1photo').parallax("50%", 0.1);
        // $('#blog2photo').parallax("50%", 0.1);
        // $('#gallery1photo').parallax("50%", 0.1);
        $('#gallery2photo').parallax("50%", 0.1);
        // $('#registryphoto').parallax("50%", 0.1);
        // $('#guestbookphoto').parallax("50%", 0.1);
        // $('#rsvpphoto').parallax("50%", 0.1);
        // $('.parallax-elements').parallax("50%", 0.4);
    

    $('.parallax-hook').each(function(index, element) {
        $(this).addClass('bgfixed');
    });
    }


  

/* ===================================================
            initialize the one page scroll 
=======================================================*/
  
    $(".navbar-collapse ul li a[href^='#'], #home .col-md-12 a[href^='#']").on('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();

       // store hash
       var hash = this.hash;

       // animate
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top,

         }, 1000, 'easeInQuart', function(){

           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = hash;
         });

    });


/* ===================================================
            set the waypoints
======================================================= */ 
  
    if( !device.tablet() && !device.mobile() ) {

        // waypoint to the slider names
        $('.navbar').waypoint(function(){
            $('.names').removeClass('hide');
            $('.names').addClass('animated fadeInUp');
        }, { offset: 60 });

        //WAYPOINTS to the sections HEADERS

            // waypoint to the 'gallery version 2' section
            $('#gallery2').waypoint(function() {
                $(this).find('header').removeClass('hide').addClass('animated fadeIn');
            });

        //WAYPOINTS to the sections different PARTS

    }else{

        $('header, div').removeClass('hide');
        $('.post, .bridemom, .bridedad, .thebride, .groommom, .groomdad, .thegroom, .location, .hotels, .attractions, .registry, .donation, #blog2 .row').removeClass('fakeheight');

    }



   
});






