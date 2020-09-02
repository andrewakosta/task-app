import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

    const [user, setUser] = useState({
        email:'',
        password:''
    })

    const {email, password} = user

    const onChange = e =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDeafault()
        console.log(email, password)
    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Log in</h1>
                <form  onSubmit={handleSubmit}>
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
                            placeholder='Insert yout password'
                            name='password'
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className='btn btn-primario btn-block'
                               value='Log in' 
                        />
                    </div>
                </form>
                <Link to={'/register'} className='enlace-cuenta'>
                    Get account
                </Link>
            </div>
        </div>
     );
}
 
export default Login;