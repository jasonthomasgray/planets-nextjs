This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Known Issues

* Images are inconsistent aspect ratios and this is not dealt with so they can be
  super squished like Saturn
* No tests in place for the fetch done on the index page
* Static rendering would be suitable for this page as the data should only be
  astronomically infrequently updated, so the fetch from the API is probably overkill

## Notes

* At this point I wouldn't extract any components as I have no use case for reuse
  and it will only needlessly complicate the application
* None of the UI has any logic so I think unit tests for UI are more likely to
  annoy development than help. (visual tests should probably be done in a storybook
  style setup if they are employed at all.)
