function getRandomMessage() {
  const messages = [
    { text: "Keep pushing forward!", author: "John Doe" },
    { text: "Believe in yourself.", author: "Jane Smith" },
    { text: "Every day is a new beginning.", author: "Michael Johnson" },
    { text: "Success is a journey, not a destination.", author: "Emily Davis" },
    { text: "Dream big and dare to fail.", author: "Robert Brown" },
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

// Example usage:
const randomMessage = getRandomMessage();
export default randomMessage;
