import React, {useState} from "react";

const DisplayText = () => {
    const [txt, setTxt] = useState("");
    const [msg, setMsg] = useState("");

    const onChangedText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTxt(event.target.value);
    }

    const onClickShowMsg = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        setMsg(`Welcome to React Testing, ${txt}`);
    }

    return (
        <form>
            <div>
                <label>Enter your name:</label>
            </div>
            <div>
                <input data-testid="user-input" value={txt} onChange={onChangedText}/>
            </div>
            <div>
                <button data-testid="input-submit" onClick={onClickShowMsg}>Show Message</button>
            </div>
            <div>
                <label data-testid="final-msg">{msg}</label>
            </div>
        </form>
    );
}
export default DisplayText;