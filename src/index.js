import { atlag, hozzaad } from "./lista.js";

function katt(){
    hozzaad(document.getElementById('mezo').value)
    alert(atlag())
}

document.getElementById('gomb').addEventListener('click', katt);