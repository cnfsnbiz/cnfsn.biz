$(function(){
    (function($){
      $.fn.fadeInsert = function(options){
        var that = $(this);
        that.fadeOut(200, function(){
          that.html(options.html);
          that.fadeIn(200, function(){
            that.trigger({type:"finishrefreshinsert"});
          });
        });
        //return this;
      };
    })($); 
  $.navigate.init({ajaxLinks:'a.ajax'});
});

jQuery.fn.Place = function() {

    function plusOuMoins() {
        var symboles = ['+','-'];
        return symboles[Math.floor(Math.random() * symboles.length)];
    }
    var posX = Math.floor(Math.random() * ( $(window).innerWidth()-$(this).width() ) );
    var posY = Math.floor(Math.random() * ( $(window).innerHeight()-$(this).height() ));
    //var deg = Math.floor(Math.random() * 8);
    $(this).css({
        'position':'absolute',
        'left':posX+'px', 'top':posY+'px',
        /*'-webkit-transform': 'rotate(' + plusOuMoins() + deg + 'deg)',
        '-moz-transform': 'rotate(' + plusOuMoins() + deg + 'deg)',
        'transform': 'rotate(' + plusOuMoins() + deg + 'deg)'*/
    });
};