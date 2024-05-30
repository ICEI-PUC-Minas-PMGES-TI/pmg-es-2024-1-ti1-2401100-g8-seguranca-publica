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

        

        const divdenun = document.createElement('div')
        const divdetalhe= document.createElement('div');
        const divCompleta= document.createElement('div');
        const section = document.querySelector('#list-denun')

        divCompleta.classList.add('elemento-denuncia')
        
        
        divdenun.classList.add('denucia-parte')

        divdenun.innerHTML= `<div class="card">
        <h5 class="card-header">Assunto da Denúncia: ${dadosobjeto.denuncia[i].assunto}</h5>
        <div class="card-body">
          <h5 class="card-title">Gravidade: ${dadosobjeto.denuncia[i].gravidade}</h5>
          <p class="card-text">Ocorrida no bairro ${dadosobjeto.denuncia[i].bairro} no estado ${dadosobjeto.denuncia[i].estado}</p>
          
        </div>
      </div>`


      divdetalhe.classList.add("detalhe-denuncia")
      divdetalhe.innerHTML=`<div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Descrição</strong>
          </button>
        </h2>


        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p>${dadosobjeto.denuncia[i].descrição}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Endereço</strong>
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
                <h5>CEP: ${dadosobjeto.denuncia[i].cep} </h5>
                <h5>Estado: ${dadosobjeto.denuncia[i].estado} </h5>
                <h5>Cidade: ${dadosobjeto.denuncia[i].cidade} </h5>
                <h5>Bairro: ${dadosobjeto.denuncia[i].bairro} </h5>
          </div>
        </div>
      </div>


      
      
      </div>
    </div>`
    
      divCompleta.appendChild(divdenun);
      divCompleta.appendChild(divdetalhe); 
      section.appendChild(divCompleta)
    }
    
}


window.addEventListener('load',carrega_denúncias());