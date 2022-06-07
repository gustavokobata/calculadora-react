import React, { useState } from 'react';

// import Button from './components/Button';
import './Calculator.css';


  const Calculator = () => {
    const [num, setNum] = useState(0);
    const [prevNum, setPrevNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e) {
      var input = e.target.value;
      num===0 ? setNum(input) : setNum(num + input);
    }

    function operatorHandler(e) {
      var operatorInput = e.target.value;
      setOperator(operatorInput);
      setPrevNum(num);
      setNum(0);
    }

    function calculate() {
      switch(operator) {
        case "+":
          return (setNum(parseFloat(prevNum) + parseFloat(num))).toFixed(2);
        case "-":
          return setNum(parseFloat(prevNum) - parseFloat(num));
        case "*":
          return setNum(parseFloat(prevNum) * parseFloat(num));
        case "/":
          return setNum(parseFloat(prevNum) / parseFloat(num));
        default:
          return "ERROR"
      }
    }

    function clear(e){
      setNum(0);
    }

    return(
      <section className='body'>
        <div className='calculator-body'>
            <div className='display'>{num}</div>

            <button className='left-side-number clear' onClick={clear}>C</button>
            <button className='operator-button left-side-number plus' onClick={operatorHandler} value="+">+</button>
            <button className='operator-button right-side-number minus' onClick={operatorHandler} value="-">-</button>
            <button className='right-side-number backspace' onClick={inputNum}>BS</button>

            <button className='number-button left-side-number number-seven' onClick={inputNum} value={7}>7</button>
            <button className='number-button left-side-number number-eight' onClick={inputNum} value={8}>8</button>
            <button className='number-button right-side-number number-nine' onClick={inputNum} value={9}>9</button>
            <button className='operator-button right-side-number times' onClick={operatorHandler} value="*">*</button>

            <button className='number-button left-side-number number-four' onClick={inputNum} value={4}>4</button>
            <button className='number-button left-side-number number-five' onClick={inputNum} value={5}>5</button>
            <button className='number-button right-side-number number-six' onClick={inputNum} value={6}>6</button>
            <button className='operator-button right-side-number divide' onClick={operatorHandler} value="/">/</button>

            <button className='number-button left-side-number number-one' onClick={inputNum} value={1}>1</button>
            <button className='number-button left-side-number number-two' onClick={inputNum} value={2}>2</button>
            <button className='number-button right-side-number number-three' onClick={inputNum} value={3}>3</button>
            <button className='right-side-number equals' onClick={calculate}>=</button>

            <button className='number-button left-side-number number-zero' onClick={inputNum} value={0}>0</button>
            <button className='number-button right-side-number comma' onClick={inputNum} value={"."}>,</button>
        </div>
      </section>
    )
  }

export default Calculator;