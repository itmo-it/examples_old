(function ($) {
    "use strict"

    $(function () {
        var result = $('#for_result'),
            checkbox,
            checkbox2,
            link;

        
        checkbox = $('#checkbox');
        checkbox2 = $('#checkbox2');

        result.append(
            '<dt>Значение атрибута checked у элемента INPUT</dt>\
            <dd>' + checkbox.attr('checked') + ', ' + checkbox2.attr('checked') + '</dd>\
            <dt>Значение свойства checked у элемента INPUT</dt>\
            <dd>' + checkbox.prop('checked') + ', ' + checkbox2.prop('checked') + '</dd>'
        );


        link = $('#link');

        result.append(
            '<dt>Значение атрибута href у элемента A</dt>\
            <dd>' + link.attr('href') + '</dd>\
            <dt>Значение свойства href у элемента A</dt>\
            <dd>' + link.prop('href') + '</dd>'
        );

        SyntaxHighlighter.all();
    });
}(jQuery));