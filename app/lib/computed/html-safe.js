import Ember from 'ember';

export default function (prop) {
  return Ember.computed(prop, function () {
    return Ember.String.htmlSafe(this.get(prop));
  });
};
