import Ember from 'ember';
import validate from 'npm:validate.js';

export default Ember.Mixin.create({
  validityErrors: [],
  validate(constraints, params) {
    const errors = validate(this.getProperties(params), constraints);
    this.set('validityErrors', errors);
    return !errors;
  }
});
