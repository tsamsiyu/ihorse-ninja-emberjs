import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from 'auto-market/config/environment';
import getOwner from 'ember-getowner-polyfill';

export default Base.extend({
  apiState: Ember.inject.service('api-state'),
  session: Ember.inject.service(),

  restore: function(data) {
    const appAuthorizerWay = config['ember-simple-auth']['authorizer'];
    const appAuthorizer = getOwner(this.get('session')).lookup(appAuthorizerWay);
    return new Ember.RSVP.Promise((resolve, reject) => {
      appAuthorizer.authorize(data, (headers) => {
        this.get('apiState').sendRequest(headers)
          .then((state) => {
            if (!Ember.isEmpty(data.token) && !state.isGuest) {
              this.get('apiState').set('state', state);
              resolve(data);
            } else {
              reject();
            }
          }).catch((errors) => {
            reject(errors);
        });
      });
    });
  },

  authenticate: function(options) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: this.tokenEndpoint,
        type: 'POST',
        data: JSON.stringify(this.getData(options)),
        contentType: 'application/json;charset=utf-8',
        dataType: 'json'
      }).then((response) => {
        if (response.token) {
          Ember.run(function() {
            console.log('resolve token: ' + response.token);
            resolve({
              token: response.token
            });
          });
        } else {
          console.error('authentication response does not contain a token');
        }
      }, (xhr, status, error) => {
        let response = xhr.responseText;
        Ember.run(function() {
          reject(response);
        });
      });
    });
  },

  getData(options) {
    return options;
  },

  invalidate: function() {
    return Ember.RSVP.resolve();
  }
});
