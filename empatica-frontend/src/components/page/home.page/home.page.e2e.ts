import { newE2EPage } from '@stencil/core/testing';
describe('home-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<home-page></home-page>');
    const element = await page.find('home-page');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();
  });
});
