import { newE2EPage } from '@stencil/core/testing';
describe('emp-order-item-molecule', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<emp-order-item-molecule></emp-order-item-molecule>',
    );
    const element = await page.find('emp-order-item-molecule');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();
  });
});
