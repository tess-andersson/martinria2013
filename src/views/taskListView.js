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
     el: $('#main'),

    /**
      * Initializes the view
      */
      initialize: function(){
        _.bindAll(this);

        this.render();
      },

      events: {
        "click #deleteAllDoneButton": "deleteAllDone",
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

        return this;
      },

      /**
      * Deletes all tasks that are marked as done
      * @param {event} e Events from the view
      */
      deleteAllDone: function(e){
        this.undelegateEvents();

        _.each(this.collection.models,function(task){
          if(task.attributes.done){
            task.destroy();
          }
        });

        this.render();
      }
    });

    return TaskView;
  });