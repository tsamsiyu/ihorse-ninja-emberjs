import Ember from 'ember';
import _ from 'lodash';

const {computed} = Ember;

/**
 * Example:
 * ```
 * {{#iron-form-group model=model valueKey=property errors as |value|}}
 * {{/iron-form-group}}
 * ```
 */
export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['form-group'],
  labelClass: 'control-label',
  classNameBindings: ['modelValueErrors:has-error'],
  errorsKey: 'errors',

  modelValue: computed.embedAlias('model', 'valueKey'),
  modelErrors: computed.embedAlias('model', 'errorsKey'),
  modelValueErrors: computed.embedAlias('modelErrors', 'valueKey'),
  modelValueLabel: computed.withDefault('label', 'valueKey', _.humanize),
});
