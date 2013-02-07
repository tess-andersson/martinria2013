/*
* Sets the path to all the required modules
*/  
require.config({
	paths: {
		jquery: "lib/jquery/jquery",
		underscore: "lib/underscore/underscore",
		backbone: "lib/backbone/backbone",
		"backbone-local":"lib/backbone/backbone.localStorage",
    bootstrap: "lib/bootstrap/js/bootstrap"
	},
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.localStorage': {
      deps: ['backbone'],
      exports: 'Backbone'
    }
  }
});  

require(['src/views/hello'], function(HelloView) {
  new HelloView;
});