import CommonAuth from './common';
import config from 'ihorse-ninja/config/environment';

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
