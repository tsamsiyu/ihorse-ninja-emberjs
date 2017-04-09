import Ember from 'ember';
import _ from 'lodash';

export default function (text) {
  const matches = text.match(/\[([0-9a-zA-Z\_\-\.]+)\]/);
  if (matches) {
    const deps = matches.slice(1);
    return Ember.computed(...deps, function () {
      return _.trim(deps.reduce((prev, key) => {
        const replacer = Ember.get(this, key);
        if (typeof replacer === 'string') {
          return prev.replace(`[${key}]`, replacer);
        } else if (!replacer) {
          return prev.replace(`[${key}]`, '');
        } else {
          return prev;
        }
      }, String(text)).replace(/\s{2,}/, ' '));
    });
  } else {
    return text;
  }
}
