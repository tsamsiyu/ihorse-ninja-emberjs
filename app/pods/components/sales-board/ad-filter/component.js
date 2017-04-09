import Ember from 'ember';
import computedOptions from 'iron-app/utils/computed/options';

const {computed, String} = Ember;

export default Ember.Component.extend({
  tagName: '',

  borderColor: computed('filter.color', function () {
    return String.htmlSafe("border-color: " + this.get('filter.color'));
  }),
  closeButtonColor: computed('filter.color', function () {
    return String.htmlSafe("color: " + this.get('filter.color'));
  }),
  countriesOptions: computedOptions('countries'),
  selectedCountry: computed('filter.values.countryId', function () {
    const id = this.get('filter.values.countryId');
    return this.get('countries').find((country) => {
      return country.get('id') == id;
    });
  }),
  shortDescription: computed('selectedCountry', function () {
    return this.get('selectedCountry.name');
  }),

  actions: {
    removeFilter() {
      this.sendAction('removeFilter', this.get('filter'));
    },
    commitFilter() {
      this.toggleProperty('filter.opened');
      this.toggleProperty('filter.committed');
    },
    toggleFilter() {
      this.toggleProperty('filter.opened');
    },
    closeDialog() {
      this.toggleProperty('filter.opened');
      if (!this.get('filter.committed')) {
        this.sendAction('removeFilter', this.get('filter'));
      }
    }
  }
});
