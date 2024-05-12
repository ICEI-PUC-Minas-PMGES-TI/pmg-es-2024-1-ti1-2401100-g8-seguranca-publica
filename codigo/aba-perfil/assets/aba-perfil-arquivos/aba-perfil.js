function leDados() {
    let strDados = localStorage.getItem('dadosUsuario');
    let objDados = {};

    if (strDados !== null) {
        objDados = JSON.parse(strDados);
    } else {
        objDados = {
            nome: "Luiz Fagundes",
            telefone: "31-95958-4345",
            idUsuario: "000001",
            numeroDeDenuncias: '0'
        };
    }

    return objDados;
}

function imprimeDados() {
    let divNome = document.getElementById('nomeUsuario');
    let divTelefone = document.getElementById('telefoneUsuario');
    let divIdUsuario = document.getElementById('idUser');
    let divNumeroDeDenuncias = document.getElementById('quantDenuncias');

    let dadosUsuario = leDados();

    divNome.textContent = dadosUsuario.nome;
    divTelefone.textContent = dadosUsuario.telefone;
    divIdUsuario.textContent = dadosUsuario.idUsuario;
    divNumeroDeDenuncias.textContent = dadosUsuario.numeroDeDenuncias;
}

function toggle(el){
    var display = document.getElementById(el).style.display;
    if(display == 'none'){
        document.getElementById(el).style.display = 'block';
    }
    else{
        document.getElementById(el).style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', imprimeDados)