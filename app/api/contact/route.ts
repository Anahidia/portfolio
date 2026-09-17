import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Por favor, completa todos los campos." },
        { status: 400 }
      )
    }

    const emailUser = process.env.EMAIL_USER?.trim()
    const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, "")
    const emailTo = process.env.EMAIL_TO?.trim() || "anahimailendiaz@gmail.com"

    if (!emailUser || !emailPass) {
      console.error("Faltan variables de entorno EMAIL_USER o EMAIL_PASS")
      return NextResponse.json(
        { error: "Error de configuración del servidor de correo." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Anahí Díaz" <${emailUser}>`,
      to: emailTo,
      replyTo: email,
      subject: `📩 Nuevo mensaje en Portfolio de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #8b5cf6; margin-top: 0;">📩 Nuevo mensaje desde tu Portfolio</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email de contacto:</strong> <a href="mailto:${email}" style="color: #8b5cf6;">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p><strong>Mensaje:</strong></p>
          <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 6px; white-space: pre-line;">
            ${message}
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error enviando correo:", error)
    return NextResponse.json(
      { error: "No se pudo enviar el correo. Por favor intenta de nuevo más tarde." },
      { status: 500 }
    )
  }
}
