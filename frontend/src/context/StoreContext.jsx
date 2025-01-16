

{/*Using context to allow multiple compnents to access values without using props*/}
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null); //Creating the StoreContext to store all values to be used

const StoreContextProvider = (props) => {


    const [cartItems, setCartItems] = useState({}); //Creating the cart object to store the item id with a value

    //Adding to Cart functionality
    const addToCart = (itemId) =>{
        if (!cartItems[itemId]) {
            // If the itemId is not in the cart then it will be added and its value will be 1
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else{
            // If the itemId already exist in the cart ten its value will be increased by 1
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1})); 
        }
    }



    //Removing from Cart functionality
    const removeFromCart = (itemId) =>{
        // The itemId value will be decreased by 1
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1})) 
    }



    //Calculating the total amount for our cart items
    const getTotalCartAmount = () =>{
        let totalAmount = 0; // Initial value for totalAmount is 0
        for(const item in cartItems){ 
            if (cartItems[item]>0){
               let itemInfo = food_list.find((product)=>product._id === item);
               totalAmount += itemInfo.price* 10 * cartItems[item];
            }
        }
        return totalAmount;
    }


    //The context values used in different components
    const contextValue = {
        // Add your context values here
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export  default StoreContextProvider 