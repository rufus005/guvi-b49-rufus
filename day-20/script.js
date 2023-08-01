// sample data to store initial records

let data = [
    {name:"Rufus", age:22 },
    {name:"Ruban", age:25}
];

// function to display data in the table
function displayData() {
    const dataRows = document.getElementById("dataRows");
    dataRows.innerHTML ="";
    // debugger;

    data.forEach((value, index) => {
        const row = `
        <tr>
            <td>${value.name}</td>
            <td>${value.age}</td>
          <td>
            <button class="btn btn-info edit-btn" data-index="${index}">Edit</button>   
            <button class="btn btn-danger delete-btn" data-index="${index}" >Delete</button>
          </td>
        </tr>
        `;
        dataRows.insertAdjacentHTML("beforeEnd",row)
    })
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    
    const name = nameInput.value;
    const age = ageInput.value;

    
    // add data to the arrray
    data.push({ name, age });

    // clear form fields
    nameInput.value ="";
    ageInput.value = "";

    //display updated  data in the table
    displayData();
}

//  function to handle delete button  click
function handleDeleteClick(event) {
   const index = event.target.getAttribute("data-index");
   data.splice(index, 1)
   displayData();
}

//  function to handle edit button  click
    function handleEditClick(event) {
        const index = event.target.getAttribute("data-index");
        const record = data[index];
    
   const nameInput = document.getElementById("name")
   const ageInput = document.getElementById("age")

   nameInput.value = record.name;
   ageInput.value = record.age;

   data.splice(index, 1);
   displayData();
}

//attach event listeners
document
    .getElementById("crudForm")
    .addEventListener("submit",handleFormSubmit);

document.getElementById("dataRows").addEventListener("click", (s) => {
    // alert(event.target.classList)
    if(event.target.classList.contains("delete-btn")) {
        // alert("Delete button clicked!!!");
        handleDeleteClick(event);
    } else if (event.target.classList.contains("edit-btn")) {
        handleEditClick(event);
    }
});


displayData();