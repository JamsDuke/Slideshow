console.log('I work!');

if (counter === 0) {
  slides.eq(counter).fadeOut();
  counter+= 1;
} else if (counter === slidesLen) {
  counter = 0;
  slides.eq(counter).fadeIn(function () {
    slides.fadeIn();
  });
} else {
  slides.eq(counter).fadeOut();
  counter += 1;
}