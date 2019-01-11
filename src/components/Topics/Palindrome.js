import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state ={
            userInput: '',
            palindrome: '',
        }
    }
    
    updateInputLine(val){
        this.setState({userInput: val})
    }
    
    // user inputs val
    // clicks on button
    // function checks to see if word is the same spelled backwards
    // returns true/false

    lineChange(userInput){
            var arr = this.state.userInput   // spilt the input into multiple i's in array
                if (arr === arr.split("").reverse().join("")){
                    this.setState({palindrome: "true"})
                }
                else {this.setState({palindrome: "false"})}
            }
    
    render(){
        return(
           <div className="puzzleBox filterStringPB"> 
            <h4> Palindrome </h4>
               
                <input className="inputLine"
                    onChange = {(e) => this.updateInputLine(e.target.value)}> 

                </input>

                <button className="confirmationButton"
                    onClick ={ () => {this.lineChange(this.state.userInput)}} >
                </button>

                <span className="resultsBox"> {this.state.palindrome}
                </span>
           </div> 
        )
    }
}

export default Palindrome;
