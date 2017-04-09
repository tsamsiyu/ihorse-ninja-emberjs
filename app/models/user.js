import DS from 'ember-data';

const {Model, attr} = DS;

export default Model.extend({
  authToken:  attr('string'),
  email:      attr('string'),
  createdAt:  attr('string'),
});
