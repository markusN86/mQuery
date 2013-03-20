(function ($)
{
	"use strict";

	$.extend($.fn, {
		id: function (id)
		{
			return this._attribute("id", id);
		},
		title: function (title)
		{
			return this._attribute("title", title);
		},
		src: function (src)
		{
			return this._attribute("src", src);
		},
		_attribute: function (name, value)
		{
			if (value && typeof(value) == "string")
			{
				return this.each(function ()
				{
					$(this).attr(name, value);
				});
			}
			else
				return this[0].attr(name);
		}
	});
})(jQuery);
