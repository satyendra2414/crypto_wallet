// Display the modal for sending crypto
function showSendModal() {
  const modal = createModal('Send Crypto', `
    <label for="recipient">Recipient Address:</label>
    <input type="text" id="recipient" placeholder="0x123..." />

    <label for="sendAmount">Amount (ETH):</label>
    <input type="number" id="sendAmount" placeholder="e.g. 0.5" />

    <button onclick="handleSend()">Confirm Send</button>
  `);
  document.body.appendChild(modal);
}

// Display the modal for receiving crypto
function showReceiveModal() {
  const myWalletAddress = "0x1234567890abcdef1234567890abcdef12345678"; // Example address
  const modal = createModal('Receive Crypto', `
    <p>Share this address to receive crypto:</p>
    <input type="text" value="${myWalletAddress}" id="receiveAddress" readonly />
    <button onclick="copyWalletAddress()">Copy Address</button>
  `);
  document.body.appendChild(modal);
}

// Helper to create a modal dialog
function createModal(title, content) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal">
      <h2>${title}</h2>
      <div class="modal-content">${content}</div>
      <button class="close-btn" onclick="closeModal()">Close</button>
    </div>
  `;
  return overlay;
}

// Handle sending crypto (mock implementation)
function handleSend() {
  const recipient = document.getElementById('recipient').value.trim();
  const amount = parseFloat(document.getElementById('sendAmount').value);

  if (!recipient || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid recipient and amount.");
    return;
  }

  alert(`Mock send: ${amount} ETH to ${recipient}`);
  closeModal();
}

// Copy wallet address to clipboard using modern API
function copyWalletAddress() {
  const input = document.getElementById("receiveAddress");
  navigator.clipboard.writeText(input.value)
    .then(() => alert("Address copied to clipboard!"))
    .catch(() => alert("Failed to copy address."));
}

// Close the modal dialog
function closeModal() {
  const modal = document.querySelector(".modal-overlay");
  if (modal) {
    modal.remove();
  }
}