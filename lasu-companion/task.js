const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn");

taskForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.className = "task-btn";
  completeBtn.onclick = () => li.classList.toggle("completed");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "task-btn";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = "";
});

clearAllBtn.addEventListener("click", function() {
  taskList.innerHTML = "";
});
