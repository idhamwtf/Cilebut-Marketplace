import React from 'react'
import '../css/productCategory.css'
// import Header from '../components/Header'
// import Footer from '../components/Footer'

import { FiMenu, FiFilter } from 'react-icons/fi';

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
                        <a className="shortcut-menu-title" href='/'>
                            Shopee Mall
                        </a>
                        <br />
                        <a className="shortcut-menu-title" href='/'>
                            Star Seller
                        </a>
                        <br />
                        <a className="shortcut-menu-title" href='/'>
                            Shopee24
                        </a>
                    </div>

                    <div className="shortcut-menu">
                        <hr style={{ width: "75%", marginLeft: "-5px", marginBottom: "-5px" }} />
                        <div className="shortcut-submenu">
                            <p>
                                Lokasi
                            </p>
                        </div>
                        <a className="shortcut-menu-title" href='/'>
                            Jabodetabek
                        </a>
                        <br />
                        <a className="shortcut-menu-title" href='/'>
                            DKI Jakarta
                        </a>
                        <br />
                        <a className="shortcut-menu-title" href='/'>
                            Jawa Barat
                        </a>
                    </div>

                    <div className="shortcut-menu">
                        <hr style={{ width: "75%", marginLeft: "-5px", marginBottom: "-5px" }} />
                        <div className="shortcut-submenu">
                            <p>
                                Merek
                            </p>
                        </div>
                        <a className="shortcut-menu-title" href='/'>
                            Sony's Playstation
                        </a>
                        <br />
                        <a className="shortcut-menu-title" href='/'>
                            XBOX
                        </a>
                        <br />
                        <a className="shortcut-menu-title" href='/'>
                            Nintendo
                        </a>
                    </div>

                    <div className="shortcut-menu">
                        <hr style={{ width: "75%", marginLeft: "-5px", marginBottom: "-5px" }} />
                        <div className="shortcut-submenu">
                            <p>
                                Opsi Pengiriman
                            </p>
                        </div>
                        <a className="shortcut-menu-title" href='/'>
                            Shopee Express Sameday
                        </a>
                        <br />
                        <a className="shortcut-menu-title" href='/'>
                            GrabExpress Sameday
                        </a>
                        <br />
                        <a className="shortcut-menu-title" href='/'>
                            Reguler
                        </a>
                    </div>

                    <div className="shortcut-menu">
                        <hr style={{ width: "75%", marginLeft: "-5px", marginBottom: "-5px" }} />
                        <div className="shortcut-submenu">
                            <p>
                                Opsi Pembayaran
                            </p>
                        </div>
                        <a className="shortcut-menu-title" href='/'>
                            Bayar di Tempat (COD)
                        </a>
                    </div>

                    <div className="shortcut-menu">
                        <hr style={{ width: "75%", marginLeft: "-5px", marginBottom: "-5px" }} />
                        <div className="shortcut-submenu">
                            <p>
                                Penilaian
                            </p>
                        </div>
                        <a className="shortcut-menu-title" href='/'>
                            5 ke atas
                        </a>
                        <br />
                        <a className="shortcut-menu-title" href='/'>
                            4 ke atas
                        </a>
                        <br />
                        <a className="shortcut-menu-title" href='/'>
                            3 ke atas
                        </a>
                    </div>

                    <div className="shortcut-menu">
                        <hr style={{ width: "75%", marginLeft: "-5px", marginBottom: "-5px" }} />
                        <div className="shortcut-submenu">
                            <p>
                                Program Promosi
                            </p>
                        </div>
                        <a className="shortcut-menu-title" href='/'>
                            Gratis Ongkir XTRA
                        </a>
                        <br />
                        <a className="shortcut-menu-title" href='/'>
                            Cashback XTRA
                        </a>
                    </div>

                    <div className="shortcut-menu">
                        <hr style={{ width: "75%", marginLeft: "-5px", marginBottom: "-5px" }} />
                        <div className="shortcut-submenu">
                            <p>
                                Batas Harga
                            </p>
                        </div>
                        <a className="shortcut-menu-title" href='/'>
                            RP MIN
                        </a>
                        <br />
                        <a className="shortcut-menu-title" href='/'>
                            RP MAX
                        </a>
                    </div>

                    <div className="shortcut-button" href='/'>
                        TERAPKAN
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