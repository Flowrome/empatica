import { newE2EPage } from '@stencil/core/testing';
describe('emp-footer-molecule', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<emp-footer-molecule></emp-footer-molecule>');
    const element = await page.find('emp-footer-molecule');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();
  });
});
