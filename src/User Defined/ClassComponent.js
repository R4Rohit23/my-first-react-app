// here we will talk about class based component
// class components are similar to intitializing class in Java
import React from 'react';

class ClassComponent extends React.Component {
    // this function will be called when the component gets initiated
    constructor() {
        // this function executes the parent component's constructor function and your constructor has access to it
        super();
        // this is component properties or props
        // here all the props are stored
        this.state = {name: 'Rohit', profession: 'Coder'}
    }

    // setState is used to change the value of the state
    changeName = () => {
        this.setState({name: 'Mahesh'})
    }

    changeProfession = ()  => {
        this.setState({profession: 'Hacker'})
    }

    // it is called after component is rendered in the DOM
    componentDidMount() {
        setTimeout(() => {
            this.setState({profession: 'Programmer'})
        }, 3000)
    }

    // this method returns boolean value that specifies whether react should countinue to rendering or not
    // if false nothing will update
    // default is true
    shouldComponentUpdate() {
        return true;
    }

    // it is called after component is updated in the DOM
    componentDidUpdate() {
        alert("Component is updating...");
    }

    // render function render the HTML element
    // it is must
    render() {
        return (
            <div>
                <h1>Bhai mera nam {this.state.name} hai aur mai ek {this.state.profession} hu</h1>
                <h3>Bhai 3 sec ruk.. tu Programmer ban jainga without studying</h3>
                <button onClick={this.changeName}>Click here to change name</button>
                <button onClick={this.changeProfession}>Click here to change profession</button>
            </div>
        );
    }
}

export default ClassComponent;