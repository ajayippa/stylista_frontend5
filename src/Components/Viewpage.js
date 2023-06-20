import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./User.css";
 const Viewpage  = () => {
    let navigate =useNavigate();
    const [errorMessage,setErrorMessage] =useState('');
    const[login,setLogin] = useState({
        email:"",
        password:"",

    });
    const{email,password} =login;
    const onInputChange =(e) =>{
        setLogin({...login,[e.target.name]:e.target.value});
    };
    // const dataTosend ={
    //     email:login.email
    // };
    const onsubmit = async (e) => {
        e.preventDefault();
        await axios.post(`${process.env.REACT_APP_BACKEND_PORT}/sign/login`,login).then((res)=>{
            if(res.data === "Success")
            {
                navigate("/Usersignin");
            }
            else{
                setErrorMessage(res.data);
            }
 });
}
  return (
<>
{/* <div className='backgroundimg'> */}
    {/* <img src='./images/background2.avif' alt=''></img> */}
<div className='container'>
    
    <div className='main'>
        <div className='leftside'>
            <form onSubmit={(e)=>onsubmit(e)}>
                <h2>USER</h2>
                <center>{errorMessage && <p style={{color:"red",fontWeight:'bold',fontSize:"13px"}}>{errorMessage}</p>}</center>
                <div className='inputBox'>
                    <input type='text' required="required" name='email' value={email} onChange={(e) => onInputChange(e)}></input>
                    <span>Username,Email</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input type="password" required="required" name='password' value={password} onChange={(e) => onInputChange(e)}></input>
                    <span>Password</span>
                    <i></i>
                </div>
                <div className='links'>
                    <Link  className="line" to='Usersignin'>Forget password</Link>
                </div>
                    <input type='submit' value="Login" ></input>
                    <text>New to Stylistaapp?</text>
                <div className='new'>
                    <Link  className="line1" to='Usersignout'>SIGNUP</Link>
                </div>
            </form>
        </div>
    </div>
{/* leftside.......................................................................................................................................         */}
        <div className='circle'>
            <div className='leftcircle'>
                <h3>STYL</h3>
            </div>
            <div className='middeline'></div>
            <div className='rightcircle'>
                <h3>ISTA</h3>
            </div>
        </div>
{/*rightside..........................................................................................................................................  */}
    <div className='main2'>
        <div className='Rightside'>
            <form>
                <h2>PROFESSIONAL</h2>
                <div className='inputBox2'>
                    <input type='text' required="required"></input>
                    <span>Username,Email</span>
                    <i></i>
                </div>
                <div className='inputBox2'>
                    <input type="password" required="required"></input>
                    <span>Password</span>
                    <i></i>
                </div>
                <div className='links2'>
                    <Link  className="line2" to='Professionalsigin'>Forget password</Link>
                </div>
                    <input type='submit' value="Login" ></input>
                    <text>New to Stylistaapp?</text>
                <div className='new1'>
                    <Link className='line3' to="Professionalsigout">SIGNUP</Link>
                </div>
            </form>
        </div>
    </div>
</div>
{/* </div> */}

</>
  )
}
export default Viewpage;
