let currentDate = new Date().toLocaleDateString();
let addBtn = document.getElementById("addBtn");
let idCounter = 1;

document.getElementById("tasks").innerHTML = "";

addBtn.addEventListener("click", add);

//GPT4//
document.getElementById("tasks").addEventListener("click", deleteTask);
//GPT4//

document.getElementById("tasks").addEventListener("click", editTask);

function add() {
  let taskName = prompt("Insert the task name");
  if (taskName.trim() == "") {
    alert("Please insert a valid name");
    return;
  }
  let newId = idCounter;
  idCounter++;
  let temString = `
      <!-- TASK -->
      <div id = "task-${newId}" class="task">
        <!-- TASKS INFO -->
        <div class="taskInfo">
          <h2>${taskName}</h2>
          <div>
            <span class="material-symbols-outlined">
              calendar_today
            </span>
            <span>${currentDate}</span>
          </div>
        </div>
        <!--// TASKS INFO //-->

        <!-- TASKS ACTIONS -->
        <div class="actions">
          <button id="delete-${newId}" class="circular deleteBtn">
            <span class="material-symbols-outlined"> delete </span>
          </button>
          <button id="check-${newId}" class="circular checkBtn">
            <span class="material-symbols-outlined"> check </span>
          </button>
          <button id="edit-${newId}" class="circular editBtn">
            <span class="material-symbols-outlined"> edit </span>
          </button>
        </div>
        <!--// TASKS ACTIONS //-->
      </div>
      <!--// TASK //-->
      `;
  document.getElementById("tasks").innerHTML += temString;
}

// GPT-4 //
function deleteTask(e) {
  if (e.target.closest(".deleteBtn")) {
    // Get the delete button and corresponding task div
    let deleteBtn = e.target.closest(".deleteBtn");
    let taskId = deleteBtn.id.split("-")[1];
    let taskDiv = document.getElementById(`task-${taskId}`);
    confirm("Are you sure??");
    // Remove the task div from the DOM
    taskDiv.remove();
  }
}
// Gpt-4 //

function editTask(x) {
  if (x.target.closest(".editBtn")) {
    let editBtn = x.target.closest(".editBtn");
    let taskId = editBtn.id.split("-")[1];
    let taskDiv = document.getElementById(`task-${taskId}`);
    let taskName = prompt("Insert the task name");
    if (taskName.trim() == "") {
      alert("Please imsert a valid name");
      return;
    }
  }
}
