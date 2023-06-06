import React,{useContext} from 'react'
import { TestimonialContext } from '../TestimonialContext'
import styled from 'styled-components'
import { devices } from './helpers/media-query'


const H1 = styled.h1`
    font-family: 'avgr45w';
    font-size: 48px;
    color: #19293A;
    margin-top: 50px;
    margin-bottom: 0;
    margin-left: 100px;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    `

const Card = styled.div`

height: 800px;
width: 100%;
@media ${devices.tabletL}{
    height: 1000px;
}
@media ${devices.tabletL}{
    margin-bottom: 300px;
}
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

.cardWrapper{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
}
.image01{
   img{
        max-width: 600px;
        max-height: 500px;
        object-fit: cover;
        @media ${devices.tabletSMax}{
            max-width: 300px;
            max-height: 300px;
        }
   }
}
.image02Wrapp{

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    img{
        max-width: 400px;
        max-height: 400px;
        object-fit: cover;
        @media ${devices.tabletSMax}{
            max-width: 300px;
            max-height: 300px;
        }
    }
}
.image02{
    img{
        max-width: 400px;
        max-height: 600px;
        object-fit: cover;
 

        @media ${devices.laptop}{
      
        }
        @media ${devices.tabletL}{
            margin-top: 0px;
        }
        @media ${devices.tabletL}{
            margin-bottom: 300px;
        }
        @media ${devices.tabletSMax}{
            max-width: 150px;
            max-height: 300px;
            margin-bottom: 0px;
        }
    }
    
  
 
}

`



function Gallery() {
    const {image} = useContext(TestimonialContext)

  return (
      <>
      <H1>Gallery</H1>
    <Card>
      
            <div className="cardWrapper">
            <div class="image01">
            <img src={image[0].image}></img>

            </div>

            <div class="image02Wrapp">
                <img src={image[1].image}></img>
                <img src={image[2].image}></img>

            </div>
            <div class="image02">
            <img src={image[3].image}></img>

            </div>
       </div> 
    </Card>
    </>
  )
}

export default Gallery