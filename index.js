let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", add);
function add() {
  let taskName = prompt("أدخل النص");
  document.getElementById("tasks").innerHTML += `
            <!-- TASK -->
            <div class="task">
              <!-- TASKS INFO -->
              <div class="taskInfo">
                <h2>${taskName}</h2>
                <div>
                  <span class="material-symbols-outlined"></span>
                  calendar_month

                  <span> 10/2/2002 </span>
                </div>
              </div>

              <!--// TASKS INFO //-->

              <!-- TASKS ACTIONS -->

              <div class="actions">
                <button class="circular deleteBtn">
                  <span class="material-symbols-outlined"> delete </span>delete
                </button>
                <button class="circular checkBtn">
                  <span class="material-symbols-outlined"> check </span>check
                </button>
                <button class="circular editBtn">
                  <span class="material-symbols-outlined"> edit </span>edit
                </button>
              </div>

              <!--// TASKS ACTIONS //-->
            </div>
            <!--// TASK //-->
          </div>
          <!--// TASKS //-->
  
  
  
  `;
}
