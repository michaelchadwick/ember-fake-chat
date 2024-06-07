import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'remember-stuff/config/environment';

export default class ApplicationRoute extends Route {
  @tracked env = ENV.environment;
  @tracked ghUsername = ENV.APP.GITHUB_USERNAME;
  @service headData;
  @service store;
  @service intl;

  setupController(controller) {
    controller.set('env', ENV.environment);
  }

  beforeModel() {
    this.intl.setLocale(['en-us']);
  }

  model() {
    return this.store.findRecord('gh-user', this.ghUsername);
  }

  afterModel() {
    this.headData.title = 'RemEmberStuff';
    this.headData.ogTitle = 'RemEmberStuff Tutorial';
    this.headData.routeTitle = null;

    if (this.env === 'production') {
      this.headData.faviconType = 'prod';
      this.headData.envTitle = 'prod';
    } else {
      this.headData.faviconType = 'dev';
      this.headData.envTitle = 'dev';
    }

    switch (this.env) {
      case 'development': {
        console.log('ENV: App is in development! Go nuts!');
        break;
      }
      case 'test': {
        console.log('ENV: App is in test! Hope everything passes.');
        break;
      }
      case 'production': {
        console.log('ENV: App is in production! Be careful.');
        break;
      }
      default: {
        console.log('ENV: App is in an unknown environment...');
        break;
      }
    }
  }
}
