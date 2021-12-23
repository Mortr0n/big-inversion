import React, { Component } from 'react';

class PersonCard extends React.Component {
    constructor() {
        super();
        this.state = {
            newage: 0
        };
    }
    
    ageUp (age) {
        this.setState.newAge(age);
        this.setState({ newAge: this.state.newage +1 })
    }

    render(props) {
        const {firstName, lastName, age, hairColor } = this.props;
        
        

        return(
            <div>
                <h1>{lastName}, {firstName} {this.state.newage} </h1>
                <h3>Age:  <button onClick={(age) => this.setState({ age: this.state.newage += 1})}>Click{this.state.age}</button>  </h3>
                <h3>Hair Color : {hairColor} </h3>
            </div>
            

        );
    }

}

export default PersonCard;