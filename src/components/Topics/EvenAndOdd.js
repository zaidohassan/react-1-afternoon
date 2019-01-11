import React, { Component } from 'react'; 

class EvenAndOdd extends Component {
    constructor (){
       super();
       this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
       }
    }
    handleChange(val){
        this.setState({userInput: val });
    }

    assignEvenAndOdds(userInput){
        var arr = userInput.split(',');
        var evensArr = [];
        var oddArr = [];

        for (var i = 0; i < arr.length; i++) {
            if ( arr[i] % 2 === 0 ) {
                evensArr.push( parseInt(arr[i], 10) );
            } else {
                oddArr.push( parseInt(arr[i], 10) );
            }
          }
        this.setState({evenArray: evensArr , oddArray: oddArr})
    }

        render() {
            return (
               <div className= "puzzleBox evenAndOddPB">
                <h4> "Evens and Odds"</h4>
                <input className='inputLine'
                        value = {this.state.userInput}
                        onChange ={ (e) => this.handleChange(e.target.value)} />
                <button className="confrimationButton" 
                        onClick ={ () => {this.assignEvenAndOdds(this.state.userInput)}}> 
                    Spilt
                </button>

                <span className='resultsBox'> Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className='resultsBox'> Odds: { JSON.stringify(this.state.oddArray) } </span>

               
               </div>
            )
        }
}

export default EvenAndOdd;