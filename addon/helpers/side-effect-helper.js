import Helper from '@ember/component/helper';

export default class SideEffectHelper extends Helper {
  compute([ value = '', setWithDelay ]) {
    if (!setWithDelay) {
      return;
    }

    if (value === this.lastValue) {
      return;
    }
    this.lastValue = value;

    setWithDelay();
  }
}
