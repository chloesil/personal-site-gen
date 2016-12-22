$(function(){	
    var scrollToTop = $(document).scrollTop();
    var header = $('.navigation').outerHeight();

    $(window).scroll(function() {
        var windowScroll = $(document).scrollTop();

        if (windowScroll > header){$('.navigation').addClass('navigation-hide');} 
        else {$('.navigation').removeClass('navigation-hide');}

        if (windowScroll > scrollToTop){$('.navigation').removeClass('navigation-show');} 
        else {$('.navigation').addClass('navigation-show');}				

        scrollToTop = $(document).scrollTop();	
     });
});