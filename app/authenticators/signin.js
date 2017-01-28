import CommonAuth from './common';
import _ from 'lodash';

export default CommonAuth.extend({
  tokenEndpoint: 'sign-in',
  getData(data) {
    return _.pick(data, ['email', 'password']);
  }
});
