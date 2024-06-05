import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'remember-stuff/config/environment';

export default class AboutRoute extends Route {
  @service store;
  @service headData;
  @tracked isLoading = true;

  async model() {
    const repo = 'ember-remember-stuff';
    const url = `${ENV.APP.GITHUB_API_URL}/repos/${ENV.APP.GITHUB_USERNAME}/${repo}/commits?sort=updated&per_page=5`;

    const response = await fetch(url);
    const commits = await response.json();

    console.log(
      'commits',
      commits.map((c) => c.commit),
    );

    return commits;
  }

  afterModel() {
    this.headData.routeTitle = 'About';
  }
}
