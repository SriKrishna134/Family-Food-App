import React, { useContext, useState } from 'react'
import './Header.css'
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className='headerr'>
      <div className="header-content">
        <h2>Order ur favourite home food</h2>
        <p>Choose from the variety of the food on the menu, find ur favourite food
          and vist again and again.Step into a world of culinary wonders with our diverse menu,
           crafted to satisfy every palate. Whether you're in the mood for something familiar or
            eager to explore new flavors, our selection has something for everyone.
        </p>
        <a href='#explore-menu' onClick={()=>setMenu("menu")}>View Menu: </a>
      </div>
      
    </div>
  )
}

export default Header
