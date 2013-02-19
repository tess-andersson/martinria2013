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

        //var tasksCollection = new TasksCollection();

        //console.log(this.model);

        //console.log(localStorage);

        this.collection.fetch();

        this.collection.create({name:"testname2"});

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