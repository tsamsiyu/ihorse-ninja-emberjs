import Ember from 'ember';
import insideComputedAlias from 'ihorse-ninja/lib/computed/inside-computed-alias'

export default Ember.Component.extend({
  tagName: '',
  errorsKey: 'errors',
  value: insideComputedAlias('model', 'valueKey'),
  allErrors: insideComputedAlias('model', 'errorsKey'),
  errors: insideComputedAlias('allErrors', 'valueKey')
});
