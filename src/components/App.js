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
  
  let [slide, setSlide] = useState(Slide[0]);
  let [slideNumber,setSlideNumber] = useState(0);
//   console.log(Slide[slideNumber]);
  function next(){
    setSlideNumber(++slideNumber);
    setSlide(Slide[slideNumber])
  }

  function prev(){
    setSlideNumber(--slideNumber);
    setSlide(Slide[slideNumber])
  }

  function restart(){
    setSlideNumber(0);
    setSlide(Slide[0])
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
