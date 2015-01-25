(function($) {
  $.fn.lightboxy = function(prop) {

    // Default parameters
    var options = $.extend({
      height : "250",
      width : "500",
      title:"JQuery Lightboxy",
      description: "A jQuery lightbox plugin built for the sake of it.",
      top: "20%",
      left: "30%",
    },prop);

    return this.click(function(e) {
         console.log('one');
         add_overly();
         console.log('two');
         add_styles();
         console.log('three');
    });

    function add_overly(){
      var overly = "<div id='overly'></div>"
      $(overly).appendTo("body");
      console.log('overly_added');
    }

    function add_styles() {
      var viewportHeight = $(document).height();
      var viewportWidth = $(document).width();

      $("#overly").css({
        'position': 'absolute',
        'top': 0,
        'right': 0,
        'bottom': 0,
        'left': 0,
        'background-color':'rgba(0,0,0,0.6)',
        'z-index':'10'
      });
      console.log('styles_added');
    }

    return this;
  };

}(jQuery));
