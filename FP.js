

document.querySelector('#submitButton').addEventListener('click', function() {
    const name= document.getElementById('name').value;
    const assignedTo= document.getElementById('assignedTo').value;
    const description= document.getElementById('description').value;
    const date= document.getElementById('date').value;
    const status= document.getElementById('status').value;
    
    let isAllValid = validateTaskForm(name,assignedTo,description,date,status);
    console.log("is valid outcome", isAllValid);
    if(isAllValid == true){
        newTaskObject(name,assignedTo,description,date,status, checkObject.allTasks)
        let newTaskIndex = checkObject.allTasks.length-1
        //test
        console.log(checkObject.allTasks[newTaskIndex])
        checkObject.addTask(checkObject.allTasks[newTaskIndex])
       
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

//deleting cards

document.addEventListener('click', function(event){
    const isButton = (event.target.nodeName == 'BUTTON');
    if(isButton) {
        const element = event.target;
        console.log(element);
        let job = element.attributes.job.value;
        if (job == "deleteTask") {
          checkObject.deleteTask(element);
        }
    }  
  
  });



//deleting cards

// document.addEventListener('click', function(event){
//     const element = event.target;
//     checkObject.deleteTasks(element);
    

// })





function validateTaskForm(name,assignedTo,description,date,status) {
    let isValid=false;
    //name validation
    if(name.length > 3 && name.length != -1) {
        isValid=true;
    } else {
        isvalid=false;
        document.getElementById=("nameError").innerHTML ="Text needs to be more than 8 characters!"
        alert("Not enough characters for name!")
    }
    //assigned to validation
    if(assignedTo.length > 3 && assignedTo.length != -1) {
        isValid= true;
    } else {
        isValid=false;
        document.getElementById=("assignedToError").innerHTML = "Text needs to be more than 8 characters!"
        alert("Not enough characters to assigned!")
    }
    //description validation
    if(description.length > 10 && assignedTo.length != -1) {
        isValid= true;
    } else {
        isValid=false;
        document.getElementById=("descriptionError").innerHTML = "Text needs to be more than 20 characters!"
        alert("Not enough characters for description!")
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

    //logical error here, as long as at least one validation check it true it will 
    //still add the item. 
}

function validateAllTaskForm(isValid) {
    let isAllValid= false
    if((name.length >= 3) && (assignedTo.length >= 3) && (description.length >=10) && (date) && (status != 'Choose...')){
        isAllValid =true;
    }

    return isAllValid; 
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

    localStorage.setItem("taskArray", JSON.stringify(checkObject.allTasks))
    return checkObject;
}

class TaskManager {
    constructor(name) {
        this.allTasks = [];
        this.name = name;
        
    }
    getAllTasks() {
        console.log(this.allTasks);
    }

    addTask(taskObject){
//An object from the array needs to be passed in for it to work
 
       let cardHTML =          `<div class="col-4" taskID="${taskObject.ID}">    
                             <div class="card">
                                 <ul class="list-group list-group-flush bg-warning">
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
                                 <button job="deleteTask" type="button" class="btn btn-warning" deleteID="${taskObject.ID}">Delete</button>
                             </div>
                           </div> `

                    let cardsHTMLrow = document.querySelector('#cardSection');
                    cardsHTMLrow.innerHTML += cardHTML ;

                    let listHTML = ` <a href="#" class="list-group-item list-group-item-action flex-column align-items-start bg-warning" taskID="${taskObject.ID}">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Assigned To: ${taskObject.assignedTo} </h5>
                            <small>Due Date: ${taskObject.date} </small>
                        </div>
                        <small>Status: ${taskObject.status}</small>
                        </a>`

        let listHTMLrow = document.querySelector('#summaryTask');
        listHTMLrow.innerHTML += listHTML;
                    

    }
    deleteTask(element) {
    //removes item from the array
        let thistaskID = element.attributes.deleteID.value;
        for(let i=0; i < this.allTasks.length; i++){
            if(this.allTasks[i].ID == thistaskID){
                this.allTasks.splice(i,1)
                localStorage.setItem("taskArray", JSON.stringify(checkObject.allTasks))
            }
        }
    //removes card
        element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode)
    //removes small card

    let elementsA = document.querySelectorAll('a');
    for(let i=0; i < elementsA.length; i++) {
        element = elementsA[i];
        if(element.attributes.taskID.value == thistaskID) {
            element.parentNode.removeChild(element);
        }
    }
    
        }

    }

    //creating task manager object
let checkObject = new TaskManager("taskNameExample");


//this gets the data back from local storage
let dataReturned = localStorage.getItem("taskArray");

if(dataReturned){
    checkObject.allTasks = JSON.parse(dataReturned);
    populatePage(checkObject.allTasks)
} else {
    checkObject.taskArray = [];
}


function populatePage(array){
    for(let i=0; i < array.length; i++){
        checkObject.addTask(array[i]);
    }
}



