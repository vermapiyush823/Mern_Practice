const addTask = ()=>{
    const input = document.querySelector("#task");
    console.log(input.value);
    const newTask = document.createElement("li");
    newTask.innerText = input.value;
    console.log(newTask);
    const task = document.querySelector("#tasks");
    task.appendChild(newTask);
    input.value = "";
};