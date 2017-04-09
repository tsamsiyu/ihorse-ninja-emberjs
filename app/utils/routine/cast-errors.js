import DS from 'ember-data';

export default function castErrors(list) {
  const errors = DS.Errors.create();
  list.forEach((error) => {
    errors.add(error.id, error.message);
  });
  return errors;
}
