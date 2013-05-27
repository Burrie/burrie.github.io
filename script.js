function hideNav() {
	if(document.getElementById("nav").style.display=="none") {
		document.getElementById("nav").style.display="block";
		document.getElementById("nav_cover").style.display="none";
	}
	else{
		document.getElementById("nav").style.display="none";
		document.getElementById("nav_cover").style.display="block";
	}
}