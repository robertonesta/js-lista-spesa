/*Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while*/

//creare lista della spesa

const listArray = []

let listaspesa = document.getElementById("list")


let i = true;

while (i = true){
    let item = prompt("vuoi aggiungere un prodotto alla lista?")
    listArray.push(item)
    

    i=confirm("qualcos'altro?")
    console.log(item)
}