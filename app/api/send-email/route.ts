import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  logger: true,
  debug: true,
  auth: {
    user: process.env.email,
    pass: process.env.password
  },
  tls: {
    rejectUnauthorized: true
  }
})

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const body = await req.json()
    const { name, email, message } = body

    const mailOptions = {
      from: process.env.email,
      to: process.env.email,
      subject: 'New Message from Your Website',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    }

    try {
      await transporter.sendMail(mailOptions)
      return NextResponse.json({ message: 'Email sent successfully' })
    } catch (error) {
      console.error(error)
      return NextResponse.json({
        message: 'An error occurred while sending the email'
      })
    }
  } else {
    console.log('method not allowed')
    return NextResponse.json({ message: 'Method not allowed' })
  }
}
