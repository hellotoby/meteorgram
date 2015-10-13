Router.configure({
    layoutTemplate      : 'layout'
});

Router.map(function() {

    this.route('home', {
        path            : '/',
        template        : 'index',
        waitOn : function() {
            return Meteor.subscribe('images');
        },
        data : function() {
            var allImages = Instagrams.find({}, { sort: { created_time: -1 } });
            return {
                images : allImages
            };
        }
    });

});
