import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer"

const config = {
  "type": "service_account",
  "project_id": "dulcet-iterator-284013",
  "private_key_id": "3a6b69782579e922a0f93e0109a2daf00683b296",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDQ6ELAI1SogTwi\nY8H1fyP5YqAFiJsPgPDZyYUyJfMJ8IyeCpnZ5Kl40TxSBjO+kLsJJ/sFQrUBqJ7f\nK0zpI/VEMDeE2W0KIpX6qPGt5FD1BcqjnSP29i2rweUWVvwIjdBrGb6Fh3B783ZP\nJShsHgCBiBMETR4Kv4XIBh4FRLq1cVaqU6c63SF5mIoBSqhZwMkMq9PObCbSFFtv\nquSfqs3Ca/EvZnIAJU6oQNzJLTIqYcxsUDVf8UIfOB8N8r7yMfXAk2vM2CmyCT/Y\nV5mMXSLrB1gxdt/f245ukVj7/SnNXhtpNBWuIpQWzl8qOos9Nz6K2llYe/OPEowB\nYNSv9BFfAgMBAAECggEAPFAiHWjV40RUgTU95UvMrg5sVsymv+YhIy+MNftA3MjH\nQEWdP4xF5Wy7No811znf1ffmABHPQmhVXecZcGICSKqHDOLdGUT8+f5WsDavrN38\nMBqJLJ7Mdr8nDbkVUL7owlMPb2u37QFQUe9PaU+MI9mOa/p7xuyeii5B8pFyOjm1\n/7wvE3fZ3yVqdyi3fIeedNLjq7i6ozr5ElW7fM08a4QRFq/4ED3duG3ldIKT7eFp\n0pYasS8patjANSAn1hBaaD1AqW4iMj+9/zMoGEId8kdE78JuMtHiA42AlOEHDhNG\nId7xUxEuC9rgNV3ukKMBfN5YjBjnuKEbuIX8tFDjCQKBgQDw38UeFUFYRgEP+8EE\nNGV8vJwHVSlKbr3GjY4QzHr+/g4aXO6tjhIz0+uNwnVoMPGQIZhGpR4yUmSyTWHE\n/0+dWUJuPpw1MMLGAj9UQOlwSF5c7j/1OOzHCgO66UsKn/cFZN8ULfQDijqT54LB\nM5i5/nEjz5DKV+WV1N6Qnn/yRQKBgQDeBpmleEOQ7jhFjusPwn3vV7AbuUsARR4a\ngDL2/t15mXTfWW2fj2UcO4gBxz+fpYHvyyjBQ+lrJ3XupCzzNTgJn874FIx2mozQ\nk9mi+G3q8RAr44abyF02ZmnQwENd2L3L7M1u51dC3BgFb6KrfiiMbLL0h/A1yohT\nFsUrGfFBUwKBgCy2DLvhzChbjjTuUUy7gR8fT4MY7rovRjDF89nwauBMPkfsei1j\nEsPmEXJV5z843o4XflGWsr06iBCExqIvlhKqD+ew3YQOEgl5P1IfXnWGKWXsn5ig\nQWtM05ZtWY2WVd79c18mjIXfsbHkpmPAdRgJP+0ayVCV8jrWsZ18nllVAoGBAM2m\nMWSZ+4Nfk5GiKknjrUAm6YEUZMrwOkzzl8E+GqhKIn3KWIaljFLVNUnoYx8dbzhL\n5gj1PVw6JbsQKG5xSeFoO41/gwdMace8WqbgEve9p2vviDv9H5GG1NY9b2ianFop\nkbL65tGQCVPnrjXIWgiPmkZzL2SznwfPHHuqwNLvAoGBAL6hRWdc6FXdvAUfw3iU\naDtcmVqUS4UdTMIBM805oO3vu3AOHF3WEy4xH3jSty2K1CvOgOyds3c9jm5Dt2le\nNOLD2oiV1znnWUY7MU5FVpXHNRDCnf14Rch5mRrX7jzfdUuCErMv1AyfppGCwtLf\n+WmcRwYJAG/DPRuHlmhyxUxd\n-----END PRIVATE KEY-----\n",
  "client_email": "splitconfort@dulcet-iterator-284013.iam.gserviceaccount.com",
  "client_id": "113237160250235020261",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/splitconfort%40dulcet-iterator-284013.iam.gserviceaccount.com"
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let testAccount = await nodemailer.createTestAccount();

  console.log(req.body)

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    port: 465,
    auth: {
      user: 'splitconfort@gmail.com', 
      pass: 'maeprqammwnrdjqd', 
    },
  });

  let info = await transporter.sendMail({
    from: '"Site Splitconfort" <marketing.roadymetais@gmail.com>',
    to: "stonksdevsite@gmail.com",
    subject: "NOVO PEDIDO DE CONTATO",
    text: `${req.body.nome} ${req.body.tel} ${req.body.mail} ${req.body.text}`, 
    html: `${req.body.nome} <br/> ${req.body.tel} <br/> ${req.body.mail} <br/> ${req.body.text}`,
  });
 
  res.status(200).json({ status: 'ok' })
}