// ARQUIVO PARA LÓGICA

// CRIANDO FUNÇÃO
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa") 
    // acesso o que está no documento html na linha 18
    // Esta linha seleciona o elemento HTML com o atributo id="resultados-pesquisa", que é a seção onde os resultados da pesquisa serão exibidos. O elemento é armazenado na variável section.
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    if (!campoPesquisa) {
        section.innerHTML = "<p> Nada foi encontrado. Você não enviou uma palavra de busca</p>"
        return 
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    // Exibe no console do navegador o conteúdo do elemento section. I
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Inicializa uma string vazia chamada resultados, que será usada para construir o HTML dinâmico com os resultados da pesquisa.
    // PERCORRENDO OS DADOS DENTRO DA LISTA DADOS (dados.js)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `     
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>     
        `;
        }
    }
    // se resultados não existir, exibe a mensagem 
    if (!resultados) {
        resultados = "<p> Nada foi encontrado, tente outra coisa </p>"
    }
    section.innerHTML = resultados //  o conteúdo da variável resultados (que agora contém o HTML dinâmico criado) é inserido na seção da página referenciada por section
}


