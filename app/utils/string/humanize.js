import _ from 'lodash';

export default function (str) {
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
