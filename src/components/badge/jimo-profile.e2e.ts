import { newE2EPage } from '@stencil/core/testing';

describe('jimo-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jimo-badge></jimo-badge>');

    const element = await page.find('jimo-badge');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/profile/joseph' });

    const badgeElement = await page.find('app-root >>> jimo-badge');
    const element = badgeElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is Joseph.');
  });

  // it('includes a div with the class "jimo-badge"', async () => {
  //   const page = await newE2EPage({ url: '/profile/joseph' });

  // I would like to use a selector like this above, but it does not seem to work
  //   const element = await page.find('app-root >>> jimo-badge >>> div');
  //   expect(element).toHaveClass('jimo-badge');
  // });
});
