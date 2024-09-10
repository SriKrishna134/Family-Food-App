import userModel from "../models/userModel.js"
// add to cart //
const addToCart = async (req,res) => {
    try{
        let userData = await userModel.findById(req.body.userId);      
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData}); 
        res.json({success:true, message:"Updated To Cart"});
    } catch(error){
        console.log(error);
        
        res.json({success:false, message:error.message});
    }
}
// delete from cart //
const deleteFromCart = async (req,res) => {
    try{
        let userData = await userModel.findById(req.body.userId); 
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
        // if(cartData[req.body.itemId] == 0){
        //     delete cartData[req.body.itemId];
        // }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData})    
        res.json({success:true, message:"The item is deleted from cart"})

    } catch(error){
        console.log(error);
        res.json({success:false, message:"Error"})
    }    
}
const getCart = async (req,res) => {
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true, cartData})        
    } catch(error){
        console.log(error);
        res.json({success:false, message:error.message})
    }
    
}

export {addToCart,deleteFromCart,getCart}