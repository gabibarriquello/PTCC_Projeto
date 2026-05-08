// 1. Função de redirecionamento que você já criou
function login() {
    // Aqui você pode adicionar uma validação simples antes de redirecionar
    const email = document.querySelector('input[type="email"]').value;
    const senha = document.querySelector('input[type="password"]').value;

    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos antes de entrar.");
    } else {
        // Se estiver preenchido, redireciona
        window.location.href = "aluno_dashboard.html";
    }
}

// 2. Lógica para Mostrar/Esconder Senha (Front-end puro)
document.addEventListener('DOMContentLoaded', () => {
    // Selecionamos o ícone do olho e o input de senha
    const senhaInput = document.querySelector('input[type="password"]');
    const toggleIcon = document.querySelector('.fa-eye');

    if (toggleIcon) {
        toggleIcon.style.cursor = "pointer"; // Garante que mostre a mãozinha do mouse
        
        toggleIcon.addEventListener('click', () => {
            // Troca o tipo entre password e text
            const type = senhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
            senhaInput.setAttribute('type', type);
            
            // Troca o ícone (olho aberto / olho cortado)
            toggleIcon.classList.toggle('fa-eye');
            toggleIcon.classList.toggle('fa-eye-slash');
        });
    }
});

// Garante que a função login esteja disponível globalmente (como você já fez)
window.login = login;

// Função para o botão de Alto Contraste
const btnContrast = document.querySelector('.acc-btn.contrast');
if (btnContrast) {
    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });
}

// Função para aumentar/diminuir o texto (Botão AA)
const btnFontSize = document.querySelector('.acc-btn.text-size');
if (btnFontSize) {
    btnFontSize.addEventListener('click', () => {
        // Alterna a classe no container principal
        document.querySelector('.login-container').classList.toggle('fonte-grande');
    });
}

// Função para o botão de Áudio (Leitura de Tela)
const btnAudio = document.querySelector('.acc-btn.audio');

if (btnAudio) {
    btnAudio.addEventListener('click', () => {
        // Se já estiver falando, ele para (funciona como um liga/desliga)
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            return; // Sai da função
        }

        // 1. Pegamos o título e o subtítulo da página atual
        const titulo = document.querySelector('h2') ? document.querySelector('h2').innerText : "";
        const subtitulo = document.querySelector('.subtitle') ? document.querySelector('.subtitle').innerText : "";

        // 2. Pegamos todos os placeholders dos inputs (Nome, Email, Senha...)
        // Isso faz com que ele leia os campos da tela que estiver aberta!
        const inputs = Array.from(document.querySelectorAll('input'));
        const labelsInputs = inputs.map(i => "Campo: " + i.placeholder).join(". ");

        // 3. Montamos a frase final
        const textoParaLer = `${titulo}. ${subtitulo}. ${labelsInputs}`;

        const mensagem = new SpeechSynthesisUtterance(textoParaLer);
        mensagem.lang = 'pt-BR';
        mensagem.rate = 1.1;

        window.speechSynthesis.speak(mensagem);
    });
}

//acessibilidade avatar Libras só aparece quando clicamos no botão
const btnLibras = document.querySelector('.acc-btn.libras');

if (btnLibras) {
    btnLibras.addEventListener('click', () => {
        // Isso simula um clique no botão oficial do VLibras que fica escondido
        const vlibrasBtn = document.querySelector('[vw-access-button]');
        if (vlibrasBtn) {
            vlibrasBtn.click();
        }
    });
}

//parte do cadastro 
function validarCadastro() {
    const senha = document.getElementById('senha').value;
    const confirma = document.getElementById('confirmarSenha').value;

    if (senha !== confirma) {
        alert("As senhas não coincidem! Verifique e tente novamente.");
        return;
    }

    // Se as senhas forem iguais:
    alert("Cadastro realizado com sucesso! Agora você pode fazer login.");
    window.location.href = "index.html"; // Manda de volta para o login
}


  