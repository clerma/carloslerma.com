/* Template Name: Vani - Minimal Portfolio Template
   Author: Uniquecrew
   E-mail: uniquecrewdesign@gmail.com
   Version: 2.0.0
   Created: March 2020
   File Description: Main Css file of the template
*/
(function ($) {

    'use strict';
    // BACK TO TOP
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        }); 
        $('.back-to-top').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
        //mouse down
        $('.mouse-down').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        //Twenty twenty slider
        $( window ).on( "load", function() {
            $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.5});
            $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.5, orientation: 'vertical'});
        });
})(jQuery) 