import React,{useState} from 'react'
import { devices } from './media-query'
import { Divide as Hamburger } from 'hamburger-react'
import styled from 'styled-components'



const HamburgerContainer = styled.div`

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right:20px;

    .hamburger-react{
        color:white;
        @media ${devices.laptop}{
            display:none;
        }
    }

  .menuNav {
    overflow-y: scroll;
    list-style: none;
    position: fixed;
    top: 0;
    background:#EDEFF1;
    left: 0;
    bottom: 0;
    height: 100vh;
    width: 0;
    overflow: hidden;
    max-width: 290px;
    z-index: 9;
    visibility: hidden;
    margin:0;
  }
  
  .menuNav.showMenu {
    width: 100%;
    visibility: visible;
  }
  
  a {
    display: block;
    padding: 10px 40px;
    text-decoration: none;
    color: #C0345E;
    text-transform: uppercase;
    font-weight: bold;
  }
  
  .menuNav li:first-child {
    margin-top: 7rem;
  }
`


function HamburgerMobile() {
     // State
const [hamburger, setHamburger] = useState(false)
const handleToggle = () => {
    setHamburger(!hamburger)
  }

  return (
    <HamburgerContainer >
    <Hamburger toggled={hamburger} toggle={setHamburger} />
                <ul className={`menuNav ${hamburger ? " showMenu" : ""}`}>
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
        </HamburgerContainer>
  )
}

export default HamburgerMobile