const inputLogin = document.getElementById("inputLogin");
const inputSenha = document.getElementById("inputSenha");
const btnLogin = document.getElementById("btnLogin");
var texto = document.querySelector(".texto");
const inputNome = document.getElementById("inputNome");
const inputLoginCad = document.getElementById("inputLoginCad");
const inputSenhaCad = document.getElementById("inputSenhaCad");;
const btnCad = document.getElementById("btnCad");
var textoCad = document.querySelector(".textoCad");

let dados = JSON.parse(localStorage.getItem("dados")) || [ { id: 1, nome: "daniel", email: "daniel@123", senha: "123", } ];

if (btnLogin) {
    btnLogin.addEventListener("click", (event) => {
        event.preventDefault();

        let email = inputLogin.value;
        let senha = inputSenha.value;

        if (email.trim() == "" || senha.trim() == "") {
            texto.style.color = "red";
            texto.innerText = "Preencha os campos do formulario";
            return;
        }
        else if (dados.find(aux => email == aux.email && senha == aux.senha)) {
            texto.style.color = "green";
            texto.innerText = "Acss liberado";
        }
        else {
            texto.style.color = "orange";
            texto.innerText = "Dados Incorretos";
        }
    })
}

if (btnCad) {
    btnCad.addEventListener("click", (event) => {
        event.preventDefault();

        let email = inputLoginCad.value;
        let nome = inputNome.value;
        let senha = inputSenhaCad.value;

        if (email.trim() == "" || nome.trim() == "" || senha.trim() == "") {
            textoCad.style.color = "red";
            textoCad.innerText = "Preencha os campos do formulario";
            return;
        }

        if (dados.find(aux => email == aux.email)) {
            textoCad.style.color = "red";
            textoCad.innerText = "Essa conta já existe, n é possiivel cria-la";
            return;
        } else {
            let newUser = {
                id: Date.now(),
                nome: nome,
                email: email,
                senha: senha,
            }
            dados.push(newUser);
            let dadosAtt = JSON.stringify(dados);
            localStorage.setItem("dados",dadosAtt);
            
            textoCad.style.color = "green";
            textoCad.innerText = "Conta criada com secusso";
        }

    })
}

