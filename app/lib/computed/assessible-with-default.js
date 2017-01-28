import Ember from 'ember';

export default function (keyWithDefaultValue) {
  return Ember.computed({
    get(k) {
      const overridenValue = this.get(`${k}_overrides`);
      if (overridenValue !== undefined) {
        return overridenValue;
      }
      return this.get(keyWithDefaultValue);
    },
    set(k, v) {
      this.set(`${k}_overrides`, v);
    }
  });
};
