const container = document.querySelector('.container');
const textoFanfic = document.querySelector('.textFanfic'); 

const texto = localStorage.getItem(listaDeFanfics.value);
document.body.querySelector('.container').innerHTML = texto;
