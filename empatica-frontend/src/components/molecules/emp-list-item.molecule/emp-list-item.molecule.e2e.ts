import { newE2EPage } from '@stencil/core/testing';
describe('emp-list-item-molecule', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<emp-list-item-molecule></emp-list-item-molecule>');
    const element = await page.find('emp-list-item-molecule');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();
  });
});
