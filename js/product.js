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

$('.Main-iso').isotope({
  getSortData:{
    name:function($elem){
      return $elem.find('.Name').text();
    },
    ASC:function($elem){
      return $elem.find('.ASC').text();
    },
    DESC:function($elem){
      return $elem.find('.DESC').text();
    }
  }
});