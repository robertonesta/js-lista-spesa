/*Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while*/

//creare lista della spesa

const listArray = []

let listaSpesa = document.getElementById("list");
const listUl = document.createElement("Ul");
listaSpesa.insertAdjacentElement("afterend", listUl);

let i = 0;

while (i == listArray.length){
    let item = prompt("quale prodotto vuoi aggiungere alla lista?");
    listArray.push(item);
    const listIl = document.createElement("li");
    listUl.insertAdjacentElement("afterend", listIl);
    listIl.innerHTML = item;
    i = confirm("clicca ok per aggiungere un altro prodotto, clicca Annulla per confermare la lista");
    console.log(item);
}