import { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
      text: "Welcome to React!",
      count: 0 
    };
    this.changeMessage = this.changeMessage.bind(this);
    this.Increment=this.Increment.bind(this)
  }

  changeMessage() {
    this.setState({ text: "You clicked the button!" });
  }
  Increment(){
     if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    } else {
      console.log("maximum limit reached")
      alert("Maximum limit (10) reached!");
    }
  }
  
  Decrement(){
      if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      console.log("minimum limit is 0")
      alert("Minimum limit (0) reached!");
    }
    
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.Increment}>INCREMENT</button>
        <button onClick={()=>this.Decrement()}>DECREMENT</button>
        <h2>{this.state.text}</h2>
        <button onClick={this.changeMessage}>Click Me</button>
      </div>
    )
  }
}


export default Message;
