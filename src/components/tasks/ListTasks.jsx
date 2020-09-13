import React, {useContext} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import ContextProject from '../../context/projects/ContextProject'
import TaskContext from '../../context/tasks/TaskContext'
import Task from './Task'

const ListTasks = () => {

    const {currentProject, deleteProject} =  useContext(ContextProject)
    const {projectTasks} = useContext(TaskContext)
    console.log(currentProject)
    if(!currentProject){
        return <h2>Please choose one project</h2>
    } 
    const [project] = currentProject




    const deleteProject_= () => {
        deleteProject(project._id)
    }
    return ( 
        <>
            <h2>{project.name}</h2>
            <ul className='listado-tareas'>
                {
                    projectTasks.length === 0 
                ?
                    (
                        <li className="tarea">There are not tasks</li>
                    )
                : 
                    <TransitionGroup>
                        {
                            projectTasks.map(task => (
                                <CSSTransition
                                    key={task.id}
                                    timeout={800}
                                    classNames='tarea'
                                >
                                    <Task
                                        task={task}
                                    />
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                } 
            </ul>
            <button
                type='button'
                className='btn btn-eliminar'
                onClick={deleteProject_}
            >
                Delete Project
            </button>
        </>
     );
}
 
export default ListTasks;