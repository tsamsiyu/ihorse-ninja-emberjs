import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from 'iron-app/config/environment';
import getOwner from 'ember-getowner-polyfill';

const {inject, RSVP, run} = Ember;

export default Base.extend({
  session: inject.service('session'),
  store: inject.service('store'),
  user: inject.service('user'),
  ajax: inject.service('ajax'),

  restore(data) {
    return new RSVP.Promise((resolve, reject) => {
      const appAuthorizerWay = config['ember-simple-auth']['authorizer'];
      const appAuthorizer = getOwner(this.get('session')).lookup(appAuthorizerWay);
      appAuthorizer.authorize(data, (headers) => {
        this.get('ajax').get('users/current', {headers})
        .then((rawUser) => {
          const user = this.get('store').push(rawUser);
          this.get('user').populate(user);
          resolve(data);
        })
        .catch((/*xhr*/) => {
          reject();
        });
      });
    });
  },

  authenticate(options) {
    console.log('authenticate');
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.get('ajax').post(this.get('tokenEndpoint'), {
        data: this.getData(options)
      })
      .then((rawUser) => {
        const user = this.get('store').push(rawUser);
        if (user.get('authToken')) {
          run(() => {
            this.get('user').populate(user);
            resolve({token: user.get('authToken')});
          });
        } else {
          reject({
            message: 'Authentication response does not contain a token'
          });
        }
      })
      .catch((xhr/*, status, error*/) => {
        run(function() {
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
});
