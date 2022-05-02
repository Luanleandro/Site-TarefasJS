const InputElement = document.querySelector(".new-task-input");
const AddTaskButton = document.querySelector(".new-task-button");
const taskContainer = document.querySelector(".task-container");

const validateInput = () => InputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputValid = validateInput();

  if (!inputValid) {
    return InputElement.classList.add("error");
  }

  const taskContentItem = document.createElement("div");
  taskContentItem.classList.add("task-item");

  const taskContent = document.createElement("p");
  taskContent.innerText = InputElement.value;


  taskContent.addEventListener("click", () => handleClick(taskContent));

  const taskDelete = document.createElement("i");
  taskDelete.classList.add("far");
  taskDelete.classList.add("fa-trash-alt");

  taskDelete.addEventListener("click", () =>
    handleDeleteClick(taskContentItem, taskContent)
  );

  taskContentItem.appendChild(taskContent);
  taskContentItem.appendChild(taskDelete);
  taskContainer.appendChild(taskContentItem);
};

const handleInputChange = () => {
  const inputValid = validateInput();

  if (inputValid) {
    return InputElement.classList.remove("error");
  }
};

const handleClick = (taskContent) => {
  const tasks = taskContainer.childNodes;
  for (const task of tasks) {
    if (task.firstChild.isSameNode(taskContent)) {
      task.firstChild.classList.toggle("completed");
    }
  }
};

const handleDeleteClick = (taskContentItem, taskContent) => {
  const tasks = taskContainer.childNodes;

  for (const task of tasks) {
    if (task.firstChild.isSameNode(taskContent)) {
      taskContentItem.remove();
    }
  }
};

AddTaskButton.addEventListener("click", () => handleAddTask());
InputElement.addEventListener("change", () => handleInputChange());
