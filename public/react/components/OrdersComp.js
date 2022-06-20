import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {AppContext} from '../Context/Context'

const Orderstable = ()=>{
    const {allOrders} = React.useContext(AppContext)
    return <>
             <table className='Order-table'>
                    <tr>
                        <th style={{margin:'1rem'}}>Id</th>
                        <th>Item Name</th>
                        <th>Item Description</th>
                        <th>Qty</th>
                        <th>Order Date</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                        {allOrders.map((singleOrder, indx)=>{
                            const orderDMY = new Date(singleOrder.orderDate)
                            return <tr key ={indx}>
                                        <td className='table-id'>{singleOrder.id}</td>
                                        <td className='table-itmname'>{singleOrder.itemName}</td>
                                        <td className='table-desc'>{singleOrder.description}</td>
                                        <td className='table-qty'>{singleOrder.quantity}</td>
                                        <td className='table-date'>{orderDMY.getMonth()}-{orderDMY.getDate()}-{orderDMY.getFullYear()}</td>
                                        <td className='table-button'><DeleteIcon/></td>
                                        <td className='table-button'><EditIcon/></td>
                                    </tr>
                        })}
			</table>

    </>
}

export default Orderstable;