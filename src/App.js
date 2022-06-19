import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor(){ //Uses conductor to make class state
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => { //Arrow Function

        if(button === "="){ //If statement
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Jeffrey Wang Calculator</h1><br/>
                    <div className='Calculator'>
                        <ResultComponent result={this.state.result}/>
                        <KeyPadComponent onClick={this.onClick}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
