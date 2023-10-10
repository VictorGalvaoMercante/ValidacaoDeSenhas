function validarSenha(){
    let senha = document.getElementById('senha').value;
    let confirmacao = document.getElementById('confirmacao').value;
    let msg = document.getElementById('msg')

    if(senha !== confirmacao){
        msg.innerHTML = "A senha tem que ser iguais"
    }
    if(senha.length < 6){
        msg.innerHTML = "A senha tem que ter no mínimo 6 dígitos"
    }

   
}