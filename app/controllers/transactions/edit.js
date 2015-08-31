import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveTransaction: function() {
      this.model.save();
      this.transitionToRoute('transactions');
    },

    deleteTransaction: function() {
      this.model.deleteRecord();
      this.model.save();
      this.transitionToRoute('transactions');
    },

    setAccount: function(selection, component) {
      this.model.set('account', selection);
      selection.get('transactions').pushObject(this.model);
      this.model.save();
      this.model.get('account').save();
    }
  },

  accounts: Ember.computed('accounts', {
    get: function() {
      return this.store.findAll('account')
    }
  }),

  inputCompatibleDueDate: Ember.computed('dueDate', {
    get: function() {
      console.log('this.get dueDate', this.model.get('dueDate'));
      return this.model.get('dueDate').slice(0, 10);
    },
    set: function(key, value) {
      var dueDate = new Date(value);
      if (dueDate.toString() !== "Invalid Date") {
        this.model.set('dueDate', dueDate);
      }
      return this.model.get('dueDate').slice(0, 10);
    }
  })
});
