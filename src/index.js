// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

document.addEventListener("DOMContentLoaded", (e) => {
  // your code here

  const form = document.getElementById("create-task-form");

  const taskList = document.getElementById("tasks");

  const toDoContainer = document.querySelector(".priorityContainer");

  const inputField = document.getElementById("new-task-description");

  const newTaskBtn = document.getElementById("btn");
  const urgencyLevel = document.getElementById("priority-lvl")


  // Target the submit button with a click

  form.addEventListener("submit", (e) => {
    e.preventDefault();

  // ceate new tasks lists
  if(inputField.value === ''){
    alert("Please add you new task first")
  }else {
    const toDos = document.createElement("li");
    const taskDescription = inputField.value;

    const dltbutton = document.createElement("button");
    dltbutton.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
    toDos.appendChild(dltbutton)
  
    toDos.innerText = taskDescription;

    urgencyLevel,addEventListener('change', (e) => {
      if(urgencyLevel.value === 1){
        toDos.innerText.style.color = "red";

      } else if (urgencyLevel.value === 2){
        toDos.innerText.style.color = "amber";

      }else {
        toDos.innerText.style.color = "blue"
      }
    })


  
    taskList.appendChild(toDos);
    inputField.value = "";
  
    toDos.addEventListener("click", () => {
      toDos.style.textDecorationLine = "line-through";
    });


  
    
    toDos.addEventListener("dblclick", () => {
      taskList.removeChild(toDos);
    });
  }


    


    // Priority level




  });

});




// const renderedText = htmlElement.innerText;

// What the user types in

// The create task button

// Target the list where the new tasks will be appended

// Event listener for the submit button click
// A way to delete tasks
// Use the preventDefault to overide the forms  behaviour
// Append the tasks in the list
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("create-task-form");
//   const taskList = document.getElementById("tasks");
//   const inputField = document.getElementById("new-task-description");
//   const newTaskBtn = document.getElementsByClassName("btn");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//   });

//   newTaskBtn[0].addEventListener("click", () => {
//     const toDos = document.createElement("li");
//     const taskDescription = inputField.value;
//     toDos.innerText = taskDescription;
//     taskList.appendChild(toDos);
//     inputField.value = "";

//     toDos.addEventListener("click", () => {
//       toDos.style.textDecorationLine = "line-through";
//     });

//     function removeTasks() {
//       toDos.addEventListener("dblclick", () => {
//         taskList.removeChild(toDos);
//       });
//     }
//   });
// });
