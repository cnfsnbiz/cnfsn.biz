jQuery.fn.Place = function() {

			function plusOuMoins() {
				var symboles = ['+','-'];
				return symboles[Math.floor(Math.random() * symboles.length)];
			}
		
			var posX = Math.floor(Math.random() * $(window).width());
			var posY = Math.floor(Math.random() * $(window).height());
			var deg = Math.floor(Math.random() * 5);
			$(this).css({
				'position':'absolute',
				'left':posX+'px', 'top':posY+'px',
				'-webkit-transform': 'rotate(' + plusOuMoins() + deg + 'deg)',
				'-moz-transform': 'rotate(' + plusOuMoins() + deg + 'deg)'
				});
	};

function MakeInterface(){
	var button = '<form><input type="button" id="interfaceButton" value="BUTTON" name="next"/></form>';
	$('body').append(button)
	$('#interfaceButton').Place();
}

$(document).ready(function(){
	MakeInterface();
})
