function comentar() {
    const enviar = document.getElementById("btn");

    enviar.addEventListener('click', function() {
        const texto = document.querySelector(".texto").value;
        const listaComentarios = document.getElementById("comentarioS");

        if (texto.trim() !== "") {
            
            const container = document.createElement('div');
            container.classList.add("comentarioContainer");

            const novoComentario = document.createElement('li');
            novoComentario.innerHTML = texto;
            novoComentario.classList.add("comentario");

            const btnER = document.createElement('button');
            btnER.innerHTML = "...";
            btnER.classList.add("btnER");

            container.appendChild(novoComentario);
            container.appendChild(btnER);

            listaComentarios.appendChild(container);

            document.querySelector(".texto").value = "";

            btnER.addEventListener('click', function() {
                
                let btnEdit = container.querySelector('.edit');
                let btnRemove = container.querySelector('.delete');

                if (!btnEdit && !btnRemove) {
                    btnEdit = document.createElement('button');
                    btnEdit.innerHTML = "Editar";
                    btnEdit.style.display = 'block';
                    btnEdit.classList.add('edit');

                    btnRemove = document.createElement('button');
                    btnRemove.innerHTML = "Remover";
                    btnRemove.classList.add('delete');

                    btnRemove.addEventListener('click', function(){
                        container.remove()
                    })

                    container.appendChild(btnEdit);
                    container.appendChild(btnRemove);
                } else {
                    container.removeChild(btnEdit);
                    container.removeChild(btnRemove);
                }
            });
        }
    });
}

window.addEventListener("load", function() {
    comentar();
});
