import React from 'react'
import { Link } from 'react-router-dom'
import '../css/cart.css'

const Cart = () => {
    return (
        <div style={{ border: '1px solid black', display: 'flex', justifyContent: 'center' }}>
            <div style={{ border: '2px solid black', height: 'fit-content', minWidth: '180px', padding: '10px', display: "flex" }}>
                <Link style={{ display: 'flex', textDecoration: 'none', padding: '10px', border: '2px solid tomato' }} to='/'>
                    <img height="35px" width="135px" src="https://www.pinclipart.com/picdir/big/337-3370099_marketplace-partnership-shopee-logo-clipart.png" alt="a" />
                    <div style={{ color: '#f63', fontSize: "23px", marginLeft: '10px' }}> |   Keranjang Belanja</div>
                </Link>
                <div style={{ border: '1px solid #f63', height: '60px' }} >
                    <input style={{ width: '450px', marginLeft: '220px' }} type="text" placeholder="Elektronik diskon s/d 90%" />
                    <button style={{ backgroundColor: '#f63', color: 'white', height: '41px' }} type='submit'>search</button>
                </div>
            </div>
        </div>
    )
}
export default Cart