function gestionarFicheroTXT(txtDoc){
    let contador = 0;
    let registros = txtDoc.split(/\r?\n|\r/);
    for (let i = 0; i < registros.length; i++) 
    { 
        let contenido = "";
        let campos = registros[i].split(";");
        contenido += "<p class=\"" + campos[0]+ "\">" + campos[1] + "</p>";
        document.getElementById('ficheroTXT').innerHTML = contenido;
    }
}
let puntero = 0;
let intervalo = setInterval(leerfichero, 3000);
function leerfichero() {
    let txtDoc = loadLDocA("leerFicheroTXT.txt","txt");
}