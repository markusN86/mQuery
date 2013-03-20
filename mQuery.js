(function ($)
{
	"use strict";

	function _attribute (name, value)
	{
		if (value && typeof(value) == "string")
		{
			return this.each(function ()
			{
				$(this).attr(name, value);
			});
		}
		else
			return this.eq(0).attr(name);
	}

	$.extend($.fn, {
		id: function (id)
		{
			return _attribute.apply(this, ["id", id]);
		},
		title: function (title)
		{
			return _attribute.apply(this, ["title", title]);
		},
		src: function (src)
		{
			return _attribute.apply(this, ["src", src]);
		}		
	});
})(jQuery);
