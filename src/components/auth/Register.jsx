import React,{useState, useContext, useEffect} from 'react'
import alertContext from '../../context/alerts/alertContext'
import authContext from '../../context/auth/authContext'
import {Link} from 'react-router-dom'


const Register= (props) => {

    //Context
    const {alert, showAlert} = useContext(alertContext)
    const {authenticated, message, registerUser} = useContext(authContext)

    useEffect(()=>{
        if(authenticated){
            props.history.push('/projects')
        }
        if(message){
            showAlert(message.msg, message.category)
        }
    },[message, authenticated, props.history])

    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        passwordConfirm:''
    })

    const {name, email, password, passwordConfirm} = user

    const onChange = e =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        
        //Check for empty fields
        if( name.trim() === '' ||
            email.trim() ==='' ||
            password.trim() === '' ||
            passwordConfirm === '' ){

                showAlert('Every field is madatory', 'alert-error')
                return
        }
        //Password must have more than six characters
        if(password.length < 6){
            showAlert('The password must have more than six cahracters', 'alert-error')
        }
       //The passwords must be the same
        if(password !== passwordConfirm){
            showAlert('The password must be the same', 'alert-error')
            return
        }
        
        registerUser({
            name,
            email,
            password
        })

    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Register</h1>
                {
                    alert 
                ?
                    (
                        <div className={`alert ${alert.category}`}>{alert.msg}</div>
                    )
                :
                    null 
                }                
                <form  onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            id='name'
                            placeholder='Insert your name'
                            name='name'
                            value={name}
                            onChange={onChange}
                            autoComplete='off'
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email"
                            id='email'
                            placeholder='Insert your email'
                            name='email'
                            value={email}
                            onChange={onChange}
                            autoComplete='off'
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id='password'
                            placeholder='Insert your password'
                            name='password'
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password-confirm">Confirm Password</label>
                        <input 
                            type="password"
                            id='password-confirm'
                            placeholder='Insert your password'
                            name='passwordConfirm'
                            value={passwordConfirm}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className='btn btn-primario btn-block'
                               value='Register' 
                        />
                    </div>
                </form>
                <Link to={'/'} className='enlace-cuenta'>
                    Go to Log In
                </Link>
            </div>
        </div>
     );
}
 
export default Register;