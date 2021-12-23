import React, { Component } from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newAge: this.props.age
        };
    }
    
    // ageUp (age) {
    //     this.setState.newAge(age);
    //     this.setState({ newAge: this.state.newage +1 })
    // }

    render(props) {
        const {firstName, lastName, hairColor } = this.props;
        
        

        return(
            <div>
                <h1>{lastName}, {firstName} {this.state.newAge} </h1>
                <h3>Age:  <button onClick={(age) => this.setState({ newAge: this.state.newAge += 1})}>Click to get old</button>  </h3>
                <h3>Hair Color : {hairColor} </h3>
            </div>
            

        );
    }

}

export default PersonCard;