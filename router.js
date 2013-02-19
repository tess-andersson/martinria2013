define([
  'jquery',
  'underscore',
  'backbone',
  'src/views/taskListView',
  'src/collections/tasksCollection'
], function($, _, Backbone, TaskListView,TasksCollection) {
  
  var TodoRouter = Backbone.Router.extend({
    routes: {
      "task/:id": "showTask",
      "edit/:id": "editTask",
      "/new": "newTask",
      "": "index"
    }
  });
  
  /**
    * DOC
    */
  var initialize = function(){

    var todoRouter = new TodoRouter;

    todoRouter.on('route:showTask', function(){
        console.log("Show");
    });

    todoRouter.on('route:editTask', function(){
      console.log("Edit");
    });

    todoRouter.on('route:newTask', function(){
      console.log("New");
    });

    todoRouter.on('route:index', function(){
      var tasksCollection = new TasksCollection();
      var taskListView = new TaskListView({collection: tasksCollection});
      taskListView.render();
    });

    Backbone.history.start();
  };

  return { 
    initialize: initialize
  };
});