import * as sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export const sendEmail = async (recipient: string, url: string) => {
  const msg = {
    to: recipient,
    from: "test@mockbase.com",
    subject: "Confirm Email",
    text: `Click on this link to ${url} confirm your email`,
    html: `<html>
        <body>
          <p>Confirm your email - Mockbase</p>
          <a href="${url}">confirm email</a>
        </body>
      </html>`,
  };
  await sgMail.send(msg);
};
