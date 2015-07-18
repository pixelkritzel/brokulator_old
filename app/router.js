import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('transactions', function() {
    this.route('new');
    this.route('edit', { path: "/edit/:transaction_id" });
  });
});

export default Router;
