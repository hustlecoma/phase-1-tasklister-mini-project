document.addEventListener("DOMContentLoaded", () => {
// your code here
  const form = document.querySelector("form");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    createTaskList(e.target.new_task_description.value);
    form.reset();
  });

});

// createTaskList function
function createTaskList(addItem) {

  let li = document.createElement("li");
  li.textContent = addItem;

  let taskItemBtn = document.createElement("button");
  let priority = document.getElementById("task-priority").value;

  taskItemBtn.addEventListener("click", deleteTaskItem);
  taskItemBtn.textContent = "X";

  li.appendChild(taskItemBtn);
  li.style.backgroundColor = priority;
    
  document.querySelector("#tasks").appendChild(li);
 }

// deleteTaskItem function
function deleteTaskItem(e) {
    e.target.parentNode.remove();
}