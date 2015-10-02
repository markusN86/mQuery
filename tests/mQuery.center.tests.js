(function ($, QUnit)
{
    "use strict";

    var _$el,
        width = 400,
        height = 400,
        _$output = $("<output id=\"test-dom\" style=\"position:relative;display:block;height:" +
            height + "px;width:" + width + "px;\"></output>").appendTo("body");

    QUnit.module("mQuery.center", {
        beforeEach: function ()
        {
            _$el = $("<div />").appendTo(_$output);
        },
        afterEach: function ()
        {
            _$el.remove();
        }
    });

    function testCase (title, height, width, maxHeight, maxWidth,
                         expectedHeight, expectedWidth, expectedTop, expectedLeft)
    {
        return {
            title: title,
            height: height,
            width: width,
            maxHeight: maxHeight,
            maxWidth: maxWidth,
            expected: {
                height: expectedHeight,
                width: expectedWidth,
                top: expectedTop,
                left: expectedLeft
            }
        };
    }

    function testCenter (msg, testCase, assert)
    {
        var pos = _$el.position();

        assert.equal(_$el.outerHeight(), testCase.expected.height, "Height: " + msg);
        assert.equal(_$el.outerWidth(), testCase.expected.width, "Width: " + msg);
        assert.equal(pos.top, testCase.expected.top, "Position top: " + msg);
        assert.equal(pos.left, testCase.expected.left, "Position left: " + msg);
    }

    var cases = QUnit.cases([
        testCase("smaller square", 200, 200, undefined, undefined, 200, 200, 100, 100),
        testCase("smaller portrait", 200, 100, undefined, undefined, 200, 100, 100, 150),
        testCase("smaller landscape", 100, 200, undefined, undefined, 100, 200, 150, 100),
        testCase("equal square", 400, 400, undefined, undefined, 400, 400, 0, 0),
        testCase("equal portrait", 400, 100, undefined, undefined, 400, 100, 0, 150),
        testCase("equal landscape", 100, 400, undefined, undefined, 100, 400, 150, 0),
        testCase("larger square", 800, 800, undefined, undefined, 400, 400, 0, 0),
        testCase("larger portrait", 800, 600, undefined, undefined, 400, 300, 0, 50),
        testCase("larger landscape", 600, 800, undefined, undefined, 300, 400, 50, 0),

        //
        testCase("max-size < smaller square", 200, 200, 100, 100, 100, 100, 150, 150),
        testCase("max-size < smaller portrait", 200, 100, 100, 100, 100, 50, 150, 175),
        testCase("max-size < smaller landscape", 100, 200, 100, 100, 50, 100, 175, 150),
        testCase("max-size < equal square", 400, 400, 100, 100, 100, 100, 150, 150),
        testCase("max-size < equal portrait", 400, 200, 100, 100, 100, 50, 150, 175),
        testCase("max-size < equal landscape", 200, 400, 100, 100, 50, 100, 175, 150),
        testCase("max-size < larger square", 800, 800, 100, 100, 100, 100, 150, 150),
        testCase("max-size < larger portrait", 800, 400, 100, 100, 100, 50, 150, 175),
        testCase("max-size < larger landscape", 400, 800, 100, 100, 50, 100, 175, 150),

        //
        testCase("max-size = smaller square", 200, 200, 400, 400, 200, 200, 100, 100),
        testCase("max-size = smaller portrait", 200, 100, 400, 400, 200, 100, 100, 150),
        testCase("max-size = smaller landscape", 100, 200, 400, 400, 100, 200, 150, 100),
        testCase("max-size = equal square", 400, 400, 400, 400, 400, 400, 0, 0),
        testCase("max-size = equal portrait", 400, 100, 400, 400, 400, 100, 0, 150),
        testCase("max-size = equal landscape", 100, 400, 400, 400, 100, 400, 150, 0),
        testCase("max-size = larger square", 800, 800, 400, 400, 400, 400, 0, 0),
        testCase("max-size = larger portrait", 800, 600, 400, 400, 400, 300, 0, 50),
        testCase("max-size = larger landscape", 600, 800, 400, 400, 300, 400, 50, 0),

        //
        testCase("max-size > smaller square", 200, 200, 800, 800, 200, 200, 100, 100),
        testCase("max-size > smaller portrait", 200, 100, 800, 800, 200, 100, 100, 150),
        testCase("max-size > smaller landscape", 100, 200, 800, 800, 100, 200, 150, 100),
        testCase("max-size > equal square", 400, 400, 800, 800, 400, 400, 0, 0),
        testCase("max-size > equal portrait", 400, 100, 800, 800, 400, 100, 0, 150),
        testCase("max-size > equal landscape", 100, 400, 800, 800, 100, 400, 150, 0),
        testCase("max-size > larger square", 800, 800, 800, 800, 400, 400, 0, 0),
        testCase("max-size > larger portrait", 800, 600, 800, 800, 400, 300, 0, 50),
        testCase("max-size > larger landscape", 600, 800, 800, 800, 300, 400, 50, 0),

        //
        testCase("max-size < mh smaller square", 200, 200, 100, undefined, 100, 100, 150, 150),
        testCase("max-size < mh smaller portrait", 200, 100, 100, undefined, 100, 50, 150, 175),
        testCase("max-size < mh smaller landscape", 100, 200, 100, undefined, 100, 200, 150, 100),
        testCase("max-size < mh equal square", 400, 400, 100, undefined, 100, 100, 150, 150),
        testCase("max-size < mh equal portrait", 400, 200, 100, undefined, 100, 50, 150, 175),
        testCase("max-size < mh equal landscape", 200, 400, 100, undefined, 100, 200, 150, 100),
        testCase("max-size < mh larger square", 800, 800, 100, undefined, 100, 100, 150, 150),
        testCase("max-size < mh larger portrait", 800, 400, 100, undefined, 100, 50, 150, 175),
        testCase("max-size < mh larger landscape", 400, 800, 100, undefined, 100, 200, 150, 100),

        //
        testCase("max-size = mh smaller square", 200, 200, 400, undefined, 200, 200, 100, 100),
        testCase("max-size = mh smaller portrait", 200, 100, 400, undefined, 200, 100, 100, 150),
        testCase("max-size = mh smaller landscape", 100, 200, 400, undefined, 100, 200, 150, 100),
        testCase("max-size = mh equal square", 400, 400, 400, undefined, 400, 400, 0, 0),
        testCase("max-size = mh equal portrait", 400, 100, 400, undefined, 400, 100, 0, 150),
        testCase("max-size = mh equal landscape", 100, 400, 400, undefined, 100, 400, 150, 0),
        testCase("max-size = mh larger square", 800, 800, 400, undefined, 400, 400, 0, 0),
        testCase("max-size = mh larger portrait", 800, 600, 400, undefined, 400, 300, 0, 50),
        testCase("max-size = mh larger landscape", 600, 800, 400, undefined, 300, 400, 50, 0),

        //
        testCase("max-size > mh smaller square", 200, 200, 800, undefined, 200, 200, 100, 100),
        testCase("max-size > mh smaller portrait", 200, 100, 800, undefined, 200, 100, 100, 150),
        testCase("max-size > mh smaller landscape", 100, 200, 800, undefined, 100, 200, 150, 100),
        testCase("max-size > mh equal square", 400, 400, 800, undefined, 400, 400, 0, 0),
        testCase("max-size > mh equal portrait", 400, 100, 800, undefined, 400, 100, 0, 150),
        testCase("max-size > mh equal landscape", 100, 400, 800, undefined, 100, 400, 150, 0),
        testCase("max-size > mh larger square", 800, 800, 800, undefined, 400, 400, 0, 0),
        testCase("max-size > mh larger portrait", 800, 600, 800, undefined, 400, 300, 0, 50),
        testCase("max-size > mh larger landscape", 600, 800, 800, undefined, 300, 400, 50, 0),

        //
        testCase("max-size < mw smaller square", 200, 200, undefined, 100, 100, 100, 150, 150),
        testCase("max-size < mw smaller portrait", 200, 100, undefined, 100, 200, 100, 100, 150),
        testCase("max-size < mw smaller landscape", 100, 200, undefined, 100, 50, 100, 175, 150),
        testCase("max-size < mw equal square", 400, 400, undefined, 100, 100, 100, 150, 150),
        testCase("max-size < mw equal portrait", 400, 200, undefined, 100, 200, 100, 100, 150),
        testCase("max-size < mw equal landscape", 200, 400, undefined, 100, 50, 100, 175, 150),
        testCase("max-size < mw larger square", 800, 800, undefined, 100, 100, 100, 150, 150),
        testCase("max-size < mw larger portrait", 800, 400, undefined, 100, 200, 100, 100, 150),
        testCase("max-size < mw larger landscape", 400, 800, undefined, 100, 50, 100, 175, 150),

        //
        testCase("max-size = mw smaller square", 200, 200, undefined, 400, 200, 200, 100, 100),
        testCase("max-size = mw smaller portrait", 200, 100, undefined, 400, 200, 100, 100, 150),
        testCase("max-size = mw smaller landscape", 100, 200, undefined, 400, 100, 200, 150, 100),
        testCase("max-size = mw equal square", 400, 400, undefined, 400, 400, 400, 0, 0),
        testCase("max-size = mw equal portrait", 400, 100, undefined, 400, 400, 100, 0, 150),
        testCase("max-size = mw equal landscape", 100, 400, undefined, 400, 100, 400, 150, 0),
        testCase("max-size = mw larger square", 800, 800, undefined, 400, 400, 400, 0, 0),
        testCase("max-size = mw larger portrait", 800, 600, undefined, 400, 400, 300, 0, 50),
        testCase("max-size = mw larger landscape", 600, 800, undefined, 400, 300, 400, 50, 0),

        //
        testCase("max-size > mw smaller square", 200, 200, undefined, 800, 200, 200, 100, 100),
        testCase("max-size > mw smaller portrait", 200, 100, undefined, 800, 200, 100, 100, 150),
        testCase("max-size > mw smaller landscape", 100, 200, undefined, 800, 100, 200, 150, 100),
        testCase("max-size > mw equal square", 400, 400, undefined, 800, 400, 400, 0, 0),
        testCase("max-size > mw equal portrait", 400, 100, undefined, 800, 400, 100, 0, 150),
        testCase("max-size > mw equal landscape", 100, 400, undefined, 800, 100, 400, 150, 0),
        testCase("max-size > mw larger square", 800, 800, undefined, 800, 400, 400, 0, 0),
        testCase("max-size > mw larger portrait", 800, 600, undefined, 800, 400, 300, 0, 50),
        testCase("max-size > mw larger landscape", 600, 800, undefined, 800, 300, 400, 50, 0)
    ]);

    cases.test("correct as separate parameters", function (testCase, assert)
    {
        _$el.css({
            position: "absolute",
            width: testCase.width,
            height: testCase.height
        });

        _$el.center(testCase.maxWidth, testCase.maxHeight);
        testCenter("normal", testCase, assert);
    });

    cases.test("correct as object", function (testCase, assert)
    {
        _$el.css({
            position: "absolute",
            width: testCase.width,
            height: testCase.height
        });

        _$el.center({
            width: testCase.maxWidth,
            height: testCase.maxHeight
        });
        testCenter("as object", testCase, assert);
    });
})(jQuery, QUnit);
