import React from 'react';
import {  IoIosNotificationsOutline, IoIosHelpCircleOutline, } from 'react-icons/io'
import { FaFacebook, FaLine, FaSearch, FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <div className='Navbar'>
            <div className='Navbar-Menu-1'>
                <div className='Navbar-Menu-JDI'>
                    <p className='Navbar-Text-Left-1'>Jual </p>
                    <p className='Navbar-Text-Left-1'>|</p>
                    <p className='Navbar-Text-Left-1'>Download</p>
                    <p className='Navbar-Text-Left-1'>|</p>
                    <p className='Navbar-Text-Left-2'>Ikuti Kami Di</p>
                    <FaFacebook className='Navbar-Icons-1' />
                    <FaLinkedin className='Navbar-Icons-1' />
                    <FaLine className='Navbar-Icons-2' />
                    <AiFillInstagram className='Navbar-Icons-3' />
                    <IoIosNotificationsOutline className='Navbar-Icons-4' />
                    <p className='Navbar-Text-Right-1'>Notifikasi</p>
                    <IoIosHelpCircleOutline className='Navbar-Icons-5' />
                    <p className='Navbar-Text-Right-2'>Bantuan</p>
                    <p className='Navbar-Text-Right-Register'>Daftar</p>
                    <p className='Navbar-Text-Right-4'>|</p>
                    <Link to={"/login"}>
                    <p className='Navbar-Text-Right-Login'>Login</p>
                    </Link>
                </div>
            </div>

            <div className='Navbar-Middle'>
                <img src="https://tambahfollowers.net/assets/img/brand/logo-shopee-white.png" alt="a" className='Image-Logo' />
                <form className="example Flex" >
                    <input type="text" placeholder="&nbsp; Search.." name="search2" className='Navbar-Input-Search' />
                    <button type="submit">
                        <FaSearch className='Navbar-Icon-Search' />
                    </button>
                </form>

                <FiShoppingCart className='Navbar-Icon-Cart' />
            </div>

            <div className='Navbar-Bottom'>
                <p className='Navbat-Bottom-Text'>Baju Wanita </p>
                <p className='Navbat-Bottom-Text'>Kaos Wanita</p>
                <p className='Navbat-Bottom-Text'>Sandal Wanita</p>
                <p className='Navbat-Bottom-Text'>Kemeja Wanita</p>
                <p className='Navbat-Bottom-Text'>Celana Pria</p>
                <p className='Navbat-Bottom-Text'>Jaket Pria</p>
                <p className='Navbat-Bottom-Text'>Dompet Pria</p>

            </div>
        </div>
    );
}

export default Header;