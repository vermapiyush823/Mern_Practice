// const addTask = ()=>{
//     const input = document.querySelector("#task");
//     console.log(input.value);
//     const newTask = document.createElement("li");
//     newTask.innerText = input.value;
//     console.log(newTask);
//     const task = document.querySelector("#tasks");
//     task.appendChild(newTask);
//     input.value = "";
// };

const addTask = () => {
  document.querySelector("h2").style.display = "none";
  const taskDesc = document.querySelector("input");
  console.log(taskDesc.value);
  if(taskDesc.value ===""){
    alert("Please add any task!");
  }
  else{
  const task = document.querySelector("ul");
  const newTask = document.createElement("li");
  task.appendChild(newTask);
  const taskHeading = document.createElement("h3");
  taskHeading.innerText = "Task";
  const taskP = document.createElement("p");
  taskP.innerText = taskDesc.value;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    newTask.remove();
    if (task.childElementCount == 0) {
      document.querySelector("h2").style.display = "block";
    }
  });
  newTask.appendChild(taskHeading);
  newTask.appendChild(taskP);
  newTask.appendChild(deleteButton);
  taskDesc.value = "";
}
};
