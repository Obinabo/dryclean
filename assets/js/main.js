$(document).ready(function(){
    window.onload = function(){
        $('.mob-item').hide();
        $('.modal').hide();
        $('.overlay').hide();
        $('#preloader').fadeOut(500).remove();
    }
    $('.mob-nav a').click(function(){
        $('.mob-item').slideToggle();
    })
        $('.button-top a').click(function(){
            $('.modal').fadeIn();
            $('.overlay').show();
        })

        $('.nav-mob-items:last-child').click(function(){
            $('.modal').fadeIn();
            $('.overlay').show();
        })

        $('.modal .close a').click(function(){
            $('.modal').fadeOut();
            $('.overlay').hide();
        })
        

    $('.banner').owlCarousel({
        paginationSpeed : 500,
        singleItem:true,
        autoPlay: true,
        loop:true,
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $('.contact-items').css('animation-play-state','running');
        }else{
            $('.contact-items').css('animation-play-state','paused');
        }
    })
   $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $('.max-cont').css('animation-play-state','running');
        }else{
            $('.max-cont').css('animation-play-state','paused');
        }
    })

})