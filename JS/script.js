// -- Varibales
const // Selecting body
  body = document.querySelector("body"),
  // Selecting email input
  emailInp = document.querySelector("#email"),
  // Selecting subject input
  subjectInp = document.querySelector("#subject"),
  // Selecting message input
  messageInp = document.querySelector("#message"),
  // Selecting send button
  sendBtn = document.querySelector("#sendBtn");

// -- Events
// Add event to dom for disable send button
document.addEventListener("DOMContentLoaded", addImt);
// Add event for emailInput blur
emailInp.addEventListener("blur", validateInput);
// Add event for subjectInput blur
subjectInp.addEventListener("blur", validateInput);
// Add event for messageInput blur
messageInp.addEventListener("blur", validateInput);

// -- Functions
// Function for disable send button
function addImt() {
  // disabling send button
  sendBtn.disabled = true;
}

// Function for when input blur
function validateInput() {
  if (this.value.length > 0) {
    if (this.type == "email") {
      if (this.value.includes("@")) {
        this.style.borderBottomColor = "#43cea2";
      } else {
        this.style.borderBottomColor = "red";
      }
    } else {
      this.style.borderBottomColor = "#43cea2";
    }
  } else this.style.borderColor = "red";
}
