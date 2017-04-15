import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNameBindings: ['builtSize'],

  builtSize: Ember.computed('size', 'cssClass', function () {
    const size = this.get('size');
    const cssClass = this.getWithDefault('cssClass', '');
    return `col-xs-${size} col-sm-${size} col-md-${size} col-lg-${size} ${cssClass}`;
  }),
});
