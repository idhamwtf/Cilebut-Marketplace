import React from 'react';
import { IoIosNotificationsOutline, IoIosHelpCircleOutline, } from 'react-icons/io'
import { FaFacebook, FaLine, FaSearch, FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

// Header Complete
const Header = () => {

<<<<<<< HEAD
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
=======
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
                    <Link to={"/login"} style={{ textDecoration: "none" }}>
                        <p className='Navbar-Text-Right-Login'>Login</p>
                    </Link>
                </div>
            </div>
>>>>>>> abb4af20bcdee680df6228095a336328cd3d3acc

      <div className='Navbar-Middle'>
        <Link to='/'>
          <img src="https://tambahfollowers.net/assets/img/brand/logo-shopee-white.png" alt="a" className='Image-Logo' />
        </Link>
        <form className="example Flex" >
          <input type="text" placeholder="&nbsp; Search.." name="search2" className='Navbar-Input-Search' />
          <button type="submit">
            <FaSearch className='Navbar-Icon-Search' />
          </button>
        </form>

        <FiShoppingCart className='Navbar-Icon-Cart' />
      </div>

      <div className='Navbar-Bottom'>
        <Link to='/detailstore' className='LinkAsu' style={{ textDecoration: "none" }}>
          <p className='Navbat-Bottom-Text'>Baju Wanita </p>
        </Link>
        <Link className='LinkAsu' style={{ textDecoration: "none" }}>
          <p className='Navbat-Bottom-Text'>Kaos Wanita</p>
        </Link>
        <Link className='Link' style={{ textDecoration: "none" }}>
          <p className='Navbat-Bottom-Text'>Sandal Wanita</p>
        </Link>
        <Link className='Link' style={{ textDecoration: "none" }}>
          <p className='Navbat-Bottom-Text'>Kemeja Wanita</p>
        </Link>
        <Link className='Link' style={{ textDecoration: "none" }}>
          <p className='Navbat-Bottom-Text'>Celana Pria</p>
        </Link>
        <Link className='Link' style={{ textDecoration: "none" }}>
          <p className='Navbat-Bottom-Text'>Jaket Pria</p>
        </Link>
        <Link className='Link' style={{ textDecoration: "none" }}>
          <p className='Navbat-Bottom-Text'>Dompet Pria</p>
        </Link>

      </div>
    </div>
  );
}

export default Header;