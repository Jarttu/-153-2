
let haku = document.forms['formNewItem'];
haku.addEventListener('submit', lisaa)
const kaverit = []

function lisaa(event){
    event.preventDefault()

    let nimi = document.querySelector('#main input[type="text"]').value;

    let uusinimi = document.createElement('li')
    let uusinimiteksti = document.createTextNode(nimi)
    uusinimi.appendChild(uusinimiteksti)
    uusinimi.className = 'kaveri-lista';
        
    document.querySelector('#kaverilista').appendChild(uusinimi)
}
function poista(){
    prompt("Kirjoita poistettava nimi")

}
function jarjesta(){
    
}