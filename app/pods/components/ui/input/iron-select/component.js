import Ember from 'ember';

export default Ember.Component.extend({
  label: 'label',
  allowClear: true,

  supplyLabel(option) {
    const label = this.get('label');
    const labelType = typeof label;
    if (labelType === 'function') {
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
