var Router = Backbone.Router.extend({

        initialize: function(){

        Backbone.history.start();

        },

        routes: {

            '': 'home'

        },

        'home': function(){

        }
    });