
// Remove items from the DOM when they are no longer on screen
// Will stop the tab from crashing
function removeInvisible() {
    $("li").each(function() {
        var el      = $(this);
        var offset  = el.offset();
        var wHeight = $(window).innerHeight();
        if( offset.top > wHeight ) {
            el.remove();
            Meteor.call( 'deleteGram', el.data('id') );
        }
    });
}

Meteor.setInterval(function() {
    removeInvisible();
}, 5000);