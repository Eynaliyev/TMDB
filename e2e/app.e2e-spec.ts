import { ViabillChallengePage } from './app.po';

describe('viabill-challenge App', () => {
  let page: ViabillChallengePage;

  beforeEach(() => {
    page = new ViabillChallengePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
