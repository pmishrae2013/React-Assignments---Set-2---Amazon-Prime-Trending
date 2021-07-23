import React, {Component, useState} from "react";
import '../styles/App.css';

// const App = () => {
//   return (
//     <></>
//   )
// }


// export default App;

const App = (props) => {
  const[slide, setSlide] = useState(props.slides[0]);
  const[slideNumber,setSlideNumber] = useState(0);

  function next(){
    setSlideNumber(slideNumber+1);
    setSlide(props.slides[slideNumber])
  }

  function prev(){
    setSlideNumber(slideNumber-1);
    setSlide(props.slides[slideNumber])
  }

  function restart(){
    setSlideNumber(0)
  }
  
  return (
    <>
      <h1>{props.slides.title}</h1>
      <p>{props.slides.text}</p>
      <button data-testid="button-next" disabled={slideNumber===props.slides.length-1? true:false} onClick={next}>Next</button>
      <button data-testid="button-prev" disabled={slideNumber===0? true:false} onClick={prev}>Prev</button>
      <button data-testid="button-restart" disabled={slideNumber===0? true:false} onClick={restart}>Restart</button>
    </>
  )
}


export default App;
