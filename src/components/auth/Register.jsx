import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Register= () => {

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
        console.log(email, password, passwordConfirm, name)
    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Register</h1>
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