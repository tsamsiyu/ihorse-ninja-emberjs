import Ember from 'ember';

const {get} = Ember;

export function optionize(collection, label = 'name', value = 'id') {
  return collection.map((item) => {
    return {
      label: get(item, label),
      value: get(item, value),
    }
  });
}
