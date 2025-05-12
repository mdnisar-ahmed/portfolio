"use server"

import nodemailer from "nodemailer"

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // You can replace this with your actual SMTP configuration
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: "your_username",
      pass: "your_password",
    },
  })

  const mailOptions = {
    from: email, // Use the sender's email
    to: "your_email@example.com", // Replace with your email address
    subject: `New contact form submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
    html: `
      <h1>New contact form submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false }
  }
}
