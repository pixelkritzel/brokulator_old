import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteAccount: function(account) {
      account.destroyRecord();
    },

    addNewAccount: function() {
      var name = this.get('newAccountName');
      var balance = this.get('newAccountBalance');
      var newAccount = this.store.createRecord('account', {
        name,
        balance
      });
      newAccount.save();
    }

  }
});
