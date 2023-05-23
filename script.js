var input = document.querySelector("#inputBox");
var buttons = document.querySelectorAll(".cal-btn");

var string = "";
var btnArray = Array.from(buttons);
btnArray.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		if (e.currentTarget.textContent == "=") {
			string = eval(string);
			input.value = string;
		} else if (e.currentTarget.textContent == "DEL") {
			string = string.substring(0, string.length - 1);
			input.value = string;
		} else if (e.currentTarget.textContent == "AC") {
			string = "";
			input.value = "0";
		} else {
			string += e.currentTarget.textContent;
			input.value = string;
		}
	});
});
