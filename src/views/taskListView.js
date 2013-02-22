define([
  'jquery',
  'underscore',
  'backbone',
  'src/models/taskModel',
  'src/collections/tasksCollection',
  'text!src/templates/taskListTemplate.html'
  ], function($, _, Backbone,Task,TasksCollection,TaskListTemplate){

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