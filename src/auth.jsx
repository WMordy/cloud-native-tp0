import React from 'react'
import handleLogin from './services/login'
import handleSignUP from './services/signup'
export default function AuthComp(props) {
    
    return (
        <div className = "container auth">
            <div className="auth-item" >
                <h1 id = "welcome-header">Welcome</h1>
            </div>
            <div className="auth-item" >
                <input id = "email" type = "email" placeholder = "Email" ></input>
            </div>
            <div className="auth-item" >
                <input id = "password" type = "password" placeholder = "Password" ></input>
            </div>
            <div className="buttons auth-item">
            <div className="auth-item" >
               <button id = "login" onClick = {(e)=>{
                   e.preventDefault()
                   handleLogin(document.getElementById("email").value,document.getElementById("password").value) 
               }}>Login</button>
               <button id = "signup" onClick = {(e)=>{
                   e.preventDefault()
                   handleSignUP(document.getElementById("email").value,document.getElementById("password").value)
               }}>SignUP</button>
            </div>
            </div>
          
        </div>
    )
}
