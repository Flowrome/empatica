import { newE2EPage } from '@stencil/core/testing';
describe('emp-article-molecule', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<emp-article-molecule></emp-article-molecule>');
    const element = await page.find('emp-article-molecule');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();
  });
});
