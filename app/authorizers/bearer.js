import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize(sessionData, block) {
    console.log('bearer', headers);
    let headers = {
      'Authorization': 'Bearer ' + sessionData.token
    };
    block.call(null, headers);
  }
});
