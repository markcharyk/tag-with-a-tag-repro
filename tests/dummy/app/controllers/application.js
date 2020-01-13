import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.set('value', 'some text');
    this.set('valueCounter', 1);
  },

  passedValue: computed('value', 'valueCounter', function() {
    return `${this.value} ${this.valueCounter}`;
  }),

  actions: {
    setValue() {
      this.set('valueCounter', this.valueCounter + 1);
    }
  }
});
