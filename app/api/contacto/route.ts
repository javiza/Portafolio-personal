import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { nombre, email, mensaje } = await req.json();

    // Transporter usando Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jonathanbust@gmail.com",
        pass: process.env.GMAIL_PASS, // NO pongas tu clave aquí. Usaremos variable.
      },
    });

    await transporter.sendMail({
      from: email,
      to: "jonathanbust@gmail.com",
      subject: `Nuevo mensaje de ${nombre}`,
      text: mensaje,
      html: `
        <h3>Nuevo mensaje desde tu portafolio</h3>
        <p><strong>De:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("Error enviando correo:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
