import Ember from 'ember';
import config from 'iron-app/config/environment';
import _ from 'lodash';

export default Ember.Service.extend({
  send(url, options = {}) {
    options.url = url;
    options = this.handleOptions(options);
    return Ember.$.ajax(options);
  },
  get(url, options = {}) {
    options.type = 'GET';
    return this.send(url, options);
  },
  post(url, options = {}) {
    options.type = 'POST';
    return this.send(url, options);
  },

  getBaseUrl() {
    const api = config.api;
    return _.trimEnd(`${api.domain}/${api.namespace}`, '/');
  },
  buildUrl(path) {
    const base = this.getBaseUrl();
    path = _.trimStart(path, '/');
    return `${base}/${path}`;
  },
  handleOptions(options) {
    options.url = this.buildUrl(options.url);
    options.type = options.type || 'GET';
    if (options.data) {
      options.data = JSON.stringify(options.data);
    }
    options.contentType = 'application/json;charset=utf-8';
    options.dataType = 'json';
    return options;
  }
});
