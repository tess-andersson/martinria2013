/**
 * Model for task.
 */
define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var TaskModel = Backbone.Model.extend({

    /**
    * Sets the default values for the model.
    */
    defaults: {
            name: "Task",
            description: "Task description",
            created: new Date().getTime()
        },

    /**
    * Initializes the model.
    */
    initialize: function() {
       console.log("Task model created");
    }

  });

  return TaskModel;

});