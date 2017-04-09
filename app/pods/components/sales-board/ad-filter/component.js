import Ember from 'ember';

const {computed} = Ember;

export default Ember.Component.extend({
  tagName: '',

  borderColor: computed.interpolation(`border-color: [filter.color]`),
  closeButtonColor: computed.interpolation(`color: [filter.color]`),
  countriesOptions: computed.asOptions('countries'),
  selectedCountry: computed.findBy('countries', {'id': 'filter.values.countryId'}),
  shortDescription: computed('selectedCountry', function () {
    return this.get('selectedCountry.name');
  }),

  actions: {
    removeFilter() {
      this.sendAction('removeFilter', this.get('filter'));
    },
    commitFilter() {
      this.get('filter').commit();
      this.get('filter').close();
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
