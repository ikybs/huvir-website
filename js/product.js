
  

$('.Main-iso').isotope({
  itemSelector:'.isotope-item',
  layoutMode:'fitRows'
  
  });
  
  $('.nav ul li').click(function(){
  
    $('.nav ul li').removeClass('active');
    $(this).addClass('active');
  
    var selector =$(this).attr('data-filter');
    $('.Main-iso').isotope({
  
      filter:selector
    });
  
  return false;
  
  
  });


  $(document).ready(function(){
    var $grid = $('.grid').isotope({
      getSortData: {
        name: '.name', // text from querySelector
         brand:'.brand',
         
       /* category: '[data-category]', // value of attribute*/
        /*price: function( itemElem ) { // function
          var price = $( itemElem ).find('.price').text();
          return parseFloat( price.replace( /[\(\)]/g, '') );
        }*/
      },
      
    });
   
  
  
  
    $('.selected').on( 'change', function() {
      var sortByValue = this.options[this.selectedIndex].getAttribute('data-sort-by');
      $grid.isotope({ sortBy: sortByValue });
    });
  });
  
