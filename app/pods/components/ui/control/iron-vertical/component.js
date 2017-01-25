import Ember from 'ember';
import insideComputedAlias from 'ihorse-ninja/lib/computed/inside-computed-alias'

export default Ember.Component.extend({
  tagName: '',
  value: insideComputedAlias('model', 'valueKey'),
  errors: insideComputedAlias('model', 'errorsKey')
});
