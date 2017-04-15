import Ember from 'ember';

export default function (prefix, generate = false) {
  return Ember.computed(function (propertyName) {
    prefix = prefix ? prefix + '_' : '';
    const prefix2 = propertyName.replace(/id$/i, '') + '_';
    const elementId = this.get('elementId');
    if (generate || !elementId) {
      return prefix + prefix2 + Ember.guidFor({
          self: this,
          random: Math.random()
        });
    } else {
      return prefix + prefix2 + elementId;
    }
  });
}
