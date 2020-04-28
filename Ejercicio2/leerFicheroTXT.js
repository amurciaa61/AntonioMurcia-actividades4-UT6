function gestionarFicheroTXT(txtDoc){
    let contador = puntero;
    let lineas = 0;
    console.log(puntero);
    let registros = txtDoc.split(/\r?\n|\r/);
    let capaContenedora = document.querySelector(".contenedor");
    for (let i = contador; i < registros.length; i++) 
    { 
       let campos = registros[i].split(";");
       // Creo el parrafo, su texto y lo añado a la capa
       let parrafo = document.createElement("p");
       let textoparrafo = document.createTextNode(campos[1]);
       parrafo.appendChild(textoparrafo);
       // Asigno attributo al parrafo
       let att = document.createAttribute("class");
       att.value = campos[0];                          
       parrafo.setAttributeNode(att);  
       capaContenedora.appendChild(parrafo);
       lineas++
    }
    console.log(lineas);
    puntero = lineas
}
let intervalo = setInterval(leerfichero, 10000);
function leerfichero() {
    console.log(puntero);
    //let txtDoc = loadLDocA("leerFicheroTXT.txt","txt");
    loadLDocA("leerFicheroTXT.txt","txt");
}