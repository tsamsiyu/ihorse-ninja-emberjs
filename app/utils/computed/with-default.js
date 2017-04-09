import Ember from 'ember';

export default function (...args) {
  const property = args[0];
  const supplier = args.pop();
  return Ember.computed(...args, function () {
    const propertyValue = Ember.get(this, property);
    if (propertyValue === undefined) {
      if (typeof supplier === 'function') {
        const supplierArgs = args.map((arg) => {
          return Ember.get(this, arg);
        });
        delete supplierArgs[0];
        return supplier.call(this, ...supplierArgs);
      } else {
        return Ember.get(this, supplier);
      }
    } else {
      return propertyValue;
    }
  });
}
