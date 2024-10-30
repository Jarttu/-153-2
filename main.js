
let haku = document.forms['formNewItem'];
haku.addEventListener('submit', lisaa)
const kaverit = [];

function lisaa(event){
    event.preventDefault()

    let nimi = document.querySelector('#main input[type="text"]').value;
    if (nimi){
        kaverit.push(nimi)
        document.querySelector('#main input[type="text"]').value='';
        tulosta_lista()
    }
    
}

function poista(){
    const poistettava = prompt("Kirjoita poistettava nimi");
    const index = kaverit.indexOf(poistettava)
    if (index !== -1) {
        kaverit.splice(index, 1)
        tulosta_lista()
    }
    else {
        alert("Nimeä ei löytynyt")
    }
}
function jarjesta(){
    kaverit.sort()
    tulosta_lista()
}
function tulosta_lista(){
    const kaverilista = document.getElementById('kaverilista');
    kaverilista.innerHTML = '';
    kaverit.forEach(nimi =>{
        const li = document.createElement('li')
        li.textContent = nimi;
        kaverilista.appendChild(li);
    });
}