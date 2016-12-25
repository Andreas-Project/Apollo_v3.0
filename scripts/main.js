$(document).ready(function(){
    $("#navigation_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 3500);
    });
});/**
 * Created by DOM on 18.12.2016.
 */
