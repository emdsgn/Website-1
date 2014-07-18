<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>

<script type="text/javascript">


$(document).ready(function() {


 //Calculate the height of <header>


 //Use outerHeight() instead of height() if have padding


    var aboveHeight = $().outerHeight('header');


 // when scroll


    $(window).scroll(function(){


  //if scrolled down more than the header's height

        if ($(window).scrollTop() > aboveHeight){


   // if yes, add "fixed" class to the <sticknav>

   // add padding top to the #content (value is same as the height of the sticknav)

            $('sticknav').addClass('fixed').css('top','0').next().css('padding-top','0px');

        } else {


   // when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top

            $('sticknav').removeClass('fixed').next().css('padding-top','0');

        }

    });

});

</script>
