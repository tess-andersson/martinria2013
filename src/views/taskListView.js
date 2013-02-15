define([
  'jquery',
  'underscore',
  'backbone',
  'src/models/taskModel',
  'src/collections/tasksCollection',
  'text!src/templates/taskListTemplate.html'
  ], function($, _, Backbone,TaskModel,TasksCollection,TaskListTemplate){

  /**
    * DOC
    */
    var TaskView = Backbone.View.extend({
      tagName : "div",
      className : "taskList",

    /**
      * DOC
      */
      initialize: function(){
        _.bindAll(this, 'render');
        this.render();
      },

      events: {

      },

    /**
      * DOC
      */
      render: function(){
        this.el.innerHTML = "HEJ";


        var task1 = new TaskModel({ name: "Cool task 1!", description: "Cool description 1!" });
        var task2 = new TaskModel({ name: "Cool task 2!", description: "Cool description 2!" });

        var tasks = new TasksCollection([task1,task2]);


        $('#content').html(this.el);

        return this;
      }
    });

    return TaskView;
  });