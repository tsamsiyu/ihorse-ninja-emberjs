import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  selected: Ember.computed('value', 'selectedValue', function () {
    return this.get('value') == this.get('selectedValue');
  }),
});
