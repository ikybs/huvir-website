$('.Main-iso').isotope({
  itemSelector:'.isotope-item',
 layoutMode:'fitRows',

  });

  /*filtering area*/

  $('.nav ul li').click(function(){
  
    $('.nav ul li').removeClass('active');
    $(this).addClass('active');
  
    var selector =$(this).attr('data-filter');
    $('.Main-iso').isotope({
  
      filter:selector
    });
  
  return false;
  
  });
/*end of filtering area*/


/*sorting area*/
var qsRegex;
  $(document).ready(function(){
    var $grid = $('.grid').isotope({
      filter: function() {
        return qsRegex ? $(this).text().match( qsRegex ) : true;
      },
     
      getSortData: {
        sortBy:'*',
        name: '.name', // text from querySelector
         brand:'.brand',
         
        price: function( elem ) {
          var price =$(elem).find('.price').text();

          return parseFloat(price.replace('$', '') );
    }
   
        }

    });
 
 
    $('.selected').on( 'change', function() {

      var sortByValue = this.options[this.selectedIndex].getAttribute('data-sort-by');
      $grid.isotope({ sortBy: sortByValue });
    });


  // use value of search field to filter

  var $quicksearch = $('.quicksearch').keyup( debounce( function() {
    qsRegex = new RegExp( $quicksearch.val(), 'gi' );
    $grid.isotope();
  }, 200 ) );
  
  // debounce so filtering doesn't happen every millisecond
  function debounce( fn, threshold ) {
    var timeout;
    threshold = threshold || 100;
    return function debounced() {
      clearTimeout( timeout );
      var args = arguments;
      var _this = this;
      function delayed() {
        fn.apply( _this, args );
      }
      timeout = setTimeout( delayed, threshold );
    };
  }

    
  });
  
 /*end of the sorting*/

 /*quick search with filtering isotope */
 
// quick search regex
/*
var qsRegex;

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.isotope-item',
  layoutMode: 'fitRows',
  filter: function() {
    return qsRegex ? $(this).text().match( qsRegex ) : true;
  }
});

// use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}, 200 ) );

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}*/


