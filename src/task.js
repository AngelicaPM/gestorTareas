//Lista de tareas
let tasks= JSON.parse(localStorge.getItem("tasks")) || [];

// Funcion para llevar las tareas
export const getTasks = () => tasks;

//Funcion para agregar una tarea

export const addTasks = (task) =>{
    const newTask = {
        id: Date.now (),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

};
