import { newE2EPage } from '@stencil/core/testing';
describe('orders-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<orders-page></orders-page>');
    const element = await page.find('orders-page');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();
  });
});
