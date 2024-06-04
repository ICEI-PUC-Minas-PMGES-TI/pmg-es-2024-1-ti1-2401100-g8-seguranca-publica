const denuncia = localStorage.getItem("db");

const dadosobjeto = JSON.parse(denuncia)






function carrega_denúncias(){
    
    for (let i = 0; i < dadosobjeto.denuncia.length; i++) {


      //logica a proposiçaõ de cores de cabeçalho conforme o assunto da denúncia 
      let cor = ""
      
      if(dadosobjeto.denuncia[i].assunto == 'Segurança'){
        cor="p-3 mb-2 bg-warning text-black";

      }else if(dadosobjeto.denuncia[i].assunto == 'Infraestrutura Publica'){
        cor="p-3 mb-2 bg-success text-black";

      }else if(dadosobjeto.denuncia[i].assunto == 'Risco a Saude'){
        cor="p-3 mb-2 bg-primary text-black";

      }

       
      

      
      //criando a div onde vai aparecer a denuncia 
        const divdenun = document.createElement('div')
        //criando a div onde iram ser colocados os detalhes de cada denuncia
        
          
        const divdetalhe= document.createElement('div');
        const divCompleta= document.createElement('div');
        const section = document.querySelector('#list-denun')

        divCompleta.classList.add('elemento-denuncia')
        
        
        divdenun.classList.add('denucia-parte')

        divdenun.innerHTML= `<div class="card">
        
        <h5 class="${cor}">Assunto da Denúncia: ${dadosobjeto.denuncia[i].assunto}</h5>
        <div class="card-body">
          <h5 class="card-title">Gravidade: ${dadosobjeto.denuncia[i].gravidade}</h5>
          <p class="card-text">Ocorrida no bairro ${dadosobjeto.denuncia[i].bairro} na cidade ${dadosobjeto.denuncia[i].cidade}</p>
          <button type="button" class="btn btn-info">Comentários</button>
          
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