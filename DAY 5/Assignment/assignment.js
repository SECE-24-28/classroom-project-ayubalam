console.log("JS Loaded Successfully");

// Change text
function changeText() {
  document.getElementById("text").textContent = "Text has been changed!";
}

// Colors to cycle through
let colors = ["purple"];
let index = 0;

// Change box color sequentially
function changeColor() {
  let box = document.getElementById("box");
  box.style.backgroundColor = colors[index];

  index = (index + 1) % colors.length;  // Move to next color
}

// Hide box
function hideBox() {
  document.getElementById("box").style.display = "none";
}

// Show box
function showBox() {
  document.getElementById("box").style.display = "flex";
}

// Add list item
function addItem() {
  let val = document.getElementById("itemInput").value;

  if (val.trim() === "") {
    alert("Please enter an item!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = val;
  document.getElementById("list").appendChild(li);

  document.getElementById("itemInput").value = "";
}
