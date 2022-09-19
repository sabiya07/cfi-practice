import nodemailer from "nodemailer";

async function sendEmail(){
    try {
        let transporter =nodemailer.createTransport({
            host: "mail.csmafia.com",
            port:465,
            secure: true,
            auth:{
                user:"cfi@csmafia.com",
                password:"codeforindiaFTW"
            }
        });
        let info=await transporter.sendMail({
        from:`cfi tasky solutions<cfi@csmafia.com>`,
        subject:`this is a test email`,
        to: "mohammedsabiya2@gmail.com",
        html:"<h1> iam sendind an email from nodemailer</h1>"
        })
        console.log(info.messageId)

    } catch (error) {
        console.error(error)
    }

}
sendEmail()