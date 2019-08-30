var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liElements = document.querySelectorAll("li");
var deleteElements = document.querySelectorAll(".delete-item");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	li.appendChild(btn);
	li.addEventListener("click", toggleDoneAfterClick);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	btn.classList.add("delete-item");
    btn.appendChild(document.createTextNode("Delete Item"));
    btn.addEventListener("click", deleteItem);

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneAfterClick() {
	this.classList.toggle("done");
}
function deleteItem() {
	this.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

liElements.forEach(function(li){
	li.addEventListener("click", toggleDoneAfterClick);
});
deleteElements.forEach(function(btn){
	btn.addEventListener("click", deleteItem);
});