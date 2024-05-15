import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-fake-chat/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | blog-post', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<BlogPost />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <BlogPost>
        template block text
      </BlogPost>
    `);

    assert.dom().hasText('template block text');
  });
});
