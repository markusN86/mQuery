import { _register } from "./_utils";

/**
 * Gets the next element in the current jQuery set, optionally filtered by a selector.
 * If the end is reached, it starts over at the beginning.
 *
 * @param {Selector} [selector] and optional jQuery selector to filter the elements
 * @returns {jQuery} The next matching jQuery element
 * @see http://api.jquery.com/next/
 */
function nextCycle (selector)
{
    var $el = this.next(selector);

    if (!$el.length)
    {
        $el = this.parent().children(selector).eq(0);
    }

    return $el;
}

_register("nextCycle", nextCycle);
export default nextCycle;
