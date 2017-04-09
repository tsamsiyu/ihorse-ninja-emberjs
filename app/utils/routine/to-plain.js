import Ember from 'ember';
import isScalar from 'iron-app/utils/is-scalar';

export default function toPlain(value) {
  if (Ember.isArray(value)) {
    return value.map((item) => toPlain(item));
  } else {
    const props = Object.keys(value).filter((key) => {
      return isScalar(Ember.get(value, key));
    });
    return value.getProperties(props);
  }
}
