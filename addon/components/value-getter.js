import Component from '@glimmer/component';
import { action } from '@ember/object';
import { later } from '@ember/runloop'
import { timeout } from 'ember-concurrency';

export default class ValueGetter extends Component {
  @action
  getValueWithSetTimeout() {
    setTimeout(this.logValue.bind(this), 1);
  }

  @action
  getValueWithTimeout() {
    timeout(1).then(this.logValue.bind(this));
  }

  @action
  getValueWithLater() {
    later(this, this.logValue, 1);
  }

  logValue() {
    // Access this.args.value
    console.log(this.args.value); // eslint-disable-line no-console
  }
}
