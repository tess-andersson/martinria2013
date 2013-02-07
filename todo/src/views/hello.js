define(['jquery','underscore','backbone'], function($, _, Backbone) {
  var HelloView = Backbone.View.extend({

    el : '#box',

    initialize: function() {
      console.log( 'Wahoo!' );

      $(this.el).html("HEJ! :D");
    }
  });

  return HelloView;
});