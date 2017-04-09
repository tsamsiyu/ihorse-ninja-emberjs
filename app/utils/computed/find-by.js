import Ember from 'ember';

/**
 * Example:
 * ```
 * countries: [
 *  {name: 'USA', id: 1},
 *  {name: 'Canada', id: 2},
 *  {name: 'Germany', id: 3},
 * ],
 * myCountryId: 2,
 * myCountry: computed.findBy('countries', {'id': 'myCountryId'})
 * ```
 *
 * @param listProperty
 * @param conditions
 * @param strict
 */
export default function (listProperty, conditions, strict = true) {
  const deps = [listProperty];
  const listItemsPropertiesKeys = Object.keys(conditions);
  listItemsPropertiesKeys.forEach((listItemPropertyKey) => {
    const valueProperty = Ember.get(conditions, listItemPropertyKey);
    deps.push(`listProperty.@each.${listItemPropertyKey}`);
    deps.push(valueProperty);
  });
  return Ember.computed(...deps, function () {
    return this.get(listProperty).find((item) => {
      return listItemsPropertiesKeys.any((listItemPropertyKey) => {
        const valueProperty = Ember.get(conditions, listItemPropertyKey);
        const itemValue = Ember.get(item, listItemPropertyKey);
        const value = Ember.get(this, valueProperty);
        return strict ? (itemValue === value) : (itemValue == value);
      });
    });
  });
}
