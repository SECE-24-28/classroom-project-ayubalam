// // 1 Tag selector
// let heading1=document.getElementsByTagName("h1");
// // html collection Arraay
// console.log();

// //2. calss selector
// let cl=document.getElementsByTagName("h1");
// // html collection Arraay
// console.log(cl[0]);


// //3. id selector
// let id=document.getElementsByTagName("b");
// // it will return single element and the first element
// console.log(id);


// //4. query selector
// let sell=document.getElementsByTagName("#b");
// // it will return single element and the first element
// console.log(sell);


// //5. calss selectorAll
// let d=document.getElementsByTagName("#b");
// // nodelist Array
// console.log(d);

// Read and write operation

//READ operation

// let head = document.querySelector("p");
// console.log(head.textContent);

// // Write Operation 

// head.textContent="This the new paragraph content.";

// let div = document.querySelector("div");
// div.innerHTML="<p>Hello From Para</p>";

// // div.textContent="<p>Hello From Para</p>";
// console.log(div.innerHTML);

// add /remove/toggle class 
 
// 


document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form reload

  // Get Values
  let name = document.getElementById("name").value;
  let course = document.getElementById("course").value;
  let rating = document.getElementById("rating").value;
  let feedback = document.getElementById("feedback").value;

  // Display Output
  let output = document.getElementById("output");
  output.style.display = "block";
  output.innerHTML = `
    <h3>Feedback Submitted</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Course:</b> ${course}</p>
    <p><b>Rating:</b> ${rating}/5</p>
    <p><b>Feedback:</b> ${feedback}</p>
  `;

  // Clear Form
  document.getElementById("feedbackForm").reset();
});
