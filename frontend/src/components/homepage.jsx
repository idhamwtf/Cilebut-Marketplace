import React from 'react';
import './../css/homepage.css'
import Jumbotron1 from './../components/jumbtoronhomepage1'
import Jumbotron2 from './../components/jumbotronhomepage2'

function Homepage() {

    return (
        <div className='homepage-box' >
                <Jumbotron1/>
                <Jumbotron2/>

        </div>
    )
}

export default Homepage;