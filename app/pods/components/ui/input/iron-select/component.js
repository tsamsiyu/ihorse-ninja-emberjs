import Ember from 'ember';

export default Ember.Component.extend({
  label: 'label',

  supplyLabel(option) {
    const label = this.get('label');
    const labelType = typeof label;
    if (label === 'function') {
      return label.call(null, option);
    } else if (labelType === 'string') {
      return Ember.get(option, label);
    } else {
      throw Error('Invalid label specified');
    }
  },

  actions: {
    select(value) {
      this.set('selected', value);
    }
  }
});
