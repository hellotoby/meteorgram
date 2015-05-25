
Meteor.publish("images", function () {
    return Instagrams.find( {}, { sort: { created_time: -1 } } );
});

Meteor.methods({
    deleteGram : function(id) {
        Instagrams.remove({ _id: id });
    }
});