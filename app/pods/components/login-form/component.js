import Ember from 'ember';
import ValidityMixin from 'ihorse-ninja/mixins/validation';
import constraints from './validations';

export default Ember.Component.extend(ValidityMixin, {
  session: Ember.inject.service('session'),
  authenticator: 'authenticator:signin',
  actions: {
    authenticate: function() {
      const fields = ['email', 'password'];
      const isValid = this.validate(constraints.firstStep, fields);
      if (isValid) {
        this.get('session').authenticate(this.authenticator, this.getProperties(fields)).catch((message) => {
          this.set('invalidCredentials', true);
        });
      }
    }
  }
});
