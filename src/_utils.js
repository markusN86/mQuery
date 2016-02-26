/**
 * Provides access to the dom attributes
 *
 * @param {string} name the name of the attribute to access
 * @param {string} [value] the value of the attribute to access
 * @param {Boolean} [onlyFirst] If set to true, only the first element is accessed for set operations
 * @returns {(?string|jQuery)} either the value if set, or the current jQuery object
 */
export function _attribute (name, value, onlyFirst)
{

    if ((value && typeof(value) === "string") || value === null)
    {
        if (onlyFirst !== true)
        {
            return this.each(function ()
            {
                $(this).attr(name, value);
            });
        }

        return this.eq(0).attr(name, value);
    }
    else
    {
        return this.eq(0).attr(name);
    }
}

export function _register(name, fn)
{
    if (jQuery && jQuery.fn)
        jQuery.fn[name] = fn;
}
