import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(sessionData, block) {
    let headers = {
      'Authorization': 'Bearer ' + sessionData.token
    };
    block.call(null, headers);
  }
});
