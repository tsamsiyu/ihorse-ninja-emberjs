import Ember from 'ember';
import embedAlias from 'iron-app/utils/computed/embed-alias';
import withDefault from 'iron-app/utils/computed/with-default';
import interpolation from 'iron-app/utils/computed/interpolation';
import asOptions from 'iron-app/utils/computed/as-options';
import findBy from 'iron-app/utils/computed/find-by';

export function initialize() {
  Ember.computed.embedAlias = embedAlias;
  Ember.computed.withDefault = withDefault;
  Ember.computed.interpolation = interpolation;
  Ember.computed.asOptions = asOptions;
  Ember.computed.findBy = findBy;
}

export default {
  name: 'computed',
  initialize
};
