import React from 'react'
import '../assets/fonts/avgr45w.ttf'
import styled from 'styled-components'
import { devices } from './helpers/media-query'



const ContainerBlock001 = styled.div`
.header-mainTextContainer{
    height: 70vh;
    @media ${devices.laptop}{
        height: 88vh;
    }
        display: flex;
        justify-content: center;
        align-items: center;
        .header-mainTextWrap{
            margin-top: -100px;
            width: 100%;
            @media ${devices.tabletS}{
                padding-left: 100px;
            }


            h6{
                font-family: 'Open Sans', sans-serif;
                font-size:16px; 
                color:rgba(192, 52, 94, 0.75);
                letter-spacing: 0.8px;
                margin-bottom: 55px;
            }
            .header-mainTextGroup{
                max-width: 205px;
                font-family: 'Avant Garge', sans-serif; 
                letter-spacing: 0px;
                margig:0;
                font-size:48px;
                
               

                @media ${devices.laptopS}{
                    white-space: nowrap;
                }
         
                h2:first-child{
                // margin-bottom: -50px;
                color:#19293A;  
                }
        
                h2:last-child{
                color:#506473;
                margin-bottom:56px;
                }
            }
          p{
            color: #506473;
            font-size: 21px;
            line-height: 38px;
            max-width: 420px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 300;
            margin-top: -20px;
            margin-bottom:60px;
           }
           h3{
            font-family: 'Open Sans', sans-serif;
            font-weight: 500;
            color: #19293A;
            font-size: 20px;
            width: fit-content;
            position: relative;
            cursor:pointer;
          
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
    
    }
        
}
    
`


function Block_001({colorTitle, titlepartone, titleparttwo, subheading, act}) {
    


  return (
    <ContainerBlock001>
        <div className="header-mainTextContainer">
            <div className="header-mainTextWrap">
                <h6>{colorTitle}</h6>
                <div className="header-mainTextGroup">
                <h2>{titlepartone}</h2>
                <h2>{titleparttwo}</h2>
                </div>
                <p>{subheading} </p>
                <h3>{act}</h3>

            </div>
        </div>
    </ContainerBlock001>
  )
}

export default Block_001