import Ember from 'ember';
import ValidationMixin from 'ihorse-ninja/mixins/validation';

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
    passwordRepeat: {
      presence: true,
      equality: {
        attribute: 'password'
      }
    }
  },
  actions: {
    authenticate: function() {
      const isValid  = this.validate(this.get('validationRules'), this.get('form'));

      if (isValid) {
        this.get('session')
          .authenticate(this.get('authenticator'), this.get('form'))
          .catch((reject) => {
            if (reject.status === 422) {
              try {
                this.set('form.errors', JSON.parse(reject.messages));
              } catch (e) {
                console.error('Unexpected errors format', reject);
              }
            } else {
              alert('Ooops, something went wrong');
            }
        });
      }
    }
  }
});
