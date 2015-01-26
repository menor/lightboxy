(function($) {
  $.fn.lightboxy = function(prop) {

    // Initialize the plugin
    init();

    // Here we bind this to each jQuery object that calls the plugin
    this.on("click", function(e){
      e.preventDefault();
      this.url = $(this).attr('href');
      $(this).addClass('lightboxy-active');
      showLightbox( this.url );
    });

    function init(){
      // We add the lighbox div if it isn't there
      if(!$('#lightboxy-overly').length){
        addLightbox();
        addStyles();
      }
    }

    function showLightbox( image ){
      $("#lightboxy-image").attr('src', image);
      $("#lightboxy-overly").show();
    }

    function closeLightbox(){
      $("#lightboxy-overly").hide();
    }

    function bindNavButtons(){
      $('#lightboxy-overly').on('click', '#lightboxy-close', function(){closeLightbox();} );
      $('#lightboxy-overly').on('click', '#lightboxy-next', function(){showNextImage();} );
      $('#lightboxy-overly').on('click', '#lightboxy-prev', function(){showNextImage('reverse');} );
    }

    function showNextImage( direction ){
      var current = $( ".lightboxy-active" );
      var next;
      if (direction === 'reverse') {
        next = current.parent().prev().children();
      }
      else {
        next = current.parent().next().children();
      }
      if ( next.hasClass('lightboxy') ){
        current.removeClass('lightboxy-active');
        next.addClass('lightboxy-active');
        showLightbox( next.attr('href') );
      }
    }

    function addLightbox(){
      var lightbox = "<div id='lightboxy-overly'>"+
                        "<div id='lightboxy-lightbox'>"+
                          "<img id='lightboxy-image' src='' alt='Lightboxy Image' />"+
                          "<div id='lightboxy-controls'>"+
                            "<span id='lightboxy-prev'><</span>"+
                            "<span id='lightboxy-next'>></span>"+
                            "<span id='lightboxy-close'>X</span>"+
                          "</div>"+
                        "</div>"+
                      "</div>";
        $(lightbox).appendTo("body");
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
        'color': 'white',
        'cursor': 'pointer'
      });
      $("#lightboxy-prev").css({
        'position': 'absolute',
        'top': '40%',
        'left': '-35px',
        'font-size': '40px',
        'padding': '5px',
        'background': 'black',
        'color': 'white',
        'cursor': 'pointer'
      });
      $("#lightboxy-next").css({
        'position': 'absolute',
        'top': '40%',
        'right': '-35px',
        'font-size': '40px',
        'padding': '5px',
        'background': 'black',
        'color': 'white',
        'cursor': 'pointer'
      });
      bindNavButtons();
      $("#lightboxy-overly").hide();
    }

    return this.each(function() {
      init();
    });
  };

}(jQuery));
