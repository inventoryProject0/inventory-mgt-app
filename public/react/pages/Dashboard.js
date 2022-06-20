import React, { useState, useEffect } from 'react';

import { EditItem } from '../components/EditItemForm';
import { AddItem } from '../components/AddItemForm';
import { SingleItem } from '../components/SingleItem'
import { Nav } from '../components/Nav';
import SubCategoryMenu from '../components/SubCategoryMenu'
import InventoryIcon from '@mui/icons-material/Inventory';
import UserTable from '../components/UserComp'
import Orderstable from '../components/OrdersComp';
import Products from '../components/product'
import SubCategoryCard from '../components/SubCategoryCard'
import Footer from '../components/Footer'

import { AppContext } from '../Context/Context';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { margin } from '@mui/system';

export const Dashboard = () => {
     const {fetchUsers, fetchOrders, detailViewClicked,isItemListDisplay,isEditClicked,addItemClicked,usersClicked,allOrderClicked,setAddItemClicked,setIsItemListDisplay,setUsersClicked,setAllOrderClicked,isSingleCatClicked,SetIsSingleCatClicked,selectedCategory} = React.useContext(AppContext)
     
	return (
		<main>	
			<Nav />
			<div className={isEditClicked?'formCenter':'ItemPage'}>
				    <div className={isEditClicked || detailViewClicked ? 'nodisplay': 'SideBar'}>
							<hr></hr>
							<h3 className='sideBarHeader' onClick={()=>{SetIsSingleCatClicked(false);setAllOrderClicked(false);setUsersClicked(false);setIsItemListDisplay(true)}}>All Items</h3>
							<h3 className='sideBarHeader' onClick={()=>{SetIsSingleCatClicked(false);setUsersClicked(true); setAllOrderClicked(false); setIsItemListDisplay(false);setAddItemClicked(false); fetchUsers()}}>All Users</h3>
							<h3 className='sideBarHeader' onClick={()=>{SetIsSingleCatClicked(false);setAllOrderClicked(true); setUsersClicked(false); setIsItemListDisplay(false); fetchOrders()}}>All Orders</h3>
							<div className='categoty-menu'>
							<hr></hr>
								<SubCategoryMenu/>
					        </div>
			        </div>
			   
			       <div className='DisplayArea'>
				        {(!allOrderClicked && !isItemListDisplay && !addItemClicked && !isEditClicked && !detailViewClicked && !isSingleCatClicked)  && <UserTable />
						}
						{allOrderClicked ? <Orderstable/> :
										  <>
											{
												addItemClicked ? <AddItem/> : 
																<div className='addItem-button'>
																	<button className={((isEditClicked) || (detailViewClicked)) || (usersClicked) ? 'nodisplay': 'addbtn'} onClick={()=>{setAddItemClicked(true); setIsItemListDisplay(false);SetIsSingleCatClicked(false);setUsersClicked(false)}} style={{marginTop:'1rem'}}>Add Item</button>
																</div>
											}
											{
												isItemListDisplay && <div className='container'><Products className='card-container' /></div>
											}
											{    
												isEditClicked && <EditItem/>			    
											}
											{
												detailViewClicked && <SingleItem /> 
											} 
									</>  }   
                                        {
                                            isSingleCatClicked && <div>
                                                                     <h3 style={{textAlign:'center' }}>{selectedCategory}</h3>
                                                                     <div className='container'>
                                                                      <SubCategoryCard className='card-container'/>
                                                                    </div>
                                                                </div>  
                                        }      
			        </div>
		    </div>
			
            <Footer />
		</main>
	)
}