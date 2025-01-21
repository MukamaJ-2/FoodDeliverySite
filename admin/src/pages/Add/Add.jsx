import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"

function Add() {

    const url = "http://localhost:4001";
    const [image, SetImage] = useState(false)
    const [data, setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Pasta"})

    const ChangeHandler = (event) =>{
        const name = event.target.name
        const value = event.target.value 

        setData(data => ({...data,[name]:value}))
    }

    const onSubmitHandler = async (event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/food/add`,formData);
        if (response.data.succes){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Pasta"
            })
            SetImage(false)
        }
        else{

        }
    }

  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>SetImage(e.target.files[0])}  type="file" id='image' hidden required />
            </div>
            <div className="add-product-name flex-col">
                <p>Product name</p>
                <input onChange={ChangeHandler} value= {data.name} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="add-product-description flex-col">
                <p>Product description</p>
                <textarea  onChange={ChangeHandler} value={data.description} name="description" rows="6" placeholder='Description' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product category</p>
                    <select onChange={ChangeHandler} value={data.category} name="category">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product price</p>
                    <input type="number" onChange={ChangeHandler} value={data.price} name="price" placeholder='$20'/>
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default Add