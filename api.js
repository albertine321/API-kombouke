const apiurl = "https://bored-backend.vercel.app"

// Hent data fra APIet
async function hentData(){ //async betyr at funksjonen jobber asynkront (venter på svar fra internett)
  const response = await fetch(apiurl + "/api/randomactivity") // Henter data fra APIURL altså henter en tilfeldig aktivitet
  const data = await response.json(); //await betyr at den venter på at fetch skal bli ferdig før den går videre. Gjør om responsen til JSON

  hei(data) //sender dataen videre til funksjonen hei 
}

// Hent data fra APIet basert på type
async function hentDataType(type) { //tar imot type som et parameter
  const response = await fetch(apiurl + "/api/activity?type=" + type); // Henter fra APIURL
  const data = await response.json(); // Gjør om responsen til JSON

  hei(data); //sender dataen videre til funksjonen hei under her:
}

// Viser dataen i HTML
function hei(data){ //tar imot dataen ()som et parameter og sender inn dataen til HTML elementene med argumenter
    document.getElementById("aktivitet").innerHTML = data.activity;
    document.getElementById("type").innerHTML = data.type;
    document.getElementById("tilgjengelighet").innerHTML = data.accessibility;
    document.getElementById("pris").innerHTML = data.price * 10 + "/10"; //
    document.getElementById("deltakere").innerHTML = data.participants;
    console.log(data.activity);
}