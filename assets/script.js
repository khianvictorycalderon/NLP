
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

// -------------- Response Logic ------------------------------
(() => {
  renderUserMessage("Hello");
  renderBotMessage("Hi");
})();