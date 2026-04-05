const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const btn = document.getElementById("btn");
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

btn.addEventListener("click", () => {
    event.preventDefault();

    let email = emailInput.value;
    let senha = senhaInput.value;

    if (dados.find(aux => aux.senha === senha && aux.email === email)) {
        texto.style.color = "green";
        texto.innerText = "Acesso Liberado";
    }else if(email === "" || senhha === ""){
        texto.style.color = "red";
        texto.innerText = "Preencha o Formulárioo";
    } else {
        texto.style.color = "red";
        texto.innerText = "Acesso Negado";
    }
})