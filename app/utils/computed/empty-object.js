import Ember from 'ember';
import _ from 'lodash';

export default function (property) {
  return Ember.computed(property + '.@each', function () {
    return !_.size(this.get(property));
  });
}
