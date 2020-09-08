import React, {useContext} from 'react'

import TaskContext from '../../context/tasks/TaskContext'
import ContextProject from '../../context/projects/ContextProject'

const Task = ({task}) => {
    const {currentProject} = useContext(ContextProject)

    const {deleteTaskById, getTasks} = useContext(TaskContext)
    //Delete a task
    const deleteTask = id => {
        deleteTaskById(id)
        getTasks(currentProject[0].id)
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
                    >
                       Finished
                    </button>
                :      
                    <button
                        type='button'
                        className='incompleto'
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