const axios = require('axios');
const API_URL = 'http://localhost:8083'

klijenti = [
  {id: 0, ime: "Marko", prezime: "Markovic", brojLk:'111'},
  {id: 0, ime: "Pero", prezime: "Peric", brojLk:'112'},
  {id: 0, ime: "Stefan", prezime: "Stefanovic", brojLk:'113'},
  {id: 0, ime: "Mirko", prezime: "Mirkovic", brojLk:'114'},
  {id: 0, ime: "Andrej", prezime: "Andric", brojLk:'115'}
]


tipoviRacuna = [
  {id: 1, naziv: "Tekući račun", opis: "Tekući račun", oznaka:'111'},
  {id: 2, naziv: "Račun oročenog depozita", opis: "Račun oročenog depozita", oznaka:'112'},
  {id: 3, naziv: "Štedni račun", opis: "Štedni račun", oznaka:'113'},
  {id: 4, naziv: "Namenski račun", opis: "Namenski račun", oznaka: '114'},
  {id: 5, naziv: "Devizni račun", opis: "Devizni račun", oznaka: "115" }
]


tipoviRacuna.map(element => {
  axios.post(`${API_URL}/tip_racuna`, element )
    .then(data =>
      console.log("Tip Dodan")
    ).catch( err=>
    console.error(err.message)
  );
});

klijenti.map(element=> {
  axios.post(`${API_URL}/klijent`, element )
    .then(data =>
      console.log("klijent dodan")
    ).catch( err=>
    console.error(err.message)
  );
});



