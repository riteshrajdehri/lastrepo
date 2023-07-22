import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  //   text = "new text" // wrong way to change the state
  //   setText("new text") // correct way to change the state

  const handleUpClick = (event) => {
    console.log("uppercase was clicked" + text);
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success")
  };
  
  const handleLowerClick = (event) => {
    console.log("lowercase was click" + text);
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success")
  };
  
  const handleClearClick = (event) => {
    const newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("i m copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied!", "success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success")
  };

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'? 'white':'black' }} >
        <h1  >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor: props.mode === 'dark'? 'gray' : 'white', color: props.mode == 'dark'? 'white' : 'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          convert to Lowercasde
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove extra space
        </button>
      </div>
      <div className="container my-2" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0? text : 'please write somthing in textbox '}</p>
      </div>
    </>
  );
}
