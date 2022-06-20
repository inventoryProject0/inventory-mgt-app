import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from '../Context/Context';

export const SingleItem = () => {
    const{ singleItemData, detailViewClicked, setDetailViewClicked,isItemListDisplay, setIsItemListDisplay } = React.useContext(AppContext)

    return   <div className='singlview'>
                <div className='Singlecard'>
                    <div className="SinleItemCloseButton">
                        <CloseIcon onClick={()=>{setDetailViewClicked(false);setIsItemListDisplay(true)}}/>
                    </div>
                    <img className = "Single-card-image" src = {singleItemData.imageUrl}/>
                    <h3>{singleItemData.name}</h3>
                    <p>{singleItemData.description}</p>
                    <span style={{marginRight:'2rem',fontWeight:'bold', color:'#251A67'}}>${singleItemData.price}</span>
                </div>
            </div> 
}