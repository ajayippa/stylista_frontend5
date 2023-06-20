import { useState,} from "react";
import "./Userregister.css";
import axios from "axios";
import {  useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
// import DatePicker from "react-date-picker";


function Usersignout() {

  let navigate =useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const [register,setRegister]=useState({
    firstname:"",
    lastname:"",
    username:"",
    mobileNumber:"",
    email:"",
    password:"",
    conformpassword:"",
    date:"",
    gender:"",

  });
  
  const {firstname,lastname,username,mobileNumber,email,password,conformpassword,date,gender} = register;
  const onInputChange = (e) =>{
    setRegister({...register,[e.target.name]: e.target.value } );
  };
  const onSubmit= async (e)=>{
    e.preventDefault();
    try {
    await axios.post(`${process.env.REACT_APP_BACKEND_PORT}/sign/post`,register).then((res) => {
      if(res.data === 'success') {
        toast.success("You Have Succesfully Registered");
        navigate(`/`);
      }
      else {
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

  function onHandle() {
    navigate(`/`);
  }

  
  return (
    <>
    <div className="usermain">
     <img src="./images/pic.jpg.jpeg" alt=""></img>
    <div className="usercontainer">
    <div className='Usersignuppage'>
      <div className='usersignup'>
        <form onSubmit={(e)=>onSubmit(e)}>
          <h2 style={{marginBottom:"10px"}}>Create New Account</h2>
          <center>{errorMessage && <p style={{color:"red",fontWeight:'bold',fontSize:"13px",marginBottom:"28px"}}>{errorMessage}</p>}</center>
          <div className='userinputbox'>
            <input type='text' required="required" name="firstname" value={firstname} onChange={(e) => onInputChange(e)}></input>
            <span>Firstname</span>
            <i></i>
            </div>
            <div className="userinputbox">
            <input type='text' required="required" name='lastname' value={lastname} onChange={(e) => onInputChange(e)}></input>
            <span>Lastname</span>
            <i></i>
            </div>
          

          <div className='userinputbox'>
          <input type='text' required="required" name='username' value={username} onChange={(e) => onInputChange(e)}></input>
            <span>Username</span>
            <i></i>
          </div>
          <div className='userinputbox'>
          <input type='number' required="required" maxLength="10" name='mobileNumber' value={mobileNumber} onChange={(e) => onInputChange(e)}></input>
          <span>Mobile Number</span>
          <i></i>
          </div>

          <div className='userinputbox'>
            <input type='email'required="required" name='email' value={email} onChange={(e) => onInputChange(e)}></input>
            <span>Email</span>
            <i></i>
          </div>
          <div className='userinputbox'>
            <input type='password'required="required" name='password' value={password} onChange={(e) => onInputChange(e)}></input>
            <span>Create Password</span>
            <i></i>
          </div>
          <div className='userinputbox'>
            <input type='password'required="required" name='conformpassword' value={conformpassword} onChange={(e) => onInputChange(e)}></input>
            <span>Conform Password</span>
            <i></i>
            </div>
          <div className='userinputbox'>
          <input
                  type="date"
                  value={date}
                  onChange={onInputChange}
                  name="date"/>
          </div>

          <div className='userinputbox,userradio' >
          <label>
        <input
          type="radio"
          value="male"
          checked={gender === 'male'}
          onChange={onInputChange}
          name="gender"
        ></input>
        Male
      </label>
      <label>
        <input
          type="radio"
          value="female"
          checked={gender === 'female'}
          onChange={onInputChange}
          name="gender"
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="other"
          checked={gender === 'other'}
          onChange={onInputChange}
          
        />
        Other
        </label>
          </div>
          
            <div className="userregister">
              <input type="submit" value="Register" ></input>
            </div>
            <div>
              <button style={{color:"white"}}onClick={onHandle}><span style={{border:"1px solid black" }}>Back</span></button>
            </div>
          
        </form>
      </div>
    </div>
    </div>
    </div>
    </>
    
  )
}

export default Usersignout;
