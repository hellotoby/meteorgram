
Meteor.publish("images", function () {
    return Instagrams.find( {}, { sort: { created_time: -1 } } );
});