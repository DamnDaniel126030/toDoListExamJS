class ToDo{
    toDo = [];

    constructor(){
        this.toDo = [];
    }

    addTask(task){
        const toDoTask = [task, false]
        this.toDo.push(toDoTask);
    };

    // removeTask(task){
    //     const idx = this.#toDo.indexOf(task);
    //     this.#toDo.splice(idx);
    // };

    removeTask(index){
        this.toDo.splice(index, 1);
    };

    completeTask(index){
        this.toDo[index][1] = true;
    };

    viewTasks(){
        this.toDo.forEach(element => {
            console.log(element[0]);
            if (element[1]){
                console.log("Teljesített");
            }
            else{
                console.log("Folyamatban");
            };
        });
    };
}