import Ember from 'ember';
import {countriesMap} from 'ihorse-ninja/data/countries';
import {optionize} from 'ihorse-ninja/lib/utils/collection';

const {computed, String} = Ember;

export default Ember.Component.extend({
  tagName: '',
  isDialogShowing: true,
  countriesOptions: optionize(countriesMap),

  borderColor: computed('filter.color', function () {
    return String.htmlSafe("border-color: " + this.get('filter.color'));
  }),
  closeButtonColor: computed('filter.color', function () {
    return String.htmlSafe("color: " + this.get('filter.color'));
  }),

  actions: {
    removeFilter() {
      this.sendAction('removeFilter', this.get('filter'));
    },
    toggleFilter() {
      this.toggleProperty('filter.opened');
    },
    closeDialog() {
      this.toggleProperty('isDialogShowing');
    }
  }
});
