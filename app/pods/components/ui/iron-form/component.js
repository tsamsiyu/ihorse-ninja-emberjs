import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    submit() {
      this.sendAction('submit')
    }
  }
});
