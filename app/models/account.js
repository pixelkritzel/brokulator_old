import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  name: DS.attr('string'),
  balance: DS.attr('number'),

  validations: {
    name: {
      presence: true
    },
    balance: {
      numericality: true
    }
  }

});
