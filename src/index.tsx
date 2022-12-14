import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { create, all } from 'mathjs';
import './index.css';

type CalculatorState = {
  calculation: string;
}

class App extends React.Component<{}, CalculatorState> {

  constructor(props) {
    super(props);

    this.state = {
      calculation: ""
    }
  }

  calculate = () => {
    const config = {};
    const math = create(all, config);

    this.setState({
      calculation: math.evaluate(this.state.calculation)
    })
  }

  addToCalculation = (value: String) => {
    this.setState({
      calculation: this.state.calculation + value
    });
  };

  clear = () => {
    this.setState({
      calculation: ""
    });
  }

  backspace = () => {
    this.setState({
      calculation: this.state.calculation.slice(0, -1)
    });
  }

  render() {
    return (
      <div className="App">
        <h1 id="title">React Calculator</h1>
        <div className="result-row">
          <p className="result">Result: {this.state.calculation}</p>
        </div>
        <div className="buttonsRow">
          <button className="numberButton" onClick={() => this.addToCalculation('7')}>7</button>
          <button className="numberButton" onClick={() => this.addToCalculation('8')}>8</button>
          <button className="numberButton"onClick={() => this.addToCalculation('9')}>9</button>
          <button className="operatorButton" id="divide" onClick={() => this.addToCalculation('/')}>/</button>
        </div>
        <div className="buttonsRow">
          <button className="numberButton" onClick={() => this.addToCalculation('4')}>4</button>
          <button className="numberButton" onClick={() => this.addToCalculation('5')}>5</button>
          <button className="numberButton" onClick={() => this.addToCalculation('6')}>6</button>
          <button className="operatorButton" id="multiply" onClick={() => this.addToCalculation('*')}>X</button>
        </div>
        <div className="buttonsRow">
          <button className="numberButton" onClick={() => this.addToCalculation('1')}>1</button>
          <button className="numberButton" onClick={() => this.addToCalculation('2')}>2</button>
          <button className="numberButton" onClick={() => this.addToCalculation('3')}>3</button>
          <button className="operatorButton" id="subtract" onClick={() => this.addToCalculation('-')}>-</button>
        </div>
        <div className="buttonsRow">
          <button id="zeroButton" className="numberButton" onClick={() => this.addToCalculation('0')}>0</button>
          <button className="numberButton" onClick={() => this.addToCalculation('.')}>.</button>
          <button className="operatorButton" id="addButton" onClick={() => this.addToCalculation('+')}>+</button>
        </div>
        <div className="buttonsRow">
          <button className="operatorButton" id="submit" onClick={() => this.calculate()}>Submit</button>
          <button className='operatorButton' id='backspace' onClick={() => this.backspace()}>Backspace</button>
          <button className='operatorButton' id='clear' onClick={() => this.clear()}>Clear</button>
        </div>
      </div>
    );
  }
}

document.title = "React Calculator";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
