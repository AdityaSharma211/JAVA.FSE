import React from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // bind so `this` refers to the component instance inside the handlers
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  decrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  sayHello() {
    alert('Hello! Member1');
  }

  // Invokes multiple methods: increments the counter and says hello
  handleIncrementClick() {
    this.increment();
    this.sayHello();
  }

  // Invoked with an argument, e.g. sayWelcome('welcome')
  sayWelcome(message) {
    alert(message);
  }

  // Synthetic event handler - "OnPress"
  handleClick(event) {
    alert('I was clicked');
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.handleIncrementClick()}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={() => this.sayWelcome('welcome')}>Say welcome</button>
        <button onClick={this.handleClick}>Click on me</button>

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
