import Ember from 'ember';
import config from 'ihorse-ninja/config/environment';

export default Ember.Service.extend({
  session: Ember.inject.service('session'),
  state: null,
  sendRequest(headers = {}) {
    return Ember.$.ajax({
      headers,
      url: config.apiBaseUrl + '/session',
      type: 'GET',
      contentType: 'application/json;charset=utf-8',
      dataType: 'json'
    });
  }
});
