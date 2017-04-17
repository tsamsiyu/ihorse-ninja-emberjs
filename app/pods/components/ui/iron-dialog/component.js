import Ember from 'ember';

const { computed, Component } = Ember;

export default Component.extend({
  translucentOverlay: true,
  dialogContainerClass: computed.interpolation('iron-dialog-container [containerClass]'),

  actions: {
    close() {
      if (this.get('close')) {
        this.sendAction('close');
      }
    }
  }
});
