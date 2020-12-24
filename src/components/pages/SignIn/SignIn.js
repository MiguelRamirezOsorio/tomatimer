import React from 'react'
import './SignIn.css';
import img from './tomatito.png';

export default function SingIn() {
    return (
        <div>
            <div className='login'>  
                <div className='login-screen'>
                    <div className='app-title'>
                    <h1>Sign In</h1>
                    <img className='imagen' src={img} alt="imagen"></img>
                    </div>
                    <div className='login-form'>
                        <div className='control-group'>
                            <input type={Text} 
                            className='login-field' 
                            value='' 
                            placeholder='username' 
                            id='login-name'></input>
                            <label className="login-field-icon fui-user"
                            for='login-name'></label>
                        </div>
                        <div className='control-group'>
                            <input type="password" 
                            className='login-field' 
                            value='' 
                            placeholder='password' 
                            id='login-pass'></input>

                            <label className="login-field-icon fui-lock" 
                            for='login-pass'></label>
                        </div>
                        <a className="btn btn-primary btn-large btn-block" 
                        href="#">Submit</a>
                        <a className='login-link' 
                        href='#'>Lost your password?</a>
                    </div>
                </div>
            </div>
        </div>    
    )
}
