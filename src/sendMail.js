import mailgun from 'mailgun-js'

const DOMAIN = "sandbox1ae126a2858e4edf80c91d62063cb12e.mailgun.org";
const mg = mailgun({apiKey: "dd3d996e2581955384c513702b28788d-b6190e87-e2a843c6", domain: DOMAIN});
export async function sendMail(subject, text) {
    const data = {
        from: "Mailgun Sandbox <postmaster@sandbox1ae126a2858e4edf80c91d62063cb12e.mailgun.org>",
        to: "bikiniweekend@hotmail.com",
        subject: subject,
        text: text
    };

    mg.messages().send(data, function (error, body) {
	    console.log(body);
    });
}
