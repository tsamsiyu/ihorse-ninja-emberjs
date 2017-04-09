import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  selectClass: 'form-control',
  optionClass: '',

  actions: {
    select(value) {
      this.set('selected', value);
    }
  }
});
