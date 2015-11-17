console.log('main.js is linked');

$('div.event-image img').on('click', function(e){
  slideShow.toggle();
  var targetImage = $(this).attr('src')
  $('.slide-show-body').html('');
  $('.slide-show-body').append('<div  style="border: 0px solid; outline: 0;"><img  class="current-image" src="' + targetImage + '"></div>')
})

var slideShow = $('#slide-show');
var closeButton = $('#close-slide-show');

closeButton.on('click', function() {
  slideShow.toggle();
})

var changeSlide = function(num, currentImage){
  var images = ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg', './images/5.jpg', './images/6.jpg', './images/7.jpg', './images/8.jpg', './images/9.jpg', './images/10.jpg', './images/11.jpg', './images/12.jpg', './images/13.jpg', './images/14.jpg', './images/3.jpg']
  var currentIndex = images.indexOf(currentImage)
  var nextIndex = currentIndex + num;
  if(nextIndex > images.length-1){
    nextIndex = 0;
  }
  if(nextIndex < 0){
    nextIndex = images.length-1;
  }
  $('.slide-show-body').html('');
  $('.slide-show-body').append('<div><img class="current-image" src="' + images[nextIndex] + '"></div>')
}

var currentImage;

$('#back-button').on('click', function(e){
  currentImage = $('.current-image').attr('src');
  changeSlide(-1, currentImage);
})

$('#forward-button').on('click', function(e){
  currentImage = $('.current-image').attr('src');
  changeSlide(1, currentImage);
})

