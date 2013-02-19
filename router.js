define([
  'jquery',
  'underscore',
  'backbone',
  'src/views/taskListView',
  'src/collections/tasksCollection'
], function($, _, Backbone, TaskListView,TaskCollection) {
  
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

    window.tasks = new TaskCollection;

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
      var taskListView = new TaskListView();
      taskListView.render();
    });

    Backbone.history.start();
  };

  return { 
    initialize: initialize
  };
});