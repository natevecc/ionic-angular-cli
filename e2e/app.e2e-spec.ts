import { IonicAngularCliStarterPage } from './app.po'

describe('ionic-angular-cli-starter App', function() {
  let page: IonicAngularCliStarterPage

  beforeEach(() => {
    page = new IonicAngularCliStarterPage()
  })

  it('should display message saying Welcome to Ionic!', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('Welcome to Ionic!')
  })
})
