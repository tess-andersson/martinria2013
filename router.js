define([
  'jquery',
  'underscore',
  'backbone',
  'src/views/taskListView',
  'src/views/newTaskView',
  'src/collections/tasksCollection'
], function($, _, Backbone, TaskListView,NewTaskView,TasksCollection) {
  
  var TodoRouter = Backbone.Router.extend({
    routes: {
      "task/:id": "showTask",
      "edit/:id": "editTask",
      "new": "newTask",
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
      var tasksCollection = new TasksCollection();
      var newTaskView = new NewTaskView({collection: tasksCollection});
      newTaskView.render();
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