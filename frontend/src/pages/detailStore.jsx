import React from 'react';
import { Carousel } from 'react-responsive-carousel'

function DetailStore() {
    return (
        <div style={{ paddingTop: '50px', paddingLeft: '100px', paddingRight: '100px' }}>
            <div style={{ border: '3px solid black', padding: '30px', display: 'flex', minWidth: '80vh' }}>
                <div style={{ border: '3px solid black', width: '600px' }}>
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
                <div style={{ border: '3px solid black', minWidth: '110vh', marginLeft: '50px', padding: '25px' }} >
                    <h1 style={{ display: 'flex', justifyContent: 'center' }}>Playstation 2</h1>
                    <div style={{ border: '3px solid black', minHeight: '40vh', padding: '20px', fontSize: '21px', marginLeft: '30px' }}>
                        <div>Store Name : Adidaya Gaming </div>
                        <div>Total Buyer : 10</div>
                        <div>Stock : 7 </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailStore;