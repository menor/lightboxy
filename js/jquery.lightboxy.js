(function($) {
  $.fn.lightboxy = function(prop){

    // Default parameters
    var options = $.extend({
      height : "250",
      width : "500",
      title:"JQuery Lightboxy",
      description: "A jQuery lightbox plugin built for the sake of it.",
      top: "20%",
      left: "30%",
    },prop);

    return this.click(function(e){
         alert('Yo!');
    });

    return this;
  };

}(jQuery));
