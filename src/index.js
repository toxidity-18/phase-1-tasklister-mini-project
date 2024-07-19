document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const tasks = document.getElementById("tasks");
    const taskCount = document.getElementById("task-count");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const description = document.getElementById("new-task-description").value;
      const task = document.createElement("li");
      task.textContent = description;
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          task.classList.add("completed");
        } else {
          task.classList.remove("completed");
        }
      });
      task.prepend(checkbox);
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        task.remove();
        updateTaskCount();
      });
  
      task.appendChild(removeButton);
      tasks.appendChild(task);
      updateTaskCount();
      form.reset();
    });
  
    function updateTaskCount() {
      taskCount.innerText = tasks.children.length;
    }
  });
  
});