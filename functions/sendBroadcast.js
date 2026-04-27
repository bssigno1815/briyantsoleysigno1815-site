const admin = require("firebase-admin");
const twilio = require("twilio");

admin.initializeApp();
const db = admin.firestore();

const client = twilio("ACCOUNT_SID", "AUTH_TOKEN");

async function sendBroadcast() {
  const broadcasts = await db.collection("broadcasts")
    .where("status", "==", "pending")
    .get();

  const contacts = await db.collection("contacts")
    .where("active", "==", true)
    .get();

  broadcasts.forEach(async (bDoc) => {
    const data = bDoc.data();

    contacts.forEach(async (cDoc) => {
      const contact = cDoc.data();

      await client.messages.create({
        from: "whatsapp:+14155238886",
        to: `whatsapp:${contact.phone}`,
        body: data.message
      });
    });

    await db.collection("broadcasts").doc(bDoc.id).update({
      status: "sent"
    });
  });
}

sendBroadcast();
