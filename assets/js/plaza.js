function start() {
	console.log("\nTriggered start()");

	closeCategories()
	console.log("\Completed start()");
}

function categoryDropdown(category) {
	console.log("\nTriggered categoryDropdown()");
	console.log(category);
	if (document.getElementById(category).style.display == "none") {
		closeCategories();
		document.getElementById(category).style.display = "flex";
		document.getElementById(category).style.textDecoration = "underline";
	}
	else {
		document.getElementById(category).style.display = "none";
		document.getElementById(category).style.textDecoration = "none";
	}
	console.log("Completed categoryDropdown()");
}

function closeCategories() {
	console.log("\tTriggered closeCategories()");
	document.getElementById("electronics").style.display = "none";
	document.getElementById("fashion").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("books").style.display = "none";
	document.getElementById("grocery").style.display = "none";
	document.getElementById("pet-supplies").style.display = "none";
	document.getElementById("beauty-and-health").style.display = "none";
	document.getElementById("outdoors-sports").style.display = "none";
	console.log("\tCompleted closeCategories()");
}