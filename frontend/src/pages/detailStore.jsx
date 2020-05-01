import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import { FaFacebook, FaLine, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa'

function DetailStore() {
    return (
        <div className="container-produk" >
            <div className="container-carousel-detail">
                <div className="container-carousel">
                    <Carousel infiniteLoop useKeyboardArrows autoPlay stopOnHover>
                        <div>
                            <img src="https://wallpaperaccess.com/full/17444.jpg" />
                        </div>
                        <div>
                            <img src="https://wallpaperaccess.com/full/17444.jpg" />
                        </div>
                        <div>
                            <img src="https://wallpaperaccess.com/full/17444.jpg" />
                        </div>
                    </Carousel>
                    <div style={{ display: 'flex', fontFamily: 'Roboto' }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ marginLeft: '30px', marginRight: '10px' }} > Share: </div>
                            <div style={{ marginRight: '10px' }}> <FaFacebook /> </div>
                            <div style={{ marginRight: '10px' }}> <FaLine /></div>
                            <div style={{ marginRight: '10px' }}> <FaInstagram /></div>
                            <div style={{ marginRight: '10px' }}> <FaTwitter /></div>
                        </div>
                        <div style={{ marginLeft: '200px' }}>
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
                </div>
            </div>
        </div>
    )
}

export default DetailStore;