
import React,{useState,useEffect,useContext,useRef} from 'react'
import axios from 'axios'
import { TestimonialContext } from '../TestimonialContext'
import styled from 'styled-components'
import '../assets/fonts/avgr45w.ttf'
import { devices } from './helpers/media-query'



const Container = styled.div`
display: block;
height: 1000px;
padding:0 20px;
margin-top: -150px;

  @media ${devices.testimonial}{
    padding:0 126px;  
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    padding:0 100px;
    height: 1267px;
    column-gap: 40px;
    align-items: center;
  }
  @media ${devices.laptopXl}{
    padding:0 226px;
  }
`
const Card = styled.div`
border-radius: 10px;
filter: drop-shadow(0px 0px 10px ##19293A80);
background-color: #19293A
width: 536px;
@media ${devices.testimonial}{
  width: 536px;
}


img{
  width: 125px;
}
.cardWrapper{
 
  @media ${devices.testimonial}{
    max-width: 434px;
  }
}



.cardWrapper{
height: 663px;


  h4{
    color: #506473;
    height: 100%;
    margin-top: 64px;
    font-size: 26px;
    text-align: center;
    max-width: 318px;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 0px;
    font-style: italic;
    line-height: 41.6px;
    position: relative;
    z-index: 2;

    &::before{
      content: '“';
      position: absolute;
      top: 4px;
      left: -8px;
      color: #C5CACE;
      font-size: 130px;
      z-index: -1;
      font-weight: bolder;
      font-family: 'Avant Garge',sans-serif;
      
  }
  &::after{
    content: '”';
    position: absolute;
    bottom:0;
    right:0;
    color: #C5CACE;
    font-size: 130px;
    z-index: -1;
    font-weight: bolder;
    font-family: 'Avant Garge',sans-serif;
  }
 
}
}
p{
  color: #19293A;
  margin-bottom: 64px;
  font-family: 'Open Sans', sans-serif;
  
}
h6{
  color: #19293A;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 8px;
  font-weight: 700;
  
}
 img{
    width:96px;
    height:96px;
    margin-bottom:16px;
  }
}
`

const Sliders = styled.div`
.slideshowDots {
    text-align: center;
    margin-top: -200px;
    margin-bottom: 200px;
  }
  .slideshowDot {
    display: inline-block;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
  
    background-color: #C5C9CD;
  }
  .slideshowDot.active {
    background-color:  #19293A ;
    height: 34px;
    width: 34px;
  }
  .slide {
    display: inline-block;
    width: 100%;
    border-radius: 40px;
  }

`






function TestimonialBlock_old() {

    // Delay for the animation
    const delay = 2200;
    // TestimonialContext is the context that is used to get the testimonial data
    const {testimonial} = useContext(TestimonialContext)


    // State for index /
    const [index, setIndex] = useState(0);
    //presist state (does not cause re-renders)
    const timeoutRef = useRef(null);
    //copy
    const testimonialArr = [...testimonial]


    // reset if I am in next slide
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

      useEffect(() => {
        // reset timout for every slide
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === testimonialArr.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
         // Clear up
        return () => {
          resetTimeout();
        };
        // Onyly for index
      }, [index]);

      // Breakpoint using different 'animation for slides for different devices'
      const breakpoint = 1200;
      const [width, setWidth] = useState(window.innerWidth);

      useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         window.addEventListener("resize", handleResizeWindow);
         //clear up 
         return () => {
           window.removeEventListener("resize", handleResizeWindow);
         };
       }, []);
     
    
  // Breakpoint < 12000
  if(width < breakpoint){
    return (
      <>
      <Container >
        {testimonial && testimonial.map(({ name, jobtitle,image,description,id}, i) => (      
            <Card key={i} 
            >
              <div className="card-wrapper-first">
                <div className={`cardWrapper  ${index === i ? "active-class" : ""} ${id}`}
                style={{display:`${index === i ?  'flex' : 'none'} `,backgroundColor:`${index ===i ?  '#19293A' : '#E2E4E6 '} `, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 0px 20px #19293A80', borderRadius: '10px' }} > 
                  <h4 style={{color: `${index ===i ? "#ffff" : '#506473'}`}}>{description}</h4>
                    <img src={image} alt={name}/>
                    <h6 style={{color: `${index ===i ? "#ffff" : '#19293A'}`}} >{name}</h6>
                    <p style={{color: `${index ===i ? "#ffff" : '#19293A'}`}}>{jobtitle}</p>
                </div> 
                </div>
            </Card>
          ))}
          
        
    </Container>
      <Sliders>
        <div className="slideshowDots">
            {testimonialArr.map((__, idx) => (
            <div key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => setIndex(idx)}
        
          />
          ))}
        </div>
      </Sliders>
    </>
  )}

// Laptop above 1200
  return (
  <>
  <Container >
    {testimonial && testimonial.map(({ name, jobtitle,image,description,id}, i) => (

        <Card key={i} 
        >
          <div className="card-wrapper-first">
            <div className={`cardWrapper  ${index === i ? "active-class" : ""} ${id}`}
            style={{ transform: `scale(${index ===i ?  1.1 : 1})` ,backgroundColor:`${index ===i ?  '#19293A' : '#E2E4E6 '} `, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 0px 20px #19293A80', borderRadius: '10px',}}> 
              <h4 style={{color: `${index ===i ? "#ffff" : '#506473'}`}}>{description}</h4>
                <img src={image} alt={name}/>
                <h6 style={{color: `${index ===i ? "#ffff" : '#19293A'}`}} >{name}</h6>
                <p style={{color: `${index ===i ? "#ffff" : '#19293A'}`}}>{jobtitle}</p>
            </div> 
            </div>
        </Card>
      ))}
      
      
  </Container>
    <Sliders>
      <div className="slideshowDots">
      {testimonialArr.map((__, idx) => (
          <div key={idx}
          className={`slideshowDot${index === idx ? " active" : ""}`}
          onClick={() => setIndex(idx)}

          />

      ))}
      </div>
    </Sliders>
  </>
)}






export default TestimonialBlock_old