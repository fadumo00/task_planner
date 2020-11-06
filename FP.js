

// //prevents form from being submitted
// document.submitButton.addEventListener('submit', (e) => {
//     e.preventDefault();
// //calls function that checks all the inputs
//     checkInputs();
// })

document.querySelector('#submitButton').addEventListener('click', function() {
    const name= document.getElementById('name').value;
    const assignedTo= document.getElementById('assignedTo').value;
    const description= document.getElementById('description').value;
    const date= document.getElementById('date').value;
    const status= document.getElementById('status').value;
    
    let isValid = validateTaskForm(name,assignedTo,description,date,status);
    console.log("is valid outcome", isValid);
    if(isValid == true){
        newTaskObject(name,assignedTo,description,date,status,inputTaskArray)
        let newTaskIndex = checkObject.allTasks.length-1
        //test
        console.log(checkObject.allTasks[newTaskIndex])
        checkObject.addTask(checkObject.allTasks[newTaskIndex])
       
        //add task to array
        //populate card. AddTask function call 
    }
    console.log(inputTaskArray);
});

// function checkInputs(){
//     //gets value from all the inputs
//     const nameValue= name.value;
//     const assignedToValue= assignedTo.value;
//     const descriptionValue= description.value;
//     const dateValue= date.value;
//     const statusValue= status.value;

// }

function validateTaskForm(name,assignedTo,description,date,status) {
    let isValid=false;
    //name validation
    if(name.length > 8 && name.length != -1) {
        isValid=true;
    } else {
        isvalid=false;
        document.getElementById=("nameError").innerHTML ="Text needs to be more than 8 characters!"
        alert("Not enough characters!")
    }
    //assigned to validation
    if(assignedTo.length > 8 && assignedTo.length != -1) {
        isValid= true;
    } else {
        isValid=false;
        document.getElementById=("assignedToError").innerHTML = "Text needs to be more than 8 characters!"
        alert("Not enough characters!")
    }
    //description validation
    if(description.length > 20 && assignedTo.length != -1) {
        isValid= true;
    } else {
        isValid=false;
        document.getElementById=("descriptionError").innerHTML = "Text needs to be more than 20 characters!"
        alert("Not enough characters!")
    }
    //date validation
    if( date.length != -1) {
        isValid= true;
    } else {
        isValid=false;
        document.getElementById=("dateError").innerHTML = "please enter date!"
        alert("Please enter a date!")
    }
    //status validation
    
    if (status != 'Choose...') {
        isValid= true;
    } else {
        isValid=false;
        document.getElementById=("statusError").innerHTML = "You must select a status"
        alert("Select a status!")
    }

    return isValid;

}






function newTaskObject (name,assignedTo,description,date,status,inputTaskArray) {
    checkObject.allTasks.push({
        "name" : name,
        "assignedTo" : assignedTo,
        "description" : description,
        "date" : date,
        "status" : status,
        "ID" : `${inputTaskArray.length < 1 ? 1 : inputTaskArray.length+1}`
    })
 return checkObject;
}

class TaskManager {
    constructor(array,name) {
        this.allTasks = array;
        this.name = name;
        
    }
    getAllTasks() {
        console.log(this.allTasks);
    }

    addTask(taskObject){
//An object from the array needs to be passed in for it to work
 
       let cardHTML =          `<div class="col-4" taskID="${taskObject.ID}>    
                             <div class="card bg-warning">
                                 <ul class="list-group list-group-flush">
                                 <h6 class="card-title">Name:</h6>
                                 <li class="list-group-item">${taskObject.name}</li>
                                 <h6 class="card-title">Assigned To:</h6>
                                 <li class="list-group-item">${taskObject.assignedTo}</li>
                                 <h6 class="card-title">Description:</h6>
                                 <li class="list-group-item">${taskObject.description}</li>
                                 <h6 class="card-title">Due Date:</h6>
                                 <li class="list-group-item">${taskObject.date}</li>
                                 <h6 class="card-title">Status:</h6>
                                 <li class="list-group-item">${taskObject.status}</li>
                                 </ul>
                             </div>
                           </div> `

                    let cardsHTMLrow = document.querySelector('#cardSection');
                    cardsHTMLrow.innerHTML += cardHTML ;
                    

    }
    deleteTasks() {

    }

}


//creating an empty array so that we can input new tasks

let inputTaskArray = [];

//creating task manager object
let checkObject = new TaskManager(inputTaskArray,"taskNameExample");
console.log(checkObject.name);
