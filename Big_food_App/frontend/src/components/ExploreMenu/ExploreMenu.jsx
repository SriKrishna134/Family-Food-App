import React from 'react';
import './ExploreMenu.css';
import PropTypes from "prop-types"; // Import prop-types
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore The Menu </h1>
        <p className='explore-menu-text'>Choose from variety of food from the menu to ur liking and feast on it,
            have a good feast, hope to see u soon..
        </p>
        <div className='explore-menu-list'>
            {menu_list.map((item, index) => {
                return (
                    <div onClick={() => setCategory(category === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                );
            })}
        </div>
        <hr/>
      
    </div>
  );

  



};

ExploreMenu.propTypes = {
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
};



export default ExploreMenu;