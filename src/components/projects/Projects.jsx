import React from 'react';
import Sidbar from '../layouts/Sidebar';
import Navbar from '../layouts/Navbar';
import TaskForm from '../tasks/TaskForm';
const Projects = () => {
    return ( 
        <div className="contenedor-app">
            <Sidbar/>
            <div className="seccion-principal">
                <Navbar/>
                <main>
                     <TaskForm/>
                    <div className="contenedor-tareas">

                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Projects;