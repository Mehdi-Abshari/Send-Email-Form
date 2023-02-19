const body = document.querySelector("body"),
  emailInp = document.querySelector("#email"),
  subjectInp = document.querySelector("#subject"),
  messageInp = document.querySelector("#message"),
  sendBtn = document.querySelector("#sendBtn");

document.addEventListener("DOMContentLoaded", addImt);
emailInp.addEventListener('blur', changeBorderColor);
subjectInp.addEventListener('blur', changeBorderColor);
messageInp.addEventListener('blur', changeBorderColor);

function addImt () {
    sendBtn.disabled = true;
}

function changeBorderColor () {

}