define([
  'jquery',
  'underscore',
  'backbone',
  'src/models/taskModel',
  'src/collections/tasksCollection',
  'text!src/templates/taskDetailsTemplate.html'
  ], function($, _, Backbone,Task,TasksCollection,TaskDetailsTemplate){

  /**
    * DOC
    */
    var TaskView = Backbone.View.extend({
      tagName : "div",
      className : "taskView",

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

        //console.log(this.id)

        this.collection.fetch();

        var task = this.collection.get(this.id)

        var data = {
          task: task.toJSON()
        };

        this.el.innerHTML = _.template(TaskDetailsTemplate,data);

        $('#main').html(this.el);

        return this;
      }
    });

    return TaskView;
  });