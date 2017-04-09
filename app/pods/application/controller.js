import Ember from 'ember';
import config from 'iron-app/config/environment';

export default Ember.Controller.extend({
  appName: config.appName,
});
