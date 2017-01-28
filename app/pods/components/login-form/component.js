import Ember from 'ember';
import ValidityMixin from 'ihorse-ninja/mixins/validation';

export default Ember.Component.extend(ValidityMixin, {
  session: Ember.inject.service('session'),
  authenticator: 'authenticator:signin',
  form: {},
  validationRules: {
    email: {
      presence: true,
      email: true
    },
    password: {
      presence: true
    },
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
              this.sendAction('ooops');
            }
          });
      }
    }
  }
});
