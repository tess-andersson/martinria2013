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

        window.tasks.fetch();

        this.render();
      },

      events: {

      },

    /**
      * DOC
      */
      render: function(){
        console.log(window.tasks.localStorage);

        //this.el.innerHTML = _.template(TaskListTemplate, tasks);

        $('#main').html(this.el);

        return this;
      }
    });

    return TaskView;
  });