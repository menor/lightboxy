(function($) {
  $.fn.lightboxy = function(prop) {

    return this.click(function(e) {
     e.preventDefault();
     console.log('one');
     getLinks();
     add_overly();
     console.log('two');
     add_styles();
     console.log('three');
    });

    function Collection(){
      this.elements = [];
    };

    function Element( opts ){
      this.url = opts.url;
      this.title = opts.title || '';
    };

    function getLinks(){
      var col = new Collection();
      $.each( $('.lightboxy'), function(i, v){
        var opts = {
          'url': $(this).attr('href'),
          'title': $(this).attr('title')
        }
        var element = new Element( opts );
        col.elements.push( element );
      });
      console.log(col);
    }

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
