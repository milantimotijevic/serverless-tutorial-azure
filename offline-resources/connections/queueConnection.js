const { QueueServiceClient } = require('@azure/storage-queue');

const connStr = 'DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;QueueEndpoint=http://host.docker.internal:10001/devstoreaccount1;';
const queueServiceClient = QueueServiceClient.fromConnectionString(connStr);

module.exports = queueServiceClient;