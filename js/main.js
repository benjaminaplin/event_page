console.log('main is linked');

$('div.event-image img').on('click', function(e){
  console.log('e.target', e.target);
  slideShow.toggle();
  var targetImage = $(this).attr('src')
  console.log('targetImage', targetImage);
  $('.slide-show-body').html('');
  $('.slide-show-body').append('<div><img src="' + targetImage + '"></div>')
})

var slideShow = $('#slide-show');
var closeButton = $('#close-slide-show');

closeButton.on('click', function() {
  slideShow.toggle();
})


//SLIDESHOW
//once in modal, on click of arrow, animage one slide out one slide in
//use masking? so that images hidden as they flow out? 
//array of images? on click, inject next item in array into html?s


