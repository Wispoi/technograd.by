document.addEventListener("DOMContentLoaded", function () {

    //jumbotron
    $('body:not(.inner-page) .jumbotron-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        loop: true,
        asNavFor: '.jumbotron-nav',
    });
    $('body.inner-page .jumbotron-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        loop: true,
    });
    var containerLeft = $('.container .row').position().left
    $('body.inner-page .jumbotron-slider .slick-prev').css("left", containerLeft - 88)
    $('body.inner-page .jumbotron-slider .slick-next').css("right", containerLeft - 88)
    $( window ).resize(function() {
        var containerLeft = $('.container .row').position().left
        $('body.inner-page .jumbotron-slider .slick-prev').css("left", containerLeft - 88)
        $('body.inner-page .jumbotron-slider .slick-next').css("right", containerLeft - 88)
    });
    $('.jumbotron-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.jumbotron-slider',
        dots: false,
        arrows: false,
        loop: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true
                }
            },
        ]
    });

    //header
    $(document).keyup(function(e) {
        if (e.key === "Escape") { 
           if ($('body').hasClass('modal-opened')) {
                $('body').removeClass('modal-opened')
                $('.modal').removeClass('opened')
           }
        }
    });
    $('.open-menu').on('click', function () {
        $('body').toggleClass('menu-opened')
        $('#mMenu').toggleClass('mm-menu_opened')
    });
    $(document).mouseup(function(e){
        var container = $("#mMenu");
        if(!container.is(e.target) && container.has(e.target).length === 0){
            $('body').removeClass('menu-opened')
            $('#mMenu').removeClass('mm-menu_opened')
        }
    });
    $('.open-modal').on('click', function (e) {
        e.preventDefault();
        $('body').addClass('modal-opened')
        var modal = $(this).attr('data-modal')
        $(`.modal[data-modal="` + modal + `"]`).addClass('opened').find('input').first().focus()
    });
    $('.close-modal').on('click', function () {
        $('body').removeClass('modal-opened')
        $(this).closest('.modal').removeClass('opened')
    });
    $('.header-number img').on('click', function (e) {
        e.preventDefault();
    });
    var $document = $(document),
    $element = $('.subheader'),
    className = 'scrolled';

    $(window).on('load resize', function() {

        if ($(window).width() < 1440) {
            new Mmenu( "#mMenu", {
            }, {
                offCanvas: {
                    page: {
                        nodetype: "section"
                    }
                }
            });
            var $document = $(document),
            $element = $('header'),
            className = 'scrolled';
            $(window).on('resize scroll', function() {
            if ($document.scrollTop() >= 600 ) {
                $element.addClass(className);
            } else {
                $element.removeClass(className);
            }
            });
        } else {
            $('body').removeClass('mm-wrapper')
        }

    });
    $(window).on('resize scroll', function() {
        if ($document.scrollTop() >= 600) {
            $element.addClass(className);
        } else {
            $element.removeClass(className);
        }
    });



    //team section
    $('.team-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        loop: true,
        asNavFor: '.team-slider__nav',
    });
    $('.team-slider__nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.team-slider',
        dots: false,
        fade: false,
        arrows: false,
        loop: true,
        focusOnSelect: true,
    });

    //tabs
    $('.tabs-nav li').on('click', function () {
        var index = $(this).index()
        $(this).parent().find('.active').removeClass('active')
        $(this).addClass('active')
        $(this).parent().parent().parent().parent().find('.tabs-panel.active').removeClass('active')
        $(this).parent().parent().parent().parent().find('.tabs-panel').eq(index).addClass('active')
    });
    $('.promises-panel').on('click', function () {
        $(this).parent().find('.active').removeClass('active')
        $(this).addClass('active')
    });

    //filter
    $('.filter ul li').on('click', function () {
        $(this).parent().find('.active').removeClass('active')
        $(this).addClass('active')
    });

    //load more
    $('.solutions-more').on('click', function () {
        $(this).parent().find('.solutions-wrapper').addClass('active')
    });

    //strong section
    if ($(window).width() < 768)
    {
        $('.strong-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            loop: true,
            dots: true
        });
    }

    //category section
    $('.category-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        loop: true,
        dots: false
    });

    //reviews section
    $('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        loop: true,
        dots: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            },
        ]
    });

    //projects section   
    $('.projects-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        loop: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            },
        ]
    });

    //products section   
    $('.products-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        loop: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            },
        ]
    });

    //product section
    $('.card-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        loop: true,
        dots: false
    });

    //accordion section
    $('.accordion-header').on('click', function () {
        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active')
            $(this).parent().find('.accordion-body').slideUp()
        } else {
            $(this).parent().parent().find('.active').removeClass('active')
            $(this).parent().parent().find('.accordion-body').slideUp()  
            $(this).parent().addClass('active')
            $(this).parent().find('.accordion-body').slideDown()     
        }
    });
    
    //form
    $(".phone-input").inputmask("+375 (99) 999-99-99")
    $('.vacancy-modal .form-checkbox').on('click', function (e) {
        $('.upper-form ').toggleClass('attach')
    });

    //calculate section
    $('.calc .next-step').on('click', function (e) {
        e.stopPropagation()
        if ($(this).closest('.accordion-item').index() === 0 ) {
            if ($(this).closest('.accordion-item').find('.product-group:last-child .active').length !== 0) {
                $(this).closest('.accordion-item').find('.accordion-body').slideUp()  
                $(this).closest('.accordion-item').removeClass('active')
                $(this).closest('.accordion-item').next().addClass('active')
                $(this).closest('.accordion-item').next().find('.accordion-body').slideDown()    
            } else {
                $(this).parent().find('p').css('color', 'red');
                var $this = $(this)
                setTimeout(function(){ $this.parent().find('p').css('color', '#243746'); }, 3000);
            }
        } else {
            $(this).closest('.accordion-item').find('.accordion-body').slideUp()  
            $(this).closest('.accordion-item').removeClass('active')
            $(this).closest('.accordion-item').next().addClass('active')
            $(this).closest('.accordion-item').next().find('.accordion-body').slideDown()
        }

    });
    $('.calc .prev-step').on('click', function (e) {
        e.stopPropagation()
        $(this).closest('.accordion-footer').removeClass('show')
        $(this).closest('.accordion-body').find('.product-group').removeClass('show')
        $(this).closest('.accordion-body').find('.product-group').eq(0).addClass('show')
    });
    $('.calc .product-group__item').on('click', function () {
        var value = $(this).attr('data-calc')
        if ($(this).parent().index() === 0) {
            $(this).closest('.accordion-item').find('.accordion-header').find('.accordion-header__selected span').remove()
            $(this).closest('.accordion-item').find('.accordion-header__selected').append("<span>"+value+'</span>')
            $(this).parent().removeClass('show').next().addClass('show').parent().next().addClass('show')
        } else {
            if ($(this).closest('.accordion-item').find('.accordion-header__selected span').length > 0) {
                $(this).closest('.accordion-item').find('.accordion-header').find('.accordion-header__selected span').eq(1).remove()
                $(this).closest('.accordion-item').find('.accordion-header__selected').append("<span>"+value+'</span>')
            }
        }
        $(this).parent().find('.active').removeClass('active')
        $(this).toggleClass('active')
    });
    $('.calc .form-toggle input').on('change', function () {
        var value = $(this).parent().attr('data-toggle')
        if ($(this).is(':checked')) {
            $(this).closest('.accordion-item').find('.accordion-header__selected').append("<span>"+value+'</span>')
        } else {
            $(this).closest('.accordion-item').find('.accordion-header').find('.accordion-header__selected span:contains('+value+')').remove()
        }
    });
    $('.calc-width').bind('keyup mouseup', function () {
        var value1 = $('.calc-width').val();
        var value2 = $('.calc-height').val();
        if (value1 != undefined && value1.length > 0) {
            $(this).closest('.accordion-item').find('.accordion-header').find('.accordion-header__selected .width-value').remove()
            $(this).closest('.accordion-item').find('.accordion-header__selected').append("<span class='width-value'>"+value1+'x'+value2+'</span>')
        } else {
            $(this).closest('.accordion-item').find('.accordion-header').find('.accordion-header__selected .width-value').remove()
        }    
    });
    $('.calc-height').bind('keyup mouseup', function () {
        var value1 = $('.calc-width').val();
        var value2 = $('.calc-height').val();
        if (value1 != undefined && value1.length > 0) {
            $(this).closest('.accordion-item').find('.accordion-header').find('.accordion-header__selected .width-value').remove()
            $(this).closest('.accordion-item').find('.accordion-header__selected').append("<span class='width-value'>"+value1+'x'+value2+'</span>')
        } else {
            $(this).closest('.accordion-item').find('.accordion-header').find('.accordion-header__selected .width-value').remove()
        }    
    });
    $('.calc .response-additional__header').on('click', function () {
        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active')
            $(this).parent().find('.response-body').slideUp()
        } else {
            $(this).parent().parent().find('.active').removeClass('active')
            $(this).parent().parent().find('.response-body').slideUp()  
            $(this).parent().addClass('active')
            $(this).parent().find('.response-body').slideDown()     
        }
    });
    $('.show-response').on('click', function () {
        $('.calc-response').slideDown()
    });

    //videos section
    $('.video-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        loop: true,
        asNavFor: '.video-slider__back',
    });
    $('.video-slider__back').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        loop: true,
        asNavFor: '.video-slider',
    });

    //scroll to section
    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[href^="#m"]')
    .click(function(event) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          if ($(window).width() > 768) {
            $('html, body').animate({
                scrollTop: target.offset().top - 190
              }, 1000 );
          } else {
            $('html, body').animate({
                scrollTop: target.offset().top - 150
              }, 1000 ); 
          }

        }
    });

    //prices section
    $(".prices .compare-row div").on("mouseenter", function () {
        $(this).parent().addClass('hover')
    }).on("mouseleave", function () {
        $(this).parent().removeClass('hover')
    });

    //compare scroll
    $( ".compare .compare-wrapper" ).each(function() {
        let $this = $(this)
        if ($('.compare-legend').length > 0) {
        $(window).on("load compareListUpdate resize",function(){
        updateCompareScroll();
        $this.find(".compare-legend ul li").each(function(){
            var maxHeight = 0;
            curIndex = $(this).index() + 1;
            curRow = $this.find('.compare-wrap').find('.compare-row').eq(curIndex);
            maxHeight = curRow.find('.compare-elem__data').height();
            $(this).height(maxHeight);
        });
        paddingHeight = $this.find('.compare-wrap').find('.compare-row').eq(0).height();
        $this.find('.compare-legend').css('padding-top', paddingHeight)
        
        });

        function updateCompareScroll(){
        var wh = $(window).width();
        var status = $this.find(".compare-scroll").hasClass("mCustomScrollbar");

        if (wh < 768 || $this.find('.compare-row .compare-elem__data').length < 3 ) {
            $this.find('.compare-scroll').mCustomScrollbar("destroy");
            $this.find('.compare-nav').hide();
            $this.find('.compare-nav').css('height', '0')
        }

        else {
            if (!status) {

                $this.find('.compare-scroll').mCustomScrollbar({
                axis:"x",
                theme:"dark",
                mouseWheel:{scrollAmount:205,normalizeDelta:true},
                snapAmount:205,
                // alwaysShowScrollbar: 0,
                autoDraggerLength: true,
                scrollButtons: false,
            });
            }
            else {
                $this.find('.compare-scroll').mCustomScrollbar("update");
            }
        }
        }
    }
    })

    //fixed anchor filter
    $(window).on('resize scroll', function() {
        if ($('.js-filter').length > 0) {
            if ($('.js-filter').isInViewport() === false && $document.scrollTop() >= 600 && $document.scrollTop() < $('.js-section').last().next().position().top + 300) {
                $('.js-filter').addClass('scrolled')
              } else {
                $('.js-filter').removeClass('scrolled')
              }
        } 
        onScroll()
    });
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.js-filter li > a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href")).closest('.js-section');
            if (refElement.position().top + (refElement.outerHeight(true)/1.5) <= scrollPos && refElement.position().top + (refElement.outerHeight(true)*1.5) > scrollPos ) {
                $('.js-filter li.active').removeClass("active");
                currLink.parent().addClass("active");
            }
            else{
                currLink.parent().removeClass("active");
            }
        });
    }

    //more text click
    $('.more-info').on('click', function () {
        $(this).parent().find('.more-text').toggleClass('show')
    });
});




$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};