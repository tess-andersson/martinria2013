define([
  'jquery',
  'underscore',
  'backbone',
  'src/models/taskModel',
  'src/collections/tasksCollection',
  'text!src/templates/taskListTemplate.html'
  ], function($, _, Backbone,Task,TasksCollection,TaskListTemplate){

  /**
    * Creates a new view
    */
    var TaskView = Backbone.View.extend({
      tagName : "div",
      className : "taskList",

    /**
      * Initializes the view
      */
      initialize: function(){
        _.bindAll(this, 'render');

        this.render();
      },

      events: {

      },

    /**
      * Renders the view
      */
      render: function(){

        this.collection.fetch();

        var data = {
          tasks: this.collection.toJSON()
        };

        this.el.innerHTML = _.template(TaskListTemplate,data);

        $('#main').html(this.el);

        return this;
      }
    });

    return TaskView;
  });