import Ember from 'ember';
import ValidationMixin from 'ihorse-ninja/mixins/validation';
import {toPlain} from 'ihorse-ninja/lib/utils/routine';

export default Ember.Component.extend(ValidationMixin, {
  session: Ember.inject.service('session'),
  authenticator: 'authenticator:signup',
  form: {},
  validationRules: {
    email: {
      presence: true,
      email: true
    },
    password: {
      presence: true
    },
    passwordConfirmation: {
      presence: true,
      equality: {
        attribute: 'password'
      }
    }
  },
  actions: {
    authenticate: function() {
      const isValid  = this.validate(this.get('validationRules'), this.get('form'));
      console.log(this.get('form.errors'));
      // console.log('is valid', isValid);

      // if (isValid) {
      //   this.get('session').authenticate(this.authenticator, this.getProperties(fields)).catch((message) => {
      //     try {
      //       this.set('validityErrors', JSON.parse(message));
      //     } catch (e) { }
      //   });
      // }
    }
  }
});
