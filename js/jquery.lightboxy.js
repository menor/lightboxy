(function($) {
  $.fn.lightboxy = function(prop) {

    // Initialize the plugin
    init();

    // Here we bind this to each jQuery object that calls the plugin
    this.on("click", function(e){
      e.preventDefault();
      this.url = $(this).attr('href');
      showLightbox( this.url );
    })

    function init(){
      // We add the lighbox div if it isn't there
      if(!$('#lightboxy-overly').length){
        addLightbox();
        addStyles();
      }
      getLinks();
    }

    function Collection(){
      this.elements = [];
    }

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

    function addLightbox(){
      var lightbox = "<div id='lightboxy-overly'>"+
                        "<div id='lightboxy-lightbox'>"+
                          "<img id='lightboxy-image' src='' alt='Lightboxy Image' />"+
                          "<div id='lightboxy-controls'>"+
                            "<span id='lightboxy-left'>\<</span>"+
                            "<span id='lightboxy-right'>\></span>"+
                            "<span id='lightboxy-close'>X</span>"+
                          "</div>"+
                        "</div>"+
                      "</div>";
        $(lightbox).appendTo("body");
        console.log('lightbox');
      }

    function addStyles() {
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
        'position': 'relative',
        'width': '50%',
        'height': 'auto',
        'display': 'inline-block',
        'vertical-align': 'middle',
        'margin': '50px auto',
        'z-index':'10'
      });
      $("#lightboxy-image").css({
        'width': '100%',
        'height': 'auto',
        'max-width': '100%',
        'vertical-align': 'middle',
        'border': '3px solid white'
      });
      $("#lightboxy-close").css({
        'position': 'absolute',
        'top': '0',
        'right': '0',
        'font-size': '40px',
        'padding': '5px',
        'background': 'black',
        'color': 'white'
      });
      bindCloseButton();
      $("#lightboxy-overly").hide();
      console.log('styles_added');
    }

    function showLightbox( image ){
      $("#lightboxy-image").attr('src', image);
      $("#lightboxy-overly").show();
      console.log(this.collection);
    }

    function bindCloseButton(){
      console.log('binding');
      $('#lightboxy-close').on('click', closeLightbox() );
    }

    function closeLightbox(){
      $("#lightboxy-overly").hide();
    }

    return this.each(function() {
      init();
    });
  };

}(jQuery));
