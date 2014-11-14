
var instagram = new Instagram.createClient( InstagramKeys.clientId, InstagramKeys.clientSecret );

var getImages = function() {
    //instagram.tags.media('workingatwhite', Meteor.bindEnvironment(function (tags, error) {
    instagram.tags.media('love', Meteor.bindEnvironment(function (tags, error) {
        tags.forEach(function(tag) {
            Instagrams.upsert(
                { id : tag.id },
                tag
            );
        });
    }));

    /*instagram.tags.media('tonguetalks', Meteor.bindEnvironment(function (tags, error) {
        tags.forEach(function(tag) {
            Instagrams.upsert(
                { id : tag.id },
                tag
            );
        });
    }));*/

    /*instagram.tags.media('ruok', Meteor.bindEnvironment(function (tags, error) {
        tags.forEach(function(tag) {
            Instagrams.upsert(
                { id : tag.id },
                tag
            );
        });
    }));*/
}

// Retrieve some images on startup
Meteor.startup(function() {
    getImages();
});

// Check for new images every 5 seconds
var cron = Meteor.setInterval(function(t) {
    getImages();
}, 10000);


