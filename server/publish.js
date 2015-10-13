
Meteor.publish("images", function () {
    return Instagrams.find( {}, { sort: { created_time: -1 } } );
});

Meteor.methods({
    deleteAll : function() {
        Instagrams.remove({});
    },
    deleteGram : function(id) {
        Instagrams.remove({ _id: id });
    }
});
