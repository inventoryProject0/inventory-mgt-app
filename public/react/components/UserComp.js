import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {AppContext} from '../Context/Context'

const UserTable = ()=>{
    const {allUsers} = React.useContext(AppContext);
    console.log(allUsers)
    return <div className='user-table'>
              <table >
                    <tr>
                        <th style={{margin:'1rem'}}>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    {allUsers.map((singleUser, indx)=>{
                        return <tr>
                                    <td className='table-id'>{singleUser.id}</td>
                                    <td className='table-name'>{singleUser.firstName}</td>
                                    <td className='table-name'>{singleUser.lastName}</td>
                                    <td className='table-name'>{singleUser.password}</td>
                                    <td className='table-email'>{singleUser.email}</td>
                                    <td className='table-Userbutton'><DeleteIcon/></td>
                                    <td className='table-Userbutton'><EditIcon/></td>
                                </tr>
                    })}
             </table>

    </div>
}

export default UserTable;