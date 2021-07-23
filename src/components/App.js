import React, {Component, useState} from "react";
import '../styles/App.css';
import slides from '../data';

// const App = () => {
//   return (
//     <></>
//   )
// }


// export default App;

const App = () => {
  let Slide = slides.map((data) => data);
  
  const[slide, setSlide] = useState(Slide[0]);
  const[slideNumber,setSlideNumber] = useState(0);
  
  function next(){
    setSlideNumber(slideNumber+1);
    setSlide(Slide[slideNumber])
  }

  function prev(){
    setSlideNumber(slideNumber-1);
    setSlide(Slide[slideNumber])
  }

  function restart(){
    setSlideNumber(0)
  }
  
  return (
    <>
      <h1>{slide.title}</h1>
      <p>{slide.text}</p>
      <button data-testid="button-next" disabled={slideNumber===Slide.length-1? true:false} onClick={next}>Next</button>
      <button data-testid="button-prev" disabled={slideNumber===0? true:false} onClick={prev}>Prev</button>
      <button data-testid="button-restart" disabled={slideNumber===0? true:false} onClick={restart}>Restart</button>
    </>
  )
}


export default App;
