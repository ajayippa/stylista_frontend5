import React from 'react';
import axios from "axios";
import { useState,} from "react";
import  { useNavigate } from "react-router-dom";


export default function Usersignin() {
  const navigate = useNavigate();

  function handleClick() {
   navigate("/Usersignout");
  }

  const [errorMessage, setErrorMessage] = useState('');

  const[check,setCheck] = useState({
    email:""
  });

  const {email} =check;

  const onInputChange = (e) => {
    setCheck({ ...check,[e.target.name]:e.target.value});
  };

  const dataToSend = {   
    email:check.email
};

const onSubmit = async (e) => {
        
  e.preventDefault();
  
  await axios.get(`${process.env.REACT_APP_BACKEND_PORT}/sign/userStatus/${email}`).then((res) =>{
    if(res.data === "success")
    {
      navigate('/Usernewpassword',{state: dataToSend});

    }
    else{

      setErrorMessage(res.data);
    }
  });
}



  return (
    <>
  <div className='Userforgetcontainer'>
    <div className='forget'>
      <form onSubmit={(e)=>onSubmit(e)}>
     
        <h2 >Enter Your Email Id</h2>
        {errorMessage && <p style={{color:"red",fontWeight:'bold',marginBottom:"30px"}}>{errorMessage}</p>}

        <div className='Userforgetinputbox'>
                    <input type='text' required="required" name='email' value={email} onChange={(e) => onInputChange(e)}></input>
                    <span>Enter User ID</span>
                    <i></i>
                </div>
                <div className="forgetsubmit">
            <input type="submit" value="Submit" ></input>
          </div>
          <div className='usernavigate'>
                  <text>You Dont Have An Account?</text>
                <div className='userforgetnew'>
                <p className='userforget' onClick={handleClick}>Signup</p>
                </div>
                </div>
      </form>
    </div>
  </div>
    </>
    
  );
}
