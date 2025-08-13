// Credenciales (demo front-end para GitHub Pages)
const USERNAME = "njacomer1@est.ups.edu.ec";
const PASSWORD = "EGJWlpcf1915";

function login() {
  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (usuario === USERNAME && clave === PASSWORD) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("download-section").style.display = "block";
    errorMsg.style.display = "none";
  } else {
    errorMsg.style.display = "block";
  }
}

function logout() {
  document.getElementById("login-section").style.display = "block";
  document.getElementById("download-section").style.display = "none";
  document.getElementById("usuario").value = "";
  document.getElementById("clave").value = "";
}
