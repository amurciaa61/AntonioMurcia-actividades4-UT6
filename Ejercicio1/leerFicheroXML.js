function gestionarFicheroXML(xmlDoc){
	alert("llego");
	alert(xmlDoc.getElementsByTagName('titulo')[0].firstChild.nodeValue)
	alert("llego");
	let texto = "<table><tr><th>Titulo</th><th>Autor</th></tr>";
	let titulos = xmlDoc.querySelector('titulo').textContent;
	let autores = xmlDoc.querySelector('autor').textContent;
	let precios = xmlDoc.querySelector('precio').textContent;
	for (i=0;i<titulos.length;i++){
		texto = texto + "<dr>" + titulos[i] + "</dr>";
	}
	//alert(xmlDoc.getElementsByTagName('alumnos')[0].childNodes[1].firstChild.nodeValue)

	texto = texto + "</table>";
	document.getElementById('tablalibros').innerHTML = texto;
	//document.getElementById('tablalibros').innerHTML += "<b>" + xmlDoc.querySelector('alumno:nth-child(2)').textContent + "</b>"
	
}

//document.querySelector("div:nth-child(1)").addEventListener("click",()=>{
//	document.querySelector("#botonXML").addEventListener("click",()=>{
window.addEventListener("load", function(event) {
    let xmlDoc = loadLDocA("libros.xml","xml");
})