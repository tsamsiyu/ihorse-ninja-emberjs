import Ember from 'ember';
import validate from 'npm:validate.js';
import {toPlain} from 'ihorse-ninja/lib/utils/routine';

const {set} = Ember;

export default Ember.Mixin.create({
  validate(constraints, object) {
    if (object instanceof Ember.Object) {
      object = toPlain(object);
    }
    const errors = validate(object, constraints);
    set(object, 'errors', errors);
    return !errors;
  }
});
