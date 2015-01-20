(function ($) {
    "use strict"

    var handlers = {};

    
    function appendMessage(elem) {
        var msg = elem.find('.im-msg'),
            now = new Date().toTimeString(),
            template = $(
                '<div class="im-item">\
                    <div class="im-item-header">\
                        <a href="#">\
                            <span class="im-author-thumb"></span>\
                            <span class="im-author-fullname">Lorem ipsum</span>\
                        </a>\
                        <span class="im-post-time"></span>\
                    </div>\
                </div>'
            );

        if (!elem.find('.im-item').length) {
            elem.find('.im-empty').hide();
        }

        template.append( $('<p>' + msg.text() + '</p>') )
                .find('.im-post-time')
                .text(now);

        msg.empty();

        elem.find('.im-items')
            .append(template);
    }


    handlers.onSend = function (e) {
        appendMessage( $(e.delegateTarget) );
    };


    handlers.onPressCtrlEnter = function (e) {
        if (e.keyCode === 13 && e.ctrlKey) {
            appendMessage( $(e.delegateTarget) );
            return false;
        }
    };


    $(function () {
        $('#im').on('click', '.im-send', handlers.onSend)
                .on('keydown', '.im-msg', handlers.onPressCtrlEnter);
    });
}(jQuery));