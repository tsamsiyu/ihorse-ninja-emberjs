import Ember from 'ember';
import _ from 'lodash';

const computedSize = function (property) {
  return Ember.computed(property, 'size', function () {
    const specificSize = this.get(property);
    if (_.isNumber(specificSize)) {
      return specificSize;
    } else {
      return this.get('size');
    }
  });
};

export default Ember.Component.extend({
  tagName: 'div',
  classNameBindings: ['builtSize'],

  xsSize: computedSize('xs'),
  smSize: computedSize('sm'),
  mdSize: computedSize('md'),
  lgSize: computedSize('lg'),

  builtSize: Ember.computed('xsSize', 'smSize', 'mdSize', 'lgSize', 'cssClass', function () {
    const cssClass = this.getWithDefault('cssClass', '');
    return [
      `col-xs-${this.get('xsSize')}`,
      `col-sm-${this.get('smSize')}`,
      `col-md-${this.get('mdSize')}`,
      `col-lg-${this.get('lgSize')}`,
      `${cssClass}`
    ].join(' ');
  }),
});
