import Ember from 'ember';
import insideComputedAlias from 'ihorse-ninja/lib/computed/inside-computed-alias';
import _ from 'lodash';

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
  classNameBindings: ['actualErrors:has-error'],

  errorsKey: 'errors',
  originalValue: insideComputedAlias('model', 'valueKey'),
  originalErrorsSet: insideComputedAlias('model', 'errorsKey'),
  originalErrors: insideComputedAlias('originalErrorsSet', 'valueKey'),
  actualValue: Ember.computed.reads('originalValue'),
  actualErrors: Ember.computed.reads('originalErrors'),
  actualLabel: Ember.computed('label', 'valueKey', function () {
    if (this.get('label')) {
      return this.get('label');
    } else {
      return _.humanize(this.get('valueKey'));
    }
  }),
});
