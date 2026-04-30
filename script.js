function login() {
    const email = document.querySelector ('input[type="email"]').value;
    const senha = document.querySelector('input[type="password"]').value; 

    if (email === "admin" && senha === "123") {
        window.location.href = "pages/dashboard-aluno.html";
    } else {
        alert("Login inválido!");
    }
}