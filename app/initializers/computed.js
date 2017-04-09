import Ember from 'ember';
import embedAlias from 'iron-app/utils/computed/embed-alias';
import withDefault from 'iron-app/utils/computed/with-default';
import interpolation from 'iron-app/utils/computed/interpolation';

export function initialize() {
  Ember.computed.embedAlias = embedAlias;
  Ember.computed.withDefault = withDefault;
  Ember.computed.interpolation = interpolation;
}

export default {
  name: 'computed',
  initialize
};
