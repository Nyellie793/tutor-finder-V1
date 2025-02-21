import { useEffect, useState } from "react";

//Array of images 
const images = [
    '/wes-hicks-4-EeTnaC1S4-unsplash.jpg',
    '/thomas-park-w9i7wMaM3EE-unsplash.jpg',
    '/scott-graham-5fNmWej4tAA-unsplash.jpg',
    '/compare-fibre-Y8TiLvKnLeg-unsplash.jpg'
  ];

const Hero = () => {

    // states of sliders
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() =>{
        const timer = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);
  
        return () => clearInterval(timer);
      }, []);
    



  return (
     
     <section className="hero">
     <div className="hero-content">
       <h1>Find the perfect tutor/teacher, mentor or coach for your learning journey </h1>
       <p className='hero-subtitle'>Connect with experts in any subject, anytime, anywhere to achieve your learning goals </p>
       <div className="search-container">
         <div className='search-wrapper'>
           <input
            type="text"
            placeholder='What would you like to Learn?'
            className='search-input'
           />
           <button className="search-btn">Find Tutors</button>
         </div>
       </div>
       <div className="stats">
         <div className="stat-item">
           <span className="stat-number">5000+</span>
           <span className="stat-label">Expert Tutors, Teachers, Mentors & Coaches</span>
         </div>
         <div className="stat-item">
           <span className="stat-number">50+</span>
           <span className="stat-label">Subjects & Skills</span>
         </div>
         <div className="stat-item">
           <span className="stat-number">100k+</span>
           <span className="stat-label">Happy Students</span>
         </div>
       </div>
     </div>
     <div className="hero-image-container">
       <div className="hero-image-wrapper">
         <img
          src={images[currentIndex]} 
          alt="Learning"
          className='hero-image'
         />
       </div>
     </div>
   </section>
  )
}

export default Hero