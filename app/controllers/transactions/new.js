import Ember from 'ember';

export default Ember.Controller.extend({

  init: function() {
    this.store.findAll('account').then(function(accounts){
      this.set('accounts', accounts);
      this.set('account', accounts.get('firstObject'));
    }.bind(this));
  },

  actions: {
    newTransaction: function() {
      var name = this.get('name');
      var amount = this.get('amount');
      var dueDate = new Date(this.get('dueDate')).toDateString();
      this.store.find('account', this.get('account').get('id')).then(function(account) {
        if (dueDate.toString() !== "Invalid Date") {
          var newTransaction = this.store.createRecord('transaction', { name, amount, dueDate });
          newTransaction.set('account', account)
          newTransaction.save();
          account.save();
          this.transitionTo('transactions');
        }
      }.bind(this));
    },

    setAccount: function(account) {
      this.set('account', account)
    }

  },

  dueDate: (new Date()).toISOString().slice(0, 10)
});
