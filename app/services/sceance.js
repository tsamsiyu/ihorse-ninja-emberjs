import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  _data: {},

  receive(name) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      const dataKey = `_data.${name}`;
      const data = this.get(dataKey);
      if (data === undefined) {
        this.supplyData(name).then((resolvedData) => {
          this.set(dataKey, resolvedData);
          resolve(resolvedData);
        }).catch((err) => {
          reject(err);
        });
      } else {
        resolve(data);
      }
    });
  },
  supplyData(name) {
    return this.get('store').findAll(name);
  }
});
