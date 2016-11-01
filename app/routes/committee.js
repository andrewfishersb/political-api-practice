import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model() {
    var apiCallArray = [];
    var key = config.myApiKey;
    var houseUrl =  'http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=false&per_page=500&apikey=' +key;
    var senateUrl = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&subcommittee=false&per_page=500&apikey=' +key;
    return Ember.$.getJSON(houseUrl).then(function(responseJSON){
      apiCallArray.push(responseJSON.results);
      return Ember.$.getJSON(senateUrl).then(function(responseJSON){
        apiCallArray.push(responseJSON.results);
        return Ember.RSVP.hash({
          house: apiCallArray[0],
          senate: apiCallArray[1],
        });
      });
    });
  },
  actions: {
    goToSub(params){
        this.transitionTo('house-subcommittee',params);
    }
  }

});
