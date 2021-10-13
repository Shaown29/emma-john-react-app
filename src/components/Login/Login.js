import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const{signInUsingGoogle}=useAuth();
    const location=useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from || '/shop';

    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(result =>{ 
            history.push(redirect_uri);
        })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br/>
                    <input type="password" name="" id="" placeholder="password" />
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
                <p>
                    new to ema-john? <Link to="/register">Create Account</Link>
                </p>
                <div>-------or--------</div>
                <button onClick={handleGoogleLogin} className='btn-regular'>Google sign in</button>
            </div>
        </div>
    );
};

export default Login;