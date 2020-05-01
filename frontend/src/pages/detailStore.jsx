import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function DetailStore() {
    return (
        <div style={{
            paddingTop: '50px', paddingLeft: '100px', paddingRight: '100px',
            backgroundColor: `white`
        }} >
            <div style={{ padding: '30px', display: 'flex', minWidth: '80vh' }}>
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