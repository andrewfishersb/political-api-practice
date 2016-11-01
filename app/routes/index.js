import Ember from 'ember';
import config from '../config/environment';


export default Ember.Route.extend({

  actions: {
    zipLookup(params) {
      this.transitionTo('zipcode', params.zip);
    }
  }
});
