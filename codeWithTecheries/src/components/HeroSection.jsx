import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const HeroSection = () => {
    const heading = "CodeWithTecheries"; // Store heading as a string
  const smallerRefs = useRef([]); // Array of refs for smaller letters
  const biggerRefs = useRef([]); // Array of refs for bigger letters
  const scroll = useRef("");
  const cursor = useRef('');
  useEffect(() => {

    

    // Animate smaller letters
    gsap.fromTo(
      smallerRefs.current,
      { y: 60, opacity: 0  },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.2, ease: "power3.out" }
    );

    // Animate bigger letters
    gsap.fromTo(
      biggerRefs.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.2, ease: "power3.out" }
    );

    gsap.fromTo(scroll.current , 
      { y : 60 , opacity : 0 },
      { y : 0 , opacity : 0.5 , duration:2}
    )
  }, []);

  const length = Math.floor(heading.length / 2);


//   const handleCursor = (dets) => {
//     gsap.to(cursor.current , {
//       x: dets.clientX ,
//       y : dets.clientY, 
//     })
//   }
  return (
    <>
   
      <div className="w-full h-screen flex flex-col  justify-center items-center bg-black text-white relative px-10 max-sm:h-[85vh]">
        <div className="flex gap-1">
          {heading.split("").map((item, i) => {
            if (i < length) {
              // Smaller letters
              return (
                <span
                  key={i}
                  ref={(el) => (smallerRefs.current[i] = el)} 
                  className="text-5xl font-marker max-sm:text-2xl text-white"
                >
                  {item}
                </span>
              );
            } else {
             
              return (
                <span
                  key={i}
                  ref={(el) => (biggerRefs.current[i - length] = el)}
                  className="text-5xl font-marker max-sm:text-2xl text-white"
                >
                  {item}
                </span>
              );
            }
          })}
        </div>

        <h2 ref={scroll} className="text-sm font-marker opacity-50 absolute bottom-10">Scroll Down</h2>
      </div>
    </>
  )
}

export default HeroSection