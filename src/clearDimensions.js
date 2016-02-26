import { _register } from "./_utils";

/**
 * Resets the width, height, top and left style attributes
 *
 * @returns {jQuery} The current jQuery object
 */
function clearDimensions ()
{
    return this.each(function ()
    {
        $(this).css({
            width: "",
            height: "",
            left: "",
            top: ""
        });
    });
}

_register("clearDimensions", clearDimensions);
export default clearDimensions;
