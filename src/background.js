/**
 * Background JS
 * =======
 *
 * Add background images to HTML elements using HTML5 Data attributes.
 *
 * USAGE
 * =====
 *
 * <div class="yourClass" 
 *      data-src="/path/to/img.jpg" 
 *      data-attachment="scroll" 
 *      data-height="500px" //Set element height if not already set by content or CSS
 *      data-position = "center"
 *      date-size="contain">
 *
 * $(.'yourClass').dataBg();
 *
 * OPTIONS
 * =======
 * You can use the following data attributes
 *
 * data-src: path/to/image
 * data-height: Enter a height for the div i.e. 200px / 50% / 20em
 * data-attachment: CSS attachment i.e. fixed / scroll - default:scroll
 * data-position: Takes default css background positions i.e. top / center / bottom / 200px etc
 * 
 * Author: Nathanael McMillan (Inside Creative)
 * Ver: 0.1.2
 *
*/


;(function ($) {
    'use strict';
    $.fn.dataBg = function (options) {

        // Settings
        var settings = $.extend({
            dataSrc: 'src',
            dataAttachment: 'attachment',
            dataHeight: 'height',
            dataPosition: 'position',
            dataSize: 'size',
            dataRepeat: 'repeat'
        }, options);

        // Data variables
        var bgPosition = 'center';
        var bgAttachment = 'scroll';
        var bgHeight = 'auto';
        var bgSize = 'auto';
        var bgRepeat = 'no-repeat';

        // loop through each element 
        return this.each(function () {
            var bg_image        = $(this).data(settings.dataSrc);
            var bg_attachment   = $(this).data(settings.dataAttachment) === undefined ? bgAttachment : $(this).data(settings.dataAttachment);
            var bg_height       = $(this).data(settings.dataHeight) === undefined ? bgHeight : $(this).data(settings.dataHeight);
            var bg_position     = $(this).data(settings.dataPosition) === undefined ? bgPosition : $(this).data(settings.dataPosition);
            var bg_size         = $(this).data(settings.dataSize) === undefined ? bgSize : $(this).data(settings.dataSize);
            var bg_repeat       = $(this).data(settings.dataRepeat) === undefined ? bgRepeat : $(this).data(settings.dataRepeat);

            // Set inline css styles
            $(this).css({
                "background-image": "url(" + bg_image + ")",
                "background-position": bg_position,
                "background-attachment": bg_attachment,
                "min-height": bg_height,
                "background-size": bg_size,
                "background-repeat": bg_repeat
            });
        });
    };
}(jQuery));