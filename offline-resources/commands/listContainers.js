const blobServiceClient = require('../connections/blobStorageConnection');
const args = process.argv.slice(2);

async function main() {
    let i = 1;
    let containers = blobServiceClient.listContainers();
    for await (const container of containers) {
      console.log(`Container ${i++}: ${container.name}`);
    }
}
  
main();