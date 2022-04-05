const blobServiceClient = require('../connections/blobStorageConnection');
const args = process.argv.slice(2);

const containerName = args[0];

async function main() {
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const createContainerResponse = await containerClient.create();
    console.log(`Create container ${containerName} successfully`, createContainerResponse.requestId);
}
  
main();