import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  actions: {
    select(value) {
      this.set('selected', value);
    }
  }
});
