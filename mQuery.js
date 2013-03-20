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
		},
		nextCycle: function ()
		{
			var $el = this.next();

			if (!$el.length)
				$el = this.parent().children(":first-child");

			return $el;
		},
		prevCycle: function ()
		{
			var $el = this.prev();

			if (!$el.length)
				$el = this.parent().children(":last-child");

			return $el;
		},
		center: function(w, h)
		{
			var parent = this.parent(),
				pHeight = h || parent.innerHeight(),
				pWidth = w || parent.innerWidth(),
				elHeight = this.outerHeight(),
				elWidth = this.innerWidth(),
				ratio = elWidth / elHeight,
				height = elHeight, width = elWidth, top = 0, left = 0;

			if (ratio > 1)
			{
				if (elWidth < pWidth)
					left = (pWidth - elWidth) / 2;
				else if (elWidth > pWidth)
				{
					width = pWidth;
					left = 0;
					height = width / ratio;
				}

				if (height < pHeight)
					top = (pHeight - height) / 2;
				else if (height > pHeight)
				{
					height = pHeight;
					top = 0;
					width = height * ratio;
					left = (pWidth - width) / 2;
				}
			}
			else if (ratio < 1)
			{
				if (elHeight < pHeight)
					top = (pHeight - elHeight) / 2;
				else if (elHeight > pHeight)
				{
					height = pHeight;
					top = 0;
					width = height * ratio;
				}

				if (width < pWidth)
					left = (pWidth - width) / 2;
				else if (width > pWidth)
				{
					width = pWidth;
					left = 0;
					height = width / ratio;
					top = (pHeight - height) / 2;
				}
			}

			return this.css({
				top: top,
				left: left,
				width: width,
				height: height
			});
		},
		centerHorizontal: function ()
		{
			var parent = this.parent(),
				pHeight = parent.height(),
				height = this.height(),
				newHeight = height,
				top;

			if (height > pHeight)
				newHeight = pHeight;

			top = (pHeight - newHeight) / 2;

			return this.css({
				top: top,
				height: newHeight
			});
		}
	});
})(jQuery);
