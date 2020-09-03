import React from 'react'

import Task from './Task'
const ListTasks = () => {
    const tasks = [
        {name:'Choose the server', status:true},
        {name:'add every coder to buil porject', status:true},
        {name:'make the desing to porejct', status:true}
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
                        <Task task={task}/>
                    ))
                }
            </ul>
        </>
     );
}
 
export default ListTasks;