function validarSenha() {
    let senha = document.getElementById('senha').value;
    let confirmacao = document.getElementById('confirmacao').value;
    let msg = document.getElementById('msg')
    
    
    
    if (senha !== confirmacao) {
       msg.innerHTML = "As senhas tem que se iguais!"
    }

    else if (senha.length < 6) {
        msg.innerHTML = "A senha tem que ter no mínimo 6 dígitos!"
    }

    else if (!/[_@#$%&*]/.test(senha)) {
        msg.innerHTML = "A senha tem que conter no mínimo um caractere especial (_, @, #, $, %, &, *)"
    }

    else if (!/[A-Z]/.test(senha)) {
        msg.innerHTML = "A senha tem que conter no mínimo uma letra maiúscula!"
    }

    else if (!/[a-z]/.test(senha)) {
        msg.innerHTML = "A senha tem que conter no mínimo uma letra minúscula!"
    }

    else if (!/\d/.test(senha)) {
        msg.innerHTML = "A senha tem que conter no mínimo um número!"
    }

    else if (/(\w)\1\1/.test(senha)) {
        msg.innerHTML = "A senha não pode conter 3 caracteres repetidos!"
    }

    else if (/(123|234|345|456|567|678|789)/.test(senha)) {
        msg.innerHTML = "A senha não pode conter sequência de números (ex: 123, 789)"
    }

    else if (/(321|432|543|654|765|876|987)/.test(senha)) {
        msg.innerHTML = "A senha não pode conter sequência decrescente de números (ex: 321, 987)"
    }

    else{
        msg.innerHTML = "Senha cadastrada com sucesso!"
    }
    


}