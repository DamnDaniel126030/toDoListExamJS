document.addEventListener("DOMContentLoaded", () => {
    const toDoList = new ToDo();
    const taskForm = document.getElementById("taskForm");
    let taskOutput = document.getElementById("taskOutput");
    const taskNames = [];
    let outArray = []
    let out;

    taskForm.addEventListener("submit", event => {
        taskOutput.innerHTML = "";
        event.preventDefault();
        const addTaskInput = document.getElementById("addTaskInput");
        const taskName = addTaskInput.value
        taskNames.push(taskName);
        toDoList.addTask(taskName);
        toDoList.viewTasks();
        out = `
        <tr>
            <td>${taskName}</td>
            <td>Ongoing</td>
            <td><button onclick="completeTask(${taskNames.indexOf(taskName)})" class="btn btn-info" type="button">Complete</button></td>
            <td><button onclick="removeTask(${taskNames.indexOf(taskName)})" class="btn btn-danger" type="button">Remove</button></td>
        </tr>
        `
        outArray.push(out)
        outArray.forEach(element => {
            taskOutput.innerHTML += element;
        })

            
                
        });
    

    function completeTask(index){
        toDoList.completeTask(index);
        taskOutput.innerHTML = "";
        outArray[index] = 
        out = `
                <tr>
                    <td style="text-decoration: line-through;">${taskNames[index]}</td>
                    <td>Completed</td>
                    <td><button onclick="removeTask(${taskNames.indexOf(taskNames[index])})" class="btn btn-danger" type="button">Remove</button></td>
                </tr>
                `
        outArray.forEach(element => {
            taskOutput.innerHTML += element;
        })
    };

    function removeTask(index){
        toDoList.removeTask(index);
        taskOutput.innerHTML = "";
        outArray[index] = "";
        outArray.forEach(element => {
            taskOutput.innerHTML += element;
        })
    };
    
    window.completeTask = completeTask;
    window.removeTask = removeTask;;
});
