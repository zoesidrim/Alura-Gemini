
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let resultados = "";   
    let titulo = "";
    let descricao = "";

    
    if (campoPesquisa == "" || campoPesquisa ==" "){
        section.innerHTML= "Nenhum cantor foi encontrado";
        return;
    }
    
    campoPesquisa = campoPesquisa.toLowerCase();

    for (let dado of dados) {
        
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `
       } 
    }

    if (!resultados){
        resultados = "Nenhum cantor foi ENCONTRADO"
    } 
    
    section.innerHTML = resultados;
     
}

