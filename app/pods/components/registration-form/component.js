import Ember from 'ember';
import ValidityMixin from 'auto-market/mixins/validation';
import constraints from './validations';

export default Ember.Component.extend(ValidityMixin, {
  session: Ember.inject.service('session'),
  authenticator: 'authenticator:signup',
  actions: {
    authenticate: function() {
      const fields = ['email', 'password', 'passwordConfirmation'];
      const isValid  = this.validate(constraints.firstStep, fields);

      if (isValid) {
        this.get('session').authenticate(this.authenticator, this.getProperties(fields)).catch((message) => {
          try {
            this.set('validityErrors', JSON.parse(message));
          } catch (e) { }
        });
      }
    }
  }
});
