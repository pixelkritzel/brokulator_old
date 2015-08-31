import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  name: DS.attr('string'),
  balance: DS.attr('number'),
  transactions: DS.hasMany('transaction', { async: true }),

  numberOfDays: 60,

  days: function() {
    var days = [];
    var today = new Date();
    var newDay;
    var todaysDayOfMonth = today.getDate();
    var transActionsOnThisDay;
    console.log(`transactions for ${this.get('name')}`, this.get('transactions').get('length'));
    for (var i = 0; i < this.get('numberOfDays'); i++) {
      newDay = new Date(today);
      newDay.setDate(todaysDayOfMonth + i);
      transActionsOnThisDay = this.get('transactions').filter(function (transaction) {
        console.log(transaction.get('dueDate'), newDay.toDateString());
        if(transaction.get('dueDate') === newDay.toDateString()) {
          return true;
        }
      });
      console.log(transActionsOnThisDay);
      days.push({date: newDay, transactions: transActionsOnThisDay});
    }
    return days;
  }.property('numberOfDays', 'transactions'),

  validations: {
    name: {
      presence: true
    },
    balance: {
      numericality: true
    }
  }

});
