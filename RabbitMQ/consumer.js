import amqp from 'amqplib';

const queueName = 'my_queue';

async function consumeMessages() {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    await channel.assertQueue(queueName);

    console.log('Waiting for messages. To exit press CTRL+C');

    channel.consume(queueName, (msg) => {
        if (msg !== null) {
            console.log(`Received message: ${msg.content.toString()}`);
            channel.ack(msg);
        }
    });
}

consumeMessages().catch(console.warn);
