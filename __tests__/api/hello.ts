import { testApiHandler } from 'next-test-api-route-handler';
// Import the handler under test from the pages/api directory
import type { PageConfig } from 'next';
import endpoint, { config } from '../../pages/api/hello';

// Respect the Next.js config object if it's exported
const handler: typeof endpoint & { config?: PageConfig } = endpoint;
handler.config = config;

describe('hello endpoint', () => {
  it('should do a thing', async () => {
    expect.hasAssertions();

    await testApiHandler({
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({ method: 'POST', body: 'data' });
        const data = await res.json();
        expect(data.name).toBe('John Doe');
      },
    });
  });
});
