import {rest} from 'msw'

export const handlers = [
  // Handles a POST /api/sign-up request
  rest.post<Record<string, unknown>>('/api/sign-up', (req, res, ctx) => {
    const body = req.body

    if (body.error) {
      return res(
        ctx.status(500),
        ctx.json({
          status: 'error',
          message: 'Invalid Subscription request.',
        }),
      )
    }

    return res(
      ctx.status(200),
      ctx.json({
        status: 'success',
        message: 'Thank you. You are now subscribed.',
      }),
    )
  }),
]
