import Ember from 'ember';

const {computed} = Ember;

export default function embedAlias(objectKey, objectPropertyKey) {
  const insideAliasName = `${objectKey}_${objectPropertyKey}_insideAlias`;
  return computed(objectKey, objectPropertyKey, insideAliasName, {
    get() {
      const objectPropertyKeyValue = this.get(objectPropertyKey);
      if (typeof objectPropertyKeyValue === 'string') {
        const key = `${objectKey}.${objectPropertyKeyValue}`;
        if (!this.hasOwnProperty(insideAliasName)) {
          Ember.defineProperty(this, insideAliasName, computed.alias(key));
        }
        return this.get(insideAliasName);
      }
    },
    set(computedKey, newValue) {
      this.set(insideAliasName, newValue);
    }
  });
}
