import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "akuyaekorot@gmail.com",
      pass: "xyokyylgdewlvkow",
    },
  });

  // to: "akuyaekorot@gmail.com, akuya@mapato.co, wainaina@mapato.co, wainainakasyoka@gmail.com, faith.murungu@mapato.co, murunguf07@gmail.com",
  const mailOptions = {
    from: email,
    to: "akuyaekorot@gmail.com",
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
          </div>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info);
  } catch (error) {
    console.log(error);
  }
}
