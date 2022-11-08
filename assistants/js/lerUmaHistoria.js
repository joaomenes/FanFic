const container = document.querySelector('.container');
const listaDeFanfics = document.querySelector('#listaDeFanfics')

document.querySelector("#listaDeFanfics").value = localStorage.getItem('listaDeFanfics'); //recuperando o valor do localStorage
document.querySelector('P').innerHTML =+ localStorage.getItem('listaDeFanfics'); //alterando o elemento HTML p





