import { newE2EPage } from '@stencil/core/testing';
describe('emp-input-molecule', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<emp-input-molecule></emp-input-molecule>');
    const element = await page.find('emp-input-molecule');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();
  });
});
