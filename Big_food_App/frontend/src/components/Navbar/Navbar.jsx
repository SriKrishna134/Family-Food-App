import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");
    const {getTotalcartAmount, token, setToken} = useContext(StoreContext);
    const navigate = useNavigate();
    const logout = ()=>{
      localStorage.removeItem("token");
      setToken("")
      navigate("/")
    }

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} className="logo"></img></Link>
        <ul className="navbar-menu">
             <Link to='/' onClick={()=>setMenu("home")}className={menu === "home" ? "actve" : ""}>Home</Link>

             <a href='#explore-menu' onClick={()=>setMenu("menu")}className={menu === "menu" ? "actve" : ""}>Menu</a>
             {/* <a href='' onClick={()=>setMenu("Mobile-app")}className={menu === "Mobile-app" ? "actve" : ""}>Mobile-app</a> */}
             <a href='#footer' onClick={()=>setMenu("contact")}className={menu === "contact" ? "actve" : ""}>Contact </a>
        </ul>
        <div className="navbar-right">
             <img src={assets.search_icon} alt="" />
             <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalcartAmount()===0?"":"dot"}></div>
                </div>
                {!token?<button onClick={()=> setShowLogin(true) }>Sign in</button>
                :<div className='navbar-profile'>
                  <img src={assets.profile_icon} alt="" />
                  <ul className="nav-profile-dropdown">
                    <li onClick={()=>navigate('./myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li> 
                    <hr />
                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                  </ul>
                  </div>}
                
        </div>    
    </div>
  )
}

export default Navbar
