import CommonAuth from './common';
import config from 'ihorse-ninja/config/environment';

export default CommonAuth.extend({
  tokenEndpoint: config.apiBaseUrl + '/signin',
  getData(options) {
    return {
      User: {
        email: options.email,
        password: options.password
      }
    }
  }
});
