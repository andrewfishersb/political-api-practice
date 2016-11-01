import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('zipcode',{path: '/zipcode/:zip'});
  this.route('committee');
  this.route('subcommittee',{path: '/subcommittee/:committee_id'});
  this.route('bills');
  this.route('bill-info', {path: '/bill-info/:bill_id'});
  this.route('legislator',{path: '/legislator/:bioguide_id'});
});

export default Router;
