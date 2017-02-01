import Ember from 'ember';
import config from 'ihorse-ninja/config/environment';

const {merge, inject, RSVP, set, get} = Ember;

export default Ember.Service.extend({
  session: inject.service('session'),

  send(request) {
    return new RSVP.Promise((resolve, reject) => {
      this.get('session').authorize(config['ember-simple-auth']['authorizer'], (headers) => {
        request = merge({
          headers,
          contentType: 'application/json',
          dataType: 'json'
        }, request);
        set(request, 'url', config.apiBaseUrl + '/' + get(request, 'url'));
        Ember.$.ajax(request).then(resolve).catch(reject);
      });
    });
  }
});
