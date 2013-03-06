define([
  'jquery',
  'underscore',
  'backbone',
  'src/views/taskListView',
  'src/views/newTaskView',
  'src/views/taskView',
  'src/collections/tasksCollection',
  'src/views/editTaskView'
  ], function($, _, Backbone, TaskListView, NewTaskView, TaskView, TasksCollection, EditTaskView) {

    var TodoRouter = Backbone.Router.extend({
      routes: {
        "task/:id": "showTask",
        "edit/:id": "editTask",
        "new": "newTask",
        "": "index"
      },

      showTask: function(id){
        var TaskDetailsView = new TaskView({collection: this.tasksCollection, id: id});
        $(this.main).html(TaskDetailsView.render().el);
      },

      editTask: function( id ){
        // Fetch collection and requested model
        this.tasksCollection.fetch();
        var taskModel = this.tasksCollection.get(id);
        
        var editTaskView = new EditTaskView({ model: taskModel });
        $(this.main).html(editTaskView.render().el);
        
      },

      newTask: function(){
        var newTaskView = new NewTaskView({collection: this.tasksCollection});
        $(this.main).html(newTaskView.render().el);
      },

      index: function(){
        var taskListView = new TaskListView({collection: this.tasksCollection});
        $(this.main).html(taskListView.render().el);
      },

      /**
      * Initializes the router
      */
      initialize: function(){
        this.main = "#main";
        this.tasksCollection = new TasksCollection();
        Backbone.history.start();
      }
  });

  return TodoRouter;
});