import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
        names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
        userInput: '',
        filteredNames: []
        }

    }

    updateInputString(val){
        this.setState({userInput: val});
    }
    
    // user inputs name
    // onclicks button
    // looks through an array
    // matches input name with array values
    confrimButton(userInput){
        
        var obj = this.state.names.filter( e => e.includes(userInput))
               this.setState({filteredNames: obj})
        
             }




    render() {
        return(
            <div className="puzzleBox filterStringPB">
            <h4> "Filter String" </h4>
            <span className="puzzleText">
            { JSON.stringify(this.state.names, null, 10) }
            </span>
            <input className="inputLine"
                onChange = {(e) => this.updateInputString(e.target.value)}>
            </input>
            <button className="confirmationButton"
            
                onClick ={ () => {this.confrimButton(this.state.userInput)}} >
            
            </button>
            <span className="resultsBox filterStringRB">
            { JSON.stringify(this.state.filteredNames, null, 10) }
            </span>
            
            
        </div>
        )
    }
}

export default FilterString;