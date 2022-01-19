/************************Smoothh Scroll***********************/
$(document).on('click', 'a[href^="./#"]', function () {
  var __selector = this.getAttribute('href').split('#');
  $('html, body').animate(
    {
      scrollTop: $('#' + __selector[1]).offset().top - 40,
    },
    600
  );
});

$(document).on('click', 'a[href^="#"]', function () {
  $('html, body').animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top - 40,
    },
    600
  );
});