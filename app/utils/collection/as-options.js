import Ember from 'ember';

export default function toOptions(collection, label = 'name', value = 'id') {
  return collection.map((item) => {
    return {
      label: Ember.get(item, label),
      value: Ember.get(item, value),
    };
  });
}
