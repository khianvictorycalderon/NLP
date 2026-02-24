
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

// ------------------ Initialization ---------------------------

function init() {

  const form = document.getElementById("form");
  const userInput = document.getElementById("user-input");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (userInput.value.trim() === "") {
      alert("Please provide an input!");
    }

    // Clears input value
    userInput.value = "";

  })
}

(() => {
  init();
})();