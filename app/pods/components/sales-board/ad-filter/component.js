import Ember from 'ember';
import _ from 'lodash';

const {computed} = Ember;

export default Ember.Component.extend({
  tagName: '',

  // didInsertElement() {
  //   console.log(this.get('countries.content'));
  // },

  countriesOptions: computed.asOptions('countries'),
  borderColor: computed.interpolation(`border-color: [filter.color]`),
  closeButtonColor: computed.interpolation(`color: [filter.color]`),
  // countriesOptions: computed.asOptions('countries'),
  // selectedCountry: computed.findBy('countries', {'id': 'filter.values.countryId'}),
  // isSaveDisabled: computed('filter.values', 'filter.values.@each.countryId', function () {
  //   console.log('save disabled computed');
  // }),
  shortDescription: computed('filter.values.country', function () {
    return this.get('filter.values.country');
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
