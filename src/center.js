/**
 * Centers each element of the set in its first positioned parent.
 * The element itself must also be positioned.
 *
 * @param {Number} [w = undefined] Maximum width of the element.
 * @param {Number} [h = undefined] Maximum height of the element
 * @returns {jQuery} the current jQuery object
 */

export default function center (w, h)
{
    "use strict";

    var position = "absolute";

    if (arguments.length === 1 && typeof(arguments[0]) == "object")
    {
        h = arguments[0].height;
        position = arguments[0].position || position;
        w = arguments[0].width;
    }

    return this.each(() =>
    {
        var $el = $(this),
            $parent = $el.offsetParent(),
            pHeight = $parent.innerHeight(),
            pWidth = $parent.innerWidth(),
            elHeight = $el.outerHeight(),
            elWidth = $el.outerWidth(),
            maxHeight = h !== undefined ? Math.min(h, pHeight) : pHeight,
            maxWidth = w !== undefined ? Math.min(w, pWidth) : pWidth,
            ratio = elWidth / elHeight,
            height = elHeight,
            width = elWidth,
            top = 0,
            left = 0;

        if (ratio >= 1)
        {
            left = (pWidth - elWidth) / 2;

            if (elWidth > maxWidth)
            {
                width = maxWidth;
                left = (pWidth - width) / 2;
                height = width / ratio;
            }

            top = (pHeight - height) / 2;

            if (height > maxHeight)
            {
                height = maxHeight;
                top = (pHeight - height) / 2;
                width = height * ratio;
                left = (pWidth - width) / 2;
            }
        }
        else if (ratio < 1)
        {
            top = (pHeight - elHeight) / 2;

            if (elHeight > maxHeight)
            {
                height = maxHeight;
                top = (pHeight - height) / 2;
                width = height * ratio;
            }

            left = (pWidth - width) / 2;

            if (width > maxWidth)
            {
                width = maxWidth;
                left = (pWidth - width) / 2;
                height = width / ratio;
                top = (pHeight - height) / 2;
            }
        }

        if (position !== "relative")
        {
            $el.css({
                top: top,
                left: left,
                width: width,
                height: height
            });
        }
        else
        {
            $el.css({
                "margin-top": top,
                "margin-left": left,
                width: width,
                height: height
            });
        }
    });
}
