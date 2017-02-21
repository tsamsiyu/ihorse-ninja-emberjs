import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  selectedFlag: Ember.computed('value', 'selected', function () {
    return this.get('value') == this.get('selected');
  }),
});
