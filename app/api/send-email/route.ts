import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const emailEnv = process.env.email
const passEnv = process.env.password

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: emailEnv,
    pass: passEnv
  }
})

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const body = await req.json()
    const { name, email, message } = body

    const mailOptions = {
      from: emailEnv,
      to: emailEnv,
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
