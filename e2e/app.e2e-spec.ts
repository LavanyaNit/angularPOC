import { AngularPOCPage } from './app.po';

describe('angular-poc App', function() {
  let page: AngularPOCPage;

  beforeEach(() => {
    page = new AngularPOCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
