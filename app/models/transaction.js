import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  amount: DS.attr('number'),
  dueDate: DS.attr('date'),
  account: DS.belongsTo('account', {async: true})
});
