import Ember from 'ember';

export default Ember.Controller.extend({

  numberOfDays: 60,

  days: function() {
    var days = [];
    var today = new Date();
    var newDay;
    var todaysDayOfMonth = today.getDate();
    var transActionsOnThisDay;
    this.store.findAll('transaction').then(function(transactions){
      this.set('transactions', transactions);
    }.bind(this));
    if (this.transactions) {
      for (var i = 0; i < this.get('numberOfDays'); i++) {
        newDay = new Date(today);
        newDay.setDate(todaysDayOfMonth + i);
        transActionsOnThisDay = this.transactions.filter(function (transaction) {
          console.log('Step');
          console.log('1. ', transaction.get('dueDate').toDateString());
          console.log('2. ', newDay.toDateString());
          if(transaction.get('dueDate').toDateString() === newDay.toDateString()) {
            console.log('return true');
            return true;
          }
        });
        days.push({date: newDay, transactions: transActionsOnThisDay});
      }
    }
    return days;
  }.property('numberOfDays', 'transactions')
});
