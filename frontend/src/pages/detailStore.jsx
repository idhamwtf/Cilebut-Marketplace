import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import { FaFacebook, FaLine, FaTwitter, FaInstagram, FaHeart, FaCoins, FaTruck, FaMoneyBill } from 'react-icons/fa'

function DetailStore() {
    return (
        <div className="container-produk" >
            <div className="container-carousel-detail">
                <div className="container-carousel">
                    <Carousel infiniteLoop useKeyboardArrows autoPlay stopOnHover>
                        <div>
                            <img src="https://wallpaperaccess.com/full/17444.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://wallpaperaccess.com/full/17444.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://wallpaperaccess.com/full/17444.jpg" alt="" />
                        </div>
                    </Carousel>
                    <div style={{ display: 'flex', fontFamily: 'Roboto', marginTop: '55px' }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ marginLeft: '30px', marginRight: '10px' }} > Share: </div>
                            <div style={{ marginRight: '10px' }}> <FaFacebook /> </div>
                            <div style={{ marginRight: '10px' }}> <FaLine /></div>
                            <div style={{ marginRight: '10px' }}> <FaInstagram /></div>
                            <div style={{ marginRight: '10px' }}> <FaTwitter /></div>
                        </div>
                        <div style={{ marginLeft: '90px' }}>
                            <FaHeart /> Favorit (26)
                        </div>
                    </div>
                </div>
                <div className="container-detail-produk" >
                    <h1>Playstation 2</h1>
                    <Breadcrumb >
                        <Breadcrumb.Item active >
                            <div style={{ display: 'flex', color: 'black' }}>
                                <Typography >5.00</Typography>
                                <Rating name="read-only" value={5} readOnly />
                            </div>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active >
                            5 Penjualan
                        </Breadcrumb.Item>
                        <BreadcrumbItem active >
                            5 Penilaian
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div style={{ fontSize: '12px' }}>
                        <h1>RP.1.000.000,00</h1>
                        <div style={{ display: 'flex', marginTop: '35px' }}>
                            <div style={{ marginRight: '83px' }}>Koin</div>
                            <div><FaCoins /> Beli dan dapatkan 285 Koin Shopee</div>
                        </div>
                        <div style={{ display: 'flex', marginTop: '15px' }}>
                            <div style={{ marginRight: '35px' }}>Pengiriman</div>
                            <select>
                                <option defaultValue>--pilih kota-- </option>
                                <option>Jakarta</option>
                                <option>Depok</option>
                                <option>Bogor</option>
                                <option>Bandung</option>
                                <option>Bekasi</option>
                                <option>Tanggerang</option>
                            </select>
                            <div style={{ marginLeft: '50px' }}>Ongkos Kirim : RP.20.000,00 ( + RP.5.000,00 di luar Jabodetabek ) </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: '15px' }}>
                        <div style={{ marginRight: '83px' }}>
                            Kuantitas
                        </div>
                        <div>
                            1
                        </div>
                    </div>
                    <div style={{ marginTop: '15px', display: 'flex' }}>
                        <button type="submit" className="btn" style={{ fontSize: '14px', backgroundColor: '#ee4d2d', color: 'white', width: '240px', height: '40px' }} >Masukkan Keranjang</button>
                        <button type="submit" className="btn" style={{ fontSize: '14px', backgroundColor: '#ee4d2d', color: 'white', width: '240px', height: '40px', marginLeft: '30px' }} >Beli Sekarang</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailStore;