import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    navZipLookup(params) {
      this.transitionTo('zipcode', params.zip);
    }
  }
});
