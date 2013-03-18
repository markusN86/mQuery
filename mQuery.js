(function ($)
{
	"use strict";

	$.extend($.fn, {
		id: function (id)
		{
			if (id && typeof("id") == "string")
			{
				return this.each(function ()
				{
					$(this).attr("id", id);
				});
			}
			else
				return this[0].attr("id");
		}
	});
})(jQuery);
