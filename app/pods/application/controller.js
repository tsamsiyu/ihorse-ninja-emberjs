import Ember from 'ember';
import config from 'ihorse-ninja/config/environment';

export default Ember.Controller.extend({
  name: config.appName
});
