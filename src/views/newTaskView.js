define([
  'jquery',
  'underscore',
  'backbone',
  'src/models/taskModel',
  'src/collections/tasksCollection',
  'text!src/templates/newTaskTemplate.html'
  ], function($, _, Backbone,Task,TasksCollection,NewTaskTemplate){

  /**
    * Creates a new view
    */
    var newTaskView = Backbone.View.extend({
      tagName: 'div',
      id: 'taskList',

      template: _.template(NewTaskTemplate),

    /**
      * Initializes the view
      */
      initialize: function(){
        _.bindAll(this);

        this.render();
      },

      events: {
        "click #createButton": "createTask",
      },

      /**
      * Creates a new task
      * 
      * @param {event} e Events from the view
      */
      createTask: function(e){
        this.collection.create({name: $("#createNameField").val(), description: $("#createDescriptionField").val()});

        window.location.hash = '';
      },

    /**
      * Renders the view
      */
      render: function(){

        this.$el.html(this.template());

        return this;
      }
    });

    return newTaskView;
  });