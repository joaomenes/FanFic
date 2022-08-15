const botaoFanfic = document.querySelector('#btn-fanfic');
const listaDeFanfics = document.querySelector('#listaDeFanfics');
const textoFanfic = document.querySelector('.textFanfic');
const containerStories = document.querySelector('.container-stories');
const formStorys = document.querySelector('.formStories');

botaoFanfic.addEventListener('click', function (e) {
    if (!textoFanfic.value) return; //quando tiver nada o retorno será nada. se não "!" tiver o valor de  textFanfic
    //caso contrario jogar o texto na lista
    const confirma = confirm("Confima a publicação dessa Fanfic?")
    if (confirma == true) {
        criarStory(textoFanfic.value);
        limpaAreaTexto()
    } else (alert("A Fanfic não vai ser publicada"));
});

function criarLi() {
    const li = document.createElement('li');  //retorna li 
    return li;
}

function criarStory(textoStory) {
    const li = criarLi();          //recebe o texto
    li.innerHTML = textoStory;
    containerStories.appendChild(li);
}

function limpaAreaTexto() {
    textoFanfic.value = " ";
    textoFanfic.focus();
}

//pega o titulo para escolher a fanFic 