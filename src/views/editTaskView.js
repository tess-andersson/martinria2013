define([
'jquery',
'underscore',
'backbone',
'text!src/templates/editTaskTemplate.html'
], function($, _, Backbone, EditTaskTemplate){

	/**
	* Creates a new view for editing tasks
	*/
	var EditTaskView = Backbone.View.extend({
		
		tagName: 'div',
		id: 'taskList',
		
		template: _.template( EditTaskTemplate ),
	
		/**
		* Initializes the editing view
		*/
		initialize: function(){
			_.bindAll(this);
		},
	
		events: {
			"click #editButton": "editTask",
		},
	  
		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;  
		},
		
		/**
		* Edits and saves changed task
		*/
		editTask: function(){
		 
			this.model.set( { name: $('#editName').val(), description: $('#editDescription').val() } );
			this.model.save();
			
			// Navigate to TaskView
			Backbone.history.navigate("task/" + this.model.id, { trigger: true });
		}
  
	});

	return EditTaskView;
});