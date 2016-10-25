(function($) {
	$.fn.stickyMenu = function(options) {

		if (this.length === 0) {
			console.log('nothing here!');
			return this;
		}
		var settings = $.extend({
			top: 0,
			spaceBetween: 0,
			bottom: 0,
			topOffset: 0,
			left: 'auto',
			right: 'auto',
			attachment: 'parent'
		}, options);

		var numberOfEl = this.length;

		return this.each(function(index) {
			var sEl = $(this);
			var thisHeight = $(sEl).outerHeight();
			var $parent = (settings.attachment == 'parent' ? $(sEl).parent() : (typeof settings.attachment === 'string' ? $((sEl).attr(settings.attachment)) : $(settings.attachment)));
			var parentOffset = $parent.offset().top;
			var parentHeight = $parent.outerHeight();
			var windowHeight = $(window).innerHeight();
			var inx = index;
			var i = numberOfEl - inx;
			var originalOffset = 0;

			var stickyScroll = function() {
				var $el = $(sEl);
				var windowScroll = $(window).scrollTop();
				if (parentOffset !== $parent.offset().top) {
					parentOffset = $parent.offset().top;
				}
				if ((windowScroll + originalOffset - settings.topOffset) >= parentOffset) {
					var thisOffset = parseFloat($el.css('top'), 10);
					var newOffset = originalOffset - ((windowScroll + originalOffset) - parentOffset - settings.topOffset);
					if (newOffset <= settings.top + (inx * (thisHeight + settings.spaceBetween))) {
						newOffset = settings.top + (inx * (thisHeight + settings.spaceBetween));
					}
					$el.css({
						'top': newOffset + 'px'
					});
				} else {
					$el.css({
						'top': originalOffset + 'px'
					});
				}
			};

			var setupSticky = function() {
				var $el = $(sEl);
				$el.addClass('sticky');
				//console.log(i);
				originalOffset = (windowHeight - settings.bottom - $el.outerHeight()) - ((i - 1) * ($el.outerHeight() + settings.spaceBetween));
				//console.log(windowHeight - (originalOffset + $el.outerHeight()));
				$el.css({
					'position': 'fixed',
					'top': originalOffset + 'px',
					'left': settings.left,
					'right': settings.right,
					'z-index': 9
				});
				stickyScroll();
				$(window).on('scroll.sticky', stickyScroll);
			};

			setupSticky();

			$(window).resize(function() {
				parentOffset = $parent.offset().top;
				parentHeight = $parent.outerHeight();
				windowHeight = $(window).innerHeight();
				originalOffset = (windowHeight - settings.bottom - $(sEl).outerHeight()) - ((i - 1) * ($(sEl).outerHeight() + settings.spaceBetween));
				stickyScroll();
			});

		});
	};
}(jQuery));