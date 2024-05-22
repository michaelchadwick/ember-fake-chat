import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-fake-chat/tests/helpers';
import ENV from 'ember-fake-chat/config/environment';

module('Acceptance | fake chat', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Ember Fake Chat');

    assert.dom('nav .links a:first-of-type').hasText('About');
    await click('nav .links a:first-of-type');

    assert.strictEqual(currentURL(), '/about');
  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.strictEqual(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Ember Fake Chat');
    assert.dom('h2').hasText('About');
    assert
      .dom('p')
      .hasText('Ember Fake Chat is a web application built to learn about EmberJS Core Concepts.');

    await click('nav a h1');

    assert.strictEqual(currentURL(), '/');
  });

  test('visiting /links', async function (assert) {
    await visit('/links');

    assert.strictEqual(currentURL(), '/links');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Ember Fake Chat');
    assert.dom('h2').hasText('Related Links');
    assert.dom('ul li').exists();

    await click('nav a h1');

    assert.strictEqual(currentURL(), '/');
  });

  test('visiting /contact', async function (assert) {
    await visit('/contact');

    assert.strictEqual(currentURL(), '/contact');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Ember Fake Chat');
    assert.dom('h2').hasText('Contact');
    assert.dom('.contact-form form').exists();

    await click('nav a h1');

    assert.strictEqual(currentURL(), '/');
  });

  test('navigating using the nav-bar', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('Ember Fake Chat');
    assert.dom('nav a.menu-about').hasText('About');
    assert.dom('nav a.menu-music').hasText('Music');
    assert.dom('nav a.menu-links').hasText('Links');
    assert.dom('nav a.menu-contact').hasText('Contact');

    await click('nav a.menu-index');
    assert.strictEqual(currentURL(), '/');

    await click('nav a.menu-about');
    assert.strictEqual(currentURL(), '/about');

    await click('nav a.menu-music');
    assert.strictEqual(currentURL(), '/music');

    await click('nav a.menu-links');
    assert.strictEqual(currentURL(), '/links');

    await click('nav a.menu-contact');
    assert.strictEqual(currentURL(), '/contact');
  });

  test('navigating using the footer', async function (assert) {
    await visit('/');

    assert.dom('footer').exists();
    assert.dom('footer a.menu-author').hasText('Author');
    assert.dom('footer a.menu-source').hasText('Source');
    assert.dom('footer a.menu-tutorial').hasText('Docs');
    if (ENV.environment != 'production') {
      assert.dom('footer a.menu-tests').hasText('[Tests]');
      assert.dom('footer a.menu-prod').hasText('[Prod]');
    }
  });
});
