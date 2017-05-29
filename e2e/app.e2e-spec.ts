import { Angular4RutasPage } from './app.po';

describe('angular4-rutas App', () => {
  let page: Angular4RutasPage;

  beforeEach(() => {
    page = new Angular4RutasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
