const MailSlurp = require('mailslurp-client').default;
describe('inbox method usage', () => {
  let config;
  beforeAll(() => {
    // provide a mailslurp API KEY
    const apiKey = process.env.API_KEY;
    expect(apiKey).toBeTruthy();
    // create config for clients and main class
    config = { apiKey };
  });
  /**
   * Create an inbox. An inbox is basically an email address. It also has an ID
   */
  it('can create inboxes', async () => {
    const mailslurp = new MailSlurp(config);
    const inbox = await mailslurp.createInbox();
    expect(inbox.id).toBeTruthy();
    expect(inbox.emailAddress).toContain('@mailslurp.com');
  });
});