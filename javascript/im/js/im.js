(function () {
    "use strict";

    var handlers = {};

    
    function appendMessage(elem) {
        var message = elem.querySelector('.im-msg'),
            now = document.createTextNode( new Date().toTimeString() ),
            template = document.createElement('div'),
            templateMessage;

        template.classList.add('im-item');

        template.innerHTML = '\
            <div class="im-item-header">\
                <a href="#">\
                    <span class="im-author-thumb"></span>\
                    <span class="im-author-fullname">Lorem ipsum</span>\
                </a>\
                <span class="im-post-time"></span>\
            </div>';

        if (!elem.querySelectorAll('.im-item').length) {
            // если сообщений нет, значит текущее сообщение первое
            // скрываем предупреждение
            elem.querySelector('.im-empty').style.display = 'none';
        }

        templateMessage = document.createElement('p');
        templateMessage.appendChild( document.createTextNode(message.innerHTML) );
        template.appendChild(templateMessage);

        message.innerHTML = '';

        template.querySelector('.im-post-time')
                .appendChild(now);

        elem.querySelector('.im-items')
            .appendChild(template);
    }


    handlers.onSend = function (e) {
        if (e.target.classList.contains('im-send')) {
            appendMessage(this);
        }
    };


    handlers.onPressCtrlEnter = function (e) {
        if (e.target.classList.contains('im-msg') && e.keyCode === 13 && e.ctrlKey) {
            appendMessage(this);
            e.preventDefault();
        }
    };


    window.addEventListener('DOMContentLoaded', function () {
        var im = document.querySelector('#im');

        im.addEventListener('click', handlers.onSend, false);
        im.addEventListener('keydown', handlers.onPressCtrlEnter, false);
    });
}());