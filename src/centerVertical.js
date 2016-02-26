import { _register } from "./_utils";

/**
 * Centers each element vertically in its first positioned parent.
 *
 * @returns {jQuery} The current jQuery object
 */
function centerVertical ()
{
    return this.each(function ()
    {
        var $el = $(this),
            $parent = $el.offsetParent(),
            pHeight = $parent.height(),
            height = $el.height(),
            newHeight = height > pHeight ? pHeight : height,
            top = (pHeight - newHeight) / 2;

        $el.css({
            top: top,
            height: newHeight
        });
    });
}

_register("centerVertical", centerVertical);
export default centerVertical;
