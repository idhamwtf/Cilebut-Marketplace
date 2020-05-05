import React from 'react';
import Jumbotron1 from './../components/jumbtoronhomepage1'

function Homepage() {

    return (

        <div className='homepage-box' 
        style={{width:'1530px',
         height:'2500px',
         backgroundImage:`url(${'https://cf.shopee.co.id/file/5df8a66220df2ae81a60829043f23a81'})`, 
         backgroundRepeat:'no-repeat',
         backgroundSize:'100%',
         backgroundColor:'#f5f5f5',
         margin:'0px',
         border:'1px transparent solid'}}>

                <Jumbotron1/>

        </div>
    )
}

export default Homepage;