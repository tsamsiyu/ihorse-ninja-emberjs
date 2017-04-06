import Ember from 'ember';
import DS from 'ember-data';
import ValidationMixin from 'ihorse-ninja/mixins/validation';

export default Ember.Component.extend(ValidationMixin, {
  session: Ember.inject.service('session'),
  authenticator: 'authenticator:signup',
  form: {},

  actions: {
    authenticate: function() {
      this.get('session')
        .authenticate(this.get('authenticator'), this.get('form'))
        .catch((reject) => {
          if (reject.status === 422) {
            try {
              const errors = DS.Errors.create();
              reject.message.errors.forEach((error) => {
                console.log(error);
                errors.add(error.id, error.message);
              });
              console.log(errors.get('email'));
              this.set('form.errors', errors);
            } catch (e) {
              console.error('Unexpected errors format', reject);
            }
          } else {
            alert('Ooops, something went wrong');
          }
      });
      }
  }
});
