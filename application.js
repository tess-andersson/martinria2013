/**
 * Loads the required modules.
 */
define(["jquery","underscore","backbone","backbone-local","bootstrap","router"],
  function(Backbone,Underscore,Jquery,Backbonelocal,Bootstrap,Router){
  return {
    run: function(){
      console.log("@main.js:8");
      Router.initialize();
    }
  };
});