import Ember from 'ember';

export default Ember.Component.extend({

  init: function() {
    // Weirdly you can't observe model or erros for changing error messages
    this.get('model').get('errors').addObserver(this.get('property'), function() {
      var errorMessage = this.get('model').get('errors').get(this.get('property'))[0];
      this.set('errorMessage', errorMessage);
    }.bind(this));
    this._super.apply(this, arguments);
  },

  tagName: "span",

  actions: {
    startEditing: function() {
      this.set('previousValue', this.get('propertyToEdit'));
      this.set('isEditing', true);
    },

    cancelEditing: function() {
      this.set('propertyToEdit', this.get('previousValue'));
      this.set('isEditing', false);
    },

    saveEdits: function() {
      if (this.get('errorMessage')) { return; }
      this.set('isEditing', false);
      this.get('model').save();
    }
  },

  propertyToEdit: function(key, value) {
    if (arguments.length > 1) {
      this.get('model').set(this.get('property'), value);
    }
    return this.get('model').get(this.get('property'));
  }.property('model', 'property')
});
