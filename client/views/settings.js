
Template.settings.rendered = function() {

    $("body").on('keyup', function( key ) {

        if( key.keyCode == 83 ) {
            if( $(".settings").is(":hidden") ) {
                $(".settings").fadeIn("fast");
            } else {
                $(".settings").fadeOut("fast");
            }
        }

        if( key.keyCode == 67 ) {
            Meteor.call('deleteAll');
        }

    });

}

Template.settings.events = {



}
