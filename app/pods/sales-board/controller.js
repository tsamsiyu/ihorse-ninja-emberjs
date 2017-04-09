import Ember from 'ember';
import Filter from 'iron-app/pods/sales-board/filter';

export default Ember.Controller.extend({
  filters: [],

  actions: {
    addFilter() {
      this.get('filters').pushObject(Filter.create());
    },
    removeFilter(filter) {
      this.get('filters').removeObject(filter);
    }
  }
});
