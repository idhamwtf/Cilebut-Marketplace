import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText
// } from 'reactstrap';
import { MdSearch } from 'react-icons/md'
import { IoIosHeartEmpty, IoIosSearch, IoIosNotificationsOutline, IoIosHelpCircleOutline, } from 'react-icons/io'
import { GiShoppingCart } from 'react-icons/gi'
import { FaFacebook, FaLine, FaSearch } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='coba'>
    <div style={{ marginLeft: "130px" }}>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "14px", fontFamily: "Roboto", color: "white", marginRight: "5px", marginTop: "7px" }}>Jual </p>
        <p style={{ fontSize: "14px", fontFamily: "Roboto", color: "white", marginRight: "5px", marginTop: "7px" }}>|</p>
        <p style={{ fontSize: "14px", fontFamily: "Roboto", color: "white", marginRight: "5px", marginTop: "7px" }}>Download</p>
        <p style={{ fontSize: "14px", fontFamily: "Roboto", color: "white", marginRight: "5px", marginTop: "7px" }}>|</p>
        <p style={{ fontSize: "14px", fontFamily: "Roboto", color: "white", marginRight: "7px", marginTop: "7px" }}>Ikuti Kami Di</p>
        <FaFacebook style={{ fontSize: "16px", fontFamily: "Roboto", color: "white", marginRight: "8px", marginTop: "9px" }} />
        <FaLine style={{ fontSize: "17px", fontFamily: "Roboto", color: "white", marginRight: "8px", marginTop: "9px" }} />
        <AiFillInstagram style={{ fontSize: "19px", fontFamily: "Roboto", color: "white", marginRight: "640px", marginTop: "8px" }} />
        <IoIosNotificationsOutline style={{ fontSize: "21px", fontFamily: "Roboto", color: "white", marginRight: "2px", marginTop: "6px" }} />
        <p style={{ fontSize: "13px", fontFamily: "Roboto", color: "white", marginRight: "10px", marginTop: "7px" }}>Notifikasi</p>
        <IoIosHelpCircleOutline style={{ fontSize: "21px", fontFamily: "Roboto", color: "white", marginRight: "2px", marginTop: "6px" }} />
        <p style={{ fontSize: "13px", fontFamily: "Roboto", color: "white", marginRight: "10px", marginTop: "7px" }}>Notifikasi</p>
        <p style={{ fontSize: "14px", fontFamily: "Roboto", color: "white", marginRight: "10px", marginTop: "7px", fontWeight: "bolder" }}>Daftar</p>
        <p style={{ fontSize: "14px", fontFamily: "Roboto", color: "white", marginRight: "10px", marginTop: "7px" }}>|</p>
        <p style={{ fontSize: "14px", fontFamily: "Roboto", color: "white", marginRight: "10px", marginTop: "7px", fontWeight: "bolder" }}>Login</p>
      </div>
    </div>
    <div style={{ marginLeft: "120px", display: "flex" }}>
      <img src="https://tambahfollowers.net/assets/img/brand/logo-shopee-white.png" alt="" style={{ width: "12%", height: "100%" }} />
      <form style={{ marginLeft: "52px", marginTop: "6px" }}>
        <input type="text" placeholder="&nbsp; Search.." name="search" style={{ width: "750px", height: "41px", border: "1px solid white", borderRadius: "3px", color: "white", marginTop: "1px" }} />
        <button type="submit" style={{ height: "39px", borderRadius: "3px", border: "1px solid #fb6445", backgroundColor: "#fb6445", color: "white", marginBottom: "10px" }}>
          {/* <i class="fa fa-search"></i> */}
          <FaSearch style={{ fontSize: "20px", color: "white", fontWeight: "bolder", marginBottom: "7px" }} />
        </button>
      </form>

      <FiShoppingCart style={{ marginLeft: "101px", marginTop: "13px", fontFamily: "bolder", color: "white", fontSize: "25px" }} />
    </div>
    <div style={{ display: "flex", zIndex: "2", position: "absolute", left: "332px",top:"90px" }}>
      <p style={{ fontSize: "12px", fontFamily: "Roboto", color: "white", marginRight: "10px", marginTop: "7px" }}>Baju Wanita </p>
      <p style={{ fontSize: "12px", fontFamily: "Roboto", color: "white", marginRight: "10px", marginTop: "7px" }}>Kaos Wanita</p>
      <p style={{ fontSize: "12px", fontFamily: "Roboto", color: "white", marginRight: "10px", marginTop: "7px" }}>Sandal Wanita</p>
      <p style={{ fontSize: "12px", fontFamily: "Roboto", color: "white", marginRight: "10px", marginTop: "7px" }}>Kemeja Wanita</p>
      <p style={{ fontSize: "12px", fontFamily: "Roboto", color: "white", marginRight: "10px", marginTop: "7px" }}>Celana Pria</p>
      <p style={{ fontSize: "12px", fontFamily: "Roboto", color: "white", marginRight: "10px", marginTop: "7px" }}>Jaket Pria</p>
      <p style={{ fontSize: "12px", fontFamily: "Roboto", color: "white", marginRight: "10px", marginTop: "7px" }}>Dompet Wanita</p>

    </div>
  </div>
);
}

export default Example;