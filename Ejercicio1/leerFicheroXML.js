function gestionarFicheroXML(xmlDoc){
	alert(xmlDoc.getElementsByTagName('titulo')[0].firstChild.nodeValue)
	let texto = "<table><tr><th>Titulo</th><th>Autor</th></tr>";
	let titulos = xmlDoc.getElementsByTagName("titulo");
	let autores = xmlDoc.getElementsByTagName("autor");
	let precios = xmlDoc.getElementsByTagName("precio");
	let etiqueta = "";
	for (i=0;i<titulos.length;i++){
		if (precios[i].childNodes[0].nodeValue < 25)
			etiqueta = "menor25";
		else
			etiqueta = "nomenor25";
		texto += "<tr class=\"" + etiqueta + "\">";
		texto += "<td>" + titulos[i].childNodes[0].nodeValue + "</td>";
		texto += "<td>" + autores[i].childNodes[0].nodeValue + "</td>";
		texto += "</tr>";
	}
	//alert(xmlDoc.getElementsByTagName('alumnos')[0].childNodes[1].firstChild.nodeValue)

	texto += "</table>";
	document.getElementById('tablalibros').innerHTML = texto;
	//document.getElementById('tablalibros').innerHTML += "<b>" + xmlDoc.querySelector('alumno:nth-child(2)').textContent + "</b>"
	
}

//document.querySelector("div:nth-child(1)").addEventListener("click",()=>{
//	document.querySelector("#botonXML").addEventListener("click",()=>{
window.addEventListener("load", function(event) {
    let xmlDoc = loadLDocA("libros.xml","xml");
})