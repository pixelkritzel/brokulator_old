import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveTransaction: function() {
      this.model.save();
      this.transitionToRoute('transactions');
    },

    deleteTransaction: function() {
      this.model.destroyRecord();
      this.transitionToRoute('transactions');
    },

    setAccount: function(selection, component) {
      this.model.set('account', selection);
    }
  },

  accounts: Ember.computed('accounts', {
    get: function() {
      return this.store.findAll('account')
    }
  }),

  inputCompatibleDueDate: Ember.computed('dueDate', {
    get: function() {
      return this.model.get('dueDate').toISOString().slice(0, 10);
    },
    set: function(key, value) {
      var dueDate = new Date(value);
      if (dueDate.toString() !== "Invalid Date") {
        this.model.set('dueDate', dueDate);
      }
      return this.model.get('dueDate').toISOString().slice(0, 10);
    }
  })
});
