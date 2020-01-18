import { newE2EPage } from '@stencil/core/testing';
describe('login-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<login-page></login-page>');
    const element = await page.find('login-page');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();
  });
});
