// console.log('I work!');

// $(function() {
//   var ul = $(".slider ul");
//   var slide_count = ul.children
// })

$(document).ready(function () {
  $.getJSON(url, function)
  $('.prev').click(function () {
    var activeImage = $('.active')
    var nextImage - activeImage.prev()

    activeImage.removeClass('.active')
    nextImage.addClass('.active')
  })

  $('.next').click(function () {
    var activeImage = $('.active')
    var nextImage - activeImage.next()

    activeImage.removeClass('.active')
    nextImage.addClass('.active')
  })
})