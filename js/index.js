import usuarios from "./moduloDados.js";

const btnEntrar = document.getElementById('btnEntrar')
const alertaLogin = new bootstrap.Modal("#alertaLogin")

btnEntrar.addEventListener("click", ()=> {
    const inputLogin = document.getElementById('login').value
    const inputSenha = document.getElementById('senha').value
    let usuarioValido

    for (let usuario of usuarios){ //usuario e um objeto que representa cada usuario
        if(usuario.nomeUsuario == inputLogin){
            usuarioValido = usuario
            break
        }
    }
        if(inputSenha == usuarioValido.senha){
            window.location.pathname = '/app.html' //para redirecionar quando login der certo
        } else {
            alertaLogin.show()
        }
})