/**
 * Trouxe o array do arquivo moduloDados.js
 * para o index.js
 */
import usuarios from "./moduloDados.js"

const btnEntrar = document.getElementById("btnEntrar")
const alertaLogin = new bootstrap.Modal("#alertaLogin")

btnEntrar.addEventListener("click", () => {
    const inputLogin = document.getElementById("login").value
    const inputSenha = document.getElementById("senha").value

    let usuarioValido;

    for(let usuario of usuarios) {
        if(usuario.nomeUsuario == inputLogin) {
            usuarioValido = usuario;
            break
        }
    }

    if(inputSenha == usuarioValido.senha) {
        // redirectiona o usuário para essa página html
        window.location.pathname = '/app.html'
    } else {
        alertaLogin.show()
    }
});
