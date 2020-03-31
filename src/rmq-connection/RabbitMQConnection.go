package rmq_connection

import (
	"fmt"
	"external-packages/github.com/streadway/amqp"
)

func NewConnection() *amqp.Connection {
	conn, err := amqp.Dial("amqp://guest:guest@localhost:5672/")

	if err != nil {
		fmt.Println("An error occurred while trying to connect to RMQ")
		panic(err)
	}

	return conn
}

func NewSender(connection amqp.Connection) *amqp.Channel {
	channel, err := connection.Channel()

	if err != nil {
		fmt.Println("An error occurred while trying to open a sender channel to RMQ")
		panic(err)
	}

	return channel
}

func NewReceiver(connection amqp.Connection, queueName string, exchangeName string, routingKey string) <-chan amqp.Delivery {
	channel, err := connection.Channel()

	if err != nil {
		fmt.Println("An error occurred while trying to open a receiver channel to RMQ")
		panic(err)
	}

	err = channel.QueueBind(
		queueName,
		routingKey,
		exchangeName,
		false,
		nil)

	if err != nil {
		fmt.Println("An error occurred while trying to declare a queue for receiver channel")
		panic(err)
	}

	receiverChannel, err := channel.Consume(
		queueName,
		"",
		true,
		false,
		false,
		false,
		nil,
	)

	if err != nil {
		fmt.Println("An error occurred while trying to consume a queue")
		panic(err)
	}

	return receiverChannel
}

