import { AngularGoogleMapsPage } from './app.po';

describe('angular-google-maps App', () => {
  let page: AngularGoogleMapsPage;

  beforeEach(() => {
    page = new AngularGoogleMapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
