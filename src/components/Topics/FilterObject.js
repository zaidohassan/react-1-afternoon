import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
        
              userInput: '',
              filteredEmployees: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
      }

      // input name
      // click button
      // look through array of objects
      // filter out input name
    
      confrimButton(userInput){
        var obj = this.state.employees.filter((e, i, a) => { 
               if(e.hasOwnProperty(userInput)){
                   return e
               }  
               
        })
            this.setState({filteredEmployees: obj})
        
    }
    render(){
        return ( 
        <div className="puzzleBox filterObjectPB">
            <h4> "Filter Object" </h4>
            <span className="puzzleText">
            { JSON.stringify(this.state.employees, null, 10) }
            </span>
            <input className="inputLine"
                onChange = {(e) => this.handleChange(e.target.value)}>
            </input>
            <button className="confirmationButton"
            
                onClick ={ () => {this.confrimButton(this.state.userInput)}}>
            
            </button>
            <span className="resultsBox filterObjectRB">
            { JSON.stringify(this.state.filteredEmployees, null, 10)}
            </span>
            
            
        </div>
        )
    }
}

export default FilterObject;