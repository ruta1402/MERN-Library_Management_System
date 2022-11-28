import React, { useContext, useEffect, useState } from "react";
import { Nav, NavLink, NavMenu,NavBtnLink, NavBtn,UserData } from "./NavbarElements";
import jwt from 'jsonwebtoken';
import Context from "../store/Context";
import { useNavigate } from 'react-router-dom';
import './style.css'
import Button from 'react-bootstrap/Button';


const Navbar = () => {
	const {state,dispatch} = useContext(Context)
	
	const navigate = useNavigate();
	const [admin, setAdmin] = useState(false)
	const [username,setUser] = useState('')
	
	
	console.log(state.name);
	useEffect(()=>{
		const token = localStorage.getItem('token')
		
		if(token){
			
			const userdata = jwt.decode(token)
			if(!userdata){
				localStorage.removeItem('token')
				navigate('/login')
			}
			else{
				setUser(userdata.user.name)
				const fname = userdata.user.name.split(' ')[0]
				dispatch({type:'UPDATE_NAME',payload:fname})
				if(userdata.user.admin==true){
					setAdmin(true)
				}
				// console.log(userdata.user.admin);
			}
			
		}
	},[localStorage.getItem('token')])

	

	function logOut(){
		localStorage.clear()
		navigate('/login')
		window.location.reload()
	}
	

return (
	
	<>
	<Nav>
		<NavMenu>
			<NavLink className="logo" to="/" ><img src="./images/logo.png" /></NavLink>
			<NavLink to="/Books" >Books</NavLink>
			<NavLink to="/UserDetails" >Profile </NavLink>
			{admin?<>
				<NavLink to="/Profile" >Profile</NavLink>
				<NavLink to="/Addbook" >Add Book</NavLink>
			</>:
			<>
			</>}
			<NavLink to="/History" >History</NavLink>
			
		</NavMenu>
		<NavBtn>
			{state.name?
					<>
					<UserData>{state.name}</UserData>
					<button onClick={logOut}>
						log out
					</button>
					</>
				:
					<>
				<NavBtnLink  to='/Login'>Login</NavBtnLink>
				<NavBtnLink  to='/Register' >Register</NavBtnLink>
					</> 
			}
        </NavBtn>
	</Nav>
	</>
);

};

export default Navbar;
