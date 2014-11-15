
Template.image.rendered = function() {

    this.$("li img").load(function() {
        $(this).css({
            opacity : 1
        }).parent().css({
            width : '5%'
        });
    });

}