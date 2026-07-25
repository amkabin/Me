import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function sendContactNotification({
  name,
  email,
  subject,
  body,
}: {
  name: string
  email: string
  subject?: string | null
  body: string
}) {
  const adminEmail = process.env.ADMIN_EMAIL!
  await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: adminEmail,
    subject: `Portfolio Contact: ${subject || "New Message"} from ${name}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || "N/A"}</p>
      <hr />
      <p>${body.replace(/\n/g, "<br>")}</p>
    `,
  })
}
