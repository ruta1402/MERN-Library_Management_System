import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav `
    background: #f0fcfc;
	
	display: flex;
	justify-content: space-end;
	padding: 0.2rem;
	z-index: 12;
	font-size: 20px;
	
`;

export const NavLink = styled(Link)
`
	color: black;
	font-family: 'Trebuchet MS', sans-serif;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	text-decoration: none;
	font-size: 18px;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #4d4dff;
	}
`;

export const Bars = styled(FaBars)
`
	display: none;
	color: #808080;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const UserData = styled.div `
color: white;
font-family: 'Trebuchet MS', sans-serif;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	text-decoration: none;
	font-size: 18px;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #4d4dff;
	},
	
`;

export const NavMenu = styled.div `
display: flex;
align-items: center;
justify-content: space-end;
margin-right: 24px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav `
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)
`
  border-radius: 4px;
  font-size: 18px;
  background: #225956;
  font-family: 'Trebuchet MS', sans-serif;
  color: white;
  width:100px;
  text-align:center;
  
  text-decoration: none;
  
  &:hover {
    color: white;
	transform: scale(1.1);
  box-shadow: 0 0 20px rgba(104, 85, 224, 0.6);
  background-color: rgba(104, 85, 224, 1);
  }
  cursor: pointer;
  border: 0;
  
  font-weight: 600;
  margin: 0 10px;
  
  padding: 8px 0;
  box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
  transition: 0.4s;
`;