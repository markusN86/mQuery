(function (factory)
{
    "use strict";

    /* istanbul ignore next */
    if (typeof(define) === "function" && define.amd)
    {
        define(["jquery"], factory);
    }
    else if (typeof(module) === "object" && module.exports)
    {
        factory(require("jquery"));
    }
    else
    {
        factory(jQuery);
    }
}(function ($, undefined)
{
    /* jshint validthis:true */

    "use strict";

    /**
     * Represents a jQuery object
     *
     * @typedef {object} jQuery
     */

    /**
     * Represents a jQuery selector
     *
     * @typedef {object} Selector
     */

    /**
     * Provides access to the dom attributes
     *
     * @param {string} name the name of the attribute to access
     * @param {string} [value] the value of the attribute to access
     * @param {Boolean} [onlyFirst] If set to true, only the first element is accessed for set operations
     * @returns {(?string|jQuery)} either the value if set, or the current jQuery object
     */

    function _attribute (name, value, onlyFirst)
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

    /**
     * Accesses the id attribute. If parameter {@link id} is set, it is applied to all elements in the current jQuery set. if omitted, the id of the first element only is returned.
     *
     * @param {string} id the id to set. if omitted, the id of the first element in the set is returned.
     * @returns {(string|jQuery)} if id is set, the current set of elements is returned, if not, the id or undefined.
     */
    $.fn.id = function (id)
    {
        return _attribute.apply(this, ["id", id, true]);
    };

    /**
     * Accesses the title attribute. If parameter {@link title} is set, it is applied to all elements in the current jQuery set. if omitted, the title of the first element only is returned.
     *
     * @param {string} title the title to set. if omitted, the title of the first element in the set is returned.
     * @returns {(string|jQuery)} if title is set, the current set of elements is returned, if not, the title or undefined.
     */
    $.fn.title = function (title)
    {
        return _attribute.apply(this, ["title", title]);
    };

    /**
     * Accesses the src attribute. If parameter {@link src} is set, it is applied to all elements in the current jQuery set. if omitted, the src of the first element only is returned.
     *
     * @param {string} src the src to set. if omitted, the src of the first element in the set is returned.
     * @returns {(string|jQuery)} if src is set, the current set of elements is returned, if not, the src or undefined.
     */
    $.fn.src = function (src)
    {
        return _attribute.apply(this, ["src", src]);
    };

    /**
     * Gets the next element in the current jQuery set, optionally filtered by a selector.
     * If the end is reached, it starts over at the beginning.
     *
     * @param {Selector} [selector] and optional jQuery selector to filter the elements
     * @returns {jQuery} The next matching jQuery element
     * @see http://api.jquery.com/next/
     */
    $.fn.nextCycle = function (selector)
    {
        var $el = this.next(selector);

        if (!$el.length)
        {
            $el = this.parent().children(selector).eq(0);
        }

        return $el;
    };

    /**
     * Gets the previous element in the current jQuery set, optionally filtered by a selector.
     * If the end is reached, it starts over at the end.
     *
     * @param {Selector} [selector] and opional jQuery selector to filter the elements
     * @returns {jQuery} The previous matching jQuery element
     * @see http://api.jquery.com/prev/
     */
    $.fn.prevCycle = function (selector)
    {
        var $el = this.prev(selector);

        if (!$el.length)
        {
            $el = this.parent().children(selector);
            $el = $el.eq($el.length - 1);
        }

        return $el;
    };

    /**
     * Centers each element of the set in its first positioned parent.
     * The element itself must also be positioned.
     *
     * @param {Number} [w = undefined] Maximum width of the element.
     * @param {Number} [h = undefined] Maximum height of the element
     * @returns {jQuery} the current jQuery object
     */
    $.fn.center = function (w, h)
    {
        var position = "absolute";

        if (arguments.length === 1 && typeof(arguments[0]) === "object")
        {
            h = arguments[0].height;
            position = arguments[0].position || position;
            w = arguments[0].width;
        }
        return this.each(function ()
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
    };

    /**
     * Centers each element vertically in its first positioned parent.
     *
     * @returns {jQuery} The current jQuery object
     */
    $.fn.centerVertical = function ()
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
    };

    /**
     * Centers each element horizontally in its first positioned parent.
     *
     * @returns {jQuery} The current jQuery object
     */
    $.fn.centerHorizontal = function ()
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
    };

    /**
     * Resets the width, height, top and left style attributes
     *
     * @returns {jQuery} The current jQuery object
     */
    $.fn.clearDimensions = function ()
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
    };

}));
