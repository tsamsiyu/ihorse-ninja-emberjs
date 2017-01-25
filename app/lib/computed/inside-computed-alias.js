import Ember from 'ember';

const {computed} = Ember;

export default function insideComputedAlias(objectKey, objectPropertyKey) {
  return computed(function (computedKey) {
    const key = `${objectKey}.${this.get(objectPropertyKey)}`;
    Ember.defineProperty(this, computedKey, computed.alias(key));
    return this.get(key);
  })
}
