import Ember from 'Ember';

export default function (message) {
  return new Ember.RSVP((resolve, reject) => {
    if (confirm(message)) {
      resolve();
    } else {
      reject();
    }
  });
}
