import { newE2EPage } from '@stencil/core/testing';
describe('emp-spinner-molecule', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<emp-spinner-molecule></emp-spinner-molecule>');
    const element = await page.find('emp-spinner-molecule');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();
  });
});
