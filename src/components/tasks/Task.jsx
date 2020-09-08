import React, {useContext} from 'react'

import TaskContext from '../../context/tasks/TaskContext'
import ContextProject from '../../context/projects/ContextProject'

const Task = ({task}) => {
    const {currentProject} = useContext(ContextProject)

    const {deleteTaskById, getTasks, changeStatusTask} = useContext(TaskContext)
    //Delete a task
    const deleteTask = id => {
        deleteTaskById(id)
        getTasks(currentProject[0].id)
    }
    //Change status task
    const changeStatus = task => {
        if(task.status === true){
            task.status = false
        }else {
          task.status = true
        }
        changeStatusTask(task)
    }
    return ( 
        <li className='tarea sombra'>
            <p>{task.name}</p>
            <div className="estado">
                {
                    task.status 
                ?
                    <button
                        type='button'
                        className='completo'
                        onClick={()=> changeStatus(task)}
                    >
                       Finished
                    </button>
                :      
                    <button
                        type='button'
                        className='incompleto'
                        onClick={()=> changeStatus(task)}
                    >
                        To do
                    </button>
                }

            </div> 
            <div className="acciones">
                <button
                    className='btn btn-primario'
                    type='button'
                >
                    Edit
                </button>
                <button
                    className='btn btn-secundario'
                    type='button'
                    onClick={()=> deleteTask(task.id)}
                >
                    Delete
                </button>                
            </div>
        </li>
     );
}
 
export default Task;