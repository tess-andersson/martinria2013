define([
  'jquery',
  'underscore',
  'backbone',
  'src/views/taskListView',
  'src/views/newTaskView',
  'src/views/taskView',
  'src/collections/tasksCollection'
  ], function($, _, Backbone, TaskListView,NewTaskView,TaskView,TasksCollection) {

    var TodoRouter = Backbone.Router.extend({
      routes: {
        "task/:id": "showTask",
        "edit/:id": "editTask",
        "new": "newTask",
        "": "index"
      },

      showTask: function(id){
        var tasksCollection = new TasksCollection();
        var TaskDetailsView = new TaskView({collection: tasksCollection, id: id});
        $("#main").html(TaskDetailsView.render().el);
      },

      editTask: function(){
        console.log("Edit");
      },

      newTask: function(){
        var tasksCollection = new TasksCollection();
        var newTaskView = new NewTaskView({collection: tasksCollection});
        $("#main").html(newTaskView.render().el);
      },

      index: function(){
        var tasksCollection = new TasksCollection();
        var taskListView = new TaskListView({collection: tasksCollection});
        $("#main").html(taskListView.render().el);
      },

      /**
    * Initializes the router
    */
    initialize: function(){
      this.main = "#main";
      Backbone.history.start();
    }
  });

return TodoRouter;
});