import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  formClass: 'form-horizontal',

  actions: {
    submit() {
      this.sendAction('submit');
    }
  }
});
