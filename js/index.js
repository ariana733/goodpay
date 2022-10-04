/**
 * Trouxe o array do arquivo moduloDados.js
 * para o index.js
 */
import usuarios from "./moduloDados.js"

const btnEntrar = document.getElementById("btnEntrar")

const alertaCaptcha = new bootstrap.Modal("#erroCaptcha")
const spanCaptcha = document.getElementById("captcha")

const captchaGerado = geradorNumeros()

spanCaptcha.innerText = `Resolva a Operação: ${captchaGerado.num1ENum2}`

btnEntrar.addEventListener("click", () => {
    const inputLogin = document.getElementById("login").value
    const inputSenha = document.getElementById("senha").value

    const inputCaptcha = parseInt(document.getElementById("input-captcha").value)

    let usuarioValido;

    if(captchaGerado.resultado == inputCaptcha){
        for(let usuario of usuarios){
            if(usuario.nomeUsuario == inputLogin){
                usuarioValido = usuario;
                if(inputSenha == usuarioValido.senha){
                    window.location.pathname = '/app.html' 
                }else{
                    /*modal de erro de senha precisa ser implementado
                    alertaLoginSenha.show()
                    break*/
                }
            }else{
                /*modal de erro de usuario precisa ser implementado
                alertaLoginUsuario.show()
                break**/
            }
        }
    }else{
        alertaCaptcha.show()

    }
})
    
//Função geradora de números para verificação de captcha
function geradorNumeros(){

    let num1 = Math.floor(Math.random() * 100)
    let num2 = Math.floor(Math.random() * 50)

    let captcha  = {
    num1: num1,
    num2: num2,
    num1ENum2: num1 + ' + ' + num2 + ' = ?',
    resultado: num1 + num2
    }

    return captcha
}
