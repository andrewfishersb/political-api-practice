import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model() {
    var key = config.myApiKey;
    var url =  'http://congress.api.sunlightfoundation.com/bills?per_page=500&apikey=' +key;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  },
  actions: {
    showBillInfo(params){
        this.transitionTo('bill-info',params);
    }
  }
});
