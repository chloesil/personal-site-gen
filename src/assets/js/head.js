$(function(){ 

    $('.project-nav').hide();
  var scrollToTop = $(document).scrollTop();
  var header = $('.navigation').outerHeight();

  $(window).scroll(function() {
      var windowScroll = $(document).scrollTop();

    if (windowScroll > header) {
      $('.navigation').addClass('navigation-hide');
    } 
    else {
      $('.navigation').removeClass('navigation-hide');
    }

    if (windowScroll > scrollToTop) {
      $('.navigation').removeClass('navigation-show');
    } 
    else {
      $('.navigation').addClass('navigation-show');
    }        

    scrollToTop = $(document).scrollTop();  

    // Hide the project nav when the bottom of the page is reached
    var docHeight = $(document).height() - 1200;

    if (windowScroll > docHeight) {
      $('.project-nav').fadeOut();
    } 
    else if (windowScroll < 600) {
      $('.project-nav').fadeOut();
    } 
    else {
      $('.project-nav').fadeIn();
    }
   });
});


$(document).ready(function() {

  // Find first paragraph and isolate
  var firstP = $('.post-content').find("p:first").text();

  // Find everything in the first para before the first space
  var dropCap = firstP.substring(0, firstP.indexOf(' '));

  // Apply styles to the first word of the first paragraph
  var id = dropCap.id;
  $('#' + id).hide();
  // $(dropCap).html("<span class='dropcap'" + dropCap +"/span>");


  // Hide and show nav on mobile
  $('.js-nav-toggle').click(function() {
    $('.js-nav').slideDown(300);
  });

  $('.js-nav').click(function() {
    $('.js-nav').slideUp(300);
  });

  $('.nav-item').click(function() {
    $('.js-nav').slideUp(300);
  });

});

