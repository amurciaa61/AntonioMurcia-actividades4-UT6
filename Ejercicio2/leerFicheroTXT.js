function gestionarFicheroTXT(txtDoc){
    let contador = 0;
    let registros = txtDoc.split(/\r?\n|\r/);
  //  let contenido = "";
    let capaContenedora = document.querySelector(".contenedor");
    for (let i = 0; i < registros.length; i++) 
    { 
       let campos = registros[i].split(";");
       //contenido += "<p class=\"" + campos[0]+ "\">" + campos[1] + "</p>"; 
       // Creo el parrafo, su texto y lo añado a la capa
       let parrafo = document.createElement("p");
       let textoparrafo = document.createTextNode(campos[1]);
       parrafo.appendChild(textoparrafo);
       // Asigno attributo al parrafo
       let att = document.createAttribute("class");
       att.value = campos[0];                          
       parrafo.setAttributeNode(att);  
       capaContenedora.appendChild(parrafo);
    }
 //   document.getElementById('ficheroTXT').innerHTML = contenido;
}
let puntero = 0;
let intervalo = setInterval(leerfichero, 3000);
function leerfichero() {
    let txtDoc = loadLDocA("leerFicheroTXT.txt","txt");
}