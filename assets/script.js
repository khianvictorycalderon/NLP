let convo = [];
const API_PATH = "http://localhost:9000/nlp.js?t=" + (new Date()).getTime();

/*

  Example convo data:
  [
    "Hi there!",
    "Hello user",
    "Who are you?",
    and so on...., (alternating user, bot, user, and so on, the last index is the latest user input)
  ]

*/

// -------------- UI ------------------------------

function renderUserMessage(message) {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `
    <p class="bg-neutral-800 p-4 rounded-md">
      <span class="text-purple-600">User</span>: 
      ${message}
    </p>  
  `;
}

function renderBotMessage(message) {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `
    <p class="bg-neutral-800 p-4 rounded-md">
      <span class="text-amber-600">Bot</span>:
      ${message}
    </p> 
  `;
}
// -------------- Response Functions ------------------------------
async function generateResponse(convo) {
  const chatBox = document.getElementById("chat-box");
  try {
    // Fetch the JS file
    const response = await fetch(API_PATH);

    if (!response.ok) {
      throw new Error("Failed to load NLP API");
    }

    const scriptText = await response.text();

    // Execute the script globally
    new Function(scriptText)();

    // Now window.API should exist
    if (!window.API || !window.API.generateResponse) {
      throw new Error("API not available after loading script.");
    }

    const reply = window.API.generateResponse(convo);
    convo.push(reply);

    renderBotMessage(reply);
    chatBox.scrollTop = chatBox.scrollHeight;

  } catch (error) {
    console.error(error);
    renderBotMessage("Something went wrong.");
  }
}

// ------------------ Initialization ---------------------------

function init() {

  const form = document.getElementById("form");
  const userInput = document.getElementById("user-input");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    if (userInput.value.trim() === "") {
      alert("Please provide an input!");
      return;
    }

    userInput.disabled = true;
    renderUserMessage(userInput.value);

    convo.push(userInput.value);

    await generateResponse(convo);

    // Clears input value
    userInput.value = "";
    userInput.disabled = false;
    userInput.focus();

  })
}

(() => {
  init();
})();