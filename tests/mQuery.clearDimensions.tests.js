(function ($, QUnit)
{
    "use strict";

    var _$el,
        width = 400,
        height = 400,
        _$output = $("<output id=\"test-dom\" style=\"position:relative;display:block;height:" +
            height + "px;width:" + width + "px;\"></output>").appendTo("body");

    QUnit.module("mQuery.id", {
        beforeEach: function ()
        {
            _$el = $("<div />").appendTo(_$output);
        },
        afterEach: function ()
        {
            _$el.remove();
        }
    });

    QUnit.test("clearDimensions", function (assert)
    {
        assert.expect(0);
    });

})(jQuery, QUnit);
