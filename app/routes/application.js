import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller, model) {
    var object = {
      explicitValue: "explicit",
      get descriptorValue(){
        return "descriptor"
      }
    }
    console.log("object: " + object);
    console.log("object.explicitValue: " + object.explicitValue);
    console.log("object.descriptorValue: " + object.descriptorValue);
    controller.set('object', object);
  }

});
