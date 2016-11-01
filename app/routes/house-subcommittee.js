import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params){
    var key = config.myApiKey;
    var url =  'http://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id='+ params.committee_id +'&apikey=' +key;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
