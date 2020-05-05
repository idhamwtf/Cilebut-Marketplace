import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div style={{ border: '1px solid black' }}>
            <div style={{ borderRight: '2px solid black', height: '60px', minWidth: '180px', marginLeft: '100px', padding: '10px', display: "flex" }}>
                <Link style={{ display: 'flex', textDecoration: 'none' }} to='/'>
                    <img height="35px" width="135px" src="https://www.pinclipart.com/picdir/big/337-3370099_marketplace-partnership-shopee-logo-clipart.png" alt="a" />
                    <div style={{ color: '#f63', fontSize: "26px", marginLeft: '8px' }}> |   Keranjang Belanja</div>
                </Link>
                <div style={{ marginTop: '6px' }}>
                    <input style={{ width: '450px', marginLeft: '200px' }} type="text" placeholder="Elektronik diskon s/d 90%" />
                    <button style={{ backgroundColor: '#f63', color: 'white' }}>search</button>
                </div>
            </div>
        </div>
    )
}
export default Cart