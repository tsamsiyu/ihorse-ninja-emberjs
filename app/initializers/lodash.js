import _ from 'lodash';

function humanize(str) {
  if (typeof str === 'string') {
    return _.chain(str)
      .trim()
      .snakeCase()
      .capitalize()
      .value()
      .replace(/_id$/, '')
      .replace(/_/g, ' ');
  }
  return '';
}

export function initialize() {
  _.mixin({
    'humanize': humanize
  });
}

export default {
  name: 'lodash',
  initialize
};
