import { newE2EPage } from '@stencil/core/testing';
describe('emp-profile-molecule', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<emp-profile-molecule></emp-profile-molecule>');
    const element = await page.find('emp-profile-molecule');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();
  });
});
