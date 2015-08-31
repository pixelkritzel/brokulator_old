import Ember from 'ember';

export default Ember.Route.extend({
  // model: function() {
  //   return this.store.findAll('transaction');
  // }
  model: function (params) {
    return Ember.RSVP.hash({
      transactions: this.store.findAll('transaction'),
      accounts: this.store.findAll('account')
    });
  }
});
