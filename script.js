function hideNav() {
	if(document.getElementById("nav_mobile").style.display=="none") {
		document.getElementById("nav_mobile").style.display="block";
		document.getElementById("nav_mobile_toggle").style.backgroundColor="#4D4D4D";
	}
	else{
		document.getElementById("nav_mobile").style.display="none";
		document.getElementById("nav_mobile_toggle").style.backgroundColor="#666";
	}
}