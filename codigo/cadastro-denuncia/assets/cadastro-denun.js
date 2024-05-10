const assunto = document.getElementById('assunto');
const gravidade = document.getElementById('gravidade');
const região = document.getElementById('região');
const estado = document.getElementById('estado');
const cidade = document.getElementById('cidade');
const bairro = document.getElementById('bairro');
const descrição= document.getElementById('descrição');
const foto= document.getElementById('fileInput');

const form = document.querySelector('#forms');


function le_dados (){
    let dados= localStorage.getItem('db');

    objdados={};

    if (dados){
        objdados = JSON.parse(dados);
    }else{
        objdados=
        {
            denuncia :
            [  
                {
                    assunto:"Segurança",
                    gravidade:"Grave",
                    região: "Norte",
                    estado:"Minas Gerais",
                    cidade:"Belo Horizonte",
                    bairro:"Barreiro",
                    descrição:"Ocorrida a noite",
                    foto:"img"
                } 
            ]
        }
    }
    
    return objdados;
}

function salvadados(dados){
    localStorage.setItem('db',JSON.stringify(dados))
}

function incluir_contato(){
    //LER OS DADOS NO LOCAL STRORAGE 
    let objdados = le_dados();
    //INCLUINDO NOVO CONTATO
    let strassunto = document.getElementById('assunto').value;
    let strgravidade = document.getElementById('gravidade').value;
    let strregião = document.getElementById('região').value;
    let strestado = document.getElementById('estado').value;
    let strcidade = document.getElementById('cidade').value;
    let strbrairro = document.getElementById('bairro').value;
    let strdescrição = document.getElementById('descrição').value;
    let strfoto = document.getElementById('fileInput');
    //CRIANDO NOVO CONTATO 

    let novo_conato = {
        assunto:strassunto,
        gravidade:strgravidade,
        região: strregião,
        estado: strestado,
        cidade: strcidade,
        bairro: strbrairro,
        descrição:strdescrição,
        foto:strfoto
    }

    objdados.denuncia.push (novo_conato)
    //SALVANDO NO LOCAL STORAGE  
    salvadados(objdados); 
    //confirmação
    alert("Denúncia salva");     
    //recarregando a página
    form.reset();
}


//configurando os botões//
document.getElementById('envio').addEventListener('click',incluir_contato);


