import React from 'react'
import "./ScrollToTop.css"
const ScrollToTop=()=> {

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'auto'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
    return (
        <div>
            <button className="firstblock" onClick={scrollToTop}>Back TO Top</button>
        </div>
    )
}

export default ScrollToTop;
