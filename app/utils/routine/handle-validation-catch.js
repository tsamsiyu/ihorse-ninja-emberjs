import Ember from 'ember';
import castErrors from 'iron-app/utils/routine/cast-errors';

export default function handleValidationCatch(object) {
  return function (reject) {
    if (reject.status === 422) {
      try {
        Ember.set(object, 'errors', castErrors(reject.message.errors));
      } catch (e) {
        throw new Error('Unexpected errors format');
      }
    } else {
      alert('Ooops, something went wrong');
    }
  };
}
