import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    //console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
  }

  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
  }

  const handleClearText = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!","success");
  }

  const handleCopyText = () =>{
/*  var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);   
    document.getSelection().removeAllRanges(); */
    navigator.clipboard.writeText(text);              // since we are using navigator, we don't need to select the text.
    props.showAlert("Copied to clipboard!","success");
  }

  const RemoveExtraSpaces = () =>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!","success");
  }

  const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  //text ="Hello there"; --> wrong way to change the text
  //setText="newText";

  document.title="TextForge - Home";
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h2 className='mb-2'>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#322862':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClearText}>Clear Text</button>
        </div>
    </div>
    <div className='container my-4' style={{color: props.mode==='dark'?'white':'black'}}><hr/>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.<br/>
      {0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read.</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:<i>Enter something in the text box above to preview it here</i>}</p>
    </div>
    </>
  )
}
