const botaoFanfic = document.querySelector('.btn-fanfic');
const listaDeFanfics = document.querySelector('#listaDeFanfics');
const textoFanfic = document.querySelector('.textFanfic');
const titutloFanfic = document.querySelector('.tituloStory');

botaoFanfic.addEventListener('click', function (e) {

    if (!textoFanfic.value) return; //quando tiver nada o retorno será nada. se não "!" tiver o valor de  textFanfic
    //caso contrario jogar o texto na lista
    const confirma = confirm("Confirma a publicação dessa Fanfic?")
    if (confirma == true) {
        criarStory((textoFanfic.value));
        limpaAreaTexto();
    } else (alert("A Fanfic não vai ser publicada"));
});

function criarLi() {
    const li = document.createElement('li');  //retorna li 
    return li;
}

function criarStory(textoStory) {
    const li = criarLi();          //recebe o texto
    li.innerText = textoStory;
    listaDeFanfics.appendChild(li);
    salvarHistorias()
}

function limpaAreaTexto() {
    textoFanfic.value = " ";
    textoFanfic.focus();
}

//pega o titulo para escolher a fanFic 

function salvarHistorias() {
    const historias = listaDeFanfics.querySelectorAll('li')
    const historiasLista = [];

    for (let historia of historias) {
        historiatext = historia.innerText;  //convertendo para texto
        historiasLista.push(historiatext);
    }

    const historiasJSON = JSON.stringify(historiasLista); //convertendo para JSON
    localStorage.setItem('listaDeFanfics', historiasJSON);
}

function adicionandoHistorias() {  //converte para formato string novamente
    const historias = localStorage.getItem('listaDeFanfics');
    const historiasLista = JSON.parse(historias);

    for (let historia of historiasLista) {
        criarStory(historia);
    }
}
adicionandoHistorias();


//pegar apenas o título do texto
//link cada titulo ao clique abri-lo para leitura do texto
