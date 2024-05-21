import { module, test } from 'qunit';
import { setupTest } from 'ember-fake-chat/tests/helpers';

module('Unit | Route | songs', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:songs');
    assert.ok(route);
  });
});
