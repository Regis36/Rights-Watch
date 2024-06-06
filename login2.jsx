import React from 'react' ; 
import  GoogleIcon  from '@mui/icons-material/Google'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import "./login2.css"; 
//import img2 from "../Img/binoculars.jpeg";


export default function Login2() { 
    return (
        <div className="login2">
            <div className="loginwrapper">
                
                <div className="loginleft">
                {/* <div className='login-image'>
                    <img src={img2} alt='Rights Watch'></img> 
                </div> */}
                    <h3 className="loginlogo">RIGHTS WATCH </h3>
                    <span className="logindesc"> 
                    Learn about, Connect about, talk about <b>Human Rights</b>
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <div className='Caption'>
                            "Defenders of the internet. Watchers of Rights"
                        </div>
                    
                        <input className='Login-input' type= "text" placeholder = "username/email" />
                        <input className='Login-input' type= "password" placeholder = "password" />

                        <button className="LoginButton">
                            Log in 
                        </button>

                        <span className="loginForgot"> Forgot Password?</span>
                        <b><p className = "text"> Or login using</p></b> 
                            
                            <GoogleIcon/> <FacebookIcon/> 
                            {/* <div className="Google"> <FacebookIcon/> </div> */}

                        <b><p className = "text"> Don't have an account?</p></b> 

                        <button className="RegisterButton">
                            <a href="/signup">Register </a> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}