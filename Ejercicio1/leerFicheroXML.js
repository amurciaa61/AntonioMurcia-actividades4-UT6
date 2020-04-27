function gestionarFicheroXML(xmlDoc){
	alert("llego");
	alert(xmlDoc.getElementsByTagName('titulo')[0].firstChild.nodeValue)
	let texto = "<table><tr><th>Titulo</th><th>Autor</th></tr>";
	let titulos = xmlDoc.querySelectorAll('titulo').textContent;
	let autores = xmlDoc.querySelectorAll('autor').textContent;
	let precios = xmlDoc.querySelectorAll('precio').textContent;
	for (i=0;i<titulos.length;i++){
		texto = texto + "<tr><td>" + titulos[i] + "</td></tr>";
	}
	//alert(xmlDoc.getElementsByTagName('alumnos')[0].childNodes[1].firstChild.nodeValue)

	texto = texto + "</table>";
	alert("texto");
	document.getElementById('tablalibros').innerHTML = texto;
	//document.getElementById('tablalibros').innerHTML += "<b>" + xmlDoc.querySelector('alumno:nth-child(2)').textContent + "</b>"
	
}

//document.querySelector("div:nth-child(1)").addEventListener("click",()=>{
//	document.querySelector("#botonXML").addEventListener("click",()=>{
window.addEventListener("load", function(event) {
    let xmlDoc = loadLDocA("libros.xml","xml");
})