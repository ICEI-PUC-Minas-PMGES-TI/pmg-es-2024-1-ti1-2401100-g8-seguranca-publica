const denuncia = localStorage.getItem("db");

const dadosobjeto = JSON.parse(denuncia)



//alert(dadosobjeto.denuncia[1].assunto)

/*for (let i = 0; i < dadosobjeto.denuncia.length; i++) {
    
    console.log(dadosobjeto.denuncia[i].assunto)
    console.log(dadosobjeto.denuncia[i].bairro)
    console.log(dadosobjeto.denuncia[i].cep)
    console.log(dadosobjeto.denuncia[i].cidade)
    console.log(dadosobjeto.denuncia[i].endereço)

}*/


function carrega_denúncias(){
    for (let i = 0; i < dadosobjeto.denuncia.length; i++) {


        const div = document.createElement('div')
        const section = document.querySelector('#list-denun')
        div.innerHTML= `<div class="card">
        <h5 class="card-header">Assunto da Denúncia: ${dadosobjeto.denuncia[i].assunto}</h5>
        <div class="card-body">
          <h5 class="card-title">Gravidade: ${dadosobjeto.denuncia[i].gravidade}</h5>
          <p class="card-text">Ocorrida no bairro ${dadosobjeto.denuncia[i].bairro} no estado ${dadosobjeto.denuncia[i].estado}</p>
          <a href="#" class="btn btn-primary">Veja Detalhes</a>
        </div>
      </div>`
    
      section.appendChild(div);
        
    }
    
}


window.addEventListener('load',carrega_denúncias());