import React from 'react'
import "./ExpoMenu.css"
import { menu_list } from '../../assets/assets'


{/*The ExpoMenu component*/}
function ExpoMenu({category, setCategory}) {



  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className="explore-menu-text">Explore our diverse menu, from sizzling steaks to aromatic curries. Try our signature Spicy Thai Basil Noodles or the health-conscious Quinoa Salad Bowl. Don’t miss out on our mouthwatering desserts like Tiramisu or Chocolate Lava Cake. Bon appétit!</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return(
                    <div  key={index} className="explore-menu-list-item" onClick={()=> setCategory(pre=>pre===item.menu_name?"All":item.menu_name)}>
                        <img  className={category===item.menu_name?"active_item":""} src={item.menu_image} alt={item.menu_name} />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExpoMenu