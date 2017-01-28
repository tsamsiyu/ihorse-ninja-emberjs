import CommonAuth from './common';
import _ from 'lodash';

export default CommonAuth.extend({
  tokenEndpoint: 'sign-up',
  getData(data) {
    return _.pick(data, ['email', 'password', 'passwordRepeat']);
  }
});
