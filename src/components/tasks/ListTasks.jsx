import React from 'react'

import Task from './Task'
const ListTasks = () => {
    const tasks = [
        {name:'Choose the server', status:false},
        {name:'add every coder to buil porject', status:true},
        {name:'make the desing to porejct', status:false}
    ]
    return ( 
        <>
            <h2>Project: Virtual Store</h2>
            <ul className='listado-tareas'>
                {
                    tasks.length === 0 
                ?
                    (
                        <li className="tarea">There are not tasks</li>
                    )
                : 
                    tasks.map(task => (
                        <Task 
                            task={task}
                        />
                    ))
                } 
            </ul>
            <button
                type='button'
                className='btn btn-eliminar'
            >
                Delete Project
            </button>
        </>
     );
}
 
export default ListTasks;