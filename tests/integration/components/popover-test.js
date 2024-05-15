import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-fake-chat/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | popover', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Popover />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Popover>
        template block text
      </Popover>
    `);

    assert.dom().hasText('template block text');
  });
});
