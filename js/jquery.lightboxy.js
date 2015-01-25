(function($) {
  $.fn.lightboxy = function(prop) {

    return this.click(function(e) {
     e.preventDefault();
     console.log('one');
     getLinks();
     add_lightbox();
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

    function add_lightbox(){
      var lightbox = "<div id='lightboxy-overly'>"+
                        "<div id='lightboxy-lightbox'>"+
                          "<img id='lightboxy-image' src='' alt='Lightboxy Image' />"+
                          "<div id='lightboxy-controls'>"+
                            "<span id='lightboxy-left'></span>"+
                            "<span id='lightboxy-right'></span>"+
                            "<span id='lightboxy-close'></span>"+
                          "</div>"+
                        "</div>"+
                      "</div>";
        $(lightbox).appendTo("body");
        console.log('lightbox');
      }

    function add_styles() {
      $("#lightboxy-overly").css({
        'position': 'absolute',
        'vertical-align': 'middle',
        'top': 0,
        'right': 0,
        'bottom': 0,
        'left': 0,
        'background-color':'rgba(0,0,0,0.8)',
        'z-index':'10'
      });
      $("#lightboxy-lightbox").css({
        'width': '50%',
        'height': 'auto',
        'display': 'inline-block',
        'vertical-align': 'middle',
        'margin': '50px auto',
        'z-index':'10'
      });
      $("#lightboxy-image").css({
        'width': '100%',
        'height': '100%',
        'max-width': '100%',
        'vertical-align': 'middle',
        'border': '3px solid white'
      });
      console.log('styles_added');
    }

    return this;
  };

}(jQuery));
