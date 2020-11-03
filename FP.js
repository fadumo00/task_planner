

// //prevents form from being submitted
// document.submitButton.addEventListener('submit', (e) => {
//     e.preventDefault();
// //calls function that checks all the inputs
//     checkInputs();
// })

document.querySelector('#submitButton').addEventListener('click', function() {
    const inputName= document.getElementById('name').value;
    const assignedBy= document.getElementById('assignedTo').value;
    const description= document.getElementById('description').value;
    const date= document.getElementById('date').value;
    const status= document.getElementById('status').value;
    
    let isValid = validateTasForm(inputName,assignedBy,description,date,status);
    console.log("is valid outcome", isValid);
    if(isValid == true){
        //add task to array
        //populate card. AddTask function call 
    }
    
});

// function checkInputs(){
//     //gets value from all the inputs
//     const nameValue= name.value;
//     const assignedToValue= assignedTo.value;
//     const descriptionValue= description.value;
//     const dateValue= date.value;
//     const statusValue= status.value;

// }

function validateTasForm(nameValue,assignedToValue,descriptionValue,dateValue,statusValue) {
    let isValid=false;
    //name validation
    if(nameValue.length > 8 && nameValue.length != -1) {
        isValid=true;
    } else {
        isvalid=false;
        document.getElementById=("nameError").innerHTML ="Text needs to be more than 8 characters!"
        alert("Not enough characters")
    }
    //assigned to validation
    if(assignedToValue.length > 8 && assignedToValue.length != -1) {
        isValid= true;
    } else {
        isValid=false;
        document.getElementById=("assignedToError").innerHTML = "Text needs to be more than 8 characters!"
    }
    //description validation
    if(assignedToValue.length > 20 && assignedToValue.length != -1) {
        isValid= true;
    } else {
        isValid=false;
        document.getElementById=("descriptionError").innerHTML = "Text needs to be more than 20 characters!"
    }
    //date validation
    if( assignedToValue.length != -1) {
        isValid= true;
    } else {
        isValid=false;
        document.getElementById=("dateError").innerHTML = "please enter date!"
    }
    //status validation
    if(assignedToValue.length > 8 && assignedToValue.length != -1) {
        isValid= true;
    } else {
        isValid=false;
        document.getElementById=("statusError").innerHTML = "Text needs to be more than 8 characters!"
    }

    return isValid;

}