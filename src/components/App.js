import React, {Component, useState} from "react";
import '../styles/App.css';
import slides from '../data';

// const App = () => {
//   return (
//     <></>
//   )
// }


// export default App;

const App = (slides) => {
  const[slide, setSlide] = useState(slides[0]);
  const[slideNumber,setSlideNumber] = useState(0);

  function next(){
    setSlideNumber(slideNumber+1);
    setSlide(slides[slideNumber])
  }

  function prev(){
    setSlideNumber(slideNumber-1);
    setSlide(slides[slideNumber])
  }

  function restart(){
    setSlideNumber(0)
  }
  
  return (
    <>
      <h1 data-testid="title">{slide.title}</h1>
      <p data-testid="text">{slide.text}</p>
      <button data-testid="button-next" disabled={slideNumber===slides.length-1? true:false} onClick={next}>Next</button>
      <button data-testid="button-prev" disabled={slideNumber===0? true:false} onClick={prev}>Prev</button>
      <button data-testid="button-restart" disabled={slideNumber===0? true:false} onClick={restart}>Restart</button>
    </>
  )
}


export default App;
