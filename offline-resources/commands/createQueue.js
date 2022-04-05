const queueServiceClient = require('../connections/queueConnection');
const args = process.argv.slice(2);

const queueName = args[0];

async function main() {
    const queueClient = queueServiceClient.getQueueClient(queueName);
    const createQueueResponse = await queueClient.create();
    console.log(
      `Created queue ${queueName} successfully, service assigned request Id: ${createQueueResponse.requestId}`
    );
}
  
main();