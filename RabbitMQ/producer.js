import amqp from "amqplib";

const queueName = 'my_queue';
const totalMessages = 1000000;

async function produceMessages() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertQueue(queueName);

  for (let i = 0; i < totalMessages; i++) {
    const message = `Message ${i + 1}`;
    channel.sendToQueue(queueName, Buffer.from(message));
  }

  console.log(`Sent ${totalMessages} messages`);

  await channel.close();
  await connection.close();
}

produceMessages().catch(console.warn);

