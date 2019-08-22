// M A I N • S C R I P T S 

(function($) {
    
    // Document is ready
    $(document).ready(function(){

        // G E T • S C R O L L • P O S I T I O N 
        // $(window).on('scroll', function(){
        //     // console.log($(this).scrollTop());
        //     --position = $(this).scrollTop();
        // });

        $(window).scroll(function() {

            if ($("#header").offset().top < 50) {

                $("#header").removeClass("scrolled");

            } else {

                $("#header").addClass("scrolled");
            }
        });


        function mobile_click_nav() {

            $('#main-nav #toggler').click(function(){
                console.log('clicked');

                $('#main-nav label[for=toggler]').toggleClass('active');
                $('#main-nav ul').toggleClass('opened');
            });

            $('#main-nav .item').click(function(){

                $('#main-nav label[for=toggler]').removeClass('active');
                $('#main-nav ul').removeClass('opened');
            });
        }

        mobile_click_nav();

        // S C R O L L A B L E • A N C H O R S
        $("a.scrollable").click(function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if( $(this).attr('data-target') != 'undefined') {
                // alert('hola');
                var hash = $(this).attr('href');
                $(this).attr('data-target', hash).removeAttr('href'); 

                if ($(this).attr('data-target') !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();

                    // store data target
                    var target = $(this).attr('data-target');
                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(target).offset().top
                        }, 1200, function(){

                            // Add data-target (#) to URL when done scrolling (default click behavior)
                            window.location.target = target;
                    });
                } // End if
            }
        });
    });

})(jQuery);