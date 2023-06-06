import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
import styled from 'styled-components';
import '../assets/fonts/avgr45w.ttf'
import { devices } from './helpers/media-query'


const Container = styled.div`
.header-mainTextGroup{
    font-family: 'Avant Garge', sans-serif; 
    letter-spacing: 0px;
    margig:0;
    font-size:48px;
}

    h2:first-child{
        color:#19293A; 
        white-space: nowrap;
    }

    h2:last-child{
    color:#506473;
    margin-bottom:56px;
    }
    h3{
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
        color: #19293A;
        font-size: 20px;
        cursor:pointer;
        margin-top:30px;

        @media ${devices.footerMobile}{
          width: fit-content;
        }
      
        &::after{
            content: '';
            position: absolute;
            width: 0;
            top: 30px;
            bottom: 0;
            left: 0;
            height: 5px;
            background-color: #C0345E;
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
            background-color: #C0345E;
            transition: 300ms all;  
        }  
       }

       .footer-section{

           @media ${devices.footerMobile}{
            height:500px;
           }
          


       }
       .container{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
       }
       .row{
           margin:100px 0;
       }

       .footer-letsTalk{
         margin-top:100px;
       }
       .text-uppercase{
        font-family: 'Avant Garge', sans-serif; 
        letter-spacing: 2.1px;
        color: #19293A;
        font-size:21px;
       }
       .text-reset, span{
        letter-spacing: 0.53px;
        color: #506473;
        font-family: 'Open Sans', sans-serif;
        font-size:21px;
        &.wrapp{
          display: flex;
          flex-direction: column;
        }
       }
       p{
        font-weight:600;
       }
       span{
        font-weight:400;
       }
     
`


function Footer() {
    return (
    <Container className='test'>
        <MDBFooter  className='text-center text-lg-start text-muted '>
          <section className='footer-section'>
            <div className='container text-center text-md-start '>
              <div className='row '>
                <div className=' col-md-3 col-lg-4 col-xl-6  mb-4'>
                    <div className='header-mainTextGroup'>
                  <h2>
                    We're a brands
                  </h2>
                  <h2>
                    best friend
                  </h2>  
                  <h3>
                    Let's talk
                  </h3>           
                  </div>
              
             
                </div>
    
                <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                  <h6 className='text-uppercase  mb-4'>EXPLORE</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                     Services
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Work
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                     About
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Blog
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Careers
                    </a>
                  </p>
                </div>
    
                <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                  <h6 className='text-uppercase  mb-4'>Services</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Brand
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Development
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Marketing
                    </a>
                  </p>
               
                </div>
    
                <div className='col-md-4 col-lg-3 col-xl-2 mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase  mb-4'>Questions?</h6>
                  <p className='text-reset wrapp'>
                  Call Us
                  <span>
                    0121 345 678
                  </span>
                  </p>
              
                  <p className='text-reset wrapp'>
                    Email us
                    <span>
                    info@digitalspaniel.co.uk
                  </span>
                  </p>
               
                </div>
              </div>

              <section className='d-flex justify-content-center justify-content-lg-between  border-bottom'>
            <div className='me-5 d-none d-lg-block'>
              <span>Copyright © Digital Spaniel 2019. All rights reserved. </span>
            </div>
    
            <div>
              <a href='' className='me-4 text-reset'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='' className='me-4 text-reset'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='' className='me-4 text-reset'>
                <i className='fab fa-google'></i>
              </a>
              <a href='' className='me-4 text-reset'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href='' className='me-4 text-reset'>
                <i className='fab fa-linkedin'></i>
              </a>

            </div>
          </section>
            </div>
            
          </section>
        </MDBFooter>
        </Container>
      );
}

export default Footer