import { testApiHandler } from 'next-test-api-route-handler';
// Import the handler under test from the pages/api directory
import type { PageConfig } from 'next';
import endpoint, { config } from '../../pages/api/planets';

// Respect the Next.js config object if it's exported
const handler: typeof endpoint & { config?: PageConfig } = endpoint;
handler.config = config;

describe('planets endpoint', () => {
  it('should return an array', async () => {
    expect.hasAssertions();

    await testApiHandler({
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({ method: 'GET' });
        const { data } = await res.json();
        expect(data).toBeInstanceOf(Array);
      },
    });
  });

  it('should have correct fields', async () => {
    expect.hasAssertions();

    await testApiHandler({
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({ method: 'GET' });
        const { data } = await res.json();
        const element = data[0];
        expect(typeof element.name).toBe('string');
        expect(typeof element.picture).toBe('string');
        expect(typeof element.age).toBe('number');
        expect(typeof element.solarMass).toBe('number');
      },
    });
  });
});
