//Project Name: Event Page
//Client: PureWow
//Author: Benjamin Aplin
//
console.log('main.js is linked');

var currentImage;

$('div.event-image img').on('click', function(e){
  $('#slide-show').toggle();
  var targetImage = $(this).attr('src');
  _.each(slideShowContent, function(e, i, l) {
    if(e.smImg === targetImage){
      $('.slide-show-body').html('');
      $('.slide-show-body').append('<div  style="border: 0px solid; outline: 0;"><img  class="current-image" src="' + e.lgImg + '"></div>');
      $('#slide-show-text').html('').append('<div>' + e.slideShowText + '</div>')   
    }
  })
})

$('#close-slide-show').on('click', function() {
  $('#slide-show').toggle();
})

var changeSlide = function(num, currentImage){
  _.each(slideShowContent, function(e, i, l) {
    if(e.lgImg === currentImage){
      var nextIndex = i + num;
      if(nextIndex > slideShowContent.length-1){
        nextIndex = 0;
      }
      if(nextIndex < 0){
        nextIndex = slideShowContent.length-1;
      }
      $('.slide-show-body').html('').append('<div><img class="current-image" src="' + slideShowContent[nextIndex].lgImg + '"></div>')
      $('#slide-show-text').html('').append('<div>' + slideShowContent[nextIndex].slideShowText + '</div>')
    }
  })
}

$('#back-button').on('click', function(){
  currentImage = $('.current-image').attr('src');
  changeSlide(-1, currentImage);
})

$('#forward-button').on('click', function(){
  currentImage = $('.current-image').attr('src');
  changeSlide(1, currentImage);
})


  // var currentSlideShowImage = _.findWhere(slideShowContent, {smImg: currentImage})
  // console.log('currentSlideShowImage.lgImg', currentSlideShowImage.lgImg)
