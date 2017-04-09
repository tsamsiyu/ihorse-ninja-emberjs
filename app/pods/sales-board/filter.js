import Ember from 'ember';
import colors from 'iron-app/pods/sales-board/colors';

const getNextColor = function () {
  const nextColor = colors.pop();
  colors.unshift(nextColor);
  return nextColor;
};

export default Ember.Object.extend({
  values: {},
  color: Ember.computed(getNextColor),
  opened: true,
  committed: false,

  commit() {
    this.set('committed', true);
  },
  close() {
    this.set('opened', false);
  },
  open() {
    this.set('opened', true);
  }
});
