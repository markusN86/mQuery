import { _attribute, _register } from "./_utils";

/**
 * Accesses the title attribute. If parameter {@link title} is set, it is applied to all elements in the current jQuery set. if omitted, the title of the first element only is returned.
 *
 * @param {string} title the title to set. if omitted, the title of the first element in the set is returned.
 * @returns {(string|jQuery)} if title is set, the current set of elements is returned, if not, the title or undefined.
 */
function title (title)
{
    return _attribute.apply(this, ["title", title]);
}

_register("title", title);
export default title;
