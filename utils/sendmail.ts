import nodemailer from 'nodemailer'

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    port: 465,
    auth: {
      user: 'splitconfort@gmail.com', 
      pass: 'maeprqammwnrdjqd', 
    },
  });

const sendMail = async(req:any) =>{

    
      let info = await transporter.sendMail({
        from: '"Site Splitconfort" <marketing.roadymetais@gmail.com>',
        to: "stonksdevsite@gmail.com",
        subject: "NOVO PEDIDO DE CONTATO",
        text: `${req.body.nome} ${req.body.tel} ${req.body.mail} ${req.body.text}`, 
        html: `${req.body.nome} <br/> ${req.body.tel} <br/> ${req.body.mail} <br/> ${req.body.text}`,
      });
}

export default sendMail