
/* Milestone 1
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica:
utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

Milestone 2
Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder,
sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

Bonus
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra
ed il titolo abbia una dimensione adeguata */
const rowEl = document.querySelector('.row')
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(response => {

        const row = response.data
        console.log(row);

        let rowElements = ''
        row.forEach(row => {
            const { url, title } = row

            const markup = `
            <div class="col-4">
                <div class="paper container">
                    <img class="pt-3" src="${url}" width="100%" height="" alt="">
                    <p class="mt-3"><em>${title}</em></p>
                    <div class="d-flex justify-content-center">
                        <button onclick="on()">Apri</button>
                    </div>
                </div>
            </div>
            `
            rowElements += markup

        })

        rowEl.innerHTML = rowElements

    }).catch(err => console.error(err))

function on() {
    document.getElementById("overlay").style.display ="block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}