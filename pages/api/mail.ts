import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer"
import {google} from 'googleapis'

const config = {
  clientId: "6920707860-s3itafgnplgcrqsppe9d09c8200ha6vt.apps.googleusercontent.com",
  clientSecret: "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",
  redirectUri: "https://developers.google.com/oauthplayground" ,
  refreshToken: "1//04tWiw4hrKPsBCgYIARAAGAQSNwF-L9IrwWc7d91tSrrmfwxm732PAlFUZ60-GMKR5crC_L6OsJeXE6MwS76h28jMytvPiNlC7Ao"
}

const oAuthClient = new google.auth.OAuth2(config.clientId, config.clientSecret, config.redirectUri)
oAuthClient.setCredentials({refresh_token: config.refreshToken})

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const accessToken = await oAuthClient.getAccessToken()

  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'splitsendmail@gmail.com', // generated ethereal user
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      refreshToken: config.refreshToken,
      accessToken: accessToken
    }})

  transporter.sendMail({
    from: '"Site Splitconfort" <splitsendmail@gmail.com>',
    to: "stonksdevsite@gmail.com",
    subject: "NOVO PEDIDO DE CONTATO",
    text: `${req.body.nome} ${req.body.tel} ${req.body.mail} ${req.body.text}`, 
    html: `${req.body.nome} <br/> ${req.body.tel} <br/> ${req.body.mail} <br/> ${req.body.text}`,
  });
 
  res.status(200).json({ status: 'ok' })
}