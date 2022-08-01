import type { NextApiRequest, NextApiResponse } from 'next'
import sendGrid from '@sendgrid/mail'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  sendGrid.setApiKey(process.env.SENDGRIDKEY)
const msg = {
  to: 'stonksdevsite@gmail.com', // Change to your recipient
  from: 'splitsendmail@gmail.com', // Change to your verified sender
  subject: 'Novo pedido de contato!',
  text: `${req.body.nome} ${req.body.email} ${req.body.tel} ${req.body.text}`,
  html: `${req.body.nome} <br/> ${req.body.mail} <br/> ${req.body.tel} <br/> ${req.body.text}`,
}
await sendGrid
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

  
  res.status(200).json({ status: 'ok' })
}