const queueServiceClient = require('../connections/queueConnection');

async function main() {
    let iter1 = queueServiceClient.listQueues();
    let i = 1;
    for await (const item of iter1) {
      console.log(`Queue${i}: ${item.name}`);
      i++;
    }
}

main();