$(document).ready(function(){
    $('.nav-menu').hide()
    // Burger Menu Click Event
    $('.burger-menu').click(function(e){
        e.preventDefault(); // Prevent the default behavior of the link
        $('.nav-menu').show()
        $('.menu').fadeTo("slow",0)
        $(".nav-menu").animate({
            right:'-12px'
        })
    })


    // X Close Click Event
    $('.x-close').click(function(e){
        e.preventDefault(); // Prevent the default behavior of the link
        $('.menu').fadeTo(250,100)
        $('.nav-menu').animate({
            right:'-1000px'
        });
        $('.nav-menu').hide()
    })

    //Slick Slider restaurant
    $('.restaurant').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'.arrow_prev',
        nextArrow:'.arrow_next',
        responsive:[
            {
            breakpoint : 760,
            settings:{
                slidesToShow:2, 
            }
        }]
      });

      //Slick Slider specialities
    $('.speciality').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        prevArrow:'.arrow_prev_special',
        nextArrow:'.arrow_next_special',
        responsive:[{
            breakpoint : 760,
            settings:{
                slidesToShow:5, 
            }
        }]
      });

});