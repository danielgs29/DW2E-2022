var configuracion={
    minimo:1,
    maximo:9,
    casillas:4,

};

var xhr=new XMLHttpRequest();
xhr.addEventListener("load", ev =>{
    alert(ev.target.responseText);
})

xhr.open("POST", "http://localhost:5011/v1/mastermind");
xhr.setRequestHeader("content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
let jsonConfiguracion=(JSON.stringify(configuracion));
alert(jsonConfiguracion);
xhr.send(jsonConfiguracion);

