import Ember from 'ember';

export default Ember.Component.extend({
  type: 'primary',

  actions: {
    click() {
      if (this.get('click')) {
        this.sendAction('click');
      }
    }
  }
});
