import _ from 'lodash';
import humanize from 'iron-app/utils/string/humanize';

export function initialize() {
  _.mixin({
    humanize
  });
}

export default {
  name: 'lodash',
  initialize
};
