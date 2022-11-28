import React, {useState} from 'react';
import './style.css';
// import { Route } from 'react-router-dom';
import { NavLink } from './NavbarElements';
// import LoginForm from './Login';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState(null);
    const [phoneNo, setPhoneNo] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "phoneNo"){
            setPhoneNo(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    }

    async function handleSubmit(event) {
        console.log(firstName,phoneNo,email,password,confirmPassword);
        event.preventDefault()
        if(password!==confirmPassword){
            alert("Wrong")
            return false
        } 
        // const options = ;
        console.log(email,phoneNo,password);
        const response= await fetch('http://localhost:8989/user/register',{
            method: 'POST',
            headers:{
                'Content-type':"application/json"
            },
            body: JSON.stringify({
                name:firstName,
                email: email,
                password: password,
                phone: phoneNo
            })
          })

        const data = await response.json()
        console.log(data)
        if(data.tokenid){
            localStorage.clear()
            localStorage.setItem('token',data.tokenid)
            alert("Registration successful");
            navigate('/')
        }
        else{
            alert("Please check email and pass")
        }
    }

    return(
        <div className="records">
        <form onSubmit={handleSubmit}> 
        <div className="form">
            <div className='headi'>Registration Form</div>
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">Name: </label>
                    <input className="form__input w3-input w3-border w3-light-grey" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" htmlFor="phoneNo">Phone No: </label>
                    <input  type="text" name="" id="phoneNo" value={phoneNo}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email: </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password: </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password: </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
                <div className="d">
                    <input type="submit" value="Register" class="btn foote"/>
                </div>
            </div>
            {/* <div class="d">
                <button onClick={()=>handleSubmit()} type="submit" class="btn foote">Register</button>
            </div> */}
            <br />
            <div class="d1">Already have an account?<span  ><a href="/Login" className='Redirect'> Login</a></span></div>
        </div>
        </form>
        </div>
    )       
}

export default RegistrationForm