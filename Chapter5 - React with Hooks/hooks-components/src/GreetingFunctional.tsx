import React from "react";

interface GreetingProps {
    enteredName: string;
    message: string;
    greetingDispatcher: React.Dispatch<{ type: string, payload: string }>
}

export default function Greeting(props: GreetingProps) {
    console.log("rendering Greeting");

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.greetingDispatcher({type: "enteredName", payload: event.target.value});
        props.greetingDispatcher({type: "message", payload: event.target.value});
    }

    return (
        <div>
            <input value={props.enteredName} onChange={onChangeName}/>
            <div>
                {props.message}
            </div>
        </div>
    );
}