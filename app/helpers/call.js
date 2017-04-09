import Ember from "ember";

export default Ember.Helper.helper(function(params, hash = {}) {
  const func = params.shift();
  return func.call(hash.context || null, ...params);
});
