import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveTransaction: function() {
      this.model.save();
      this.transitionTo('transactions');
    },

    deleteTransaction: function() {
      this.model.destroyRecord();
      this.transitionTo('transactions');
    }
  },

  inputCompatibleDueDate: function(key, value) {
    if (arguments.length > 1) {
      var dueDate = new Date(value);
      if (dueDate.toString() !== "Invalid Date") {
        this.model.set('dueDate', dueDate);
      }
    }
    return this.model.get('dueDate').toISOString().slice(0, 10);
  }.property('dueDate')
});
