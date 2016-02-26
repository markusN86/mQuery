import { _attribute, _register } from "./_utils";

/**
 * Accesses the src attribute. If parameter {@link src} is set, it is applied to all elements in the current jQuery set. if omitted, the src of the first element only is returned.
 *
 * @param {string} src the src to set. if omitted, the src of the first element in the set is returned.
 * @returns {(string|jQuery)} if src is set, the current set of elements is returned, if not, the src or undefined.
 */
function src (src)
{
    return _attribute.apply(this, ["src", src]);
}

_register(src);
export default src;
