import { RestaurantoPage } from './app.po';

describe('restauranto App', () => {
  let page: RestaurantoPage;

  beforeEach(() => {
    page = new RestaurantoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
