const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const nomeInput = document.getElementById("nome");
const btnLogin = document.getElementById("btnLogin");
const btnCadastro = document.getElementById("btnCadastro");
const texto = document.querySelector(".inserir")

let dados = [
    {
        id: 1,
        nome: "daniel",
        senha: "123",
        email: "daniel.l.pires@aluno.senai.br",
    },
    {
        id: 2,
        nome: "Gabriel",
        senha: "123",
        email: "gabriel.l.pires@aluno.senai.br",
    }
];

if (btnLogin) {
    btnLogin.addEventListener("click", (event) => {
        event.preventDefault();

        let email = emailInput.value;
        let senha = senhaInput.value;

        if (dados.find(aux => aux.senha === senha && aux.email === email)) {
            texto.style.color = "green";
            texto.innerText = "Acesso Liberado";
        } else if (email === "" || senha === "") {
            texto.style.color = "red";
            texto.innerText = "Preencha o Formulárioo";
        } else {
            texto.style.color = "red";
            texto.innerText = "Acesso Negado";
        }
    })
}
if (btnCadastro) {
    btnCadastro.addEventListener("click", (event) => {
        event.preventDefault();

        let email = emailInput.value;
        let senha = senhaInput.value;
        let nome = nomeInput.value;

        if (email === "" && nome === "" && senha === "") {
            texto.innerText = "Preencha o Formulário";
            texto.style.color = "red"
            return
        }
        let novoUser = {
            id: dados.length + 1,
            nome: nome,
            email: email,
            senha: senha,
        }
        console.log(novoUser);
        if (dados.find(aux => aux.email === email)) {
            texto.style.color = "red";
            texto.innerText = "Esse conta já existe";
            return
        }
        dados.push(novoUser);

        texto.style.color = "green";
        texto.innerText = "Cadastro Realizado com Sucesso..."
    })
}