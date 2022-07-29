import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let testAccount = await nodemailer.createTestAccount();

  console.log(req.body)

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: 'splitconfort@gmail.com', 
      pass: 'ubqztmzeqvlbvaxx', 
    },
  });

  let info = await transporter.sendMail({
    from: '"Site Splitconfort" <marketing.roadymetais@gmail.com>',
    to: "splitconfort@gmail.com",
    subject: "NOVO PEDIDO DE CONTATO",
    text: `${req.body.nome} ${req.body.tel} ${req.body.mail} ${req.body.text}`, 
    html: `${req.body.nome} <br/> ${req.body.tel} <br/> ${req.body.mail} <br/> ${req.body.text}`,
  });
 
  res.status(200).json({ status: 'ok' })
}