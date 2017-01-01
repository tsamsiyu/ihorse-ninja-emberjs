import Ember from 'ember';
import humanize from 'npm:string-humanize';

export default Ember.Component.extend({
  // meta properties
  inputClasses: ['form-control'],
  classNames: ['form-group'],
  classNameBindings: ['errors:has-error'],
  // configured properties
  type: 'text',
  model: null,
  property: null,
  placeholder: null,
  required: null,
  entity: null,
  label: null,
  id: null,
  errors: null,
  init() {
    this._super(...arguments);
    if (!this.get('id')) {
      if (this.get('entity')) {
        this.set('id', this.get('entity') + '[' + this.get('property') + ']');
      } else {
        this.set('id', this.get('elementId') + '[' + this.get('property') + ']');
      }
    }
    if (!this.get('label')) {
      this.set('label', humanize(this.get('property')))
    }
  },
  focusOut: function () {
    this.set('errors', null);
  }
});
