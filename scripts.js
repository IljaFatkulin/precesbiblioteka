function add() {
	var name = document.getElementById('nosaukums').value;
	var value = document.getElementById('cena').value;

	var prece = document.createElement("LI");
	var name = document.createTextNode("Nosaukums: " + name);
	var price = document.createTextNode("Cena: " + value);
	
	prece.appendChild(name);
	prece.appendChild(document.createElement("BR"));
	prece.appendChild(price);
	var button = document.createElement("BUTTON")
	button.innerHTML = "Dzēst"; 
	prece.appendChild(document.createElement("BR"));
	prece.appendChild(button)
	button.addEventListener('click', function(){
  		document.getElementById("Preču lapa").removeChild(prece);
	});
		
	document.getElementById("Preču lapa").appendChild(prece);
}
