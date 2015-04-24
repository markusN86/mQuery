(function ($, QUnit)
{
	"use strict";
	
	var _$el,
        test = QUnit.test;
	
	QUnit.module("Basic", {
		beforeEach: function ()
		{
			_$el = $("<div />").appendTo("output#test-dom");
		},
		afterEach: function ()
		{
			_$el.remove();
		}
	});
	
	test("id", function (assert)
	{
		assert.expect(5);
		
		// GIVEN a plain div element
		var $el = $("<div/>").appendTo(_$el),
			id = "test-id";
		
		// WHEN i set the id
		$el.id(id);
		
		// THEN i expect the id to be set to the div
		assert.strictEqual($el.attr("id"), id, '.id("id")');
		
		// AND i expect the id is returned correctly when queried
		assert.strictEqual($el.id(), id, '.id()');
		
		// WHEN i set the id to null
		$el.id(null);
		
		// THEN i expect the id to be deleted
        assert.strictEqual($el.id(), undefined, ".id(null)");
		
		// WHEN i add a element to the set
		$el = $el.add($("<div />").appendTo(_$el));
		
		// AND set the id on this set
		$el.id(id);
		
		// THEN i expect only the first element to have the id set
        assert.strictEqual($el.eq(0).attr("id") === id && !$el.eq(1).attr("id"), true, '.id("id") on multiple elements');
		
		// WHEN the elements in the set have a different id each
		$el.id(null).eq(0).id(id + "1").end().eq(1).id(id + "2");
		
		// THEN i expect only the id of the firs element to be returned when queried
        assert.strictEqual($el.id(), id + "1", '.id() on multiple elements');
	});
	
	test("title", function (assert)
	{
        assert.expect(0);
	});
	
	test("src", function (assert)
	{
        assert.expect(0);
	});
	
	test("nextCycle", function (assert)
	{
        assert.expect(0);
	});
	
	test("prevCycle", function (assert)
	{
        assert.expect(0);
	});
	
	test("center", function (assert)
	{
        assert.expect(0);
	});
	
	test("centerVertical", function (assert)
	{
        assert.expect(0);
	});
	
	test("centerHorizontal", function (assert)
	{
        assert.expect(0);
	});

	test("clearDimensions", function (assert)
	{
        assert.expect(0);
	});
})(jQuery, QUnit);