import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
            <h2>Registration: Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br/>
                    <input type="password" name="" id="" placeholder="password" />
                    <br/>
                    <input type="password" name="" id="" placeholder="password" />
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
                <p>
                    Already existing account? <Link to="/login">login</Link>
                </p>
                <div>-------or--------</div>
                <button className='btn-regular'>Google sign in</button>
            </div>
        </div>
    );
};

export default Register;