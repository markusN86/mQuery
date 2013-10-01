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
		nextCycle: function (selector)
		{
			var $el = this.next(selector);

			if (!$el.length)
				$el = this.parent().children(selector).eq(0);

			return $el;
		},
		prevCycle: function (selector)
		{
			var $el = this.prev(selector);

			if (!$el.length)
			{
				$el = this.parent().children(selector);
				$el = $el.eq($el.length - 1);
			}

			return $el;
		},
		center: function(w, h)
		{
			var position = "absolute";
			
			if (arguments.length == 1)
			{				
				h = arguments[0].height;
				position = arguments[0].position;
				w = arguments[0].width;
			}
			return this.each(function ()
			{
				var $el= $(this),
					$parent = $el.offsetParent(),
					pHeight = h || $parent.innerHeight(),
					pWidth = w || $parent.innerWidth(),
					elHeight = $el.outerHeight(),
					elWidth = $el.outerWidth(),
					ratio = elWidth / elHeight,
					height = elHeight, width = elWidth, top = 0, left = 0;

				if (ratio >= 1)
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

				if (position != "relative")
					$el.css({
						top: top,
						left: left,
						width: width,
						height: height
					});
				else 
				{
					$el.css({
						"margin-top": top,
						"margin-left": left,
						width: width,
						height: height
					})
				}
			});
		},
		centerVertical: function ()
		{
			return this.each(function()
			{
				var $el = $(this),
					$parent = $el.offsetParent(),
					pHeight = $parent.height(),
					height = $el.height(),
					newHeight = height > pHeight ? pHeight : height,
					top = (pHeight - newHeight) / 2;

					$el.css({
						top: top,
						height: newHeight
					});
			});
		},
		centerHorizontal: function ()
		{
			return this.each(function ()
			{
				var $el = $(this),
					$parent = $el.offsetParent(),
					pWidth = $parent.width(),
					width = $el.width(),
					newWidth = width > pWidth ? pWidth : width,
					left = (pWidth - newWidth) / 2;

				$el.css({
					left: left,
					width: newWidth
				});
			});
		},
		clearDimensions: function ()
		{
			return this.each(function ()
			{
				$(this).css({
					width: "",
					height: "",
					left: "",
					top: ""
				});
			});
		}
	});
})(jQuery);
