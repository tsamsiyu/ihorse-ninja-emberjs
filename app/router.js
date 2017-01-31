import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sales-board', {path: '/'});
  this.route('signin');
  this.route('signup');
  this.route('home');
});

export default Router;
