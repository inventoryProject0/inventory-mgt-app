import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InventoryIcon from '@mui/icons-material/Inventory';


export const Nav = () => {

    return <nav className='Nav-container'>
                <div className='menu-logo'>
                    <h1 style={{fontSize:'2rem', marginRight:'2rem'}}><InventoryIcon style={{fontSize:'2rem'}}/><span style={{color:'#080036'}}>Ware</span><span style={{color:'#F21E6A'}}>house</span>  </h1>
                    <ul className='nav-menu'>
                        <li>Products</li>
                        <li>Pricing</li>
                        <li>Orders</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className='nav-buttons'>
                    <button style={{backgroundColor:'#F5F5F5', border:'1px solid black', color:'black'}}>Log In</button>
                    <button>Register</button>
                </div>
            </nav>
} 
	