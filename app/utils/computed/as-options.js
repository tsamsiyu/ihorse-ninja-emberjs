import Ember from 'ember';
import asOptions from 'iron-app/utils/collection/as-options';

export default function (name, label = 'name', value = 'id') {
  return Ember.computed(
    name,
    `${name}.[]`,
    `${name}.@each.${label}`,
    `${name}.@each.${value}`,
    function () {
      return asOptions(Ember.get(this, name), label, value);
  });
}
