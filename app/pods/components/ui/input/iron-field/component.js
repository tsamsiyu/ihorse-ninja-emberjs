import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  inputClass: 'form-control',
  actualType: Ember.computed.withDefault('type', 'text')
});
