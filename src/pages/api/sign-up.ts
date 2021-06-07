import {NextApiRequest, NextApiResponse} from 'next'

export default function (req: NextApiRequest, res: NextApiResponse): void {
  const body = req.body

  console.log(body)

  if (body.error) {
    res.status(500).json({
      status: 'error',
      message: 'Invalid Subscription request.',
    })

    return
  }

  res.status(200).json({
    status: 'success',
    message: 'Thank you. You are now subscribed.',
  })
}
