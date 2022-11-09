import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { create, all } from 'mathjs';

class App extends React.Component {

  state = {
    calculation: ""
  };

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
        <h1>Calculator</h1>
        <div className="buttonsRow">
          <input type="text" value={this.state.calculation}></input>
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
          <button className="numberButton" onClick={() => this.addToCalculation('0')}>0</button>
          <button className="operatorButton" id="add" onClick={() => this.addToCalculation('+')}>+</button>
          <button className="submit" id="submit" onClick={() => this.calculate()}>Submit</button>
          <button className='backspace' id='backspace' onClick={() => this.backspace()}>Backspace</button>
          <button className='clear' id='clear' onClick={() => this.clear()}>Clear</button>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
