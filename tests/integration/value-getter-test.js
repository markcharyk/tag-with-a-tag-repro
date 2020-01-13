import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | value-getter', function(hooks) {
  setupRenderingTest(hooks);

  test('it gets with setTimeout()', async function(assert) {
    this.set('value', 'value');

    await render(hbs`<ValueGetter @delayType="setTimeout" @value={{this.value}}/>`);

    assert.equal(this.value, 'value');

    this.set('value', 'new value');
    await settled();

    assert.equal(this.value, 'new value');
  });

  test('it gets with timeout', async function(assert) {
    this.set('value', 'value');

    await render(hbs`<ValueGetter @delayType="timeout" @value={{this.value}}/>`);

    assert.equal(this.value, 'value');

    this.set('value', 'new value');
    await settled();

    assert.equal(this.value, 'new value');
  });

  test('it gets with later', async function(assert) {
    this.set('value', 'value');

    await render(hbs`<ValueGetter @delayType="later" @value={{this.value}}/>`);

    assert.equal(this.value, 'value');

    this.set('value', 'new value');
    await settled();

    assert.equal(this.value, 'new value');
  });
});
