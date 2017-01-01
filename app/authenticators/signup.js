import CommonAuth from './common';
import config from 'auto-market/config/environment';

export default CommonAuth.extend({
  tokenEndpoint: config.apiBaseUrl + '/signup',
  getData(options) {
    return {
      User: {
        email: options.email,
        password: options.password,
        passwordRepeat: options.passwordConfirmation
      }
    }
  }
});
