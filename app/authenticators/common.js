import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from 'ihorse-ninja/config/environment';

const {inject, RSVP} = Ember;

export default Base.extend({
  tokenResponsePath: 'authToken',
  session: inject.service('session'),

  restore(data) {
    return new RSVP.Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(options) {
    const tokenResponsePath = this.get('tokenResponsePath');
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: this.getUrl(),
        type: 'POST',
        data: JSON.stringify(this.getData(options)),
        contentType: 'application/json;charset=utf-8',
        dataType: 'json'
      }).then((response) => {
        if (response[tokenResponsePath]) {
          Ember.run(function() {
            resolve({token: response[tokenResponsePath]});
          });
        } else {
          console.error('authentication response does not contain a token');
        }
      }, (xhr, status, error) => {
        Ember.run(function() {
          reject({
            status: xhr.status,
            message: xhr.responseJSON
          });
        });
      });
    });
  },

  getData(options) {
    return options;
  },

  invalidate: function() {
    return Ember.RSVP.resolve();
  },

  getUrl() {
    const path = this.get('tokenEndpoint');
    const api = config.api;
    return `${api.domain}/${api.namespace}/${path}`;
  }
});
