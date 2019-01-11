import React, {Component} from 'react';



    class Sum extends Component {
        constructor(){
            super();
            this.state ={
                number1: 0,
                number2: 0,
                sum: null
            }
        }

       sumInput(val){
            this.setState({number1: parseInt(val, 10)})
       }

       sumInput2(val2){
        this.setState({number2: parseInt(val2, 10)})
   }
    
            // User inputs number1
            //user inputs number2
            //user clicks button "ADD"
            // adds number1+num2
            // total displays
   sumChange(num1,num2){
          let total = num1 + num2
            this.setState({sum: total})
   }
        render(){
            return(
                <div className="puzzleBox sumPB">
                    <h4>Sum</h4>
                    <input className="inputLine"
                    
                    onChange={(e) => this.sumInput(e.target.value)}>
                    
                    </input>
                    <input className="inputLine"
                    onChange={(e) => this.sumInput2(e.target.value)}>
                    </input>
                    <button className="confirmationButton"
                    onClick={ () => {this.sumChange(this.state.number1, this.state.number2)}} > Add
                    </button>
                    <span className="resultsBox"> {this.state.sum} </span>
                </div>
            )
        }
    }

export default Sum