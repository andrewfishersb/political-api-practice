import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
      showBillInfo(params){
        this.sendAction("showBillInfo",params);
      }
    }
});
