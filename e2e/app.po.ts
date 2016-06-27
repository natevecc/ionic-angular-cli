export class IonicAngularCliStarterPage {
  navigateTo() {
    return browser.get('/')
  }

  getParagraphText() {
    return element(by.css('ion-page h2')).getText()
  }
}
