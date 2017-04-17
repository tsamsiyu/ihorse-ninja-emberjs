import Ember from 'ember';
import _ from 'lodash';

const { computed, observer } = Ember;

export default Ember.Component.extend({
  tagName: '',

  borderColor: computed.interpolation(`border-color: [filter.color]`),
  closeButtonColor: computed.interpolation(`color: [filter.color]`),
  shortDescription: computed('filter.values.country', function () {
    return [
      this.get('filter.values.country.name'),
      this.get('filter.values.mark.name'),
    ].join(' | ');
  }),
  countryObserver: observer('filter.values.country', function () {
    if (this.get('filter.values.country')) {
      this.set('filter.values.mark', null);
    }
  }),
  countryMarks: computed('marks.[]', 'filter.values.country', function () {
    return this.get('marks').filter((mark) => {
      const country = this.get('filter.values.country');
      return !country || (mark.get('countryId') === country.get('id'));
    });
  }),

  actions: {
    removeFilter() {
      this.sendAction('removeFilter', this.get('filter'));
    },
    commitFilter() {
      const filter = this.get('filter');
      if (!_.size(filter.get('values'))) {
        this.send('removeFilter');
      } else {
        this.get('filter').commit();
        this.get('filter').close();
      }
    },
    openFilterDialog() {
      if (!this.get('filter.opened')) {
        this.get('filter').open();
      }
    },
    closeFilterDialog() {
      if (this.get('filter.opened')) {
        if (!this.get('filter.committed')) {
          this.sendAction('removeFilter', this.get('filter'));
        } else {
          this.get('filter').close();
        }
      }
    }
  }
});
