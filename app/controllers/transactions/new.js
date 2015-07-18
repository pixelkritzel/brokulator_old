import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newTransaction: function() {
      var name = this.get('name');
      var amount = this.get('amount');
      var dueDate = new Date(this.get('dueDate'));
      if (dueDate.toString() !== "Invalid Date") {
        var newTransaction = this.store.createRecord('transaction', { name, amount, dueDate});
        newTransaction.save();
        this.transitionTo('transactions');
      }
    }
  },

  dueDate: (new Date()).toISOString().slice(0, 10)
});
