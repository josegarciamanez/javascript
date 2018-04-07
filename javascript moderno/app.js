let cambio = document.querySelector('#cambio').addEventListener('click', loadDoc);
let cambioFetch = document.querySelector('#cambioFetch').addEventListener('click', cargarJSON);

function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.querySelector('#ajax').innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "ajax_info.txt", true);
	xhttp.send();
}

// Llamada con fetch API
function cargarJSON() {
	fetch('fetch_info.json').then(function(res) {
		return res.json();
	}).then(function(data) {
		console.log(data);
		let html = ''
		data.forEach(function(persona) {
			html += `
                <li><span class="span1">Nombre: </span>${persona.nombre} ${persona.apellidos} <span class="span1">Puesto: </span> ${persona.puesto}</li>`;
		});
		document.getElementById('fetch').innerHTML = html;
	}).catch(function(error) {
		console.log(error);
	});
}
