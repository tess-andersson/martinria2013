define([
  'jquery',
  'underscore',
  'backbone',
  'src/models/taskModel',
  'src/collections/tasksCollection',
  'text!src/templates/taskDetailsTemplate.html'
  ], function($, _, Backbone,Task,TasksCollection,TaskDetailsTemplate){

  /**
    * Creates a new view
    */
    var TaskView = Backbone.View.extend({
     el: $('#main'),

    /**
      * Initializes the view
      */
      initialize: function(){
        _.bindAll(this);

        this.render();
      },

      events: {
        "click #doneButton": "toggleDone",
      },

    /**
      * Renders the view
      * @return {TaskView} The view object
      */
      render: function(){

        this.collection.fetch();

        var task = this.collection.get(this.id)

        var data = {
          task: task.toJSON()
        };

        this.el.innerHTML = _.template(TaskDetailsTemplate,data);

        return this;
      },

       /**
      * Toggles the value of the objects 'done' property
      * @param {event} e Events from the view
      * @return {TaskView} The view object
      */
      toggleDone: function(e){
        this.collection.get(this.id).toggleDone();

        this.undelegateEvents();

        window.location.hash = '';

        return this;
      }

    });

    return TaskView;
  });