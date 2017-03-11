import { ObservablePage } from './app.po';

describe('observable App', function() {
  let page: ObservablePage;

  beforeEach(() => {
    page = new ObservablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
