/* Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

const bici = [
    {
        nome: "Bici A",
        peso: 10
    },
    {
        nome: "Bici B",
        peso: 1
    },
    {
        nome: "Bici C",
        peso: 5
    },
    {
        nome: "Bici D",
        peso: 3
    }
]

console.log(bici);

let biciLeggera = bici[0]

for (let index = 0; index < bici.length; index++) {
    if (bici[index].peso < biciLeggera.peso) {
        biciLeggera = bici[index]
    }
}

console.log(`La bici più leggera è: ${biciLeggera.nome} e pesa ${biciLeggera.peso}`);



/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */