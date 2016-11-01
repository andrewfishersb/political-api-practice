import Ember from 'ember';

export default Ember.Component.extend({
  twitter: Ember.computed('person.twitter_id', function() {

   return 'http://www.twitter.com/' + this.get('person.twitter_id');
 }),
});
