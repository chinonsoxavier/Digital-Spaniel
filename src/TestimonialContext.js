
import React,{useState,useEffect,createContext} from 'react'
// import axios from 'axios'


export  const TestimonialContext = createContext([])

export const TestimonialProvider = ({children}) => {
    const [testimonial, setTestimonial] = useState([
        {
            "id":3,
            "name": "Paul Simon",
            "jobtitle": "Founder, MegaCorp",
            "description": "Working with Digital Spaniel has been breath of fresh air. Their approach and attitude kept me informed and included from the start. Super please with the end results too! ",
            "image": "https://i.ibb.co/McDjjDw/testimonial-face03-2x.png"
            
        },
        {
            "id":1,
            "name": "Johnny B. Goode",
            "jobtitle": "CEO, Getting Things Done   ",
            "description": "Advice and support from DigiSpan was second none. Always willing to help and offer advice and solutons. A very good and rapid understanding of our requirments was key to this",
            "image": "https://i.ibb.co/p007dmV/testimonial-face01-2x.png"
            
        },
        {
            "id":2,
            "name": "Mary Jane",
            "jobtitle": "CEO, Design Matters",
            "description": "We needed a creative and unique brand which could compete agains Digital Spaniel delivered in spades and we've seen a huge response to the product launch",
            "image": "https://i.ibb.co/BGrnCc9/testimonial-face02-2x.png"
            
        }
    ])


    const [image, setImage] = useState([
        {
            "id":1,
            "image": "https://i.ibb.co/BLLnFHy/office01-2x.png"

        },
        {
            "id":2,
            "image": "https://i.ibb.co/F4CDvs6/office03-2x.png"
        },
        {
            "id":3,
            "image": "https://i.ibb.co/kxk8dYV/office04-2x.png"
        },
        {
            "id":4,
            "image": "https://i.ibb.co/kQy123g/office02-2x.png"
        }

    ])



//JSON LOCAL DATABASE 
    // useEffect(() => {
    //     axios.get('http://localhost:3000/testimonials')
    //     .then(res => {
    //         // console.log(res.data)
    //         setTestimonial(res.data)

    //     })
    //     return () => {
    //         setTestimonial([])
    //     }
    // },[])


    return (

     
            <TestimonialContext.Provider value={{testimonial, image}}>
                  {children}
            </TestimonialContext.Provider>
            
    );
}