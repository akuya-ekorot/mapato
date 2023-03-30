import nodemailer from "nodemailer"

const handler = async (req, res) => {
  const { name, email, message, phone } = req.body
  const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "akuyaekorot@gmail.com",
      pass: "xyokyylgdewlvkow"
    }
  });

  const mailOptions = {
    from: email,
    to: "akuyaekorot@gmail.com, akuya@mapato.co, wainaina@mapato.co, wainainakasyoka@gmail.com, faith.murungu@mapato.co, murunguf07@gmail.com",
    subject: `MAPATO: Form Submission from ${name}`,
    html: `<div>
            <h2>Name</h2>
            <p>${name}</p>
            <h2>Email</h2>
            <p>${email}</p>
            <h2>Phone Number</h2>
            <p>${phone}</p>
            <h2>Message</h2>
            <p>${message}</p>
          </div>`
  }

  try {
    let info = await mailTransport.sendMail(mailOptions)
    res.status(200).json({status: "ok"})
  } catch (error) {
    console.log(error)
  }
  
}

export default handler;
