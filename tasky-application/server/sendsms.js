import twilio from 'twilio';


const accountSid = "ACb96e04f0633c30d3ac53b773cd6bce9e";
const authToken = "87d64e5f6fa6479549003e6f4c5423b5";
const client = new twilio(accountSid, authToken);

let smsbody={
    body:" concentrate",
    to:"+919394804040"
}
async function sendsms(smsbody) {
    try {
      let message= await  client.messages
            .create({
                body: smsbody.body,
                from: '+18176468564',
                to: smsbody.to
            })
            console.log(message.sid);
    } catch (error) {
        console.error(error)
    }
}
sendsms(smsbody);
