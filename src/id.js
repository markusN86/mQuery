import { _attribute, _register } from "./_utils";

/**
 * Accesses the id attribute. If parameter {@link id} is set, it is applied to all elements in the current jQuery set. if omitted, the id of the first element only is returned.
 *
 * @param {string} id the id to set. if omitted, the id of the first element in the set is returned.
 * @returns {(string|jQuery)} if id is set, the current set of elements is returned, if not, the id or undefined.
 */
function id (id)
{
    return _attribute.apply(this, ["id", id, true]);
}

_register("id", id);
export default id;
