import React, {useContext, useState, useEffect} from 'react'

import ContextProject from '../../context/projects/ContextProject'
import TaskContext from '../../context/tasks/TaskContext'
const TaskForm = () => {

    const {currentProject} = useContext(ContextProject) 
    const {addTask, errorTask, errorStatus, currentTask, getTasks, updateTask} = useContext(TaskContext) 
    //Effect which detect if there is one task selected
    useEffect(()=> {
        if(currentTask !== null){
            setTask(currentTask)
        }else{
            setTask({
                name:''
            })
        }
    },[currentTask])
    //Local state
    const [task, setTask] = useState({
        name:''
    })
    const {name} = task

    if(!currentProject) return null

    //Handle the changes on the input
    const handleChange = e =>{
        setTask({
            ...task,
            [e.target.name]:e.target.value
        })
    } 
    const [project] = currentProject

    const handleSubmit = e =>{
        e.preventDefault()
        if(name.trim()=== ''){
            errorTask()
            return
        }
        if(currentTask === null){
            addTask({
                ...task,
                status:false,
                projectId:project.id
            })
        }else{
            updateTask(task)
        }
        setTask({
            name:''
        })
        getTasks(project.id)
    }
    
    return ( 
        <div className="formulario">
            <form  onSubmit={handleSubmit}>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className='input-text'
                        placeholder='Name of Task'
                        name='name'
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        className='btn btn-primario btn-submit btn-block'
                        value={currentTask ? 'Edit task': 'Add task'}
                    />
                </div>
                
                {
                    errorStatus 
                ?
                    <div className="alert-error mt-5">All fields are mandatory</div>  
                :
                     null 
                }
            </form>
        </div>
     );
}
 
export default TaskForm;