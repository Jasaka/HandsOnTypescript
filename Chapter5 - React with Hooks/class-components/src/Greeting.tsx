import React from "react";

interface GreetingProps {
    name?: string
}

interface GreetingState {
    message: string
}

export default class Greeting extends React.Component<GreetingProps, GreetingState> {
    constructor(props: GreetingProps) {
        super(props);
        this.state = {
            message: Greeting.getNewMessage(props.name)
        }
    }

    static getNewMessage(name: string = ""){
        return `Hello from, ${name}`;
    }

    state: GreetingState;
    static getDerivedStateFromProps(props: GreetingProps, state: GreetingState){
        console.log("props:", props, "state:", state);
        if (props.name && props.name !== state.message){
            const newState = {...state};
            newState.message = Greeting.getNewMessage(props.name);
            return newState
        }
        return state;
    }

    render()  {
        console.log("rendering Greeting");
        if (!this.props.name) {
            return <div>no name given</div>;
        }
        return <div key={this.props.name}> {this.state.message} </div>;
    }
}