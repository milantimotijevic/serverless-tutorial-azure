const queueServiceClient = require('../connections/queueConnection');
const args = process.argv.slice(2);

const queueName = args[0];

async function main() {
    const queueClient = queueServiceClient.getQueueClient(queueName);
    // Send a message into the queue using the sendMessage method.
    const buffer = Buffer.from('hi');
    const str = buffer.toString('base64');
    const sendMessageResponse = await queueClient.sendMessage(str);
    console.log(
      `Sent message successfully, service assigned message Id: ${sendMessageResponse.messageId}, service assigned request Id: ${sendMessageResponse.requestId}`
    );
  }
  
  main();