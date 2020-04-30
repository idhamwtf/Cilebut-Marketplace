import React from 'react';
import { Carousel } from 'react-responsive-carousel'

function DetailStore() {
    return (
        <div style={{ paddingTop: '50px', paddingLeft: '100px', paddingRight: '100px' }}>
            <div style={{ border: '1px solid black', padding: '30px', display: 'flex' }}>
                <div style={{ width: '650px', border: '1px solid black' }}>
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
                <div style={{ border: '1px solid black', minWidth: '120vh', marginLeft: '30px' }} >
                    <h1 style={{ display: 'flex', justifyContent: 'center' }}>Playstation 2</h1>
                </div>
            </div>
        </div>
    )
}

export default DetailStore;