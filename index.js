let currentDate = new Date().toLocaleDateString();
let idCounter = 0;
let isChecked = false;

window.addEventListener("load", function () {
  let storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    document.getElementById("tasks").innerHTML = storedTasks;
    idCounter = document.querySelectorAll(".task").length;
  }
});

document.getElementById("tasks").innerHTML = "";
document.getElementById("addBtn").addEventListener("click", addTask);
document.getElementById("tasks").addEventListener("click", deleteTask);
document.getElementById("tasks").addEventListener("click", editTask);
document.getElementById("tasks").addEventListener("click", checkTask);

function addTask() {
  let taskName = prompt("Insert the task name");
  // cancel case
  if (taskName == null) {
    return;
  }
  // Empty task name case
  if (taskName.trim() == "") {
    alert("Please insert a valid name");
    return;
  }
  idCounter++;
  let taskString = `
    <!-- TASK -->
    <div id="task-${idCounter}" class="task">
      <!-- TASKS INFO -->
      <div class="taskInfo">
        <h2 id="name-${idCounter}">${taskName}</h2>
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
        <button id="delete-${idCounter}" class="circular deleteBtn">
          <span class="material-symbols-outlined"> delete </span>
        </button>
        <button id="check-${idCounter}" class="circular checkBtn">
          <span class="material-symbols-outlined"> check </span>
        </button>
        <button id="edit-${idCounter}" class="circular editBtn">
          <span class="material-symbols-outlined"> edit </span>
        </button>
      </div>
      <!--// TASKS ACTIONS //-->
    </div>
    <!--// TASK //-->
  `;
  document.getElementById("tasks").innerHTML += taskString;

  localStorage.setItem("tasks", document.getElementById("tasks").innerHTML);
}

function deleteTask(e) {
  if (e.target.closest(".deleteBtn")) {
    let deleteBtn = e.target.closest(".deleteBtn");
    let taskId = deleteBtn.id.split("-")[1];
    let taskDiv = document.getElementById(`task-${taskId}`);
    if (confirm("Are you sure?")) {
      taskDiv.remove();

      localStorage.setItem("tasks", document.getElementById("tasks").innerHTML);
    }
  }
}

function editTask(x) {
  if (x.target.closest(".editBtn")) {
    let editBtn = x.target.closest(".editBtn");
    let taskId = editBtn.id.split("-")[1];
    let taskNameElement = document.getElementById(`name-${taskId}`);
    let defaultName = taskNameElement.innerHTML;
    let taskName = prompt("Insert the task name", defaultName);
    if (taskName.trim() == "") {
      alert("Please insert a valid name");
      return;
    }
    document.getElementById(`name-${taskId}`).innerHTML = taskName.trim();

    localStorage.setItem("tasks", document.getElementById("tasks").innerHTML);
  }
}

function checkTask(x) {
  if (x.target.closest(".checkBtn")) {
    let checkBtn = x.target.closest(".checkBtn");
    let taskId = checkBtn.id.split("-")[1];
    let taskElement = document.getElementById(`task-${taskId}`);

    let currentColor = taskElement.style.backgroundColor;
    let newColor = currentColor === "green" ? "#ffffff" : "green";

    taskElement.style.backgroundColor = newColor;

    let iconElement = checkBtn.querySelector(".material-symbols-outlined");
    iconElement.textContent =
      newColor === "#ffffff" ? "check" : "check_box_outline_blank";

    localStorage.setItem("tasks", document.getElementById("tasks").innerHTML);
  }
}
