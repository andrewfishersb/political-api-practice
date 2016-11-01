import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model() {
    var apiCallArray = [];
    var key = config.myApiKey;
    var url =  'http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=false&per_page=500&apikey=' +key;
    return Ember.$.getJSON(url).then(function(responseJSON){
      apiCallArray.push(responseJSON.results);
      return Ember.$.getJSON(url).then(function(responseJSON){
        return Ember.RSVP.hash({
          house: apiCallArray[0],
        });
      });

    })

  },

});
