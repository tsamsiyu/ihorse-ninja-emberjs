import Ember from 'ember';

export default function (text) {
  const matches = text.match(/\[([0-9a-zA-Z\_\-\.]+)\]/g);
  if (matches) {
    const deps = matches.slice(1);
    return Ember.computed(...deps, function () {
      return deps.reduce((prev, key) => {
        const replacer = Ember.get(this, key);
        if (typeof replacer === 'string') {
          return prev.replace(`[${key}]`, replacer);
        } else {
          return prev;
        }
      }, String(text));
    });
  } else {
    return text;
  }
}
