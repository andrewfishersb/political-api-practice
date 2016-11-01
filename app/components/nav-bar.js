import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
    navZipLookup() {
        var params = {
          zip: this.get('navZip')
        };

        if(params.zip.length===5){
          this.sendAction('navZipLookup', params);
        }

        //this.transitionTo('zipcode', params.zip);
      }
    }
});
