// var element = React.createElement("p", null, "hello world");
const newMember = "Tran Ngoc Tu";

var element = (
  <div>
    <h1>hello world</h1>
    <h3>Welcome: {newMember}</h3>
    <p>This is hello world description</p>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.counter = 0
    this.state = {
      counter: 0,
    };
    // this.decrease = this.decrease.bind(this);
  }

  increase = (step) => {
    this.setState({
      counter: this.state.counter + step,
    });
  };

  // decrease() {
  //   this.setState({
  //     counter: this.state.counter - 1,
  //   });
  // }

  decrease = function () {
    this.setState({
      counter: this.state.counter - 1,
    });
  }.bind(this);

  render() {
    return (
      <div>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={() => this.increase(1)}>Increase 1</button>
        <button onClick={() => this.increase(2)}>Increase 2</button>
        <button onClick={this.decrease}>decrease</button>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));

class OnClock extends React.Component {
  constructor(props) {
    super(props);
    // setInterval(this.interval, 1000);
    this.state = {
      timer: "-- : -- : --",
    };
  }

  interval = () => {
    this.setState({
      timer: new Date().toLocaleTimeString(),
    });
  };

  start = () => {
    this.interval();
    this.running = setInterval(this.interval, 1000);
  };

  stop = () => {
    clearInterval(this.running);
    this.setState({
      timer: "-- : -- : --",
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.timer}</p>
        <button onClick={this.start}>Start onclock</button>
        <button onClick={this.stop}>Stop OnClock</button>
      </div>
    );
  }
}

ReactDOM.render(<OnClock />, document.getElementById("root"));

// setInterval(() => {
//   var onclock = (
//     <div>
//       <p>{new Date().toLocaleTimeString()}</p>
//     </div>
//   );
//   ReactDOM.render(onclock, document.getElementById("root"));
// }, 1000);


