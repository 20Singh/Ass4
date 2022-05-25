import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';
const Home = () => {
  return (
    <>
       
     <nav>
       <Link to='/'><h3>Home</h3></Link>
       <ul className='links'>
         <Link to='student'><li><h3>Student</h3></li></Link>
         <Link to='contact'><li><h3>Contact</h3></li></Link>
         

       </ul>
     </nav>
     



       
  
    </>
  )
}

export default Home