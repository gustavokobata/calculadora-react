import React from 'react';

// import Button from './components/Button';
import './App.css';


  const calculadora = () => {
    return(
      <section className='body'>
        <div className='calculator-body'>
            <div className='display'>2139021</div>

            <button className='left-side-number clear'>C</button>
            <button className='operator-button left-side-number plus'>+</button>
            <button className='operator-button right-side-number minus'>-</button>
            <button className='right-side-number backspace'>BS</button>

            <button className='number-button left-side-number number-seven'>7</button>
            <button className='number-button left-side-number number-eight'>8</button>
            <button className='number-button right-side-number number-nine'>9</button>
            <button className='operator-button right-side-number times'>*</button>

            <button className='number-button left-side-number number-four'>4</button>
            <button className='number-button left-side-number number-five'>5</button>
            <button className='number-button right-side-number number-six'>6</button>
            <button className='operator-button right-side-number dividedby'>/</button>

            <button className='number-button left-side-number number-one'>1</button>
            <button className='number-button left-side-number number-two'>2</button>
            <button className='number-button right-side-number number-three'>3</button>
            <button className='right-side-number equals'>=</button>

            <button className='number-button left-side-number number-zero'>0</button>
            <button className='number-button right-side-number dot'>.</button>
        </div>
      </section>
    )
  }

export default calculadora;