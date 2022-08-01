import type { NextApiRequest, NextApiResponse } from 'next'
import sendGrid from '@sendgrid/mail'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  sendGrid.setApiKey('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')
const msg = {
  to: 'stonksdevsite@gmail.com', // Change to your recipient
  from: 'splitsendmail@gmail.com', // Change to your verified sender
  subject: 'Novo pedido de contato!',
  text: `${req.body.nome} ${req.body.email} ${req.body.tel} ${req.body.text}`,
  html: `${req.body.nome} <br/> ${req.body.mail} <br/> ${req.body.tel} <br/> ${req.body.text}`,
}
sendGrid
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

  
  res.status(200).json({ status: 'ok' })
}