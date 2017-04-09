import Ember from 'ember';
import handleValidationCatch from 'iron-app/utils/routine/handle-validation-catch';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  authenticator: 'authenticator:signup',
  form: {},

  actions: {
    authenticate() {
      const form = this.get('form');
      const authenticator = this.get('authenticator');
      this.get('session').authenticate(authenticator, form).catch(handleValidationCatch(form));
    }
  }
});
