import React,{useEffect,useState} from 'react'
import {Link,useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder'; 


function Navbar() {
    const [expandNavbar,setExpandnavbar]=useState(false);
    const location=useLocation();
    useEffect(()=>{
        setExpandnavbar(false)
    },[location])//use useffect whenever location changes and when changes setExpandnavbar =false i.e close
  return (
    <div className='navbar' id={expandNavbar ? "open" :"close"}>
    <div className='toggleButton'>
    <button onClick={()=>{
        setExpandnavbar((prev)=>!prev)
    }}><ReorderIcon/></button>

    </div>
    <div className='links'>
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/experience">Experience</Link>
    </div>

    </div>
  )
}

export default Navbar