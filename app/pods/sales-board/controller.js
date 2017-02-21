import Ember from 'ember';
import _ from 'lodash';

export default Ember.Controller.extend({
  filters: [],
  filterColors: _.shuffle([
    '#FF9209',
    '#FF0C00',
    '#D9FF04',
    '#33FFF7',
    '#33EB00',
    '#0008eb',
    '#00e5eb',
    '#e2bfeb',
    '#eb0099',
    '#10ebac',
    '#c01deb',
    '#ebae6c',
    '#e2eb89',
  ]),

  getFilterColor() {
    const color = this.get('filterColors').pop();
    this.get('filterColors').unshift(color);
    return color;
  },

  addFilter() {
    this.get('filters').pushObject({
      values: {},
      color: this.getFilterColor(),
      opened: true,
      committed: false
    });
  },

  actions: {
    addFilter() {
      this.addFilter();
    },
    removeFilter(filter) {
      this.get('filters').removeObject(filter);
    }
  }
});
