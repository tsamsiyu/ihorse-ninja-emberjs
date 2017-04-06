import Ember from 'ember';

export default Ember.Mixin.create({
  or(props) {
    return props.find((prop) => {
      return Boolean(this.get(prop));
    });
  }
});
