import React, { useContext, useEffect } from 'react';
import ListTasks from '../tasks/ListTasks'
import Sidbar from '../layouts/Sidebar';
import Navbar from '../layouts/Navbar';
import TaskForm from '../tasks/TaskForm';
import authContext from '../../context/auth/authContext'


const Projects = () => {

    const {userAuthenticated} = useContext(authContext)

    useEffect(() => {
        userAuthenticated()
        //eslint-disable-next-line
    },[])
    return ( 
        <div className="contenedor-app">
            <Sidbar/>
            <div className="seccion-principal">
                <Navbar/>
                <main>
                     <TaskForm/>
                    <div className="contenedor-tareas">
                        <ListTasks/>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Projects;