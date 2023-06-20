import React, { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

function Usernewpassword() {
  let navigate =useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const [pass,setPass] = useState({
    newPassword:"",
    conformPassword:"",
  });

  const {newPassword,conformPassword} = pass;

  const onInputChange = (e) => {
    setPass({...pass,[e.target.name]: e.target.value});
  }
    

    const location = useLocation();
    const data1=location.state;

    const onSubmit = async (e) => {

      e.preventDefault();
      try {

      await axios.put(`${process.env.REACT_APP_BACKEND_PORT}/sign/updatePassword/${data1.email}`,pass).then((res) => {
        if(res.data === "success")
        {
          toast.success("Your Password has been Updated successfully");
          navigate('/');
        }
        else{
          setErrorMessage(res.data);
        }

      });
    } catch (error){
      if (error.response && error.response.data && error.response.data.errorMessage) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        setErrorMessage(['An error occurred. Please try again.']);
      }
    }
    }
  return (
    <>
  <div className='Usernewpasswordcontainer'>
    <div className='forget'>
      <form onSubmit={(e)=>onSubmit(e)}>
        <h2>Please Enter Your new Password</h2>
        {errorMessage && <p style={{color:"red",fontWeight:'bold' ,fontSize:"14px",marginBottom:"30px"}}>{errorMessage}</p>}

        <div className='Usernewpasswordinputbox'>
            <input type='password' required="required" name='newPassword' value={newPassword} onChange={(e) => onInputChange(e)}></input>
            <span>New password</span>
            <i></i>
        </div>
        <br></br>
        <div className='Usernewpasswordinputbox'>
            <input type='password' required="required" name='conformPassword' value={conformPassword} onChange={(e) => onInputChange(e)}></input>
            <span>Confirm password</span>
            <i></i>
        </div>
        <div className="newpaswordsubmit">
            <input type="submit" value="Submit" ></input>
        </div>
        
      </form>
    </div>
  </div>
    </>
  )
}

export default Usernewpassword;