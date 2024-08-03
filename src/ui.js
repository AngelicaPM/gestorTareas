//IMPORTAR LA FUNCIONPARA TRAER LAS TAREAS DEL lOCALSTORAGE getTask sirve para traer las tareas  del local 
import{getTasks} from "./task";

//Funcion para visualizar las tareas
//render es para permitir que un usuario lo vea ejemplo lo que hace con las tareas
export const renderTasks =()=>{
    const taskList = document.getElementById("task-list")
    //innerHTML ayuda a modificar en el HTML con JS
    taskList.innerHTML = "";
    const tasks = getTasks();
    tasks.forEach((task)=>{
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        if(task.completed === true) {
            li.classList.add("completed");
        }
        li.innerHTML = `
            ${task.text}
            <button class="delete"> Borrar </button>
            <button class="toggle"> ${task.completed === true ? "Regresar": "Completado"} </button>
        `;
        taskList.appendChild(li);
        });

};
