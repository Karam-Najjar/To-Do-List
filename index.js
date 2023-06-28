let currentDate = new Date().toLocaleDateString();
let addBtn = document.getElementById("addBtn");
let idCounter = 1;

document.getElementById("tasks").innerHTML = "";

addBtn.addEventListener("click", add);
function add() {
  let taskName = prompt("أدخل النص");
  let tasks = {
    name: taskName,
    date: currentDate,
  };

  if (taskName.trim() === "") {
    alert("الرجاء ادخال نص");
    return;
  }
  let newId = idCounter;
  idCounter++;

  let temString = `            <!-- TASK -->
            <div class="task">
              <!-- TASKS INFO -->
              <div class="taskInfo">
                <h2>${tasks.name}</h2>
                <div>
                  <span class="material-symbols-outlined">
                    calendar_today
                  </span>

                  <span>${tasks.date}</span>
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
          </div>
          <!--// TASKS //-->`;
  document.getElementById("tasks").innerHTML += temString;
}
// test
