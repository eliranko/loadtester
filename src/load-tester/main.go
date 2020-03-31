package main

import (
	"external-packages/github.com/streadway/amqp"
	"fmt"
)

func main() {
}

func sendMessage(msg string, sender *amqp.Channel, queueName string, exchangeName string, routingKey string) {
	err := sender.ExchangeDeclare(
		exchangeName,
		"direct",
		true,
		false,
		false,
		false,
		nil)

	err = sender.QueueBind(
		queueName,
		routingKey,
		exchangeName,
		false,
		nil)

	if err != nil {
		fmt.Println("An error occurred while trying to bind a queue for sender channel")
		panic(err)
	}

	fmt.Printf("Sending the following message on queue '%s': %s\n",
		queueName, msg)
	err = sender.Publish(
		exchangeName,
		routingKey,
		false,
		false,
		amqp.Publishing{
			ContentType: "text/plain",
			Body:        []byte(msg),
		})

	if err != nil {
		fmt.Printf("Failed to send the message on queue '%s'\n", queueName)
		println(err.Error())
	}
}

func startReceiving(receiver <-chan amqp.Delivery) {
	for {
		select {
		case msg := <-receiver:
			fmt.Printf("Received new message: %s\n", string(msg.Body))
		}
	}
}
