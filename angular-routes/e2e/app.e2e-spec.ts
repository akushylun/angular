import { AngularRoutesPage } from './app.po';

describe('angular-routes App', () => {
  let page: AngularRoutesPage;

  beforeEach(() => {
    page = new AngularRoutesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
