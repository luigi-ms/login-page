const email = document.querySelector("#emailField"),
      passwd = document.querySelector("#passwdField"),
      loginBtn = document.querySelector("#loginBtn"),
      togglePasswd = document.querySelector("#toggleVisible"),
      visibleIcon = document.querySelector("#visibleIcon");

const regexEmail = new RegExp('[a-z-0-9](\@)[a-z](\.)[a-z]', 'i');

function isEmailBadFormatted(){
  const text = email.value;
  return text.length === 0 || (!regexEmail.test(text));
}

function isPassBadFormatted(){
  const text = passwd.value;
  return text.length >= 0 && text.length < 8;
}

email.addEventListener("focusout", e => {
  if(isEmailBadFormatted()){
    e.target.classList.add("input-error");
    
    document.querySelector("#emailError")
      .innerText = "Formato incorreto de email";
    document.querySelector("#emailError")
      .style
      .display = "block";
  }else{
    e.target.classList = [];
    document.querySelector("#emailError")
      .style
      .display = "none";
  }
});

passwd.addEventListener("focusout", e => {
  if(isPassBadFormatted()){
    e.target.classList.add("input-error");
    
    document.querySelector("#passError")
      .innerText = "Senha muito curta";
    document.querySelector("#passError")
      .style
      .display = "block";
  }else{
    e.target.classList = [];
    document.querySelector("#passError")
      .style
      .display = "none";
  }
});

togglePasswd.addEventListener("click", e => {
  if(e.target.value === "off"){
    visibleIcon.innerText = "visibility";
    passwd.setAttribute("type", "text");
    e.target.value = "on";
  }else{
    visibleIcon.innerText = "visibility_off";
    passwd.setAttribute("type", "password");
    e.target.value = "off";
  }
});

loginBtn.addEventListener("click", () => {
  if(!isEmailBadFormatted() || !isPassBadFormatted()){
    document.querySelector("#loginText")
      .style
      .display = "none";
    document.querySelector("#loadingIcon")
      .style
      .display = "block";
  }
})