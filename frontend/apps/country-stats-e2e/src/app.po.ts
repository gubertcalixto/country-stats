import { CsBase } from 'apps/country-stats/src/app/shared/cs-base.component';
import { browser, by, element } from 'protractor';

export class AppPage extends CsBase {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
