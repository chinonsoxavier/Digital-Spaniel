import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import imageHeader from '../assets/images/Spaniel01_gradient.png'
import logoHeader from '../assets/images/logoHeader.png'
import '../assets/fonts/avgr45w.ttf'
import Block_001 from './Block_001'
import { devices } from './helpers/media-query'
import HamburgerMobile from './helpers/HamburgerMobile'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { WindowScroll } from './helpers/WindowScroll'




// Css
const Container = styled.div`

background-image: url(${imageHeader});
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
background-position: center;


@media ${devices.tabletS}{
    background-size: 400px;
    background-position: top right; 
}


@media ${devices.laptop} {
    background-size: contain;
    height: 100vh;
    background-position: right;
}


.header-wrapper{
    display: flex;
    justify-content: space-between;
    width: 100%;
    position:sticky;
    height: 150px;
  
    transition: all 0.5s ease-in-out;

    &.down{
        top:-24px;
        background-color:#C0345E;
    }
    $.up{
        top:0;
    }


    .header-menu{
        display: none;
    }
    @media ${devices.laptop} {
        .header-menu{
            display: flex;
            width: 100%;
            justify-content: flex-end;
            margin-right: 100px;
            ul{
                display: flex;
                align-items: center;
                
            }
            li{
                list-style: none;
                
            }
            a{
                text-decoration: none;
                display: flex;
                align-items: center;
                margin-right: 30px;
                margin-left: 30px;
                font-family: 'Open Sans', sans-serif;
                color: #fff;
                font-size:20px;   
                position: relative;
              
             
                &::after{
                    content: '';
                    position: absolute;
                    width: 0;
                    top: 30px;
                    bottom: 0;
                    left: 0;
                    height: 5px;
                    background-color: #fff;
                    transition: 300ms all;
                }  
            
                :hover:after{
                    content: '';
                    position: absolute;
                    width: 100%;
                    top: 30px;
                    bottom: -3px;
                    left: 0;
                    height: 5px;
                    background-color: #fff;
                    transition: 300ms all;  
                }  
            }
        }
    }  
}
.header-logo{
    display: flex;
    justify-content: left;
    padding:35px 0 0 20px;
    cursor: pointer;
    @media ${devices.tabletS}{
        padding:35px 0 0 170px;
    }
    
    img{
        width: auto;
        height: 80px;
        object-fit: contain;
        :hover{
            cursour: pointer;
        }
    }
}
.header-mainTextContainer{
height: 88vh;
display: flex;
justify-content: center;
align-items: center;

// Changing text color in small devices for Block_001

@media ${devices.tabletSMax}{
  
 .header-mainTextWrap{
        h2{
            color: #fff;
        }
            color:#ffff;
        h3{
                color:white;
        }
        
        p{
            color:white;
        }
    }
}

`





// Function
function Header({colorTitle, titlepartone, titleparttwo, subheading, act}) {
    // Assigning new const to my helper function
    const scrollDirection = WindowScroll()
  return (
      
    <Container>
        <div className={`header-wrapper ${scrollDirection ==='down' ? "down" : "up"} `} >
            <div className="header-logo">
    
                    <a>
                        <img src={logoHeader} alt="logo" />
                    </a>

            </div>

            <div className="header-menu">
                <ul>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Work</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <div>
                    
                    </div>
                </ul>
            </div>
            <HamburgerMobile />            
        </div>
        
        <MDBContainer>
      <MDBRow>
        <MDBCol md="8" className='header-block_001'>
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
      </MDBRow>
    </MDBContainer>
    </Container>
  )
}

export default Header