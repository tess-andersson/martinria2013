/**
 * Collection for task model.
 */
define([
  'underscore',
  'backbone',
  'src/models/taskModel'
], function( _, Backbone, TaskModel){
  var TasksCollection = Backbone.Collection.extend({
    model: TaskModel,
    
    localStorage: new Backbone.LocalStorage("taskcollection"),

    /**
    * Initializes the model.
    */
    initialize: function(){
        //console.log("in collection")

        //localStorage.setItem("key3","value2");
        console.log(localStorage);
    }

  });
 
  return TasksCollection;
});