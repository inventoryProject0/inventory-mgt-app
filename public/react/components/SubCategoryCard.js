import React from 'react'
import { AppContext } from '../Context/Context'

const SubCategoryCard = () => {
    const {itemsByCategory,setIsEditClicked,deleteItem,setDetailViewClicked,setDetailId,fetchSingleItem,setIsItemListDisplay,setSelectedId,SetIsSingleCatClicked} = React.useContext(AppContext)

  return (
            <>
            
            {
                itemsByCategory.map((singleItem, idx) => {
                return <div key = {idx} className='card' onClick={()=>{setDetailViewClicked(true); setDetailId(singleItem.id); fetchSingleItem(singleItem.id); setIsItemListDisplay(false)}}>
                            <img className = "card-image" src = {singleItem.imageUrl}/>
                            <h3>{singleItem.name}</h3>
                            <p style={{textDecoration:'underline', color:'blue'}}>View detail</p>
                            <span style={{marginRight:'2rem',fontWeight:'bold', color:'#251A67'}} className='card-price'>${singleItem.price}</span>
                            <button style={{marginRight:'1rem', marginLeft:'3.5rem'}} onClick={()=>{setIsEditClicked(true);SetIsSingleCatClicked(false); setSelectedId(singleItem.id)}}>Edit</button>
                            <button onClick={()=>{deleteItem(singleItem.id)}}>Delete</button> 
                        </div>
                })
                }
            </>
  )
}

export default SubCategoryCard