import Ember from 'ember';
import embedAlias from 'iron-app/utils/computed/embed-alias';
import withDefault from 'iron-app/utils/computed/with-default';
import interpolation from 'iron-app/utils/computed/interpolation';
import asOptions from 'iron-app/utils/computed/as-options';
import findBy from 'iron-app/utils/computed/find-by';
import emptyObject from 'iron-app/utils/computed/empty-object';
import guid from 'iron-app/utils/computed/guid';

export function initialize() {
  Ember.computed.embedAlias = embedAlias;
  Ember.computed.withDefault = withDefault;
  Ember.computed.interpolation = interpolation;
  Ember.computed.asOptions = asOptions;
  Ember.computed.findBy = findBy;
  Ember.computed.emptyObject = emptyObject;
  Ember.computed.guid = guid;
}

export default {
  name: 'computed',
  initialize
};
