document.getElementById("Formu-Login").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  if (email === "teste@gmail.com" && senha === "teste") {
    mensagem.textContent = "✅ Login bem-sucedido!";
    mensagem.className = "sucesso";
  } else {
    mensagem.textContent = "❌ E-mail ou senha incorreto.";
    mensagem.className = "erro";
  }

  mensagem.style.display = "block";
});
