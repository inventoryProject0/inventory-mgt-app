import React from 'react';
import { EditItem } from './EditItemForm';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import {AppContext} from '../Context/Context'

const Products = ()=>{
    const {items, setDetailViewClicked, setDetailId, fetchSingleItem, setIsItemListDisplay,setIsEditClicked,setSelectedId,deleteItem}= React.useContext(AppContext)
    return (<>
    {
			items.map((singleItem, idx) => {
				return <div key = {idx} className='card' onClick={()=>{setDetailViewClicked(true); setDetailId(singleItem.id); fetchSingleItem(singleItem.id); setIsItemListDisplay(false)}}>
                            <img className = "card-image" src = {singleItem.imageUrl}/>
                            <h3>{singleItem.name}</h3>
                            <p style={{textDecoration:'underline', color:'blue'}}>View detail</p>
                            <span style={{marginRight:'2rem',fontWeight:'bold', color:'#251A67'}} className='card-price'>${singleItem.price}</span>
                            <button style={{marginRight:'1rem', marginLeft:'3.5rem'}} onClick={()=>{setIsEditClicked(true); setSelectedId(singleItem.id)}}>Edit</button>
                            <button onClick={()=>{deleteItem(singleItem.id)}}>Delete</button> 
                        </div>
			})
		}
           </>
           )
}

export default Products;