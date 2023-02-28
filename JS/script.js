// -- Variables
const // Selecting body
  body = document.querySelector("body"),
  // Selecting email input
  emailInp = document.querySelector("#email"),
  // Selecting subject input
  subjectInp = document.querySelector("#subject"),
  // Selecting message input
  messageInp = document.querySelector("#message"),
  // Selecting send button
  sendBtn = document.querySelector("#sendBtn"),
  // Selecting reset button
  resetBtn = document.querySelector("#resetBtn"),
  // Selecting email sent box
  sentMail = document.querySelector("#email-sent"),
  // Selecting loader in html
  loader = document.querySelector("#loaders"),
  // Selecting form
  form = document.querySelector("form");

// -- Events
// Add event to dom for disable send button
document.addEventListener("DOMContentLoaded", offSendBtn);
// Add event for when clicked at send button
sendBtn.addEventListener("click", () => {
  sendBtn.innerHTML = `sent <i class="material-icons right">send</i>`;
  // Remove hide class for showing loader spinner
  loader.classList.remove("hide");
  // Set time for loader spinner
  setTimeout(emailSent, 3000);
});
// Add event for when clicked at reset button
resetBtn.addEventListener("click", () => {
  sendBtn.innerHTML = `send <i class="material-icons right">send</i>`;
  // Disabling send button
  sendBtn.disabled = true;
});
// Add event for emailInput blur
emailInp.addEventListener("blur", validateInput);
// Add event for subjectInput blur
subjectInp.addEventListener("blur", validateInput);
// Add event for messageInput blur
messageInp.addEventListener("blur", validateInput);

// -- Functions
// Function for disable send button
function offSendBtn() {
  // Disabling send button
  sendBtn.disabled = true;
}

// Function for when input blur
function validateInput() {
  if (this.value.length > 0) {
    if (this.type == "email") {
      if (this.value.includes("@")) {
        this.classList.add("valid");
        this.classList.remove("invalid");
      } else {
        this.classList.add("invalid");
      }
    } else {
      this.classList.add("valid");
    }
  } else this.classList.add("invalid");

  onSendBtn();
}

// Function for on send button
function onSendBtn() {
  if (
    emailInp.classList.contains("valid") &&
    subjectInp.classList.contains("valid") &&
    messageInp.classList.contains("valid")
  ) {
    // Add class for change border color
    sendBtn.classList.add("valid");
    // Activate send button
    sendBtn.disabled = false;
  } else {
    // Disabling send button
    sendBtn.disabled = true;
  }
}

// Function for 'Email sent' Alarm
function emailSent() {
  // Showing emailSent box
  form.classList.add("hide");
  // Picking up email box input
  sentMail.classList.remove("hide");
}
