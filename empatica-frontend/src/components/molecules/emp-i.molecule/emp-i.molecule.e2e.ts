import { newE2EPage } from '@stencil/core/testing';
describe('emp-i-molecule', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<emp-i-molecule></emp-i-molecule>');
    const element = await page.find('emp-i-molecule');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();
  });
});
