import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  option2: Ember.computed('selected', 'options', 'options.[]', 'option.@each.value', function () {
    const selected = this.get('selected');
    this.get('options').find((option) => {
      return Ember.get(option, 'value') == selected;
    });
  }),

  actions: {
    select(value) {
      this.set('selected', value);
    }
  }
});
