import { _register } from "./_utils";

/**
 * Gets the previous element in the current jQuery set, optionally filtered by a selector.
 * If the end is reached, it starts over at the end.
 *
 * @param {Selector} [selector] and opional jQuery selector to filter the elements
 * @returns {jQuery} The previous matching jQuery element
 * @see http://api.jquery.com/prev/
 */
function prevCycle (selector)
{
    var $el = this.prev(selector);

    if (!$el.length)
    {
        $el = this.parent().children(selector);
        $el = $el.eq($el.length - 1);
    }

    return $el;
}

_register("prevCycle", prevCycle);
export default prevCycle;
