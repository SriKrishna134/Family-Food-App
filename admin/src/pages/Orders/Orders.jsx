import React, { useEffect, useState } from 'react';
import './Orders.css';
import axios from "axios";
import { assets } from '../../assets/assets';

const Orders = () => {
  const url = "https://family-food-app-backend.onrender.com"; 
  const [orders, setorders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setorders(response.data.data);
      console.log(response.data.data);

    }
    else {
      console.log("Error");
    }
  } 
  const statusHandler = async(event, orderId) => {
     const response = await axios.post(url + "/api/order/status", {orderId: orderId, status:event.target.value}); 
    if(response.data.success){
      await fetchAllOrders();
    }
    
  }
  useEffect(() => {
    fetchAllOrders();
  }, [])
  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => {
          return ( // Add this return statement
            <div key={index} className='order-item'>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className='order-item-food'>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    }
                    else {
                      return item.name + " x " + item.quantity + ", ";
                    }
                  })}
                </p>
                <p className='order-item-name'>
                  {order.address.firstName+" "+order.address.lastName}
                </p>
                <div className='order-item-address'>
                  <p>{order.address.street+","}</p>
                  <p>{order.address.city+","+order.address.state+","+order.address.country+","+order.address.zipcode}</p>
                </div>
                <p className="order-item-phone">{order.address.phone}</p>
              </div>
              <p>Items: {order.items.length}</p> 
              <p>${order.amount}</p>
              <select onChange={(event)=>statusHandler(event, order._id)} value={order.status}>   
                <option value="Food Processing">Food Processing</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Orders;
