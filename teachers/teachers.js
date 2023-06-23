const btnAddress1 = document.getElementById('btnAddress1');
const btnAddress2 = document.getElementById('btnAddress2');
const btnAddress3 = document.getElementById('btnAddress3');
const btnAddress4 = document.getElementById('btnAddress4');
const btnAddress5 = document.getElementById('btnAddress5');
const btnAddress6 = document.getElementById('btnAddress6');
const btnAddress7 = document.getElementById('btnAddress7');
const btnAddress8 = document.getElementById('btnAddress8');

let pupilName1 = document.getElementById('name1');
let pupilName2 = document.getElementById('name2');
let pupilName3 = document.getElementById('name3');
let pupilName4 = document.getElementById('name4');
let pupilName5 = document.getElementById('name5');
let pupilName6 = document.getElementById('name6');
let pupilName7 = document.getElementById('name7');
let pupilName8 = document.getElementById('name8');

let inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btnSearch');

const showInfo = () => {
    for(let i = 0; i <= 8; i++){
        // if(inputSearch.value === document.getElementById('name' + [i])){
        //     console.log(true);
        // }
    console.log(document.getElementById('name' + [i]).children);

    }

}

const showAddress1 = () => {
    alert('Toshkent viloyati, Angren shahar, Uzumzor ko`chasi 13-uy');
}

const showAddress2 = () => {
    alert('Andijon viloyati, Andijon shahar, Bug`doyzor ko`chasi 123-uy');
}

const showAddress3 = () => {
    alert('Samarqand viloyati, Samarqand shahar, Lola ko`chasi 413-uy');
}

const showAddress4 = () => {
    alert('Namangan viloyati, Qumko`prik shahar, Sobir Rahimov ko`chasi 1113-uy');
}

const showAddress5 = () => {
    alert('Farg`ona viloyati, Qo`qon shahar, Chilangar ko`chasi 713-uy');
}

const showAddress6 = () => {
    alert('Buxoro viloyati, G`ijduvon shahar, Zafar ko`chasi 456-uy');
}

const showAddress7 = () => {
    alert('Sirdaryo viloyati, Oltinko`l shahar, Paxta ko`chasi 561-uy');
}

const showAddress8 = () => {
    alert('Toshkent viloyati, Keles shahar, Toshkent ko`chasi 321-uy');
}