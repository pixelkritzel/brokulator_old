import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
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
  },

  validations: {
    newAccountName: {
      presence: true
    }
  }
});
