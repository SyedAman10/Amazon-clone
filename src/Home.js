import React from 'react'
import './Home.css'
import Item from './Item';

function Home() {
    return (
        <div className="home">
          <div className="home__container">
          <img className="home__image" src="https://cdn.mos.cms.futurecdn.net/nriu7mvdGU3v4HSnCE5Me3-1200-80.jpg" alt="image"></img>
          </div>
           <div className="home__row">
           <Item id='1' title="Real Madrid's Jersey Limited Edition" price={15.99}
           image = "https://thumblr.uniid.it/product/195911/c4aa78a66f49.jpg"
           rating = {5} />
           
           <Item id='2' title="Champions League Knockout Round Match-Ball" price={10.99}
           image = "https://images-na.ssl-images-amazon.com/images/I/91B77VALt0L._AC_SL1500_.jpg"
           rating = {4}/>
           </div> 
           
           <div className="home__row">
            <Item id='3' title="Nike Tiempo Legend 7 Sergio Ramos 4 FG Limited Edition" price={40.99}
            image = "https://cf.shopee.com.my/file/5eaa4df51d7bbcffa3ed72941252c366"
            rating = {5}/>
            <Item id='4' title="Adidas Predator Shin Guards (FL1390) " price={35.99} image = "https://i.pinimg.com/474x/94/96/9a/94969ad8dd9633036f1fd96dec3e869d.jpg"
            rating = {4} />
            <Item id='5' title = "NF Real Music Merchandise : Leave Me Alone (Limited Edition)" price= {24.99}
            image = "https://cdn.shopify.com/s/files/1/1002/2120/products/nf2020_leavemealonelyric_LStee_back_1024x1024.png?v=1603151164"
            rating = {5} />
            
           
           </div>
           <div  className="home__row">
            <Item id='6' title = "Blackbear Merchandise : Queen of Broken Hearts(Limited Edition) " price = {19.99}
            image = "https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/image600/.fz8ZYVOX/SharedImage-106560.png?t=253507b6f6d45e836c85"
            rating = {4} />
           
           </div>             
        </div>
        
    )
}

export default Home
