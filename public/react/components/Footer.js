import React from 'react'
import { AppContext } from '../Context/Context'
import InventoryIcon from '@mui/icons-material/Inventory';

const Footer = () => {
    const {ThisYear} = React.useContext(AppContext)
  return (
    <footer className='footerContainer'>
    <ul className='footer-links'>
        <li className='links'>Mobile App</li>
        <li className='links'>Community</li>
        <li className='links'>Company</li>
        <li className='footer-companyname'><h3 style={{fontSize:'2rem', marginRight:'2rem'}}><InventoryIcon style={{fontSize:'2rem'}}/><span style={{color:'#080036'}}>Ware</span><span style={{color:'white'}}>house</span>  </h3></li>
        <li className='links'>Help desk</li>
        <li className='links'>Blog</li>
        <li className='links'>Resources</li>
    </ul>
    <ul className='footer-copyRight'>
        <hr style={{paddingRight:'2rem'}}></hr>
        &copy; {ThisYear>2022? <span>`2022 - ${ThisYear}`</span>: <span>{ThisYear}</span>}  Designed and implemented by Yared Gari, Getu Taddesse and Raishan Bernard as an eduactional exercise during Multiverse bootcamp.
    </ul>
</footer>
  )
}

export default Footer