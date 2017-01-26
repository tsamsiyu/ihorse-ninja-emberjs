import Ember from 'ember';

export function isScalar(value) {
  const type = typeof value;
  return type === 'string' || type === 'number' || type === 'boolean';
}

export function toPlain(object) {
  if (Ember.isArray(object)) {
    return object.map((item) => toPlain(item));
  } else {
    const props = Object.keys(object).filter((key) => {
      return isScalar(object.get(key));
    });
    return object.getProperties(props);
  }
}
