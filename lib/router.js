Router.configure({
    layoutTemplate      : 'layout',
    //notFoundTemplate    : 'notFound',
    //loadingTemplate     : 'loading'
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
            }
        }
    });

    this.route('admin', {
        path            : '/admin',
        template        : 'admin',
        waitOn : function() {
            return Meteor.subscribe('images');
        },
        data : function() {
            var allImages = Instagrams.find({}, { sort: { created_time: -1 } });
            return {
                images : allImages
            }
        }
    });
    
});