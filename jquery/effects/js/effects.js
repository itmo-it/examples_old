(function ($) {
    'use strict';

    var handlers = {};

    
    handlers.onClickShow = function () {
        $('#item_show_hide').show();
    };

    handlers.onClickHide = function () {
        $('#item_show_hide').hide();
    };

    handlers.onClickHideShow = function () {
        $('#item_show_hide').hide('fast').show('slow');
    };

    handlers.onClickToggle = function () {
        $('#item_toggle').toggle();
    };

    handlers.onClickToggleSlow = function () {
        $('#item_toggle').toggle('slow');
    };

    handlers.onClickFadeIn = function () {
        $('#item_fade').fadeIn();
    };

    handlers.onClickFadeOut = function () {
        $('#item_fade').fadeOut();
    };

    handlers.onClickFadeTo = function () {
        $('#item_fade').fadeTo('slow', 0.5);
    };

    handlers.onClickFadeReset = function () {
        $('#item_fade').fadeTo('slow', 1);
    };

    handlers.onClickFadeToggle = function () {
        $('#item_fade').fadeToggle();
    };

    handlers.onClickSlideDown = function () {
        $('#item_slide').slideDown();
    };

    handlers.onClickSlideUp = function () {
        $('#item_slide').slideUp();
    };

    handlers.onClickSlideToggle = function () {
        $('#item_slide').slideToggle();
    };

    handlers.onClickRunAnimate = function () {
        $('#item_animated_box')
            .animate({
                    opacity: 0.1,
                    left: '+=330'
                },
                1200
            )
            .animate({
                    opacity: 0.4,
                    top: '+=190',
                    height: 20,
                    width: 20
                },
                'slow'
            )
            .animate({
                    opacity: 1,
                    left: 0,
                    height: 100,
                    width: 100
                },
                'slow'
            )
            .animate({
                    top: 0
                },
                'fast'
            )
            .slideUp()
            .slideDown('slow')
    };

    handlers.onClickRun = function () {
        $('#item_animated_box')
            .animate({
                    left: '+=330'
                },
                1200
            )
            .addClass('item-animated-box-active')
            .animate({
                    left: '-=165',
                    top: '+=190'
                },
                'slow'
            )
            .animate({
                    left: 0,
                    top: 0
                },
                'slow'
            )
            .removeClass('item-animated-box-active');
    };

    handlers.onClickRunQueue = function () {
        $('#item_animated_box')
            .animate({
                    left: '+=330'
                },
                1200
            )
            .queue(function () {
                $(this).addClass('item-animated-box-active')
                       .dequeue();
            })
            .animate({
                    left: '-=165',
                    top: '+=190'
                },
                'slow'
            )
            .animate({
                    left: 0,
                    top: 0
                },
                'slow'
            )
            .queue(function () {
                $(this).removeClass('item-animated-box-active')
                       .dequeue();
            });
    };


    $(function () {
        $('#buttons')
            .on('click', '.show', handlers.onClickShow)
            .on('click', '.hide', handlers.onClickHide)
            .on('click', '.hide-show', handlers.onClickHideShow)
            .on('click', '.toggle', handlers.onClickToggle)
            .on('click', '.toggle-slow', handlers.onClickToggleSlow)
            .on('click', '.fade-in', handlers.onClickFadeIn)
            .on('click', '.fade-out', handlers.onClickFadeOut)
            .on('click', '.fade-to', handlers.onClickFadeTo)
            .on('click', '.fade-reset', handlers.onClickFadeReset)
            .on('click', '.fade-toggle', handlers.onClickFadeToggle)
            .on('click', '.slide-down', handlers.onClickSlideDown)
            .on('click', '.slide-up', handlers.onClickSlideUp)
            .on('click', '.slide-toggle', handlers.onClickSlideToggle)
            .on('click', '.run-animate', handlers.onClickRunAnimate)
            .on('click', '.run', handlers.onClickRun)
            .on('click', '.run-queue', handlers.onClickRunQueue);
    });
}(jQuery));