import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Component/HomeComponent';
import Foot from './Component/Foot';
import UserDetail from './Component/UserDetails';
import Loading from './Component/Loading';
import Books from './Component/Books';
import History from './Component/History';
//import Search from './Component/Search';
import RegistrationForm from './Component/Register';
import LoginForm from './Component/Login';
//import Basic from './Component/Basic';
import AddBook from './Component/Addbook';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/Books' element={<Books />} />
		<Route path='/UserDetails' element={<UserDetail />} />
		<Route path='/Profile' element={<Loading />} />
		<Route path='/Addbook' element={<AddBook />} />
		<Route path='/History' element={<History />} />
		<Route path='/Form' element={<History />} />
		<Route path='/Register' element={<RegistrationForm />} />
		<Route path='/Login' element={<LoginForm />} />
	</Routes>
	<Foot />
	</Router>
);
}

export default App;
