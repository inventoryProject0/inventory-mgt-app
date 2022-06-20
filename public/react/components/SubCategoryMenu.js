import React from 'react'

import { AppContext } from '../Context/Context'

const SubCategoryMenu = () => {
    const {fetchItemsByCategory,setSelectedCategory, SetIsSingleCatClicked,setIsItemListDisplay,setUsersClicked,setAllOrderClicked}= React.useContext(AppContext)
  
    const changeState =()=>{
        return setIsItemListDisplay(false),setUsersClicked(false),setAllOrderClicked(false),SetIsSingleCatClicked(true)

    }
  
    return (
    <>
        <h3 className='sideBarHeader'>Items By Category</h3>
        <h5 className='sideBarHeader' onClick={()=>{changeState();setSelectedCategory('Electronics');fetchItemsByCategory('electronics')}}>Electronics</h5>
        <h5 className='sideBarHeader' onClick={()=>{changeState();setSelectedCategory('Jewelery');fetchItemsByCategory('jewelery')}}>Jewelery</h5>
        <h5 className='sideBarHeader' onClick={()=>{changeState();setSelectedCategory("Men's clothing");fetchItemsByCategory("men's clothing")}}>Men's Clothing</h5>
        <h5 className='sideBarHeader' onClick={()=>{changeState();setSelectedCategory("Women's clothing");fetchItemsByCategory("women's clothing")}}>Women's Clothing</h5>
    </>
  )
}

export default SubCategoryMenu
