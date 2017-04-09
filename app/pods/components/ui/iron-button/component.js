import Ember from 'ember';

export default Ember.Component.extend({
  type: 'primary',
  role: 'button',

  isSubmit: Ember.computed.equal('role', 'submit'),
  isReset: Ember.computed.equal('role', 'reset'),
  actionMissing: Ember.computed.or('isSubmit', 'isReset'),

  btnClass: Ember.computed.interpolation('btn btn-[type]'),

  actions: {
    click() {
      if (this.get('click')) {
        this.sendAction('click');
      }
    }
  }
});
