import { newE2EPage } from '@stencil/core/testing';
describe('emp-button-molecule', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<emp-button-molecule></emp-button-molecule>');
    const element = await page.find('emp-button-molecule');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();
  });
});
