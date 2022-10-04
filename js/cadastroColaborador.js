const alertaCadastro = new bootstrap.Modal("#alertaCadastro")
const botao = document.getElementById('botaoEnviar')
const nomeForm = document.getElementById('nome')
const emailForm = document.getElementById('email')
const telForm = document.getElementById('tel')
const especForm = document.getElementById('espec')
const comentarioForm = document.getElementById('comentario')

botao.addEventListener('click', () => {
    if(nomeForm.value.length > 0 && emailForm.value.length > 0 && telForm.value.length > 10 && especForm.value.length > 0 && comentarioForm.value.length > 29){
        alertaCadastro.show()
    }
    
})

