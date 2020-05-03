import React from 'react'
import '../css/productCategory.css'
// import Header from '../components/Header'
// import Footer from '../components/Footer'

import { FiMenu, FiFilter } from 'react-icons/fi';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const ProductCategory = () => {
    return (
        <div>
            {/* <Header /> */}
            <div className="shortcut">

                {/* _____________________________ START CATEGORY SHORTCUT _____________________________ */}
                <div className="shortcut-category">
                    <div className="shortcut-title">
                        <p className="shortcut-icon">
                            <FiMenu />
                        </p>
                        Semua Kategori
                    </div>
                    <hr style={{ width: "75%", marginLeft: "-5px", marginTop: "-12px" }} />

                    <div className="shortcut-menu">
                        <a className="shortcut-menu-title" href='/'>
                            Console Permainan
                        </a>
                        <br />
                        <a className="shortcut-menu-title" href='/'>
                            Aksesoris
                        </a>
                        <br />
                        <a className="shortcut-menu-title" href='/'>
                            CD Permainan
                        </a>
                    </div>

                </div>
                {/* ______________________________ END CATEGORY SHORTCUT ______________________________ */}

                {/* ______________________________ START CATEGORY FILTER ______________________________ */}
                <div className="shortcut-filter">
                    <div className="shortcut-title">
                        <p className="shortcut-icon">
                            <FiFilter />
                        </p>
                        SARING FILTER
                    </div>

                    <div className="shortcut-menu">
                        <div className="shortcut-submenu">
                            <p>
                                Tipe Penjual
                            </p>
                        </div>
                        <div className="shortcut-menu-title">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                            Shopee Mall
                        </div>
                        <div className="shortcut-menu-title">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                            Star Seller
                        </div>
                        <div className="shortcut-menu-title">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                            Shopee24
                        </div>
                    </div>

                    <div className="shortcut-menu">
                        <hr style={{ width: "75%", marginLeft: "-5px", marginBottom: "-5px" }} />
                        <div className="shortcut-submenu">
                            <p>
                                Lokasi
                            </p>
                        </div>
                        <div className="shortcut-menu-title">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                            Jabodetabek
                        </div>
                        <div className="shortcut-menu-title">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                            DKI Jakarta
                        </div>
                        <div className="shortcut-menu-title">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                            Jawa Barat
                        </div>
                    </div>

                    <div className="shortcut-menu">
                        <hr style={{ width: "75%", marginLeft: "-5px", marginBottom: "-5px" }} />
                        <div className="shortcut-submenu">
                            <p>
                                Merek
                            </p>
                        </div>
                        <div className="shortcut-menu-title">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                            SONY Playstation
                        </div>
                        <div className="shortcut-menu-title">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                            XBOX
                        </div>
                        <div className="shortcut-menu-title">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                            Nintendo
                        </div>
                    </div>

                    <div className="shortcut-menu">
                        <hr style={{ width: "75%", marginLeft: "-5px", marginBottom: "-5px" }} />
                        <div className="shortcut-submenu">
                            <p>
                                Opsi Pengiriman
                            </p>
                        </div>
                        <div className="shortcut-menu-title">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                            Shopee Express
                        </div>
                        <div className="shortcut-menu-title">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                            Shopee Sameday
                        </div>
                        <div className="shortcut-menu-title">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                            Shopee Instant
                        </div>
                    </div>

                    <div className="shortcut-menu">
                        <hr style={{ width: "75%", marginLeft: "-5px", marginBottom: "-5px" }} />
                        <div className="shortcut-submenu">
                            <p>
                                Opsi Pembayaran
                            </p>
                        </div>
                        <div className="shortcut-menu-title">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                            Bayar di Tempat (COD)
                        </div>
                    </div>

                    <div className="shortcut-menu">
                        <hr style={{ width: "75%", marginLeft: "-5px", marginBottom: "-5px" }} />
                        <div className="shortcut-submenu">
                            <p>
                                Penilaian
                            </p>
                        </div>
                        <div className="shortcut-menu-title">
                            <p className="shortcut-icon">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </p>
                        </div>
                        <div className="shortcut-menu-title">
                            <p className="shortcut-icon">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
                                ke atas
                            </p>
                        </div>
                        <div className="shortcut-menu-title">
                            <p className="shortcut-icon">
                                <FaStar /><FaStar /><FaStar /><FaStar />
                                ke atas
                            </p>
                        </div>
                        <div className="shortcut-menu-title">
                            <p className="shortcut-icon">
                                <FaStar /><FaStar /><FaStar /><FaStarHalf />
                                ke atas
                            </p>
                        </div>
                        <div className="shortcut-menu-title">
                            <p className="shortcut-icon">
                                <FaStar /><FaStar /><FaStar />
                                ke atas
                            </p>
                        </div>
                    </div>

                    <div className="shortcut-menu">
                        <hr style={{ width: "75%", marginLeft: "-5px", marginBottom: "-5px" }} />
                        <div className="shortcut-submenu">
                            <p>
                                Program Promosi
                            </p>
                        </div>
                        <div className="shortcut-menu-title">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                            Gratis Ongkir XTRA
                        </div>
                        <div className="shortcut-menu-title">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                            Cashback XTRA
                        </div>
                    </div>

                    <div className="shortcut-menu">
                        <hr style={{ width: "75%", marginLeft: "-5px", marginBottom: "-5px" }} />
                        <div className="shortcut-submenu">
                            <p>
                                Batas Harga
                            </p>
                        </div>
                        <input className='shortcut-input' type="number" placeholder="RP MIN" />
                        <input className='shortcut-input' type="number" placeholder="RP MAX" />
                        <div className="shortcut-button" href='/'>
                            TERAPKAN
                        </div>
                        <hr style={{ width: "75%", marginLeft: "-5px", marginBottom: "-5px" }} />
                    </div>

                    <div className="shortcut-button" href='/'>
                        HAPUS SEMUA
                    </div>

                </div>
                {/* _____________________________ END CATEGORY SHORTCUT _______________________________ */}


                {/* <div className="item-menu">
                    <a href="#">
                        <p className="icon-item-menu">
                        </p>
                    </a>
                </div> */}
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default ProductCategory