import Ember from 'ember';
import {optionize} from 'ihorse-ninja/lib/utils/collection';

export default function (name, label = 'name', value = 'id') {
  return Ember.computed(
    name,
    `${name}.[]`,
    `${name}.@each.${label}`,
    `${name}.@each.${value}`,
    function () {
      return optionize(this.get(name), label, value);
  });
};
