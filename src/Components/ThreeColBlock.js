import React from 'react'
import styled from 'styled-components'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Block_001 from './Block_001';
import '../assets/fonts/avgr45w.ttf'
import { devices } from './helpers/media-query'

const Container = styled.div`
display:flex;
height:100%;
height:1200px;
background-color: #EDEFF1;
display: flex;
flex-direction: column;
justify-content: center;

a{
  color:#506473;

  :hover{
    color:#2e3a42;
  }
}

@media ${devices.tablet}{
  height:787px;
}

  h6{
    font-size:21px;
    letter-spacing: 2.1px;
    color: #19293A;
    font-family: 'Avant Garge', sans-serif; 
  }
  p{
    font-size:21px;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.53px;
  }

  @media ${devices.tablet}{
    .threeColBlack-container{
    &:last-child{
      margin-bottom:300px;
    }
  }
  .threeColBlack-container{
    display:flex;
  }
  .threeColBlack-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom:60px;

    @media ${devices.tablet}{
      flex-direction: column;
    }
}

 .threeColBlack-bototmFooter{

  @media ${devices. mobileM}{
    margin-left:80px;
  }

  
   @media ${devices.tablet}{
    margin-top:63px;
    margin-left:0px;
   }
 }



 @media ${devices.mobileL}{
  .arrow-wrapper{
    display:flex;
    align-items: baseline;
  }
  .arrow {
   display: inline-block;
   width: 24px;
   height: 24px;
   background-color:#506473;
   border-radius: 50%;
   margin-left:10px;
   transition: transform .2s; 
   cursor:pointer;

   :hover{
    transform: scale(1.5)
   }
 }
 
 .arrow:after {
   content: '';
   display: inline-block;
   margin-left: 7px;
   width: 8px;
   height: 8px;
   margin-bottom: 2px;
   border-top: 1.5px solid #FFFFFF;
   border-right: 1.5px solid #FFFFFF;
   -moz-transform: rotate(45deg);
   -webkit-transform: rotate(45deg);
   transform: rotate(45deg);
 }
 }
 
.no-wrap{
  white-space: pre;
}



`




function ThreeColBlock() {
  return (
    <Container>
     <MDBContainer>
      <MDBRow>
        <MDBCol size='12' md="12" lg="7">
        <Block_001 
        colorTitle="BRAND, DEV, ECOM, MARKETING"
        titlepartone="We unleash"
        titleparttwo="business potential"
        subheading="We create brand experiences which are memorable and distinct. 
        Our experienced team create and develop brands 
        with personality and resonance."
        act="Let's talk"
        />   
         </MDBCol>
         
        <MDBCol size='12' md="9" lg="3"className='threeColBlack-container'>
 
        <div className='threeColBlack-wrapper'>
        <div className='threeColBlack-topFooter'>
          <h6>Brand</h6>
          <span className="arrow-wrapper">
          <a href='/'><p>Brand Strategy</p></a><span className='arrow'></span>
          </span>
          <a href='/'><p>Logo  & Name</p></a>
          <a href='/'><p>Identity & Colleteral</p></a>
          </div>
          <div className='threeColBlack-bototmFooter'>
          <h6>Development</h6>
          <a href='/'><p>eCommerce</p></a>
          <a href='/'><p>Web Development</p></a>
          <a href='/'><p>Mobile Aps</p></a>
          </div>
        </div>

        </MDBCol>
        <MDBCol size='12' md="3" lg="2" className='threeColBlack-container'>
        <div className='threeColBlack-wrapper '>
        <div className='threeColBlack-topFooter'>
          <h6>Marketing</h6>
          <a href='/'><p>Digital</p></a>
          <a href='/'><p className="no-wrap">Market Research</p></a>
          </div>
        
        </div>
        
    
        
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </Container>
  )
}

export default ThreeColBlock