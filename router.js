define([
  'jquery',
  'underscore',
  'backbone',
  'src/views/taskListView'
], function($, _, Backbone, TaskView) {
  
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
      var taskView = new TaskView();
      taskView.render();
    });

    Backbone.history.start();
  };

  return { 
    initialize: initialize
  };
});