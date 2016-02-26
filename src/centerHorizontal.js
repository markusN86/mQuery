import { _register } from "./_utils";

/**
 * Centers each element horizontally in its first positioned parent.
 *
 * @returns {jQuery} The current jQuery object
 */
function centerHorizontal ()
{
    return this.each(function ()
    {
        var $el = $(this),
            $parent = $el.offsetParent(),
            pWidth = $parent.width(),
            width = $el.width(),
            newWidth = width > pWidth ? pWidth : width,
            left = (pWidth - newWidth) / 2;

        $el.css({
            left: left,
            width: newWidth
        });
    });
}

_register("centerHorizontal", centerHorizontal);
export default centerHorizontal;
