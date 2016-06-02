jQuery(document).ready(function() {

    //form validate
    jQuery("form").validate({

        rules:{
            name:{
                required: true,
                minlength: 2
            },
            phone:{
                required: true,
                digits: true
            },
            email:{
                required: true,
                email: true
            },
            address:{
                required: true
            }
        }
    });



    jQuery(window).load(function() {
        if ($(window).width() > 960) {

            particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 120,
                        "density": {
                            "enable": true,
                            "value_area": 1800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 3
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.2,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 20,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 250,
                        "color": "#ffffff",
                        "opacity": 0.2,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "window",
                    "events": {
                        "onhover": {
                            "enable": false,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 180,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });

        }

    });



    //modal form
    var overlay = $('#overlay');
    var open_modal = $('.open-modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');
    var videoSRC = $('#video-modal iframe').attr('src');
    var videoSRCauto = videoSRC + "?autoplay=1";

    open_modal.click( function(event){
        event.preventDefault();
        //console.log('open');
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function(){
                $(div)
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
                    $('#video-modal iframe').attr('src', videoSRCauto);
                    $('body').addClass('no-scroll');
            });
    });

    close.click( function(){
        //console.log('close');
        modal
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                    $('#video-modal iframe').attr('src', videoSRC);
                    $(".success_box").removeClass('show');
                    $('body').removeClass('no-scroll');

                }
            );
    });

   


    //scroll link menu
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

    });


    var goUp = (function () {

        var $el = $('.scrollTop'),
            speed = 500,
            timingFunction = 'swing',
            state = false,
            paused = false,
            plg = {
                up: function () {

                    paused = true;
                    state = true;

                    $("html, body").stop().animate({scrollTop:0}, speed, timingFunction, function () {

                        paused = false;

                    }).one('touchstart mousewheel DOMMouseScroll wheel', function () {

                        $(this).stop(false, false).off('touchstart mousewheel DOMMouseScroll wheel');
                        paused = false;

                    });

                    plg.hide();

                },
                show: function () {

                    if (!state && !paused) {

                        $el.addClass('opened');

                        state = true;

                    }

                },
                hide: function () {

                    if (state) {

                        $el.removeClass('opened');

                        state = false;

                    }

                },
                $el: $el
            };

        $el.on('click', function () {

            plg.up();

        });

        return plg;

    })();
    
    
    //scroll
    (function () {

        var $mainNavigation = $(".main-navigation"),
            $callBack = $('#call_back');
        $mainNavigation.status = 0;
        $callBack.status = 0;
        var winWidth = $(window).width(),
            winHeight = $(window).height();

        $(document).on('scroll', function () {

            var top = $(this).scrollTop();

            if (top > winHeight / 2) {

                goUp.show();

                if ($callBack.status !== 2) $callBack.removeClass('notactive');

            } else {

                goUp.hide();

                if ($callBack.status !== 1) $callBack.addClass('notactive');
            }

            if (top > 20 && $mainNavigation.status !== 2) {
                $mainNavigation.addClass("background");
                $mainNavigation.status = 2;
            } else if (top < 20 && $mainNavigation.status !== 1) {
                $mainNavigation.removeClass("background");
                $mainNavigation.status = 1;
            }


        });

    })();



    

});