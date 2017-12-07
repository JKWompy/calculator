// JavaScript Document

//Change Display
function d(val) {
	document.getElementById("d").value = val;
}

//Type number and operators
function v(val) {
	document.getElementById("d").value += val;
}

//Evaluate the equation
function e() {
	try {
		d(eval(document.getElementById("d").value)):
	}
	catch(err) {
		d("Error");
	}
}
	